# Flow: Onboarding Approval

## Trigger

When an item is created in the SharePoint `Employee Onboarding Requests` list.

## Actions

1. Get SharePoint item details.
2. Start manager approval.
3. If approved:
   - Update SharePoint status to `Approved`.
   - Send HTTP request to Workato.
4. If rejected:
   - Update SharePoint status to `Rejected`.
   - Notify HR.

## Notes

In a real Microsoft 365 tenant, document connector permissions, environment variables, and solution export steps here.

