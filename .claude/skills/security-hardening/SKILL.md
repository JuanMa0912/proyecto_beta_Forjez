---
name: security-hardening
description: Use when reviewing or improving security for forms, authentication, APIs, data storage, environment variables and deployment.
---

# Security Hardening Skill

## Purpose

Prevent low-level and high-level security mistakes before code reaches production.

## Review areas

- Secrets management.
- Authentication.
- Authorization.
- Input validation.
- Output encoding.
- XSS.
- CSRF.
- CORS.
- SQL injection.
- Rate limiting.
- Error handling.
- Dependency risk.
- Logging.
- Deployment configuration.

## Required checklist

- [ ] No secrets in code.
- [ ] `.env.example` exists if env vars are used.
- [ ] All public forms are validated.
- [ ] Private routes are protected.
- [ ] Roles are enforced server-side.
- [ ] Errors are safe for users.
- [ ] Logs do not expose sensitive data.
- [ ] Dangerous HTML injection is avoided.
- [ ] Dependencies are justified.

## Output format

| Finding | Severity | Impact | Recommendation |
|---|---|---|---|

End with deployment status:

- Approved.
- Approved with warnings.
- Blocked.
