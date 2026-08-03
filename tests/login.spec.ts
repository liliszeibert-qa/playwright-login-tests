import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.skip('Successful login example', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    'test.user@example.com',
    'ExamplePassword123!'
  );

// Example assertion - replace with an application-specific locator
await expect(page.getByRole('button', { name: 'Profil' })).toBeVisible();
});