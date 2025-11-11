#!/usr/bin/env node

/**
 * Example script to test the metrics server
 * 
 * This script demonstrates how to:
 * 1. Start the metrics server
 * 2. View metrics in Prometheus format
 * 3. Check the health endpoint
 */

import http from 'http';

// Configuration
const METRICS_PORT = process.env.OPCON_METRICS_PORT || 9090;
const METRICS_URL = `http://localhost:${METRICS_PORT}/metrics`;
const HEALTH_URL = `http://localhost:${METRICS_PORT}/health`;

console.log('OpCon MCP Server - Metrics Example');
console.log('===================================\n');

console.log('This example demonstrates the metrics endpoints:');
console.log(`- Metrics: ${METRICS_URL}`);
console.log(`- Health:  ${HEALTH_URL}\n`);

console.log('To run this example:');
console.log('1. Set required environment variables:');
console.log('   export OPCON_BASE_URL="https://your-server:9010"');
console.log('   export OPCON_TOKEN="your-token"');
console.log('   export OPCON_METRICS_ENABLED=true\n');

console.log('2. Start the metrics server in another terminal:');
console.log('   npm run dev:metrics\n');

console.log('3. Then run this example:');
console.log('   node examples/metrics-example.js\n');

// Function to fetch and display metrics
async function fetchMetrics() {
  return new Promise((resolve, reject) => {
    http.get(METRICS_URL, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ Metrics endpoint is working!\n');
          console.log('Sample metrics:');
          console.log('---');
          // Show first 20 lines
          const lines = data.split('\n').slice(0, 20);
          console.log(lines.join('\n'));
          console.log('...\n');
          resolve();
        } else {
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Function to check health endpoint
async function checkHealth() {
  return new Promise((resolve, reject) => {
    http.get(HEALTH_URL, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ Health endpoint is working!');
          console.log(`Response: ${data}\n`);
          resolve();
        } else {
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Main function
async function main() {
  try {
    console.log('Checking if metrics server is running...\n');
    
    await checkHealth();
    await fetchMetrics();
    
    console.log('✅ All checks passed!');
    console.log('\nYou can now:');
    console.log('- Configure Prometheus to scrape', METRICS_URL);
    console.log('- Import the Grafana dashboard from grafana/dashboard.json');
    console.log('- View real-time metrics as you use the MCP server\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('\nMake sure the metrics server is running:');
    console.error('  npm run dev:metrics\n');
    process.exit(1);
  }
}

main();
