# Power Automate

This folder documents low-code flows that support the integration scenario.

Main flow:

```text
When a SharePoint item is created
  -> Start and wait for manager approval
  -> If approved, call Workato webhook
  -> If rejected, update SharePoint item status
```

