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

## HTTP Action Payload To Workato

Use this body when calling a Workato webhook:

```json
{
  "externalRequestId": "@{triggerBody()?['RequestID']}",
  "eventType": "onboarding.approved",
  "sourceSystem": "sharepoint-online",
  "employee": {
    "firstName": "@{triggerBody()?['FirstName']}",
    "lastName": "@{triggerBody()?['LastName']}",
    "email": "@{triggerBody()?['Email']}",
    "department": "@{triggerBody()?['Department']}",
    "managerEmail": "@{triggerBody()?['ManagerEmail']}",
    "startDate": "@{triggerBody()?['StartDate']}",
    "equipmentNeeded": "@{triggerBody()?['EquipmentNeeded']}"
  }
}
```

## Status Updates

Update the SharePoint item during the flow:

| Step | Status | Integration Status |
| --- | --- | --- |
| Item created | New | Not Started |
| Approval started | Pending Approval | Not Started |
| Approved | Approved | Pending |
| HTTP call succeeded | Approved | Sent To Workato |
| HTTP call failed | Approved | Integration Failed |
| Rejected | Rejected | Not Sent |

## Notes

In a real Microsoft 365 tenant, document connector permissions, environment variables, and solution export steps here.
