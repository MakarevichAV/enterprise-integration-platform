# BPMN Notes

## Process: Employee Onboarding

```text
Start
  -> HR submits onboarding request
  -> Validate required fields
  -> Manager approval
  -> Approved?
      yes -> Create employee record
      yes -> Create equipment tasks
      yes -> Notify stakeholders
      no  -> Notify HR about rejection
  -> End
```

## Candidate BPMN Elements

- Start event: new SharePoint item created.
- User task: manager approval.
- Service task: Workato calls Node.js API.
- Exclusive gateway: approved or rejected.
- Error boundary event: integration failure.
- End event: employee onboarding workflow completed.

