import { Registry, Counter, Histogram, Gauge } from 'prom-client';

/**
 * Metrics collector for Grafana/Prometheus monitoring
 */
export class MetricsCollector {
  private registry: Registry;
  private requestCounter: Counter;
  private errorCounter: Counter;
  private requestDuration: Histogram;
  private toolsAvailable: Gauge;

  constructor() {
    this.registry = new Registry();

    // Total number of API requests
    this.requestCounter = new Counter({
      name: 'opcon_mcp_requests_total',
      help: 'Total number of MCP tool requests',
      labelNames: ['tool', 'method'],
      registers: [this.registry],
    });

    // Total number of errors
    this.errorCounter = new Counter({
      name: 'opcon_mcp_errors_total',
      help: 'Total number of MCP tool errors',
      labelNames: ['tool', 'method', 'error_type'],
      registers: [this.registry],
    });

    // Request duration histogram
    this.requestDuration = new Histogram({
      name: 'opcon_mcp_request_duration_seconds',
      help: 'Duration of MCP tool requests in seconds',
      labelNames: ['tool', 'method'],
      buckets: [0.1, 0.5, 1, 2, 5, 10],
      registers: [this.registry],
    });

    // Number of tools available
    this.toolsAvailable = new Gauge({
      name: 'opcon_mcp_tools_available',
      help: 'Number of MCP tools available',
      registers: [this.registry],
    });
  }

  /**
   * Record a successful request
   */
  recordRequest(tool: string, method: string): void {
    this.requestCounter.inc({ tool, method });
  }

  /**
   * Record an error
   */
  recordError(tool: string, method: string, errorType: string): void {
    this.errorCounter.inc({ tool, method, error_type: errorType });
  }

  /**
   * Record request duration
   */
  recordDuration(tool: string, method: string, durationSeconds: number): void {
    this.requestDuration.observe({ tool, method }, durationSeconds);
  }

  /**
   * Set the number of available tools
   */
  setToolsAvailable(count: number): void {
    this.toolsAvailable.set(count);
  }

  /**
   * Get metrics in Prometheus format
   */
  async getMetrics(): Promise<string> {
    return this.registry.metrics();
  }

  /**
   * Get the registry
   */
  getRegistry(): Registry {
    return this.registry;
  }
}
