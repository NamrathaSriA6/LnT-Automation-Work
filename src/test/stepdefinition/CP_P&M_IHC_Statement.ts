import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/CostofPlant.json";
import CP_PM_IHC_Statement_PageObjects from '../Locater/CP_P&M_IHC_Statement_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";



let Base: common_methods;
let Assetcode: string;

//Global Variable declarations


Then('Check whether the user able to select the P and M IHC Statement from the dropdown', async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(CP_PM_IHC_Statement_PageObjects.IHC_Statement.PM_IHC_Statement)
})

Then('Verify whether after selecting Cost of plant P and M IHC Statement page opened successfully', async () => {
    await fixture.page.waitForLoadState()
    if(await fixture.page.url() === testdata.CP_PM_IHC_Statement){
        Log.info('P and M IHC Statement opened successfully')
    }else{
        Log.info('Error in opening P and M IHC Statement')
    }
})

Then('Verify whether user able to select Job Code for the P and M IHC Statement', async () => {
    await common_methods.autocompleteField(CP_PM_IHC_Statement_PageObjects.IHC_Statement.JOB_field, testdata.PM_IHC_JobCode)
})

Then('Verify whether user able to select date from the date field', async () => {
    await fixture.page.click(CP_PM_IHC_Statement_PageObjects.IHC_Statement.Date_field);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(CP_PM_IHC_Statement_PageObjects.IHC_Statement.Year)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(CP_PM_IHC_Statement_PageObjects.IHC_Statement.Month)
})

Then('Verify whether user able to click on Get Statement button', async () => {
    await fixture.page.click(CP_PM_IHC_Statement_PageObjects.IHC_Statement.GetStatement_btn)
})

Then('Verify the person who created the Statement', async () => {
    await fixture.page.waitForTimeout(5000)
    const ele = await fixture.page.textContent(CP_PM_IHC_Statement_PageObjects.IHC_Statement.Created_by)
    Log.info(`Created By : ${ele}`)
})

Then('verify the date on which the Statement is created on', async () => {
    const ele = await fixture.page.textContent(CP_PM_IHC_Statement_PageObjects.IHC_Statement.CreatedOn)
    Log.info(`Created On : ${ele}`)
})

Then('Verify the total of the Group Hire Charges', async () => {
    const ele = await fixture.page.textContent(CP_PM_IHC_Statement_PageObjects.IHC_Statement.GrphireCharges_total)
    Log.info(`Group Hire Charges Total : ${ele}`)
})

Then('Verify the total of the IHC Billable', async () => {
    const ele = await fixture.page.textContent(CP_PM_IHC_Statement_PageObjects.IHC_Statement.IHCBillable_total)
    Log.info(`IHC Billable Total : ${ele}`)
})

Then('Verify the total of the Breakdown Cost', async () => {
    const ele = await fixture.page.textContent(CP_PM_IHC_Statement_PageObjects.IHC_Statement.BreacdownCost_total)
    Log.info(`Breakdown Cost Total : ${ele}`)
})


Then('Verify the total of the IHC Billed', async () => {
    const ele = await fixture.page.textContent(CP_PM_IHC_Statement_PageObjects.IHC_Statement.IHCBilled_total)
    Log.info(`IHC Billed Total : ${ele}`)
})



