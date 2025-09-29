---
allowed-tools: all
description: Deep debugging for complex issues with comprehensive analysis
---

# /debug

## Purpose
Deep troubleshooting of complex issues with root cause analysis.

## Arguments
Optional: `ARGUMENTS$` for specific issue/symptom

## Execution

### Execution
SPAWN DEBUGGING AGENTS IN PARALLEL (single message, multiple Task tools):
- bugsy: Analyze error patterns and stack traces
- sherlock: Research similar issues via WebSearch/GREP MCP
- murphy: Check environment and config issues
- [language_specialist]: Language-specific debugging

Select specialist: Go→gopher, JS→jsmaster, Python→thesnake, TS→typegod

Investigate: Logs, performance, memory, network, database, integrations

## Success Criteria
- Root cause identified
- Issue reproduced
- Fix implemented
- Issue no longer occurs
- Performance improved

## Failure Protocol
When cannot identify cause:
1. Add more logging/instrumentation
2. Use WebSearch for similar issues
3. Isolate components systematically
4. Report findings to user

## Visual Response
```
🔍 DEBUG ANALYSIS
├─ Issue: [problem identified]
├─ Root Cause: [cause]
├─ Stack Trace: [relevant portion]
├─ Fix Applied: [solution]
└─ Status: ✅ Resolved / ⚠️ Partial / ❌ Blocked
```

---
*Optimized for: completeness*