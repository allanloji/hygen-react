---
to: <%= absPath %>/<%= page_name %>.tsx
---
import React from 'react';

/**
 * <%= page_name %>
 * returns <%= page_name %>
 */
function <%= page_name %>(){
  return <div data-testid="test" />;
};

export default <%= page_name %>;