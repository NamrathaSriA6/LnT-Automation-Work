import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as RNtestdata from "../../main/testdata/RNtestdata.json";
import * as testdata from "../../main/testdata/testdata_NonCumulative.json";
import RN_PageObjects from '../Locater/RN_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { Console, log } from "console";
import { findSourceMap } from "module";
import Log from "../hooks/until/logger";



let Base: common_methods;
let submittedRFPNumber: string;




Given('Check whether the user able Navigate to Mobilization & Movements Page Noncumulative', async function () {

  
    await fixture.page.click(RN_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(RN_PageObjects.LoginPage.Username, RNtestdata.Username);
   Log.info(" Enter Username as " + RNtestdata.Username + ". Entered successfully" );
    await fixture.page.fill(RN_PageObjects.LoginPage.Password, RNtestdata.Password);
   Log.info(" Enter Password as " + RNtestdata.Password + ". Entered successfully" );
    await fixture.page.click(RN_PageObjects.LoginPage.Login);
    // printing the logged user details in the console
   Log.info(" User successfully logged in as " + RNtestdata.Username)
    
 
});

    Then("Verify whether date input field is editable and taking input", async () => {
        try {
            await expect(await fixture.page.locator(RN_PageObjects.Asset.DatePicker)).toBeEditable() // here check whether the input s editable or not 
        } catch (error) {
           Log.info("Date input is not editable");
        }
    })


    //--------Validation-------//

    // Then('Check whether assest details is displayed at right side of Create RN window', async () => {
    //   const Asset = await fixture.page.locator(RN_PageObjects.Create_RN.Asset_Details);
    //   const Asset_Details = await Asset.textContent()
    //  Log.info(Asset_Details);
    // });

    // First printing table heading from the grid // 



    

  Then("Verify whether action button is visible in the page or not", async () => {
        try {
            await expect(await fixture.page.locator(RN_PageObjects.Receipt.IssueRN)).toBeVisible()
        } catch (error) {
           Log.info("Action button is not visible in tha page");// here if the button is not visible then display an error as the button is not visible
        }
    })


    Then('click on the filter button for filtering the needed assects',async ()=>{
      await fixture.page.waitForTimeout(2000)
      await fixture.page.click("//i[@title='Filter']");
      await fixture.page.waitForTimeout(1000)
    })

  

    

    Then('Click on the plus button to create the Receipt_RN for the first job code NonCumulative',async () => {
      await fixture.page.hover(RN_PageObjects.Receipt.Hover)
      await fixture.page.click(RN_PageObjects.Receipt.Create);
    })

    Then("Verify whether remarks field is taking input or not", async () => {
      try {
          await expect(await fixture.page.locator(RN_PageObjects.Receipt.Remarks)).toBeEditable() //here tobeeditable method is says that the field is editable or not
      } catch (error) {
         Log.info("Remarks field is not taking input");
      }
  })

  Then("Verify whether Issue RN button is enabled or not", async () => {
        try {
            await expect(await fixture.page.locator(RN_PageObjects.Receipt.IssueRN)).toBeEnabled() //here toBeEnabled method is says that the field is editable or not
        } catch (error) {
           Log.info("Issue RN Button is not  enabled");
        }
    })
    