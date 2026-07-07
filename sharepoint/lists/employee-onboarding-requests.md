# List: Employee Onboarding Requests

## Columns

| Column | Type | Required |
| --- | --- | --- |
| Request ID | Single line text | Yes |
| First Name | Single line text | Yes |
| Last Name | Single line text | Yes |
| Email | Single line text | Yes |
| Department | Choice | Yes |
| Manager Email | Single line text | Yes |
| Start Date | Date | Yes |
| Equipment Needed | Choice, multi-select | No |
| Status | Choice | Yes |
| Integration Status | Choice | No |
| Last Error | Multiple lines text | No |

## Views

- New Requests
- Pending Approval
- Approved
- Integration Failed
- Completed

## Choice Values

Status:

- New
- Pending Approval
- Approved
- Rejected
- Completed

Integration Status:

- Not Started
- Pending
- Sent To Workato
- Completed
- Integration Failed

Department:

- Operations
- Finance
- IT
- Engineering
- Sales
- HR

Equipment Needed:

- Laptop
- Microsoft 365 License
- VPN Access
- Phone
- Security Badge

## Power Automate Trigger

Use this list as the trigger source:

```text
When an item is created
```

The flow should read the list item, ask for manager approval, and then call a Workato webhook or backend endpoint.
