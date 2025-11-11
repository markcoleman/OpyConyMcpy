# Examples

This directory contains example scripts and configurations for using the OpCon MCP Server.

## Available Examples

### test-server.js

A simple test script that validates the server setup without requiring an actual OpCon instance.

**Usage:**
```bash
node examples/test-server.js
```

**What it does:**
- Parses the OpenAPI specification
- Generates MCP tools from the API endpoints
- Shows statistics about available tools
- Validates environment configuration

**Output:**
- Total number of API endpoints (257)
- Total number of MCP tools generated
- Sample tools with descriptions
- HTTP method distribution
- Top API categories
- Environment configuration status

## Running the Examples

### Prerequisites

1. Build the project first:
   ```bash
   npm run build
   ```

2. (Optional) Set environment variables for live testing:
   ```bash
   export OPCON_BASE_URL="https://your-opcon-server:9010"
   export OPCON_TOKEN="your-token"
   ```

### Test Server

This example works without OpCon credentials:

```bash
node examples/test-server.js
```

Expected output:
```
🧪 Testing OpCon MCP Server

1️⃣  Parsing OpenAPI specification...
   ✅ Successfully parsed 257 API endpoints

2️⃣  Generating MCP tools...
   ✅ Successfully generated 257 MCP tools

...
```

## Creating Your Own Examples

To create additional examples:

1. Create a new file in the `examples/` directory
2. Import the necessary modules:
   ```javascript
   import { parseOpenApiSpec, generateToolFromEndpoint } from '../dist/parser.js';
   import { OpConClient } from '../dist/client.js';
   ```

3. Use the utilities to interact with the server
4. Document your example in this README

## Integration Examples

For full integration examples with MCP clients, see:
- [docs/INTEGRATION.md](../docs/INTEGRATION.md) - Complete integration guide
- [docs/EXAMPLES.md](../docs/EXAMPLES.md) - API usage examples

## Common Use Cases

### Listing Available Tools

```javascript
import { parseOpenApiSpec, generateToolFromEndpoint } from '../dist/parser.js';

const endpoints = parseOpenApiSpec('./swagger.json');
const tools = endpoints.map(e => generateToolFromEndpoint(e));

console.log('Available tools:', tools.map(t => t.name));
```

### Filtering Tools by Category

```javascript
const dailyJobTools = endpoints
  .filter(e => e.tags?.includes('DailyJobs'))
  .map(e => generateToolFromEndpoint(e));

console.log('Daily job tools:', dailyJobTools.length);
```

### Checking Tool Parameters

```javascript
const tool = generateToolFromEndpoint(endpoints[0]);
console.log('Tool:', tool.name);
console.log('Parameters:', Object.keys(tool.inputSchema.properties || {}));
console.log('Required:', tool.inputSchema.required || []);
```

## Troubleshooting

### Module Not Found

If you get "module not found" errors:
```bash
npm run build
```

### Permission Denied

If you get permission errors on Linux/Mac:
```bash
chmod +x examples/test-server.js
```

### Import Errors

Make sure you're using Node.js 18 or higher:
```bash
node --version
```

## Contributing Examples

Have a useful example? Please contribute!

1. Create your example file
2. Test it thoroughly
3. Document it in this README
4. Submit a pull request

See [CONTRIBUTING.md](../CONTRIBUTING.md) for details.
