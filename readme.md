# saasy-ai

## role
- Intent interpretation and routing analysis for the control plane.

## allowed responsibilities
- Analyze intent + context + capabilities and recommend routing.

## forbidden overlaps
- No auth/tenancy, no execution, no tool schema ownership.

## interfaces
- `analyzeIntent(controlRequest, authContext, capabilities)` returns analysis and recommendation.

## mock limitations
- Analysis is deterministic and does not execute any runtime logic.
