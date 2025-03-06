import { Given, setDefaultTimeout, Then , When } from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as LogSheet_testdata from "../../main/testdata/Logsheet_testdata.json";
import * as testdata from "../../main/testdata/testdata.json";
import LogsheetPageObjects from '../Locater/Logsheet_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { Console, log } from "console";
import { findSourceMap } from "module";
import { appendFileSync } from "fs";
import test from "node:test";
import Log from "../hooks/until/logger";




let Base: common_methods;
let startReadingValue:number;
let endReadingValue:number;
// let assetCode = "13716XPH"


Given('Navigate to Test Enviroment of logsheet Page', async function () {
    // await fixture.page.setViewportSize({ width: 1900, height:950})

    await fixture.page.goto(LogSheet_testdata.Environment)
    Base = new common_methods(fixture.page)

});

Given('Check weather user able to navigate to landing page of Logsheet', async function () {
    await fixture.page.click(LogsheetPageObjects.LoginPage.Otheruser);
    await fixture.page.fill(LogsheetPageObjects.LoginPage.Username, LogSheet_testdata.Username);
   Log.info(" Enter Username as " + LogSheet_testdata.Username + ". Entered successfully" );
    await fixture.page.fill(LogsheetPageObjects.LoginPage.Password, LogSheet_testdata.Password);
   Log.info(" Enter Password as " + LogSheet_testdata.Password + ". Entered successfully" );
    await fixture.page.click(LogsheetPageObjects.LoginPage.Login);
    // printing the logged user details in the console
   Log.info(" User successfully logged in as " + LogSheet_testdata.Username)
});



Then('Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in LogSheet page', async() => {
  await fixture.page.click(LogsheetPageObjects.DashBoard.AccessMenu);
})

Then('Check whether the user able to select the Asset Management from the dropdown in LogSheet page', async() => {
  await fixture.page.click(LogsheetPageObjects.DashBoard.AssetManagement);
  })

Then('Check whether the user able to select the operations and maintenance from the dropdown in LogSheet page', async() => {
  await fixture.page.click(LogsheetPageObjects.DashBoard.OperationandMaintenance)
})

Then('Check whether the user able to select the Log Sheet from the dropdown in LogSheet page', async() => {
  await fixture.page.click(LogsheetPageObjects.DashBoard.LogSheet)
  })

Then('Verify after selecting Plant Hire Request and Confirmation it is Redirecting to PHRS page in LogSheet page', async() => {
  // Write code here that turns the phrase above into concrete actions
})

Then('After LogSheet page opened verify the Title of Logsheet page in LogSheet page', async() => {
  // Write code here that turns the phrase above into concrete actions
})


Then('Verify weather Job autocomplete box is visible in the Page', async() => {
  await fixture.page.waitForTimeout(3000);
  if (await fixture.page.locator(LogsheetPageObjects.LogsheetDayBased.Job).isVisible()) {
   Log.info("Job input is visible");
  }else{
   Log.info("Job input is not visible");
  }
})

Then('Verify weather user able to enter required job in field which is poped on opening the page', async() => {
    if (await fixture.page.locator(LogsheetPageObjects.LogsheetDayBased.Job).isVisible()) {
      await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.Job,LogSheet_testdata.Job);
      await fixture.page.waitForTimeout(2000)
      await fixture.page.keyboard.press("ArrowDown")
      await fixture.page.keyboard.press("Enter")
    } else {
     Log.info("Job input is not visible");
    }
  })



Then('Verify weather User able to click on Arrow to the right of Date input', async() => {
  await fixture.page.waitForTimeout(3000);
  await fixture.page.click(LogsheetPageObjects.LogsheetDayBased.GoArrow)
})

Then('Verify that Asset details are displaying after clicking on Go Arrow', async() => {
  // await fixture.page.waitForSelector(LogsheetPageObjects.LogsheetDayBased.Chart)
  // if(await fixture.page.locator(LogsheetPageObjects.LogsheetDayBased.Chart).isVisible()){
  //  Log.info("Logshet details are displaying correctly");
  // }else{
  //  Log.info("Logsheet details not displaying");
  // }
})

Then('Verify the details of Logsheet displayed below the graph on the page', async() => {
  // Write code here that turns the phrase above into concrete actions
})

Then('Click on Create New LogSheet Button available on the top right of the Page', async() => {
  await fixture.page.click(LogsheetPageObjects.LogsheetDayBased.CreatelogSheetButton)
})

Then('Verify user able to enter End Reading in the input field in the LogSheet Creation page', async() => {
  await fixture.page.waitForTimeout(3000)
  const StartReading = await fixture.page.textContent(LogsheetPageObjects.LogsheetDayBased.StartReading);
 Log.info("Start Reading"+StartReading);
  
  if(StartReading)
  startReadingValue = parseInt(StartReading)
 Log.info("StartValue"+startReadingValue);

  endReadingValue = startReadingValue+30
  const endReading = endReadingValue.toString()
 Log.info("EndReading"+endReading);
  await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.EndReading,endReading)
})

Then('Verify user able to enter working hours below the End Reading in the LogSheet Creation page', async() => {
  await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.WorkHours,"15")
})

Then('Verify user able to enter Idle hours below the start Reading in the LogSheet Creation page', async() => {
  // await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.IdleHours,"3")
})

Then('Verify user able to enter Breakdown hours below the Working Hours in the LogSheet Creation page', async() => {
  // await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.BreakdownHours,"2")
})

Then("Verify weather User able to click on Fuel Entry popup in the Fuel Section in the LogSheet Creation page", async () => {
  if(await fixture.page.locator(LogsheetPageObjects.LogsheetDayBased.FuelPopup).isEnabled()){
    await fixture.page.click(LogsheetPageObjects.LogsheetDayBased.FuelPopup)
  }else{
   Log.info("Fuelpopup is not clickable");
  }
})

Then("Verify weather user able to enter Meter Reading in the Fuel Entry Popup",async () => {
  if (!await fixture.page.locator(LogsheetPageObjects.LogsheetDayBased.MeterReading).isVisible()) {
    await fixture.page.click(LogsheetPageObjects.LogsheetDayBased.FuelAdd)
    await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.MeterReading,endReadingValue.toString())
  }
  
})

Then("Verify weather user able to enter quantity in the Fuel Entry Popup",async () => {
  await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.FuelQuantity,LogSheet_testdata.FuelQuantity)
})

Then("Verify weather user able to click on post button in the Fuel Entry Popup",async () => {
  await fixture.page.click(LogsheetPageObjects.LogsheetDayBased.FuelPost_btn)
})

Then("Verify weather user able to enter production quantity in the input field",async () => {
  await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.ProdQuantity,"10")
})

Then("Verify weather user able to click on Submit button in the LogSheet Creation page",async () => {
  await fixture.page.click(LogsheetPageObjects.LogsheetDayBased.Submit_btn)
})

Then("Verify weather user able to click on Timebased Button on top left before the Asset Code",async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.TimeBased)
})

Then("Verify weather user able to confirm the popup appeared by clicking on Yes",async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Confirmation_yes)
})

Then("Verify weather user able to add Work Hours by clicking the Work button",async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Work_btn)
  await fixture.page.waitForTimeout(3000)
  const StartReading = await fixture.page.textContent(LogsheetPageObjects.LogSheetTimeBased.StartReading_Work);
 Log.info("Start Reading"+StartReading);
  
  if(StartReading)
  startReadingValue = parseInt(StartReading)
 Log.info("StartValue"+startReadingValue);

  endReadingValue = startReadingValue+30
  const endReading = endReadingValue.toString()
 Log.info("EndReading"+endReading);
  await fixture.page.fill(LogsheetPageObjects.LogSheetTimeBased.EndReading_Work,endReading)
})



Then("Verify weather user able to add End Time in Work Hours Section", async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.EndTimeIcon)
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.EndTime_work)
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SetTime)

})

Then("Verify weather user able to Save the Work Hours by clicking on Save Icon under Actions",async () => {
  await fixture.page.fill(LogsheetPageObjects.LogSheetTimeBased.ProdQuantity,"10")
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SaveWork_Work)
})

Then("Verify weather user able to add Idle Hours by clicking the Idle button",async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Idle_btn)
  await fixture.page.waitForTimeout(3000)
})

Then("Verify weather user able to add End Time in Idle Hours Section", async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.EndTimeIcon)
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.EndTime_idle)
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SetTime)

})

Then("Verify weather user able to Save the Idle Hours by clicking on Save Icon under Actions",async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SaveWork_Idle)
})


Then("Verify weather user able to add Breakdown Hours by clicking the Breakdown button",async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.BreakDown_btn)
  await fixture.page.waitForTimeout(3000)
  const StartReading = await fixture.page.textContent(LogsheetPageObjects.LogSheetTimeBased.StartReading_breakdown);
 Log.info("Start Reading"+StartReading);
})


Then("Verify weather user able to add End Time in Breakdown Hours Section", async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.EndTimeIcon)
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.EndTime_breakdown)
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SetTime)

})

Then("Verify weather user able to Save the Breakdown Hours by clicking on Save Icon under Actions",async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SaveWork_breakdown)
})

Then("Verify weather user able to Submit the details by clicking on Submit button at bottom of the page", async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Submit_btn)
})


//******************************************** */

Then("Verify what will happen if we submit without giving the End Reading", async () => {
  await fixture.page.click(LogsheetPageObjects.LogsheetDayBased.Submit_btn)
  if(await fixture.page.locator(LogsheetPageObjects.LogsheetDayBased.alert_box).isVisible()){
   Log.info(await fixture.page.textContent(LogsheetPageObjects.LogsheetDayBased.alert_box));
  }else{
   Log.info("End Reading is not mandatory");
  }
})
Then("Verify the limit of working hours by giving a large value than 24 hours", async () => {
  //filling EndReading
  const StartReading = await fixture.page.textContent(LogsheetPageObjects.LogsheetDayBased.StartReading);
  
  if(StartReading)
  startReadingValue = parseInt(StartReading)

  endReadingValue = startReadingValue+30
  const endReading = endReadingValue.toString()
  await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.EndReading,endReading)

  await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.WorkHours,"25")
  await fixture.page.waitForTimeout(1000)
 Log.info(await fixture.page.textContent(LogsheetPageObjects.LogsheetDayBased.alert_box));
  // if(await fixture.page.locator(LogsheetPageObjects.LogsheetDayBased.alert_box).isVisible()){
  //  Log.info(await fixture.page.textContent(LogsheetPageObjects.LogsheetDayBased.alert_box));
  // }else{
  //  Log.info("End Reading is not mandatory");
  // }
})

Then("Verify the limit of Idle hours by giving a large value than 24 hours",async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.IdleHours,"25")
  await fixture.page.waitForTimeout(1000)
 Log.info(await fixture.page.textContent(LogsheetPageObjects.LogsheetDayBased.alert_box));
})

Then("Verify the limit of Breakdown hours by giving a large value than 24 hours",async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.BreakdownHours,"25")
  await fixture.page.waitForTimeout(1000)
 Log.info(await fixture.page.textContent(LogsheetPageObjects.LogsheetDayBased.alert_box));
})

Then("Verify the total limit of hours by giving work Breakdown idle hours greater than 24hrs", async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Submit_btn)
})
Then("Verify what will happen if we submit without giving Production Quantity", async () => {
  await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.WorkHours,"10")
  await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.IdleHours,"3")
  await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.BreakdownHours,"2")
  await fixture.page.click(LogsheetPageObjects.LogsheetDayBased.Submit_btn)
  await fixture.page.waitForTimeout(1000)
 Log.info(await fixture.page.textContent(LogsheetPageObjects.LogsheetDayBased.alert_box));
})
Then("Verify weather fuel quantity is mandatory field in logsheet page", async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Submit_btn)
})




Then("Verify weather Start and End Reading can be same for Work hours in time based logic",async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Work_btn)
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SaveWork_Work)
 Log.info(await fixture.page.textContent(LogsheetPageObjects.LogsheetDayBased.alert_box));
})

Then("Verify weather End Reading can be lower than Start Reading in time based logic",async () => {
  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Work_btn)
  await fixture.page.waitForTimeout(2000)
  const StartReading = await fixture.page.textContent(LogsheetPageObjects.LogSheetTimeBased.StartReading_Work);
  
  if(StartReading)
  startReadingValue = parseInt(StartReading)

  endReadingValue = startReadingValue-10
  const endReading = endReadingValue.toString()
  await fixture.page.fill(LogsheetPageObjects.LogSheetTimeBased.EndReading_Work,endReading)

  await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SaveWork_Work)
 Log.info(await fixture.page.textContent(LogsheetPageObjects.LogsheetDayBased.alert_box));
})

// Then("Verify weather Start and End Reading can be same for Work hours in time based logic",async () => {
//   await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Work_btn)
//   await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SaveWork_Work)
//  Log.info(await fixture.page.textContent(LogsheetPageObjects.LogsheetDayBased.alert_box));
// })
// Then("Verify weather Start and End Reading can be same for Work hours in time based logic",async () => {
//   await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.Work_btn)
//   await fixture.page.click(LogsheetPageObjects.LogSheetTimeBased.SaveWork_Work)
//  Log.info(await fixture.page.textContent(LogsheetPageObjects.LogsheetDayBased.alert_box));
// })