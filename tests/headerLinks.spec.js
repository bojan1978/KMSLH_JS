import {test, expect} from '@playwright/test';
import { beforeEach } from 'node:test';
const headerLink = require('../page-objects/headers')
const data = require('../test-data/headerLinksData.json')

test.beforeEach(async ({page}) => {
    await page.goto('/')
});

test.describe('Our solutions link', () => {

    test.beforeEach(async ({page}) => {
        const selector = page.getByRole('navigation', { name: 'I Need Knowledge Management' })
        await headerLink.clickHoverLink(page, data.headerLink.Our_solutions, selector)
    });

    test('Call center', async({page}) => {
        await headerLink.checkPageBreadcrumbs(page, data.hoverLink.Call_center, data.breadcrumbTitle.Call_center, data.pageTitle.Call_center)
    })

    test('Self Service', async({page}) => {
        await headerLink.checkPageBreadcrumbs(page, data.hoverLink.Self_Service, data.breadcrumbTitle.Self_Service, data.pageTitle.Self_Service)
    })

    test('Onboarding & Training', async({page}) => {
        await headerLink.checkPageBreadcrumbs(page, data.hoverLink.Onboarding_Training, data.breadcrumbTitle.Onboarding_Training, data.pageTitle.Onboarding_Training)
    })
    
    test('Field Service', async({page}) => {
        await headerLink.checkPageBreadcrumbs(page, data.hoverLink.Field_Service, data.breadcrumbTitle.Field_Service, data.pageTitle.Field_Service)
    })
})

test.describe('Resources', () => {

    test.beforeEach(async ({page}) => {
        const selector = page.locator('[aria-labelledby="dropdown_menu-2"]')
        await headerLink.clickHoverLink(page, data.headerLink.Resources, selector)
    });

    test('Blog', async({page}) => {
        await headerLink.checkPageBreadcrumbs(page, data.hoverLink.Blog, data.breadcrumbTitle.Blog, data.pageTitle.Resources)
    })

    test('Videos', async({page}) => {
        await headerLink.checkPageBreadcrumbs(page, data.hoverLink.Videos, data.breadcrumbTitle.Videos, data.pageTitle.Resources)
    })

    test('News', async({page}) => {
        await headerLink.checkPageBreadcrumbs(page, data.hoverLink.News, data.breadcrumbTitle.News, data.pageTitle.Resources)
    })
    
    test('Guides', async({page}) => {
        await headerLink.checkPageBreadcrumbs(page, data.hoverLink.Guides, data.breadcrumbTitle.Guides, data.pageTitle.Resources)
    })

    test('Webinars', async({page}) => {
        await headerLink.checkPageBreadcrumbs(page, data.hoverLink.Webinars, data.breadcrumbTitle.Webinars, data.pageTitle.Resources)
    })

    test('Reports', async({page}) => {
        await headerLink.checkPageBreadcrumbs(page, data.hoverLink.Reports, data.breadcrumbTitle.Reports, data.pageTitle.Resources)
    })

    test('ROI Calculator', async({page}) => {
        await headerLink.checkPage(page, data.hoverLink.ROI_Calculator, data.breadcrumbTitle.ROI_Calculator, data.pageTitle.ROI_Calculator)
    })
})

test.describe('About us', () => {

    test.beforeEach(async ({page}) => {
        const selector = page.locator('[aria-labelledby="dropdown_menu-4"]')
        await headerLink.clickHoverLink(page, data.headerLink.About_us, selector)
    });

    test('About us', async({page}) => {
        await page.getByRole('link').filter({hasText: data.hoverLink.About_us}).click()
        const formTitle = await page.locator('.elementor-widget-container .elementor-icon-list-text').first().textContent()
        const pageTitle = await page.locator('.elementor-widget-heading h1').textContent()
        expect(formTitle).toEqual(data.breadcrumbTitle.About_us)
        expect(pageTitle).toEqual(data.pageTitle.About_us)
    })

    test('Careers', async({page}) => {
        await headerLink.checkPage(page, data.hoverLink.Careers, data.breadcrumbTitle.Careers, data.pageTitle.Careers)
    })

    test('Lighthouse University', async({page}) => {
        await headerLink.checkPage(page, data.hoverLink.Lighthouse_University, data.breadcrumbTitle.Lighthouse_University, data.pageTitle.Lighthouse_University)
    })
    
    test('Contact us', async({page}) => {
        await headerLink.checkPage(page, data.hoverLink.Contact_us, data.breadcrumbTitle.Contact_us, data.pageTitle.Contact_us)
    })
})

test.describe('Links without hovers', () => {

    test('Integrations redirection ', async({page}) => {
        await headerLink.clickDirectLink(page, data.headerLink.Integrations)
        await headerLink.checkDirectLinkPage(page, '[data-id="b429599"]', data.breadcrumbTitle.Integrations, data.pageTitle.Integrations)
    })

    test('Case Studies redirection ', async({page}) => {
        await headerLink.clickDirectLink(page, data.headerLink.Case_Studies)
        await headerLink.checkDirectLinkPage(page, '[data-id="24d8a031"]', data.breadcrumbTitle.Case_Studies, data.pageTitle.Case_Studies)
    })
})