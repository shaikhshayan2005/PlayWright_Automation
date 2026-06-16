const { test, expect } = require('@playwright/test');

test('Add 2 items to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.locator('button:has-text("Add to cart")').nth(0).click();
  await page.locator('button:has-text("Add to cart")').nth(1).click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
});