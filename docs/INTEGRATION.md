# Integration Guide

This guide demonstrates how to integrate the OpCon MCP Server with various MCP clients.

## Claude Desktop Integration

### Prerequisites
- Claude Desktop app installed
- OpCon API access credentials

### Configuration Steps

1. Locate your Claude Desktop configuration file:
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
   - **Linux**: `~/.config/Claude/claude_desktop_config.json`

2. Add the OpCon MCP server configuration:

```json
{
  "mcpServers": {
    "opcon": {
      "command": "node",
      "args": ["/absolute/path/to/OpyConyMcpy/dist/index.js"],
      "env": {
        "OPCON_BASE_URL": "https://your-opcon-server:9010",
        "OPCON_TOKEN": "your-application-token"
      }
    }
  }
}
```

3. Restart Claude Desktop

4. Verify the server is connected by checking available tools

### Example Prompts

Once configured, you can use prompts like:

- "List all access codes in OpCon"
- "Show me the master schedules"
- "Get daily jobs for today"
- "Check the status of job XYZ"

## MCP Inspector (Testing)

For testing and development, use the MCP Inspector:

```bash
# Install globally (optional)
npm install -g @modelcontextprotocol/inspector

# Build the server first
npm run build

# Run the inspector
npx @modelcontextprotocol/inspector node dist/index.js
```

Set the environment variables:
```bash
export OPCON_BASE_URL="https://your-server:9010"
export OPCON_TOKEN="your-token"
npx @modelcontextprotocol/inspector node dist/index.js
```

## VS Code Integration

You can test the server directly in VS Code:

1. Open the integrated terminal
2. Set environment variables:
   ```bash
   export OPCON_BASE_URL="https://your-server:9010"
   export OPCON_TOKEN="your-token"
   ```
3. Run the server:
   ```bash
   npm run dev
   ```

## Custom MCP Client

To integrate with a custom MCP client:

```typescript
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { spawn } from 'child_process';

const transport = new StdioClientTransport({
  command: 'node',
  args: ['dist/index.js'],
  env: {
    ...process.env,
    OPCON_BASE_URL: 'https://your-server:9010',
    OPCON_TOKEN: 'your-token',
  },
});

const client = new Client({
  name: 'my-client',
  version: '1.0.0',
}, {
  capabilities: {},
});

await client.connect(transport);

// List available tools
const tools = await client.listTools();
console.log('Available tools:', tools);

// Call a tool
const result = await client.callTool({
  name: 'getApiAccesscodes',
  arguments: {
    Limit: 10,
  },
});
console.log('Result:', result);
```

## Docker Integration

Create a Dockerfile for containerized deployment:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY dist ./dist
COPY swagger.json ./

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
```

Build and run:
```bash
docker build -t opcon-mcp-server .
docker run -e OPCON_BASE_URL=https://server:9010 \
           -e OPCON_TOKEN=token \
           opcon-mcp-server
```

## Troubleshooting

### Server Not Starting

1. **Check Node.js version**: Must be 18 or higher
   ```bash
   node --version
   ```

2. **Verify environment variables**:
   ```bash
   echo $OPCON_BASE_URL
   echo $OPCON_TOKEN
   ```

3. **Check build artifacts**:
   ```bash
   ls -la dist/
   ```

### Authentication Errors

1. **Token authentication**:
   - Verify token is valid
   - Check token hasn't expired
   - Ensure token has necessary permissions

2. **Username/Password authentication**:
   - Verify credentials are correct
   - Check network connectivity to OpCon server

3. **TLS errors**:
   - For self-signed certificates, set `OPCON_VERIFY_TLS=false`
   - Only use this in development environments

### Tools Not Appearing

1. **Check swagger.json exists**:
   ```bash
   ls -la swagger.json
   ```

2. **Verify OpenAPI spec is valid**:
   ```bash
   npm install -g @apidevtools/swagger-cli
   swagger-cli validate swagger.json
   ```

3. **Check server logs** for parsing errors

### Connection Issues

1. **Verify OpCon API is accessible**:
   ```bash
   curl -k https://your-server:9010/api/health
   ```

2. **Check firewall rules**

3. **Verify port is correct** (default: 9010)

## Best Practices

1. **Use tokens over passwords** for better security
2. **Rotate tokens regularly**
3. **Use environment-specific configurations**
4. **Enable TLS verification in production**
5. **Monitor API usage and rate limits**
6. **Keep the server updated** with latest dependencies
7. **Review logs regularly** for errors or unusual activity

## Additional Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [OpCon API Documentation](https://help.smatechnologies.com/opcon/core/)
- [Project GitHub Repository](https://github.com/markcoleman/OpyConyMcpy)
