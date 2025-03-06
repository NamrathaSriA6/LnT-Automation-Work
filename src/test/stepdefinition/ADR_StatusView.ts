import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/ADR_StatusView_testdata.json";
import ADR_StatusView_PageObjects from '../Locater/ADR_StatusView_Pageobjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";

 

let Base: common_methods;
//Global Variable declarations

Given('Check whether the user able Navigate to landing Page of ADR Status View', async () => {
  await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(Common_PageObjects.LoginPage.Username, testdata.Username)
  await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(Common_PageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("User successfully logged in as " + testdata.Username)
})

Then('Check whether the user able to select the ADR Status View from the dropdown', async () => {
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(ADR_StatusView_PageObjects.ADR_Status.ADR_Status_View)
})

Then('Verify whether after selecting ADR Status page opened successfully', async () => {
    await fixture.page.waitForLoadState()
    await fixture.page.waitForTimeout(3000)
    if(await fixture.page.url() === testdata.ADRStatusviewURL){
        Log.info('ADR Status Page Opened successfully')
    }else{
        Log.info('ADR Status Page not opened correctly')
    }
})

Then('Verify whether user able to enter JOB code in the autocomplete box available for ADR Status View', async () => {
    await fixture.page.fill(ADR_StatusView_PageObjects.ADR_Status.JOB, testdata.JOB)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
})

Then('Verify whether user able to change the Duration period from the date picker for ADR Status', async () => {
    await common_methods.eipdaterangepicker(ADR_StatusView_PageObjects.ADR_Status.Duration, 2020)
})

Then('Verify whether user able to click on Clear button to clear ADR Status details', async () => {
    await fixture.page.click(ADR_StatusView_PageObjects.ADR_Status.Clear_btn)
    await fixture.page.waitForTimeout(2000)
})

Then('Verify whether user able to click on Search button to display the details', async () => {
    await fixture.page.click(ADR_StatusView_PageObjects.ADR_Status.Search_btn)
    await fixture.page.waitForTimeout(2000)
})

Then('Print all the details of ADR Status view in the console', async () => {
        await fixture.page.waitForTimeout(5000)
        await common_methods.PrintTabledetails()
        // let ADRData: string[] = [];
        // let ADRHeader: string[] = [];
    
        // // Locate the header columns
        // const rows = await fixture.page.$$('//tbody //tr[@role="row"]'); // Replace with actual header XPath
        // Log.info("Row size"+rows.length)
        
        // let rowsize = rows.length>4 ? 4 : rows.length;

        // const columns = await fixture.page.$$('//th[@role="columnheader"]');

        // let columnSize = columns.length>10 ? 10 : columns.length;

        // Log.info("Column Size" + columnSize)
        // // await fixture.page.pause()
        // // Loop through the columns
        // for(let index=1; index<=rowsize ; index++){
        //     Log.info("____________________________________________________");
        //     await fixture.page.waitForTimeout(2000);
        //     for (let i = 1; i <= columnSize; i++) {
        //         const string = await fixture.page.innerText(`(//tbody //tr[@role="row"])[${index}] // td[@role="gridcell"][${i}]`); // XPath index of Values
        //         const string1 = await fixture.page.textContent(`//th[@role="columnheader"][${i}]`); // XPath index of ADRHeader

        //         if(string)
        //         ADRData.push(string.trim());
        //         else
        //         ADRData.push('NA')
        //         if (string1) ADRHeader.push(string1);
        //         else
        //         ADRHeader.push('NA')
        //     }

        //     Log.info(`ADR Status Value from Page Size: ${ADRData.length}`);
        //     Log.info(`ADR Status header from Page Size: ${ADRHeader.length}`);

        //     for (let i = 0; i < ADRData.length; i++) {
        //         const pageValue = ADRData[i];
        //         const heading = ADRHeader[i];
                
        //         if (pageValue) {
        //             Log.info(`Value of ${heading} = ${pageValue}`);
        //         }
        //     }
        //     ADRData = [];
        //     ADRHeader = [];
        //     Log.info("____________________________________________________");
        //     await fixture.page.waitForTimeout(2000);
        // }
})
