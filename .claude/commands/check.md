---
allowed-tools: all
description: Validate code quality, tests, and production readiness
---

# /check

## Purpose
Validates entire codebase for quality, tests, and deployment readiness.

## Arguments
Optional: `ARGUMENTS$` for specific areas/files

## Execution

### Execution
SPAWN ALL AGENTS IN PARALLEL (single message, multiple Task tool invocations):
- tester: Run ALL tests (unit/integration/e2e)
- murphy: Check ALL dependencies, configs, deprecations
- bugsy: Find ALL runtime errors, warnings, console logs
- validation: Verify ALL imports, exports, unused code
- [language_specialist]: Check language-specific issues
- deploy: Verify build and dev server run clean

Select specialist based on detected stack:
Go→gopher, JS→jsmaster, Python→thesnake, TS→typegod, React→reactlord, Vue→vuelord, Next.js→nextking

## Success Criteria (ZERO TOLERANCE)
- All tests passing
- No linting errors or warnings
- No dependency issues or warnings
- No deprecation warnings
- No import/export issues
- Build succeeds without warnings
- Dev server runs without errors
- No console errors in runtime
- No TypeScript errors
- No unused variables
- No security vulnerabilities
- Configs valid and optimized

## Failure Protocol
When ANY issue found (zero tolerance):
1. SPAWN AGENTS IN PARALLEL to fix ALL issues
2. Re-run complete check until 100% clean
3. Do not stop until EVERYTHING is green
4. Report comprehensive fix summary

## Visual Response
Return results as table showing:
- Component | Status | Issues Found | Action Taken
- Use ✅ for pass, ❌ for fail, 🔧 for fixed

---
*Optimized for: completeness*