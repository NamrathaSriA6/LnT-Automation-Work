import { Given, setDefaultTimeout, Then , When } from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as LogSheet_DayBased_testdata from "../../main/testdata/LogSheet_DayBased_testdata.json";
import * as testdata from "../../main/testdata/testdata_NonCumulative.json";
import LogSheet_NonCummulative_PageObjects from '../Locater/LogSheet_NonCummulative_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { Console, log } from "console";
import { findSourceMap } from "module";
import { appendFileSync } from "fs";
import LogsheetPageObjects from "../Locater/LogSheet_NonCummulative_PageObjects";
import * as sql from "../../main/database/database"
import Log from "../hooks/until/logger";
import * as testdata1 from "../../main/testdata/testdata.json"



let Base: common_methods;
let startReadingValue:number;
let endReadingValue:number;
// let workHoursValue:number;
// let breakdownhoursvalue:number;
// let idlehoursValue:number;

// let Idle_Hours: number;
// let WrkHrs: number 
// let BrkHrs: number;
// let Idle_Hrs:number;
// let IdleHrs:number;





Given('Check whether user able to navigate to landing page of Logsheet NonCumulative', async function () {
    await fixture.page.click(LogSheet_NonCummulative_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(LogSheet_NonCummulative_PageObjects.LoginPage.Username, LogSheet_DayBased_testdata.Username);
   Log.info(" Enter Username as " + LogSheet_DayBased_testdata.Username + ". Entered successfully" );
    await fixture.page.fill(LogSheet_NonCummulative_PageObjects.LoginPage.Password, LogSheet_DayBased_testdata.Password);
   Log.info(" Enter Password as " + LogSheet_DayBased_testdata.Password + ". Entered successfully" );
    await fixture.page.click(LogSheet_NonCummulative_PageObjects.LoginPage.Login);
    // printing the logged user details in the console
   Log.info(" User successfully logged in as " + LogSheet_DayBased_testdata.Username)
});



Then('Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in LogSheet page NonCumulative', async() => {
  await fixture.page.click(LogSheet_NonCummulative_PageObjects.DashBoard.AccessMenu);
  await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.DashBoard.AccessMenu)){
       Log.info("Menu icon was clicked");
        
        }else{
       Log.info("Menu icon not clicked");
        
        }
})

Then('Check whether the user able to select the Asset Management from the dropdown in LogSheet page NonCumulative', async() => {
  await fixture.page.click(LogSheet_NonCummulative_PageObjects.DashBoard.AssetManagement);
  await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.DashBoard.AssetManagement)){
       Log.info("AssetManagement is clicked");
        
        }else{
       Log.info("AssetManagement not clicked");
        
        }
  })

Then('Check whether the user able to select the operations and maintenance from the dropdown in LogSheet page NonCumulative', async() => {
  await fixture.page.click(LogSheet_NonCummulative_PageObjects.DashBoard.Operation_and_Maintenance)
  await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.DashBoard.Operation_and_Maintenance)){
       Log.info("Operation and Maintenance is clicked");
        
        }else{
       Log.info("Operation and Maintenance not clicked");
        
        }
})

Then('Check whether the user able to select the Log Sheet from the dropdown in LogSheet page NonCumulative', async() => {
  await fixture.page.click(LogSheet_NonCummulative_PageObjects.DashBoard.LogSheet)
  await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.DashBoard.LogSheet)){
       Log.info("LogSheet was clicked");
        
        }else{
       Log.info("LogSheet not clicked");
        
        }
  })

Then('Verify after selecting Plant Hire Request and Confirmation it is Redirecting to PHRS page in LogSheet page NonCumulative', async() => {
  //Here checking the navigation is correct or not with url() method
  if(LogSheet_DayBased_testdata.LogSheetPage === await fixture.page.url()){
   Log.info("Successfully navigated to PHRS Page");
    
  }else{ 
   Log.info("UnSuccessful navigated to PHRS Page");
    
  }
})

Then('After LogSheet page opened verify the Title of Logsheet page in LogSheet page NonCumulative', async() => {
  await fixture.page.waitForTimeout(1000);
    // Here we are validating the Logsheet text in the page
    if(LogSheet_DayBased_testdata.LogsheetText === await fixture.page.textContent(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Logsheet)){
     Log.info( LogSheet_DayBased_testdata.LogsheetText+ "  Displayed Correctly");
      
    }else{ 
     Log.info("Logsheet Text Not Displayed");
      
    }

})


Then('Verify whether Job autocomplete box is visible in the Page NonCumulative', async() => {
  await fixture.page.waitForTimeout(3000);
  if (await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Job).isVisible()) {
   Log.info("Job input is visible");
  }else{
   Log.info("Job input is not visible");
  }
})


Then('Verify whether user able to enter required job in field which is poped on opening the page NonCumulative', async() => {
    if (await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Job).isVisible()) {
      await fixture.page.fill(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Job,LogSheet_DayBased_testdata.Job);
      await fixture.page.waitForTimeout(2000)
      await fixture.page.keyboard.press("ArrowDown")
      await fixture.page.keyboard.press("Enter")
    } else {
     Log.info("Job input is not visible");
    }
  })




  Then('Verify whether User able to click on Arrow to the right of Date input NonCumulative', async() => {
    // await fixture.page.waitForTimeout(3000);
    // await fixture.page.click(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.GoArrow)
    // await fixture.page.waitForTimeout(1000);
    //   if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.GoArrow)){
    //    Log.info("GoArrow was clicked");
        
    //     }else{
    //    Log.info("GoArrow not clicked");
        
    //     }
  })

  Then('Verify that Asset details are displaying after clicking on Go Arrow NonCumulative', async() => {
    // await fixture.page.waitForSelector(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Chart)
    // if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Chart).isVisible()){
    //  Log.info("Logshet details are displaying correctly");
    // }else{
    //  Log.info("Logsheet details not displaying");
    // }
  })



  Then('Verify the details of Logsheet displayed below the graph on the page NonCumulative', async() => {
    // await fixture.page.waitForTimeout(1000);
    //     const row = await fixture.page.$$(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Grid_Head);
    //     if(row.length>0){
    //       for (let i = 0; i < row.length; i++) {
    //         await fixture.page.waitForTimeout(1000);
    //         const element = await row[i].innerText();
    //         // Here $ is to store the element
    //        Log.info(`${element}`)
            
    //       }
    //     }
    //   // THEN printing table rows from the grid 
    //   await fixture.page.waitForSelector(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Grid_Row);

    //   // Here $$ is to store the set of similar elements 
    //   const rows = await fixture.page.$$(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Grid_Row);
      
    //   if(rows.length > 0) {
    //       for (let i = 0; i < rows.length; i++) {
    //           await fixture.page.waitForTimeout(1000);
    //           // Here $$ stores all the td elements
    //           const cells = await rows[i].$$("//td");
    //           for (let j = 0; j < cells.length; j++) {
    //               const cellText = await cells[j].innerText();
    //              Log.info(`${cellText}`);
    //           }
    //          Log.info("-----------------------------------");
    //         }
    //       }


  })




  Then('Click on Create New LogSheet Button available on the top right of the Page NonCumulative', async() => {
    await fixture.page.click(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.CreatelogSheet_btn)
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.CreatelogSheet_btn)){
       Log.info("CreatelogSheet button was clicked");
        
        }else{
       Log.info("CreatelogSheet button not clicked");
        
        }
  })

  Then('Verify user able to enter End Reading in the input field in the LogSheet Creation page NonCumulative', async() => {
    await fixture.page.waitForTimeout(3000)
    const StartReading = await fixture.page.textContent(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.StartReading);
    await fixture.page.waitForTimeout(2000)
   Log.info("Start Reading"+StartReading);
    
    if(StartReading)
    startReadingValue = parseInt(StartReading)
   Log.info("StartValue"+startReadingValue);

    endReadingValue = startReadingValue+10
    const endReading = endReadingValue.toString()
   Log.info("EndReading"+endReading);
    await fixture.page.fill(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.EndReading,endReading)
  })

  Then('Verify user able to enter working hours below the End Reading in the LogSheet Creation page NonCumulative', async() => {
    await fixture.page.click(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.WorkHours)
  })

  Then('Verify user able to enter Idle hours below the start Reading in the LogSheet Creation page NonCumulative', async() => {
    // await fixture.page.fill(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.IdleHours,"3")
  })

  Then('Verify user able to enter Breakdown hours below the Working Hours in the LogSheet Creation page NonCumulative', async() => {
    // await fixture.page.fill(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.BreakdownHours,"2")
  })

  // Then('Check whether Idle Hours are calculated correctly', async () => {
  //   const Work_Hrs = await fixture.page.textContent('//kendo-numerictextbox[@id="txtWorkPrimary"]')
  //  Log.info(Work_Hrs)
  //   if(Work_Hrs){
  //   WrkHrs = parseInt(Work_Hrs)
  //   }
  //   let Brk_Hrs = await fixture.page.textContent('//kendo-numerictextbox[@id="txtBreakdownPrimary"]')
  //   if(Brk_Hrs){
  //      BrkHrs = parseInt(Brk_Hrs)
  //     }
  //     //Log.info(WrkHrs+" "+BrkHrs)
  //   Idle_Hours = WrkHrs - BrkHrs;

  //   let Idle_Hrs = await fixture.page.textContent('//kendo-numerictextbox[@id="txtIdlePrimary"]')
  //   if(Idle_Hrs){
  //     IdleHrs = parseInt(Idle_Hrs)
  //   }
  //  Log.info(IdleHrs);
  //  Log.info(Idle_Hours);
    
  //   // if(Idle_Hours == IdleHrs){
  //   //  Log.info('Idele Hours is' +Idle_Hours )
  //   // } else{
  //   //  Log.info('Idle Hours is incorrect')
  //   // }
  // });

  Then("Verify whether User able to click on Fuel Entry popup in the Fuel Section in the LogSheet Creation page NonCumulative", async () => {
    if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.FuelPopup).isEnabled()){
      await fixture.page.click(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.FuelPopup)
    }else{
     Log.info("Fuelpopup is not clickable");
    }
  })

  Then("Verify whether user able to enter Meter Reading in the Fuel Entry Popup NonCumulative",async () => {
    if (!await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.MeterReading).isVisible()) {
      await fixture.page.click(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.FuelAdd)
      await fixture.page.fill(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.MeterReading,endReadingValue.toString())
    }
    
  })

  Then("Verify whether user able to enter quantity in the Fuel Entry Popup NonCumulative",async () => {
    await fixture.page.fill(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.FuelQuantity,LogSheet_DayBased_testdata.FuelQuantity)
  })

  Then("Verify whether user able to click on post button in the Fuel Entry Popup NonCumulative",async () => {
    await fixture.page.click(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.FuelPost_btn)
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.FuelPost_btn)){
       Log.info("FuelPost button was clicked");
        
        }else{
       Log.info("FuelPost button not clicked");
        
        }
  })

  Then("Verify whether user able to enter production quantity in the input field NonCumulative",async () => {
    await fixture.page.fill(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.ProdQuantity,"1")
  })

  Then("Click on the remarks icon to enter the remarks in remarks field NonCumulative", async()=> {
    await fixture.page.click(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Remarks_icon)
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Remarks_icon)){
       Log.info("Remarks_icon was clicked");
        
        }else{
       Log.info("Remarks_icon not clicked");
        
        }
    await fixture.page.fill(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Remarks_field, LogSheet_DayBased_testdata.Remarks_field)

  })

  Then("Verify whether user able to click on Submit button in the LogSheet Creation page NonCumulative",async () => {
    await fixture.page.click(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Submit_btn)
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.Submit_btn)){
       Log.info("Submit button was clicked");
        
        }else{
       Log.info("Submit button not clicked");
        
        }
  })



      
  //############################## Time Basied ######################################//


  Then("Verify whether user able to click on Timebased Button on top left before the Asset Code",async () => {
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.TimeBased)
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogSheetTimeBased.TimeBased)){
       Log.info("TimeBased is clicked");
        
        }else{
       Log.info("TimeBased not clicked");
        
        }
  })


  Then("Verify whether user able to confirm the popup appeared by clicking on Yes",async () => {
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Confirmation_yes)
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogSheetTimeBased.Confirmation_yes)){
       Log.info("Confirmation_yes is clicked");
        
        }else{
       Log.info("Confirmation_yes not clicked");
        
        }
  })

  Then("Verify whether user able to add Work Hours by clicking the Work button",async () => {
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Work_btn)
    await fixture.page.waitForTimeout(3000)
    const StartReading = await fixture.page.textContent(LogsheetPageObjects.LogSheetTimeBased.StartReading_Work);
   Log.info("Start Reading"+StartReading);
    
    if(StartReading)
    startReadingValue = parseInt(StartReading)
   Log.info("StartValue"+startReadingValue);

    endReadingValue = startReadingValue+10
    const endReading = endReadingValue.toString()
   Log.info("EndReading"+endReading);
    await fixture.page.fill(LogsheetPageObjects.LogSheetTimeBased.EndReading_Work,endReading)
  })

  Then("Verify user able to add Start Time in Work Hours Section", async () => {
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.StartTimeIcon);
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogSheetTimeBased.StartTimeIcon)){
       Log.info("StartTimeIcon in work is clicked");
        
        }else{
       Log.info("StartTimeIcon in work not clicked");
        
        }
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.StartTime_work)
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SetTime)
  })

  Then("Verify whether user able to add End Time in Work Hours Section", async () => {
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.EndTimeIcon)
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogSheetTimeBased.EndTimeIcon)){
       Log.info("EndTimeIcon in work is clicked");
        
        }else{
       Log.info("EndTimeIcon in work not clicked");
        
        }
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.EndTime_work)
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SetTime)

  })

  Then("Verify whether user able to Save the Work Hours by clicking on Save Icon under Actions",async () => {
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SaveWork_Work)
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogSheetTimeBased.SaveWork_Work)){
       Log.info("SaveWork icon in work is clicked");
        
        }else{
       Log.info("SaveWork icon in work not clicked");
        
        }

  })

  Then("Verify whether user able to add Idle Hours by clicking the Idle button",async () => {
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Idle_btn)
    
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogSheetTimeBased.Idle_btn)){
       Log.info("Idle button is clicked");
        
        }else{
       Log.info("Idle button not clicked");
        
        }
    await fixture.page.waitForTimeout(3000)
  })

  Then("Verify whether user able to add End Time in Idle Hours Section", async () => {
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.EndTimeIcon)
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogSheetTimeBased.EndTimeIcon)){
       Log.info("EndTime icon in Idle is clicked");
        
        }else{
       Log.info("EndTime icon in Idle not clicked");
        
        }
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.EndTime_idle)
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SetTime)

  })

  Then("Verify whether user able to Save the Idle Hours by clicking on Save Icon under Actions",async () => {
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SaveWork_Idle)
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogSheetTimeBased.SaveWork_Idle)){
       Log.info("SaveWork icon in Idle is clicked");
        
        }else{
       Log.info("SaveWork icon in Idle not clicked");
        
        }
  })


  Then("Verify whether user able to add Breakdown Hours by clicking the Breakdown button",async () => {
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.BreakDown_btn)
    await fixture.page.waitForTimeout(3000)
    const StartReading = await fixture.page.textContent(LogsheetPageObjects.LogSheetTimeBased.StartReading_breakdown);
   Log.info("Start Reading"+StartReading);
  })


  Then("Verify whether user able to add End Time in Breakdown Hours Section", async () => {
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.EndTimeIcon)
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogSheetTimeBased.EndTimeIcon)){
       Log.info("EndTime icon in breakdown is clicked");
        
        }else{
       Log.info("EndTime icon in breakdown not clicked");
        
        }
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.EndTime_breakdown)
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SetTime)

  })

  Then("Verify whether user able to Save the Breakdown Hours by clicking on Save Icon under Actions",async () => {
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SaveWork_breakdown)
    await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogSheetTimeBased.SaveWork_breakdown)){
       Log.info("SaveWork icon in breakdown is clicked");
        
        }else{
       Log.info("SaveWork icon in breakdown not clicked");
        
        }
  })

  Then("Verify whether user able to Submit the details by clicking on Submit button at bottom of the page", async () => {
    await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Submit_btn)
    if(await fixture.page.locator(LogSheet_NonCummulative_PageObjects.LogSheetTimeBased.Submit_btn)){
     Log.info("Submit button is clicked");
      
      }else{
     Log.info("Submit button not clicked");
      
      }
  })


