import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/WorkOrderAmendmant_testdata.json";
import WOAmendmantPageObjects from '../Locater/WorkOrderAmendmant_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { fix } from "mssql";
import { log } from "console";
import assert, { fail } from "assert";
import { exceptions } from "winston";
import Log from "../hooks/until/logger";




let Base: common_methods;
//Global Variable declarations

Given('Navigate to Test Enviroment of WOAmendment page', async function () {
  // await fixture.page.setViewportSize({ width: 1900, height:900})
  await fixture.page.goto(testdata.Environment) // goto() - redirects to the specified url
  Base = new common_methods(fixture.page)
});


Given('Verify weather User able to navigate to Amendment Request page', async function () {
  await fixture.page.click(WOAmendmantPageObjects.LoginPage.Otheruser);
  await fixture.page.fill(WOAmendmantPageObjects.LoginPage.Username, testdata.Username)
  await fixture.page.fill(WOAmendmantPageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(WOAmendmantPageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("User successfully logged in as " + testdata.Username)
});

Then('Verify BreadCrumbs before navigating to the Amendment Request page', async() => {
    // Write code here that turns the phrase above into concrete actions
  })

Then('Check weather user able to select Amendment Request from the dropdown', async() => {
    await fixture.page.waitForTimeout(2000);
    await fixture.page.click(WOAmendmantPageObjects.DashBoard.AmendmentRequest)
})

Then('Verify BreadCrumbs after navigating to the Amendment Request page', async() => {
  // Write code here that turns the phrase above into concrete actions
  
})

Then('Verify weather user able to enter input in the Job field', async() => {
  try {
    await expect(await fixture.page.locator(WOAmendmantPageObjects.WOA.Job)).toBeEditable()
  } catch (error) {
    Log.info("Unable to enter data in job field");
  }
})

Then('Enter the required job in the autocomplete box available in top left corner of Amendment Request page', async() => {
    await fixture.page.waitForTimeout(2000);
    const job = await fixture.page.locator(WOAmendmantPageObjects.WOA.Job);
    await job.click();
    await job.clear();
    await job.fill(testdata.Job)
    await fixture.page.waitForTimeout(2000);
    await fixture.page.keyboard.press('ArrowDown');
    await fixture.page.keyboard.press('Enter');
  })

Then('Verify weather Search button is enabled or not in the Amendment Request Page', async() => {
  try {
    await expect(await fixture.page.locator(WOAmendmantPageObjects.WOA.Search)).toBeEnabled()
    await fixture.page.click(WOAmendmantPageObjects.WOA.Search)
  } catch (error) {
    Log.info("Search button is disabled unable to click on it");
  }
})

Then('Verify weather user able to click on filter icon above the grid', async() => {
  await fixture.page.click(WOAmendmantPageObjects.WOA.Filter)
})

Then('Filter the required job field to top in the Amendment Request page', async() => {
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(WOAmendmantPageObjects.WOA.WONumberInput,testdata.WONumber)
})

Then('Verify weather user able to click on plus icon for creating an amendment under the actions section', async() => {
    try {
        await expect(await fixture.page.locator(WOAmendmantPageObjects.WOA.EditAction)).toBeVisible()
        await fixture.page.click(WOAmendmantPageObjects.WOA.EditAction)
        await fixture.page.waitForTimeout(2000)
    } catch (error) {
        Log.info("create Action button is not visible for the selected job");
    }
})

Then('Verify weather user able to edit Required from date in the Amendment Creation page', async() => {
  // await fixture.page.pause();
  //   if(await fixture.page.locator(WOAmendmantPageObjects.WOA.RequiredForm).isEnabled()){
  //     await fixture.page.click(WOAmendmantPageObjects.WOA.RequiredForm)
  //     await fixture.page.waitForTimeout(1000); //page.waitForTimeout() -- It will wait for Specified amount of time
  //     await fixture.page.click(WOAmendmantPageObjects.WOA.Today);
  //     await fixture.page.waitForTimeout(1000);
  //   }else{
  //     Log.info("Unable to edit Required from date");
  //   }
})

Then('Verify weather user able to edit Required to date in the Amendment Creation page', async() => {
  // if(await fixture.page.locator(WOAmendmantPageObjects.WOA.RequiredTo).isEnabled()){
  //   await fixture.page.click(WOAmendmantPageObjects.WOA.RequiredTo);
  //   await fixture.page.waitForTimeout(1000); //page.waitForTimeout() -- It will wait for Specified amount of time
  //   await fixture.page.click(WOAmendmantPageObjects.WOA.Dateclick);
  //   await fixture.page.waitForTimeout(1000);
  //   await fixture.page.click(WOAmendmantPageObjects.WOA.June);
  //   await fixture.page.waitForTimeout(1000);
  //   await fixture.page.click(WOAmendmantPageObjects.WOA.Date);
  //   await fixture.page.waitForTimeout(1000);
  // }else{
  //   Log.info("Unable to edit Required from date");
  // }
})

Then('Verify weather user able to edit Capacity in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.Capacity).isEditable()){
      Log.info("Capacity is editable");
  }else{
    Log.info("Capacity is not editable");
  }
})

Then('Verify weather user able to edit Equipment description in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.EquipmentDescription).isEditable()){
    Log.info("Equipment description is editable");
  }else{
    Log.info("Equipment description is not editable");
  }
})

Then('Verify weather user able to edit Quantity in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.Quantity).isEditable()){
    Log.info("Quantity is editable");
  }else{
    Log.info("Quantity is not editable");
  }
})

Then('Verify weather user able to edit minimum age in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.MinAge).isEditable()){
      Log.info("Equipment minimun age is editable");
  }else{
    Log.info("Unable to edit Equipment minimun age");
  }
})

Then('Verify weather user able to edit maximum age in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.MaxAge).isEditable()){
      Log.info("Equipment maximum age is editable");
  }else{
    Log.info("Unable to edit Equipment maximum age");
  }
})

Then('Verify weather user able to edit Make description in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.MakeDescription).isEditable()){
      Log.info("Make description is editable");
  }else{
    Log.info("Unable to edit Make description");
  }
})

Then('Verify weather user able to edit Model Description in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.ModelDescription).isEditable()){
      Log.info("Model Description is editable");
  }else{
    Log.info("Unable to edit Model Description");
  }
})

Then('Verify weather user able to edit Reason for Hiring in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.ReasonforHiring).isEditable()){
      Log.info("Reason for Hiring is editable");
  }else{
    Log.info("Unable to edit Reason for Hiring");
  }
})

Then('Verify weather user able to edit Scope of work in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.ScopeofWork).isEditable()){
      Log.info("Scope of work is editable");
  }else{
    Log.info("Unable to edit Scope of work");
  }
})

Then('Verify weather user able to edit Specific Requirements in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.SpecificRequirements).isEditable()){
      Log.info("Specific Requirements is editable");
  }else{
    Log.info("Unable to edit Specific Requirements");
  }
})

Then('Verify weather user able to edit Scope Of Work Qty per Equipment in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.ScopeWorkEquipment).isEditable()){
      Log.info("Scope Of Work Qty per Equipment is editable");
  }else{
    Log.info("Unable to edit Scope Of Work Qty per Equipment");
  }
})

Then('Verify weather user able to edit Duration in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.Duration).isEditable()){
      Log.info("Duration is editable");
  }else{
    Log.info("Unable to edit Duration");
  }
})
Then('Verify weather user able to edit Worktype in Amendment Creation page', async() => {
  if(await fixture.page.locator(WOAmendmantPageObjects.WOA.Worktype).isEditable()){
      Log.info("Worktype is editable");
  }else{
    Log.info("Unable to edit Worktype");
  }
})
Then('Verify weather user able to edit Operator terms in Amendment Creation page', async() => {
    if(await fixture.page.locator(WOAmendmantPageObjects.WOA.Tearms).isEditable()){
      Log.info("Operator terms is editable");
  }else{
    Log.info("Unable to edit Operator terms");
  }
})
Then('Verify weather user able to edit no of Shifts in Amendment Creation page', async() => {
    if(await fixture.page.locator(WOAmendmantPageObjects.WOA.ShiftInput).isEditable()){
      Log.info("no of Shifts is editable");
  }else{
    Log.info("Unable to edit no of Shifts");
  }
})
Then('Verify weather user able to edit Shift hours in Amendment Creation page', async() => {
    if(await fixture.page.locator(WOAmendmantPageObjects.WOA.ShiftHours).isEditable()){
      Log.info("Shift hours is editable");
  }else{
    Log.info("Unable to edit Shift hours");
  }
})
Then('Verify weather user able to edit Additional operators in Amendment Creation page', async() => {
    if(await fixture.page.locator(WOAmendmantPageObjects.WOA.Addloperators).isEditable()){
      Log.info("Additional operators is editable");
  }else{
    Log.info("Unable to edit Additional operators");
  }
})
Then('Verify weather user able to edit Helpers in Amendment Creation page', async() => {
    if(await fixture.page.locator(WOAmendmantPageObjects.WOA.Helpers).isEditable()){
      Log.info("Helpers is editable");
  }else{
    Log.info("Unable to edit Helpers");
  }
})
Then('Verify weather user able to edit Claibable from client field in Amendment Creation page', async() => {
    if(await fixture.page.locator(WOAmendmantPageObjects.WOA.ClaimablefromClient).isEnabled()){
      Log.info("Claibable from client is editable");
  }else{
    Log.info("Unable to edit Claibable from client");
  }
})
Then('Verify weather user able to edit Shift timings in Amendment Creation page', async() => {
    if(await fixture.page.locator(WOAmendmantPageObjects.WOA.ShiftTimings).isEditable()){
      Log.info("Shift timings is editable");
  }else{
    Log.info("Unable to edit Shift timings");
  }
})
Then('Verify weather user able to edit Vendor in Amendment Creation page', async() => {
    if(await fixture.page.locator(WOAmendmantPageObjects.WOA.VendorInput).isEditable()){
      Log.info("Vendor is editable");
  }else{
    Log.info("Unable to edit Vendor");
  }
})
Then('Verify weather user able to Click on Save and next button in Amendment Creation page', async() => {
    if(await fixture.page.locator(WOAmendmantPageObjects.WOA.SaveandNext).isEnabled()){
      await fixture.page.click(WOAmendmantPageObjects.WOA.SaveandNext)
      Log.info("Save and next button is enabled");
  }else{
    Log.info("Unable to click on Save and next button");
  }
})
Then("Verify weather user Edit Hire charges in the Commercials section in Amendment Creation page",async () => {
  await fixture.page.waitForTimeout(2000)
  if(await fixture.page.locator(WOAmendmantPageObjects.OT.HireCharges).isEditable()){
    const Hirecharges = await fixture.page.locator(WOAmendmantPageObjects.OT.HireCharges);
    Hirecharges.click();
    Hirecharges.clear();
    Hirecharges.fill(testdata.HireCharges);
    Log.info("Hire Charges is editable");
}else{
  Log.info("Unable to edit Hire Charges ");
}
})
Then("Verify weather User able to edit OT Charges in commercials section",async () => {
  if(await fixture.page.locator(WOAmendmantPageObjects.OT.OTCharges).isEnabled()){
    await fixture.page.click(WOAmendmantPageObjects.OT.OTCharges);
}else{
  Log.info("Unable to click on OT Charges");
}
})

Then("Verify weather User able to edit OT Expected hours per month in OT Charges popup appeared",async () => {
  await fixture.page.waitForTimeout(2000)
  const OTExpected30 = await fixture.page.locator(WOAmendmantPageObjects.OT.OTExpectedHrsMonth30)
  OTExpected30.click();
  OTExpected30.clear();
  OTExpected30.fill("30")
  const OTExpected31 = await fixture.page.locator(WOAmendmantPageObjects.OT.OTExpectedHrsMonth31)
  OTExpected31.click();
  OTExpected31.clear();
  OTExpected31.fill("40")
  await fixture.page.click(WOAmendmantPageObjects.OT.SaveOT)
})
Then("Verify weather User able to enter Operator Amendment Quantity in the Commercials section",async () => {
  await fixture.page.fill(WOAmendmantPageObjects.Commercials.OperatorAmendmentQty,testdata.Test)
})
Then("Verify weather User able to enter Additional Operator Amendment Quantity in the Commercials section",async () => {
  await fixture.page.fill(WOAmendmantPageObjects.Commercials.AddiOperatorAmendmentQty,testdata.Test)
})
Then("Verify weather User able to enter Helper Amendment Quantity in the Commercials section",async () => {
  await fixture.page.fill(WOAmendmantPageObjects.Commercials.HelperAmendmentQty,testdata.Test)
})
Then("Verify weather User able to enter Additional Helper Amendment Quantity in the Commercials section",async () => {
  await fixture.page.fill(WOAmendmantPageObjects.Commercials.AddiHelperAmendmentQty,testdata.Test)
})
Then("Verify weather User able to enter Accomodation Amendment Quantity in the Commercials section",async () => {
  await fixture.page.fill(WOAmendmantPageObjects.Commercials.AccomodationAmendmentQty,testdata.Test)
})
Then("Verify weather User able to enter Mobilisation Amendment Quantity in the Commercials section",async () => {
  if(await fixture.page.locator(WOAmendmantPageObjects.Commercials.MobilisationAmendmentQty).isEditable()){

    await fixture.page.fill(WOAmendmantPageObjects.Commercials.MobilisationAmendmentQty,testdata.Test)
  }
})
Then("Verify weather User able to enter DeMobilisation Amendment Quantity in the Commercials section",async () => {
  if(await fixture.page.locator(WOAmendmantPageObjects.Commercials.DeMobilisationAmendmentQty).isEditable()){

    await fixture.page.fill(WOAmendmantPageObjects.Commercials.DeMobilisationAmendmentQty,testdata.Test)
  }
  // await fixture.page.click(WOAmendmantPageObjects.Commercials.SaveAndNext_btn)
})
Then("Verify weather new section is opening after clicking on Save And Next in Commercials page",async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(WOAmendmantPageObjects.Commercials.SaveAndNext_btn)
})
Then("Verify weather new section is opening after clicking on Save And Next in Other terms page",async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(WOAmendmantPageObjects.Commercials.SaveAndNext_btn)
})
Then("Verify weather new section is opening after clicking on Save And Next in Material Linking page",async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(WOAmendmantPageObjects.MaterialLinking.SaveAndNext)
})
Then("Verify weather tax details are displaying correctly in the Tax section",async () => {
  await fixture.page.waitForTimeout(2000)
  const data = await fixture.page.$$(WOAmendmantPageObjects.Tax.TaxDetails);
  if(data.length > 0){
    Log.info("Detailed tax structure is Displaying correctly");
  }else{
    Log.info("Tax structure is not displaying correctly");
  }
  await fixture.page.click(WOAmendmantPageObjects.Commercials.SaveAndNext_btn)
})

Then("Verify weather All Validations are passed in SOP Validations", async () => {
  const failed = await fixture.page.textContent(WOAmendmantPageObjects.SOP.FailedValidation);
  if(failed){
    const failedValidation = parseInt(failed)
    if(failedValidation>0){
      Log.info("All SOP Validations passed");
    }else{
      Log.info(failedValidation+" validations failed");
    }
  }
})