import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/CostofPlant.json";
import CPAssetMinorAllocation_PageObjects from '../Locater/CPAssetMinorAllocation_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";
import { Console } from "node:console";



let Base: common_methods;

//Global Variable declarations



Then('Check whether the user able to select the Asset Minor Allocation from the dropdown', async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.AssetrMinorAllocation)
})

Then('Verify whether after selecting Cost of plant Asset Minor Allocation page opened successfully', async () => {
    await fixture.page.waitForLoadState()
    if(await fixture.page.url() === testdata.CPAssetMinorAllocationURL){
        Log.info('CP Asset minor Allocation Page opened successfully')
    }else{
        Log.info('Error in opening CP Asset minor Allocation page')
    }
})

Then('Verify whether user able to select job code from the list of options', async () => {

    await common_methods.autocompleteField(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.JobCode_input, testdata.AssetMinorAllocationJobCode)
    
})

Then('Check Whether user able to check Group Code Radio button', async () => {
    await fixture.page.click(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.GroupCodeRadio_btn)
})

Then('Verify whether user able to click on Go button to display the details', async () => {
    await fixture.page.click(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.Go_btn)
})

Then('Verify whether User able to Click on Allocate button for selected Group code', async () => {
    await fixture.page.click(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.Allocate_btn)
})

Then('Verify whether Minor Asset Allocation dialogue container has appeared', async () => {
    try {
        await expect(await fixture.page.locator(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.JobCode)).toBeVisible()
        Log.info('Asset Allocation dialogue container has appeared')
    } catch (error) {
        Log.error('Asset Allocation dialogue container does not appeared')
    }
})

Then('Verify the Job Code in the dialogue container and print details in console', async () => {
    const Jobcode = await fixture.page.textContent(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.JobCode)
    Log.info(`Jobcode of selected Group code is ${Jobcode}`)
})

Then('Verify the Group code and Group description and print details in console', async () => {
    const GroupCode = await fixture.page.textContent(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.GroupCode)
    Log.info(`GroupCode of selected Group code is ${GroupCode}`)
})

Then('Verify the Recon code and description and print details in console', async () => {
    const ReconCode = await fixture.page.textContent(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.ReconCode)
    Log.info(`ReconCode of selected Group code is ${ReconCode}`)
})

Then('Check whether Allocate percentage is taking anything other than 100', async () => {
    
})

Then('Verify whether user able to click on Save button to save Minor Asset Allocation', async () => {
    await fixture.page.click(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.Save_btn)
    await fixture.page.waitForTimeout(1000)
    Log.info(await fixture.page.textContent(Common_PageObjects.Common.PopupMessage))
    await fixture.page.click(Common_PageObjects.Common.Popup_Ok_btn)
})

Then('Check Whether user able to check Asset Code Radio button', async () => {
    await fixture.page.click(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.AssetCodeRadio_btn)
})

Then('Verify whether User able to Click on Allocate button for selected Asset code', async () => {
    await fixture.page.click(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.Allocate_btn)
})

Then('Verify the Asset code and Asset description and print details in console', async () => {
    const AssetCode = await fixture.page.textContent(CPAssetMinorAllocation_PageObjects.AssetminorAllocation.AssetCode)
    Log.info(`AssetCode of selected Group code is ${AssetCode}`)
})

Then('', async () => {
    
})

Then('', async () => {
    
})