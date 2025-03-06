import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as Movements_testdata from "../../main/testdata/Movements_Asset_testdata.json";
import Movements_Repair_PageObjects from '../Locater/Movements_Repair_PageObjects';
import Common_PageObjects from "../Locater/Common_PageObjects";
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import Log from "../hooks/until/logger";
import Movements_Asset_PageObjects from "../Locater/Movements_Asset_Page_Objects";


let Base: common_methods;
let RDA_generated: string;
let FMV_Value: string;

//************************************************* */
//*******************Asset Repair******************* */

Then ('Click on the Repair button',async function () {
    // await fixture.page.pause()
  await fixture.page.click(Movements_Repair_PageObjects.Asset.Repair_toggle);
  });

  Then ('check whether the user is able to click on the vendor code input field',async function(){
    await fixture.page.click(Movements_Repair_PageObjects.Asset.Vendor_Input);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.fill(Movements_Repair_PageObjects.Asset.Vendor_Input, Movements_testdata.Vendor);
    await fixture.page.waitForTimeout(2000)
    await fixture.page.keyboard.press('ArrowDown');
    await fixture.page.keyboard.press('Enter');
});
  
  
Then("Click on the Country field and check whether the country is autopopulated or not in the vendor", async () => {
    await fixture.page.click(Movements_Repair_PageObjects.Asset.Vendor_Country);
    await common_methods.ChooseOption();

})

Then("Click on the State field and verify whether the state is present in the vendor or not", async () => {
    await fixture.page.click(Movements_Repair_PageObjects.Asset.Vendor_State);
    await common_methods.ChooseOption();
})

Then('Verify if the information provided in the Contact Details input field is valid or not', async function () {
    await fixture.page.click(Movements_Repair_PageObjects.Asset.Vendorcontact);
    // await fixture.page.waitForTimeout(10000)
    await fixture.page.fill(Movements_Repair_PageObjects.Asset.Vendorcontact, Movements_testdata.Vendor_Contact);
});

Then('verify whether the mobile number provided in the input field is correct format', async function () {
    await fixture.page.click(Movements_Repair_PageObjects.Asset.Vendor_mobile_Number);
    // await fixture.page.waitForTimeout(10000)
    await fixture.page.fill(Movements_Repair_PageObjects.Asset.Vendor_mobile_Number, Movements_testdata.Vendor_mobile);
});

Then('Verify whether the email address provided is in a valid format or wrong in the Vendor section', async function () {
    await fixture.page.click(Movements_Repair_PageObjects.Asset.Vendor_EMail);
    await fixture.page.waitForTimeout(2000)
    await fixture.page.fill(Movements_Repair_PageObjects.Asset.Vendor_EMail, Movements_testdata.Vendor_Mail);
});

Then('Capture the RDA number generated from the popup appeared', async () => {
    const RDAGenerated = await fixture.page.textContent(Movements_Asset_PageObjects.DA.PDAgenerated)
    if(RDAGenerated){
      RDA_generated = RDAGenerated.trim();
    }
    Log.info("RDA number generated is "+RDA_generated)
})


Then("Verify whether user able to enter RDA generated in DA number field", async () => {
    await fixture.page.waitForTimeout(1000)
    await fixture.page.fill(Movements_Asset_PageObjects.DC.DANumber_input,RDA_generated)
  })


Then('click on the Component in DispatchRepair', async () => {
    await fixture.page.click(Movements_Repair_PageObjects.Component.Component)
})