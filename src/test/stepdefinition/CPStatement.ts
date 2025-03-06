import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/CostofPlant.json";
import CPStatement_PageObjects from '../Locater/CPStatement_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";
import { Console } from "node:console";


let Base: common_methods;
let JobCode: string;

//Global Variable declarations



Then('Check whether the user able to select the Cost of plant Statement from the dropdown', async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(CPStatement_PageObjects.Statement.CP_Statement)
})

Then('Verify whether after selecting Cost of plant Statement page opened successfully', async () => {
    await fixture.page.waitForLoadState()
    if(await fixture.page.url() === testdata.CPStatementURL){
        Log.info('CP Statement Page opened successfully')
    }else{
        Log.info('Error in opening CP Statement page')
    }
})

Then('Verify whether user able to click on job code to Approve the cost of plant',async () => {
    const jobCode = await fixture.page.textContent(CPStatement_PageObjects.Statement.JobCode_click)
    if(jobCode){
        JobCode = jobCode.trim()
        Log.info(`JobCode selected is ${JobCode}`)
    }

    await fixture.page.click(CPStatement_PageObjects.Statement.JobCode_click)
})

Then('Verify whether Job code is displaying correctly in the dialogue container appeared',async () => {
    const Jobcode = await fixture.page.textContent(CPStatement_PageObjects.Statement.Jobcode)
    Log.info(`Job Code : ${Jobcode}`)
})

Then('Verify the Approval period in the dialogue container appeared',async () => {
    const Period = await fixture.page.textContent(CPStatement_PageObjects.Statement.ApprovalPeriod)
    Log.info(`Approval period :  ${Period}`)
})

Then('Verify whether user able to enter remarks in the dialogue container appeared',async () => {
    await fixture.page.fill(CPStatement_PageObjects.Statement.ApprovalRemarks, testdata.remarks)
})

Then('Verify whether user able to click on Approve button to approve the statement',async () => {
    await fixture.page.click(CPStatement_PageObjects.Statement.Approve_btn)
    await fixture.page.waitForTimeout(2000)
    Log.info(await fixture.page.textContent(Common_PageObjects.Common.PopupMessage))
    await fixture.page.click(Common_PageObjects.Common.Popup_Ok_btn)
})
Then('Verify whether Statement is Approved successfully',async () => {
    try {
        await expect(await fixture.page.locator(`//span[text()='${JobCode}']`)).not.toBeVisible()
        Log.info('Succcess in Approving Cp Statement')
    } catch (error) {
        Log.error('Failure in Approving CP Statement')
    }
})

Then('Verify whether user able to click on Reject button to reject the statement',async () => {
    await fixture.page.click(CPStatement_PageObjects.Statement.Reject_btn)
    await fixture.page.waitForTimeout(2000)
    Log.info(await fixture.page.textContent(Common_PageObjects.Common.PopupMessage))
    await fixture.page.click(Common_PageObjects.Common.Popup_Ok_btn)
})

Then('Verify whether Statement is rejected successfully',async () => {
    try {
        await expect(await fixture.page.locator(`//span[text()='${JobCode}']`)).not.toBeVisible()
        Log.info('Succcess in Rejecting Cp Statement')
    } catch (error) {
        Log.error('Failure in Rejecting CP Statement')
    }
})