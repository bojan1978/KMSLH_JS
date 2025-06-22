import {expect} from '@playwright/test'

async function clickHoverLink(page, linkName, selector){
        await page.locator('.header_panel__nav-list').getByRole('link', {name: `${linkName}`}).click()
        await page.waitForTimeout(2000)
        await expect(selector).toBeVisible()
}

async function clickDirectLink(page, selector){
        await page.locator('.header_panel__nav-list').getByRole('link', {name: `${selector}`}).click()
        await page.waitForTimeout(3000)
}

async function checkPageBreadcrumbs(page, selector, breadcrumTitle, headTitle){
        await page.getByRole('link', {name: `${selector}`}).click()

        const breadcrum = await page.locator('#breadcrumbs').textContent()
        const title = await page.locator('.elementor-widget-heading h1').textContent()

        expect(breadcrum).toEqual(breadcrumTitle)
        expect(title).toEqual(headTitle)
}

async function checkPage(page, selector, breadcrumTitle, headTitle){
        await page.getByRole('link', {name: `${selector}`}).click()

        const breadcrum = await page.locator('.elementor-widget-container .elementor-icon-list-text').first().textContent()
        const title = await page.locator('.elementor-widget-heading h1').textContent()

        expect(breadcrum).toEqual(breadcrumTitle)
        expect(title).toEqual(headTitle)
}

async function checkDirectLinkPage(page, data_id, breadcrumTitle, headTitle){
        const breadcrum = await page.locator(`${data_id} .elementor-icon-list-text`).textContent()
        const title = await page.locator('.elementor-widget-heading h1').textContent()

        expect(breadcrum).toEqual(breadcrumTitle)
        expect(title).toEqual(headTitle)
}



module.exports = {
    clickHoverLink,
    clickDirectLink,
    checkPageBreadcrumbs,
    checkPage,
    checkDirectLinkPage
}