# Interview Notes

## Short Project Pitch

I built a personal enterprise integration platform that automates an employee onboarding process. It uses SharePoint as the business entry point, Power Automate for approvals, Workato-style recipes for orchestration, a Node.js REST API, PostgreSQL for persistence, and MCP/AI components for troubleshooting and support automation.

## Key Concepts

- REST: resource-based API style using HTTP methods and JSON.
- SOAP: XML-based protocol often found in older enterprise systems.
- Webhook: HTTP callback triggered by an event in another system.
- ETL: extract, transform, load data into a destination.
- ESB: enterprise service bus used to mediate communication between systems.
- iPaaS: cloud integration platform such as Workato or MuleSoft.
- Idempotency: retrying the same operation should not create duplicate business results.
- OAuth2: delegated authorization protocol for secure API access.
- Data mapping: transforming fields from one system model into another.
- Audit log: durable record of important business or technical actions.

## Questions To Practice

- How would you design an integration between SharePoint and an internal API?
- How do you handle retries safely?
- How would you debug a failed Workato recipe?
- What is the difference between REST and SOAP?
- What is the difference between ETL, ESB, and iPaaS?
- How would you secure a webhook endpoint?
- How do you prevent duplicate records?
- How would you monitor integrations in production?

