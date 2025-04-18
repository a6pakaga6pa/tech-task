import { test, expect } from "@playwright/test";

test("Existing User Login", async ({ page }) => {
  await page.goto("/");

  // Open Login form
  await page.getByRole("button", { name: "Sign Up / Login" }).click();
  await page.getByRole("link", { name: "Login" }).click();

  // Enter credentials and login
  await page.getByRole("textbox", { name: "email" }).fill('serebrennikov_m@ukr.net')
  await page.getByRole("textbox", { name: "password" }).fill('testPassword1!')
  await page.getByRole("button", { name: "Login" }).click();

  // Verify result
  await page.locator('button[aria-label="open drawer"]').click();
  const title = await page.locator('[class*="User_card__title"]').textContent();
  expect(title?.trim()).toBe('Maksym Serebrennykov')

  // In general, it would be better to use Page Object pattern to scale the framework, but not for the only test
});
