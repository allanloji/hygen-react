---
to: <%= absPath %>/<%= component_name %>.tsx
---
import React from 'react';

interface <%= component_name %>Props{};

/**
 * <%= component_name %>
 * returns <%= component_name %>
 */
function <%= component_name %>({}:<%= component_name %>Props){
  return <div data-testid="test" />;
};

export default <%= component_name %>;