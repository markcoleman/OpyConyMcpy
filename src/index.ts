#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from '@modelcontextprotocol/sdk/types.js';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { OpConClient } from './client.js';
import {
  parseOpenApiSpec,
  generateToolFromEndpoint,
  buildUrl,
  extractQueryParams,
} from './parser.js';
import { OpConConfig, ApiEndpoint } from './types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * OpCon MCP Server
 */
export class OpConMcpServer {
  private server: Server;
  private client: OpConClient;
  private endpoints: ApiEndpoint[];
  private tools: Tool[];

  constructor(config: OpConConfig, swaggerPath: string) {
    this.client = new OpConClient(config);
    this.endpoints = parseOpenApiSpec(swaggerPath);
    this.tools = this.endpoints.map((endpoint) => generateToolFromEndpoint(endpoint));

    this.server = new Server(
      {
        name: 'opcon-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupHandlers();
  }

  /**
   * Setup MCP request handlers
   */
  private setupHandlers(): void {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: this.tools,
      };
    });

    // Execute tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const toolName = request.params.name;
      const args = request.params.arguments || {};

      // Find the endpoint for this tool
      const endpoint = this.endpoints.find((e) => {
        const generatedName = generateToolFromEndpoint(e).name;
        return generatedName === toolName;
      });

      if (!endpoint) {
        throw new Error(`Unknown tool: ${toolName}`);
      }

      try {
        // Ensure authenticated
        await this.client.authenticate();

        // Build URL with path parameters
        const url = buildUrl(endpoint.path, args);

        // Extract query parameters
        const queryParams = extractQueryParams(endpoint, args);

        // Make the API request
        const result = await this.client.request(endpoint.method, url, {
          params: queryParams,
        });

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${errorMessage}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  /**
   * Start the MCP server
   */
  async start(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('OpCon MCP Server running on stdio');
  }
}

/**
 * Main entry point
 */
async function main() {
  // Read configuration from environment variables
  const config: OpConConfig = {
    baseUrl: process.env.OPCON_BASE_URL || '',
    token: process.env.OPCON_TOKEN,
    username: process.env.OPCON_USERNAME,
    password: process.env.OPCON_PASSWORD,
    verifyTls: process.env.OPCON_VERIFY_TLS !== 'false',
  };

  if (!config.baseUrl) {
    console.error('Error: OPCON_BASE_URL environment variable is required');
    process.exit(1);
  }

  if (!config.token && (!config.username || !config.password)) {
    console.error('Error: Either OPCON_TOKEN or OPCON_USERNAME and OPCON_PASSWORD are required');
    process.exit(1);
  }

  // Find swagger.json - look in parent directory when running from dist
  const swaggerPath = join(__dirname, '..', 'swagger.json');

  const server = new OpConMcpServer(config, swaggerPath);
  await server.start();
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });
}
