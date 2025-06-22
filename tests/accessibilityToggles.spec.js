import {test, expect} from '@playwright/test';
import { beforeEach } from 'node:test';
const toggle = require('../page-objects/accessToggle')

test.beforeEach(async ({page}) => {
    await page.goto('/')
    await toggle.toggleAcess(page)
});

test.describe('Validate Accessibility Toggles', () => {

    test('Accessibility window opened', async({page}) => {
        await expect(page.locator('#acwp-toolbar-module')).toBeVisible()
    })

    test('Check toggle default state', async({page}) => {
        await toggle.checkToggles(page)
    })

    test('Togle highlight links', async({page}) => {
        const highlightSlider = page.locator('[data-name="underline"]')
        await highlightSlider.click()
        expect(await highlightSlider.isChecked()).toBeTruthy()

        await toggle.menuColors(page)
    })

})