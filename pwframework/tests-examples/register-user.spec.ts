import {test, expect} from '@playwright/test';

test('Has Title', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await expect(page).toHaveTitle('Your Store');
});

test('Navigate to Register Page', async ({page})=> {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
    await expect(page).toHaveTitle('Register Account');
    await page.locator('#input-firstname').fill("Ahamed");
    await page.locator("#input-lastname").fill('Shareef');
    await page.locator('input[placeholder="E-Mail"]').fill('shareef.006@gmail.com');
    await page.locator('input[name="email"]');
    await page.locator('input#input-email.form-control[type="email"]')
    await page.locator('input[type="tel"]').fill('9052222838');
    await page.locator('input#input-password.form-control').fill('Test@123')
    await page.locator('input[name="confirm"]').fill('Test@123')
    // await page.locator('#input-newsletter-yes').click();
    await page.getByText('No', { exact: true }).click();
    await page.locator('label[for="input-agree"]').check();
    await page.locator('input[type="submit"]').click();
    var success = await page.locator('.page-title.my-3').textContent();
    console.log(success);
});




test('Navbar Navigations' , async ({page})=> {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await expect(page).toHaveTitle('Your Store');
    //await page.locator('//*[@id="widget-navbar-217834"]/ul/li[6]/a').hover();
    //await page.getByRole('button', { name: ' My account' }).click();
    //await page.locator('a.icon-left.both.dropdown-item').hover();
    //await page.locator('a.icon-left.both.nav-link.dropdown-toggle:has(i.fas.fa-user)').hover();
    //await page.getByRole('link', { name: 'Register'}).click();
    
});
