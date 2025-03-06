import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as Movements_testdata from "../../main/testdata/Movements_Asset_testdata.json";
import Movements_Components_PageObjects from '../Locater/Movements_Component_PageObjects';
import Common_PageObjects from "../Locater/Common_PageObjects";
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import Log from "../hooks/until/logger";
import * as sql from "../../main/database/database";
import Movements_Asset_PageObjects from "../Locater/Movements_Asset_Page_Objects";


let Base: common_methods;
let CDA_generated: string;
let CDC_generated: string;
let FMV_Value: string;
let Username: string;
let From_Job: string;

//*************************************************** */
//****************Despatch Advise******************** */

Then('Capture the From_Job_Code from the auto populated data', async () => {
    const fromjob = await fixture.page.inputValue(Movements_Components_PageObjects.DA.From_Job);
    if(fromjob){
      From_Job = fromjob.substring(0,8)
    }
    Log.info("From Job selected is-"+From_Job+"--")
})

Then ('Check click whether the user is able to click the Components',async function () {
    await fixture.page.click(Movements_Components_PageObjects.DA.Component_toggle);
  });

Then('click on the checkbox', async () => {
    await fixture.page.click(Movements_Components_PageObjects.DA.Checkbox)
})

Then('click on the Components', async function () {
  await fixture.page.click(Movements_Components_PageObjects.DA.Components);
});
Then('check whether the user is able to click on the shopping cart', async function () {
  await fixture.page.click(Movements_Components_PageObjects.DA.ShoppingCart);
});
Then('click on the add icon', async function () {
  await fixture.page.click(Movements_Components_PageObjects.DA.Addcomponent);
});

Then('click on the description components checkbox', async function () {
  await fixture.page.click(Movements_Components_PageObjects.DA.ComponentDescriptionCheckbox);
});


Then('check whether the user is able to click on the component description and fill it', async function () {
  const value = await common_methods.RandomLetter();
  await fixture.page.fill(Movements_Components_PageObjects.DA.Component_Desc, value)
}); 

Then('check whether the user is able to click on the quantity', async function () {
  await fixture.page.fill(Movements_Components_PageObjects.DA.component_Qty, Movements_testdata.components_total_quantity);
});

Then('click on the action button', async function () {

  await fixture.page.click(Movements_Components_PageObjects.DA.Save_Comp);
});

Then('click on add button to add the Details', async () => {
  await fixture.page.click(Movements_Components_PageObjects.DA.ADD_Comp);
})
Then('click  on the submit', async () => {
    await fixture.page.click(Movements_Components_PageObjects.DA.Components_Submit)
    await fixture.page.click(Movements_Components_PageObjects.DA.Components_Submit_ok)
})

Then('Capture the CDA number generated from the popup appeared',async () => {
  const CDAGenerated = await fixture.page.textContent(Movements_Asset_PageObjects.DA.PDAgenerated)
  if(CDAGenerated){
    CDA_generated = CDAGenerated.trim();
  }
  Log.info("CDA number generated is "+CDA_generated)

})


//************************************************ */
//************************DC********************** */

Given('Check whether the user able to Navigate to Landing Page of DC for component flow', async () => {

  try {
    await fixture.page.waitForTimeout(5000)
    const query = `
    Use EIP40AWM;
    DECLARE
    @dtCode        INT        = 30539,
    @doptCode    CHAR(1) =    'C',
    @jobCode    CHAR(8) =    '${From_Job}'
    
    SELECT DISTINCT MUSER_Login_Name Emp_Name, MUSER_Reference_ID PsNo, MUSER_User_ID AS UID, LUJFR_Job_Code AS Job,
        MFR_Description Functional_Role, MUSER_ISActive,
    *FROM EIP40AWM.ACS.ACS_L_FR_Document_Operations ope
    INNER JOIN EIP40AWM.ACS.ACS_L_User_Job_Functional_Roles FR
        ON ope.LFRDO_FR_Code        =    FR.LUJFR_FR_Code
    INNER JOIN EIP40AWM.ACS.ACS_M_Users users
        ON FR.LUJFR_User_ID            =    users.MUSER_User_ID
    INNER JOIN  EIP40AWM.ACS.ACS_M_Functional_Roles
        ON MFR_FR_Code                =    FR.LUJFR_FR_Code
    WHERE    MUSER_ISActive            =        'Y'         
    AND    LFRDO_DT_Code        =        @dtCode        
    AND    ope.LFRDO_DOPT_Code =        @doptCode   -- and MUSER_Company_Code not in (1)
    AND    LUJFR_Job_Code    =@jobCode
    AND MFR_Description = 'Site-P&M Incharge' `;

    const data = await sql.executeQuery("All", query);
    Username = await data.recordset[0].Emp_Name;
    if (Username != null) {
      Log.info("Delivery Challan User name is "+ Username);
    }
  } catch (error) {
    Log.info("There is a problem in fetchig Username for DC component" + error)
  }


  await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(Common_PageObjects.LoginPage.Username, Username);
  await fixture.page.fill(Common_PageObjects.LoginPage.Password, Movements_testdata.Password);
  await fixture.page.click(Common_PageObjects.LoginPage.Login);
  console.log("User successfully logged in as " + Username);

  Username='';
})

Then('Verify whether user able to enter CDA generated in DA number field', async () => {
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(Movements_Asset_PageObjects.DC.DANumber_input,CDA_generated)
})

Then('Verify whether user able to fill the FMV Value form the DC Essentials Page',async () => {
  await fixture.page.fill(Movements_Components_PageObjects.DC.FMV_value,Movements_testdata.FMV_Component)
})

Then('check whether the user is able to fill the input field of FMV for component', async () => {
  await fixture.page.fill(Movements_Asset_PageObjects.DC.FMV_input, Movements_testdata.FMV_Component)
})

Then('Verify whether user able to enter Make for the Component', async () => {
  await fixture.page.fill(Movements_Components_PageObjects.DC.Component_Make, Movements_testdata.Test)
})
Then('Verify whether user able to enter Model for the Component', async () => {
  await fixture.page.fill(Movements_Components_PageObjects.DC.Componnet_Model, Movements_testdata.Test)
})
Then('Verify whether user able to enter Despatch Quantity for the Component', async () => {
  await fixture.page.fill(Movements_Components_PageObjects.DC.Despatch_Qty, "1")
})
Then('Verify whether user able to enter Unit FMV Value for the Component', async () => {
  await fixture.page.fill(Movements_Components_PageObjects.DC.Unit_FMV_Value, Movements_testdata.FMV_Component)
})
Then('Verify whether user able to enter Weight for the Component', async () => {
  await fixture.page.fill(Movements_Components_PageObjects.DC.Weight, Movements_testdata.TestValue)
})
Then('Verify whether user able to enter Length for the Component', async () => {
  await fixture.page.fill(Movements_Components_PageObjects.DC.Length, Movements_testdata.TestValue)
})
Then('Verify whether user able to enter Width for the Component', async () => {
  await fixture.page.fill(Movements_Components_PageObjects.DC.Width, Movements_testdata.TestValue)
})
Then('Verify whether user able to enter Height for the Component', async () => {
  await fixture.page.fill(Movements_Components_PageObjects.DC.Height, Movements_testdata.TestValue)
})
Then('Verify whether user able to enter HSN Code for the Component', async () => {
  await fixture.page.fill(Movements_Components_PageObjects.DC.HSN_Code, Movements_testdata.Componnet_HSN_Code)
})

Then('Check whether user able to capture the CDC number generated from the popup',async () => {
  await fixture.page.waitForLoadState()
  await fixture.page.waitForTimeout(1000);
  const CDC = await fixture.page.textContent(Movements_Components_PageObjects.DC.CDCGenerated);
    if(CDC){
        CDC_generated = CDC.trim();
        Log.info("CDC generated is "+CDC_generated)
    }

    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(Movements_Asset_PageObjects.DC.SuccessOK);
})


//*************************************** */
//****************RN********************* */


Then('Filter the required Asset by giving the CDC generated from the DeliveryChallan', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.fill(Movements_Asset_PageObjects.RN.DCNumber_input,CDC_generated)
})

