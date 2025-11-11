# Environment Configuration

This document describes all environment variables used by the OpCon MCP Server.

## Required Variables

### OPCON_BASE_URL

**Type:** String  
**Required:** Yes  
**Description:** The base URL of your OpCon REST API server.

**Example:**
```bash
export OPCON_BASE_URL="https://opcon-server.example.com:9010"
```

## Authentication Variables

You must provide either a token OR username and password.

### OPCON_TOKEN

**Type:** String  
**Required:** No (if username/password provided)  
**Description:** Application token for OpCon API authentication.

**Example:**
```bash
export OPCON_TOKEN="your-secure-token-here"
```

### OPCON_USERNAME

**Type:** String  
**Required:** No (if token provided)  
**Description:** OpCon username for authentication.

**Example:**
```bash
export OPCON_USERNAME="admin"
```

### OPCON_PASSWORD

**Type:** String  
**Required:** No (if token provided)  
**Description:** OpCon password for authentication.

**Example:**
```bash
export OPCON_PASSWORD="your-secure-password"
```

## Optional Variables

### OPCON_VERIFY_TLS

**Type:** Boolean  
**Required:** No  
**Default:** `true`  
**Description:** Whether to verify TLS/SSL certificates when connecting to the OpCon API.

**Example:**
```bash
# Disable TLS verification (not recommended for production)
export OPCON_VERIFY_TLS="false"

# Enable TLS verification (default)
export OPCON_VERIFY_TLS="true"
```

**Warning:** Only disable TLS verification in development environments with self-signed certificates. Always use proper certificates in production.

## Configuration Examples

### Using Token Authentication

```bash
export OPCON_BASE_URL="https://opcon.example.com:9010"
export OPCON_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Using Username/Password Authentication

```bash
export OPCON_BASE_URL="https://opcon.example.com:9010"
export OPCON_USERNAME="apiuser"
export OPCON_PASSWORD="SecureP@ssw0rd"
```

### Development Environment (Self-Signed Certificate)

```bash
export OPCON_BASE_URL="https://localhost:9010"
export OPCON_TOKEN="dev-token"
export OPCON_VERIFY_TLS="false"
```

## Security Best Practices

1. **Never commit credentials** to version control
2. **Use tokens over passwords** when possible
3. **Rotate tokens regularly**
4. **Use environment-specific configurations**
5. **Enable TLS verification** in production
6. **Restrict API access** to necessary IP addresses
7. **Use least-privilege principles** for API credentials
8. **Store credentials securely** (e.g., vault, secrets manager)
