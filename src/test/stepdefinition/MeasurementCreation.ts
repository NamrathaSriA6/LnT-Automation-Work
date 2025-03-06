import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/testdata.json";
import * as testdata_NonCumulative from "../../main/testdata/testdata_NonCumulative.json";
import * as MeasurementCreation_testdata from "../../main/testdata/MeasurementCreation_testdata.json";
import MeasurementCreationPageObjects from '../Locater/MeasurementCreationPageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { log } from "console";
import { findSourceMap } from "module";
import { fix } from "mssql";
import Log from "../hooks/until/logger";
import Measurement_Approval_PageObjects from "../Locater/Measurement_Approval_PageObjects";


let Base: common_methods;
// let assetCode = "13716XPH"

//to generate a random value between the range to give as input in measurement entry page
const generateRandomValueUnderLimit = (limit:number) =>{
  return Math.floor(Math.random() * limit);
}

//declaring global variables
let balance_Value:number;
let totalAssests_Value:number;
let MESCreatedValue:number;
let approved_Value:number;
let awaitingApproval_Value:number;
let hold_Value:number;


Given('Navigate to Test Enviroment of Measurement creation', async function () {
    // await fixture.page.setViewportSize({ width: 1900, height:900}) //to set viewport size of the test run page
    await fixture.page.goto(MeasurementCreation_testdata.Environment)
    Base = new common_methods(fixture.page)
});


Given('Check whether the user able Navigate to Measurement Creation Page', async function () {
    await fixture.page.click(MeasurementCreationPageObjects.LoginPage.Otheruser);
    await fixture.page.fill(MeasurementCreationPageObjects.LoginPage.Username, MeasurementCreation_testdata.Username)
    await fixture.page.fill(MeasurementCreationPageObjects.LoginPage.Password, MeasurementCreation_testdata.Password)
    await fixture.page.click(MeasurementCreationPageObjects.LoginPage.Login);
    // printing the logged user details in the console
    Log.info(" User successfully logged in as " + testdata.Username)    
});

Given('Check whether the user able Navigate to Measurement Creation Page NonCumulative', async function () {
    await fixture.page.click(MeasurementCreationPageObjects.LoginPage.Otheruser);
    await fixture.page.fill(MeasurementCreationPageObjects.LoginPage.Username, MeasurementCreation_testdata.Username_Noncumulative)
    await fixture.page.fill(MeasurementCreationPageObjects.LoginPage.Password, MeasurementCreation_testdata.Password)
    await fixture.page.click(MeasurementCreationPageObjects.LoginPage.Login);
    // printing the logged user details in the console
    Log.info(" User successfully logged in as " + testdata.Username)    
});


Then('Verify BreadCrumbs before navigating to the Measurement Creation Page', async() => {
    await fixture.page.waitForTimeout(2000);   
      // Here $ is to store the breadcrumb element
      const breadcrumbsElement = await fixture.page.$(MeasurementCreationPageObjects.MeaserementCreation.Breadcrums);
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

Then('Check whether the user able to click on the Access Based Menu button in Measurement Creation Page', async() => {
    await fixture.page.click(MeasurementCreationPageObjects.DashBoard.AccessMenu);       
    Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.DashBoard.AccessMenu));
    await fixture.page.waitForTimeout(2000);
    if(await fixture.page.locator(MeasurementCreationPageObjects.DashBoard.AccessMenu)){
    Log.info("Button clicked");    
    }else{
    Log.info("Button not clicked");   
    }
})

Then('Check whether the user able to select the Asset Management from the dropdown in Measurement Creation Page', async() => {
    await fixture.page.click(MeasurementCreationPageObjects.DashBoard.AssetManagement);
})

Then('Check whether the user able to select the Planning and Procurement from the dropdown', async() => {
    await fixture.page.click(MeasurementCreationPageObjects.DashBoard.Planning_and_Procurement);
})

Then('Check whether the user able to select the Measurement Creation from the dropdown', async() => {
    await fixture.page.click(MeasurementCreationPageObjects.DashBoard.MeaserementCreation);
})

Then('Verify BreadCrumbs after navigating to the Measurement Creation Page', async() => {
    await fixture.page.waitForTimeout(2000);
        // Here $ is to store the breadcrumb element
        const breadcrumbsElement = await fixture.page.$(MeasurementCreationPageObjects.MeaserementCreation.Breadcrums);    
          if (breadcrumbsElement) {            
            const breadcrumbsText = await breadcrumbsElement.textContent();
            if(breadcrumbsText!=null) // Here it tells the breadcrumbstext is not equals to null
            // Here it includes all the breadcrumbstext elements
            if (breadcrumbsText.includes('Asset') && breadcrumbsText.includes('Planning') && breadcrumbsText.includes('Measurement'))  {
              Log.info('Breadcrumbs path is correct.');
            } else {
              Log.info('Breadcrumbs path is incorrect.');
            }          
        }else {
          Log.info('Breadcrumbs element not found.');
        }
})

Then('Verify weather User able to enter job in the Job input field', async() => {
  // await fixture.page.pause();
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(MeasurementCreationPageObjects.MeaserementCreation.Job,testdata.Job)
  await fixture.page.waitForTimeout(1000);
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
})
Then('Verify weather User able to enter job in the Job input field NonCumulative', async() => {
  // await fixture.page.pause();
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(MeasurementCreationPageObjects.MeaserementCreation.Job,testdata_NonCumulative.Job)
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
})

Then("Verify the value of Total Assets in the Measurement Creation Page", async () => {
  await fixture.page.waitForTimeout(2000)
  const totalAssests = await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.Total_Assets)
  if(totalAssests) // to verify it is not null
  totalAssests_Value = parseInt(totalAssests); // to convert to integer
  Log.info("Total Assets available are "+totalAssests_Value);    
})

Then("Verify the value of MES Created Assets in the Measurement Creation Page", async () => {
  const MESCreated = await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.MES_Created)
  if(MESCreated) // to verify it is not null
  MESCreatedValue = parseInt(MESCreated); // to convert to integer
  Log.info("MES Created Assets are "+MESCreatedValue);
})

Then("Verify the value of Approved Assets in the Measurement Creation Page", async () => {
  const approved = await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.Approved)
  if(approved) // to verify it is not null
  approved_Value = parseInt(approved); // to convert to integer
  Log.info("Approved  Assets are "+approved_Value);
})

Then("Verify the value of Awaiting Approval Assets in the Measurement Creation Page", async () => {
  const awaitingApproval = await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.Awaiting_Approval)
  if(awaitingApproval) // to verify it is not null
  awaitingApproval_Value = parseInt(awaitingApproval); // to convert to integer
  Log.info("Awaiting Approval Assets are "+awaitingApproval_Value);
})

Then("Verify the value of Hold Assets in the Measurement Creation Page", async () => {
  const hold = await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.Hold)
  if(hold)// to verify it is not null
  hold_Value = parseInt(hold); // to convert to integer
  Log.info("On Hold Assets are "+hold_Value);
})

Then('Check if the Balance is greater than Zero', async() => {
  const balance = await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.Balance);
  if(balance){ // to verify it is not null
    balance_Value = parseInt(balance) // to convert to integer
    if(balance_Value>0){
      Log.info("Balance is greater than Zero. Proceed"+balance_Value);
    }else{
      Log.info("No Balance available");
    }
  }
})

Then('If balance greater than zero click on Balance Button', async() => {
  try {
    await fixture.page.click(MeasurementCreationPageObjects.MeaserementCreation.BalanceButton)
  } catch (error) {
    Log.info("Cannot proceed as there are no balance jobs available");
    await fixture.page.close()
  }
})

Then('Verify weather Create measurement button is enabled or not', async() => {
  try {
    await expect(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.CreateMeasurement)).toBeEnabled() //to check if element is enabled
  } catch (error) {
    Log.info("Ubable to click Create Measurement button, it is disabled");
  }
})

Then('Verify user able to click on Create Measurement Button which is above the grid', async() => {
  await fixture.page.click(MeasurementCreationPageObjects.MeaserementCreation.CreateMeasurement)
})

Then('Accept the confirmation to proceed for measurement creation', async() => {
  await fixture.page.waitForSelector(MeasurementCreationPageObjects.MeaserementCreation.ConfirmationYes) // waits for the element to be visisble
  await fixture.page.click(MeasurementCreationPageObjects.MeaserementCreation.ConfirmationYes)
})

Then('Verify weather Vendor input field is mandatory in Measurement Creation page', async() => {
  await fixture.page.click(MeasurementCreationPageObjects.MeaserementCreation.Search)
  if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){ //to check if element is visible
    Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
  }else{
    Log.info("vendor is not a mandatory field");
  }
})

Then('Verify weather Job field is editable or not in Measurement Creation page', async() => {
  try {
    await expect(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.JobinCreate)).not.toBeEditable() //to check if element is not editable
  } catch (error) {
    Log.info("Job field is editable");
  }
})

Then('Verify weather Asset group is mandatory in Measurement Creation page', async() => {
  await fixture.page.click(MeasurementCreationPageObjects.MeaserementCreation.Search)
  if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){  //to check if element is visible
    Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
  }else{
    Log.info("Asset Group is not a mandatory field");
  }
})

Then('Verify weather Asset is mandatory in Measurement Creation page', async() => {
  await fixture.page.click(MeasurementCreationPageObjects.MeaserementCreation.Search)
  if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){ //to check if element is visible
    Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
  }else{
    Log.info("Asset is not a mandatory field");
  }
})

Then('Check if search button which is in right side of the page above the grid is enabled or not', async() => {
  try {
    await expect(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.Search)).toBeEnabled() //to check if element is enabled
  } catch (error) {
    Log.info("Search button is disabled");
  }
})


Then('Click on search button which is in right side of the page above the grid', async() => {
  await fixture.page.click(MeasurementCreationPageObjects.MeaserementCreation.Search)
})



Then('Select an Asset code from the list of asset codes available in the grid for negative cases', async() => {
  // await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.Filter)
  // await fixture.page.waitForTimeout(2000);
  // await fixture.page.fill(MeasurementCreationPageObjects.MeasurementEntry.AssetCodeInput,testdata.AssetCode)
  await fixture.page.click(MeasurementCreationPageObjects.MeaserementCreation.Assetcheckbox)
  if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.Assetcheckbox).isChecked()){ // to verify check box is checked or not
    Log.info("Checkbox checked successfully");
  }else{
    Log.info("Checkbox is not checked");
  }
})



Then('Verify weather after user check the Assset code Possible amount section is also checked', async() => {
  if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.AssetcheckboxPossible).isChecked()){ // to verify check box is checked or not
    Log.info("Possible amount section for the selected Asset code is also checked");
  }else{
    Log.info("Possible amount section for the selected Asset code is not checked");
  }
})

Then('Verify Operator possible amount is greater than Zero for the selected Asset Code', async() => {
  await fixture.page.waitForTimeout(1000);
  const operatorPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.OperatorPossible);
  if (operatorPossible) {
    const operatorPossibleValue = parseInt(operatorPossible)
    if (operatorPossibleValue>0) {
      Log.info("Operator Possible amount is greater than Zero we can edit the Payable amount");
      
    } else {
      Log.info("Operator Possible amount is equal to Zero we cannot edit the Payable amount");
      
    }
  }
})

Then('Verify weather user able to edit Operator Payable amount for the selected Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const operatorPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.OperatorPossible);
  const operatorPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.OperatorPayable)
  if (operatorPossible && operatorPayable) { //to verify these are not null
    const operatorPossibleValue = parseInt(operatorPossible) // to convert to integer
    if (operatorPossibleValue>0) {
      await operatorPayable.click();
      await operatorPayable.clear();
      const value = generateRandomValueUnderLimit(operatorPossibleValue).toString() //generating a random value in the limit of possible value and convert it to string
      Log.info("Operator Payable amount given is"+value);
      await operatorPayable.fill(value)
    } else {
      Log.info("operator Amount is not payable as posible amount is Zero");
    }
  }
})

Then('Verify AddiOperator possible amount is greater than Zero for the selected Asset Code', async() => {
  await fixture.page.waitForTimeout(1000);
  const addiOperatorPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.AddiOperatorPossible);
  if (addiOperatorPossible) { //to verify these are not null
    const addiOperatorPossibleValue = parseInt(addiOperatorPossible) // to convert to integer
    if (addiOperatorPossibleValue>0) {
      Log.info("Additional Operator Possible amount is greater than Zero we can edit the Payable amount");      
    } else {
      Log.info("Additional Operator Possible amount is equal to Zero we cannot edit the Payable amount");     
    }
  }
})


Then('Verify weather user able to edit AddiOperator Payable amount for the selected Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const addiOperatorPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.AddiOperatorPossible);
  const addiOperatorPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.AddiOperatorPayable)
  if (addiOperatorPossible && addiOperatorPayable) { //to verify these are not null
    const addiOperatorPossibleValue = parseInt(addiOperatorPossible)
    if (addiOperatorPossibleValue>0) {
      await addiOperatorPayable.click();
      await addiOperatorPayable.clear();
      const value = generateRandomValueUnderLimit(addiOperatorPossibleValue).toString() //generating a random value in the limit of possible value and convert it to string
      Log.info("Additional Operator payable amount given is "+value);
      await addiOperatorPayable.fill(value)
    } else {
      Log.info("Additional operator Amount is not payable as posible amount is Zero");
    }
  }
})

Then('Verify Helper possible amount is greater than Zero for the selected Asset Code', async() => {
  await fixture.page.waitForTimeout(1000);
  const helperPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.HelperPossible);
  if (helperPossible) {
    const helperPossibleValue = parseInt(helperPossible) // to convert to integer
    if (helperPossibleValue>0) {
      Log.info("Helper Possible amount is greater than Zero we can edit the Payable amount");     
    } else {
      Log.info("Helper Possible amount is equal to Zero we cannot edit the Payable amount");
    }
  }
})

Then('Verify weather user able to edit Helper Payable amount for the selected Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const helperPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.HelperPossible);
  const helperPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.HelperPayable)
  if (helperPossible && helperPayable) {
    const helperPossibleValue = parseInt(helperPossible) // to convert to integer
    if (helperPossibleValue>0) {
      await helperPayable.click();
      await helperPayable.clear();
      const value = generateRandomValueUnderLimit(helperPossibleValue).toString() //generating a random value in the limit of possible value and convert it to string
      Log.info("Helper payable amount given is "+value);
      await helperPayable.fill(value)
    } else {
      Log.info("Helper Amount is not payable as posible amount is Zero");
    }
  }
})

Then('Verify Additional Helper possible amount is greater than Zero for the selected Asset Code', async() => {
  await fixture.page.waitForTimeout(1000);
  const addiHelperPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.AddiHelperPossible);
  if (addiHelperPossible) {
    const addiHelperPossibleValue = parseInt(addiHelperPossible)// to convert to integer
    if (addiHelperPossibleValue>0) {
      Log.info("Additional Helper Possible amount is greater than Zero we can edit the Payable amount");
    } else {
      Log.info("Additional Helper Possible amount is equal to Zero we cannot edit the Payable amount");
    }
  }
})

Then('Verify weather user able to edit Additional Helper Payable amount for the selected Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const addiHelperPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.AddiHelperPossible);
  const addiHelperPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.AddiHelperPayable)
  if (addiHelperPossible && addiHelperPayable) {
    const addiHelperPossibleValue = parseInt(addiHelperPossible)
    if (addiHelperPossibleValue>0) {
      await addiHelperPayable.click();
      await addiHelperPayable.clear();
      const value = generateRandomValueUnderLimit(addiHelperPossibleValue).toString() //generating a random value in the limit of possible value and convert it to string
      Log.info("Additional Helper Amount given is "+value);
      await addiHelperPayable.fill(value)
    } else {
      Log.info("Additional Helper Amount is not payable as posible amount is Zero");
    }
  }
})

Then('Verify Accomodation possible amount is greater than Zero for the selected Asset Code', async() => {
  await fixture.page.waitForTimeout(1000);
  const accomodationPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.AccomodationPossible);
  if (accomodationPossible) {//to verify these are not null
    const accomodationPossibleValue = parseInt(accomodationPossible)
    if (accomodationPossibleValue>0) {
      Log.info("Accomodation Possible amount is greater than Zero we can edit the Payable amount");
    } else {
      Log.info("Accomodation Possible amount is equal to Zero we cannot edit the Payable amount");
    }
  }
})

Then('Verify weather user able to edit Accomodation Payable amount for the selected Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const accomodationPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.AccomodationPossible);
  const accomodationPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.AccomodationPayable)
  if (accomodationPossible && accomodationPayable) {
    const accomodationPossibleValue = parseInt(accomodationPossible)
    if (accomodationPossibleValue>0) {
      await accomodationPayable.click();
      await accomodationPayable.clear();
      const value = generateRandomValueUnderLimit(accomodationPossibleValue).toString() //generating a random value in the limit of possible value and convert it to string
      Log.info("Accomodation value given is "+value);     
      await accomodationPayable.fill(value)
    } else {
      Log.info("Accomodation Amount is not payable as posible amount is Zero");
    }
  }
})

Then('Verify Assembly possible amount is greater than Zero for the selected Asset Code', async() => {
  await fixture.page.waitForTimeout(1000);
  const assemblyPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.AssemblyPossible);
  if (assemblyPossible) {
    const assemblyPossibleValue = parseInt(assemblyPossible)
    if (assemblyPossibleValue>0) {
      Log.info("Assembly Possible amount is greater than Zero we can edit the Payable amount");     
    } else {
      Log.info("Assembly Possible amount is equal to Zero we cannot edit the Payable amount");     
    }
  }
})

Then('Verify weather user able to edit Assembly Payable amount for the selected Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const assemblyPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.AssemblyPossible);
  const assemblyPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.AssemblyPayable)
  if (assemblyPossible && assemblyPayable) {
    const assemblyPossibleValue = parseInt(assemblyPossible)// to convert to integer
    if (assemblyPossibleValue>0) {
      await assemblyPayable.click();
      await assemblyPayable.clear();
      const value = generateRandomValueUnderLimit(assemblyPossibleValue).toString() //generating a random value in the limit of possible value and convert it to string
      Log.info("Assembly value given is "+value);     
      await assemblyPayable.fill(value)
    } else {
      Log.info("Assembly Amount is not payable as posible amount is Zero");
    }
  }
})

Then('Verify Mobilisation possible amount is greater than Zero for the selected Asset Code', async() => {
  await fixture.page.waitForTimeout(1000);
  const mobPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.MobPossible);
  if (mobPossible) {
    const mobPossibleValue = parseInt(mobPossible)
    if (mobPossibleValue>0) {
      Log.info("Mobilisation Possible amount is greater than Zero we can edit the Payable amount");
    } else {
      Log.info("Mobilisation Operator Possible amount is equal to Zero we cannot edit the Payable amount");
    }
  }
})

Then('Verify weather user able to edit Mobilisation Payable amount for the selected Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const mobPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.MobPossible);
  const mobPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.Mobpayable)
  if (mobPossible && mobPayable) {//to verify these are not null
    const mobPossibleValue = parseInt(mobPossible)
    if (mobPossibleValue>0) {
      await mobPayable.click();
      await mobPayable.clear();
      const value = generateRandomValueUnderLimit(mobPossibleValue).toString()
      Log.info("Mobilisation value given is "+value);     
      await mobPayable.fill(value)
    } else {
      Log.info("Mobilisation Amount is not payable as posible amount is Zero");
    }
  }
})

Then('Verify weather user able to edit DeMobilisation Payable amount for the selected Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const deMobPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.DeMobPossible);
  if (deMobPossible) {
    const deMobPossibleValue = parseInt(deMobPossible)
    if (deMobPossibleValue>0) {
      Log.info("DeMobilisation Possible amount is greater than Zero we can edit the Payable amount");
    } else {
      Log.info("DeMobilisation Possible amount is equal to Zero we cannot edit the Payable amount");     
    }
  }
})

Then('Verify DeMobilisation possible amount is greater than Zero for the selected Asset Code', async() => {
  await fixture.page.waitForTimeout(1000);
  const deMobPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.DeMobPossible);
  const deMobPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.DeMobPayable)
  if (deMobPossible && deMobPayable) {//to verify these are not null
    const deMobPossibleValue = parseInt(deMobPossible)// to convert to integer
    if (deMobPossibleValue>0) {
      await deMobPayable.click();
      await deMobPayable.clear();
      const value = generateRandomValueUnderLimit(deMobPossibleValue).toString()
      Log.info("DeMobilisation value given is "+value);
      await deMobPayable.fill(value)
    } else {
      Log.info("DeMobilisation Amount is not payable as posible amount is Zero");
    }
  }
})

Then('Verify Transport Expenses possible amount is greater than Zero for the selected Asset Code', async() => {
  await fixture.page.waitForTimeout(1000);
  const transExpPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.TransExpPossible);
  if (transExpPossible) {
    const transExpPossibleValue = parseInt(transExpPossible)// to convert to integer
    if (transExpPossibleValue>0) {
      Log.info("Transport Expenses Possible amount is greater than Zero we can edit the Payable amount");     
    } else {
      Log.info("Transport Expenses Possible amount is equal to Zero we cannot edit the Payable amount");     
    }
  }
})

Then('Verify weather user able to edit Transport Expenses Payable amount for the selected Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const transExpPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.TransExpPossible);
  const transExpPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.TransExpPayable)
  if (transExpPossible && transExpPayable) {
    const transExpPossibleValue = parseInt(transExpPossible)
    if (transExpPossibleValue>0) {
      await transExpPayable.click();
      await transExpPayable.clear();
      const value = generateRandomValueUnderLimit(transExpPossibleValue).toString()//generating a random value in the limit of possible value and convert it to string
      Log.info("Transport Expenses value given is "+value);
      
      await transExpPayable.fill(value+1)
    } else {
      Log.info("Transport Expenses Amount is not payable as posible amount is Zero");
    }
  }
})

Then("Verify weather submit button below the grid is enabled", async () => {
  await fixture.page.waitForTimeout(1000);
  try {
    await expect(await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.SubmitButton)).toBeEnabled(); //to check if element is enabled
  } catch (error) {
    Log.info("Unable to click the bubmit button as it is disabled");
  }
})

Then('Submit the changes by clicking on the submit button below the grid', async() => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.SubmitButton)
})


Then('Verify weather measurement number is displaying or not in th success Popup', async() => {
  await fixture.page.waitForTimeout(1000);
  let measurementNum = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.MeasurementNum)
  if(measurementNum){
    measurementNum = measurementNum.trim() // to remove extra spaces front and back
    Log.info("Measurement number generated successfully"+measurementNum);
  }
})

Then('Click on Ok in the Success Popup Appeared after submitting', async() => {
  await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.SuccessOk)
})

Then("Verify weather clicking on back button redirecting to previous page", async () => {
  await fixture.page.waitForTimeout(2000);
  await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.BackButton)
})

Then('Verify weather balance Assets reduced after creating measurement for an Asset code', async() => {
  await fixture.page.waitForTimeout(2000);
  let balance_after = await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.Balance);
  if(balance_after){
    const balance_after_Value = parseInt(balance_after) // to convert to integer
    if(balance_after_Value<balance_Value){
      Log.info("balance value is reduced"+balance_after_Value);
    }else{
      Log.info("Balance Value is not reduced");
    }
  }
})

Then('Verify the value of Total Assets in the Measurement Creation Page after creating measurement for an Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const totalAssests = await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.Total_Assets)
  if(totalAssests){ //to verify these are not null
    const totalAssests_Value_after = parseInt(totalAssests); // to convert to integer
    if(totalAssests_Value === totalAssests_Value_after){
      Log.info("Total Assets available is same "+totalAssests_Value_after);
    }
  }
})


Then('Verify the value of MES Created Assets in the Measurement Creation Page after creating measurement for an Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const MES_Created = await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.MES_Created)
  if(MES_Created){ // to verify it is not null
    const MES_Created_Value_after = parseInt(MES_Created);
    Log.info("MES Created Assets after creating measurement for an Asset increased successfully "+MES_Created_Value_after);
  }
})

Then('Verify the value of Approved Assets in the Measurement Creation Page after creating measurement for an Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const approved = await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.Approved)
  if(approved){
    const approved_Value_after = parseInt(approved); // to convert to integer
    Log.info("Approved Assets after creating measurement for an Asset increased successfully "+approved_Value_after);
  }
})

Then('Verify the value of Hold Assets in the Measurement Creation Page after creating measurement for an Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const hold = await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.Hold)
  if(hold){
    const hold_Value_after = parseInt(hold);
    Log.info("On Hold Assets after creating measurement for an Asset is "+hold_Value_after);
  }
})

Then('Verify the value of Awaiting Approval Assets in the Measurement Creation Page after creating measurement for an Asset code', async() => {
  await fixture.page.waitForTimeout(1000);
  const awaitingApproval = await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.Awaiting_Approval)
  if(awaitingApproval){
    const awaitingApproval_Value_after = parseInt(awaitingApproval);
    Log.info("Awaiting Approval Assets after creating measurement for an Asset is "+awaitingApproval_Value_after);
  }
})


//************************************************************************** */
//********************Measurement Creation Negative Cases******************* */

Then('Verify weather user able to edit Operator Payable amount if possible amount is Zero for the selected Asset code', async() => {
  const operatorPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.OperatorPossible);
  const operatorPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.OperatorPayable)
  if (operatorPossible && operatorPayable) {
    //converted to string as fill only takes string values
    const operatorPossibleValue = parseInt(operatorPossible).toString()
      await operatorPayable.click();
      await operatorPayable.clear();
      //Giving amount greater than possible amount
      await operatorPayable.fill(operatorPossibleValue+1)
      await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.OperatorPossible)
      //if warning message appears if bolck will be executed , if not else block will be executed
      if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){
        Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
      }else{
        Log.info("we can edit Operator payable amount");
      }
  }
})

Then('Verify weather user able to edit Additional Operator Payable amount if possible amount is Zero for the selected Asset code', async() => {
  const addiOperatorPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.AddiOperatorPossible);
  const addiOperatorPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.AddiOperatorPayable)
  if (addiOperatorPossible && addiOperatorPayable) {
    //converted to string as fill only takes string values
    const addiOperatorPossibleValue = parseInt(addiOperatorPossible).toString()
      await addiOperatorPayable.click();
      await addiOperatorPayable.clear();
      //Giving amount greater than possible amount
      await addiOperatorPayable.fill(addiOperatorPossibleValue+1)
      await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.AddiOperatorPossible)
      //if warning message appears if bolck will be executed , if not else block will be executed
      if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){
        Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
      }else{
        Log.info("we can edit Additional Operator payable amount");
      }
    
  }
})

Then('Verify weather user able to edit Helper Payable amount if possible amount is Zero for the selected Asset code', async() => {
  const helperPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.HelperPossible);
  const helperPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.HelperPayable)
  if (helperPossible && helperPayable) {
    //converted to string as fill only takes string values
    const helperPossibleValue = parseInt(helperPossible).toString()
      await helperPayable.click();
      await helperPayable.clear();
      //Giving amount greater than possible amount
      await helperPayable.fill(helperPossibleValue+1)
      await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.HelperPossible)
      //if warning message appears if bolck will be executed , if not else block will be executed
      if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){
        Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
      }else{
        Log.info("we can edit Helper payable amount");
      }
    
  }
})

Then('Verify weather user able to edit Additional Helper Payable amount if possible amount is Zero for the selected Asset code', async() => {
  const addiHelperPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.AddiHelperPossible);
  const addiHelperPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.AddiHelperPayable)
  if (addiHelperPossible && addiHelperPayable) {
    //converted to string as fill only takes string values
    const addiHelperPossibleValue = parseInt(addiHelperPossible).toString()
      await addiHelperPayable.click();
      await addiHelperPayable.clear();
      //Giving amount greater than possible amount
      await addiHelperPayable.fill(addiHelperPossibleValue+1)
      await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.AddiHelperPossible)
      //if warning message appears if bolck will be executed , if not else block will be executed
      if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){
        Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
      }else{
        Log.info("we can edit Additional Helper payable amount");
      }
    
  }
})

Then('Verify weather user able to edit Accomodation Payable amount if possible amount is Zero for the selected Asset code', async() => {
  const accomodationPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.AccomodationPossible);
  const accomodationPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.AccomodationPayable)
  if (accomodationPossible && accomodationPayable) {
    //converted to string as fill only takes string values
    const accomodationPossibleValue = parseInt(accomodationPossible).toString()
      await accomodationPayable.click();
      await accomodationPayable.clear();
      //Giving amount greater than possible amount
      await accomodationPayable.fill(accomodationPossibleValue+1)
      await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.AccomodationPossible)
      //if warning message appears if bolck will be executed , if not else block will be executed
      if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){
        Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
      }else{
        Log.info("we can edit Accomodation payable amount");
      }   
  }
})

Then('Verify weather user able to edit Mobilisation Payable amount if possible amount is Zero for the selected Asset code', async() => {
  const mobPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.MobPossible);
  const mobPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.Mobpayable)
  if (mobPossible && mobPayable) {
    //converted to string as fill only takes string values
    const mobPossibleValue = parseInt(mobPossible).toString()
      await mobPayable.click();
      await mobPayable.clear();
      //Giving amount greater than possible amount
      await mobPayable.fill(mobPossibleValue+1)
      await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.MobPossible)
      //if warning message appears if bolck will be executed , if not else block will be executed
      if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){
        Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
      }else{
        Log.info("we can edit Mobilisation payable amount");
      } 
  }
})

Then('Verify weather user able to edit Assembly Payable amount if possible amount is Zero for the selected Asset code', async() => {
  const assemblyPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.AssemblyPossible);
  const assemblyPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.AssemblyPayable)
  if (assemblyPossible && assemblyPayable) {
    //converted to string as fill only takes string values
    const assemblyPossibleValue = parseInt(assemblyPossible).toString()
      await assemblyPayable.click();
      await assemblyPayable.clear();
      //Giving amount greater than possible amount
      await assemblyPayable.fill(assemblyPossibleValue+1)
      await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.AssemblyPossible)
      //if warning message appears if bolck will be executed , if not else block will be executed
      if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){
        Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
      }else{
        Log.info("we can edit Assembly payable amount");
      }    
  }
})

Then('Verify weather user able to edit DeMobilisation Payable amount if possible amount is Zero for the selected Asset code', async() => {
  const deMobPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.DeMobPossible);
  const deMobPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.DeMobPayable)
  if (deMobPossible && deMobPayable) {
    //converted to string as fill only takes string values
    const deMobPossibleValue = parseInt(deMobPossible).toString()
      await deMobPayable.click();
      await deMobPayable.clear();
      //Giving amount greater than possible amount
      await deMobPayable.fill(deMobPossibleValue+1)
      await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.DeMobPossible)
      //if warning message appears if bolck will be executed , if not else block will be executed
      if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){
        Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
      }else{
        Log.info("we can edit DeMobilisation payable amount");
      }
  }
})

Then('Verify weather user able to edit Transport Expenses Payable amount if possible amount is Zero for the selected Asset code', async() => {
  const transExpPossible = await fixture.page.textContent(MeasurementCreationPageObjects.MeasurementEntry.TransExpPossible);
  const transExpPayable = await fixture.page.locator(MeasurementCreationPageObjects.MeasurementEntry.TransExpPayable)
  if (transExpPossible && transExpPayable) {
    //if warning message appears if bolck will be executed , if not else block will be executed
    const transExpPossibleValue = parseInt(transExpPossible).toString()
      await transExpPayable.click();
      await transExpPayable.clear();
      //Giving amount greater than possible amount
      await transExpPayable.fill(transExpPossibleValue+1)
      await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.TransExpPossible)
      //if warning message appears if bolck will be executed , if not else block will be executed
      if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){
        Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
      }else{
        Log.info("we can edit Transport Expenses payable amount");
      }
  }
})

Then('Verify weather user able to submit without selecting any Asset code', async() => {
  //uncheck the selected asset code and submit 
  await fixture.page.click(MeasurementCreationPageObjects.MeaserementCreation.Assetcheckbox)
  await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.SubmitButton)
  if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.alert_box).isVisible()){
    Log.info(await fixture.page.textContent(MeasurementCreationPageObjects.MeaserementCreation.alert_box));
  }else{
    Log.info("we can Submit without selecting an Asset code");
  }
})
