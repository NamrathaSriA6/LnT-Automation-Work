import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as RN_testdata from "../../main/testdata/RN_testdata.json";
import * as testdata from "../../main/testdata/testdata.json";
import RN_PageObjects from '../Locater/RN_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { Console, log } from "console";
import { findSourceMap } from "module";
import Log from "../hooks/until/logger";



let Base: common_methods;
let submittedRFPNumber: string;
// let assetCode = "13716XPH"


Given('Check whether the user able Navigate to Mobilization & Movements Page RN Page', async function () {

    
  await fixture.page.click(RN_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(RN_PageObjects.LoginPage.Username, testdata.UserRn)
  await fixture.page.fill(RN_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(RN_PageObjects.LoginPage.Login);
  // printing the logged user details in the console
  Log.info(" User successfully logged in as " + testdata.Username)
});

Then('Verify BreadCrumbs before navigating to the Mobilization & Movements page', async function (){
  await fixture.page.waitForTimeout(2000);   
    // Here $ is to store the breadcrumb element
    const breadcrumbsElement = await fixture.page.$(RN_PageObjects.Receipt.Breadcrums);
    await fixture.page.waitForTimeout(2000);    
      if (breadcrumbsElement) {         
        const breadcrumbsText = await breadcrumbsElement.textContent();
        if(breadcrumbsText!=null) //Here it tells that the breadcrumbstext element is not equals to the null
        // Here the inclued() method includes the text given in it and compares to breadcrumbstext elements 
        if (breadcrumbsText.includes('Access') && breadcrumbsText.includes('Access') && breadcrumbsText.includes('Workflow') && breadcrumbsText.includes('WorkBench')) {
          Log.info('Breadcrumbs path is correct.');
        } else {
          Log.info('Breadcrumbs path is incorrect.');
        }        
    }else {
      Log.info('Breadcrumbs element not found.');
    }
})

  Then('Check whether the user able to click on the Access Based Menu button in Mobilization & Movements page', async function () {
      
      await fixture.page.click(RN_PageObjects.DashBoard.AccessMenu);
      
      Log.info(await fixture.page.textContent(RN_PageObjects.DashBoard.AccessMenu));
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(RN_PageObjects.DashBoard.AccessMenu)){
      Log.info("Button clicked");        
      }else{
      Log.info("Button not clicked");       
      }
  });

  Then('Check whether the user able to select the Asset Management from the dropdown in Mobilization & Movements page', async function () {
      await fixture.page.click(RN_PageObjects.DashBoard.AssetManagement);       
    });
      
    Then('Check whether the user able to select the Mobilization & Movements from the dropdown', async function () {
      await fixture.page.click(RN_PageObjects.Receipt.Mobilization_Movements);       
    });
  
    Then('Check whether the user able to select the Movement from the dropdown', async function () {
      await fixture.page.click(RN_PageObjects.Receipt.Movement);     
    });

    Then ('Verify BreadCrumbs after navigating to the Mobilization & Movements page', async function () {
      await fixture.page.waitForTimeout(2000);
      // Here $ is to store the breadcrumb element
      const breadcrumbsElement = await fixture.page.$(RN_PageObjects.Receipt.Breadcrums);    
        if (breadcrumbsElement) {            
          const breadcrumbsText = await breadcrumbsElement.textContent();
          if(breadcrumbsText!=null) // Here it tells the breadcrumbstext is not equals to null
          // Here it includes all the breadcrumbstext elements
          if (breadcrumbsText.includes('Asset') && breadcrumbsText.includes('Mobilization') && breadcrumbsText.includes('Movement'))  {
            Log.info('Breadcrumbs path is correct.');
          } else {
            Log.info('Breadcrumbs path is incorrect.');
          }          
      }else {
        Log.info('Breadcrumbs element not found.');
      }
  });

  Then('Check whether the Receipt is displaying in the Movement page', async function(){
      await fixture.page.waitForTimeout(1000);
      // Here we are validating the Asset Group text in the page
      if(testdata.ReceiptText === await fixture.page.textContent(RN_PageObjects.Receipt.Receipt)){
        Log.info("  Displayed Correctly");         
      }else{ 
        Log.info("Not Displayed");         
      }   
    });
  
  Then('Validating whether the user able to click and close FullScreen Button which is on the top of details table', async function(){
      await fixture.page.waitForTimeout(1000);
       await fixture.page.click(RN_PageObjects.Receipt.Fullscreen);
       await fixture.page.waitForTimeout(3000);
       Log.info("Clicked and Successfully Opened the Fullscreen")
       await fixture.page.click(RN_PageObjects.Receipt.Close);
       Log.info("Successfully Closed the Fullscreen")
  });

  Then("Click on search icon to the right of Asset code input to do an advance search", async () => {
    await fixture.page.click(RN_PageObjects.Receipt.SearchIcon)
})
Then("Select the time duration from the calendar in advanced search", async () => {
  // await fixture.page.pause()
  await common_methods.eipdaterangepicker(RN_PageObjects.Receipt.DatePicker, 2023)
})

Then("Click on search button in the advanced search for changing the to and from date",async () => {
    await fixture.page.click(RN_PageObjects.Asset.Search);
})

Then('Click on the action button which is on the left side of the status', async function () {
    await fixture.page.click(RN_PageObjects.Receipt.Action);     
});

Then('Enter the remarks to issue the RN which is besides the RN date', async function () {
    await fixture.page.fill(RN_PageObjects.Receipt.Remarks, testdata.Remarks);
    Log.info(" Enter Remarks field as " + testdata.Remarks + "entered successfully" );      
});

Then('Click on the Issue RN button to issue the receipt which is left side below the accessories table', async function () {
  await fixture.page.click(RN_PageObjects.Receipt.IssueRN);      
});
    Then("Click on OK button from the Success popup appeared after Issuing RN", async () => {
        await fixture.page.waitForTimeout(2000);
        await fixture.page.click(RN_PageObjects.Receipt.SuccessButtonOk);
        Log.info("RN created successfully for the Asset")
    })    

  // Then("Verify weather user able to click on Component in top right corner above Asset Code input box", async () => {
  //     // await fixture.page.pause()
  //     try {
  //         await expect(await fixture.page.locator(RN_PageObjects.Receipt.Component)).toBeEnabled();
  //         await fixture.page.click(RN_PageObjects.Receipt.Component)
  //     } catch (error) {
  //         Log.info(error);
  //     }
  // })

  Then('Click on the Receipt which is on the top of the DC table besides delivery challan', async function () {
      await fixture.page.waitForTimeout(5000)
      await fixture.page.click(RN_PageObjects.Receipt.Receipt);     
  });
  
  Then('Click on arrow which is next to the commissioning to display the table details', async function () {
      await fixture.page.click(RN_PageObjects.Receipt.Go);     
  });

  // Then("Verify weather search icon to the right of Asset code input is enabled", async () => {
  //     try {
  //         await expect(await fixture.page.locator(RN_PageObjects.Component.SearchIcon)).toBeEnabled()
  //     } catch (error) {
  //         Log.info(error);
  //     }
  // })

  Then('Check whether the user able to view the table in the console', async function () {
    await fixture.page.waitForTimeout(2000);
    const row = await fixture.page.$$(RN_PageObjects.Receipt.Grid_Head);
    if(row.length>0){
      for (let i = 0; i < row.length; i++) {
        await fixture.page.waitForTimeout(1000);
        const element = await row[i].innerText();
        // Here $ is to store the element
       Log.info(`${element}`)
        
      }
    }
  // THEN printing table rows from the grid // 
  await fixture.page.waitForSelector(RN_PageObjects.Receipt.Grid_Row);

  // Here $$ is to store the set of similar elements 
  const rows = await fixture.page.$$(RN_PageObjects.Receipt.Grid_Row);
  
  if(rows.length > 0) {
      for (let i = 0; i < rows.length; i++) {
          await fixture.page.waitForTimeout(1000);
          // Here $$ stores all the td elements
          const cells = await rows[i].$$("//td");
          for (let j = 0; j < cells.length; j++) {
              const cellText = await cells[j].innerText();
             Log.info(`${cellText}`);
          }
         Log.info("-----------------------------------");
        
            }
      
  } else {
     Log.info("No records available");
  }
  

});

    Then('Click on the calendar iron to set the RN date which is below the accessories table', async function () {
      // const date = new Date();
      // const year = date.getFullYear();
      // const month = (date.getMonth() + 1)
      // const day = date.getDate()
      // await common_methods.datepicker(RN_PageObjects.Receipt.Calendar,year,month,day-3)
      // await fixture.page.pause()
      const getPreviousDate = (daysToSubtract: number): { year: number, month: number, day: number } => {
        const date = new Date();
        date.setDate(date.getDate() - daysToSubtract);
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1, // getMonth() returns 0-based month
            day: date.getDate()
        };
    };

    const { year, month, day } = getPreviousDate(3);
    console.log(`Year-${year}, month${month}, day${day}`);
    
    await common_methods.datepicker(RN_PageObjects.Receipt.Calendar, year, month, day);
    
    });


    
    Then("Click on the close icon and close the New Asset receipt modal", async () => {
        await fixture.page.click(RN_PageObjects.Asset.Close)
    })

    Then("Click on Yes in the confirmation to close Asset receipt model", async () => {
        await fixture.page.click(RN_PageObjects.Asset.Yes)
    })