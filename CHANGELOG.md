# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-11

### Added
- Initial release of OpCon MCP Server
- Model Context Protocol (MCP) server implementation for OpCon REST API
- Automatic tool generation from OpenAPI specification (257 tools from OpCon API)
- Support for all OpCon API endpoints including:
  - Access codes management
  - Daily jobs and schedules
  - Machines and agents
  - Calendars and properties
  - Service requests
  - And 150+ more endpoints
- Authentication support:
  - Token-based authentication
  - Username/password authentication
  - TLS/SSL verification configuration
- OpCon API client with full HTTP method support
- OpenAPI specification parser
- Comprehensive test suite:
  - Unit tests for parser module
  - Unit tests for client module
  - 20 tests with good coverage
  - Jest configuration for TypeScript and ESM
- CI/CD workflows:
  - Automated testing on Node.js 18, 20, and 22
  - ESLint code linting
  - Prettier code formatting
  - Security scanning with CodeQL
  - NPM audit for dependency vulnerabilities
  - Dependency review for pull requests
- Development environment support:
  - DevContainer configuration for VS Code
  - VS Code settings and recommended extensions
  - Environment configuration templates
- Documentation:
  - Comprehensive README with setup instructions
  - Configuration guide (CONFIGURATION.md)
  - API usage examples (EXAMPLES.md)
  - Integration guide (INTEGRATION.md)
  - Contributing guidelines (CONTRIBUTING.md)
  - Example scripts for testing
- Type safety:
  - Full TypeScript implementation
  - Strict type checking
  - Type definitions for all modules
- Best practices:
  - ESLint 9 with TypeScript support
  - Prettier for consistent formatting
  - Proper error handling
  - Security-first approach
  - Minimal dependencies

### Security
- GitHub Actions permissions properly scoped (contents: read)
- CodeQL security scanning enabled
- NPM audit integration
- TLS/SSL verification support
- Secure credential handling via environment variables
- No hardcoded secrets or credentials

### Technical Details
- Built with TypeScript 5.9
- Uses @modelcontextprotocol/sdk 1.21
- Node.js 18+ required
- ES Modules (ESM) support
- Axios for HTTP client
- Jest for testing

## [Unreleased]

### Planned
- Additional example scripts
- Performance optimizations
- Enhanced error messages
- More comprehensive test coverage
- Support for request body parameters in POST/PUT requests
- Batch operation support
- Rate limiting configuration
- Caching for frequently accessed data
- Metrics and monitoring support

---

## Version History

- **1.0.0** (2024-11-11) - Initial release with full MCP server implementation

## Links

- [Repository](https://github.com/markcoleman/OpyConyMcpy)
- [Issues](https://github.com/markcoleman/OpyConyMcpy/issues)
- [Pull Requests](https://github.com/markcoleman/OpyConyMcpy/pulls)

## Notes

This changelog is maintained according to [Keep a Changelog](https://keepachangelog.com/) principles.
Version numbers follow [Semantic Versioning](https://semver.org/).
