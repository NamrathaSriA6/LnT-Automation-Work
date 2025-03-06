import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/DataConfiguration_testdata.json";
import DataConfiguration_PageObjects from '../Locater/DataConfiguration_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";
import path from "path";

let Description : string;

Given('Check whether the user able Navigate to landing Page of Data Configuration', async () => {
    await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Common_PageObjects.LoginPage.Username, testdata.Username)
    await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password)
    await fixture.page.click(Common_PageObjects.LoginPage.Login);
    await fixture.page.waitForTimeout(3000);
    Log.info("User successfully logged in as " + testdata.Username)
  })
  
Then('Check whether the user able to select the Data Configuration from the dropdown', async () => {
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(DataConfiguration_PageObjects.DataConfiguration.DataConfiguration)
})

Then('Verify whether after selecting Data Configuration page opened successfully', async () => {
    await fixture.page.waitForLoadState()
    await fixture.page.waitForTimeout(3000)
    if(await fixture.page.url() === testdata.DataConfigurationURL){
        Log.info('Missing Logsheet Page Opened successfully')
    }else{
        Log.info('Missing Logsheet Page not opened correctly')
    }
})

Then('Verify the Master Type',async () => {
    Log.info(`Master Type : ${await fixture.page.textContent(DataConfiguration_PageObjects.DataConfiguration.MasterType)}`)
})

Then('Verify whether user able to click on Asset Code toggle',async () => {
    await fixture.page.click(DataConfiguration_PageObjects.DataConfiguration.AssetCode_toggle)
})

Then('Verify whether Asset code field is taking input',async () => {
    try {
        await expect(await fixture.page.locator(DataConfiguration_PageObjects.DataConfiguration.Asset_Input)).toBeEditable()
        Log.info(`Asset Code field is taking input`)
    } catch (error) {
        Log.error(`Asset Code field is not taking input`)
    }
})

Then('Verify whether user able to select the Asset code from the available options',async () => {
    const assetCode = await common_methods.generateRandomFourDigitNumber()
    await common_methods.autocompleteField(DataConfiguration_PageObjects.DataConfiguration.Asset_Input, assetCode)
})

Then('Verify the Job code in the popup appeared after selecting Asset code',async () => {
    await fixture.page.waitForTimeout(3000)
    const jobCode = await fixture.page.textContent(DataConfiguration_PageObjects.DataConfiguration.Job)
    Log.info(`JobCode is : ${jobCode}`)
})

Then('Verify the Asset Code Description in the popup appeared after selecting Asset code',async () => {
    const AssetCode_Des = await fixture.page.textContent(DataConfiguration_PageObjects.DataConfiguration.AssetCode_Description)
    Log.info(`Asset Code is : ${AssetCode_Des}`)
})

Then('Select the required field by checking the Checkbox',async () => {
    await fixture.page.check(DataConfiguration_PageObjects.DataConfiguration.InvoiceCheckbox)
})

Then('Verify the Description of the field selected',async () => {
    const description = await fixture.page.textContent(DataConfiguration_PageObjects.DataConfiguration.InvoiceDescription)
    if(description)
        Description = description.trim().toUpperCase()
})

Then('Check whether user able to select the Date by clicking on data picker',async () => {
    await common_methods.datepicker(DataConfiguration_PageObjects.DataConfiguration.DatePicker,2024,'Aug', 7)
})

Then('Check whether user able to click on Document upload Icon for the selected field',async () => {
    await fixture.page.click(DataConfiguration_PageObjects.DataConfiguration.InvoiceDocument_upload)
})

Then('check whether user able to upload a document',async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.locator(DataConfiguration_PageObjects.DataConfiguration.upload).setInputFiles('src/Documents/DataConfigurationFile.xlsx')
    
})

Then('Check whether user able to select the Type from the list of options',async () => {
    await fixture.page.waitForLoadState()
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(DataConfiguration_PageObjects.DataConfiguration.SelectType)
    await fixture.page.click(`// mat-option // span[contains(text(),'${Description}')]`)
})

Then('Check whether the user able to enter the description for the document uploaded',async () => {
    await fixture.page.fill(DataConfiguration_PageObjects.DataConfiguration.FileDescription, 'test')
})

Then('Check whether user able to click on upload documents button',async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(DataConfiguration_PageObjects.DataConfiguration.Upload_Documents_btn)
})

Then('Check whether user able to click on Submit button',async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(DataConfiguration_PageObjects.DataConfiguration.Submit_btn)
})






Then('Select the field with RC by checking the Checkbox',async () => {
    await fixture.page.check(DataConfiguration_PageObjects.DataConfiguration.RCCheckbox)
})

Then('Verify the user able to click on document upload icon withwout entering date',async () => {
    await fixture.page.click(DataConfiguration_PageObjects.DataConfiguration.RCDocument_upload)
})



Then('check whether user able to upload an invalid document',async () => {
    await fixture.page.locator(DataConfiguration_PageObjects.DataConfiguration.upload).setInputFiles(path.join(__dirname,'GroupMaster.feature'))
    if(await fixture.page.locator(DataConfiguration_PageObjects.DataConfiguration.AlertBox).isVisible()){
        Log.info(await fixture.page.textContent(DataConfiguration_PageObjects.DataConfiguration.AlertText))
    }
})

