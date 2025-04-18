import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: "html",
  use: {
    trace: "on-first-retry",
    baseURL: "https://university.engenious.io/",
  },
  

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
    },
  ],
  
});
