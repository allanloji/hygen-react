---
to: hooks/index.ts
unless_exists: true
---
import <%= hook_name %> from './<%= hook_name %>';

export { <%= hook_name %>, };