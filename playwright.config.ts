import { defineConfig } from '@playwright/test';
console.log('***************playwright config file************');

export default defineConfig({
  timeout: 60000, // Global timeout for all actions
  expect: {
    timeout: 60000, // Timeout for expect conditions
  },
  use: {
    actionTimeout: 60000, // Timeout for actions like click
    navigationTimeout: 60000, // Timeout for page navigations
  },
});

console.log('---------------playwright config file------------');