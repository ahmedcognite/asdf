import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

const USERNAME = process.env.API_USERNAME;
const PASSWORD = process.env.API_PASSWORD;

export default defineConfig({
  env: {
    USERNAME,
    PASSWORD,
  },
  e2e: {
    ...nxE2EPreset(__filename, { cypressDir: 'src', bundler: 'vite' }),
    baseUrl: 'http://localhost:4200',
  },
});
