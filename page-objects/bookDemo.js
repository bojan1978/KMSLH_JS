import {expect} from '@playwright/test'

async function buttonBookDemo(page){
    await page.locator('.header_panel__menu').getByRole('link', {name: 'Book a Demo'}).click()
    await page.waitForTimeout(3000)
}

async function inputAndAssertData(page){

            const placeholder_list = ["First name*", "Last name*", "Professional Email*", "Phone number*", "Job Title*", "Message:"]
            const text_list = ["Test", "Test", "test@user11.com", "1-512-608-5588", "Test user", "Test message"]

            for(let i=0; i<placeholder_list.length; i++){
                await page.getByPlaceholder(placeholder_list[i]).fill(text_list[i])
                expect(await page.getByPlaceholder(placeholder_list[i]).inputValue()).toEqual(text_list[i])
            }
            await page.locator('[name="country"]').click()
            await page.getByLabel('Country/Region*').selectOption('Iceland')
            await page.locator('[name="country"]').click()

            expect(await page.locator('[name="country"]').inputValue()).toEqual('Iceland')
}

module.exports = {
    buttonBookDemo,
    inputAndAssertData
}