import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/FixedAssetProcess_testdata.json";
import FAP_PageObjects from '../Locater/FixedAssetProcess_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";



let Base: common_methods;
let Assetcode: string;

//Global Variable declarations

Given('Check whether the user able Navigate to landing Page of Fixed Asset Process', async () => {
  await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(Common_PageObjects.LoginPage.Username, testdata.Username)
  await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(Common_PageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("User successfully logged in as " + testdata.Username)
})

Then('Check whether the user able to select the Process from the dropdown', async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(FAP_PageObjects.FAP.Process)
})

Then('Check whether the user able to select the Fixed Asset Process from the dropdown', async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(FAP_PageObjects.FAP.FixedAssetProcess)
})

Then('Verify whether FAP page opened correctly by checking the page url', async () => {
    await fixture.page.waitForLoadState()
    if(await fixture.page.url() === testdata.FAPURL){
        Log.info('Fixed Asset Process Page opened successfully')
    }else{
        Log.info('Error in opening Fixed Asset Process page')
    }
})

Then('Verify whether Request type field is editable and taking input', async () => {
    try {
        await expect(await fixture.page.locator(FAP_PageObjects.FAP.Requesttype_input)).toBeEditable()
        Log.info(`Request type field is taking input`)
    } catch (error) {
        Log.error(`Request type field is not taking input`)
    }
})

Then('Verify whether user able to select Depreciation Process in Request type field', async () => {
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.Depreciation_Process)
})

Then('Verify whether Company field is editable and taking input', async () => {
    try {
        await expect(await fixture.page.locator(FAP_PageObjects.FAP.Company)).toBeEditable()
        Log.info(`Company field is taking input`)
    } catch (error) {
        Log.error(`Company field is not taking input`)
    }
})

Then('Verify whether user able to select Company field', async () => {
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Company, testdata.Company)
})

Then('Verify whether Owner tag field is editable and taking input', async () => {
    try {
        await expect(await fixture.page.locator(FAP_PageObjects.FAP.Ownertag)).toBeEditable()
        Log.info(`Owner tag field is taking input`)
    } catch (error) {
        Log.error(`Owner tag field is not taking input`)
    }
})


Then('Verify whether user able to select Owner tag field', async () => {
    await fixture.page.click(FAP_PageObjects.FAP.Ownertag)
    await common_methods.ChooseOption()
})

Then('Check whether user able to select duration for FAP process', async () => {
    await common_methods.eipdaterangepicker(FAP_PageObjects.FAP.Duration, 2020)
})

Then('Verify whether user able to click on Search button for FAP process', async () => {
    await fixture.page.click(FAP_PageObjects.FAP.Search_btn)
})

Then('Verify whether user able to click on a Request number to verify the details for {string}', async (message) => {
    await fixture.page.waitForLoadState()
    if(await fixture.page.locator(FAP_PageObjects.FAP.RequestNumber_click).isVisible()){
        const RequestNum = await fixture.page.textContent(FAP_PageObjects.FAP.RequestNumber_click)
        const RequestType = await fixture.page.textContent(FAP_PageObjects.FAP.RequestType)
        const RequestDate = await fixture.page.textContent(FAP_PageObjects.FAP.RequestDate)
        await fixture.page.waitForTimeout(2000)

        await fixture.page.click(FAP_PageObjects.FAP.RequestNumber_click)
        await fixture.page.waitForTimeout(2000)

        const RequestNum_popup = await fixture.page.textContent(FAP_PageObjects.FAP.RequestNumber_click)
        const RequestType_popup = await fixture.page.textContent(FAP_PageObjects.FAP.RequestType)
        const RequestDate_popup = await fixture.page.textContent(FAP_PageObjects.FAP.RequestDate)
        
        if(RequestNum?.trim() === RequestNum_popup?.trim()){
            Log.info(`Request Number is Matching for ${message}`)
        }else{
            Log.info(`Request Number is not matching for ${message}`)
        }
        if(RequestType?.trim() === RequestType_popup?.trim()){
            Log.info(`Request Type is Matching for ${message}`)
        }else{
            Log.info(`Request Type is not matching for ${message}`)
        }
        if(RequestNum?.trim() === RequestNum_popup?.trim()){
            Log.info(`Request Number is Matching for ${message}`)
        }else{
            Log.info(`Request Number is not matching for ${message}`)
        }
        await fixture.page.click(FAP_PageObjects.FAP.Close_popup)
    }else{
        Log.info(`No records available for ${message}`)
    }
})

Then('Verify whether user able to create a new Request for {string}', async (message) => {
    await fixture.page.waitForLoadState()
    await fixture.page.click(FAP_PageObjects.FAP.NewRequest_btn)
    Log.info(`Successfully clicked on new request for ${message}`)
    // await fixture.page.locator()
})

Then('Verify whether user able to select Acqn Date change in Request type field', async() => {
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.Acqn_Date_change)
})

Then('Verify whether user able to select Acqn Value change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.Acqn_Value_change)
})

Then('Verify whether user able to select IND AS Acqn Value change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.IND_AS_Acqn_Value_change)
})

Then('Verify whether user able to select Cumulative Depreciation change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.Cumulative_Depreciation_change)
})

Then('Verify whether user able to select IND AS Cumulative Depreciation change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.IND_AS_Cumulative_Depreciation_change)
})

Then('Verify whether user able to select IND AS Book Value change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.IND_AS_Book_Value_change)
})

Then('Verify whether user able to select Book Value change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.Book_Value_change)
})

Then('Verify whether user able to select Depreciation percent change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.Depreciation_percent_change)
})

Then('Verify whether user able to select Owner Code change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.Owner_Code_change)
})

Then('Verify whether user able to select P or V Tag  change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.PorV_Tag_change)
})

Then('Verify whether user able to select Error Value Tag change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.Error_Value_Tag_change)
})

Then('Verify whether user able to select Disposed Date change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.Disposed_Date_change)
})

Then('Verify whether user able to select Asset Status change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.Asset_Status_change)
})

Then('Verify whether user able to select Opening Balance reorganisation in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.Opening_Balance_reorganisation)
})

Then('Verify whether user able to select Disposed Value change in Request type field', async()=>{
    await common_methods.autocompleteField(FAP_PageObjects.FAP.Requesttype_input, testdata.Disposed_Value_change)
})

Then('', async()=>{

})
