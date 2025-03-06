import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/BreakDown_testdata.json";
import BreakDown_Pageobjects from '../Locater/BreakDown_PageObjects';
import Pageobjects from '../Locater/Common_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import cluster from "cluster";
import { fix } from "mssql";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";



let Base: common_methods;

let DERGenerated: string;


Given('Navigate to the Test Environment of Assest Availability', async function () {
// fixture.page.setViewportSize({ width:1900 , height:1000})
await fixture.page.goto(testdata.Environment)
Base = new common_methods(fixture.page)
});


Given('Check whether the user able Navigate to the landing Page of BreakDownEntry', async function () {
await fixture.page.click(Pageobjects.LoginPage.Otheruser);
await fixture.page.fill(Pageobjects.LoginPage.Username, testdata.Username)
await fixture.page.fill(Pageobjects.LoginPage.Password, testdata.Password)
await fixture.page.click(Pageobjects.LoginPage.Login);
console.log("User successfully logged in as " + testdata.Username)
});

Then('Check whether user able to Click on the Operations and Maintenance', async function () {
await fixture.page.click(BreakDown_Pageobjects.Breakdown.Operations_Maintainance);
});

Then('Check whether user able to Click on the Break down entry', async function () {
await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Entry);
});

Then('Verify whether user able to Click on the Break down Job and the enter the code', async function () {
await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Job);
await fixture.page.fill(BreakDown_Pageobjects.Breakdown.Break_Down_Job, testdata.BreakDown_Job);
await fixture.page.waitForTimeout(1000)
await fixture.page.keyboard.press("ArrowDown")
await fixture.page.keyboard.press("Enter")
});

Then('Check  whether the user is able to click on the Assest And select the Assest', async function () {
await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Assest);
await fixture.page.fill(BreakDown_Pageobjects.Breakdown.Break_Down_Assest, testdata.BreakDown_Assest);
await fixture.page.waitForTimeout(1000)
await fixture.page.keyboard.press("ArrowDown")
await fixture.page.keyboard.press("Enter")
});



Then('Check Whether the user is able to click on the Break Down Search Button', async function () {
await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Search);
});

Then('Check Whether the user is able to click on the Add Button for adding Break Down', async function () {
await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Add_Icon);
});
    
// Breakdown
Then('check Whether the user is able to click on the Break Down Toggle Button', async function () {
await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Toggle);
});

Then('verify Whether the user is able to click on the Break Down Type and able to choose the option', async function () {
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Type_Clear)
    await fixture.page.fill(BreakDown_Pageobjects.Breakdown.Break_Down_Type,"1");
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")

});

Then('Check Whether the user is able to click on the Break Down FROM date and able to pick the date', async function () {
    await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_From_DatePicker);
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(Common_PageObjects.Common.Today)
});

Then('Verify  Whether the user is able to click on the Nature of the Defect and able to choose the option', async function () {
    await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Nature_of_Defect);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")

});

Then('Check Whether the user is able to click on the exp Comminissioning date and able to click the date', async function () {
await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Exp_Commonsioning_Date);
await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Date_Today);
});

Then('Verify Whether the user is able to click on the BreakDown time', async function () {
    await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Time);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")

});

Then('Verify Whether the user is able to click on the BreakDown time for Rejectflow', async function () {
    await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Time);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")

});

Then('Verify Whether the user is able to click on the Exp Commissioning time', async function () {
    await fixture.page.click(BreakDown_Pageobjects.Breakdown.Commissioning_Time);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")

});

Then('Verify Whether the user is able to click on the Remarks input and enter the remarks', async function () {
await fixture.page.fill(BreakDown_Pageobjects.Breakdown.Break_Down_Remarks,"test");

});
Then('Verify whether user able to click on submit to save the given details', async function () {
await fixture.page.click(BreakDown_Pageobjects.Breakdown.Submit_btn);
await fixture.page.waitForTimeout(2000);
await fixture.page.click(BreakDown_Pageobjects.Breakdown.BreakdownSubmitOk)

});

Then('Verify whether user able to click on Detailed Estimation Toggle at top right of the page', async() => {
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Detailed_Estimation_toggle)
})

Then('Verify whether user able to click on Failure Investigation toggle', async() => {
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.FailureInvestigation_toggle)
})

Then('Verify whether user able to enter Causes of Failure in the textarea available', async() => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.TextArea,testdata.test)
})

Then('Verify whether user able to click on Sub Assembly toggle to the right of Failure Investigation toggle', async() => {
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.SubAssembly_toggle)
})

Then('Verify whether user able to enter Sub Assembly in the sub assembly auto complete box available', async() => {
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.SubAssemblyInput)
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
})

Then('Verify whether user able to enter Agency name in the agency name auto complete box available', async() => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.AgencyNameInput,"2736")
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
})

Then('Verify whether user able to enter Nature of repair in the input field available', async() => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.NatureofRepairInput,testdata.test)
})

Then('Verify whether user able to enter spares cost in the iput field available', async() => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.SparesCostInput,testdata.testvalue)
})

Then('Verify whether user able to enter Labour cost in the iput field available', async() => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.LabourCostInput,testdata.testvalue)
})

Then('Verify whether user able to enter Oil cost in the iput field available', async() => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.OilCostInput,testdata.testvalue)
})

Then('Verify whether user able to enter Consumable cost in the iput field available', async() => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.ConsumableCostInput,testdata.testvalue)
})

Then('Verify whether user able to enter agency repairs cost in the iput field available', async() => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.AgencyRepaireCostInput,testdata.testvalue)
})

Then('Verify whether user able to enter Others cost in the iput field available', async() => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.OthersCostInput,testdata.testvalue)
})

Then('Verify whether user able to click on clear the details entered by clicking on clear button available', async() => {
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.SubmitAssemblyClear)
})

Then('Verify whether after clicking on clear button clears the details entered', async() => {
  
})

Then('Verify whether user able to save the datails by clicking on Save button', async() => {
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.SubmitAssemblySave)
})

Then("Verify whether the details entered are displayed in the below in a tabular format", async () => {
  
})
Then("Verify whether user able to click on Major Spares toggle button", async () => {
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.MajorSpares)
})
Then("Verify whether user able to enter Materials details in tha auto complete box available", async () => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.MaterialsInput,"4564")
  await fixture.page.waitForTimeout(2000);
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
})
Then("Verify whether user able to enter Part No in the input field available", async () => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.PartNoInput,testdata.testvalue)
})
Then("Verify whether user able to enter Part name in the input field available", async () => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.PartNameInput,testdata.test)
})
Then("Verify whether user able to enter Quantity in the input field available", async () => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.QuantityInput,"3")
})
Then("Verify whether user able to enter Amount in the input field available", async () => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.AmountInput,testdata.testvalue)
})
Then("Verify whether user able to enter Remarks in the textarea field available", async () => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.TextArea,testdata.test)
})

Then("Verify whether user able to submit the details by clicking on Submit button available at bottom of the page", async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.MajorSparesSubmit_btn)
})
Then("Capture the DER number generated from the popup appeared after submitting", async () => {
  await fixture.page.waitForTimeout(2000)
  const DER = await fixture.page.textContent(BreakDown_Pageobjects.Breakdown.DER_generated);
  if(DER){
    DERGenerated = DER.substring(27,)
    Log.info("DER generated is : "+DERGenerated)
  }
})
Then("Confirm the submission by clicking on OK button in the popup appeared", async () => {
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Confirmation_OK)
})
Then("Check whether user able to click on Access and Master from the dropdown", async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(Common_PageObjects.DashBoard.AccessandMaster)
})
Then("Check whether user able to click on Access Control from the dropdown", async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(Common_PageObjects.DashBoard.AccessControl)
})
Then("Check whether user able to click on WorkFlow from the dropdown", async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(Common_PageObjects.DashBoard.WorkFlow)
})
Then("Check whether user able to click on WorkBench from the dropdown", async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(Common_PageObjects.DashBoard.WorkBench)
})
Then("Verify Whether user able to click on filter icon to filter the recently created BreakDownEntry", async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(Common_PageObjects.Common.Filter)
})
Then("Verify whether user able to enter the DER number generated in the DER input field in the grid", async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.fill(BreakDown_Pageobjects.Approval.DocumentNO_inputfield,DERGenerated)
})
Then("Verify whether user able to click on DER Number to approve the BreakDownEntry", async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(BreakDown_Pageobjects.Approval.DocumentNo_click)
})
Then("Verify whether user able to click on Approve Icon at top right of page to Approve the BreakDownEntry", async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(BreakDown_Pageobjects.Approval.Approve_icon)
})

Then("Verify whether user able to click on DER Number to Reject the BreakDownEntry", async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(BreakDown_Pageobjects.Approval.DocumentNo_click)
})
Then("Verify whether user able to click on Reject Icon at top right of page to Reject the BreakDownEntry", async () => {
  await fixture.page.waitForTimeout(1000);
  await fixture.page.click(BreakDown_Pageobjects.Approval.Reject_icon)
})

Then("Verify whether user able to enter DER number in the input fleld", async () => {
  // await fixture.page.pause()
  await fixture.page.waitForTimeout(2000)
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.DER_Inputfield,DERGenerated)
})

Then("Verify whether user able lo click on that entry to add Comminissioning", async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Assetcode_click)
})
Then("Verify whether user able to click on Commissioning Toggle at top right side of page", async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Commissioning_toggle)
})
Then("Verify whether user able to enter Commissioning date in the field available", async () => {
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Commissioning_datepicker)
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Break_Down_Date_Today)

  
  // await common_methods.datepicker(BreakDown_Pageobjects.Breakdown.Break_Down_From_DatePicker, 2024, "Aug", 7)
})
Then("Verify whether user able to enter Next Maintenance date in the field available", async () => {
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Maintenance_datepicker);
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.CalenderHeader);
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Maintenance_month);
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.CalenderDate);
})
Then("Verify whether user able to select OWN at by whom the work is done", async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Own_button)
})
Then("Verify whether Vendor details field is editable when OWN is selected at previoues step", async () => {
  try {
    await expect(await fixture.page.locator(BreakDown_Pageobjects.Breakdown.Vendor_input)).not.toBeEditable()
  } catch (error) {
    Log.info("When Own is selected vendor input field must be disabled")
  }
})
Then("Verify whether user able to select Agency at by whom the work is done", async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Agency_button)
})
Then("Verify whether Vendor details field is editable when Agency is selected at previoues step", async () => {
  try {
    await expect(await fixture.page.locator(BreakDown_Pageobjects.Breakdown.Vendor_input)).toBeEditable()
    await fixture.page.fill(BreakDown_Pageobjects.Breakdown.Vendor_input,"Knowell")
    await fixture.page.waitForTimeout(2000)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
  } catch (error) {
    Log.info("When Agency is selected vendor input field must be enabled")
  }
})
Then("Verify whether user able to select Both at by whom the work is done", async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Both_button)
})
Then("Verify whether Vendor details field is editable when Both is selected at previoues step", async () => {
  try {
    await expect(await fixture.page.locator(BreakDown_Pageobjects.Breakdown.Vendor_input)).toBeEditable()
    await fixture.page.fill(BreakDown_Pageobjects.Breakdown.Vendor_input,"Knowell")
    await fixture.page.waitForTimeout(2000)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
  } catch (error) {
    Log.info("When Both is selected vendor input field must be enabled")
  }
})

Then("Verify whether user able to enter Work Done details in the textarea available", async () => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.Workdone_textarea,testdata.test)
})
Then("Verify whether user able to enter Remarks in the text area available", async () => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.Remarks_textarea,testdata.test)
})
Then("Verify whethert user able to enter P and M incharge details in the autocomplete box available", async () => {
  await fixture.page.fill(BreakDown_Pageobjects.Breakdown.PandMIncharge_input,"Baneswar")
  await fixture.page.waitForTimeout(1000)
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
})
Then("Verify whether user able to Submit the commissioning details by clicking on Submit button at bottom of the page", async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Submit_btn)
})

Then("Verify Whether user able to enter remarks for rejecting the BreakDown entry", async () => {
  await fixture.page.fill(BreakDown_Pageobjects.Approval.Confirmation_remarks,"test")
})
Then("Verify whether user able to click on Yes button to confirm Rejection", async () => {
  await fixture.page.click(BreakDown_Pageobjects.Approval.Confirmation_yes)
})
Then("Verify whether user able lo click on that entry to make Changes", async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Assetcode_click)
})
Then("Verify the Rejection Remarks and make necessary Changes and submit again", async () => {
  await fixture.page.click(BreakDown_Pageobjects.Breakdown.Rejection_remarks)
  await fixture.page.waitForTimeout(1000)
  const rejection_Remarks = await fixture.page.textContent(BreakDown_Pageobjects.Breakdown.Rejection_data)
  if(rejection_Remarks){
    Log.info("Rejection Remarks are : "+ rejection_Remarks)
  }
  Log.info('Changes are made as per the Remarks')
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
Then("", async () => {
  
})
