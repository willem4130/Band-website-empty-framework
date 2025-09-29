---
allowed-tools: all
description: Build complete features with proper architecture, testing, and documentation
---

# /new-feature

## Purpose
Creates a complete feature using best practices: design first, build incrementally, test thoroughly.

## Arguments
Required: `ARGUMENTS$` describing the feature to build

## Execution

### Phase 1: Feature Analysis
SPAWN ANALYSIS AGENTS IN PARALLEL (single message, multiple Task tools):
- sherlock: Research similar implementations via WebSearch/GREP MCP
- validation: Analyze current codebase patterns to follow
- [language_specialist]: Identify integration points
- opinion: Assess complexity and approach

### Phase 2: Design & Architecture
Create feature design:
- API contracts/interfaces first
- Database schema if needed
- Component structure
- State management approach
- Error handling strategy

### Phase 3: Implementation
SPAWN IMPLEMENTATION AGENTS IN PARALLEL (single message, multiple Task tools):
- [language_specialist]: Build core feature logic
- [framework_specialist]: Create UI components (if applicable)
- tester: Write tests alongside implementation
- scribe: Document API and usage

Select specialists based on stack:
- Backend: Go→gopher, JS→jsmaster, Python→thesnake, TS→typegod
- Frontend: React→reactlord, Vue→vuelord, Next.js→nextking
- Mobile: React Native→reactlord, Flutter→fronty

### Phase 4: Integration & Validation
SPAWN VALIDATION AGENTS IN PARALLEL:
- validation: Verify feature meets requirements
- bugsy: Fix integration issues
- tester: Run end-to-end tests
- murphy: Update configs if needed

### Phase 5: Final Polish
- Add error messages and user feedback
- Optimize performance
- Add telemetry/logging
- Update documentation

## Success Criteria
- Feature works end-to-end
- All tests passing
- Integrates seamlessly
- Documented properly
- Error handling complete
- Performance acceptable

## Visual Response
```
🎯 FEATURE IMPLEMENTATION
├─ Feature: [description]
├─ Approach: [selected strategy]
├─ Components:
│  ├─ Backend: ✅ API endpoints created
│  ├─ Frontend: ✅ UI components built
│  ├─ Database: ✅ Schema updated
│  └─ Tests: ✅ XX% coverage
├─ Integration: ✅ Working end-to-end
└─ Status: Ready for deployment
```

---
*Optimized for: completeness*