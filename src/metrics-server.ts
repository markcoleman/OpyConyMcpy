#!/usr/bin/env node

import http from 'http';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { OpConConfig } from './types.js';
import { OpConMcpServer } from './index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * HTTP server for exposing Prometheus metrics
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

  // Create server with metrics enabled
  const mcpServer = new OpConMcpServer(config, swaggerPath, true);

  // Get port from environment or use default
  const port = parseInt(process.env.OPCON_METRICS_PORT || '9090', 10);

  // Create HTTP server for metrics
  const server = http.createServer(async (req, res) => {
    if (req.url === '/metrics') {
      const metrics = await mcpServer.getMetrics();
      if (metrics) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(metrics);
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Metrics not available');
      }
    } else if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok' }));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    }
  });

  server.listen(port, () => {
    console.log(`Metrics server running on http://localhost:${port}`);
    console.log(`Metrics available at http://localhost:${port}/metrics`);
    console.log(`Health check available at http://localhost:${port}/health`);
  });

  // Handle graceful shutdown
  process.on('SIGTERM', () => {
    console.log('Received SIGTERM, shutting down gracefully...');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });

  process.on('SIGINT', () => {
    console.log('Received SIGINT, shutting down gracefully...');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Failed to start metrics server:', error);
    process.exit(1);
  });
}
