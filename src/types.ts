/**
 * OpCon API configuration
 */
export interface OpConConfig {
  /**
   * OpCon API base URL (e.g., https://opcon-server:9010)
   */
  baseUrl: string;

  /**
   * Application token for authentication
   */
  token?: string;

  /**
   * Username for authentication
   */
  username?: string;

  /**
   * Password for authentication
   */
  password?: string;

  /**
   * TLS/SSL verification
   */
  verifyTls?: boolean;
}

/**
 * API endpoint definition from OpenAPI spec
 */
export interface ApiEndpoint {
  path: string;
  method: string;
  summary?: string;
  description?: string;
  parameters?: ApiParameter[];
  operationId?: string;
  tags?: string[];
}

/**
 * API parameter definition
 */
export interface ApiParameter {
  name: string;
  in: 'path' | 'query' | 'header' | 'cookie';
  description?: string;
  required?: boolean;
  schema?: {
    type: string;
    format?: string;
    items?: { type: string };
    nullable?: boolean;
  };
}

/**
 * OpenAPI specification structure
 */
export interface OpenApiSpec {
  openapi: string;
  info: {
    title: string;
    description: string;
    version: string;
  };
  paths: {
    [path: string]: {
      [method: string]: {
        tags?: string[];
        summary?: string;
        description?: string;
        operationId?: string;
        parameters?: ApiParameter[];
        requestBody?: unknown;
        responses?: unknown;
      };
    };
  };
}
