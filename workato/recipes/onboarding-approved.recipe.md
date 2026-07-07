# Recipe: Onboarding Approved

## Trigger

Power Automate or SharePoint approval event sends an approved onboarding request.

## Steps

1. Receive approved onboarding payload.
2. Validate required fields.
3. Map SharePoint fields to API fields.
4. Call `POST /employees`.
5. Call `POST /webhooks/workato/onboarding-approved`.
6. If department is IT or Engineering, create equipment request.
7. Notify HR and IT.

## Workato Recipe Design

Trigger options:

- Webhook trigger: Power Automate sends an approved request to Workato.
- SharePoint connector trigger: Workato watches the SharePoint list directly.

Recommended learning version:

```text
Webhook trigger from Power Automate
  -> validate fields
  -> map payload
  -> call Node.js API
  -> call approved webhook
  -> notify HR/IT
```

Why this version is useful:

- It mirrors real iPaaS work.
- It keeps Power Automate responsible for Microsoft approval.
- It keeps Workato responsible for orchestration and external integrations.
- It gives a clean place to practice retries, mappings, and conditions.

## Error Handling

- On validation error: write failed integration run.
- On HTTP 401: check API key or OAuth credentials.
- On HTTP 429: retry with backoff.
- On HTTP 500: retry three times, then notify support.

## Data Mapping

| SharePoint Field | API Field |
| --- | --- |
| Request ID | externalRequestId |
| First Name | firstName |
| Last Name | lastName |
| Email | email |
| Department | department |
| Manager Email | managerEmail |
| Start Date | startDate |
| Equipment Needed | equipmentNeeded |

## Interview Notes

Explain this recipe as an orchestration layer:

> Power Automate handles the Microsoft approval experience, while Workato receives the approved business event, maps the data, calls the backend API, handles failures, and notifies downstream teams.
