# OpCon MCP Server

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server for interacting with the SMA OpCon REST API. This server enables AI agents and applications to interact with OpCon automation platform through a standardized protocol.

## Features

- ✅ **Complete API Coverage**: Automatically generates MCP tools from OpenAPI specification
- ✅ **Authentication Support**: Token-based and username/password authentication
- ✅ **Type Safety**: Written in TypeScript with full type definitions
- ✅ **Comprehensive Testing**: Unit tests with Jest
- ✅ **CI/CD**: GitHub Actions workflows for testing, linting, and security
- ✅ **Development Tools**: DevContainer and VSCode integration
- ✅ **Best Practices**: ESLint, Prettier, and security scanning

## Prerequisites

- Node.js 18 or higher
- Access to an OpCon API server
- OpCon API credentials (token or username/password)

## Installation

```bash
npm install
```

## Configuration

The server is configured via environment variables:

| Variable | Required | Description |
|----------|----------|-------------|
| `OPCON_BASE_URL` | Yes | OpCon API base URL (e.g., `https://opcon-server:9010`) |
| `OPCON_TOKEN` | No* | Application token for authentication |
| `OPCON_USERNAME` | No* | Username for authentication |
| `OPCON_PASSWORD` | No* | Password for authentication |
| `OPCON_VERIFY_TLS` | No | Set to `false` to disable TLS verification (default: `true`) |

*Either `OPCON_TOKEN` or both `OPCON_USERNAME` and `OPCON_PASSWORD` are required.

## Usage

### Running the Server

```bash
# Development mode
npm run dev

# Production mode (after building)
npm run build
node dist/index.js
```

### Using with MCP Clients

Configure your MCP client (e.g., Claude Desktop, MCP Inspector) to use this server:

```json
{
  "mcpServers": {
    "opcon": {
      "command": "node",
      "args": ["/path/to/OpyConyMcpy/dist/index.js"],
      "env": {
        "OPCON_BASE_URL": "https://your-opcon-server:9010",
        "OPCON_TOKEN": "your-token-here"
      }
    }
  }
}
```

### Available Tools

The server automatically generates MCP tools from the OpCon OpenAPI specification. Each API endpoint becomes a callable tool. Examples include:

- `getApiAccesscodes` - Get access codes
- `getApiMasterSchedules` - Get master schedules
- `postApiDailyjobs` - Create daily jobs
- And many more (155+ endpoints)

## Development

### Setup

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Linting and Formatting

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Check formatting
npm run format:check

# Fix formatting
npm run format
```

### Building

```bash
npm run build
```

## DevContainer Support

This project includes a DevContainer configuration for VS Code. To use it:

1. Install [Docker](https://www.docker.com/) and [VS Code](https://code.visualstudio.com/)
2. Install the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension
3. Open the project in VS Code
4. Click "Reopen in Container" when prompted

## VS Code Integration

The project includes VS Code settings and recommended extensions:

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Jest Runner**: Run tests from the editor
- **TypeScript**: Enhanced TypeScript support

## CI/CD

GitHub Actions workflows are configured for:

- **CI**: Linting, testing, and building on multiple Node.js versions
- **Security**: CodeQL analysis, dependency review, and npm audit

## Project Structure

```
OpyConyMcpy/
├── .devcontainer/          # DevContainer configuration
├── .github/
│   └── workflows/          # GitHub Actions workflows
├── .vscode/                # VS Code settings
├── src/
│   ├── index.ts           # Main server entry point
│   ├── client.ts          # OpCon API client
│   ├── parser.ts          # OpenAPI spec parser
│   └── types.ts           # Type definitions
├── tests/                  # Unit tests
├── swagger.json           # OpCon OpenAPI specification
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── jest.config.js         # Jest configuration
├── .eslintrc.json         # ESLint configuration
└── .prettierrc            # Prettier configuration
```

## Architecture

The MCP server architecture consists of:

1. **Parser**: Reads the OpenAPI specification and generates MCP tool definitions
2. **Client**: Handles HTTP communication with the OpCon API, including authentication
3. **Server**: Implements the MCP protocol and routes tool calls to the appropriate API endpoints

### Flow

```
MCP Client → MCP Server → OpCon Client → OpCon REST API
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## Security

- Always use HTTPS in production
- Store credentials securely (use environment variables, never commit them)
- Enable TLS verification unless absolutely necessary
- Regularly update dependencies
- Review security scan results in GitHub Actions

## License

MIT

## Support

For issues and questions, please use the GitHub issue tracker.