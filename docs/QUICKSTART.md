# Quick Start Guide

Get up and running with OpCon MCP Server in minutes.

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/markcoleman/OpyConyMcpy.git
   cd OpyConyMcpy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

## Configuration

### Option 1: Token Authentication (Recommended)

Set environment variables:

```bash
export OPCON_BASE_URL="https://your-opcon-server:9010"
export OPCON_TOKEN="your-application-token"
```

### Option 2: Username/Password Authentication

```bash
export OPCON_BASE_URL="https://your-opcon-server:9010"
export OPCON_USERNAME="your-username"
export OPCON_PASSWORD="your-password"
```

### Optional: Disable TLS Verification (Development Only)

```bash
export OPCON_VERIFY_TLS="false"
```

## Usage

### Test with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```

### Use with Claude Desktop

1. Find your configuration file:
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
   - **Linux**: `~/.config/Claude/claude_desktop_config.json`

2. Add the server configuration:

```json
{
  "mcpServers": {
    "opcon": {
      "command": "node",
      "args": ["/absolute/path/to/OpyConyMcpy/dist/index.js"],
      "env": {
        "OPCON_BASE_URL": "https://your-opcon-server:9010",
        "OPCON_TOKEN": "your-token-here"
      }
    }
  }
}
```

3. Restart Claude Desktop

## Your First Queries

Once configured, try these prompts in Claude:

- "List all access codes in OpCon"
- "Show me today's daily jobs"
- "Get master schedules"
- "Check the status of machines"

## Common Commands

### Development

```bash
# Run in development mode with auto-reload
npm run dev

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

### Troubleshooting

**Server won't start?**
- Check Node.js version: `node --version` (must be 18+)
- Verify environment variables are set: `echo $OPCON_BASE_URL`
- Check build artifacts exist: `ls dist/`

**Authentication failed?**
- Verify token is valid and not expired
- Check network connectivity to OpCon server
- For self-signed certificates, set `OPCON_VERIFY_TLS=false`

**Tools not appearing?**
- Verify `swagger.json` exists in the project root
- Check server logs for parsing errors

## Next Steps

- Browse the [Tool Reference](TOOL_REFERENCE.md) to see all 257 available tools
- Read the [Configuration Guide](CONFIGURATION.md) for advanced setup
- Check out [Examples](EXAMPLES.md) for common usage patterns
- Review the [Integration Guide](INTEGRATION.md) for custom client integration

## Support

- **Issues**: [GitHub Issues](https://github.com/markcoleman/OpyConyMcpy/issues)
- **Documentation**: [Full Documentation](index.md)
- **OpCon API Docs**: [OpCon Help](https://help.smatechnologies.com/opcon/core/)
