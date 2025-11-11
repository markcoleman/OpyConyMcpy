#!/usr/bin/env node
/**
 * Simple example demonstrating how to test the OpCon MCP Server
 * 
 * This script manually tests the server's ability to:
 * 1. Start and initialize
 * 2. Parse the OpenAPI spec
 * 3. Generate MCP tools
 * 4. Handle basic operations
 * 
 * Usage:
 *   OPCON_BASE_URL=https://server:9010 OPCON_TOKEN=token node examples/test-server.js
 */

import { parseOpenApiSpec, generateToolFromEndpoint } from '../dist/parser.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function testServer() {
  console.log('🧪 Testing OpCon MCP Server\n');

  // Test 1: Parse OpenAPI spec
  console.log('1️⃣  Parsing OpenAPI specification...');
  try {
    const swaggerPath = join(__dirname, '..', 'swagger.json');
    const endpoints = parseOpenApiSpec(swaggerPath);
    console.log(`   ✅ Successfully parsed ${endpoints.length} API endpoints\n`);

    // Test 2: Generate tools
    console.log('2️⃣  Generating MCP tools...');
    const tools = endpoints.map(endpoint => generateToolFromEndpoint(endpoint));
    console.log(`   ✅ Successfully generated ${tools.length} MCP tools\n`);

    // Test 3: Show sample tools
    console.log('3️⃣  Sample tools:\n');
    const sampleTools = tools.slice(0, 5);
    sampleTools.forEach((tool, index) => {
      console.log(`   ${index + 1}. ${tool.name}`);
      console.log(`      Description: ${tool.description.slice(0, 80)}...`);
      console.log(`      Parameters: ${Object.keys(tool.inputSchema.properties || {}).length}\n`);
    });

    // Test 4: Show tool statistics
    console.log('4️⃣  Tool statistics:\n');
    const methods = endpoints.reduce((acc, e) => {
      acc[e.method] = (acc[e.method] || 0) + 1;
      return acc;
    }, {});
    
    console.log('   HTTP Methods:');
    Object.entries(methods).forEach(([method, count]) => {
      console.log(`   - ${method}: ${count}`);
    });

    const tags = endpoints.reduce((acc, e) => {
      if (e.tags) {
        e.tags.forEach(tag => {
          acc[tag] = (acc[tag] || 0) + 1;
        });
      }
      return acc;
    }, {});

    console.log('\n   Top API Categories:');
    Object.entries(tags)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .forEach(([tag, count]) => {
        console.log(`   - ${tag}: ${count}`);
      });

    console.log('\n✅ All tests passed!\n');
    
    // Check environment configuration
    console.log('5️⃣  Environment configuration:\n');
    const config = {
      OPCON_BASE_URL: process.env.OPCON_BASE_URL || '❌ Not set',
      OPCON_TOKEN: process.env.OPCON_TOKEN ? '✅ Set' : '❌ Not set',
      OPCON_USERNAME: process.env.OPCON_USERNAME ? '✅ Set' : '❌ Not set',
      OPCON_PASSWORD: process.env.OPCON_PASSWORD ? '✅ Set' : '❌ Not set',
    };

    Object.entries(config).forEach(([key, value]) => {
      console.log(`   ${key}: ${value}`);
    });

    const hasAuth = process.env.OPCON_TOKEN || 
                    (process.env.OPCON_USERNAME && process.env.OPCON_PASSWORD);
    
    if (!process.env.OPCON_BASE_URL || !hasAuth) {
      console.log('\n⚠️  Warning: Server requires configuration to run:');
      console.log('   - Set OPCON_BASE_URL');
      console.log('   - Set OPCON_TOKEN or (OPCON_USERNAME + OPCON_PASSWORD)');
      console.log('\n   Example:');
      console.log('   export OPCON_BASE_URL=https://server:9010');
      console.log('   export OPCON_TOKEN=your-token');
      console.log('   npm run dev');
    } else {
      console.log('\n✅ Configuration complete! Server is ready to run.');
      console.log('\n   Start the server with: npm run dev');
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

testServer();
