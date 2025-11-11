# Contributing to OpCon MCP Server

Thank you for your interest in contributing to the OpCon MCP Server! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help maintain a welcoming environment

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Git
- A code editor (VS Code recommended)

### Setup Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/OpyConyMcpy.git
   cd OpyConyMcpy
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Using DevContainer (Recommended)

1. Install Docker and VS Code with Remote Containers extension
2. Open the project in VS Code
3. Click "Reopen in Container" when prompted
4. All dependencies will be installed automatically

## Development Workflow

### Making Changes

1. Make your changes in the appropriate files
2. Write or update tests for your changes
3. Run tests to ensure they pass:
   ```bash
   npm test
   ```

4. Run linter and fix any issues:
   ```bash
   npm run lint
   npm run lint:fix
   ```

5. Format your code:
   ```bash
   npm run format
   ```

6. Build the project:
   ```bash
   npm run build
   ```

### Testing

- Write unit tests for all new functionality
- Maintain or improve code coverage
- Test edge cases and error conditions
- Run the full test suite before submitting PR

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode (during development)
npm run test:watch
```

### Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use async/await instead of promises when possible

The project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

Configuration is automated, just run:
```bash
npm run lint:fix
npm run format
```

## Project Structure

```
OpyConyMcpy/
├── src/
│   ├── index.ts       # Main entry point and MCP server
│   ├── client.ts      # OpCon API client
│   ├── parser.ts      # OpenAPI spec parser
│   └── types.ts       # Type definitions
├── tests/
│   ├── client.test.ts # Client tests
│   └── parser.test.ts # Parser tests
├── docs/              # Documentation
├── .github/
│   └── workflows/     # CI/CD workflows
└── ...
```

## Submitting Changes

### Pull Request Process

1. Update documentation for any user-facing changes
2. Add or update tests as needed
3. Ensure all tests pass
4. Update README.md if adding new features
5. Create a pull request with a clear description

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] No new warnings
```

### Commit Messages

Use clear, descriptive commit messages:

```
feat: add support for batch operations
fix: resolve authentication timeout issue
docs: update integration guide
test: add tests for error handling
chore: update dependencies
```

Prefixes:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `test`: Tests
- `chore`: Maintenance
- `refactor`: Code refactoring
- `perf`: Performance improvement

## Types of Contributions

### Bug Reports

When reporting bugs, include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details (Node version, OS, etc.)
- Error messages and stack traces

### Feature Requests

When requesting features:
- Describe the problem you're trying to solve
- Explain your proposed solution
- Consider alternative approaches
- Think about backward compatibility

### Code Contributions

Areas where contributions are welcome:
- Bug fixes
- New features
- Performance improvements
- Documentation improvements
- Test coverage improvements
- TypeScript type improvements

### Documentation

Documentation improvements are always welcome:
- Fix typos and grammar
- Improve clarity
- Add examples
- Update outdated information
- Translate documentation

## Development Tips

### Running the Server Locally

```bash
# Set environment variables
export OPCON_BASE_URL="https://your-server:9010"
export OPCON_TOKEN="your-token"

# Run in development mode
npm run dev
```

### Debugging

1. Use VS Code debugger:
   - Set breakpoints in your code
   - Press F5 to start debugging
   - Use the Debug Console

2. Add console.error() for server-side logging:
   ```typescript
   console.error('Debug info:', someVariable);
   ```

### Testing with MCP Inspector

```bash
npm run build
export OPCON_BASE_URL="https://your-server:9010"
export OPCON_TOKEN="your-token"
npx @modelcontextprotocol/inspector node dist/index.js
```

## Release Process

(For maintainers)

1. Update version in package.json
2. Update CHANGELOG.md
3. Create a git tag
4. Push tag to trigger release workflow
5. Publish to npm (if applicable)

## Getting Help

- Open an issue for bugs or feature requests
- Check existing issues before creating new ones
- Ask questions in discussions
- Review documentation first

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🎉
