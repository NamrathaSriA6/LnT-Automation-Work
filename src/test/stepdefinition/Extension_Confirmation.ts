import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as Extension_Confirmation_testdata from "../../main/testdata/Extension_Confirmation_testdata.json";
;
import Extension_Confirmation_PageObjects from '../Locater/Extension_Confirmation_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { log } from "console";
import Log from "../hooks/until/logger";
import * as testdata from "../../main/testdata/testdata.json"

let Base: common_methods;
let PHRSNumber: string;




//------------- Extension_Confirmation --------------- //


Given('Navigate to Test Enviroment of Extension_Confirmation', async function () {
  // await fixture.page.setViewportSize({ width: 1900, height:1000})


    await fixture.page.goto(Extension_Confirmation_testdata.Environment)
    Base = new common_methods(fixture.page)

});


Given('Check whether the user able Navigate to landing in the Extension_Confirmation Page', async function () {

    
    await fixture.page.click(Extension_Confirmation_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Extension_Confirmation_PageObjects.LoginPage.Username, Extension_Confirmation_testdata.Username);
   Log.info(" Enter Username as " + Extension_Confirmation_testdata.Username + ". Entered successfully" );
    await fixture.page.fill(Extension_Confirmation_PageObjects.LoginPage.Password, Extension_Confirmation_testdata.Password);
   Log.info(" Enter Password as " + Extension_Confirmation_testdata.Password + ". Entered successfully" );
    await fixture.page.click(Extension_Confirmation_PageObjects.LoginPage.Login);
    // printing the logged user details in the console
   Log.info(" User successfully logged in as " + Extension_Confirmation_testdata.Username);
    
 
});

Then('Verify BreadCrumbs before navigating to the Extension_Confirmation Page', async function (){
  await fixture.page.waitForTimeout(2000);

    // Here $ is to store the breadcrumb element
    const breadcrumbsElement = await fixture.page.$("//ul[@class='breadcrumb']");
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


Then('Check whether the user able to click on the Access Based Menu button to get into Extension_Confirmation', async function () {
    
    await fixture.page.click(Extension_Confirmation_PageObjects.DashBoard.AccessMenu);
    await fixture.page.waitForTimeout(2000);
    if(await fixture.page.locator(Extension_Confirmation_PageObjects.DashBoard.AccessMenu)){
     Log.info("Button clicked");
      
    }else{
     Log.info("Button not clicked");
      
    }

  });

  Then('Check whether the user able to select the Asset Management from the dropdown to get into Extension_Confirmation', async function () {
    await fixture.page.click(Extension_Confirmation_PageObjects.DashBoard.AssetManagement);
    
  });


  Then('Check whether the user able to select the Planning & Procurement from the dropdown to get into Extension_Confirmation', async function () {
    await fixture.page.click(Extension_Confirmation_PageObjects.DashBoard.Planning_and_Procurement);
    
  });

  Then('Check whether the user able to select the Extension Confirmation from the dropdown', async function () {
    await fixture.page.click(Extension_Confirmation_PageObjects.DashBoard.Extension_Confirmation);
  
  });
  Then ('Verify BreadCrumbs after navigating to the Extension_Confirmation Page', async function () {
    await fixture.page.waitForTimeout(2000);
    // Here $ is to store the breadcrumb element
    const breadcrumbsElement = await fixture.page.$("//ul[@class='breadcrumb']");

      if (breadcrumbsElement) {
        
        const breadcrumbsText = await breadcrumbsElement.textContent();
        if(breadcrumbsText!=null) // Here it tells the breadcrumbstext is not equals to null
        // Here it includes all the breadcrumbstext elements
        if (breadcrumbsText.includes('Asset') && breadcrumbsText.includes('Planning') && breadcrumbsText.includes('Extension'))  {
         Log.info('Breadcrumbs path is correct.');
        } else {
         Log.info('Breadcrumbs path is incorrect.');
        }
       
    }else {
     Log.info('Breadcrumbs element not found.');
    }
});

  Then('Check whether the user able to navigate to the Extension_Confirmation Page', async function(){
    //Here checking the navigation is correct or not with url() method
    if(Extension_Confirmation_testdata.Extension_Confirmation_Page === await fixture.page.url()){
     Log.info("Successfully Navigated to Extension_Confirmation Page");
      
    }else{ 
     Log.info("UnSuccessful");
      
    }
    
  });
  Then('Check whether the job is displaying in the Extension_Confirmation Page', async function(){
    await fixture.page.waitForTimeout(1000);
    // Here we are validating the job text in the page
    if(Extension_Confirmation_testdata.JobText === await fixture.page.textContent(Extension_Confirmation_PageObjects.DashBoard.Job_text)){
     Log.info( Extension_Confirmation_testdata.JobText+ "  Displayed Correctly");
      
    }else{ 
     Log.info("Job_text Not Displayed");
      
    }

  });


  Then('Check whether the user able to enter the job description in the Extension_Confirmation Page', async function () {

    await fixture.page.fill(Extension_Confirmation_PageObjects.Extension_Confirmation.Job, Extension_Confirmation_testdata.Job);
    await fixture.page.waitForTimeout(2000);
   Log.info(" Enter job field as " + Extension_Confirmation_testdata.Job + "clicked successfully" );
  });


  Then('Check whether the user able to click on the Search button which is on right top of the S3R table in the Extension_Confirmation Page', async function () {
    await fixture.page.click(Extension_Confirmation_PageObjects.DashBoard.Search);
    
  });

  Then('Click on the action for the extension request PHR number', async function () {
    await fixture.page.click(Extension_Confirmation_PageObjects.Extension_Confirmation.Edit);

    
  })


  Then('Click on the save and next button in the Extension_Confirmation Page', async()=>{
    await fixture.page.click(Extension_Confirmation_PageObjects.Extension_Confirmation.Save)


  })

  Then('Click on OT Charges option which is on bottom of the Normal Hours charges in the Extension_Confirmation Page',async () => {
      
    await fixture.page.click(Extension_Confirmation_PageObjects.OT.OTButton);
  });

    Then ('Fill the OT Percentage which is on the top of the OT table in the Extension_Confirmation Page',async () => {
    await fixture.page.fill(Extension_Confirmation_PageObjects.OT.OTPercentage, Extension_Confirmation_testdata.OTPercentage);
   Log.info(" Enter OTPercentage as " + Extension_Confirmation_testdata.OTPercentage + ". Entered successfully" );
  });

    Then ('Fill the OT Expected Hours which is on the top of the OT table in the Extension_Confirmation Page',async () => {
    await fixture.page.fill(Extension_Confirmation_PageObjects.OT.OTExpectedhrs, Extension_Confirmation_testdata.OTExpectedhrs);
   Log.info(" Enter OTExpected hrs as " + Extension_Confirmation_testdata.OTExpectedhrs + ". Entered successfully" );
    await fixture.page.waitForTimeout(1000);
  });


    Then("Validating the OT hours calculation for 31 days in the Extension_Confirmation Page", async () => {
        

        //--------------- Calculating NR/HR ------------------//

        const Normalrate_HR = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation.NormalrateperHR);
        //Here we used the pause() method to pause the automation and check the next steps in the page one by one
        // await fixture.page.pause();
        const ele = await fixture.page.locator(Extension_Confirmation_PageObjects.OTCalculation.OffDays);
        //Here we are using the click and clear method to first click the required field and the clear that field to fill with new value
        await ele.click();
        await ele.clear();
        const Working_Days = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation.WorkingDays);
       Log.info(" Enter WorkingDays as " + Extension_Confirmation_testdata.OTExpectedhrs + ". Entered successfully" );
        const Off_Days = await fixture.page.fill(Extension_Confirmation_PageObjects.OTCalculation.OffDays, Extension_Confirmation_testdata.Offdays);

        const Days = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation.Days);
        const Working_months = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation.Workingmonths);
        const Working_hrs = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation.Days);

        
        let NR_HR;
        if (Normalrate_HR && Working_Days){
          let NR_HR:number = (parseInt(Extension_Confirmation_testdata.HireCharges)/parseInt(Working_Days))/parseInt(Extension_Confirmation_testdata.ShiftHours);

         Log.info("From page"+Normalrate_HR)
          // Here the parseFloat() method is to give string as a float value

          NR_HR= parseFloat(Number(NR_HR).toFixed(2)); // toFixed() method is to give the float value of 2 decimals 
         Log.info("Calculated"+NR_HR)
          if(NR_HR === parseFloat(Normalrate_HR)){
           Log.info("Normal Rate per hour is correct")
    
          }else{
           Log.info("Normal Rate per hour is Incorrect")
          }
        }
        

        //--------------- Calculating Normal Hrs Amount ------------------//

        const Normal_Qty = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation.NormalQTY)
        const Normal_Hrs_Amount = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation.NormalHRSAmount)
       Log.info(Normal_Hrs_Amount);
        let NR_HR_Amount;
        if (Normal_Qty && Normalrate_HR && Normal_Hrs_Amount){
          NR_HR_Amount = parseFloat(Normal_Qty)*parseFloat(Normalrate_HR)
          NR_HR_Amount= parseFloat(Number(NR_HR_Amount).toFixed(2));
         Log.info("Normal Hrs Amount from website: "+ Normal_Hrs_Amount);
         Log.info("Normal Hrs Amount which is calculated: "+ NR_HR_Amount);
          
          if(NR_HR_Amount === parseFloat(Normal_Hrs_Amount)){
           Log.info("Normal Hours Amount is correct");
          }else{
           Log.info("Normal Hours Amount is Incorrect");
            
          }
        }

        //--------------- Calculating OTRate/HR ------------------//

        const OT_Rate_Hr = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation.OTRatePerHour)
        let OT_R_Hr;
        if(Normalrate_HR && OT_Rate_Hr){
          OT_R_Hr = parseFloat(Normalrate_HR)*(parseFloat(Extension_Confirmation_testdata.OTPercentage)/100)
          OT_R_Hr= parseFloat(Number(OT_R_Hr).toFixed(2));
         Log.info("OT Rate Hrs from webSite "+OT_Rate_Hr);
         Log.info("OT Rate Hrs which is calculated "+OT_R_Hr);
          
          if(parseFloat(OT_Rate_Hr) === OT_R_Hr){
           Log.info("OT Rate per Hr is Correct");
          }else{
           Log.info("OT Rate per Hr is InCorrect");
          }
        }

        //--------------- Calculating OT Hour Amount ------------------//

        const OT_QTY = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation.OTQTY)
        const OT_Hours_Amount = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation.OTHRSAmount)
       Log.info(OT_Hours_Amount);
        let OT_HR_Amount;
        if (OT_QTY && OT_Rate_Hr && OT_Hours_Amount){
          OT_HR_Amount = parseFloat(OT_QTY)*parseFloat(OT_Rate_Hr)
          OT_HR_Amount= parseFloat(Number(OT_HR_Amount).toFixed(2));
         Log.info("OT Hrs Amount from website: "+ OT_Hours_Amount);
         Log.info("OT Hrs Amount which is calculated: "+ OT_HR_Amount);
          if(OT_HR_Amount === parseFloat(OT_Hours_Amount)){
           Log.info("Normal Hours Amount is correct");
          }else{
           Log.info("Normal Hours Amount is Incorrect");
            
          }
        }

    });


    Then("Validating the OT hours calculation for 30 days in the Extension_Confirmation Page", async () => {
        

      //--------------- Calculating NR/HR for 30 days ------------------//

      const Normalrate_HR = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation30.NormalrateperHR);
      
      const ele = await fixture.page.locator(Extension_Confirmation_PageObjects.OTCalculation30.OffDays);
      //Here we are using the click and clear method to first click the required field and the clear that field to fill with new value
      await ele.click();
      await ele.clear();
      const Working_Days = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation30.WorkingDays);
      
      const Off_Days = await fixture.page.fill(Extension_Confirmation_PageObjects.OTCalculation30.OffDays, Extension_Confirmation_testdata.Offdays);
      const Days = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation30.Days);
      const Working_months = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation30.Workingmonths);
      const Working_hrs = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation30.Days);

      
      let NR_HR;
      if (Normalrate_HR && Working_Days){
        let NR_HR:number = (parseInt(Extension_Confirmation_testdata.HireCharges)/parseInt(Working_Days))/parseInt(Extension_Confirmation_testdata.ShiftHours);

       Log.info("From page"+Normalrate_HR)
        NR_HR= parseFloat(Number(NR_HR).toFixed(2));
       Log.info("Calculated"+NR_HR)
        if(NR_HR === parseFloat(Normalrate_HR)){
         Log.info("Normal Rate per hour is correct")

        }else{
         Log.info("Normal Rate per hour is Incorrect")
        }
      }
      

      //--------------- Calculating Normal Hrs Amount ------------------//

      const Normal_Qty = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation30.NormalQTY)
      const Normal_Hrs_Amount = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation30.NormalHRSAmount)
     Log.info(Normal_Hrs_Amount);
      let NR_HR_Amount;
      if (Normal_Qty && Normalrate_HR && Normal_Hrs_Amount){
        //Multipling the normal quantity and normal rate 
        NR_HR_Amount = parseFloat(Normal_Qty)*parseFloat(Normalrate_HR)
        NR_HR_Amount= parseFloat(Number(NR_HR_Amount).toFixed(2));
       Log.info("Normal Hrs Amount from website: "+ Normal_Hrs_Amount);
       Log.info("Normal Hrs Amount which is calculated: "+ NR_HR_Amount);
        
        if(NR_HR_Amount === parseFloat(Normal_Hrs_Amount)){
         Log.info("Normal Hours Amount is correct");
        }else{
         Log.info("Normal Hours Amount is Incorrect");
          
        }
      }

      //--------------- Calculating OTRate/HR ------------------//

      const OT_Rate_Hr = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation30.OTRatePerHour)
      let OT_R_Hr;
      if(Normalrate_HR && OT_Rate_Hr){
        //Multipling  normalrate
        OT_R_Hr = parseFloat(Normalrate_HR)*(parseFloat(Extension_Confirmation_testdata.OTPercentage)/100)
        OT_R_Hr= parseFloat(Number(OT_R_Hr).toFixed(2));
       Log.info("OT Rate Hrs from webSite "+OT_Rate_Hr);
       Log.info("OT Rate Hrs which is calculated "+OT_R_Hr);
        
        if(parseFloat(OT_Rate_Hr) === OT_R_Hr){
         Log.info("OT Rate per Hr is Correct");
        }else{
         Log.info("OT Rate per Hr is InCorrect");
        }
      }

      //--------------- Calculating OT Hour Amount ------------------//

      const OT_QTY = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation30.OTQTY)
      const OT_Hours_Amount = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation30.OTHRSAmount)
     Log.info(OT_Hours_Amount);
      let OT_HR_Amount;
      if (OT_QTY && OT_Rate_Hr && OT_Hours_Amount){
        OT_HR_Amount = parseFloat(OT_QTY)*parseFloat(OT_Rate_Hr)
        OT_HR_Amount= parseFloat(Number(OT_HR_Amount).toFixed(2));
       Log.info("OT Hrs Amount from website: "+ OT_Hours_Amount);
       Log.info("OT Hrs Amount which is calculated: "+ OT_HR_Amount);
        
        if(OT_HR_Amount === parseFloat(OT_Hours_Amount)){
         Log.info("Normal Hours Amount is correct");
        }else{
         Log.info("Normal Hours Amount is Incorrect");
          
        }
      }

  });


  Then("Validating the OT hours calculation for 29 days in the Extension_Confirmation Page", async () => {
        

    //--------------- Calculating NR/HR for 29 days ------------------//

    const Normalrate_HR = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation29.NormalrateperHR);
    
    const ele = await fixture.page.locator(Extension_Confirmation_PageObjects.OTCalculation29.OffDays);
    //Here we are using the click and clear method to first click the required field and the clear that field to fill with new value
    await ele.click();
    await ele.clear();
    const Working_Days = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation29.WorkingDays);
    
    const Off_Days = await fixture.page.fill(Extension_Confirmation_PageObjects.OTCalculation29.OffDays, Extension_Confirmation_testdata.Offdays);
    const Days = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation29.Days);
    const Working_months = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation29.Workingmonths);
    const Working_hrs = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation29.Days);

    
    let NR_HR;
    if (Normalrate_HR && Working_Days){
      let NR_HR:number = (parseInt(Extension_Confirmation_testdata.HireCharges)/parseInt(Working_Days))/parseInt(Extension_Confirmation_testdata.ShiftHours);

     Log.info("From page"+Normalrate_HR)
      NR_HR= parseFloat(Number(NR_HR).toFixed(2));
     Log.info("Calculated"+NR_HR)
      if(NR_HR === parseFloat(Normalrate_HR)){
       Log.info("Normal Rate per hour is correct")

      }else{
       Log.info("Normal Rate per hour is Incorrect")
      }
    }
    

    //--------------- Calculating Normal Hrs Amount ------------------//

    const Normal_Qty = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation29.NormalQTY)
    const Normal_Hrs_Amount = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation29.NormalHRSAmount)
   Log.info(Normal_Hrs_Amount);
    let NR_HR_Amount;
    if (Normal_Qty && Normalrate_HR && Normal_Hrs_Amount){
      //Multipling the normal quantity and normal rate 
      NR_HR_Amount = parseFloat(Normal_Qty)*parseFloat(Normalrate_HR)
      NR_HR_Amount= parseFloat(Number(NR_HR_Amount).toFixed(2));
     Log.info("Normal Hrs Amount from website: "+ Normal_Hrs_Amount);
     Log.info("Normal Hrs Amount which is calculated: "+ NR_HR_Amount);
      
      if(NR_HR_Amount === parseFloat(Normal_Hrs_Amount)){
       Log.info("Normal Hours Amount is correct");
      }else{
       Log.info("Normal Hours Amount is Incorrect");
        
      }
    }

    //--------------- Calculating OTRate/HR ------------------//

    const OT_Rate_Hr = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation29.OTRatePerHour)
    let OT_R_Hr;
    if(Normalrate_HR && OT_Rate_Hr){
      //Multipling  normalrate
      OT_R_Hr = parseFloat(Normalrate_HR)*(parseFloat(Extension_Confirmation_testdata.OTPercentage)/100)
      OT_R_Hr= parseFloat(Number(OT_R_Hr).toFixed(2));
     Log.info("OT Rate Hrs from webSite "+OT_Rate_Hr);
     Log.info("OT Rate Hrs which is calculated "+OT_R_Hr);
      
      if(parseFloat(OT_Rate_Hr) === OT_R_Hr){
       Log.info("OT Rate per Hr is Correct");
      }else{
       Log.info("OT Rate per Hr is InCorrect");
      }
    }

    //--------------- Calculating OT Hour Amount ------------------//

    const OT_QTY = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation29.OTQTY)
    const OT_Hours_Amount = await fixture.page.textContent(Extension_Confirmation_PageObjects.OTCalculation29.OTHRSAmount)
   Log.info(OT_Hours_Amount);
    let OT_HR_Amount;
    if (OT_QTY && OT_Rate_Hr && OT_Hours_Amount){
      OT_HR_Amount = parseFloat(OT_QTY)*parseFloat(OT_Rate_Hr)
      OT_HR_Amount= parseFloat(Number(OT_HR_Amount).toFixed(2));
     Log.info("OT Hrs Amount from website: "+ OT_Hours_Amount);
     Log.info("OT Hrs Amount which is calculated: "+ OT_HR_Amount);
      
      if(OT_HR_Amount === parseFloat(OT_Hours_Amount)){
       Log.info("Normal Hours Amount is correct");
      }else{
       Log.info("Normal Hours Amount is Incorrect");
        
      }
    }

  });



  Then ('In OT click on the save button which is on the bottom of the OT table in the Extension_Confirmation Page',async () => {
    await fixture.page.click(Extension_Confirmation_PageObjects.OT.SaveOT);
    await fixture.page.waitForTimeout(1000);
  });

  Then('Fill the Operator rate in the Extension_Confirmation Page', async () =>{
    await fixture.page.fill(Extension_Confirmation_PageObjects.Operator.OperatorRate, Extension_Confirmation_testdata.OperatorRate)
   Log.info(" Enter AdditionalOperatorRate field as " + Extension_Confirmation_testdata.OperatorRate + ". Entered successfully" );

  });

  Then('Click on Additional Operator option which is placed bottom of the Operator in the Extension_Confirmation Page', async () =>{
    await fixture.page.click(Extension_Confirmation_PageObjects.AdditionalOperator.AdditionalOperator),
    await fixture.page.waitForTimeout(2000);
  });

  Then('Click on the Checkbox on top in the Extension_Confirmation Page', async () =>{
    await fixture.page.click(Extension_Confirmation_PageObjects.AdditionalOperator.Checkbox),
    await fixture.page.waitForTimeout(1000);
  });

  Then('In Additional Operator click on the Save button which is on the right bottom of the page in the Extension_Confirmation Page', async () =>{
    await fixture.page.click(Extension_Confirmation_PageObjects.AdditionalOperator.Save),
    await fixture.page.waitForTimeout(1000);
  });



  Then('Fill the Additional Operator rate in the Extension_Confirmation Page', async () =>{
    await fixture.page.fill(Extension_Confirmation_PageObjects.AdditionalOperator.AdditionalOperatorRate, Extension_Confirmation_testdata.AdditionalOperatorRate)
   Log.info(" Enter AdditionalOperatorRate field as " + Extension_Confirmation_testdata.AdditionalOperatorRate + ". Entered successfully" );

  });


  Then('Fill the Helper rate in the Extension_Confirmation Page', async () =>{
    await fixture.page.fill(Extension_Confirmation_PageObjects.Helper.HelperRate, Extension_Confirmation_testdata.HelperRate)
   Log.info(" Enter Helper Rate field as " + Extension_Confirmation_testdata.HelperRate + ". Entered successfully" );

  });


  Then('Click on Additional Helper option which is placed bottom of the helper in the Extension_Confirmation Page', async () =>{
    await fixture.page.click(Extension_Confirmation_PageObjects.AdditionalHelper.AdditionalHelper),
    await fixture.page.waitForTimeout(2000);
  });

  Then('Click on the Checkbox on top and beside the applicable text in the Extension_Confirmation Page', async () =>{
    await fixture.page.click(Extension_Confirmation_PageObjects.AdditionalHelper.Checkbox),
    await fixture.page.waitForTimeout(1000);
  });

  Then('In AdditionalHelper click on the Save button which is on the right bottom of the page in the Extension_Confirmation Page', async () =>{
    await fixture.page.click(Extension_Confirmation_PageObjects.AdditionalHelper.Save),
    await fixture.page.waitForTimeout(1000);
  });

  Then('Fill the Additional Helper rate in the Extension_Confirmation Page', async () =>{
    await fixture.page.fill(Extension_Confirmation_PageObjects.AdditionalHelper.AdditionalHelperRate, Extension_Confirmation_testdata.AdditionalHelperRate)
   Log.info(" Enter AdditionalHelper Rate field as " + Extension_Confirmation_testdata.AdditionalHelperRate + ". Entered successfully" );

  });

  Then('Click on Accommodation option which is on bottom of the Additional helper in the Extension_Confirmation Page', async () =>{
    await fixture.page.click(Extension_Confirmation_PageObjects.Accommodation.Accommodation),
    await fixture.page.waitForTimeout(1000);
  });

  Then('Select the Accommodation option as Bachelor Accomodation provided by site in the Extension_Confirmation Page', async () =>{
    await fixture.page.click(Extension_Confirmation_PageObjects.Accommodation.Bachelor),
    await fixture.page.waitForTimeout(1000);
  });

  Then('In Accommodation click on the Save button which is on the right bottom in the Extension_Confirmation Page', async () =>{
    await fixture.page.click(Extension_Confirmation_PageObjects.Accommodation.Save)
    await fixture.page.waitForTimeout(1000);
  });

  Then('Fill the Accommodation rate in the Extension_Confirmation Page', async () =>{
    await fixture.page.fill(Extension_Confirmation_PageObjects.Accommodation.AccommodationRate, Extension_Confirmation_testdata.AccommodationRate)
   Log.info(" Enter AdditionalHelper Rate field as " + Extension_Confirmation_testdata.AccommodationRate + ". Entered successfully" );

  });

  Then('Click on Save and Next Button which is on the right bottom of the table in the Extension_Confirmation Page', async () => {
    await fixture.page.click(Extension_Confirmation_PageObjects.Mobilisation.SaveandNext);
  });

  Then('Enter Primary Engine details in the OtherTerms in the Extension_Confirmation Page', async () => {
    await fixture.page.click(Extension_Confirmation_PageObjects.Primary.clear)
    //Here the selectByIndex() method to select the element with there index
    await common_methods.selectByIndex(Extension_Confirmation_PageObjects.Primary.Fueltype,1)
    await common_methods.selectByIndex(Extension_Confirmation_PageObjects.Primary.Fuelquantity,2)
  });

  Then ('Fill the Primary MinimumInputBox for primary engine for Maximum input in the Extension_Confirmation Page' , async () =>{ 
    await fixture.page.fill(Extension_Confirmation_PageObjects.Primary.MinimumInputBox, Extension_Confirmation_testdata.MinimumInputBox);
   Log.info(" Enter Primary MinimumInputBox field as " + Extension_Confirmation_testdata.MinimumInputBox + ". Entered successfully" );
  });

  Then ('Fill the Primary MaximumInputBox for primary engine for Minimum input in the Extension_Confirmation Page' , async () =>{ 
    await fixture.page.fill(Extension_Confirmation_PageObjects.Primary.MaximumInputBox, Extension_Confirmation_testdata.MaximumInputBox);
   Log.info(" Enter Primary MaximumInputBox field as " + Extension_Confirmation_testdata.MaximumInputBox + ". Entered successfully" );
  });
  
  Then('Enter Secondary Engine details in the OtherTerms in the Extension_Confirmation Page', async () => {
    await common_methods.selectByIndex(Extension_Confirmation_PageObjects.Secondary.Fueltype,2)
    await common_methods.selectByIndex(Extension_Confirmation_PageObjects.Secondary.Fuelquantity,1)
  });

  Then('Fill the Secondary MinimumInputBox for secondary engine in the Extension_Confirmation Page', async () => {
    await fixture.page.fill( Extension_Confirmation_PageObjects.Secondary.MinimumInputBox, Extension_Confirmation_testdata.MinimumInputBox);
   Log.info(" Enter Secondary MinimumInputBox field as " + Extension_Confirmation_testdata.MinimumInputBox + ". Entered successfully" );
  });

  Then('Fill the Secondary MaximumInputBox for secondary engine in the Extension_Confirmation Page', async () => {
    await fixture.page.fill(Extension_Confirmation_PageObjects.Secondary.MaximumInputBox, Extension_Confirmation_testdata.MaximumInputBox);
   Log.info(" Enter Secondary MaximumInputBox field as " + Extension_Confirmation_testdata.MaximumInputBox + ". Entered successfully" );
  });
  
  Then('Verify able to enter breakdown cause form the drop down in breakdown cause in the Extension_Confirmation Page', async () => {
    await common_methods.selectByIndex(Extension_Confirmation_PageObjects.Breakbown.selectedBreakdownCause, 2)
  });
  
  Then('Verify able to enter breakdown deduction rate and Maintenance in the Extension_Confirmation Page', async () => {
    await fixture.page.fill(Extension_Confirmation_PageObjects.Breakbown.breakdownDeductionRate, Extension_Confirmation_testdata.Rate);
    await common_methods.selectByIndex(Extension_Confirmation_PageObjects.Breakbown.selectedMaintenanceType, 1)
   Log.info(" Enter breakdownDeductionRate field as " + Extension_Confirmation_testdata.Rate + ". Entered successfully" );
  });
  
  Then('In Other Terms section Click on Save and Next which is on the right bottom of the page in the Extension_Confirmation Page', async () => {
    await fixture.page.click(Extension_Confirmation_PageObjects.Breakbown.saveAndNextBtn)
  });
  




 Then('Click on Confirm Hire Request Button which is on right bottom of the page in the Extension_Confirmation Page', async () => {
  await fixture.page.waitForTimeout(5000);
    await fixture.page.click(Extension_Confirmation_PageObjects.Breakbown.confirmHireBtn);
  });
  
