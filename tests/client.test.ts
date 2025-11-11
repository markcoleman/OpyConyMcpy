import axios from 'axios';
import { OpConClient } from '../src/client';
import { OpConConfig } from '../src/types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('OpConClient', () => {
  let client: OpConClient;
  let config: OpConConfig;

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock axios.create to return a mock instance
    const mockInstance = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      request: jest.fn(),
      defaults: {
        headers: {
          common: {},
        },
      },
    } as any;

    mockedAxios.create.mockReturnValue(mockInstance);

    config = {
      baseUrl: 'https://opcon-test.example.com:9010',
      token: 'test-token-123',
      verifyTls: true,
    };
    client = new OpConClient(config);
  });

  describe('constructor', () => {
    it('should create client with token', () => {
      const clientWithToken = new OpConClient({
        baseUrl: 'https://test.com',
        token: 'my-token',
      });

      expect(clientWithToken).toBeDefined();
      expect(mockedAxios.create).toHaveBeenCalled();
    });

    it('should create client without token', () => {
      const clientWithoutToken = new OpConClient({
        baseUrl: 'https://test.com',
        username: 'user',
        password: 'pass',
      });

      expect(clientWithoutToken).toBeDefined();
      expect(mockedAxios.create).toHaveBeenCalled();
    });
  });

  describe('authenticate', () => {
    it('should skip authentication if token is already set', async () => {
      await client.authenticate();
      // Should not throw error
      expect(true).toBe(true);
    });

    it('should throw error if username/password not provided', async () => {
      const clientNoAuth = new OpConClient({
        baseUrl: 'https://test.com',
      });

      await expect(clientNoAuth.authenticate()).rejects.toThrow(
        'Username and password are required for authentication'
      );
    });
  });

  describe('HTTP methods', () => {
    it('should have get method', () => {
      expect(typeof client.get).toBe('function');
    });

    it('should have post method', () => {
      expect(typeof client.post).toBe('function');
    });

    it('should have put method', () => {
      expect(typeof client.put).toBe('function');
    });

    it('should have delete method', () => {
      expect(typeof client.delete).toBe('function');
    });

    it('should have request method', () => {
      expect(typeof client.request).toBe('function');
    });
  });
});
