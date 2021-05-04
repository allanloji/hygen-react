---
to: <%= absPath %>/__tests__/<%= hook_name %>.test.ts
---
import { renderHook, act } from '@testing-library/react-hooks'
import <%= hook_name %> from '../';

describe('<%= hook_name %>', () => {
    test('', () => {
    });
});
