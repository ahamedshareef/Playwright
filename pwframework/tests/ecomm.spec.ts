import {test, expect} from '@playwright/test'


test('open and check title', async({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await expect(page).toHaveTitle('Your Store')
});

test('Complete Registration', async({page}) => {
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

test.only('Searching Instock Products ', async({page}) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.locator(":text-is('Shop by Category')").click();
    await page.locator(":text-is(' Phone, Tablets & Ipod')").click();
    await page.locator("label[for=mz-fss-0--1]").click();

    const grid = page.locator('div[data-view_id="grid"][class="row"]');
    const products = grid.locator('.product-thumb');

    const count = await products.count();
    console.log("Product counts "+count);

    for(let i=0;i<count;i++){
        const eachProduct = products.nth(i).locator('.text-ellipsis-2');
        const productName = await eachProduct.textContent();
        console.log(`${i+1}th Product name is ${productName}`);
    }



});



