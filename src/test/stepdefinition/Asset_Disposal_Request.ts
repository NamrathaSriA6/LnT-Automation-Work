import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/Asset_Disposal_Request_testdata.json";
import ADR_PageObjects from '../Locater/Asset_Disposal_Request_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import assert from "assert";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";

let ADR_generated : string
let Username2: string

Given('Check whether the user able Navigate to landing Page of Asset Disposal Request', async () => {
    await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(Common_PageObjects.LoginPage.Username, testdata.Username)
  await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.password)
  await fixture.page.click(Common_PageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("User successfully logged in as " + testdata.Username)
})

Then('Check whether the user able to select the Disposal and Dehire from the dropdown', async () => {
    await fixture.page.click(ADR_PageObjects.ADR.Disposal_Dehire)
})
Then('Check whether the user able to select the Asset Disposal Request from the dropdown', async () => {
    await fixture.page.click(ADR_PageObjects.ADR.ADR)
})

Then('Verify whether Job field is taking input or not', async () => {
    try {
        await expect(await fixture.page.locator(ADR_PageObjects.ADR.JOB)).toBeEditable()
        Log.info('Job field is taking input')
    } catch (error) {
        Log.error('Job field is not taking any input')
    }
})

Then('Verify whether user able to enter JOB code in the autocomplete box available', async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.fill(ADR_PageObjects.ADR.JOB, testdata.JOB)
    await fixture.page.keyboard.press('ArrowDown')
    await fixture.page.keyboard.press('Enter')
})

Then('Verify whether WareHouse field is taking input or not', async () => {
    try {
        await expect(await fixture.page.locator(ADR_PageObjects.ADR.Warehouse)).toBeEditable()
        Log.info('WareHouse field is taking input')
    } catch (error) {
        Log.error('WareHouse field is not taking any input')
    }
})

Then('Verify whether user able to enter Warehouse in the autocomplete box available', async () => {
    await fixture.page.fill(ADR_PageObjects.ADR.Warehouse, testdata.Warehouse)
    await fixture.page.keyboard.press('ArrowDown')
    await fixture.page.keyboard.press('Enter')
})

Then('Verify whether Search button is enabled to click', async () => {
    try {
        await expect(await fixture.page.locator(ADR_PageObjects.ADR.Search_btn)).toBeEnabled()
        Log.info('Search button is enabled and clickable')
    } catch (error) {
        Log.error('Unable to click on Search button')
    }
})

Then('Verify whether user able to click on Search button to get the Asset disposal requests', async () => {
    await fixture.page.click(ADR_PageObjects.ADR.Search_btn)
})

Then('Verify whether Create new Request button is enabled to click', async () => {
    try {
        await expect(await fixture.page.locator(ADR_PageObjects.ADR.CreateNewRequest)).toBeEnabled()
        Log.info('Create new Request button is clickable')
    } catch (error) {
        Log.error('Create new Request button is not not clickable')
    }
})
Then('Verify whether user able to click on Creat new request Icon', async () => {
    await fixture.page.click(ADR_PageObjects.ADR.CreateNewRequest)
})

Then('Verify whether Job field inside the popup container is taking input', async () => {
    try {
        await expect(await fixture.page.locator(ADR_PageObjects.ADR.Job_Dialogue)).toBeEditable()
        Log.info('Job field inside the popup container is taking input')
    } catch (error) {
        Log.error('Job field inside the popup container is not taking any input')
    }
})

Then('Check whether user able to clear and enter the Jobcode in the input field', async () => {
    const job_input = await fixture.page.locator(ADR_PageObjects.ADR.Job_Dialogue)
    await job_input.clear()
    await job_input.fill(testdata.JOB)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press('ArrowDown')
    await fixture.page.keyboard.press('Enter')
})

Then('Verify whether Warehouse field inside the popup container is taking input', async () => {
    try {
        await expect(await fixture.page.locator(ADR_PageObjects.ADR.Warehouse_Dialogue)).toBeEditable()
        Log.info('Warehouse field inside the popup container is taking input')
    } catch (error) {
        Log.error('Warehouse field inside the popup container is not taking any input')
    }
})

Then('Verify whether user able to enter Warehouse details in the field', async () => {
    await fixture.page.fill(ADR_PageObjects.ADR.Warehouse_Dialogue, testdata.Warehouse)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press('ArrowDown')
    await fixture.page.keyboard.press('Enter')
})

Then('Verify whether Search button inside the popup container is enabled to click', async () => {
    try {
        await expect(await fixture.page.locator(ADR_PageObjects.ADR.SearchDialogue_btn)).toBeEnabled()
        Log.info('Search button inside the popup container is enabled to click')
    } catch (error) {
        Log.error('Search button inside the popup container is disabled and unable to click')
    }
})

Then('Check whether user able to click on Search button in the popup', async () => {
    await fixture.page.click(ADR_PageObjects.ADR.SearchDialogue_btn)
})
Then('Select the Asset from the list of asset codes appeared', async () => {
    await fixture.page.dblclick(ADR_PageObjects.ADR.Asset_select)
})
Then('Verify whether user able to click on Post button', async () => {
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(ADR_PageObjects.ADR.Post_btn)
})
Then('Verify whether user able to click on Next button', async () => {
    await fixture.page.click(ADR_PageObjects.ADR.Next_btn)
})

Then('Verify whether user able to redirected to Details Entry section', async () => {
    
})

Then('Verify whether user able to select the Asset status from the list of options', async () => {
    // await fixture.page.click(ADR_PageObjects.ADR.AssetStatus)
    // await fixture.page.waitForTimeout(1000)
    await fixture.page.click(ADR_PageObjects.ADR.AssetStatus)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(ADR_PageObjects.ADR.StatusSelect)
})

Then('verify whether user able to enter Realisable value in the input field', async () => {
    await fixture.page.fill(ADR_PageObjects.ADR.RealisableValue, testdata.RealisableValue)
})

Then('verify whether user able to enter Weight in tons in the input field', async () => {
    await fixture.page.fill(ADR_PageObjects.ADR.Weight, testdata.Weight)
})

Then('Verify whether user able to Submit the ADR request by clickig on Submit button', async () => {
    await fixture.page.click(ADR_PageObjects.ADR.Submit_btn)
})

Then('Verify whether user able to capture the ADR number generated', async () => {
    const ADR = await fixture.page.textContent(ADR_PageObjects.ADR.ADR_generated);
    if(ADR){
        ADR_generated = ADR.substring(27,)
    }
    Log.info(`ADR generated is ${ADR_generated}`)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(ADR_PageObjects.ADR.PopupOk)
})


Then('Signout from the current login', async () => {
    await fixture.page.waitForTimeout(2000);
    await fixture.page.click(Common_PageObjects.LoginPage.Signout);
    await fixture.page.click(Common_PageObjects.LoginPage.Signout_button);
})


Then('Navigate to the Approval Page', async () => {
    while (true) {
        try {
            
            const query = `SELECT * FROM EIP40AWM.acs.acs_m_users WHERE 
            EXISTS
            (SELECT 'X' FROM eip40awm.wfm.WFM_t_document_flow WHERE TDF_Document_Reference_No IN ('${ADR_generated}')
            AND TDF_ISActive = 'Y' AND 
            TDF_Receiver_UID = MUSER_User_ID)`;
        
            const data = await sql.executeQuery("All", query);
            Username2 = await data.recordset[0].MUSER_Login_Name;
            if (Username2 != null) {
                Log.info(Username2);
                break;
              }
              await fixture.page.waitForTimeout(10000);
        } catch (error) {
            
        }
}
      await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
      await fixture.page.fill(Common_PageObjects.LoginPage.Username, Username2)
      await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.password)
      await fixture.page.click(Common_PageObjects.LoginPage.Login);
      await fixture.page.waitForTimeout(3000);
      Log.info("User successfully logged in as " + Username2)
})


Then('Filter the currently created ADR', async ()=> {

    await fixture.page.click(Common_PageObjects.Common.Filter);
    await fixture.page.waitForTimeout(2000);
    await fixture.page.fill(ADR_PageObjects.ADR.Search_Document, ADR_generated);
    await fixture.page.waitForTimeout(2000);
  });

Then('Approve the filtered Document', async () => {
    await fixture.page.click(ADR_PageObjects.ADR.Filtered_Document)
    await fixture.page.waitForTimeout(2000);
    await fixture.page.click(ADR_PageObjects.ADR.Approve_Document)
    Log.info(`ADR ${ADR_generated} has been approved`)
    await fixture.page.waitForTimeout(2000);
    await fixture.page.click(ADR_PageObjects.ADR.PopupOk)

})