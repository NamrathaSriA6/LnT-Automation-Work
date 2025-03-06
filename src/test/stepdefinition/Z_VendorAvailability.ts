import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/Z_Vendor_Availability_testdata.json";
import VendorAvailability_PageObjects from '../Locater/Z_VendorAvailability_PageObjects';
import Common_PageObjects from "../Locater/Common_PageObjects";
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import Log from "../hooks/until/logger";


let Base: common_methods;

let assetgrp: string;


Then('Check whether the user able to Navigate to Landing Page of Vendor Availability', async function () {
    await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Common_PageObjects.LoginPage.Username,testdata.Username);
    await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password);
    await fixture.page.click(Common_PageObjects.LoginPage.Login);
    console.log("User successfully logged in as " + testdata.Username);
    
    });

Then('Verify BreadCrumbs after navigating to the Vendor Availability page', async () => {
    await fixture.page.waitForTimeout(2000);
      // Here $ is to store the breadcrumb element
      const breadcrumbsElement = await fixture.page.$(VendorAvailability_PageObjects.Vendor.Breadcrums);    
        if (breadcrumbsElement) {            
          const breadcrumbsText = await breadcrumbsElement.textContent();
          if(breadcrumbsText!=null) // Here it tells the breadcrumbstext is not equals to null
          // Here it includes all the breadcrumbstext elements
          if (breadcrumbsText.includes('Asset') && breadcrumbsText.includes('Assets'))  {
            Log.info('Breadcrumbs path is correct.');
          } else {
            Log.info('Breadcrumbs path is incorrect.');
          }          
      }else {
        Log.info('Breadcrumbs element not found.');
      }
})

Then("Enter Menu details as Add Equipment Availability in the autocomplete box available at top left of the page", async () => {
    await fixture.page.click(VendorAvailability_PageObjects.Vendor.Menu_Clear)
    await fixture.page.fill(VendorAvailability_PageObjects.Vendor.Menu_Input, testdata.Menu_input)
    await fixture.page.keyboard.press('ArrowDown') // keyboard event to press Down Arrow
    await fixture.page.keyboard.press('Enter') // keyboard event to press Enter
  })

Then('Verify whether user able to clcik on Crete New button to create a new Equipment', async () => {
    await fixture.page.waitForTimeout(2000);
    await fixture.page.click(VendorAvailability_PageObjects.Vendor.CreateNew_btn)
})
Then('verify whether a popup to enter details is displayed or not', async () => {
    if(await fixture.page.locator(VendorAvailability_PageObjects.Vendor.Enterdetailspopup).isVisible()){
        Log.info('Popup to enter details is visible')
    }else{
        Log.info('Popup to enter details is not appeared')
    }
})

Then('Check whether Asset Group input field is taking input', async () => {
    try {
        await expect(fixture.page.locator(VendorAvailability_PageObjects.Vendor.Asssetgrp)).toBeEditable()
        Log.info('Asset Group field is taking input')
    } catch (error) {
        Log.info('Asset Group field is not taking any input')
    }
})

Then('Check whether Asset Description input field is taking input', async () => {
    try {
        await expect(fixture.page.locator(VendorAvailability_PageObjects.Vendor.Assetdescription)).toBeEditable()
        Log.info('Asset Description field is taking input')
    } catch (error) {
        Log.info('Asset Description field is not taking any input')
    }
})

Then('Check whether Equipment QTY input field is taking input', async () => {
    try {
        await expect(fixture.page.locator(VendorAvailability_PageObjects.Vendor.EquipmentQty)).toBeEditable()
        Log.info('Equipment QTY field is taking input')
    } catch (error) {
        Log.info('Equipment QTY field is not taking any input')
    }
})

Then('Check whether Status input field is taking input', async () => {
    try {
        await expect(fixture.page.locator(VendorAvailability_PageObjects.Vendor.Status)).toBeEditable()
        Log.info('Status field is taking input')
    } catch (error) {
        Log.info('Status field is not taking any input')
    }
})

Then('Check whether Equipment capacity input field is taking input', async () => {
    try {
        await expect(fixture.page.locator(VendorAvailability_PageObjects.Vendor.Equipment_capacity)).toBeEditable()
        Log.info('Equipment Capacity field is taking input')
    } catch (error) {
        Log.info('Equipment Capacity field is not taking any input')
    }
})

Then('Check whether Age input field is taking input', async () => {
    try {
        await expect(fixture.page.locator(VendorAvailability_PageObjects.Vendor.Age)).toBeEditable()
        Log.info('Age field is taking input')
    } catch (error) {
        Log.info('Age field is not taking any input')
    }
})
Then('Check whether Location input field is taking input', async () => {
    try {
        await expect(fixture.page.locator(VendorAvailability_PageObjects.Vendor.Location)).toBeEditable()
        Log.info('Location field is taking input')
    } catch (error) {
        Log.info('Location field is not taking any input')
    }
})
Then('Check whether Remarks input field is taking input', async () => {
    try {
        await expect(fixture.page.locator(VendorAvailability_PageObjects.Vendor.Remarks)).toBeEditable()
        Log.info('Remarks field is taking input')
    } catch (error) {
        Log.info('Remarks field is not taking any input')
    }
})

Then('Check whether user able to enter Asset Group in the input field available', async () => {
    assetgrp = await common_methods.generateRandomFourDigitNumber()
    await fixture.page.fill(VendorAvailability_PageObjects.Vendor.Asssetgrp, assetgrp)
})

Then('Check whether user able to enter Asset Description in the input field available', async () => {
    await fixture.page.fill(VendorAvailability_PageObjects.Vendor.Assetdescription, testdata.Assetdescription)
})

Then('Check whether user able to enter Equipment QTY in the input field available', async () => {
    await fixture.page.fill(VendorAvailability_PageObjects.Vendor.EquipmentQty, testdata.EquipmentQTY)
})

Then('Check whether user able to enter Status in the input field available', async () => {
    await fixture.page.locator(VendorAvailability_PageObjects.Vendor.Status).clear()
    // await fixture.page.waitForTimeout(1000)
    // await fixture.page.fill(VendorAvailability_PageObjects.Vendor.Status, testdata.Status)
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press('ArrowDown')
    await fixture.page.keyboard.press('Enter')

})

Then('Check whether user able to enter Equipment capacity in the input field available', async () => {
    await fixture.page.fill(VendorAvailability_PageObjects.Vendor.Equipment_capacity, testdata.EquipmentCapacity)
})

Then('Check whether user able to enter Age in the input field available', async () => {
    await fixture.page.fill(VendorAvailability_PageObjects.Vendor.Age, testdata.Age)
})

Then('Check whether user able to enter Location in the input field available', async () => {
    await fixture.page.fill(VendorAvailability_PageObjects.Vendor.Location, testdata.Location)
})

Then('Check whether user able to enter Remarks in the input field available', async () => {
    await fixture.page.fill(VendorAvailability_PageObjects.Vendor.Remarks, testdata.Remarks)
})

Then('Check whether user able to select Available from date in the date picker', async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    await common_methods.datepicker(VendorAvailability_PageObjects.Vendor.Availfrom_date,year,month,1)
})
Then('Check whether user able to select Available to date in the date picker', async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    await common_methods.datepicker(VendorAvailability_PageObjects.Vendor.Availto_date,year,month+4,15)
})
Then('Check whether user able to Click on reset button to remove all the details entered', async () => {
    await fixture.page.click(VendorAvailability_PageObjects.Vendor.Reset_btn)
})
Then('Verify whether user able to click on Save button so save the details', async () => {
    await fixture.page.click(VendorAvailability_PageObjects.Vendor.Save_btn)
})












Then('Check whether the user able to Navigate to Landing Page of Vendor Equipment Availaility', async () => {
    await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Common_PageObjects.LoginPage.Username,testdata.Username2);
    await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password);
    await fixture.page.click(Common_PageObjects.LoginPage.Login);
    console.log("User successfully logged in as " + testdata.Username);
    
})
Then('Check whether user able to select Vendor Equipment Availability from the Dropdown', async () => {
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(VendorAvailability_PageObjects.Emp.VendorEQPAvailability)
})
Then('Verify BreadCrumbs after navigating to the Vendor Equipment Availability page', async () => {
    await fixture.page.waitForTimeout(2000);
      // Here $ is to store the breadcrumb element
      const breadcrumbsElement = await fixture.page.$(VendorAvailability_PageObjects.Vendor.Breadcrums);    
        if (breadcrumbsElement) {            
          const breadcrumbsText = await breadcrumbsElement.textContent();
          if(breadcrumbsText!=null) // Here it tells the breadcrumbstext is not equals to null
          // Here it includes all the breadcrumbstext elements
          if (breadcrumbsText.includes('Asset') && breadcrumbsText.includes('Planning') && breadcrumbsText.includes('Availability'))  {
            Log.info('Breadcrumbs path is correct.');
          } else {
            Log.info('Breadcrumbs path is incorrect.');
          }          
      }else {
        Log.info('Breadcrumbs element not found.');
      }
})
Then('Verify Whether user able to enter Vendor details in the autocomplete box', async () => {
    await fixture.page.fill(VendorAvailability_PageObjects.Emp.Vendor_input, testdata.Vendor_input)
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(VendorAvailability_PageObjects.Emp.knowell)
})

Then('Verify Whether user able to enter Asset group in the input field', async () => {
    await fixture.page.fill(VendorAvailability_PageObjects.Emp.Assetgrp_input, assetgrp)
    await fixture.page.waitForTimeout(1000);
})

Then('Verify whether user able to click on Search button to get the available details', async () => {
    await fixture.page.click(VendorAvailability_PageObjects.Emp.Search_btn)
})

Then('Check whether the details with the asset group given is displaying', async () => {
    const Assetgrp = await fixture.page.textContent(VendorAvailability_PageObjects.Emp.Assetgrp);
    if(Assetgrp === assetgrp){
        Log.info('Assets are filtered and displaying correctly');
    }else{
        Log.error('Asset Group is not matching')
    }
})
Then('Check whether Asset Description is same as given in the Vendor page', async () => {
    const Assetdescription = await fixture.page.textContent(VendorAvailability_PageObjects.Emp.Assetdescription);
    if(Assetdescription === testdata.Assetdescription){
        Log.info('Asset Description is matching from Vendor');
    }else{
        Log.error('Asset Description from Vendor is not matching')
    }
})
Then('Check whether Equipment Quantity is same as given in the Vendor page', async () => {
    const EquipmentQty = await fixture.page.textContent(VendorAvailability_PageObjects.Emp.EquipmentQTY);
    if(EquipmentQty?.trim() === testdata.EquipmentQTY){
        Log.info('Equipment Quantity is matching from Vendor');
    }else{
        Log.error('Equipment Quantity from Vendor is not matching')
    }
})
Then('Check whether Equipment Capacity is same as given in the Vendor page', async () => {
    const Equipmentcapacity = await fixture.page.textContent(VendorAvailability_PageObjects.Emp.Capacity);
    if(Equipmentcapacity === testdata.EquipmentCapacity){
        Log.info('Equipment Capacity is matching from Vendor');
    }else{
        Log.error('Equipment Capacity from Vendor is not matching')
    }
})
Then('Check whether Age is same as given in the Vendor page', async () => {
    const Age = await fixture.page.textContent(VendorAvailability_PageObjects.Emp.Age);
    if(Age === testdata.Age){
        Log.info('Equipment Age is matching from Vendor');
    }else{
        Log.error('Equipment Age from Vendor is not matching')
    }
})
Then('Check whether Location is same as given in the Vendor page', async () => {
    const Location = await fixture.page.textContent(VendorAvailability_PageObjects.Emp.Location);
    if(Location === testdata.Location){
        Log.info('Location is matching from Vendor');
    }else{
        Log.error('Location from Vendor is not matching')
    }
})
Then('Check whether Remarks is same as given in the Vendor page', async () => {
    const Remarks = await fixture.page.textContent(VendorAvailability_PageObjects.Emp.Remarks);
    if(Remarks === testdata.Remarks){
        Log.info('Remarks is matching from Vendor');
    }else{
        Log.error('Remarks from Vendor is not matching')
    }
})
