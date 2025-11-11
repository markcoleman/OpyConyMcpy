import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import https from 'https';
import { OpConConfig } from './types.js';

/**
 * OpCon API client for making authenticated requests
 */
export class OpConClient {
  private axiosInstance: AxiosInstance;
  private token?: string;

  constructor(private config: OpConConfig) {
    const httpsAgent = new https.Agent({
      rejectUnauthorized: config.verifyTls !== false,
    });

    this.axiosInstance = axios.create({
      baseURL: config.baseUrl,
      httpsAgent,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Set token if provided
    if (config.token) {
      this.token = config.token;
      this.axiosInstance.defaults.headers.common['Authorization'] = `Token ${config.token}`;
    }
  }

  /**
   * Authenticate with username and password to get a token
   */
  async authenticate(): Promise<void> {
    if (this.token) {
      return; // Already authenticated with token
    }

    if (!this.config.username || !this.config.password) {
      throw new Error('Username and password are required for authentication');
    }

    try {
      const response = await this.axiosInstance.post('/api/tokens', {
        user: { loginName: this.config.username, password: this.config.password },
        tokenType: { type: 'User' },
      });

      this.token = response.data.id;
      this.axiosInstance.defaults.headers.common['Authorization'] = `Token ${this.token}`;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Authentication failed: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Make a GET request
   */
  async get<T = unknown>(path: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(path, config);
    return response.data;
  }

  /**
   * Make a POST request
   */
  async post<T = unknown>(path: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.post<T>(path, data, config);
    return response.data;
  }

  /**
   * Make a PUT request
   */
  async put<T = unknown>(path: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.put<T>(path, data, config);
    return response.data;
  }

  /**
   * Make a DELETE request
   */
  async delete<T = unknown>(path: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(path, config);
    return response.data;
  }

  /**
   * Make a generic request
   */
  async request<T = unknown>(
    method: string,
    path: string,
    options?: {
      params?: Record<string, unknown>;
      data?: unknown;
      headers?: Record<string, string>;
    }
  ): Promise<T> {
    const config: AxiosRequestConfig = {
      method: method.toUpperCase(),
      url: path,
      params: options?.params,
      data: options?.data,
      headers: options?.headers,
    };

    const response = await this.axiosInstance.request<T>(config);
    return response.data;
  }
}
