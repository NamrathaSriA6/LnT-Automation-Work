import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as scpm_testdata from "../../main/testdata/SCPM_testdata.json";
import SCPM_PageObjects from '../Locater/SCPM_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";
import AssetInspection_PageObjects from "../Locater/Asset_Inspection_PageObjects";



let Base: common_methods;
let SCPM_generated : string;

    Given('Navigate to Test Enviroment of SubcontractorPM', async function () {
        // fixture.page.setViewportSize({ width:1900 , height:1000})
        await fixture.page.goto(scpm_testdata.Environment)
        Base = new common_methods(fixture.page)
        });
    
    
    Given('Check whether the user able Navigate to the landing Page of SubcontractorPM Page', async function () {
    await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Common_PageObjects.LoginPage.Username, scpm_testdata.Username)
    await fixture.page.fill(Common_PageObjects.LoginPage.Password, scpm_testdata.Password)
    await fixture.page.click(Common_PageObjects.LoginPage.Login);
    console.log("User successfully logged in as " + scpm_testdata.Username)
    });


Then('Check whether the user able to select the Masters from the dropdown', async() => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(SCPM_PageObjects.SCPM.Masters)
})

Then("Check whether the user able to select the SubcontractorPM from the dropdown",async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(SCPM_PageObjects.SCPM.SubContractorPM)
})
Then("Check Whether user able to click on SubContractor toggle at top left of Page",async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(SCPM_PageObjects.SCPM.SubContractor_toggle)
})
Then("Check whether user able to enter JOB in the autocomplete box available",async () => {
  await fixture.page.fill(SCPM_PageObjects.SCPM.JOB_input,scpm_testdata.JOB_code)
  await fixture.page.waitForTimeout(2000);
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
})
Then("Check whether user able to enter Vendor in the autocomplete box available",async () => {
  await fixture.page.fill(SCPM_PageObjects.SCPM.Vendor_input,scpm_testdata.Vendor_code)
  await fixture.page.waitForTimeout(2000);
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
})
Then("Verify whether user able to click on Go button",async () => {
  await fixture.page.click(SCPM_PageObjects.SCPM.Go_btn)
})
Then("Verify whether user able to Click on new Asset Button",async () => {
  await fixture.page.click(SCPM_PageObjects.SCPM.NewAsset)
})
Then("Verify whether Asset Group Field is Mandatory",async () => {
    await fixture.page.click(SCPM_PageObjects.SCPM.Create_btn)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(SCPM_PageObjects.SCPM.Create_btn)
    await fixture.page.waitForTimeout(1000)
    try {
      // const sh = await fixture.page.locator(SCPM_PageObjects.SCPM.Assetgrp_mandatory)
      await expect(fixture.page.locator(SCPM_PageObjects.SCPM.Assetgrp_mandatory)).toHaveClass(/dpblock/);
      // if(sh.class)
      Log.info(await fixture.page.textContent(SCPM_PageObjects.SCPM.Assetgrp_mandatory))
    } catch (error) {
      Log.info("Asset Group is not mandatory")
    }
})
Then("Verify whether user able to enter Asset Group details in the auto complete box available",async () => {
  await fixture.page.fill(SCPM_PageObjects.SCPM.Assetgrp,scpm_testdata.Asset_Grp_Code)
})
Then("Verify whether Asset Description Field is Mandatory",async () => {
  try {
    // const sh = await fixture.page.locator(SCPM_PageObjects.SCPM.Assetgrp_mandatory)
    await expect(fixture.page.locator(SCPM_PageObjects.SCPM.Assetgrp_mandatory)).toHaveClass(/dpblock/);
    // if(sh.class)
    Log.info(await fixture.page.textContent(SCPM_PageObjects.SCPM.Assetgrp_mandatory))
  } catch (error) {
    Log.info("Asset Group is not mandatory")
  }
})
Then("Verify whether user able to enter Asset Description details in the auto complete box available",async () => {
  await fixture.page.fill(SCPM_PageObjects.SCPM.Asset_descrition,scpm_testdata.Test)
})
Then("Verify whether Make Field is Mandatory",async () => {
  try {
    // const sh = await fixture.page.locator(SCPM_PageObjects.SCPM.Assetgrp_mandatory)
    await expect(fixture.page.locator(SCPM_PageObjects.SCPM.Make_mandatory)).toHaveClass(/dpblock/);
    // if(sh.class)
    Log.info(await fixture.page.textContent(SCPM_PageObjects.SCPM.Make_mandatory))
  } catch (error) {
    Log.info("Make Field is not mandatory")
  }
})
Then("Verify whether user able to enter Make details in the auto complete box available",async () => {
  await common_methods.selectRandomOption(SCPM_PageObjects.SCPM.Make)
})
Then("Verify whether Model Field is Mandatory",async () => {
  try {
    // const sh = await fixture.page.locator(SCPM_PageObjects.SCPM.Assetgrp_mandatory)
    await expect(fixture.page.locator(SCPM_PageObjects.SCPM.Model_mandatory)).toHaveClass(/dpblock/);
    // if(sh.class)
    Log.info(await fixture.page.textContent(SCPM_PageObjects.SCPM.Model_mandatory))
  } catch (error) {
    Log.info("Model Field is not mandatory")
  }
})
Then("Verify whether user able to enter Model details in the auto complete box available",async () => {
  await common_methods.selectRandomOption(SCPM_PageObjects.SCPM.Model)
})
Then("Verify whether Capacity Field is Mandatory",async () => {
  
})
Then("Verify whether user able to enter Capacity details in the auto complete box available",async () => {
  await fixture.page.fill(SCPM_PageObjects.SCPM.Capacity,scpm_testdata.Capacity)
})
Then("Verify whether Serial Number Field is Mandatory",async () => {
  try {
    // const sh = await fixture.page.locator(SCPM_PageObjects.SCPM.Assetgrp_mandatory)
    await expect(fixture.page.locator(SCPM_PageObjects.SCPM.SerialNumber_mandatory)).toHaveClass(/dpblock/);
    // if(sh.class)
    Log.info(await fixture.page.textContent(SCPM_PageObjects.SCPM.SerialNumber_mandatory))
  } catch (error) {
    Log.info("Asset Group is not mandatory")
  }
})
Then("Verify whether user able to enter Serial Number details in the auto complete box available",async () => {
  await fixture.page.fill(SCPM_PageObjects.SCPM.SerialNumber,scpm_testdata.SerialNum)
})
Then("Verify whether Registration Number Field is Mandatory",async () => {
    
})
Then("Verify whether user able to enter Registration Number details in the auto complete box available",async () => {
  await fixture.page.fill(SCPM_PageObjects.SCPM.RegistrationNumber,scpm_testdata.RegistrationNum)
})
Then("Verify whether Year of manufacture Field is Mandatory",async () => {
    
})
Then("Verify whether user able to enter Year of manufacture details in the auto complete box available",async () => {
  await fixture.page.fill(SCPM_PageObjects.SCPM.YearManufacture,scpm_testdata.Manufactureyear)
})
Then("Verify whether WOrk Order number Field is Mandatory",async () => {
    
})
Then("Verify whether user able to enter WOrk Order number details in the auto complete box available",async () => {
    await common_methods.selectRandomOption(SCPM_PageObjects.SCPM.WorkOrderNum)
})

Then("Check whether user able to click on create button to create a new Asset",async () => {
    await fixture.page.click(SCPM_PageObjects.SCPM.Create_btn)
})

Then("Verify whether user able to capture the SCPM number generated after clicking in create button",async () => {
    const SCPM = await fixture.page.textContent(SCPM_PageObjects.SCPM.SCPMgenerated);
    if(SCPM){
      SCPM_generated = SCPM.substring(0,26)
    }
    Log.info(`SCPM generated is ${SCPM_generated}`)
})



//*************************Edit************************ */

Then("Filter the Asset by giving the Request number in the filter input",async () => {
    await fixture.page.click(Common_PageObjects.Common.Filter);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.fill(SCPM_PageObjects.SCPM.ReferenceNum_input, SCPM_generated)
    await fixture.page.waitForTimeout(1000)
})
Then("Click on update icon for that asset to update the details of that asset",async () => {
    await fixture.page.click(SCPM_PageObjects.SCPM.Update_icon)
    await fixture.page.waitForTimeout(2000)
})
Then("Click on Update button to update the details",async () => {
    await fixture.page.click(SCPM_PageObjects.SCPM.Update_btn)
    await fixture.page.waitForTimeout(1000)
    Log.info(await fixture.page.textContent(SCPM_PageObjects.SCPM.SCPMgenerated))
})


Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
Then("",async () => {
    
})
