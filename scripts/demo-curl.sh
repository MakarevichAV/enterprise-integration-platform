#!/usr/bin/env bash
set -euo pipefail

API_URL="${API_URL:-http://localhost:3000}"
API_KEY="${API_KEY:-local-dev-api-key}"

curl -s "$API_URL/health"

curl -s -X POST "$API_URL/employees" \
  -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "externalRequestId": "SP-ONB-1001",
    "firstName": "Maya",
    "lastName": "Cohen",
    "email": "maya.cohen@example.com",
    "department": "Operations",
    "managerEmail": "manager@example.com",
    "startDate": "2026-08-01",
    "equipmentNeeded": ["Laptop", "Microsoft 365 License", "VPN Access"]
  }'

