# API Usage Examples

This document provides examples of using the OpCon MCP Server with various tools and scenarios.

## MCP Client Configuration

### Claude Desktop

Add to your Claude Desktop configuration file:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "opcon": {
      "command": "node",
      "args": ["/absolute/path/to/OpyConyMcpy/dist/index.js"],
      "env": {
        "OPCON_BASE_URL": "https://opcon.example.com:9010",
        "OPCON_TOKEN": "your-token-here"
      }
    }
  }
}
```

### MCP Inspector

For testing and development:

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```

## Example Tool Calls

### List Access Codes

```json
{
  "name": "getApiAccesscodes",
  "arguments": {
    "Limit": 10,
    "Offset": 0
  }
}
```

### Get Specific Access Code

```json
{
  "name": "getApiAccesscodes",
  "arguments": {
    "id": "123"
  }
}
```

### List Master Schedules

```json
{
  "name": "getApiMasterSchedules",
  "arguments": {
    "Limit": 20,
    "Offset": 0
  }
}
```

### Get Daily Jobs

```json
{
  "name": "getApiDailyjobs",
  "arguments": {
    "date": "2024-01-15"
  }
}
```

## Common Patterns

### Pagination

Most list endpoints support pagination:

```json
{
  "name": "getApiAccesscodes",
  "arguments": {
    "Limit": 50,
    "Offset": 0
  }
}
```

For the next page:

```json
{
  "name": "getApiAccesscodes",
  "arguments": {
    "Limit": 50,
    "Offset": 50
  }
}
```

### Filtering

Use query parameters for filtering:

```json
{
  "name": "getApiAccesscodes",
  "arguments": {
    "Name": "Production*",
    "Limit": 100
  }
}
```

### Sorting

Use SortOrders parameter:

```json
{
  "name": "getApiAccesscodes",
  "arguments": {
    "SortOrders": ["name:desc"]
  }
}
```

## Use Cases with AI Agents

### Monitoring Jobs

**User:** "Check if the daily backup job completed successfully today"

**Agent:** The agent would call:
1. `getApiDailyjobs` with today's date
2. Filter for "backup" in the job name
3. Check the status field

### Schedule Management

**User:** "Create a new schedule for the weekly reports"

**Agent:** The agent would call:
1. `postApiMasterSchedules` to create the schedule
2. `postApiMasterjobs` to add jobs to the schedule

### Access Control

**User:** "List all users with access to the Production environment"

**Agent:** The agent would call:
1. `getApiAccesscodes` filtered by "Production"
2. Check the associated users

## Error Handling

All tools return errors in a consistent format:

```json
{
  "content": [
    {
      "type": "text",
      "text": "Error: Authentication failed: Invalid token"
    }
  ],
  "isError": true
}
```

Common errors:
- **Authentication failed**: Check your token/credentials
- **Not found**: Resource doesn't exist
- **Bad request**: Invalid parameters
- **Forbidden**: Insufficient permissions

## Best Practices

1. **Use pagination** for large result sets
2. **Cache authentication tokens** when possible
3. **Filter at the API level** rather than client-side
4. **Handle errors gracefully** in agent prompts
5. **Use specific queries** to reduce data transfer
6. **Check permissions** before attempting operations
7. **Monitor rate limits** if applicable

## Advanced Examples

### Chaining Multiple Calls

To create a complete schedule with jobs:

```javascript
// 1. Create schedule
const schedule = await callTool("postApiMasterSchedules", {
  name: "WeeklyReports",
  documentation: "Weekly reporting schedule"
});

// 2. Add jobs to schedule
const job = await callTool("postApiMasterjobs", {
  scheduleId: schedule.id,
  name: "GenerateReport",
  jobType: "Windows"
});

// 3. Set job dependencies
await callTool("putApiMasterjobs", {
  id: job.id,
  dependencies: [/* dependency config */]
});
```

### Batch Operations

Process multiple items efficiently:

```javascript
// Get all schedules
const schedules = await callTool("getApiMasterSchedules", {
  Limit: 1000
});

// Process each schedule
for (const schedule of schedules) {
  // Get jobs for this schedule
  const jobs = await callTool("getApiMasterjobs", {
    scheduleId: schedule.id
  });
  
  // Analyze or modify jobs
  // ...
}
```
