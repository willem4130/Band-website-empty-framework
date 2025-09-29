---
allowed-tools: all
description: Security audit and vulnerability fixes
---

# /secure

## Purpose
Identifies and fixes security vulnerabilities across the codebase.

## Arguments
Optional: `ARGUMENTS$` for specific security concerns

## Execution

### Execution
SPAWN SECURITY AGENTS IN PARALLEL (single message, multiple Task tools):
- validation: Scan for OWASP Top 10 vulnerabilities
- murphy: Check ALL dependency vulnerabilities
- [language_specialist]: Implement security fixes
- bugsy: Test security fixes thoroughly
- sherlock: Research latest CVEs via WebSearch

Select specialist: Go→gopher, JS→jsmaster, Python→thesnake, TS→typegod

Scan: SQL injection, XSS, auth flaws, secrets, dependencies, CORS, input validation

## Success Criteria
- No known vulnerabilities
- Secrets properly managed
- Input validation complete
- Authentication secure
- Dependencies updated

## Failure Protocol
When vulnerabilities found:
1. Fix critical issues first
2. Update dependencies
3. Add security headers
4. Document remaining risks

## Visual Response
```
🔒 SECURITY AUDIT
├─ Critical: X issues ❌
├─ High: Y issues ⚠️
├─ Medium: Z issues ⚠️
├─ Dependencies: N vulnerable
├─ Secrets: ✅ None exposed
└─ Status: ✅ Secured / ❌ Needs fixes
```

---
*Optimized for: completeness*