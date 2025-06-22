import {test, expect} from '@playwright/test';
import { beforeEach } from 'node:test';
const buttonsPage = require('../page-objects/buttons')
const headerLink = require('../page-objects/headers')
const buttonData = require('../test-data/buttons.json')
const headerData = require('../test-data/headerLinksData.json')

test.beforeEach(async ({page}) => {
    await page.goto('/')
});

test.describe('Check tab buttons and radios', () => {

    test('Management tabs', async({page}) => {
        
        await buttonsPage.scrollToElement(page, buttonData.scrollDataID.Management_tab)

        await buttonsPage.checkParagraphSectionText(page, buttonData.tabTitle.Self_Service, buttonData.pageTitle.Self_Service)
        await buttonsPage.checkSectionText(page, buttonData.tabTitle.Onboarding_Training, buttonData.pageTitle.Onboarding_Training)
        await buttonsPage.checkSectionText(page, buttonData.tabTitle.Field_Service, buttonData.pageTitle.Field_Service)
        await buttonsPage.checkParagraphSectionText(page, buttonData.tabTitle.Call_Center, buttonData.pageTitle.Call_center)
    })

    test('Data section', async({page}) => {

        await buttonsPage.scrollToElement(page, buttonData.scrollDataID.Data_section_tab)

        await buttonsPage.checkRadio(page, buttonData.tabTitle.Radio_2, buttonData.scrollLocator.Radio_2)
        await buttonsPage.checkRadio(page, buttonData.tabTitle.Radio_3, buttonData.scrollLocator.Radio_3)
        await buttonsPage.checkRadio(page, buttonData.tabTitle.Radio_1, buttonData.scrollLocator.Radio_1)
    })

    test('3rd party tabs', async({page}) => {

        await buttonsPage.scrollToElement(page, buttonData.scrollDataID.Integrations_tab)

        await buttonsPage.checkIntegrationsTab(page, buttonData.tabTitle.Azure, buttonData.scrollLocator.Azure, buttonData.pageTitle.Azure)
        await buttonsPage.checkIntegrationsTab(page, buttonData.tabTitle.Salesforce, buttonData.scrollLocator.Salesforce, buttonData.pageTitle.Salesforce)
        await buttonsPage.checkIntegrationsTab(page, buttonData.tabTitle.Genesys, buttonData.scrollLocator.Genesys, buttonData.pageTitle.Genesys)
        await buttonsPage.checkIntegrationsTab(page, buttonData.tabTitle.AWS_Integration, buttonData.scrollLocator.AWS_Integration, buttonData.pageTitle.AWS_Integration)
    })
})

test.describe('Button functionality', () => {

    test('Knowledge section Learn More button', async({page}) => {

        await buttonsPage.scrollToElement(page, buttonData.scrollDataID.Knowledge_section)

        await headerLink.checkPageBreadcrumbs(page, buttonData.buttonTitle.Learn_more, headerData.breadcrumbTitle.Call_center, headerData.pageTitle.Call_center)
    })

    test('Knowledge section Book a Demo button', async({page}) => {

        await buttonsPage.scrollToElement(page, buttonData.scrollDataID.Knowledge_section)

        await page.locator('#e-n-tab-content-1806174081').getByRole('link', {name: 'Book a demo'}).click()
        await page.waitForTimeout(1000)

        await buttonsPage.checkDemoPage(page)
    })

    test('Integrations button', async({page}) => {

        await buttonsPage.scrollToElement(page, buttonData.scrollDataID.Integrations_tab)

        await page.getByRole('link', {name: 'View all Integrations'}).click()
        await headerLink.checkDirectLinkPage(page, buttonData.scrollLocator.Integration, headerData.breadcrumbTitle.Integrations, headerData.pageTitle.Integrations)
    })
    
    test('Tailored demo button', async({page}) => {

        await buttonsPage.scrollToElement(page, buttonData.scrollDataID.Tailored_demo_button)

        await page.getByRole('link', {name: 'Get a tailored demo today'}).click()
        await page.waitForTimeout(1000)

        await buttonsPage.checkDemoPage(page)
    })
})

test.describe('Redirection to external links', () => {

    test.beforeEach(async({page}) => {
        await buttonsPage.scrollToElement(page, buttonData.scrollDataID.Integrations_tab)
    })

    test('Azure OpenAI Integration', async({page}) => {
        await buttonsPage.checkRedirections(page, buttonData.tabTitle.Azure, buttonData.buttonTitle.Azure, buttonData.redirectionLinks.Azure)
    })

    test('Salesforce Integration', async({page}) => {
        await buttonsPage.checkRedirections(page, buttonData.tabTitle.Salesforce, buttonData.buttonTitle.Salesforce, buttonData.redirectionLinks.Salesforce)
    })

    test('Genesys Integration', async({page}) => {
        await buttonsPage.checkRedirections(page, buttonData.tabTitle.Genesys, buttonData.buttonTitle.Genesys, buttonData.redirectionLinks.Genesys)
    })

    test('AWS Integration', async({page}) => {
        await buttonsPage.checkRedirections(page, buttonData.tabTitle.AWS_Integration, buttonData.buttonTitle.AWS_Integration, buttonData.redirectionLinks.AWS_Integration)
    })
    
})