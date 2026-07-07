# Architecture

## Components

- SharePoint Online: business entry point for HR onboarding requests.
- Power Automate: approval workflow and low-code process step.
- Workato: integration orchestration between SaaS systems and internal APIs.
- Node.js API: custom service for validation, idempotency, and persistence.
- PostgreSQL: system of record for demo data, audit logs, and integration runs.
- MCP Server: exposes business actions to an AI-capable client.
- AI Agent: summarizes failed runs, recommends fixes, and drafts notifications.

## Integration Flow

```text
HR user
  -> SharePoint List item
  -> Power Automate approval
  -> Workato recipe
  -> POST /webhooks/workato/onboarding-approved
  -> PostgreSQL integration_runs
  -> AI Agent failure summary
```

## Enterprise Concerns

- Idempotency: `external_request_id` prevents duplicate onboarding requests.
- Security: API key locally, OAuth2 conceptually for Workato and Microsoft 365.
- Monitoring: `integration_runs` table records success and failure states.
- Auditability: `audit_logs` table is reserved for business-level actions.
- Environments: Dev, QA, and Prod should use separate secrets and databases.

