import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect, test } from "@playwright/test";
import * as testdata from "../../main/testdata/testdata.json";
import PHRS_PageObjects from '../Locater/PHRS_PageObjects';
import MeasurementCreationPageObjects from '../Locater/MeasurementCreationPageObjects';
import LogsheetPageObjects from '../Locater/Logsheet_PageObjects';

import Measurement_Approval_PageObjects from '../Locater/Measurement_Approval_PageObjects';
import RN_PageObjects from '../Locater/RN_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import { log } from "console";
import assert from "assert";
import { exceptions } from "winston";
// import test from "node:test";
import Log from "../hooks/until/logger";
import { setTimeout } from "timers/promises";


let Base: common_methods;
//Global Variable declarations
let PHRSNumber: string;
let AssetCode:string;
let PHRSDB = "LE/LE150530/PHR/24/000118";
let S3RQTY: number;
let PHRSCreated: number;
let TCD_Number: string, WO_Number:string;
let Username2: string;

Given('Navigate to Test Environment', async function () {
  // fixture.page.setViewportSize({ width:2920 , height:1040})
  await fixture.page.goto(testdata.Environment) // goto() - redirects to the specified url
  Base = new common_methods(fixture.page)
});
Given(`Check whether the user able Navigate to landing Page`,async function (){
  await fixture.page.click(PHRS_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(PHRS_PageObjects.LoginPage.Username, testdata.Username)
  await fixture.page.fill(PHRS_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(PHRS_PageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("User successfully logged in as " + testdata.Username)
});

Then(`Check whether the user able to click on the Access Based Menu button`,async function (){
  await fixture.page.click(PHRS_PageObjects.DashBoard.AccessMenu);
});

Given('Check whether the user able Navigate to landing Page Cumulative', async function () {
  await fixture.page.click(PHRS_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(PHRS_PageObjects.LoginPage.Username, testdata.Username)
  await fixture.page.fill(PHRS_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(PHRS_PageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("User successfully logged in as " + testdata.Username)
});

// Then("Verify after logging in redirecting correctly to EIP dashboard", async () => {
//   if (testdata.DashBoard === await fixture.page.url()) { //page.url() -- It will return the url of the current page
//     Log.info("Redirected to Dashboard");
//   } else {
//     Log.info("Redirection failed to dashboard")
//   }
// })

Then('Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner', async function () {
  await fixture.page.click(PHRS_PageObjects.DashBoard.AccessMenu);
});

Then('Check whether the user able to select the Asset Management from the dropdown', async function () {
  await fixture.page.click(PHRS_PageObjects.DashBoard.AssetManagement);

});

Then('Check whether the user able to select the Planning & Procurement from the dropdown', async function () {
  await fixture.page.click(PHRS_PageObjects.DashBoard.Planning_and_Procurement);

});

Then('Check whether the user able to select the Plant Hire Request and Confirmation from the dropdown', async function () {
  await fixture.page.click(PHRS_PageObjects.DashBoard.Plant_Hire_Request_Confirmation);

});

Then("After PHRS page opened verify the Title of PHRS page", async () => {
  if (testdata.PHRSPage_Ttile === await fixture.page.title()) { //page.title() -- It will return the page name of the current page
    Log.info("Page title is Correct");
  } else {
    Log.error("Displaying a Wrong Page title")
  }
})

Then("Verify after selecting Plant Hire Request and Confirmation it is Redirecting to PHRS page", async () => {
  await fixture.page.waitForLoadState()
  if (testdata.PHRS_Url === fixture.page.url()) { //page.url() -- It will return the url of the current page
    Log.info("Succesfully Opened PHRS Page");
  } else {
    Log.error("Failed to Open PHRS Page")
  }
})

Then('Check whether the user able to enter the Job field in the Autocomplete box', async function () {
  await fixture.page.waitForTimeout(2000);
  await common_methods.autocompleteField(PHRS_PageObjects.Hirerequest.Job, testdata.Job)
});

Then('Check whether the user able to enter the Job field in the Autocomplete box without Hireterm', async function () {
  await fixture.page.waitForTimeout(2000);
  await common_methods.autocompleteField(PHRS_PageObjects.Hirerequest.Job, testdata.Job1)
});

Then('Check whether the user able to enter the Document field in the Autocomplete box', async function () {
  await common_methods.autocompleteField(PHRS_PageObjects.Hirerequest.Document, testdata.Document)
});

Then("Check weather the user able to enter S3R Number in the input field", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.PHRSNUM, testdata.S3R_NUM)
})

Then("Check weather the user able to enter S3R Number in the input field for without Hireterm", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.PHRSNUM, testdata.S3R_NUM1)
})

Then('Check whether the user able to click on the Search button in top right corner', async function () {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.Search);
});

Then("Validate the Balance Quantity in the Plant hire Request Page", async () => {
  await fixture.page.waitForTimeout(2000);
  const S3RQuantity = await fixture.page.textContent(PHRS_PageObjects.Hirerequest.S3RQTY);
  const PHRS_Created = await fixture.page.textContent(PHRS_PageObjects.Hirerequest.PHRSCreated);
  
  if (S3RQuantity && PHRS_Created) {
    S3RQTY = parseInt(S3RQuantity)
    PHRSCreated = parseInt(PHRS_Created)

  }else{
    Log.error(`Unable to get the S3RQTY and PHRS Created`)
  }
})

Then('Check whether the user able to click on the Action button for S3R Number', async function () {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.Icon);
});

Then("Verify weather withHireterm button is appearing after clicking on Action button", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.Hirerequest.WithHireterm)).toBeVisible()
    Log.info("With Hire term option is available");
  } catch (error) {
    Log.error("With Hire term option is not available");
  }
})

Then('Check whether the user able to select With Hire term from the Available options', async function () {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.WithHireterm);
  if(await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).isVisible()){
    await fixture.page.click(PHRS_PageObjects.Hirerequest.Icon);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(PHRS_PageObjects.Hirerequest.ExpandList)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(PHRS_PageObjects.Hirerequest.Cancel_PHRS)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(PHRS_PageObjects.Hirerequest.confirmCancel)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(PHRS_PageObjects.Hirerequest.Icon);
    await fixture.page.click(PHRS_PageObjects.Hirerequest.WithHireterm);
  }

});
Then("Verify weather without Hireterm button is appearing after clicking on Action button", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.Hirerequest.WithoutHireterm)).toBeVisible()
    Log.info("Without Hire term option is available");
  } catch (error) {
    Log.error("Without Hire term option is not available");
  }
})

Then('Check whether the user able to select Without Hire term from the Available options', async function () {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.WithoutHireterm);
  if(await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).isVisible()){
    await fixture.page.click(PHRS_PageObjects.Hirerequest.Icon);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(PHRS_PageObjects.Hirerequest.ExpandList)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(PHRS_PageObjects.Hirerequest.Cancel_PHRS)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(PHRS_PageObjects.Hirerequest.confirmCancel)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(PHRS_PageObjects.Hirerequest.Icon);
    await fixture.page.click(PHRS_PageObjects.Hirerequest.WithoutHireterm);
  }

});

Then('Check whether the user able to Navigate Hire Request Page', async function () {
  await fixture.page.waitForLoadState()
  
  if (testdata.PHRS_HireRequest_Url === fixture.page.url()) { //returns the current page URL
    Log.info("Succesfully Opened PHRS Hire Request Page");
  } else {
    Log.error("Failed to Open PHRS Hire Request Page")
  }
});

Then("Verify the Job value in the Hire Request Creation Page", async () => {
  //page.textContent() -- it wil return the text of the web element specified
  const S3RNum = await fixture.page.textContent(PHRS_PageObjects.Hirerequest.Job_Role);
  if(testdata.S3R_NUM === S3RNum?.trim()) { //to trim extra spaces
    Log.info("S3R Number " + testdata.S3R_NUM + " is matching");
  } else {
    Log.error("S3R is not matching");
  }
})

Then("Verify the Balance Quantity in th Hire Request Creation Page", async () => {
  await fixture.page.waitForTimeout(5000)
  const BalanceQty = await fixture.page.textContent(PHRS_PageObjects.Hirerequest.BalanceQuantity)
  const BalanceQuantity = S3RQTY - PHRSCreated;
  if (BalanceQty)
    if (BalanceQuantity == parseInt(BalanceQty)){
      Log.info("Balance Quantity is matching Correctly");
      Log.info(`BalanceQTY--${BalanceQuantity} and Page-${BalanceQty}`)
    } else {
      Log.info("Balance Quantity is not matching Correctly")
      Log.error(`BalanceQTY--${BalanceQuantity} and Page-${BalanceQty}`)
    }
})

Then('Check whether the user able change the request from date in the Hire Request Creation Page', async function () {
  // await fixture.page.click(PHRS_PageObjects.Hirerequest.RequiredForm);
  // await fixture.page.waitForTimeout(1000); //page.waitForTimeout() -- It will wait for Specified amount of time
  // await fixture.page.click(PHRS_PageObjects.Hirerequest.Today);
  // await fixture.page.waitForTimeout(1000);

    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1)
  await common_methods.datepicker(PHRS_PageObjects.Hirerequest.RequiredForm,year,month,1) //selecting date as 1st of present month

});

Then('Check weather user able to change to date in the Hire Request Creation Page', async () => {
    const date = new Date();
    const year = date.getFullYear();// present year
    const month = (date.getMonth() + 1) //present month
    await common_methods.datepicker(PHRS_PageObjects.Hirerequest.RequiredTo,year,month+2,30) //selecting date as 30th of 2 months from now
})

Then('Check whether the user able to enter the Quantity in the Hire Request Creation Page', async function () {
  const ele = fixture.page.locator(PHRS_PageObjects.Hirerequest.Quantity);
  await ele.click();
  await ele.clear();
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.Quantity, testdata.Quantity);
});

Then('Check whether the user able to enter the Equipment Age - Minimum in the Hire Request Creation Page', async function () {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.MinAge, testdata.MinAge);
});

Then('Check whether the user able to enter the Equipment Age - Maximum in the Hire Request Creation Page', async function () {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.MaxAge, testdata.MaxAge);
});

Then("Verify weather user able to enter make description in the autocomplete box in the Hire Request Creation Page", async () => {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.MakeDescription)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
})

Then("Verify weather user able to enter model description in the autocomplete box in the Hire Request Creation Page", async () => {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.ModelDescription)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
})

Then("Verify weather user able to enter reason for hiring in the input box in the Hire Request Creation Page", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.ReasonforHiring, testdata.Test)
})

Then("Verify weather user able to enter scope of work in the input box in the Hire Request Creation Page", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.ScopeofWork, testdata.Test)
})

Then("Verify weather user able to enter Specific Requirements Emission Norms Etc in the input box in the Hire Request Creation Page", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.SpecificRequirements, testdata.Test)
})

Then("Verify weather user able to enter Scope Of Work Qty per Equipment  in the input box in the Hire Request Creation Page", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.ScopeWorkEquipment, testdata.TestValue)
})

Then("Verify weather user able to enter duration in the autocomplete box in the Hire Request Creation Page", async () => {
  await common_methods.selectByIndex(PHRS_PageObjects.Hirerequest.Duration, 1)
})

Then('Check whether the user able to click on the Work Type in the Hire Request Creation Page', async function () {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.Worktype);
});

Then('Check whether the user able to select the Cumulative from the dropdown in the Hire Request Creation Page', async function () {
  // await fixture.page.pause()
  await fixture.page.click(PHRS_PageObjects.Hirerequest.Cumulative);
});

Then('Check whether the user able to click on Tearms in the Hire Request Creation Page', async function () {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.Tearms);
})

Then('Check whether the user able to select the Included in hire charges Single shift Fixed charges per month for 12 hours from the dropdown in the Hire Request Creation Page', async function () {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.Tearmvalue);
});

Then('Check whether the user able to click on the No Of Shifts in the Hire Request Creation Page', async function () {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.Hirerequest.ShiftInput)).toBeEditable()
  } catch (error) {
    Log.info("No of shifts is not taking input");
  }
});

Then('Check whether the user able to enter on the No Of Shifts in the Hire Request Creation Page', async function () {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.ShiftInput, testdata.ShiftInput);
});
Then('Check whether the user able to click on the Shifts Hours in the Hire Request Creation Page', async function () {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.Hirerequest.ShiftHours)).toBeEditable()
  } catch (error) {
    Log.info("Shift Hours is not taking input");
  }
});

Then('Check whether the user able to select on the Shifts Hours from the dropdown in the Hire Request Creation Page', async function () {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.ShiftHours, testdata.ShiftHours);
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
  Log.info(" Enter ShiftHours field as " + testdata.ShiftHours + ". Selcted successfully");
});

Then("Check weather user able to enter Additional operators in the Hire Request Creation Page", async () => {
  // await fixture.page.pause()
  await fixture.page.waitForTimeout(2000)
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.Addloperators,testdata.AddlOperators);
  // Addloperators.click()
  // Addloperators.clear()
  // await fixture.page.waitForTimeout(1000)
  // Addloperators.fill(testdata.AddlOperators)
})

Then("Check weather user able to enter Helpers in the Hire Request Creation Page", async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.Helpers,testdata.Helpers);
  // Helpers.click()
  // Helpers.clear()
  // Helpers.fill(testdata.Helpers)
})

Then("Check whether user able to enter Claimable from client section", async () => {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.Claimable_clear);
  await fixture.page.waitForTimeout(1000);
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
  
})

Then('Check whether the user able to click on the Add Vendor in the Hire Request Creation Page', async function () {
  await fixture.page.click(PHRS_PageObjects.Vendor.Addvendor);
});

Then('Check whether the user able Navigate to Vendor Selection', async function () {
  if (await fixture.page.locator(PHRS_PageObjects.Hirerequest.Vendorpage).isVisible()) {
    Log.info("Vendor Adding Page is opened successfully");
  } else {
    Log.info("Unable to open Vendor Adding Page");
  }
});

Then('Check whether the user able to click on the Vendor', async function () {
  await fixture.page.fill(PHRS_PageObjects.Vendor.Vendor, testdata.Vendor);
});

Then('check whether the user able to enter the input-knowell', async function () {
  await fixture.page.click(PHRS_PageObjects.Vendor.listbox);
});

Then('Check whether the user able to view the vendor table', async function () {
  if (fixture.page.locator(PHRS_PageObjects.Vendor.VendorTable)) {
    Log.info("Vendor table is visible");

  } else {
    Log.info("Vendor table is not visible");
  }
});

Then('Verify weather post button is enabled in vendor adding page', async function () {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.Vendor.selectVendorBtnId)).toBeEnabled()
  } catch (error) {
    Log.info("Post button in ADD VENDOR is disabled");
  }
});

Then('Check whether the user able to click on post button', async function () {
  await fixture.page.click(PHRS_PageObjects.Vendor.selectVendorBtnId);
});

Then('Check whether the vendor is added in the Hire Request Creation page', async function () {
  const vendor = await fixture.page.textContent(PHRS_PageObjects.Hirerequest.Check_Vendor_added);
  if (testdata.Vendor == vendor?.trim()) {
    Log.info("vendor " + testdata.Vendor + " added successfully");
  } else {
    Log.info("Vendor is not added");
  }
});

Then("Verify weather Create Hire Request button is enabled", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.Hirerequest.CreateHireBtn)).toBeEnabled()
  } catch (error) {
    Log.info("Create Hire Request page is disabled");
  }
})

Then('Check whether the user able to click on Create Hire Request', async function () {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.CreateHireBtn);
});

Then('Get the PHRS number from the Popup', async () => {
  const PHRS_NUM = await fixture.page.textContent(PHRS_PageObjects.Hirerequest.Message_box);
  if (PHRS_NUM) //to validate the value is not null
    PHRSNumber = PHRS_NUM?.substring(0, 25) //substring() - to get a part of string
  Log.info(PHRSNumber);
  await fixture.page.evaluate((PHRSNumber) => {
    localStorage.setItem("PHRS_Num", PHRSNumber)
  }, PHRSNumber)
  // window.localStorage.setItem("PHRSNum",PHRSNumber);
  // Log.info(window.localStorage.getItem("PHRSNum"))
})

Then('Check whether the user able to view popup as Success', async function () {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.SuccessOK)
});


//************************************************* */
//*****************PHRS_Confirmation*************** */


Then('Select Job from Autocomplete box which is in the top left corner in the Plant Hire Request Page', async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.Job, testdata.Job);
  await fixture.page.waitForTimeout(1000)
  await fixture.page.keyboard.press('ArrowDown')
  await fixture.page.keyboard.press('Enter')
})

Then('Select the document as SR3 number which is right to the Job field in the Plant Hire Request page', async () => {

  await fixture.page.fill(PHRS_PageObjects.Hirerequest.Document, "S3R")
  await fixture.page.waitForTimeout(1000)
  await fixture.page.keyboard.press('ArrowDown')
  await fixture.page.keyboard.press('Enter')
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.PHRSNUM, testdata.S3R_NUM)
})

Then('Click on the Search Button to get the available assets for the selected job', async () => {

  await fixture.page.click(PHRS_PageObjects.Hirerequest.Search);
})

Then('Find the required Job from the Grid of availavle jobs and click on Dropdown icon', async () => {

  await fixture.page.click(PHRS_PageObjects.Hirerequest.ExpandList);
})

Then('Click on Confirm PHRS tick icon for the required job in the Actions part', async () => {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.ConfirmAction);
})

Then('Navigate to TCC which is in top right above the Equipment Availability option in the PHRS Confirmation Page', async () => {
  await fixture.page.click(PHRS_PageObjects.TCC.TCCID);
})

Then("Select the Vendor by clicking on the checkbox available", async () => {
  await fixture.page.waitForTimeout(2000)
  if(await fixture.page.locator(PHRS_PageObjects.TCC.Checkbox).isChecked()){
    Log.info("Checkbox is already checked")
  }else{
    await fixture.page.click(PHRS_PageObjects.TCC.Checkbox);
  }
})

Then("Enter the quantity in the input field available next to checkbox", async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.fill(PHRS_PageObjects.TCC.Quantity, "1");
})

Then("Verify weather user able to click on Select Vendor button at the bottom of the page", async () => {
  await fixture.page.click(PHRS_PageObjects.TCC.SelectVendor);
})


Then("Verify weather Quantity is same as given in the PHRS creation page", async () => {
  await fixture.page.waitForTimeout(5000)
  try {
    await fixture.page.waitForTimeout(10000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSNumber}' `;
    const data = await sql.executeQuery("ALM", query);
    const Quantity = await data.recordset[0].HPR_Quantity;
    if (Quantity == testdata.Quantity) {
      Log.info("Quantity is same as given in the PHRS Creation Page");
    } else {
      Log.info("Quantity is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Equipment minimum age is same as given in the PHRS creation page", async () => {
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSNumber}' `;
    const data = await sql.executeQuery("ALM", query);
    const EqipMinAge = await data.recordset[0].HPR_Age_Min;
    if (EqipMinAge == testdata.MinAge) {
      Log.info("Equipment minimum age is same as given in the PHRS Creation Page");
    } else {
      Log.info("Equipment minimum age is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Equipment maximum age is same as given in the PHRS creation page", async () => {
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSNumber}' `;
    const data = await sql.executeQuery("ALM", query);
    const EqipMaxAge = await data.recordset[0].HPR_Age_Max;
    if (EqipMaxAge == testdata.MaxAge) {
      Log.info("Equipment maximum age is same as given in the PHRS Creation Page");
    } else {
      Log.info("Equipment maximum age is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather No of Additional operators is same as given in the PHRS creation page", async () => {
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSNumber}' `;
    const data = await sql.executeQuery("ALM", query);
    const Addioperator = await data.recordset[0].HPR_No_Of_Addl_Operator;
    if (Addioperator == testdata.AddlOperators) {
      Log.info("Additional operators is same as given in the PHRS Creation Page");
    } else {
      Log.info("Additional operators is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather No of shifts is same as given in the PHRS creation page", async () => {
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSNumber}' `;
    const data = await sql.executeQuery("ALM", query);
    const Shifts = await data.recordset[0].HPR_SOW_UOM;
    if (Shifts == testdata.ShiftInput) {
      Log.info("No of shifts is same as given in the PHRS Creation Page");
    } else {
      Log.info("No of shifts is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather No of Helpers is same as given in the PHRS creation page", async () => {
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSNumber}' `;
    const data = await sql.executeQuery("ALM", query);
    const Helpers = await data.recordset[0].HPR_No_Of_Helpers;
    if (Helpers == testdata.Helpers) {
      Log.info("No of Helpers is same as given in the PHRS Creation Page");
    } else {
      Log.info("No of Helpers is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})

Then('Click on Save And Next Button in the Generals section of Hire Request Page', async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(PHRS_PageObjects.TCC.SaveandNext);
})

Then('Add the Hire Charges which is above the grid in the commercials page', async () => {
  await fixture.page.fill(PHRS_PageObjects.OT.HireCharges, testdata.HireCharges)
})

//******************OT CHARGES ********************* */

Then('Click on OT Charges option which is available inside the grid', async () => {

  await fixture.page.click(PHRS_PageObjects.OT.OTButton);
});
Then('Fill the OT Percentage in the input field which is in the OT Charges menu for cumulative worktype', async () => {
  await fixture.page.fill(PHRS_PageObjects.OT.OTPercentage, testdata.OTPercentage);
});
Then('Fill the OT Expected Hours in the input field which is in the OT Charges menu for cumulative worktype', async () => {
  await fixture.page.fill(PHRS_PageObjects.OT.OTExpectedhrs, testdata.OTExpectedhrs);
  await fixture.page.waitForTimeout(1000);
});

Then("Validate the OT hours calculation for 30 days for cumulative worktype", async () => {
  // await fixture.page.pause();

  //***********Calculating NR/HR*************
  const Normalrate_HR = await fixture.page.textContent(PHRS_PageObjects.OTCalculation.NormalrateperHR);
  let NR_HR: number = parseInt(testdata.HireCharges) / parseInt(testdata.ShiftHours);

  Log.info("From page" + Normalrate_HR)
  NR_HR = parseFloat(Number(NR_HR).toFixed(2));
  Log.info("Calculated" + NR_HR)

  if (Normalrate_HR != null)      //to Confirm that these values are not null
    if (NR_HR === parseFloat(Normalrate_HR)) {
      Log.info("Normal Rate per hour is correct")

    } else {
      Log.info("Normal Rate per hour is Incorrect")
    }

  //************Calculating Normal Hrs Amount***************
  const Normal_Qty = await fixture.page.textContent(PHRS_PageObjects.OTCalculation.NormalQTY)
  const Normal_Hrs_Amount = await fixture.page.textContent(PHRS_PageObjects.OTCalculation.NormalHRSAmount)
  Log.info(Normal_Hrs_Amount);
  let NR_HR_Amount;
  if (Normal_Qty && Normalrate_HR && Normal_Hrs_Amount) {           //to Confirm that these values are not null
    NR_HR_Amount = parseFloat(Normal_Qty) * parseFloat(Normalrate_HR) // converting string to floating point number by using parseFloat
    NR_HR_Amount = parseFloat(Number(NR_HR_Amount).toFixed(2));
    Log.info("site: " + Normal_Hrs_Amount);
    Log.info("calculated: " + NR_HR_Amount);

    if (NR_HR_Amount === parseFloat(Normal_Hrs_Amount)) {
      Log.info("Normal Hours Amount is correct");
    } else {
      Log.info("Normal Hours Amount is Incorrect");

    }
  }

  //***************Calculating OTRate/HR ************* */
  const OT_Rate_Hr = await fixture.page.textContent(PHRS_PageObjects.OTCalculation.OTRatePerHour)
  let OT_R_Hr;
  if (Normalrate_HR && OT_Rate_Hr) {               //to Confirm that these values are not null
    OT_R_Hr = parseFloat(Normalrate_HR) * (parseFloat(testdata.OTPercentage) / 100) // converting string to floating point number by using parseFloat
    OT_R_Hr = parseFloat(Number(OT_R_Hr).toFixed(2));
    Log.info("Site " + OT_Rate_Hr);
    Log.info("calculated " + OT_R_Hr);

    if (parseFloat(OT_Rate_Hr) === OT_R_Hr) {
      Log.info("OT Rate per Hr is Correct");
    } else {
      Log.info("OT Rate per Hr is InCorrect");
    }
  }


  //**************Calculating OT Hour Amount ************** */
  const OT_QTY = await fixture.page.textContent(PHRS_PageObjects.OTCalculation.OTQTY)
  const OT_Hours_Amount = await fixture.page.textContent(PHRS_PageObjects.OTCalculation.OTHRSAmount)
  Log.info(OT_Hours_Amount);
  let OT_HR_Amount;
  if (OT_QTY && OT_Rate_Hr && OT_Hours_Amount) {             //to Confirm that these values are not null
    OT_HR_Amount = parseFloat(OT_QTY) * parseFloat(OT_Rate_Hr) // converting string to floating point number by using parseFloat
    OT_HR_Amount = parseFloat(Number(OT_HR_Amount).toFixed(2));
    Log.info("site: " + OT_Hours_Amount);
    Log.info("calculated: " + OT_HR_Amount);

    if (OT_HR_Amount === parseFloat(OT_Hours_Amount)) {
      Log.info("Normal Hours Amount is correct");
    } else {
      Log.info("Normal Hours Amount is Incorrect");
    }
  }
})

Then("Validate the OT hours calculation for 31 days for cumulative worktype", async () => {
  // await fixture.page.pause();

  //***********Calculating NR/HR*************
  const Normalrate_HR = await fixture.page.textContent(PHRS_PageObjects.OTCalculation31.NormalrateperHR);
  let NR_HR: number = parseInt(testdata.HireCharges) / parseInt(testdata.ShiftHours);

  Log.info("From page" + Normalrate_HR)
  NR_HR = parseFloat(Number(NR_HR).toFixed(2));
  Log.info("Calculated" + NR_HR)

  if (Normalrate_HR != null)           //to Confirm that these values are not null
    if (NR_HR === parseFloat(Normalrate_HR)) { // converting string to floating point number by using parseFloat
      Log.info("Normal Rate per hour is correct")

    } else {
      Log.info("Normal Rate per hour is Incorrect")
    }

  //************Calculating Normal Hrs Amount***************
  const Normal_Qty = await fixture.page.textContent(PHRS_PageObjects.OTCalculation31.NormalQTY)
  const Normal_Hrs_Amount = await fixture.page.textContent(PHRS_PageObjects.OTCalculation31.NormalHRSAmount)
  Log.info(Normal_Hrs_Amount);
  let NR_HR_Amount;
  if (Normal_Qty && Normalrate_HR && Normal_Hrs_Amount) {         //to Confirm that these values are not null
    NR_HR_Amount = parseFloat(Normal_Qty) * parseFloat(Normalrate_HR) // converting string to floating point number by using parseFloat
    NR_HR_Amount = parseFloat(Number(NR_HR_Amount).toFixed(2));
    Log.info("site: " + Normal_Hrs_Amount);
    Log.info("calculated: " + NR_HR_Amount);

    if (NR_HR_Amount === parseFloat(Normal_Hrs_Amount)) {
      Log.info("Normal Hours Amount is correct");
    } else {
      Log.info("Normal Hours Amount is Incorrect");

    }
  }

  //***************Calculating OTRate/HR ************* */
  const OT_Rate_Hr = await fixture.page.textContent(PHRS_PageObjects.OTCalculation31.OTRatePerHour)
  let OT_R_Hr;
  if (Normalrate_HR && OT_Rate_Hr) {         //to Confirm that these values are not null
    OT_R_Hr = parseFloat(Normalrate_HR) * (parseFloat(testdata.OTPercentage) / 100) // converting string to floating point number by using parseFloat
    OT_R_Hr = parseFloat(Number(OT_R_Hr).toFixed(2));
    Log.info("Site " + OT_Rate_Hr);
    Log.info("calculated " + OT_R_Hr);

    if (parseFloat(OT_Rate_Hr) === OT_R_Hr) {
      Log.info("OT Rate per Hr is Correct");
    } else {
      Log.info("OT Rate per Hr is InCorrect");
    }
  }


  //**************Calculating OT Hour Amount ************** */
  const OT_QTY = await fixture.page.textContent(PHRS_PageObjects.OTCalculation31.OTQTY)
  const OT_Hours_Amount = await fixture.page.textContent(PHRS_PageObjects.OTCalculation31.OTHRSAmount)
  Log.info(OT_Hours_Amount);
  let OT_HR_Amount;
  if (OT_QTY && OT_Rate_Hr && OT_Hours_Amount) {             //to Confirm that these values are not null
    OT_HR_Amount = parseFloat(OT_QTY) * parseFloat(OT_Rate_Hr) // converting string to floating point number by using parseFloat
    OT_HR_Amount = parseFloat(Number(OT_HR_Amount).toFixed(2));
    Log.info("site: " + OT_Hours_Amount);
    Log.info("calculated: " + OT_HR_Amount);

    if (OT_HR_Amount === parseFloat(OT_Hours_Amount)) {
      Log.info("Normal Hours Amount is correct");
    } else {
      Log.info("Normal Hours Amount is Incorrect");
    }
  }
})

Then("Validate sum of all months for Normal Hour QTY for cumulative worktype", async () => {
  const QTY1 = await fixture.page.textContent(PHRS_PageObjects.OTCalculation.NormalQTY)
  const QTY2 = await fixture.page.textContent(PHRS_PageObjects.OTCalculation31.NormalQTY)
  const Total_Normal_QTY = await fixture.page.textContent(PHRS_PageObjects.OTCalculation.NormalQTYTotal);
  if (QTY1 && QTY2 && Total_Normal_QTY) {              //to Confirm that these values are not null
    const Total = parseFloat(QTY1) + parseFloat(QTY2) // converting string to floating point number by using parseFloat
    Log.info("Site: " + Total_Normal_QTY);
    Log.info("Calculated: " + Total);
    if (parseFloat(Total_Normal_QTY) === Total) {
      Log.info("Normal QTY Total is calculated correctly");
    } else {
      Log.info("Normal QTY Total is calculated Incorrectly");
    }
  }
})

Then("Validate sum of all months for Normal Hour Amount for cumulative worktype", async () => {
  const NormalAmount1 = await fixture.page.textContent(PHRS_PageObjects.OTCalculation.NormalHRSAmount)
  const NormalAmount2 = await fixture.page.textContent(PHRS_PageObjects.OTCalculation31.NormalHRSAmount)
  const Total_Normal_Amount = await fixture.page.textContent(PHRS_PageObjects.OTCalculation.NormalAmountTotal);
  if (NormalAmount1 && NormalAmount2 && Total_Normal_Amount) { //to Confirm that these values are not null
    let Total = parseFloat(NormalAmount1) + parseFloat(NormalAmount2) // converting string to floating point number by using parseFloat
    Total = parseInt(Total.toFixed(2))
    Log.info("Site: " + Total_Normal_Amount);
    Log.info("Calculated: " + Total);
    if (parseFloat(Total_Normal_Amount) === Total) {
      Log.info("Normal Hours Total is calculated correctly");
    } else {
      Log.info("Normal Hours Total is calculated Incorrectly");
    }
  }
})


Then('Click on the save button in OT Charges below the grid', async () => {
  await fixture.page.click(PHRS_PageObjects.OT.SaveOT);
  await fixture.page.waitForTimeout(1000);
});

Then("Enter the Operator Rate in the input field of Operator", async () => {
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(PHRS_PageObjects.Commercials.Operatorrate, testdata.CommersialsRate)
})

Then("Enter the Additional Operator Rate in the input field of Operator", async () => {
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(PHRS_PageObjects.Commercials.AddiOperatorrate, testdata.CommersialsRate)
})

Then("Enter the Helper Rate in the input field of Operator", async () => {
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(PHRS_PageObjects.Commercials.Helperrate, testdata.CommersialsRate)
})

Then("Enter the Additional Helper Rate in the input field of Operator", async () => {
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(PHRS_PageObjects.Commercials.AddiHelperrate, testdata.CommersialsRate)
})

Then("Enter the Accomodation Rate in the input field of Operator", async () => {
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(PHRS_PageObjects.Commercials.Accomodationrate, testdata.CommersialsRate)
})

Then("Enter the Mobilisation Rate in the input field of Operator", async () => {
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(PHRS_PageObjects.Commercials.Mobilisationrate, testdata.CommersialsRate)
})

Then("Enter the DeMobilisation Rate in the input field of Operator", async () => {
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(PHRS_PageObjects.Commercials.DeMobilisationrate, testdata.CommersialsRate)
})


//****************Additional Helpers******************** */

Then("Click on Operator option inside the grid", async () => {
  await fixture.page.click(PHRS_PageObjects.Commercials.Operator),
    await fixture.page.waitForTimeout(2000);
})
Then("Click on Additional Operator option inside the grid", async () => {
  await fixture.page.click(PHRS_PageObjects.Commercials.Addioperator),
    await fixture.page.waitForTimeout(2000);
})
Then("Click on Helper option inside the grid", async () => {
  await fixture.page.click(PHRS_PageObjects.Commercials.Helper),
    await fixture.page.waitForTimeout(2000);
})

Then('Click on Additional Helper option option inside the grid', async () => {
  await fixture.page.click(PHRS_PageObjects.AdditionalHelper.AdditionalHelper),
    await fixture.page.waitForTimeout(2000);
});
Then('Select the required months by checking the checkbox available for particular month', async () => {
  await fixture.page.locator(PHRS_PageObjects.Commercials.SelectAllcheckbox).check(),
  await fixture.page.waitForTimeout(1000);
});
Then('Click on the Save button inside the sections', async () => {
  await fixture.page.click(PHRS_PageObjects.Commercials.Save),
    await fixture.page.waitForTimeout(1000);
});


//********************* ACCOMODATION ************************** */
Then('Click on Accommodation option inside the grid under description', async () => {
  await fixture.page.click(PHRS_PageObjects.Accommodation.Accommodation),
    await fixture.page.waitForTimeout(1000);
});
Then('Select the Accommodation option as Bachelor Accomodation provided by site', async () => {
  await fixture.page.click(PHRS_PageObjects.Accommodation.Bachelor),
    await fixture.page.waitForTimeout(1000);
});
Then('Click on the Save button in Accommodation', async () => {
  await fixture.page.click(PHRS_PageObjects.Accommodation.Save)
  await fixture.page.waitForTimeout(1000);
});

//*************************** MOBILISATION ************************ */
Then('Click on Mobilisation option inside the grid under description', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.Mobilisation)
});

Then('Click on Mobilisation option as Both way payable at actual in the Autocomplete box', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.Way)
});

Then('Click on Fromstate autocomplete box', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.Fromstate)
});
Then('Select the State1 option from the dropdown', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.State1)
});

Then('Click on Fromcity autocomplete box', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.Fromcity)
});

Then('Select the City1 option from the dropdown', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.City1)
});

Then('Fill the PinCode of the from city in the input field', async () => {
  await fixture.page.fill(PHRS_PageObjects.Mobilisation.Pin1, testdata.Pin1)
});

Then('Click on Tostate autocomplete box', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.Tostate)
});

Then('Select the State2 option from the dropdown', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.State2)
});

Then('Click on Tocity autocomplete box', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.Tocity)
});

Then('Select the City2 option from the dropdown', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.City2)
});

Then('Fill the Pincode of the to city in the input field', async () => {
  await fixture.page.fill(PHRS_PageObjects.Mobilisation.Pin2, testdata.Pin2)
});

Then('Click on Next Button in Mobilisation section', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.Next)
});

Then('Click on Save Button in Mobilisation section', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.Save)

});

Then('Click on Save and Next Button in Commersials tab', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.SaveandNext);
});


Then('In the Other tearms enter Primary Engine details', async () => {
  await fixture.page.click(PHRS_PageObjects.primaryEngine.Dropdown_clear)
  await common_methods.selectByIndex(PHRS_PageObjects.primaryEngine.Fuel_dropdown, 1)
  await common_methods.selectByIndex(PHRS_PageObjects.primaryEngine.Quantity_Dropdown, 2)
  await fixture.page.fill(PHRS_PageObjects.primaryEngine.Min, "5")
  await fixture.page.fill(PHRS_PageObjects.primaryEngine.Max, "25")
})

Then('In the Other tearms enter Secondary Engine details', async () => {
  // await fixture.page.click("//eipautocomplete[@id='secondaryFuelType']/descendant::span[@title='clear']")
  await common_methods.selectByIndex(PHRS_PageObjects.SecondaryEngine.Fuel_dropdown, 2)
  await common_methods.selectByIndex(PHRS_PageObjects.SecondaryEngine.Quantity_Dropdown, 1)
  await fixture.page.fill(PHRS_PageObjects.SecondaryEngine.Min, "5")
  await fixture.page.fill(PHRS_PageObjects.SecondaryEngine.Max, "25")
})

Then('Verify able to enter breakdown cause', async () => {
  await common_methods.selectByIndex(PHRS_PageObjects.BreakDown.Breakdown_Cause, 1)
})

Then('Verify able to enter breakdown deduction rate and Maintenance', async () => {
  await fixture.page.fill(PHRS_PageObjects.BreakDown.Deduction_rate, "25");
  await common_methods.selectByIndex(PHRS_PageObjects.BreakDown.Maintenance, 1)
})

Then('in Other Terms section Click on Save and Next', async () => {
  await fixture.page.click(PHRS_PageObjects.Mobilisation.SaveandNext)
})


Then("Send STC to Vendor by clicking on the STC option available at top right of the SOP Validations page",{timeout:60000}, async () => {
  await fixture.page.click(PHRS_PageObjects.STC.STCbtn)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(PHRS_PageObjects.STC.Generate_STC)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(PHRS_PageObjects.STC.Select_doc)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(PHRS_PageObjects.STC.Close_box)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(PHRS_PageObjects.STC.Send_STC)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(PHRS_PageObjects.STC.Close_STC)
  await fixture.page.waitForTimeout(2000)
})


Then('in SOP Validations Click on Confirm Hire Request Button', async () => {
  await fixture.page.waitForTimeout(3000)
  await fixture.page.click(PHRS_PageObjects.Hirerequest.ConfirmHireRequest);
})


//********************************************* */
//*************Negative Cases****************** */


Then("Verify weather Job is mandatory field or not", async () => {
  // await fixture.page.pause();
  await fixture.page.click(PHRS_PageObjects.Hirerequest.Search)
  await fixture.page.waitForTimeout(1000);
  Log.info(await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).textContent());

});

Then("Verify weather document field is mandatory", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.Job, testdata.Job);
  await fixture.page.waitForSelector(PHRS_PageObjects.Hirerequest.Job_Code);

  await fixture.page.click(PHRS_PageObjects.Hirerequest.Search)
  await fixture.page.waitForTimeout(1000);

  if (await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).isVisible()) {
    Log.info(await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).textContent());
  } else {
    Log.info("Document field is not mandatory");
  }

  await expect(fixture.page.locator(PHRS_PageObjects.Hirerequest.Search)).toHaveText('Search')
})

Then("Verify if search button is enabled or not", async () => {
  if (await fixture.page.locator(PHRS_PageObjects.Hirerequest.Search).isEnabled()) {
    Log.info("Search button is enabled")
  } else {
    Log.info("Search button is not working")
  }
})

Then("Verify weather Quality field is mandatory in Plant Hire Request page", async () => {
  await fixture.page.waitForTimeout(2000);
  const quality = fixture.page.locator(PHRS_PageObjects.Hirerequest.Quantity)
  await quality.click()
  await quality.clear()
  await fixture.page.click(PHRS_PageObjects.Hirerequest.CreateHireBtn)
  await fixture.page.waitForTimeout(2000);
  if (await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).isVisible()) {
    Log.info(await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).textContent());
  } else {
    Log.info("Quality field is not mandatory");
  }
})

Then("Verify weather Minimum Age field is mandatory in Plant Hire Request page", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.Quantity, testdata.Quantity)
  await fixture.page.click(PHRS_PageObjects.Hirerequest.CreateHireBtn)
  await fixture.page.waitForTimeout(2000);
  if (await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).isVisible()) {
    Log.info(await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).textContent());
  } else {
    Log.info("Minimum Age field is not mandatory");
  }
})

Then("Verify weather Maximum Age field is mandatory in Plant Hire Request page", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.MinAge, testdata.MinAge)
  await fixture.page.click(PHRS_PageObjects.Hirerequest.CreateHireBtn)
  await fixture.page.waitForTimeout(2000);
  if (await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).isVisible()) {
    Log.info(await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).textContent());
  } else {
    Log.info("Maximum Age field is not mandatory");
  }
})

Then("Verify weather Work Type field is mandatory in Plant Hire Request page", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.MaxAge, testdata.MaxAge)

  await fixture.page.click(PHRS_PageObjects.Hirerequest.CreateHireBtn)
  await fixture.page.waitForTimeout(2000);
  if (await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).isVisible()) {
    Log.info(await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).textContent());
  } else {
    Log.info("There are no mandatory fields in page");
  }
})

Then("Verify weather Operator Terms field is mandatory in Plant Hire Request page", async () => {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.Worktype)
  await fixture.page.click(PHRS_PageObjects.Hirerequest.Cumulative)
  await fixture.page.click(PHRS_PageObjects.Hirerequest.CreateHireBtn)
  await fixture.page.waitForTimeout(2000);
  if (await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).isVisible()) {
    Log.info(await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).textContent());
  } else {
    Log.info("There are no mandatory fields in page");
  }
})

Then("Verify weather No Of Shifts field is mandatory in Plant Hire Request page", async () => {
  await fixture.page.click(PHRS_PageObjects.Hirerequest.Tearms);
  await fixture.page.click(PHRS_PageObjects.Hirerequest.Tearmvalue);
  await fixture.page.click(PHRS_PageObjects.Hirerequest.CreateHireBtn)
  await fixture.page.waitForTimeout(2000);
  if (await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).isVisible()) {
    Log.info(await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).textContent());
  } else {
    Log.info("There are no mandatory fields in page");
  }
})

Then("Verify weather Shift Hours field is mandatory in Plant Hire Request page", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.ShiftInput, testdata.ShiftInput);
  await fixture.page.click(PHRS_PageObjects.Hirerequest.CreateHireBtn)
  await fixture.page.waitForTimeout(1000);
  if (await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).isVisible()) {
    Log.info(await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).textContent());
  } else {
    Log.info("There are no mandatory fields in page");
  }
})

Then("Verify weather add vendor button is enabled or not", async () => {
  expect(fixture.page.locator(PHRS_PageObjects.Vendor.Addvendor)).toBeEnabled
})

Then("Verify weather Adding A Vendor is mandatory in Plant Hire Request page", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.ShiftHours, testdata.ShiftHours)
  await fixture.page.click(PHRS_PageObjects.Hirerequest.CreateHireBtn)
  await fixture.page.waitForTimeout(1000);
  if (await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).isVisible()) {
    Log.info(await fixture.page.locator(PHRS_PageObjects.Hirerequest.alert_box).textContent());
  } else {
    Log.info("There are no mandatory fields in page");
  }
})


//********************************************* */
///**************VENDOR CONFIRMATION******************** */


Then("Check whether the Vendor able Navigate to landing Page", async () => {
  await fixture.page.click(PHRS_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(PHRS_PageObjects.LoginPage.Username, testdata.Vendor_Username)
  await fixture.page.fill(PHRS_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(PHRS_PageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("Vendor successfully logged in as " + testdata.Vendor_Username)
})

Then("Verify that exact user dashboard is opened", async () => {
  const VendorName = await fixture.page.textContent(PHRS_PageObjects.Vendor_Page.UserName)
  if (testdata.Vendor === VendorName?.trim()) { // trim - to remove extra spaces at front and back of text
    Log.info("Correct Vendor Logged Successfully");
  } else {
    Log.info("Vendor login failed");
  }
})

Then("Check whether the Vendor able to click on the Access Based Menu button", async () => {
  await fixture.page.click(PHRS_PageObjects.DashBoard.AccessMenu);
})

Then("Check whether the Vendor able to select the Asset Management from the dropdown", async () => {
  await fixture.page.click(PHRS_PageObjects.DashBoard.AssetManagement);
})

Then("Verify Vendor able to select My Assests", async () => {
  await fixture.page.click(PHRS_PageObjects.Vendor_Page.MyAssets)
})

Then("Enter Menu details as Hire Term Acceptance in the autocomplete box available at top left of the page", async () => {
  await fixture.page.click(PHRS_PageObjects.Vendor_Page.Menu_Clear)
  await fixture.page.fill(PHRS_PageObjects.Vendor_Page.Menu_Input, testdata.MenuInput)
  await fixture.page.keyboard.press('ArrowDown') // keyboard event to press Down Arrow
  await fixture.page.keyboard.press('Enter') // keyboard event to press Enter
})

Then("Click on the filter icon to filter required Asset", async () => {
  await fixture.page.click(PHRS_PageObjects.Vendor_Page.Filter);
})

Then("Filter by giving generated PHRS number from PHRS Creation page in the Reference number", async () => {

  await fixture.page.fill(PHRS_PageObjects.Vendor_Page.ReferenceInput, PHRSNumber)
})

Then("Accept the request by clicking on tick icon under the actions for the Required Job", async () => {
  await fixture.page.click(PHRS_PageObjects.Vendor_Page.Accept_Request)
})

Then("Add Acceptance Remarks for the Accepted Job in the text area appeared", async () => {
  await fixture.page.fill(PHRS_PageObjects.Vendor_Page.Acceptance_Remarks, testdata.Test)
  await fixture.page.click(PHRS_PageObjects.Vendor_Page.Accept)
})


//*************************************************** */
//***************WorkOrder Confirmation****************** */

Given('Check whether the user able Navigate to WorkOrder landing Page', async function () {
  await fixture.page.click(PHRS_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(PHRS_PageObjects.LoginPage.Username, testdata.Username2)
  await fixture.page.fill(PHRS_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(PHRS_PageObjects.LoginPage.Login);
  Log.info(" User successfully logged in as " + testdata.Username2)

});

Then('Check whether the user able to select the WO Request from the dropdown', async () => {
  await fixture.page.click(PHRS_PageObjects.Wo.WoJob)
});

Then("Verify weather user able to enter job field in workorder request page", async () => {
  await fixture.page.fill(PHRS_PageObjects.Hirerequest.Job, testdata.Job);
  await fixture.page.keyboard.press('ArrowDown')
  await fixture.page.keyboard.press('Enter')
})

Then("Click on the filter icon at the right side of page above the grid", async () => {
  await fixture.page.click(PHRS_PageObjects.Wo.Filter)
})

Then("Verify user able to filter by using the PHRS number generated while creating request", async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.fill(PHRS_PageObjects.Wo.ReferenceInput, "")
  const query = "select top 1 * from EIP40ALM.PHS.PHR_H_PlantHire_Request order by HPR_Inserted_On desc";
  const data = await sql.executeQuery("All", query);
  PHRSNumber = await data.recordset[0].HPR_Request_Number;
  await fixture.page.fill(PHRS_PageObjects.Wo.ReferenceInput, PHRSNumber)
})


Then('Check whether the user able to click on remarks button', async () => {
  await fixture.page.click(PHRS_PageObjects.Wo.Remark);

});
Then('Check whether the user able to enter the remarks', async () => {
  await fixture.page.fill(PHRS_PageObjects.Wo.Textarea, testdata.Test);

});

Then('Check whether the user able to click on submit button for Remarks', async () => {
  await fixture.page.click(PHRS_PageObjects.Wo.Submit);

});

Then('Check whether the user able to view the popup as Remarks updated successfully', async () => {
  Log.info(await fixture.page.textContent(PHRS_PageObjects.Hirerequest.Message_box))
});

Then('Check whether the user able to click on Ok button on the popup appeared', async () => {
  await fixture.page.click(PHRS_PageObjects.Wo.Ok);

});

Then('Check whether the user able to click on the Add icon create a new request', async () => {
  await fixture.page.click(PHRS_PageObjects.Wo.Icon)

});

Then('Click on save and next button in generals section', async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(PHRS_PageObjects.Creactioncheck.GeneralSave)

});

Then('Click on save and next button in commercials section', async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(PHRS_PageObjects.Creactioncheck.CommercialSave)

});

Then('Click on save and next button in OtherTerms section', async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(PHRS_PageObjects.Creactioncheck.CommercialSave)

});

Then('Click on save and next button in MaterialLinking section', async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(PHRS_PageObjects.Creactioncheck.MaterialLinking)

});

Then("Verify weather Country autocomplete box is editable in Bill from vendor in Tax page", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.Tax.countryVendor)).toBeEditable()

  } catch (error) {
    Log.info(error);
  }
})

Then("Verify weather State autocomplete box is editable in Bill from vendor in Tax page", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.Tax.FromState)).toBeEditable()

  } catch (error) {
    Log.info(error);
  }
})

Then("Verify weather Registration Number autocomplete box is editable in Bill from vendor in Tax page", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.Tax.RegistrationNumberVendor)).toBeEditable()

  } catch (error) {
    Log.info(error);
  }
})

Then("Verify weather Country autocomplete box is editable in Bill to Job in Tax page", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.Tax.countryjob)).toBeEditable()
  } catch (error) {
    Log.info(error);
  }
})

Then("Verify weather State autocomplete box is editable in Bill to Job in Tax page", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.Tax.ToState)).toBeEditable()
  } catch (error) {
    Log.info(error);
  }
})

Then("Verify weather Registration Number autocomplete box is editable in Bill to Job in Tax page", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.Tax.RegistrationNumberJob)).toBeEditable()
  } catch (error) {
    Log.info(error);
  }
})

Then('Verify weather user able to select state from dropdown in Bill from Vendor in Tax page', async () => {
  await fixture.page.fill(PHRS_PageObjects.Tax.FromState, testdata.FromState)
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
});

Then('Verify weather user able to select state from dropdown in Bill to Job in Tax page', async () => {
  await fixture.page.click(PHRS_PageObjects.Tax.ToState)
  await fixture.page.click(PHRS_PageObjects.Tax.Andhra)
});

Then('Select SAC from the autocomplete box which is above the grid to left of page', async () => {
  //selectByIndex -- A base method to select an option from the dropdown menu
  await common_methods.selectByIndex(PHRS_PageObjects.Tax.SAC, 6)

});

Then("Verify the tax value for the Normal hours in a month of 30 calendar days in the Tax section", async () => {
  const tax = await fixture.page.textContent(PHRS_PageObjects.Tax.TaxRate)
  const reference_Value = await fixture.page.textContent(PHRS_PageObjects.Tax.NormalHRReference_30)
  const tax_Value = await fixture.page.textContent(PHRS_PageObjects.Tax.NormalHRTax_30)
  let taxValue;
  if (tax && reference_Value && tax_Value) { // to check weather these values are not null
    //parseInt() -- to extract the integer value from string
    const taxPercentage = tax.substring(6, 7);
    const reference_Value1 = parseFloat(reference_Value.replace(/,/g, ''));  //to remove spaces and commos
    taxValue = reference_Value1 * (parseInt(taxPercentage) / 100);
    taxValue = parseFloat(Number(taxValue).toFixed(2))
    Log.info("Site:" + parseFloat(tax_Value));
    Log.info("Calculated" + taxValue);

    if (taxValue === parseFloat(tax_Value)) {
      Log.info("Tax Value is calculated correctly for Normal Hours 30 calender days")
    } else {
      Log.info("Tax Value is calculated Incorrectly for Normal Hours 30 calender days");
    }
  }
})

Then("Verify the tax value for the Normal hours in a month of 31 calendar days in the Tax section", async () => {
  const tax = await fixture.page.textContent(PHRS_PageObjects.Tax.TaxRate)
  const reference_Value = await fixture.page.textContent(PHRS_PageObjects.Tax.NormalHRReference_31)
  const tax_Value = await fixture.page.textContent(PHRS_PageObjects.Tax.NormalHRTax_31)
  let taxValue;
  if (tax && reference_Value && tax_Value) { // to check weather these values are not null
    //parseInt() -- to extract the integer value from string
    const taxPercentage = tax.substring(6, 7);
    Log.info("taxxxxxxx " + taxPercentage);

    const reference_Value1 = parseFloat(reference_Value.replace(/,/g, '')); //to remove spaces and commos

    taxValue = reference_Value1 * (parseInt(taxPercentage) / 100);
    taxValue = parseFloat(Number(taxValue).toFixed(2))
    Log.info("Site:" + parseFloat(tax_Value));
    Log.info("Calculated" + taxValue);

    if (taxValue === parseFloat(tax_Value)) {
      Log.info("Tax Value is calculated correctly for Normal Hours 31 calender days")
    } else {
      Log.info("Tax Value is calculated Incorrectly for Normal Hours 31 calender days");
    }
  }
})

Then("Verify the tax value for the Overtime Charges in a month of 30 calendar days in the Tax section", async () => {
  const tax = await fixture.page.textContent(PHRS_PageObjects.Tax.TaxRate)
  const reference_Value = await fixture.page.textContent(PHRS_PageObjects.Tax.OTHRReference_30)
  const tax_Value = await fixture.page.textContent(PHRS_PageObjects.Tax.OTHRTax_30)
  let taxValue;
  if (tax && reference_Value && tax_Value) { // to check weather these values are not null
    //parseInt() -- to extract the integer value from string
    const taxPercentage = tax.substring(6, 7);
    const reference_Value1 = parseFloat(reference_Value.replace(/,/g, ''));

    taxValue = reference_Value1 * (parseInt(taxPercentage) / 100);
    taxValue = parseFloat(Number(taxValue).toFixed(2))
    Log.info("Site:" + parseFloat(tax_Value));
    Log.info("Calculated" + taxValue);

    if (taxValue === parseFloat(tax_Value)) {
      Log.info("Tax Value is calculated correctly for OverTime Charges 30 calender days")
    } else {
      Log.info("Tax Value is calculated Incorrectly for OverTime Charges 30 calender days");
    }
  }
})

Then("Verify the tax value for the Overtime Charges in a month of 31 calendar days in the Tax section", async () => {
  const tax = await fixture.page.textContent(PHRS_PageObjects.Tax.TaxRate)
  const reference_Value = await fixture.page.textContent(PHRS_PageObjects.Tax.OTHRReference_31)
  const tax_Value = await fixture.page.textContent(PHRS_PageObjects.Tax.OTHRTax_31)
  let taxValue;
  if (tax && reference_Value && tax_Value) { // to check weather these values are not null
    //parseInt() -- to extract the integer value from string
    const taxPercentage = tax.substring(6, 7);

    const reference_Value1 = parseFloat(reference_Value.replace(/,/g, ''));

    taxValue = reference_Value1 * (parseInt(taxPercentage) / 100);
    taxValue = parseFloat(Number(taxValue).toFixed(2))
    Log.info("Site:" + parseFloat(tax_Value));
    Log.info("Calculated" + taxValue);

    if (taxValue === parseFloat(tax_Value)) {
      Log.info("Tax Value is calculated correctly for OverTime Charges 31 calender days")
    } else {
      Log.info("Tax Value is calculated Incorrectly for OverTime Charges 31 calender days");
    }
  }
})

Then("Verify the Total of the reference value in the Tax section", async () => {
  const ReferenceValue_NH30 = await fixture.page.textContent(PHRS_PageObjects.Tax.NormalHRReference_30)
  const ReferenceValue_NH31 = await fixture.page.textContent(PHRS_PageObjects.Tax.NormalHRReference_31)
  const ReferenceValue_OT30 = await fixture.page.textContent(PHRS_PageObjects.Tax.OTHRReference_30)
  const ReferenceValue_OT31 = await fixture.page.textContent(PHRS_PageObjects.Tax.OTHRReference_31)
  const TotalReferenceValue = await fixture.page.textContent(PHRS_PageObjects.Tax.TotalReferenceValue)

  if (ReferenceValue_NH30 && ReferenceValue_OT30 && ReferenceValue_NH31 && ReferenceValue_OT31 && TotalReferenceValue) {
    let ReferenceValue_NH30_Value = parseFloat(ReferenceValue_NH30.replace(/,/g, ''));
    let ReferenceValue_NH31_Value = parseFloat(ReferenceValue_NH31.replace(/,/g, '')); //to remove spaces and commos
    let ReferenceValue_OT30_Value = parseFloat(ReferenceValue_OT30.replace(/,/g, ''));
    let ReferenceValue_OT31_Value = parseFloat(ReferenceValue_OT31.replace(/,/g, '')); //to remove spaces and commos
    let Total_Reference_Value = parseFloat(TotalReferenceValue.replace(/,/g, ''));
    const Total_Ref = ReferenceValue_NH30_Value + ReferenceValue_NH31_Value + ReferenceValue_OT30_Value + ReferenceValue_OT31_Value;
    Log.info(Total_Ref);
    if (Total_Reference_Value === Total_Ref) {
      Log.info("Total of reference value id calculated correctly");
    } else {
      Log.info("There is a mistake in calculation of Total reference value");
    }
  }
})

Then("Verify the Total of the Tax value in the Tax section", async () => {
  const TaxValue_NH30 = await fixture.page.textContent(PHRS_PageObjects.Tax.NormalHRTax_30)
  const TaxValue_NH31 = await fixture.page.textContent(PHRS_PageObjects.Tax.NormalHRTax_31)
  const TaxValue_OT30 = await fixture.page.textContent(PHRS_PageObjects.Tax.OTHRTax_30)
  const TaxValue_OT31 = await fixture.page.textContent(PHRS_PageObjects.Tax.OTHRTax_31)
  const TotalTaxValue = await fixture.page.textContent(PHRS_PageObjects.Tax.TotalTaxValue)

  if (TaxValue_NH30 && TaxValue_OT30 && TaxValue_NH31 && TaxValue_OT31 && TotalTaxValue) {
    let ReferenceValue_NH30_Value = parseFloat(TaxValue_NH30.replace(/,/g, '')); //to remove spaces and commos
    let ReferenceValue_NH31_Value = parseFloat(TaxValue_NH31.replace(/,/g, ''));
    let ReferenceValue_OT30_Value = parseFloat(TaxValue_OT30.replace(/,/g, '')); //to remove spaces and commos
    let ReferenceValue_OT31_Value = parseFloat(TaxValue_OT31.replace(/,/g, ''));
    let Total_Reference_Value = parseFloat(TotalTaxValue.replace(/,/g, ''));
    const Total_Ref = ReferenceValue_NH30_Value + ReferenceValue_NH31_Value + ReferenceValue_OT30_Value + ReferenceValue_OT31_Value;
    Log.info(Total_Ref);
    if (Total_Reference_Value === Total_Ref) {
      Log.info("Total of Tax value id calculated correctly");
    } else {
      Log.info("There is a mistake in calculation of Total Tax value");
    }
  }
})

Then("Verify the total of Reference and Tax amount", async () => {
  const TotalReferenceValue = await fixture.page.textContent(PHRS_PageObjects.Tax.TotalReferenceValue);
  const TotalTaxValue = await fixture.page.textContent(PHRS_PageObjects.Tax.TotalTaxValue);
  const TotalAmount = await fixture.page.textContent(PHRS_PageObjects.Tax.TotalAmount)
  if (TotalReferenceValue && TotalTaxValue && TotalAmount) {
    let Total_Ref_Value = parseFloat(TotalReferenceValue.replace(/,/g, ''));
    let Total_Tax_Value = parseFloat(TotalTaxValue.replace(/,/g, '')); //to remove spaces and commos
    let Total_Amount_Value = parseFloat(TotalAmount.replace(/,/g, ''));
    let Total = Total_Ref_Value + Total_Tax_Value;
    if (Total == Total_Amount_Value) {
      Log.info("Total Amount is calculated Correctly");

    } else {
      Log.info("Total Amount is calculated Incorrectly");

    }

  }
})

Then('Click on Save and Next button in Tax Section', async () => {

  await fixture.page.click(PHRS_PageObjects.Tax.Save)
});

Then("Verify weather Description autocomplete box is editable in Asset details", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.AssetDetails.Description)).toBeEditable()
  } catch (error) {
    Log.info(error);
  }
})

Then("Verify weather Type autocomplete box is editable in Asset details", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.AssetDetails.Type)).toBeEditable()
  } catch (error) {
    Log.info(error);
  }
})
Then("Verify weather Capacity autocomplete box is editable in Asset details", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.AssetDetails.Capacity)).toBeEditable()
  } catch (error) {
    Log.info(error);
  }
})

Then("Verify weather Make autocomplete box is editable in Asset details", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.AssetDetails.Make)).toBeEditable()
  } catch (error) {
    Log.info("Make input is not editable");
  }
})

Then("Verify weather model autocomplete box is editable in Asset details", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.AssetDetails.Model)).toBeEditable()
  } catch (error) {
    Log.info("Model input is not editable");
  }
})

Then('Click on Add button in Asset details', async () => {
  await fixture.page.click(PHRS_PageObjects.AssetDetails.Add)
});

Then("Check if save and next button is enabled after adding required number of assets", async () => {
  try {
    await expect(fixture.page.locator(PHRS_PageObjects.AssetDetails.Add)).toBeEnabled();
  } catch (error) {
    Log.info("Save and Next button is enabled after adding all the assests");
  }
})

Then('Click on Save and Next button in Asset details', async () => {

  await fixture.page.click(PHRS_PageObjects.AssetDetails.Create)
});

Then('Click on Create Work Order Request in SOP Validations', async () => {
  await fixture.page.click(PHRS_PageObjects.WoRequest.Confirm)
  
});
Then('Capture the Asset Code generated from the popup appeared', async () => {
  await fixture.page.waitForTimeout(1000);
  const assetCode = await fixture.page.textContent(PHRS_PageObjects.WoRequest.AssetCode);
  if(assetCode){
    AssetCode = assetCode;
    // export AssetCode;
  }
  Log.info("Asset Code generated : "+assetCode)
});


Then('fill the assect field to get needed assect',async ()=>{
  await fixture.page.fill("(//kendo-grid-filter-wrapper-cell)[3]/input", AssetCode);
  await fixture.page.waitForTimeout(2000)
  // await fixture.page.click(RN_PageObjects.Receipt.Go)
})

Then('Select an Asset code from the list of asset codes available in the grid', async() => {
  await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.Filter)
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(MeasurementCreationPageObjects.MeasurementEntry.AssetCodeInput,AssetCode)
  await fixture.page.waitForTimeout(2000);
  await fixture.page.click(MeasurementCreationPageObjects.MeaserementCreation.Assetcheckbox)
  if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.Assetcheckbox).isChecked()){ // to verify check box is checked or not
    Log.info("Checkbox checked successfully");
  }else{
    Log.info("Checkbox is not checked");
  }
})

Then('Verify weather user able to enter Asset Code in the autocomplete box available in the top left corner of page', async() => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.fill(LogsheetPageObjects.LogsheetDayBased.AssetCode,AssetCode)
  await fixture.page.waitForTimeout(2000)
  await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
})

Then ('Click on the Approve icon to enter the approval remarks which is on the buttom of the actions heading', async () =>{
  await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Filter)
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(Measurement_Approval_PageObjects.Measurement_App.AssetCodeInput,AssetCode)
  await fixture.page.waitForTimeout(1000)
  if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Approve).isVisible()){
    Log.info('Approve Icon is visible');
  } else{
    Log.info('Approve Icon is not visible');
  }      
    await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Approve)
});

//********************************************************* */
//**************WOrkOrder Database validations********************* */


Then("Edit the WorkOrder Request by clicking in the Edit icon in the expanded menu", async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(PHRS_PageObjects.Hirerequest.ExpandList);
  await fixture.page.click(PHRS_PageObjects.Wo.EditWO);
})

Then("Verify weather Quantity given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.Hirerequest.Quantity)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSDB}' `;
    const data = await sql.executeQuery("ALM", query);
    const quantity = await data.recordset[0].HPR_Quantity;
    if (quantity == value.trim()) {
      Log.info("Quantity is same as given in the PHRS Creation Page");
    } else {
      Log.info("Quantity is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Equipment minimum age given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.Hirerequest.MinAge)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSDB}' `;
    const data = await sql.executeQuery("ALM", query);
    const EqipMinAge = await data.recordset[0].HPR_Age_Min;
    if (EqipMinAge == value.trim()) {
      Log.info("Equipment Minimum Age is same as given in the PHRS Creation Page");
    } else {
      Log.info("Equioment minimum age is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Equipment maximum age given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.Hirerequest.MaxAge)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSDB}' `;
    const data = await sql.executeQuery("ALM", query);
    const EqipMaxAge = await data.recordset[0].HPR_Age_Max;
    if (EqipMaxAge == value.trim()) {
      Log.info("Equipment Maximum age is same as given in the PHRS Creation Page");
    } else {
      Log.info("Equipment maximum age is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Make Description given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.Hirerequest.MakeDescription)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSDB}' `;
    const data = await sql.executeQuery("ALM", query);
    const MakeDescription = await data.recordset[0].HPR_Make;
    if (MakeDescription == value.trim()) {
      Log.info("Make Description is same as given in the PHRS Creation Page");
    } else {
      Log.info("Make Description is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Model Description given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.Hirerequest.ModelDescription)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSDB}' `;
    const data = await sql.executeQuery("ALM", query);
    const modelDescription = await data.recordset[0].HPR_Model;
    if (modelDescription == value.trim()) {
      Log.info("Model Description is same as given in the PHRS Creation Page");
    } else {
      Log.info("Model Description is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Reason for hiring given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.Hirerequest.ReasonforHiring)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSDB}' `;
    const data = await sql.executeQuery("ALM", query);
    const reasonforHiring = await data.recordset[0].HPR_Hiring_Reason;
    if (reasonforHiring == value.trim()) {
      Log.info("Reason for Hiring is same as given in the PHRS Creation Page");
    } else {
      Log.info("Reason for hiring is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Scope of work given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.Hirerequest.ScopeofWork)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSDB}' `;
    const data = await sql.executeQuery("ALM", query);
    const scopeofWork = await data.recordset[0].HPR_SOW;
    if (scopeofWork == value.trim()) {
      Log.info("Scope of Work is same as given in the PHRS Creation Page");
    } else {
      Log.info("Scope of Work is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Specific Requirements  given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.Hirerequest.SpecificRequirements)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSDB}' `;
    const data = await sql.executeQuery("ALM", query);
    const specificRequirements = await data.recordset[0].HPR_SOW_Specific_Rqmt;
    if (specificRequirements == value.trim()) {
      Log.info("Specific Requirements is same as given in the PHRS Creation Page");
    } else {
      Log.info("Specific Requirements is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather No of Shifts given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.Hirerequest.ShiftInput)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_D_PlantHire_WorkType where DPW_Request_Number=${PHRSDB}`;
    const data = await sql.executeQuery("ALM", query);
    const shiftInput = await data.recordset[0].HPR_Quantity;
    if (shiftInput == value.trim()) {
      Log.info("No of Shifts is same as given in the PHRS Creation Page");
    } else {
      Log.info("No of Shifts is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Shift hours given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.Hirerequest.ShiftHours)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_D_PlantHire_WorkType where DPW_Request_Number=${PHRSDB}`;
    const data = await sql.executeQuery("ALM", query);
    const shiftHours = await data.recordset[0].HPR_Quantity;
    if (shiftHours == value.trim()) {
      Log.info("Shift hours is same as given in the PHRS Creation Page");
    } else {
      Log.info("Shift hours is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Additional Operators given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.Hirerequest.Addloperators)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSDB}' `;
    const data = await sql.executeQuery("ALM", query);
    const addlOperators = await data.recordset[0].HPR_No_Of_Addl_Operator;
    if (addlOperators == value.trim()) {
      Log.info("Additional Operators is same as given in the PHRS Creation Page");
    } else {
      Log.info("Additional Operators is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Helpers given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.Hirerequest.Helpers)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where HPR_Request_Number='${PHRSDB}' `;
    const data = await sql.executeQuery("ALM", query);
    const helpers = await data.recordset[0].HPR_No_Of_Helpers;
    if (helpers == value.trim()) {
      Log.info("Helpers is same as given in the PHRS Creation Page");
    } else {
      Log.info("Helpers is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})
Then("Verify weather Vendor given in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000);
  const value = await fixture.page.inputValue(PHRS_PageObjects.DB.VendorInput)
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_D_PlantHire_ITV where DPI_Request_Number=${PHRSDB}`;
    const data = await sql.executeQuery("ALM", query);
    const vendorCode = await data.recordset[0].DPI_Vendor_Code;
    if (value.includes(vendorCode)) {
      Log.info("Vendor is same as given in the PHRS Creation Page");
    } else {
      Log.info("Vendor is not similar as given in the PHRS Creation Page");
    }
  } catch (error) {

  }
})

Then("Verify weather Hire Charges given in the PHRS Creation is matching with value in Work Order Request page", async () => {

})
Then("Verify weather Normal Hours Charges QTY in the PHRS Creation is matching with value in Work Order Request page", async () => {


})
Then("Verify weather Normal Hours Charges Amount in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000)
  const Nrmlhrs_amt = await fixture.page.textContent(PHRS_PageObjects.Wo.NormalHours_amt);
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_D_PlantHire_Commercial  where DPC_Request_Number='${PHRSDB}' and DPC_HCG_Code='HC'`;
    const data = await sql.executeQuery("ALM", query);
    const Nrml_amt = await data.recordset[0].DPC_Amount;
    if (Nrmlhrs_amt)
      if (Nrml_amt == parseFloat(Nrmlhrs_amt)) {
        Log.info("Normal Hrours Calculation is Correct");
      } else {
        Log.info("Normal Hrours Calculation is InCorrect");
      }
  } catch (error) {

  }
})
Then("Verify weather OT Hours charges QTY in the PHRS Creation is matching with value in Work Order Request page", async () => {

})
Then("Verify weather OT Hours charges Amount in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000)
  const OT_amt = await fixture.page.textContent(PHRS_PageObjects.Wo.OTHours_amt);
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_D_PlantHire_Commercial  where DPC_Request_Number='${PHRSDB}' and DPC_HCG_Code='OT'`;
    const data = await sql.executeQuery("ALM", query);
    const ot_amt = await data.recordset[0].DPC_Amount;
    if (OT_amt)
      if (ot_amt == parseFloat(OT_amt)) {
        Log.info("OT Hours Amount Calculation is Correct");
      } else {
        Log.info("OT Hours Amount Calculation is InCorrect");
      }
  } catch (error) {

  }
})
Then("Verify weather Operator Amount in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000)
  const operator_amt = await fixture.page.textContent(PHRS_PageObjects.Wo.Operator_amt);
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_D_PlantHire_Commercial  where DPC_Request_Number='${PHRSDB}' and DPC_HCG_Code='OPR'`;
    const data = await sql.executeQuery("ALM", query);
    const oper_amt = await data.recordset[0].DPC_Amount;
    if (operator_amt)
      if (oper_amt == parseFloat(operator_amt)) {
        Log.info("Operator Amount Calculation is Correct");
      } else {
        Log.info("Operator Amount Calculation is InCorrect");
      }
  } catch (error) {

  }
})
Then("Verify weather Additional Operator in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000)
  const addloperator_amt = await fixture.page.textContent(PHRS_PageObjects.Wo.AddlOperator_amt);
  try {
    await fixture.page.waitForTimeout(1000)
    const query = `select * from EIP40ALM.PHS.PHR_D_PlantHire_Commercial  where DPC_Request_Number='${PHRSDB}' and DPC_HCG_Code='AOPR'`;
    const data = await sql.executeQuery("ALM", query);
    const addioperator_amt = await data.recordset[0].DPC_Amount;
    if (addloperator_amt)
      if (addioperator_amt == parseFloat(addloperator_amt)) {
        Log.info("Additional Operator Amount Calculation is Correct");
      } else {
        Log.info("Additional Operator Amount Calculation is InCorrect");
      }
  } catch (error) {

  }
})

Then("Verify weather Helper Amount in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000)
  const helper_amt = await fixture.page.textContent(PHRS_PageObjects.Wo.Helper_amt);
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_D_PlantHire_Commercial  where DPC_Request_Number='${PHRSDB}' and DPC_HCG_Code='HEL'`;
    const data = await sql.executeQuery("ALM", query);
    const help_amt = await data.recordset[0].DPC_Amount;
    if (helper_amt)
      if (help_amt == parseFloat(helper_amt)) {
        Log.info("Helper Amount Calculation is Correct");
      } else {
        Log.info("Helper Amount Calculation is InCorrect");
      }
  } catch (error) {

  }
})
Then("Verify weather Additional Helper Amount in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000)
  const addlHelper_amt = await fixture.page.textContent(PHRS_PageObjects.Wo.AddlHelper_amt);
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_D_PlantHire_Commercial  where DPC_Request_Number='${PHRSDB}' and DPC_HCG_Code='AHEL'`;
    const data = await sql.executeQuery("ALM", query);
    const addlhelp_amt = await data.recordset[0].DPC_Amount;
    if (addlHelper_amt)
      if (addlhelp_amt == parseFloat(addlHelper_amt)) {
        Log.info("Additional Helper amount Calculation is Correct");
      } else {
        Log.info("Additional Helper amount Calculation is InCorrect");
      }
  } catch (error) {

  }
})
Then("Verify weather Accomidation amount in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000)
  const accom_amt = await fixture.page.textContent(PHRS_PageObjects.Wo.NormalHours_amt);
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_D_PlantHire_Commercial  where DPC_Request_Number='${PHRSDB}' and DPC_HCG_Code='ACCOM'`;
    const data = await sql.executeQuery("ALM", query);
    const accomidation_amt = await data.recordset[0].DPC_Amount;
    if (accom_amt)
      if (accomidation_amt == parseFloat(accom_amt)) {
        Log.info("Accomidation Amount Calculation is Correct");
      } else {
        Log.info("Accomidation Amount Calculation is InCorrect");
      }
  } catch (error) {

  }
})
Then("Verify weather Mobilisation amount in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000)
  const mob_amt = await fixture.page.textContent(PHRS_PageObjects.Wo.Mob_amt);
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_D_PlantHire_Commercial  where DPC_Request_Number='${PHRSDB}' and DPC_HCG_Code='MOB'`;
    const data = await sql.executeQuery("ALM", query);
    const mobil_amt = await data.recordset[0].DPC_Amount;
    if (mob_amt)
      if (mobil_amt == parseFloat(mob_amt)) {
        Log.info("mobilisation Amount Calculation is Correct");
      } else {
        Log.info("mobilisation Amount Calculation is InCorrect");
      }
  } catch (error) {

  }
})

Then("Verify weather Demobilisation amount in the PHRS Creation is matching with value in Work Order Request page", async () => {
  await fixture.page.waitForTimeout(1000)
  const deMob_amt = await fixture.page.textContent(PHRS_PageObjects.Wo.DeMob_amt);
  try {
    await fixture.page.waitForTimeout(2000)
    const query = `select * from EIP40ALM.PHS.PHR_D_PlantHire_Commercial  where DPC_Request_Number='${PHRSDB}' and DPC_HCG_Code='DEMOB'`;
    const data = await sql.executeQuery("ALM", query);
    const deMobil_amt = await data.recordset[0].DPC_Amount;
    if (deMob_amt)
      if (deMobil_amt == parseFloat(deMob_amt)) {
        Log.info("Demobilisation Amount Calculation is Correct");
      } else {
        Log.info("Demobilisation Amount Calculation is InCorrect");
      }
  } catch (error) {

  }
})

Given('Check whether the user able Navigate to TCD landing Page',{timeout:60000}, async function () {
  while (true) {
    // await fixture.page.waitForTimeout(5000);

    try {
      Log.info('Waiting for Auto TCD creation..........................')
      const query = "select top 1* from EIP40SCM.WOM.REQ_L_WO_request inner join EIP40ALM.PHS.PHR_H_WRA_Request on LWORQ_WOT_Reference_Number = HWR_Asset_Code  order by LWORQ_Inserted_On desc";
      const data = await sql.executeQuery("All", query);
      TCD_Number = await data.recordset[0].LWORQ_TCD_Number;
      Log.info(`TCD number generated is ${TCD_Number}`)
      if (TCD_Number != null) {
        Log.info(TCD_Number);
        break;
      }
    } catch (error) {
      Log.info('Error in getting TCD Number')
    }

    await fixture.page.waitForTimeout(10000);
    // await fixture.page.click(PHRS_PageObjects.LoginPage.Otheruser);
  }

  while (true) {

    try {
      Log.info('Waiting for Workflow Trigger..................................');
      const query = `SELECT top 1* FROM EIP40AWM.WFM.WFM_T_Document_Flow INNER JOIN EIP40AWM.acs.ACS_M_Users ON (MUSER_USER_ID=TDF_RECEIVER_UID) WHERE TDF_Document_Reference_No = '${TCD_Number}' and TDF_ISActive = 'y'`;
      const data = await sql.executeQuery("All", query);
      Username2 = await data.recordset[0].MUSER_Login_Name;
      if (Username2 != null) {
        Log.info(Username2);
        break;
      }

    } catch (error) {

    }

    // await fixture.page.waitForTimeout(5000);
    // await fixture.page.click(PHRS_PageObjects.LoginPage.Otheruser);
  }

  await fixture.page.click(PHRS_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(PHRS_PageObjects.LoginPage.Username, Username2)
  await fixture.page.fill(PHRS_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(PHRS_PageObjects.LoginPage.Login);
  Log.info(" User successfully logged in as " + Username2)
  await fixture.page.waitForTimeout(10000);

});

Then('filter the currently created TCD', async function () {

  await fixture.page.click(PHRS_PageObjects.Wo.Filter);
  await fixture.page.fill(PHRS_PageObjects.Wo.Search_Document, TCD_Number);
  await fixture.page.waitForTimeout(10000);
});

Then('Click on the Document number', async function () {

  const element = await fixture.page.$(PHRS_PageObjects.Wo.Filtered_Document);
  if (element) {
    await element.hover();
    Log.info("Mouse over the element successfully.");
  } else {
    console.error("Element not found.");
  }
  await fixture.page.click(PHRS_PageObjects.LoginPage.Document_Approve);
  await fixture.page.click('(//app-alertbox//child::input[@id="btnAdd"])[3]');

  await fixture.page.waitForTimeout(10000);
  await fixture.page.click(PHRS_PageObjects.LoginPage.Signout);
  await fixture.page.click(PHRS_PageObjects.LoginPage.Signout_button);

});


Then('Approve the document', async function () {
  // test.setTimeout(60000*5);

  while (true) {
    const query = `SELECT top 1* FROM EIP40AWM.WFM.WFM_T_Document_Flow INNER JOIN EIP40AWM.acs.ACS_M_Users ON (MUSER_USER_ID=TDF_RECEIVER_UID) WHERE TDF_Document_Reference_No = '${TCD_Number}' and TDF_ISActive = 'y'`;
    const data = await sql.executeQuery("All", query);
    try {
      Username2 = await data.recordset[0].MUSER_Login_Name;
    } catch (error) {
      break;
    }

    await fixture.page.waitForTimeout(10000);
    await fixture.page.click(PHRS_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(PHRS_PageObjects.LoginPage.Username, Username2)
    await fixture.page.fill(PHRS_PageObjects.LoginPage.Password, testdata.Password)
    await fixture.page.click(PHRS_PageObjects.LoginPage.Login);
    Log.info(" User successfully logged in as " + Username2)
    await fixture.page.waitForTimeout(10000);
    await fixture.page.click(PHRS_PageObjects.Wo.Filter);
    await fixture.page.fill(PHRS_PageObjects.Wo.Search_Document, TCD_Number);
    await fixture.page.waitForTimeout(10000);
    const element = await fixture.page.$(PHRS_PageObjects.Wo.Filtered_Document);
    if (element) {
      await element.hover();
      Log.info("Mouse over the element successfully.");
    } else {
      console.error("Element not found.");
    }
    await fixture.page.click(PHRS_PageObjects.LoginPage.Document_Approve);
    await fixture.page.click('(//div[@class="alertmessage success-alert"]//child::input[@value="OK"])[1]');
    await fixture.page.click(PHRS_PageObjects.LoginPage.Signout);
    await fixture.page.click(PHRS_PageObjects.LoginPage.Signout_button);
    Username2 = "";
  }

  while (true) {

    try {
      Log.info('Waiting for Auto WO creation.......................')
      const query = "select top 1* from EIP40SCM.WOM.REQ_L_WO_request inner join EIP40ALM.PHS.PHR_H_WRA_Request on LWORQ_WOT_Reference_Number = HWR_Asset_Code  order by LWORQ_Inserted_On desc";
      const data = await sql.executeQuery("All", query);
      WO_Number = await data.recordset[0].LWORQ_WO_Number;
      if (WO_Number != null) {
        Log.info(WO_Number);
        break;
      }
    } catch (error) {

    }

    await fixture.page.waitForTimeout(10000);
  }

});
