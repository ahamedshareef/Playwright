import {test, expect} from '@playwright/test'


test('open and check title', async({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await expect(page).toHaveTitle('Your Store')
});




test.only('Complete Registration', async({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    await page.locator('#input-firstname').fill('Ahamed');
    await page.locator("input[name='lastname']").fill('Shareef');
    await page.locator('input[placeholder="E-Mail"]').fill('nouman.ahmed11@gmail.com');
    await page.locator('input[type="tel"]').pressSequentially("9052222838", { delay: 100 });
    await page.locator(':text-is("Password")').fill('Test@1234');
    await page.locator(':text-is("Password Confirm")').fill('Test@1234');
    await page.locator('label[for="input-newsletter-yes"]').click();
    await page.locator('label[class="custom-control-label"][for="input-agree"]').click();
    await page.locator('[type="submit"][value="Continue"]').click();
    await expect(page).toHaveTitle('Your Account Has Been Created!');
    var h1= page.locator('h1[class="page-title my-3"]');
    await expect(h1).toHaveText(' Your Account Has Been Created!', { timeout: 10_000 }); 
});


test('Trainman', async({page}) => {
    await page.goto('https://www.trainman.in/');
    await page.locator('//div[@text="Book Train Tickets"]').click();


});


