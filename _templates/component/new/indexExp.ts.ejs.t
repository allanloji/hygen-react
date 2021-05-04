---
to: <%= indexPath %>/index.ts
unless_exists: true
---
import <%= component_name %> from './<%= component_name %>';

export { <%= component_name %>, };