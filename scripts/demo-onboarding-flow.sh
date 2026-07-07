#!/usr/bin/env bash
set -euo pipefail

API_URL="${API_URL:-http://localhost:3000}"
API_KEY="${API_KEY:-local-dev-api-key}"

ensure_api_is_running() {
  if ! curl -fsS "$API_URL/health" >/dev/null; then
    printf "API is not reachable at %s\n" "$API_URL" >&2
    printf "Start it first with: docker compose up --build\n" >&2
    exit 1
  fi
}

request() {
  local method="$1"
  local path="$2"
  local body="${3:-}"

  if [ -n "$body" ]; then
    curl -s -X "$method" "$API_URL$path" \
      -H "x-api-key: $API_KEY" \
      -H "Content-Type: application/json" \
      -d "$body"
  else
    curl -s -X "$method" "$API_URL$path" \
      -H "x-api-key: $API_KEY"
  fi

  printf "\n\n"
}

ensure_api_is_running

printf "1. Health check\n"
curl -s "$API_URL/health"
printf "\n\n"

printf "2. Create or update employee onboarding request\n"
request POST "/employees" '{
  "externalRequestId": "SP-ONB-1001",
  "firstName": "Maya",
  "lastName": "Cohen",
  "email": "maya.cohen@example.com",
  "department": "Operations",
  "managerEmail": "manager@example.com",
  "startDate": "2026-08-01",
  "equipmentNeeded": ["Laptop", "Microsoft 365 License", "VPN Access"]
}'

printf "3. Store manager approval\n"
request POST "/approvals" '{
  "externalRequestId": "SP-ONB-1001",
  "approverEmail": "manager@example.com",
  "decision": "approved",
  "comments": "Approved for onboarding"
}'

printf "4. Simulate Workato approved onboarding webhook\n"
request POST "/webhooks/workato/onboarding-approved" '{
  "externalRequestId": "SP-ONB-1001",
  "recipeId": "recipe-onboarding-approved",
  "eventType": "onboarding.approved",
  "payload": {
    "department": "Operations"
  }
}'

printf "5. Show integration run history\n"
request GET "/integration-runs"
