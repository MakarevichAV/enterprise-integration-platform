# Platform Learning Roadmap

This project uses the backend as a target system, but the main learning focus is Workato, Power Automate, and SharePoint Online.

## Priority 1: SharePoint Online

Learn how business users enter and track data.

- Create a modern SharePoint site.
- Create the `Employee Onboarding Requests` list.
- Configure list columns, choice values, required fields, and views.
- Understand list item IDs versus business IDs such as `Request ID`.
- Add list views for `Pending Approval`, `Approved`, `Integration Failed`, and `Completed`.
- Understand permissions: HR can create requests, managers approve, IT can view equipment tasks.

Practice outcome:

```text
Business user can create and track onboarding requests in SharePoint.
```

## Priority 2: Power Automate

Learn how Microsoft 365 events become automated business processes.

- Trigger a flow when a SharePoint item is created.
- Read SharePoint item fields.
- Start and wait for manager approval.
- Update SharePoint status based on approval outcome.
- Use the HTTP action to call an external API or Workato webhook.
- Store environment-specific URLs and API keys safely.
- Handle failed HTTP responses and update `Integration Status`.

Practice outcome:

```text
SharePoint item -> approval -> HTTP call -> status update
```

## Priority 3: Workato

Learn integration orchestration concepts used in enterprise automation roles.

- Understand recipes, triggers, actions, conditions, and variables.
- Receive an event from Power Automate or SharePoint.
- Map SharePoint fields to API fields.
- Call the Node.js API.
- Add conditional routing for department-specific logic.
- Add error handling, retries, and support notifications.
- Learn how recipe versions move between Dev, QA, and Prod.

Practice outcome:

```text
Power Automate approved event -> Workato recipe -> Node.js API -> integration log
```

## Priority 4: Backend And Data Support

Learn enough backend/data work to support integrations confidently.

- REST endpoints and webhooks.
- JSON validation.
- SQL tables and constraints.
- Idempotency with `external_request_id`.
- Integration run logs for monitoring.
- Troubleshooting failed payloads and authentication issues.

Practice outcome:

```text
You can explain what happens after Workato or Power Automate calls an API.
```

## What To Show In Interviews

- SharePoint list structure and business process.
- Power Automate approval flow.
- Workato recipe design and data mapping.
- API endpoint contract.
- SQL table for integration monitoring.
- One failed integration example and troubleshooting approach.

