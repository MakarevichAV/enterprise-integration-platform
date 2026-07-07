# Security Notes

## Topics To Practice

- API keys for simple service-to-service authentication.
- OAuth2 authorization code and client credentials flows.
- Secret storage with environment variables or managed vaults.
- Least privilege access for SharePoint, Workato, database, and notification systems.
- HTTPS-only traffic in production.
- Input validation at every integration boundary.
- Audit logging for business actions.

## Interview Explanation

For a production enterprise integration, each connected system should have its own service account or app registration, scoped permissions, secret rotation, and monitored access logs. Sensitive data should not be written to application logs.

