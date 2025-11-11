# Grafana Integration for OpCon MCP Server

This directory contains Grafana dashboards and Prometheus configuration for monitoring the OpCon MCP Server.

## Overview

The OpCon MCP Server can expose Prometheus metrics that can be scraped and visualized in Grafana. This provides observability into:

- Request rates and throughput
- Error rates by tool and error type
- Request latency and duration
- Number of available tools

## Metrics Available

The following metrics are exposed:

### `opcon_mcp_requests_total`
Counter tracking total number of MCP tool requests.
- Labels: `tool`, `method`

### `opcon_mcp_errors_total`
Counter tracking total number of errors.
- Labels: `tool`, `method`, `error_type`

### `opcon_mcp_request_duration_seconds`
Histogram tracking request duration in seconds.
- Labels: `tool`, `method`
- Buckets: 0.1, 0.5, 1, 2, 5, 10 seconds

### `opcon_mcp_tools_available`
Gauge showing the number of MCP tools available.

## Quick Start

### 1. Enable Metrics in MCP Server

Set the environment variable to enable metrics collection:

```bash
export OPCON_METRICS_ENABLED=true
```

### 2. Start the Metrics HTTP Server

The metrics server runs separately from the MCP server to expose metrics via HTTP:

```bash
# Development mode
npm run dev:metrics

# Production mode (after building)
node dist/metrics-server.js
```

By default, metrics are exposed on port 9090. You can customize this:

```bash
export OPCON_METRICS_PORT=8080
npm run dev:metrics
```

The metrics endpoint will be available at:
- `http://localhost:9090/metrics` - Prometheus metrics
- `http://localhost:9090/health` - Health check endpoint

### 3. Set Up Prometheus

1. Install Prometheus: https://prometheus.io/download/

2. Use the provided `prometheus.yml` configuration or add this scrape config to your existing Prometheus setup:

```yaml
scrape_configs:
  - job_name: 'opcon-mcp-server'
    static_configs:
      - targets: ['localhost:9090']
```

3. Start Prometheus:

```bash
prometheus --config.file=grafana/prometheus.yml
```

### 4. Set Up Grafana

1. Install Grafana: https://grafana.com/grafana/download

2. Add Prometheus as a data source:
   - Go to Configuration → Data Sources → Add data source
   - Select Prometheus
   - Set URL to `http://localhost:9090` (or your Prometheus server URL)
   - Click "Save & Test"

3. Import the dashboard:
   - Go to Dashboards → Import
   - Upload the `dashboard.json` file from this directory
   - Select your Prometheus data source
   - Click "Import"

## Dashboard Features

The included dashboard provides:

1. **Total Requests Panel**: Shows the rate of requests per second, broken down by tool and HTTP method
2. **Error Rate Panel**: Displays errors per second, categorized by tool and error type
3. **Request Duration Panel**: Shows the 95th percentile (p95) request latency
4. **Total Tools Available Panel**: Single stat showing how many MCP tools are registered

## Docker Compose Example

For a quick setup with Docker, a `docker-compose.yml` file is provided in the root directory:

```bash
# Start Prometheus and Grafana
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

This will start:
- **Prometheus** on http://localhost:9091 (scraping metrics from localhost:9090)
- **Grafana** on http://localhost:3000 (default login: admin/admin)

**Note**: You still need to run the OpCon MCP Server metrics endpoint on the host machine (localhost:9090) for Prometheus to scrape.

After starting, configure Grafana:
1. Add Prometheus data source with URL: `http://prometheus:9090`
2. Import the dashboard from `grafana/dashboard.json`

## Production Considerations

### Security

- **Authentication**: Enable authentication on the metrics endpoint in production
- **Network**: Restrict access to the metrics port using firewall rules
- **TLS**: Consider using TLS for the metrics endpoint

### Performance

- **Metrics Collection**: Metrics collection has minimal overhead (~1-2ms per request)
- **Retention**: Configure Prometheus retention based on your storage capacity
- **Scrape Interval**: Adjust scrape interval based on your monitoring needs (default: 15s)

### High Availability

For production deployments:

1. Run multiple instances of the MCP server
2. Configure Prometheus to scrape all instances
3. Use Grafana's templating to switch between instances
4. Set up alerting rules in Prometheus for critical metrics

## Example Prometheus Alerts

Add these to your Prometheus alerting rules:

```yaml
groups:
  - name: opcon_mcp_alerts
    interval: 30s
    rules:
      - alert: HighErrorRate
        expr: rate(opcon_mcp_errors_total[5m]) > 0.1
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High error rate in OpCon MCP Server"
          description: "Error rate is {{ $value }} errors/sec"

      - alert: SlowRequests
        expr: histogram_quantile(0.95, rate(opcon_mcp_request_duration_seconds_bucket[5m])) > 5
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Slow request latency in OpCon MCP Server"
          description: "95th percentile latency is {{ $value }}s"
```

## Customization

### Adding Custom Metrics

To add custom metrics, edit `src/metrics.ts`:

```typescript
// Add new metric
this.customMetric = new Counter({
  name: 'opcon_mcp_custom_metric',
  help: 'Description of custom metric',
  labelNames: ['label1', 'label2'],
  registers: [this.registry],
});

// Record metric
this.customMetric.inc({ label1: 'value1', label2: 'value2' });
```

### Modifying the Dashboard

The dashboard JSON can be edited in Grafana and re-exported:

1. Make changes in the Grafana UI
2. Go to Dashboard settings → JSON Model
3. Copy the JSON
4. Save to `grafana/dashboard.json`

## Troubleshooting

### Metrics Not Appearing

1. Check that metrics are enabled: `OPCON_METRICS_ENABLED=true`
2. Verify the metrics server is running and accessible
3. Test the metrics endpoint: `curl http://localhost:9090/metrics`
4. Check Prometheus targets: http://localhost:9090/targets

### Prometheus Can't Scrape Metrics

1. Verify network connectivity to the metrics server
2. Check firewall rules
3. Ensure the port is correct in `prometheus.yml`
4. Check Prometheus logs for errors

### Dashboard Not Loading

1. Verify Prometheus data source is configured correctly
2. Check that metrics are being collected in Prometheus
3. Verify the time range in Grafana matches your data

## Resources

- [Prometheus Documentation](https://prometheus.io/docs/)
- [Grafana Documentation](https://grafana.com/docs/)
- [Prometheus Node.js Client](https://github.com/siimon/prom-client)

## Support

For issues and questions about Grafana integration, please use the GitHub issue tracker.
