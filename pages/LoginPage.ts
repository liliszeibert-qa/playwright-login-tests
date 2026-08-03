import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://telekomspots.hu/auth/sign-in');
  }
  
  async login(email: string, password: string) {
    await this.page.getByLabel('Email').fill(email);

    await this.page.getByLabel('Jelszó').fill(password);

    await this.page.getByRole('button', { name: 'Bejelentkezés' }).click();
  }
}