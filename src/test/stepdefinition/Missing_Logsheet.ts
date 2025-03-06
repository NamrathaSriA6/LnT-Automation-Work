import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/MissingLogsheet_testdata.json";
import MissingLogsheet_PageObjects from '../Locater/MissingLogsheet_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";

Given('Check whether the user able Navigate to landing Page of MissingLogsheet', async () => {
    await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Common_PageObjects.LoginPage.Username, testdata.Username)
    await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password)
    await fixture.page.click(Common_PageObjects.LoginPage.Login);
    await fixture.page.waitForTimeout(3000);
    Log.info("User successfully logged in as " + testdata.Username)
  })
  
  Then('Check whether the user able to select the MissingLogsheet from the dropdown', async () => {
      await fixture.page.waitForTimeout(1000)
      await fixture.page.click(MissingLogsheet_PageObjects.MissingLogsheet.MissingLogsheet)
  })
  
  Then('Verify whether after selecting MissingLogsheet page opened successfully', async () => {
      await fixture.page.waitForTimeout(3000)
      if(await fixture.page.url() === testdata.MissingLogsheetURL){
          Log.info('Missing Logsheet Page Opened successfully')
      }else{
          Log.info('Missing Logsheet Page not opened correctly')
      }
  })
  
  Then('Verify whether user able to enter JOB code in the autocomplete box available for MissingLogsheet', async () => {
      await fixture.page.fill(MissingLogsheet_PageObjects.MissingLogsheet.JobCode, testdata.JOB)
      await fixture.page.waitForTimeout(1000)
      await fixture.page.keyboard.press("ArrowDown")
      await fixture.page.keyboard.press("Enter")
  })
  
  Then('Verify whether user able to change the Date in the Missing Logsheet page', async () => {
    await fixture.page.click(MissingLogsheet_PageObjects.MissingLogsheet.DateField);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(MissingLogsheet_PageObjects.MissingLogsheet.Year)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(MissingLogsheet_PageObjects.MissingLogsheet.Month)
  })
  
  Then('Verify whether user able to click on View Missing Assets Button to display Missing Logsheet details', async () => {
      await fixture.page.click(MissingLogsheet_PageObjects.MissingLogsheet.ViewMissingAssets_btn)
      await fixture.page.waitForTimeout(2000)
  })
  
  Then('Print all the details of MissingLogsheet details in the console', async () => {
    await fixture.page.waitForTimeout(5000)
        let MissingLogsheetData: string[] = [];
        let MissingLogsheetHeader: string[] = [];
    
        // Locate the header columns
        const rows = await fixture.page.$$('//tbody //tr[@role="row"]'); // Replace with actual header XPath
        Log.info("Row size"+rows.length)
        
        let rowsize = rows.length>4 ? 4 : rows.length;

        const columns = await fixture.page.$$('//th[@role="columnheader"]');

        let columnSize = columns.length>10 ? 10 : columns.length;

        Log.info("Column Size" + columnSize)
        // await fixture.page.pause()
        // Loop through the columns
        for(let index=1; index<=rowsize ; index++){
            Log.info("____________________________________________________");
            await fixture.page.waitForTimeout(2000);
            for (let i = 1; i <= columns.length; i++) {
                const string = await fixture.page.innerText(`(//tbody //tr[@role="row"])[${index}] // td[@role="gridcell"][${i}]`); // XPath index of Values
                const string1 = await fixture.page.textContent(`//th[@role="columnheader"][${i}]`); // XPath index of MissingLogsheetHeader

                if(string)
                MissingLogsheetData.push(string.trim());
                else
                MissingLogsheetData.push('NA')
                if (string1) MissingLogsheetHeader.push(string1);
                else
                MissingLogsheetHeader.push('NA')
            }

            Log.info(`ADR Status Value from Page Size: ${MissingLogsheetData.length}`);
            Log.info(`ADR Status header from Page Size: ${MissingLogsheetHeader.length}`);

            for (let i = 0; i < MissingLogsheetData.length; i++) {
                const pageValue = MissingLogsheetData[i];
                const heading = MissingLogsheetHeader[i];
                
                if (pageValue) {
                    Log.info(`Value of ${heading} = ${pageValue}`);
                }
            }
            MissingLogsheetData = [];
            MissingLogsheetHeader = [];
            Log.info("____________________________________________________");
            await fixture.page.waitForTimeout(2000);
        }
  })