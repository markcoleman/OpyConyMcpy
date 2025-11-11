import { generateToolName, generateInputSchema, buildUrl, extractQueryParams } from '../src/parser';
import { ApiEndpoint } from '../src/types';

describe('Parser', () => {
  describe('generateToolName', () => {
    it('should use operationId when available', () => {
      const endpoint: ApiEndpoint = {
        path: '/api/test',
        method: 'GET',
        operationId: 'getTestData',
      };

      expect(generateToolName(endpoint)).toBe('getTestData');
    });

    it('should generate name from path and method', () => {
      const endpoint: ApiEndpoint = {
        path: '/api/accesscodes',
        method: 'GET',
      };

      expect(generateToolName(endpoint)).toBe('getApiAccesscodes');
    });

    it('should handle paths with parameters', () => {
      const endpoint: ApiEndpoint = {
        path: '/api/accesscodes/{id}',
        method: 'DELETE',
      };

      expect(generateToolName(endpoint)).toBe('deleteApiAccesscodes');
    });
  });

  describe('generateInputSchema', () => {
    it('should generate schema with path parameters', () => {
      const endpoint: ApiEndpoint = {
        path: '/api/accesscodes/{id}',
        method: 'GET',
        parameters: [],
      };

      const schema = generateInputSchema(endpoint);

      expect(schema.properties).toHaveProperty('id');
      expect(schema.required).toContain('id');
    });

    it('should generate schema with query parameters', () => {
      const endpoint: ApiEndpoint = {
        path: '/api/accesscodes',
        method: 'GET',
        parameters: [
          {
            name: 'limit',
            in: 'query',
            description: 'Limit results',
            required: false,
            schema: { type: 'integer', format: 'int32' },
          },
          {
            name: 'name',
            in: 'query',
            description: 'Filter by name',
            required: true,
            schema: { type: 'string' },
          },
        ],
      };

      const schema = generateInputSchema(endpoint);

      expect(schema.properties).toHaveProperty('limit');
      expect(schema.properties).toHaveProperty('name');
      expect(schema.required).toContain('name');
      expect(schema.required).not.toContain('limit');
    });

    it('should handle array parameters', () => {
      const endpoint: ApiEndpoint = {
        path: '/api/test',
        method: 'GET',
        parameters: [
          {
            name: 'ids',
            in: 'query',
            schema: {
              type: 'array',
              items: { type: 'string' },
            },
          },
        ],
      };

      const schema = generateInputSchema(endpoint);

      expect(schema.properties).toHaveProperty('ids');
      expect((schema.properties as any).ids.type).toBe('array');
      expect((schema.properties as any).ids.items).toEqual({ type: 'string' });
    });
  });

  describe('buildUrl', () => {
    it('should replace path parameters', () => {
      const path = '/api/accesscodes/{id}/details/{detailId}';
      const params = { id: '123', detailId: '456' };

      const url = buildUrl(path, params);

      expect(url).toBe('/api/accesscodes/123/details/456');
    });

    it('should handle missing parameters', () => {
      const path = '/api/accesscodes/{id}';
      const params = {};

      const url = buildUrl(path, params);

      expect(url).toBe('/api/accesscodes/{id}');
    });

    it('should not modify paths without parameters', () => {
      const path = '/api/accesscodes';
      const params = { id: '123' };

      const url = buildUrl(path, params);

      expect(url).toBe('/api/accesscodes');
    });
  });

  describe('extractQueryParams', () => {
    it('should extract query parameters only', () => {
      const endpoint: ApiEndpoint = {
        path: '/api/test/{id}',
        method: 'GET',
        parameters: [
          { name: 'limit', in: 'query', schema: { type: 'integer' } },
          { name: 'offset', in: 'query', schema: { type: 'integer' } },
          { name: 'Authorization', in: 'header', schema: { type: 'string' } },
        ],
      };

      const params = {
        id: '123',
        limit: 10,
        offset: 20,
        Authorization: 'Bearer token',
      };

      const queryParams = extractQueryParams(endpoint, params);

      expect(queryParams).toEqual({
        limit: 10,
        offset: 20,
      });
      expect(queryParams).not.toHaveProperty('id');
      expect(queryParams).not.toHaveProperty('Authorization');
    });

    it('should return empty object when no query params', () => {
      const endpoint: ApiEndpoint = {
        path: '/api/test',
        method: 'GET',
        parameters: [],
      };

      const queryParams = extractQueryParams(endpoint, {});

      expect(queryParams).toEqual({});
    });
  });
});
