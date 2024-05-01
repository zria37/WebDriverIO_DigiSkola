describe('Test Case Check Out Product to Chart', () => {
    it('Test Case Success', async () => {
        const url = "https://www.saucedemo.com/"
        const url_dashboard= "https://www.saucedemo.com/inventory.html"
        const url_cart = "https://www.saucedemo.com/cart.html"
        const Username = await browser.$('//*[@id="user-name"]')
        const Password = await browser.$('//*[@id="password"]')
        const Login = await browser.$('//*[@id="login-button"]')
        const btn_check_out = await browser.$('//*[@id="add-to-cart-sauce-labs-backpack"]')


        await browser.url(url)
        await expect(browser).toHaveTitle('Swag Labs')
        await Username.setValue('standard_user')
        await Password.setValue('secret_sauce')
        await Login.click()
        await expect(browser).toHaveUrl(url_dashboard)
        await btn_check_out.click()
        if (await btn_check_out.isExisting() == false) {
            await browser.$('//*[@id="shopping_cart_container"]/a').click()
        }else{
            await btn_check_out.click()
        }
        await expect(browser).toHaveUrl(url_cart)
        await browser.pause(10000)
    });
});