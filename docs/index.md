---
layout: default
title: Home
---

# OpCon MCP Server Documentation

Welcome to the OpCon MCP Server documentation. This server enables AI agents and applications to interact with the SMA OpCon automation platform through the Model Context Protocol (MCP).

## Quick Links

- [Tool Reference](TOOL_REFERENCE.md) - Complete reference for all 257 available tools
- [Configuration Guide](CONFIGURATION.md) - Environment variable configuration
- [Integration Guide](INTEGRATION.md) - How to integrate with MCP clients
- [Examples](EXAMPLES.md) - Usage examples and common patterns
- [Project Summary](PROJECT_SUMMARY.md) - Project overview and architecture

## What is OpCon MCP Server?

The OpCon MCP Server is a bridge between AI agents (like Claude) and the SMA OpCon automation platform. It automatically generates MCP tools from the OpCon OpenAPI specification, providing a standardized way for AI to interact with OpCon's REST API.

### Key Features

- ✅ **257 Available Tools**: Complete coverage of OpCon REST API endpoints
- ✅ **65 Categories**: Tools organized by functional area (Jobs, Schedules, Machines, etc.)
- ✅ **Type Safety**: Written in TypeScript with full type definitions
- ✅ **Authentication**: Supports both token-based and username/password authentication
- ✅ **Easy Integration**: Works with Claude Desktop, MCP Inspector, and custom clients

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Access to an OpCon API server
- OpCon API credentials (token or username/password)

### Installation

```bash
# Clone the repository
git clone https://github.com/markcoleman/OpyConyMcpy.git
cd OpyConyMcpy

# Install dependencies
npm install

# Build the project
npm run build
```

### Basic Configuration

Set the required environment variables:

```bash
export OPCON_BASE_URL="https://your-opcon-server:9010"
export OPCON_TOKEN="your-application-token"
```

For more configuration options, see the [Configuration Guide](CONFIGURATION.md).

## Available Tools by Category

The server provides 257 tools organized into the following categories:

- **AccessCodes** (5 tools) - Manage OpCon access codes
- **BatchUsers** (4 tools) - Batch user management
- **Calendars** (8 tools) - Calendar operations
- **DailyJobs** (40 tools) - Daily job management and monitoring
- **DailySchedules** (11 tools) - Daily schedule operations
- **GlobalProperties** (5 tools) - Global property management
- **Machines** (10 tools) - Machine configuration and monitoring
- **MasterJobs** (3 tools) - Master job definitions
- **MasterSchedules** (3 tools) - Master schedule management
- **Resources** (5 tools) - Resource management
- **Roles** (4 tools) - Role-based access control
- **Users** (5 tools) - User management
- **And 53 more categories...**

For a complete list of all tools with detailed parameter information, see the [Tool Reference](TOOL_REFERENCE.md).

## Common Use Cases

### Job Monitoring
Monitor job status and execution:
```json
{
  "name": "getApiDailyjobs",
  "arguments": {
    "date": "2024-01-15"
  }
}
```

### Schedule Management
Manage master and daily schedules:
```json
{
  "name": "getApiMasterSchedules",
  "arguments": {
    "Limit": 20
  }
}
```

### Resource Management
Check and manage OpCon resources:
```json
{
  "name": "getApiResources",
  "arguments": {
    "Limit": 50
  }
}
```

## Integration Examples

### Claude Desktop

Add to your Claude Desktop configuration:

```json
{
  "mcpServers": {
    "opcon": {
      "command": "node",
      "args": ["/path/to/OpyConyMcpy/dist/index.js"],
      "env": {
        "OPCON_BASE_URL": "https://opcon-server:9010",
        "OPCON_TOKEN": "your-token-here"
      }
    }
  }
}
```

See the [Integration Guide](INTEGRATION.md) for more details.

## Documentation

- **[Tool Reference](TOOL_REFERENCE.md)** - Comprehensive reference for all 257 tools, including parameters, return types, and descriptions
- **[Configuration Guide](CONFIGURATION.md)** - All environment variables and configuration options
- **[Integration Guide](INTEGRATION.md)** - How to integrate with various MCP clients (Claude Desktop, MCP Inspector, custom clients)
- **[Examples](EXAMPLES.md)** - Usage examples and common patterns
- **[Project Summary](PROJECT_SUMMARY.md)** - Project architecture and technical details

## Development

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### Building

```bash
npm run build
```

## Contributing

Contributions are welcome! Please see the [Contributing Guide](../CONTRIBUTING.md) in the main repository.

## License

MIT License - see [LICENSE](../LICENSE) for details.

## Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/markcoleman/OpyConyMcpy/issues)
- **Documentation**: Browse this documentation site
- **OpCon Documentation**: [Official OpCon API Documentation](https://help.smatechnologies.com/opcon/core/)

## Resources

- [Model Context Protocol](https://modelcontextprotocol.io) - Learn about MCP
- [OpCon Documentation](https://help.smatechnologies.com/opcon/core/) - OpCon platform documentation
- [GitHub Repository](https://github.com/markcoleman/OpyConyMcpy) - Source code and issues
