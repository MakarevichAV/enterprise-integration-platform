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

