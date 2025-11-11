import { MetricsCollector } from '../src/metrics';

describe('MetricsCollector', () => {
  let metrics: MetricsCollector;

  beforeEach(() => {
    metrics = new MetricsCollector();
  });

  describe('constructor', () => {
    it('should initialize with a registry', () => {
      const registry = metrics.getRegistry();
      expect(registry).toBeDefined();
    });
  });

  describe('recordRequest', () => {
    it('should record a request', () => {
      expect(() => {
        metrics.recordRequest('testTool', 'GET');
      }).not.toThrow();
    });

    it('should record multiple requests', () => {
      expect(() => {
        metrics.recordRequest('testTool', 'GET');
        metrics.recordRequest('testTool', 'POST');
        metrics.recordRequest('anotherTool', 'DELETE');
      }).not.toThrow();
    });
  });

  describe('recordError', () => {
    it('should record an error', () => {
      expect(() => {
        metrics.recordError('testTool', 'GET', 'NetworkError');
      }).not.toThrow();
    });

    it('should record different error types', () => {
      expect(() => {
        metrics.recordError('testTool', 'GET', 'NetworkError');
        metrics.recordError('testTool', 'POST', 'AuthenticationError');
        metrics.recordError('anotherTool', 'PUT', 'ValidationError');
      }).not.toThrow();
    });
  });

  describe('recordDuration', () => {
    it('should record request duration', () => {
      expect(() => {
        metrics.recordDuration('testTool', 'GET', 0.5);
      }).not.toThrow();
    });

    it('should record various durations', () => {
      expect(() => {
        metrics.recordDuration('testTool', 'GET', 0.1);
        metrics.recordDuration('testTool', 'GET', 1.5);
        metrics.recordDuration('testTool', 'GET', 5.0);
      }).not.toThrow();
    });
  });

  describe('setToolsAvailable', () => {
    it('should set the number of available tools', () => {
      expect(() => {
        metrics.setToolsAvailable(257);
      }).not.toThrow();
    });

    it('should update the tools count', () => {
      expect(() => {
        metrics.setToolsAvailable(100);
        metrics.setToolsAvailable(257);
      }).not.toThrow();
    });
  });

  describe('getMetrics', () => {
    it('should return metrics in Prometheus format', async () => {
      metrics.recordRequest('testTool', 'GET');
      metrics.setToolsAvailable(257);

      const metricsOutput = await metrics.getMetrics();

      expect(metricsOutput).toBeDefined();
      expect(typeof metricsOutput).toBe('string');
      expect(metricsOutput).toContain('opcon_mcp');
    });

    it('should include all metric types', async () => {
      metrics.recordRequest('testTool', 'GET');
      metrics.recordError('testTool', 'POST', 'Error');
      metrics.recordDuration('testTool', 'GET', 1.5);
      metrics.setToolsAvailable(257);

      const metricsOutput = await metrics.getMetrics();

      expect(metricsOutput).toContain('opcon_mcp_requests_total');
      expect(metricsOutput).toContain('opcon_mcp_errors_total');
      expect(metricsOutput).toContain('opcon_mcp_request_duration_seconds');
      expect(metricsOutput).toContain('opcon_mcp_tools_available');
    });

    it('should include metric help text', async () => {
      const metricsOutput = await metrics.getMetrics();

      expect(metricsOutput).toContain('HELP opcon_mcp_requests_total');
      expect(metricsOutput).toContain('HELP opcon_mcp_errors_total');
      expect(metricsOutput).toContain('HELP opcon_mcp_request_duration_seconds');
      expect(metricsOutput).toContain('HELP opcon_mcp_tools_available');
    });
  });

  describe('getRegistry', () => {
    it('should return the registry instance', () => {
      const registry = metrics.getRegistry();
      expect(registry).toBeDefined();
      expect(registry.constructor.name).toBe('Registry');
    });
  });
});
