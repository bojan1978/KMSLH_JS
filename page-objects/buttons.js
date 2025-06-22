import {expect} from '@playwright/test'

async function scrollToElement(page, locator){
        const elementPosition = page.locator(locator)
        await elementPosition.click({force: true})
}

async function checkParagraphSectionText(page, locator, tabText){
        await page.getByRole('tab', {name: `${locator}`}).click()
        await expect (page.getByLabel(`${locator}`).getByRole('paragraph')).toContainText(`${tabText}`)
}

async function checkSectionText(page, locator, tabText){
        await page.getByRole('tab', {name: `${locator}`}).click()
        await expect (page.getByLabel(`${locator}`)).toContainText(`${tabText}`)
}

async function checkRadio(page, radioLocator, confirmLocator){
        await page.getByRole('tab', {name: `${radioLocator}`}).click()
        await page.waitForTimeout(1000)
        expect(await page.locator(`${confirmLocator}`).getAttribute('aria-selected')).toBeTruthy()
}

async function checkIntegrationsTab(page, locator, confirmLocator, tabText){
        await page.getByRole('tab', {name: `${locator}`}).click()
        expect(await page.locator(`${confirmLocator}`).getByRole('paragraph').textContent()).toEqual(`${tabText}`)
}

async function checkRedirections(page, tabName, buttonName, redirectionLink){
        await page.getByRole('tab', {name: `${tabName}`}).click()
        await page.getByRole('link', {name: `${buttonName}`}).click()
        expect(page.url()).toContain(`${redirectionLink}`)
}

async function checkDemoPage(page){
        const breadcrum = await page.locator('.elementor-widget-container .elementor-icon-list-text').first().textContent()
        const title = await page.locator('.elementor-widget-heading h1').textContent()
        expect(breadcrum).toEqual("Book a Demo")
        expect(title).toEqual('Take your company knowledge to the next level.')
        await expect(page.locator('#top')).toBeVisible()
}

module.exports = {
        scrollToElement,
        checkParagraphSectionText,
        checkSectionText,
        checkRadio,
        checkIntegrationsTab,
        checkRedirections,
        checkDemoPage
}