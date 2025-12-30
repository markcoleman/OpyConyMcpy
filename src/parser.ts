import { readFileSync } from 'fs';
import { ApiEndpoint, OpenApiSpec } from './types.js';

/**
 * Parse OpenAPI specification and extract endpoints
 */
export function parseOpenApiSpec(specPath: string): ApiEndpoint[] {
  const spec: OpenApiSpec = JSON.parse(readFileSync(specPath, 'utf-8'));
  const endpoints: ApiEndpoint[] = [];

  for (const [path, methods] of Object.entries(spec.paths)) {
    for (const [method, details] of Object.entries(methods)) {
      if (['get', 'post', 'put', 'delete', 'patch'].includes(method.toLowerCase())) {
        endpoints.push({
          path,
          method: method.toUpperCase(),
          summary: details.summary,
          description: details.description,
          parameters: details.parameters,
          operationId: details.operationId,
          tags: details.tags,
        });
      }
    }
  }

  return endpoints;
}

/**
 * Generate MCP tool definition from API endpoint
 */
export function generateToolFromEndpoint(endpoint: ApiEndpoint) {
  const toolName = generateToolName(endpoint);
  const inputSchema = generateInputSchema(endpoint);

  return {
    name: toolName,
    description: endpoint.description || endpoint.summary || `${endpoint.method} ${endpoint.path}`,
    inputSchema,
  };
}

/**
 * Generate a unique tool name from endpoint
 */
export function generateToolName(endpoint: ApiEndpoint): string {
  // Use operationId if available, otherwise generate from path and method
  if (endpoint.operationId) {
    return endpoint.operationId;
  }

  // Convert path to camelCase and add method prefix
  const pathParts = endpoint.path
    .split('/')
    .filter((p) => p && !p.startsWith('{'))
    .map((p, i) => (i === 0 ? p.toLowerCase() : p.charAt(0).toUpperCase() + p.slice(1)))
    .join('');

  const method = endpoint.method.toLowerCase();
  return `${method}${pathParts.charAt(0).toUpperCase() + pathParts.slice(1)}`;
}

/**
 * Generate JSON Schema for tool input from endpoint parameters
 */
export function generateInputSchema(endpoint: ApiEndpoint) {
  const properties: Record<string, object> = {};
  const required: string[] = [];

  // Add path parameters
  const pathParams = endpoint.path.match(/\{([^}]+)\}/g);
  if (pathParams) {
    pathParams.forEach((param) => {
      const paramName = param.slice(1, -1);
      properties[paramName] = {
        type: 'string',
        description: `Path parameter: ${paramName}`,
      };
      required.push(paramName);
    });
  }

  // Add query/header parameters from spec
  endpoint.parameters?.forEach((param) => {
    if (param.in === 'query' || param.in === 'header') {
      const propSchema: Record<string, string | object> = {
        type: param.schema?.type || 'string',
        description: param.description || `${param.in} parameter: ${param.name}`,
      };

      if (param.schema?.format) {
        propSchema.format = param.schema.format;
      }

      if (param.schema?.items) {
        propSchema.items = { type: param.schema.items.type };
      }

      properties[param.name] = propSchema;

      if (param.required) {
        required.push(param.name);
      }
    }
  });

  return {
    type: 'object' as const,
    properties,
    required: required.length > 0 ? required : undefined,
  };
}

/**
 * Build URL with path parameters
 */
export function buildUrl(path: string, params: Record<string, unknown>): string {
  let url = path;
  const pathParams = path.match(/\{([^}]+)\}/g);

  if (pathParams) {
    pathParams.forEach((param) => {
      const paramName = param.slice(1, -1);
      if (params[paramName] !== undefined) {
        url = url.replace(param, String(params[paramName]));
      }
    });
  }

  return url;
}

/**
 * Extract query parameters from params object
 */
export function extractQueryParams(
  endpoint: ApiEndpoint,
  params: Record<string, unknown>
): Record<string, unknown> {
  const queryParams: Record<string, unknown> = {};

  endpoint.parameters?.forEach((param) => {
    if (param.in === 'query' && params[param.name] !== undefined) {
      queryParams[param.name] = params[param.name];
    }
  });

  return queryParams;
}
