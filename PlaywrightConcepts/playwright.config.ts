import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  /* Common settings for all the projects */
  use: {
     baseURL: 'https://playground.bsparksoftwaretechnologies.com',
    trace: 'on-first-retry',

    navigationTimeout: 60 * 1000,
    actionTimeout: 30*1000
  
  },

  timeout: 60 * 1000,
  expect:
  {
    timeout: 10*1000
  },
  


  /* Configure projects for major browsers */
  projects: [
    {
      name: 'QA',
      use: { ...devices['Desktop Chrome'],  
           headless : false, // We can see browser vsiually

           viewport: null,
     deviceScaleFactor:undefined,
    launchOptions: {
      args: ['--start-maximized'],
    },  
           },
    },

    // {
    //   name: 'STAGE',
    //   use: { ...devices['Desktop Firefox'],
    //      headless : true, // it runs on headless mode - no visual
    //    },
    // },

    // {
    //   name: 'PROD',
    //   use: { ...devices['Desktop Safari'],
          
    //     headless : false,
    //    },
    // },


    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
