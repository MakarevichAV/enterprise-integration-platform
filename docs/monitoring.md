# Monitoring And Troubleshooting

## What To Track

- Integration run status: pending, success, failed, retrying.
- Source and target systems.
- Business object and external request ID.
- Retry count.
- Error messages.
- Processing time.

## Common Failure Types

- Invalid payload or missing required fields.
- Authentication failure.
- Expired OAuth token.
- API rate limit.
- Duplicate request.
- Network timeout.
- Database constraint violation.

## Troubleshooting Checklist

1. Identify the failed external request ID.
2. Check source payload.
3. Confirm authentication and permissions.
4. Reproduce the API call in Postman.
5. Check whether the operation is idempotent.
6. Retry only after confirming it will not duplicate business data.

