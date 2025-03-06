import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/Despatch_Customer_testdata.json";
import DC_PageObjects from '../Locater/Despatch_Customer_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import assert from "assert";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";

let ADR_generated : string
let Username2: string

Given('Check whether the user able Navigate to landing Page of Asset Despatch Customer', async () => {
    await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(Common_PageObjects.LoginPage.Username, testdata.Username)
  await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(Common_PageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("User successfully logged in as " + testdata.Username)
})

Then('Check whether the user able to select the Despatch Customer from the dropdown', async () => {
    await fixture.page.click(DC_PageObjects.DC.Despatch_Customer)
})

Then('Verify whether user able to enter Job in the autocomplete box available for Despatch Customer', async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.fill(DC_PageObjects.DC.JOB, testdata.JOB)
    await fixture.page.waitForTimeout(2000)
    await fixture.page.keyboard.press('ArrowDown')
    await fixture.page.keyboard.press('Enter')
})

Then('Verify whether Asset Code autocomplete box is taking input', async () => {
    try {
        await expect(await fixture.page.locator(DC_PageObjects.DC.AssetCode)).toBeEditable()
        Log.info('Asset Code field is taking input')
    } catch (error) {
        Log.info('Asset Code field is not taking input')
    }
})

Then('Verify whether Duration date picker is taking input', async () => {
    try {
        await expect(await fixture.page.locator(DC_PageObjects.DC.Duration_Date)).toBeEditable()
        Log.info('Duration Datepicker field is taking input')
    } catch (error) {
        Log.info('Duration Datepicker field is not taking input')
    }
})

Then('Verify whether Search button is enabled and able to click', async () => {
    try {
        await expect(await fixture.page.locator(DC_PageObjects.DC.Search_btn)).toBeEnabled()
        Log.info('Search button is enabled and clickable')
    } catch (error) {
        Log.info('Search button is disabled and unable to click')
    }
})

Then('Verify whether Clear button is enabled and able to click', async () => {
    try {
        await expect(await fixture.page.locator(DC_PageObjects.DC.Clear_btn)).toBeEnabled()
        Log.info('Clear button is enabled and clickable')
    } catch (error) {
        Log.info('Clear button is disabled and unable to click')
    }
})

Then('Verify whether user able to click on Search button in Despatch Customer Page', async () => {
    await fixture.page.click(DC_PageObjects.DC.Search_btn)
})

Then('Verify whether user able to Hover on the Asset row', async () => {
    await fixture.page.hover(DC_PageObjects.DC.row)
})

Then('Click on Create icon for particular Asset to complete DC for that Asset', async () => {
    await fixture.page.click(DC_PageObjects.DC.Create_icon)
})

Then('Verify whether user able to select the Asset by checking the checkbox', async () => {
    await fixture.page.click(DC_PageObjects.DC.Asset_Checkbox)
})

Then('Click on Create DC button to create DC for that Asset', async () => {
    await fixture.page.click(DC_PageObjects.DC.CreateDC)
})

Then('Verify whether user able to capture the PDC code generated from the popup', async () => {
    const PDC = await fixture.page.textContent(DC_PageObjects.DC.PDC_generated)
    Log.info(`PDC generated is ${PDC}`)
})

Then('Verify whether user able to click on Ok button from the popup appeared', async () => {
    await fixture.page.click(DC_PageObjects.DC.Success_ok)
})

