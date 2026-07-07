# Enterprise Integration Platform

Personal learning project for business process automation, enterprise integrations, Workato-style orchestration, SharePoint Online, MCP, and AI-assisted operations.

## Business Scenario

The project automates an employee onboarding process:

1. HR creates an onboarding request in SharePoint.
2. Power Automate sends approval to the manager.
3. Workato receives the approved request and orchestrates downstream actions.
4. Node.js API validates and persists the request.
5. PostgreSQL stores employees, approvals, equipment, audit logs, and integration runs.
6. AI Agent analyzes failed integrations and suggests remediation.
7. MCP Server exposes business actions to AI tools.
8. Slack or email notification is sent to business stakeholders.

```text
SharePoint
  -> Power Automate
  -> Workato
  -> Node.js API
  -> PostgreSQL
  -> AI Agent
  -> Slack / Email
```

## What This Project Practices

- REST APIs and webhook design
- SQL schema design and data modeling
- Workato recipes, triggers, actions, conditions, and error handling
- Power Automate approvals
- SharePoint Lists, Pages, Web Parts, and intranet-style structures
- OAuth2, API keys, secrets, and secure integrations
- Retry logic, idempotency, audit logging, and monitoring
- ETL, ESB, and iPaaS concepts
- MCP server tools for business automation
- AI-powered troubleshooting and workflow assistance

## Repository Structure

```text
enterprise-integration-platform/
├── backend/             Node.js REST API and webhook receiver
├── database/            PostgreSQL migrations and seed data
├── power-automate/      Flow documentation and export notes
├── workato/             Recipe specs and mock recipe exports
├── sharepoint/          List designs, site structure, and web part notes
├── mcp/                 MCP server exposing business tools
├── ai-agent/            AI workflow and troubleshooting logic
├── docs/                Architecture, BPMN, API, security, monitoring, interview notes
├── postman/             API collection
├── tests/               Integration/API tests
├── scripts/             Setup and demo scripts
└── docker-compose.yml   Local PostgreSQL and API services
```

## Quick Start

```bash
cd enterprise-integration-platform
docker compose up --build
```

The API is planned to run on `http://localhost:3000`.

## Main Demo Flow

1. Create an onboarding request through `POST /employees`.
2. Simulate manager approval through `POST /approvals`.
3. Simulate Workato callback through `POST /webhooks/workato/onboarding-approved`.
4. Inspect integration history through `GET /integration-runs`.
5. Ask the AI Agent to summarize failed runs.

Run the local backend demo:

```bash
./scripts/demo-onboarding-flow.sh
```

## Platform Learning Focus

The backend exists so SharePoint, Power Automate, and Workato have a realistic target system to integrate with.

Primary learning order:

1. SharePoint Online list and views.
2. Power Automate approval flow.
3. Workato recipe design, mapping, and error handling.
4. Backend API, PostgreSQL, logs, and idempotency.

See [docs/platform-learning-roadmap.md](docs/platform-learning-roadmap.md).

## Weekly Study Plan

See [docs/weekly-plan.md](docs/weekly-plan.md).
