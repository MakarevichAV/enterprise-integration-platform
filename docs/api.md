# API Documentation

Base URL:

```text
http://localhost:3000
```

Required header for protected endpoints:

```text
x-api-key: local-dev-api-key
```

## Endpoints

### GET /health

Returns service health.

### POST /employees

Creates or updates an onboarding employee request by `externalRequestId`.

```json
{
  "externalRequestId": "SP-ONB-1001",
  "firstName": "Maya",
  "lastName": "Cohen",
  "email": "maya.cohen@example.com",
  "department": "Operations",
  "managerEmail": "manager@example.com",
  "startDate": "2026-08-01",
  "equipmentNeeded": ["Laptop", "Microsoft 365 License", "VPN Access"]
}
```

### POST /approvals

Stores an approval decision.

```json
{
  "externalRequestId": "SP-ONB-1001",
  "approverEmail": "manager@example.com",
  "decision": "approved",
  "comments": "Approved for August onboarding"
}
```

### POST /webhooks/workato/onboarding-approved

Webhook endpoint that simulates a Workato callback.

```json
{
  "externalRequestId": "SP-ONB-1001",
  "recipeId": "recipe-onboarding-approved",
  "eventType": "onboarding.approved",
  "payload": {
    "department": "Operations"
  }
}
```

### GET /integration-runs

Returns the last integration run records.

