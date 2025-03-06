import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as Movements_testdata from "../../main/testdata/Movements_Asset_testdata.json";
import Movements_Asset_PageObjects from '../Locater/Movements_Asset_Page_Objects';
import Common_PageObjects from "../Locater/Common_PageObjects";
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import cluster from "cluster";
import { log } from "winston";
import Log from "../hooks/until/logger";


let Base: common_methods;
let PDA_generated: string;
let PDC_generated: string;
let FMV_Value: string;


Given('Navigate to Test Enviroment of Movement', async function () {
  fixture.page.setViewportSize({ width:1900 , height:1000})
  await fixture.page.goto(Movements_testdata.Environment)
  Base = new common_methods(fixture.page)
  
  });

Given('Check whether the user able to Navigate to Landing Page', async function () {
    await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Common_PageObjects.LoginPage.Username,Movements_testdata.Movements_DA_DC_Username);
    await fixture.page.fill(Common_PageObjects.LoginPage.Password, Movements_testdata.Password);
    await fixture.page.click(Common_PageObjects.LoginPage.Login);
    console.log("User successfully logged in as " + Movements_testdata.Movements_DA_DC_Username);
});
Then('Check whether user able to navigate to Movements page', async function () {
    // await fixture.page.pause();
    await fixture.page.click(Common_PageObjects.DashBoard.AccessMenu);
    await fixture.page.click(Common_PageObjects.DashBoard.AssetManagement);
    await fixture.page.click(Common_PageObjects.DashBoard.Mobilization_Movements);
    await fixture.page.click(Common_PageObjects.DashBoard.Movement);
  }); 

  Then("Check whether user able to click on Asset at to right of page",async () => {
    await fixture.page.waitForSelector(Movements_Asset_PageObjects.DA.Asset_btn)
    await fixture.page.click(Movements_Asset_PageObjects.DA.Asset_btn);
  })
  
  Then('Check whether user able to click on the despatch advice', async function () {
    await fixture.page.waitForSelector(Movements_Asset_PageObjects.DA.DespatchAdvice)
    await fixture.page.click(Movements_Asset_PageObjects.DA.DespatchAdvice);
  });
  Then('Check whether the user is able to select the assest code from the dropdown', async function () {
    // await fixture.page.click(Movements_Asset_PageObjects.DA.MovementAssetCode);
    // await fixture.page.waitForTimeout(1000)
    // await fixture.page.fill(Movements_Asset_PageObjects.DA.MovementAssetCode, testdata.MovementsAssetCode);
    // await fixture.page.keyboard.press("ArrowDown")
     await fixture.page.click(Movements_Asset_PageObjects.DA.MovementAssetCode);
     await fixture.page.waitForTimeout(2000);
     await common_methods.ChooseOption();

  });
  Then('Check whether the user can successfully click on the "Go" button located within the Asset Movement interface', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.MovementsGoButton);
    await fixture.page.waitForTimeout(2000)
  });
  Then('Navigate to the "New - Asset - DA Request" section and verify if the user has the capability to access the source and destination fields', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.sourcedestination);
    await fixture.page.waitForTimeout(2000)
  });

  Then('check whether the jobcode is present or not', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.SourceJob);
    const Job_sorce_code = await fixture.page.textContent('//input[@id="ActxtboxGINJob"]');
    console.log(Job_sorce_code);
  });

  Then('click on the warehouse and check whether the code is there or not', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Sourcewarehouse);
    await (Movements_Asset_PageObjects.DA.Sourcewarehouse, Movements_testdata.Source_warehouse);
    await common_methods.ChooseOption();
   const text=await fixture.page.locator(Movements_Asset_PageObjects.DA.Sourcewarehouse)
   if(text){
      console.log(" Sourcewarehouse : " + text.textContent())
   }else{
      console.log("")
   }

});
Then('click on the country and check wheteher the country is there or not', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.SourceCountry);
    await common_methods.ChooseOption();
const element=await fixture.page.$$(Movements_Asset_PageObjects.DA.SourceCountry)
if (element.length>0) {
  console.log(element.length)
}else{

  console.log("not available")
}

  });
  Then('click on the state and check whether the state is there or not', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.SourceState);
    await common_methods.ChooseOption();
  });
  Then('click on the GST and Tax Registration Number and check whether is there or not', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.GSTNumber);
  });

  Then('check Contact Details is given in the input feild or not', async function () {
    await fixture.page.waitForTimeout(1000)
    await fixture.page.fill(Movements_Asset_PageObjects.DA.ContactDetails, Movements_testdata.Movements_ContactDetails);
});
Then('check Mobile Number is given in the input feild or not', async function () {
    await fixture.page.waitForTimeout(1000)
    await fixture.page.fill(Movements_Asset_PageObjects.DA.sourceMobilenumber, Movements_testdata.Movements_ContactNumber);
  });

  Then('check Email Address is given is valid format or not', async function () {
    await fixture.page.fill(Movements_Asset_PageObjects.DA.sourcemailaddress, Movements_testdata.Movements_emailaddress);
  });
  
  Then('click  on destination job code and check whether is the job code input is taking or not', async function () {

    await fixture.page.fill(Movements_Asset_PageObjects.DA.destination_Job_Input, Movements_testdata.Destinationjobcode);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press('ArrowDown')
    await fixture.page.keyboard.press('Enter')
});


Then('click on warehouse and fill it', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Destinationwareshouse);
    await common_methods.ChooseOption()
  });
  Then('click on country and give  the valid country name', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Destinationcountry);
    await common_methods.ChooseOption();
  });
  Then('click on the state and give the valid state name', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.DestinationState);
    await common_methods.ChooseOption();
  });
  Then('check Contact Details is given in the input feild is valid or not', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.DestinationName);
    // await fixture.page.waitForTimeout(10000)
    await fixture.page.fill(Movements_Asset_PageObjects.DA.DestinationName, Movements_testdata.DestinationContactdetails);
  });
  Then('check Mobile Number is given in the input feild is valid or not', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.DestinationMobileNumber);
    // await fixture.page.waitForTimeout(10000)
    await fixture.page.fill(Movements_Asset_PageObjects.DA.DestinationMobileNumber, Movements_testdata.DestinationContactNumber);
  });
  Then('check Email Address is given is valid format or wrong format', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.DestinationEmail);
    await fixture.page.waitForTimeout(2000)
    await fixture.page.fill(Movements_Asset_PageObjects.DA.DestinationEmail, Movements_testdata.Destinationemailaddress);
  });

Then ('Click on Accessories', async function () {
  await fixture.page.click(Movements_Asset_PageObjects.DA.Accessories);
});
  Then ('check whether user is able to enter the description or not',async function () {
    const text = await common_methods.RandomLetter();
    await fixture.page.fill(Movements_Asset_PageObjects.DA.Accessories_Description, text);
    
  });
  Then ('click on UDO and check user is able to fill the UDO code from the dropdown', async function () {
      await fixture.page.click(Movements_Asset_PageObjects.DA.Accessories_UOM);
      await fixture.page.waitForTimeout(1000)
      await common_methods.ChooseOption();

  });
  Then('click on quantity and check user is able to enter the quantity or not',async function () {
  await fixture.page.click(Movements_Asset_PageObjects.DA.Accessories_Quantity);
  await fixture.page.fill(Movements_Asset_PageObjects.DA.Accessories_Quantity,Movements_testdata.AccessoriesQuantity);
  });

  Then('click on the add button and check whether the data is being adding or not',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Accessories_Add);
    
  });
 

  Then('click on edit buttton and check wheteher the user is able edit the data',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Accessories_edit);
    await fixture.page.fill(Movements_Asset_PageObjects.DA.Accessories_Quantity,Movements_testdata.AccessoriessQuantities);
  });
  
  Then('click on update update button and the user is able update the data which is been edited',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Accessories_update); 
  });
  
  Then('click on the delete button and check the user is able to delete the unwanted files',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Accessories_delete)
  });

  Then ('go to Dispatch and check wheteher the user is able to enter the data or not', async function () {
    const value = await common_methods.RandomLetter();
    await fixture.page.fill(Movements_Asset_PageObjects.DA.Despatch, value)
  });

  Then ('go to the Remarks and check whether the user is able to enter remarks or not', async function () {
    const value = await common_methods.RandomLetter();
    await fixture.page.fill(Movements_Asset_PageObjects.DA.Remarks, value)
  });
  Then ('click on the Transportation',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Transportation)
    
  });
  Then ('check whether the user is able to take transport type from the drop dropdown',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.TransportationType)
    await fixture.page.fill(Movements_Asset_PageObjects.DA.TransportationType,'single')
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
  });
  Then('check whether the user is able to fill  Approx Weight in MT or not', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.ApproxWeight)
    await fixture.page.fill(Movements_Asset_PageObjects.DA.ApproxWeight,Movements_testdata.Approxmateweight);
  });
  Then ('check whether the user is able to fill Approx Distance in KM or not',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.ApproxDistance)
    await fixture.page.fill(Movements_Asset_PageObjects.DA.ApproxDistance,Movements_testdata.ApproxmateDiatance);
  });
  Then('check whether the user is able to take Dimension value from the drop dropdown', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Dimension)
    await common_methods.ChooseOption();
  });
  Then('check whether the user is able to fill Length or not', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Length)
    await fixture.page.fill(Movements_Asset_PageObjects.DA.Length,Movements_testdata.AccessoriesLength);
  });
  
  Then('check whether the user is able to fill Breadth or not', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Breadth)
    await fixture.page.fill(Movements_Asset_PageObjects.DA.Breadth,Movements_testdata.AccesssoriesBreadth);
  });
  Then('check whether the user is able to fill Height or not', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Height)
    await fixture.page.fill(Movements_Asset_PageObjects.DA.Height,Movements_testdata.AccessoriesHeight);
  });
  Then('check whether the user is able to fill Time To Destination or not', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.ReachDestination)
    await fixture.page.fill(Movements_Asset_PageObjects.DA.ReachDestination,Movements_testdata.AccessoriesReachDestination);
  });

  Then ('check whether the user is able to click despatchschedule FROM and select date from from the date picker', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Schedule_From_Input);
    await fixture.page.click(Movements_Asset_PageObjects.DA.Schedule_From_DatePicker);
    await fixture.page.click(Movements_Asset_PageObjects.DA.ScheduleFrom_Today);

    // await Base.
  });
  // Then("Verify whether date input field is editable and taking input",async () => {
    // try{
    //   await expect(await fixture.page.locator(Movements_Asset_PageObjects.Asset.Datepicker)).toBeEditable()
    // }catch (error){
    //   console.log("Date input field is not editable");
    // }
    //   })

  Then ('check whether the user is able to click despatchschedule TO and select date from the date picker', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.Dispatch_Schedule_To_Input);
    await fixture.page.click(Movements_Asset_PageObjects.DA.Dispatch_Schedule_To_DatePicker);
    await fixture.page.click(Movements_Asset_PageObjects.DA.Dispatch_ScheduleTo_Today);
  });


  Then('click on submit button', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.submit);
  });

  Then('Capture the PDA number generated from the popup appeared',async () => {
    const PDAGenerated = await fixture.page.textContent(Movements_Asset_PageObjects.DA.PDAgenerated)
    if(PDAGenerated){
      PDA_generated = PDAGenerated.trim();
    }
    Log.info("PDA number generated is "+PDA_generated)

  })

  Then ('check whether the user is able to choose the option called single Load from the drop down', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.TransportationType)
    
    await fixture.page.click(Movements_Asset_PageObjects.DA.Transport_option1);
  });

  Then ('check whether the user is able to choose the option called Multiple Load from the drop down', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.TransportationType)
    await fixture.page.click(Movements_Asset_PageObjects.DA.Transport_option2);
  });

  Then ('check whether the user is able to choose the option 3 from the drop down', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.TransportationType)
    await fixture.page.click(Movements_Asset_PageObjects.DA.Transport_option3);
  });

  Then ('check whether the user is able to choose the option 4 from the drop down', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DA.TransportationType)
    await fixture.page.click(Movements_Asset_PageObjects.DA.Transport_option4);
  });
  
  Then ('click on vechile cart', async function (){
    await fixture.page.click(Movements_Asset_PageObjects.DA.Shopping_Cart);
  });

  Then ('check whether the user is able to Choose Vehicle or not', async function () {

    const options1 = await fixture.page.$$('//div/div[2]/mat-selection-list/mat-list-option');
    if (options1.length > 0) {
        const randomIndex = Math.floor(Math.random() * options1.length);
        console.log(" List of Option count: " + options1.length);
        const selectedOptionText = await options1[randomIndex].innerText();
        console.log(" Selected Option: " + selectedOptionText);
        await fixture.page.waitForTimeout(1000);
        await fixture.page.fill(Movements_Asset_PageObjects.DA.Choosevechicle,selectedOptionText);}
  });

  Then ('check wheteher the user is able to click on selected option', async function (){
  
    await fixture.page.click(Movements_Asset_PageObjects.DA.SelectVechicle);
  });

  Then ('check whether the user is able to Choose more than 3 Vehicles', async function (){
  
    await fixture.page.click(Movements_Asset_PageObjects.DA.Vehicles_option1);
    await fixture.page.click(Movements_Asset_PageObjects.DA.Vehicles_option2);
    await fixture.page.click(Movements_Asset_PageObjects.DA.Vehicles_option3);
  });

  Then ('check wheteher the user is able to click on vechile button', async function (){
  
    await fixture.page.click(Movements_Asset_PageObjects.DA.Vehicles_button);
  });

  
  Then ('check whether the user is able to click on the post button', async function (){
  
    await fixture.page.click(Movements_Asset_PageObjects.DA. Selected_VechiclePost);
  });


  Then ('check whether the user is able to enter the Number of vechicles in input fields', async function (){
  
    await fixture.page.click(Movements_Asset_PageObjects.DA.Vechiclescount1);
    await fixture.page.fill(Movements_Asset_PageObjects.DA.Vechiclescount1,Movements_testdata.Vechiclenum1);
    await fixture.page.click(Movements_Asset_PageObjects.DA.Vechiclescount2);
    await fixture.page.fill(Movements_Asset_PageObjects.DA.Vechiclescount2,Movements_testdata.Vechiclenum2);
    await fixture.page.click(Movements_Asset_PageObjects.DA.Vechiclescount3);
    await fixture.page.fill(Movements_Asset_PageObjects.DA.Vechiclescount3,Movements_testdata.Vechiclenum3);
    await fixture.page.click(Movements_Asset_PageObjects.DA.Vechiclescount4);
    await fixture.page.fill(Movements_Asset_PageObjects.DA.Vechiclescount4,Movements_testdata.Vechiclenum4);
  });


  Then ('check whether the user is able to click on the vechicles delete button', async function (){
  
    await fixture.page.click(Movements_Asset_PageObjects.DA. Vechicletype_delete);
  });
  
  
  Then ('check whether the user is able to click on the vechicles Submit button', async function (){
  
    await fixture.page.click(Movements_Asset_PageObjects.DA. Vechiclesubmit);
  });
  
  Then ('check whether the user is able to click on the vechicles Success button', async function (){
  await fixture.page.click(Movements_Asset_PageObjects.DA. Successbutton);
  });
  
  Then('Check whether breadcrumb is visible or not', async () => {
   if (await fixture.page.locator(Common_PageObjects.Common.Breadcrums).isVisible){

     console.log('BreadCrumb is Visible')
   }
 else {
    console.log('BreadCrumb is not Visible') 
  }
});
Then('Check Whether breadcrumb is displayed correctly', async () => {  
  const BreadCrumb = await fixture.page.textContent(Common_PageObjects.Common.Breadcrums);
  const BreadCrumb_Text = 'Asset ManagementMobilization & MovementsMovement';
  if(BreadCrumb == BreadCrumb_Text){
    console.log('BreadCrumb is displaying correctly')
  } else[
    console.log('BreadCrumb is not displaying correctly')
  ]
});
Then ('check whether breadcrumb is visible if user navigates to previous page',async function name() {
  await fixture.page.goBack();
  if(await fixture.page.locator("//ul[@class='breadcrumb']").isVisible){
    console.log('BreadCrumb is Visible')
   }else{
    console.log('BreadCrumb is not Visible') 
   }
});


//*************************************************** */
//*******************Delivery Challan**************** */

Then('Check whether user able to navigate to Movements page to deliverychallan', async function () {
    await fixture.page.click(Common_PageObjects.DashBoard.AccessMenu);
  await fixture.page.click(Common_PageObjects.DashBoard.AssetManagement);
  await fixture.page.click(Common_PageObjects.DashBoard.Mobilization_Movements);
  await fixture.page.click(Common_PageObjects.DashBoard.Movement);
  }); 
  Then('check whether the user is able to navigate to the  Delivery challan', async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DC.DeliveryChallan);
});

Then('check whether the the user is able to click on the Go button',async function() {
  await fixture.page.waitForTimeout(1000)
    await fixture.page.click(Movements_Asset_PageObjects.DC.Deliverychallan_Go);
});

Then("Verify whether user able to Click on Filter Icon", async () => {
    await fixture.page.click(Common_PageObjects.Common.Filter)
})

Then("Verify whether user able to enter PDA generated in DA number field", async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.fill(Movements_Asset_PageObjects.DC.DANumber_input,PDA_generated)
})


Then ('click on create DC',async function name() {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.hover(Movements_Asset_PageObjects.DC.code);
    await fixture.page.click(Movements_Asset_PageObjects.DC.create_Dc); 
    });


Then ('check whether the user is able to click on the DC Essentials',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DC.DCEssentials);    
});
Then ('check whether the user is abe to click on the Number of DCS and fill the input feild',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DC.NumberofDCS);    
    await fixture.page.fill(Movements_Asset_PageObjects.DC.NumberofDCS, Movements_testdata.NumberofDC);
});
Then('Verify whether user able to capture the FMV Value form the DC Essentials Page',async () => {
    const FMVValue = await fixture.page.inputValue(Movements_Asset_PageObjects.DC.FMV_value)
    if(FMVValue){
        FMV_Value = FMVValue.trim();
        Log.info("FMV value from DC Essentials is "+FMV_Value)
    }
})
Then ('click on save DC',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DC.Save_Dc);    
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(Movements_Asset_PageObjects.DC.SuccessOK);
});



Then('check whether the user is able to navigate to the LR and Load',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DC.LRandLoad); 
});

Then('click on the Load Details',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DC.Loaddetails);
    
});
Then('check whether the user is able to fill the input field of LR Number',async function () {
    await fixture.page.click(Movements_Asset_PageObjects.DC.LRNumber);
    await fixture.page.fill(Movements_Asset_PageObjects.DC.LRNumber, Movements_testdata.LRnumber);
});
Then ('check whether the user is able to click LRDATE and select date from the date picker', async function () {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate();
    await common_methods.datepicker(Movements_Asset_PageObjects.DC.LRDate,year, month, (day-5))
});
Then ('check whether the user is able to fill the input field of Vehicle Number',async function name() {
    await fixture.page.click(Movements_Asset_PageObjects.DC.VechicleNumber);
    await fixture.page.fill(Movements_Asset_PageObjects.DC.VechicleNumber, Movements_testdata.vechiclenumber); 
});

Then('check whether the user is able to fill the input field of Transporter',async () => {
    await fixture.page.fill(Movements_Asset_PageObjects.DC.Transporter, Movements_testdata.Transportor)
})

Then("check whether the user is able to fill the input field of FMV",async () => {
    await fixture.page.fill(Movements_Asset_PageObjects.DC.FMV_input, FMV_Value)
})
Then("check whether the currency field is taking default value",async () => {
    
})
Then("check whether the user is able to fill Frieght to PayPaid from the drop down",async () => {
    await fixture.page.click(Movements_Asset_PageObjects.DC.FrieghttoPayPaid)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
})
Then("check whether the user is able to fill the input field of Freight Amount",async () => {
    await fixture.page.fill(Movements_Asset_PageObjects.DC.FreightAmount, Movements_testdata.FreightAmount)
})
Then("Verify whether user able to click on load details Icon",async () => {
    await fixture.page.click(Movements_Asset_PageObjects.DC.LoadDetails)
})
Then("Verify whether user able to enter description in the Load Details",async () => {
    await fixture.page.fill(Movements_Asset_PageObjects.DC.Description,'test')
})
Then("Verify whether user able to enter Quantity in the Load Details",async () => {
    await fixture.page.fill(Movements_Asset_PageObjects.DC.Quantity,'1')
})
Then("Verify whether user able to enter FMV value in the Load Details",async () => {
    await fixture.page.fill(Movements_Asset_PageObjects.DC.LoadFMV,FMV_Value)
})
Then("Verify whether user able to Save the load Details",async () => {
    await fixture.page.click(Movements_Asset_PageObjects.DC.SaveLoadDetails)
})

Then("Verify whether user able to click on Accessories Icon",async () => {
    await fixture.page.click(Movements_Asset_PageObjects.DC.Accessories)
})

Then("Verify whether user able to edit the Accessories", async () => {
    await fixture.page.click(Movements_Asset_PageObjects.DC.EditAccessories)
})
Then("Verify whether user able to enter description in the Accessories",async () => {
    await fixture.page.fill(Movements_Asset_PageObjects.DC.Description,'test')
})
Then('Verify whether user able to edit description in the Accessories',async () => {
  await fixture.page.fill(Movements_Asset_PageObjects.DC.Description,'test1')
})
Then("Verify whether user able to enter Quantity in the Accessories",async () => {
    await fixture.page.fill(Movements_Asset_PageObjects.DC.Quantity,'1')
})

Then("Verify whether user able to Save the Accessories",async () => {
    await fixture.page.click(Movements_Asset_PageObjects.DC.SaveAccesories)
})
Then("Click on Submit Load details to submit",async () => {
    await fixture.page.click(Movements_Asset_PageObjects.DC.SubmitLoad)
})

Then('Check whether user able to capture the PDC number generated from the popup', async () => {
    const PDC = await fixture.page.textContent(Movements_Asset_PageObjects.DC.PDCGenerated);
    if(PDC){
        PDC_generated = PDC.trim();
        Log.info("PDC generated is "+PDC_generated)
    }

    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(Movements_Asset_PageObjects.DC.SuccessOK);
})


//******************************************************* */
//******************** Receipt Note********************** */

Given('Check whether the user able to Navigate to Landing Page of RN_Commissioning',async () => {
  await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Common_PageObjects.LoginPage.Username,Movements_testdata.Movements_RN_Commssioning_Username);
    await fixture.page.fill(Common_PageObjects.LoginPage.Password, Movements_testdata.Password);
    await fixture.page.click(Common_PageObjects.LoginPage.Login);
    console.log("User successfully logged in as " + Movements_testdata.Movements_DA_DC_Username);
})

Then('Filter the required Asset by giving the PDC generated from the DeliveryChallan',async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.fill(Movements_Asset_PageObjects.RN.DCNumber_input,PDC_generated)
})

Then('Click on the plus button to create the Receipt_RN for the filtered Asset',async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.hover(Movements_Asset_PageObjects.RN.Hover)
  await fixture.page.click(Movements_Asset_PageObjects.RN.Create);
})
Then("Verify the Status of Asset is pending or not",async () => {
  let status = await fixture.page.textContent(Movements_Asset_PageObjects.RN.Status);
  if(status)
  status= status.trim() //Here checking the status before proceeding and then proceeding for further steps 
  if(status == 'Pending'){
     Log.info("Status is "+status+" Proceed");
  }else{
    Log.info("We can not proceed further");
  }
})
Then('Click on the action button which is on the left side of the status to create RN', async function () {
  await fixture.page.click(Movements_Asset_PageObjects.RN.Action);     
});

Then('Click on Yes toggle to enable commissioning for that Asset',async () => {
  await fixture.page.click(Movements_Asset_PageObjects.RN.YesToggle)
})
Then('Click on the calendar iron to set the RN date',async () => {
  await fixture.page.click(Movements_Asset_PageObjects.RN.Calendar)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Movements_Asset_PageObjects.RN.Today)
})

Then("Verify the Status of Asset changed to RN Taken or not",async () => {
  let status = await fixture.page.textContent(Movements_Asset_PageObjects.RN.Status);
  if(status)
  status= status.trim()
  if(status == 'RN Taken'){
     Log.info("Status changed to "+status); //here checking if the status is changed or not 
  }else{
     Log.info("Status Does not change");
  }
})


//*********************************************************** */
//*************************Commissioning********************* */

Then('Click on the plus button to create the Commissioning for the filtered Asset',async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.hover(Movements_Asset_PageObjects.Commissioning.Hover)
  await fixture.page.click(Movements_Asset_PageObjects.Commissioning.Create_Commissioning);
})

Then('Filter the required Asset by giving the PDC generated from the DeliveryChallan Commissioning',async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.fill(Movements_Asset_PageObjects.Commissioning.DCNumber_input,PDC_generated)
})

Then('Click on the calendar icon to set the Commissioning date which is below the accessories table general',async () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()+1
  const day = date.getDate()
  await common_methods.datepicker(Movements_Asset_PageObjects.Commissioning.Calendar,year,month,day)
})
Then('',async () => {
  
})
Then('',async () => {
  
})
Then('',async () => {
  
})
Then('',async () => {
  
})
Then('',async () => {
  
})
Then('',async () => {
  
})
Then('',async () => {
  
})