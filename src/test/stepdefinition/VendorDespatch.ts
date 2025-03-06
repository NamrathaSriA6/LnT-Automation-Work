import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/VendorDespatch_testdata.json";
import VendorDespatch_PageObjects from '../Locater/VendorDespatch_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";
import { fix } from "mssql";



let Base: common_methods;
let Assetcode: string;
let DCDate: string;
let DCDay:number;
let DCMonth:string;
let DCYear:number;
//Global Variable declarations

Given('Check whether the user able Navigate to landing Page of Vendor despatch', async () => {
  await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(Common_PageObjects.LoginPage.Username, testdata.Username)
  await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(Common_PageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("User successfully logged in as " + testdata.Username)
})

Then('Check whether the user able to select the Vendor despatchs from the dropdown', async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(VendorDespatch_PageObjects.VD.vendorDespatch)
})

Then('Verify whether after selecting VendorDespatch page opened successfully', async () => {
    await fixture.page.waitForLoadState()
    if(await fixture.page.url() === testdata.VendorDespatchURL){
        Log.info('Vendor Despatch Page opened successfully')
    }else{
        Log.info('Error in opening Vendor Despatch page')
    }
})

Then('Verify whether user able to select Jobcode from the list of options', async () => {
    await fixture.page.waitForLoadState()
    await fixture.page.fill(VendorDespatch_PageObjects.VD.JobCode, testdata.JobCode)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press('ArrowDown')
    await fixture.page.keyboard.press('Enter')
})

Then('Verify whether user able to click on Go button to get all the Assets available', async () => {
    await fixture.page.click(VendorDespatch_PageObjects.VD.Go_btn)
})

Then('Verify whether user able to click on Asset Code to add the Vendor Despatch', async () => {
    await fixture.page.waitForTimeout(5000)
    const assetcode = await fixture.page.textContent(VendorDespatch_PageObjects.VD.Assetcode)
    if(assetcode){
        Assetcode = assetcode.trim()
    }
    await fixture.page.click(VendorDespatch_PageObjects.VD.Assetcode)
})

Then('Verify the Asset code is same as selected in the popup', async () => {
    await fixture.page.waitForTimeout(5000)
    const assetcode= await fixture.page.textContent(VendorDespatch_PageObjects.VD_popup.AssetCode)
    if(assetcode?.trim() === Assetcode){
        Log.info(`${Assetcode} is matching`)
    }else{
        Log.info(`${Assetcode} is not matching`)
    }
})

Then('Verify the Job code is same as selected in the popup', async () => {
    const jobCode= await fixture.page.textContent(VendorDespatch_PageObjects.VD_popup.JobCode)
    if(jobCode?.trim() === testdata.JobCode){
        Log.info(`${testdata.JobCode} is matching`)
    }else{
        Log.info(`${testdata.JobCode} is not matching`)
    }
})

Then('Verify whether user able to select DC Date', async () => {
    try {
        const query = `
        DECLARE  
            @intCompanyCode SMALLINT = 1, 
            @strCompanyCode VARCHAR(5) = 'LE',
            @JobCode VARCHAR(15) = '${testdata.JobCode}', 
            @AssetCode VARCHAR(15) = '${Assetcode}'
            SELECT top 1 DLS_LOG_DATE,* FROM EIP40ALM.OAM.WRK_D_Logsheet WHERE DLS_Asset_Code = @AssetCode AND DLS_Company_Code = @intCompanyCode  AND DLS_Sub_Work_Type<> 'SI' ORDER BY DLS_Inserted_On DESC
        `
        const data = await sql.executeQuery("All", query);
        const DCDate = data.recordset[0].DLS_LOG_DATE;
        Log.info(`DC Date: ${DCDate}`);

        const date = new Date(DCDate);
        if (!isNaN(date.getTime())) { // Checking if the date is valid
            DCDay = date.getDate();
            DCMonth = date.toLocaleString('default', { month: 'short' });
            DCYear = date.getFullYear();
            
            Log.info(`--${DCDay}--${DCMonth}--${DCYear}--`);
        } else {
            Log.error('Failed to parse DCDate.');
        }

        await common_methods.datepicker(VendorDespatch_PageObjects.VD_popup.DCDatePicker, DCYear, DCMonth, DCDay)
    } catch (error) {
        Log.error('Error in getting DC date');
    }


})

Then('Check whether user able to enter Despatch through details in the input field', async () => {
    await fixture.page.fill(VendorDespatch_PageObjects.VD_popup.DespatchThrough, testdata.Despatchthrough)
})

Then('Check whether user able to enter Other Despatch details in the input field', async () => {
    await fixture.page.fill(VendorDespatch_PageObjects.VD_popup.OtherDespatch, testdata.otherDespatch)
})

Then('Check whether user able to enter Freight to pay details in the input field', async () => {
    await fixture.page.fill(VendorDespatch_PageObjects.VD_popup.Freighttopay, testdata.Freighttopay)
})

Then('Check whether user able to enter No of DCs details in the input field', async () => {
    await fixture.page.fill(VendorDespatch_PageObjects.VD_popup.NoofDcs, testdata.NoofDcs)
})

Then('Check whether user able to enter LR no details in the input field', async () => {
    await fixture.page.fill(VendorDespatch_PageObjects.VD_popup.LRno, testdata.LRNo)
})

Then('Verify whether user able to select LR Date', async () => {
    await common_methods.datepicker(VendorDespatch_PageObjects.VD_popup.LRDate, DCYear, DCMonth, DCDay+1)
})

Then('Check whether user able to enter Meater reading details in the input field', async () => {
    await fixture.page.fill(VendorDespatch_PageObjects.VD_popup.MeterReading, testdata.MeaterReading)
})

Then('Verify whether user able to select Fuel tank full option', async () => {
    await fixture.page.click(VendorDespatch_PageObjects.VD_popup.FuelTankFull)
    await common_methods.ChooseOption()
})

Then('Check whether user able to enter Fuel Quantity details in the input field', async () => {
    await fixture.page.fill(VendorDespatch_PageObjects.VD_popup.FuelQTY, testdata.FuelQTY)
})


Then('Verify whether details are cleared by clicking on Clear button', async () => {
    await fixture.page.click(VendorDespatch_PageObjects.VD_popup.Cancel_btn)
})

Then('Verify whether details are saved by clicking on Submit button', async () => {
    await fixture.page.click(VendorDespatch_PageObjects.VD_popup.Sumbit_btn)
})

Then('Capture the PDC generated after submitting', async () => {
    Log.info(await fixture.page.textContent(Common_PageObjects.Common.PopupMessage));
    await fixture.page.click(Common_PageObjects.Common.Popup_Ok_btn)
})