import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/GroupMaster_testdata.json";
import GroupMaster_PageObjects from '../Locater/GroupMaster_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import { groupCollapsed, log } from "console";
import assert from "assert";
import { exceptions } from "winston";
import test from "node:test";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";
import { fix } from "mssql";

 


let Base: common_methods;
//Global Variable declarations

Given('Check whether the user able Navigate to landing Page of Group Master', async () => {
  await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(Common_PageObjects.LoginPage.Username, testdata.Username)
  await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(Common_PageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("User successfully logged in as " + testdata.Username)
})

Then('Check whether the user able to select the Group Masters from the dropdown', async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(GroupMaster_PageObjects.common.GroupMaster)
})

Then('Verify whether after selecting GroupMaster page opened successfully', async () => {
  await fixture.page.waitForTimeout(5000)
    if(await fixture.page.url() === testdata.GroupMasterURL){
        Log.info('Group Master Page opened successfully')
        // await common_methods.runScenarioWithTag('@NewGroup1')
    }else{
        Log.info('Error in opening Group Master page')
        // await common_methods.runScenarioWithTag('@NewGroup2')
    }
    
})

Then('Verify whether Group code field is taking input', async () => {
  try {
    await expect(await fixture.page.locator(GroupMaster_PageObjects.General.GroupCode_input)).toBeEditable()
    Log.info('Group Code is taking input')
  } catch (error) {
    Log.error('Group Code is not taking input')
  }
})

Then('Verify whether user able to enter Group code in the input field available', async () => {
  await fixture.page.fill(GroupMaster_PageObjects.General.GroupCode_input, testdata.GroupCode)
})

Then('Verify whether Group Description field is taking input', async () => {
  try {
    await expect(await fixture.page.locator(GroupMaster_PageObjects.General.GroupDescription_input)).toBeEditable()
    Log.info('Group Description is taking input')
  } catch (error) {
    Log.error('Group Description is not taking input')
  }
})

Then('Verify whether user able to enter Group Description in the input field available', async () => {
  await fixture.page.fill(GroupMaster_PageObjects.General.GroupDescription_input, testdata.GroupDescription)
})

Then('Verify whether user able to click on new button to create new Group', async () => {
  await fixture.page.click(GroupMaster_PageObjects.General.New_btn)
})

Then('Verify whether after clicking on new button Asset Group creation page is opened', async () => {
  await fixture.page.waitForLoadState()
  if(await fixture.page.url() === testdata.AssetGroupmasterURL){
    Log.info('Asset Group Master page opened successfully')
  }else{
    Log.error('Error in opening Asset Group Master Page')
  }
})

Then('Verify whether user able to select Asset type from the autocomplete box', async () => {
  await fixture.page.waitForTimeout(5000)
  await common_methods.autocompleteField(GroupMaster_PageObjects.General.AssetType_input, testdata.Assettype)
})

Then('Verify whether user able to select IC from the autocomplete box', async () => {
  await fixture.page.click(GroupMaster_PageObjects.General.IC_input)
  await common_methods.ChooseOption()
})

Then('Verify whether user able to select BU from the autocomplete box', async () => {
  await fixture.page.click(GroupMaster_PageObjects.General.BU_input)
  await common_methods.ChooseOption()
})

Then('Verify whether user able to enter Category in the input field', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.fill(GroupMaster_PageObjects.General.Category_input, testdata.Category)
})

Then('Verify whether user able to enter Sub Category in the input field', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.fill(GroupMaster_PageObjects.General.SubCategory, testdata.SubCategory)
})

Then('Verify whether user able to enter Class in the input field', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.fill(GroupMaster_PageObjects.General.Class_input, testdata.Class)
})

Then('Verify whether user able to select Asset Account tag from the autocomplete box', async () => {
  await fixture.page.waitForTimeout(1000)
  await common_methods.autocompleteField(GroupMaster_PageObjects.General.Asset_Account_tag_input, testdata.Asset_Account_tag)
})

Then('Verify whether user able to select Major or minor from the autocomplete box', async () => {
  await fixture.page.waitForTimeout(1000)
  await common_methods.autocompleteField(GroupMaster_PageObjects.General.Major_Minor_input, testdata.Major_minor)
})

Then('Verify whether user able to enter HSN code from the autocomplete box', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.fill(GroupMaster_PageObjects.General.HSNCode_input, testdata.HSNCode)
})

Then('Verify whether user able to enter Depreciation percentage in the input field', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.fill(GroupMaster_PageObjects.General.Depreciation_percentage_input, testdata.Depreciation_Percentage)
})

Then('Verify whether user able to click on Internal Hire Charge file Icon', async () => {
  await fixture.page.click(GroupMaster_PageObjects.General.InternalHirecharge)
})
Then('Verify whether user able to enter Internal Hire Charge in the Popup appeared', async () => {
  await fixture.page.waitForSelector(GroupMaster_PageObjects.General.Depreciation_percentage_input)
  await fixture.page.fill(GroupMaster_PageObjects.General.Depreciation_percentage_input, testdata.InternalHireCharge)
})
Then('Check whether user able to save the changes by clicking on Save button', async () => {
  await fixture.page.click(GroupMaster_PageObjects.General.InternalHirecharge_Save_btn)
})

Then('Check whether user able to handle the popup appeared', async () => {
  Log.info(await fixture.page.textContent(Common_PageObjects.Common.PopupMessage));
  await fixture.page.click(Common_PageObjects.Common.Popup_Ok_btn)
})

Then('Verify whether user able to enter fuel per hour in the input field', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.fill(GroupMaster_PageObjects.General.Fuelperhour_input, testdata.FuelperHr)
})

Then('Verify whether user able to select Lease type from the autocomplete box', async () => {
  await fixture.page.click(GroupMaster_PageObjects.General.Leasetype_input)
  await common_methods.ChooseOption()
})

Then('Check whether user able to check some checkboxes', async () => {
  await fixture.page.check(GroupMaster_PageObjects.General.AllowHiring_checkbox)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.check(GroupMaster_PageObjects.General.RTAApplicable_checkbox)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.check(GroupMaster_PageObjects.General.AllowProcurement_checkbox)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.check(GroupMaster_PageObjects.General.Employee_Scheme_Applicable_checkbox)
  await fixture.page.waitForTimeout(1000)
})

Then('Check whether user able to Save the details by clicking on Save button', async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(GroupMaster_PageObjects.General.Save_btn)
})

Then('Check whether user able to click on Engine toggle to edit engine details', async () => {
  await fixture.page.click(GroupMaster_PageObjects.General.Engine_toggle)

})

Then('Verify whether Engine Desc is taking input or not for Primary Engine', async () => {
  await fixture.page.waitForLoadState()
  try {
    await expect(await fixture.page.locator(GroupMaster_PageObjects.Engine.Primary_EngineDesc_input)).toBeEditable();
    Log.info('Primary Engine Desc is taking input')
  } catch (error) {
    Log.error('Primary Engine Desc is not taking input')
  }
})

Then('Verify whether user able to enter Engine Description in the input field for Primary Engine', async () => {
  await fixture.page.fill(GroupMaster_PageObjects.Engine.Primary_EngineDesc_input, testdata.PrimaryEngineDesc)
  Log.info(`Engine Description is ${testdata.PrimaryEngineDesc}`)
})

Then('Verify whether Meter Type is taking input or not for Primary Engine', async () => {
  try {
    await expect(await fixture.page.locator(GroupMaster_PageObjects.Engine.Primary_Metertype_input)).toBeEditable();
    Log.info('Primary Engine Desc is taking input')
  } catch (error) {
    Log.error('Primary Engine Desc is not taking input')
  }
})

Then('Verify whether user able to select Meter Type from the available options for Primary Engine', async () => {
  await fixture.page.click(GroupMaster_PageObjects.Engine.Primary_Metertype_input)
  await common_methods.ChooseOption()
})

Then('Verify whether user able to check Logsheet Checkbox for primary Engine', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.check(GroupMaster_PageObjects.Engine.Primary_Logsheet_checkbox)
})

Then('Verify whether user able to check Production Checkbox for primary Engine', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.check(GroupMaster_PageObjects.Engine.Primary_Production_checkbox)
})

Then('Check whether user able to expand Seconday Engine options', async () => {
  await fixture.page.click(GroupMaster_PageObjects.Engine.SecondaryEngineADD_icon)
})

Then('Verify whether Engine Desc is taking input or not for Secondary Engine', async () => {
  await fixture.page.waitForLoadState()
  try {
    await expect(await fixture.page.locator(GroupMaster_PageObjects.Engine.Secondary_EngineDesc_input)).toBeEditable();
    Log.info('Secondary Engine Desc is taking input')
  } catch (error) {
    Log.error('Secondary Engine Desc is not taking input')
  }
})

Then('Verify whether user able to enter Engine Description in the input field for Secondary Engine', async () => {
  await fixture.page.fill(GroupMaster_PageObjects.Engine.Secondary_EngineDesc_input, testdata.SecondaryEngineDesc)
  Log.info(`Engine Description is ${testdata.SecondaryEngineDesc}`)
})

Then('Verify whether Meter Type is taking input or not for Secondary Engine', async () => {
  try {
    await expect(await fixture.page.locator(GroupMaster_PageObjects.Engine.Secondary_Metertype_input)).toBeEditable();
    Log.info('Secondary Engine Desc is taking input')
  } catch (error) {
    Log.error('Secondary Engine Desc is not taking input')
  }
})

Then('Verify whether user able to select Meter Type from the available options for Secondary Engine', async () => {
  await fixture.page.click(GroupMaster_PageObjects.Engine.Secondary_Metertype_input)
  await common_methods.ChooseOption()
})

Then('Verify whether user able to check Logsheet Checkbox for Secondary Engine', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.check(GroupMaster_PageObjects.Engine.Secondary_Logsheet_checkbox)
})

Then('Verify whether user able to check Production Checkbox for Secondary Engine', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.check(GroupMaster_PageObjects.Engine.Secondary_Production_checkbox)
})



Then('Verify whether user able to add Configuration for Primary Engine', async () => {

  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(GroupMaster_PageObjects.Engine.Configuration_engine)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(GroupMaster_PageObjects.Engine.Configuration_Primary_engine)
  Log.info('Primary Engine Selected for Configuration')
  await fixture.page.click(GroupMaster_PageObjects.Engine.Configuration_fueltype)
  await common_methods.ChooseOption()

  await fixture.page.fill(GroupMaster_PageObjects.Engine.Configuration_Maximum, testdata.ConfigurationMaximum)
  await fixture.page.fill(GroupMaster_PageObjects.Engine.Configuration_minimum, testdata.ConfigurationMinimum)

  await fixture.page.click(GroupMaster_PageObjects.Engine.Configuration_Update_btn)
})

Then('Verify whether user able to add Configuration for Secondary Engine', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(GroupMaster_PageObjects.Engine.Configuration_Engine_clear)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(GroupMaster_PageObjects.Engine.Configuration_Secondary_engine)
  Log.info('Secondary Engine Selected for Configuration')
  const FuelType = await fixture.page.locator(GroupMaster_PageObjects.Engine.Configuration_fueltype)
  await FuelType.click()
  await FuelType.clear()
  await common_methods.ChooseOption()

  await fixture.page.fill(GroupMaster_PageObjects.Engine.Configuration_Maximum, testdata.ConfigurationMaximum)
  await fixture.page.fill(GroupMaster_PageObjects.Engine.Configuration_minimum, testdata.ConfigurationMinimum)

  await fixture.page.click(GroupMaster_PageObjects.Engine.Configuration_Update_btn)
})

Then('Verify whether user able to Click on Save button to save the Engine details', async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(GroupMaster_PageObjects.Engine.Save_btn)
})

Then('Verify whether user able to click on Hiring toggle to edit hiring details', async () => {
  await fixture.page.click(GroupMaster_PageObjects.General.Hiring_toggle)
  await fixture.page.waitForLoadState()
})

Then('Verify whether user able to click on External Hire Charge file Icon', async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(GroupMaster_PageObjects.Hiring.ExternalHireCharge)
})

Then('Verify whether user able to enter External Hire Charge in the Popup appeared', async () => {
  await fixture.page.waitForSelector(GroupMaster_PageObjects.Hiring.ExternalHireCharge_input)
  await fixture.page.fill(GroupMaster_PageObjects.Hiring.ExternalHireCharge_input, testdata.ExternalHireCharge)
})

Then('Verify whether user able to enter Minimum Hiring Charge in the input field', async () => {
  const ele = await fixture.page.locator(GroupMaster_PageObjects.Hiring.MinimumHireCharge)
  await ele.clear()
  await ele.fill(testdata.MinimumHireCharge)
  Log.info(`Minimum Hire Charge entered is ${testdata.MinimumHireCharge}`)
})

Then('Verify whether user able to enter Maximum Hiring Charge in the input field', async () => {
  const ele = await fixture.page.locator(GroupMaster_PageObjects.Hiring.MaximumHireCharge)
  await ele.clear()
  await ele.fill(testdata.MaximumHireCharge)
  Log.info(`Maximum Hire Charge entered is ${testdata.MaximumHireCharge}`)
})

Then('Verify whether user able to enter Average Hiring Charge in the input field', async () => {
  const ele = await fixture.page.locator(GroupMaster_PageObjects.Hiring.AverageHireCharge)
  await ele.clear()
  await ele.fill(testdata.AverageHireCharge)
  Log.info(`Average Hire Charge entered is ${testdata.AverageHireCharge}`)
})

Then('Verify whether user able to select Hire Shift Type from the list of options', async () => {
  await fixture.page.click(GroupMaster_PageObjects.Hiring.HireShiftType)
  await common_methods.ChooseOption()
})

Then('Verify whether user able to enter no of Hours per day in the input field', async () => {
  const ele = await fixture.page.locator(GroupMaster_PageObjects.Hiring.HoursperDay)
  await ele.clear()
  await ele.fill(testdata.HoursperDay)
  Log.info(`Hours per day entered is ${testdata.HoursperDay}`)
})

Then('Verify whether user able to enter no of Days per month in the input field', async () => {
  const ele = await fixture.page.locator(GroupMaster_PageObjects.Hiring.DaysperMonth)
  await ele.clear()
  await ele.fill(testdata.DaysperMonth)
  Log.info(`Days per month entered is ${testdata.DaysperMonth}`)
})

Then('Verify whether user able to enter no of Hours per month in the input field', async () => {
  const ele = await fixture.page.locator(GroupMaster_PageObjects.Hiring.HoursperMonth)
  await ele.clear()
  await ele.fill(testdata.HoursperMonth)
  Log.info(`Hours per month entered is ${testdata.HoursperMonth}`)
})

Then('Verify whether user able to select Age validation as Applicable', async () => {
  await fixture.page.check(GroupMaster_PageObjects.Hiring.AgeValidation_Applicable)
})

Then('Verify whether user able to enter Min Age in the input field', async () => {
  const ele = await fixture.page.locator(GroupMaster_PageObjects.Hiring.MinAge)
  await ele.clear()
  await ele.fill(testdata.HiringMinAge)
  Log.info(`Hiring Min Age entered is ${testdata.HiringMinAge}`)
})

Then('Verify whether user able to enter Max Age in the input field', async () => {
  const ele = await fixture.page.locator(GroupMaster_PageObjects.Hiring.MaxAge)
  await ele.clear()
  await ele.fill(testdata.HiringMaxAge)
  Log.info(`Hiring Max Age entered is ${testdata.HiringMaxAge}`)
})

Then('Verify whether user able to select Transport Clause as Applicable', async () => {
  await fixture.page.check(GroupMaster_PageObjects.Hiring.TransportClause_Applicable)
})

Then('Verify whether user able to Save the details of by clicking on Save button', async () => {
  await fixture.page.waitForLoadState()
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(GroupMaster_PageObjects.Hiring.Save_btn)
})

// Then('Click on Ok in the popup appeared after Saving details', async () => {
//   Log.info(await fixture.page.textContent(Common_PageObjects.Common.PopupMessage));
//   await fixture.page.click(Common_PageObjects.Common.Popup_Ok_btn)
// })

Then('Verify whether user able to click on save button in the Alternate Group section', async () => {
  await fixture.page.waitForTimeout(5000)
  await fixture.page.click(GroupMaster_PageObjects.Hiring.Save_btn)
})

Then('Verify whether user able to click on Production Types toggle', async () => {
  await fixture.page.click(GroupMaster_PageObjects.General.Productiontype_toggle)
})

Then('Verify whether user able to select Production code from the list of options', async () => {
  await fixture.page.click(GroupMaster_PageObjects.Productiontypes.ProductionCode)
  await common_methods.ChooseOption();
  await fixture.page.click(GroupMaster_PageObjects.Productiontypes.Link_btn)
})

Then('Verify whether user able to click on Defect Codes Types toggle', async () => {
  await fixture.page.click(GroupMaster_PageObjects.General.DefectCodes_toggle)
})

Then('Verify whether user able to select Defect Codes code from the list of options', async () => {
  await fixture.page.click(GroupMaster_PageObjects.DefectCodes.DefectCode)
  await common_methods.ChooseOption();
  await fixture.page.click(GroupMaster_PageObjects.DefectCodes.Link_btn)
})







Then('Verify whether user able to click on Go button to check the Group code details', async () => {
  await fixture.page.click(GroupMaster_PageObjects.General.Go_btn)
})

Then('Verify the Group Code is displaying Correctly for the selected Group Code', async () => {
  Log.info(`Group : ${await fixture.page.textContent(GroupMaster_PageObjects.Existing.Group)}`)
})

Then('Verify the Category is displaying Correctly for the selected Group Code', async () => {
  Log.info(`Category : ${await fixture.page.textContent(GroupMaster_PageObjects.Existing.Category)}`)
})

Then('Verify the Sub Category is displaying Correctly for the selected Group Code', async () => {
  // await fixture.page.pause()
  Log.info(`Sub Category : ${await fixture.page.textContent(GroupMaster_PageObjects.Existing.Sub_Category)}`)
})

Then('Verify the Class is displaying Correctly for the selected Group Code', async () => {
  Log.info(`Class : ${await fixture.page.textContent(GroupMaster_PageObjects.Existing.Class)}`)
})

Then('', async () => {
  
})

Then('', async () => {
  
})

Then('', async () => {
  
})

Then('', async () => {
  
})

Then('', async () => {
  
})

Then('', async () => {
  
})

Then('', async () => {
  
})

Then('', async () => {
  
})

Then('', async () => {
  
})

Then('', async () => {
  
})

Then('', async () => {
  
})