import {expect} from '@playwright/test'

async function toggleAcess(page){
    await page.locator('#acwp-toolbar-btn-wrap').getByRole('button').click()
    await page.waitForTimeout(1000)
}

async function checkToggles(page){
    let slider_list = ['[data-name="contrast"]', '[data-name="incfont"]', '[data-name="readable"]', '[data-name="underline"]']
        for(const slider of slider_list){
            expect(await page.locator(slider).isChecked()).toBeFalsy()
        }
}

async function menuColors(page){
    let menuLinks = ['Our Solutions', 'Integrations', 'Resources', 'Case Studies', 'About', 'Book a Demo']
        
    for(const menuLink of menuLinks){
        await expect(page.locator('.header_panel__menu').getByRole('link', {name: menuLink})).toHaveCSS('background-color', 'rgb(255, 233, 1)')
    }
}

module.exports = {
    toggleAcess,
    checkToggles,
    menuColors
}