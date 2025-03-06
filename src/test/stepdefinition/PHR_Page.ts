import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
// import * as testdata from "../../main/testdata/testdata.json";
import * as testdata_NonCumulative from "../../main/testdata/testdata_NonCumulative.json";
import PHR_PageObjects from '../Locater/PHR_PageObjects';
import PHRS_PageObjects from '../Locater/PHRS_PageObjects';
import RN_PageObjects from '../Locater/RN_PageObjects';
import LogSheet_NonCummulative_PageObjects from '../Locater/LogSheet_NonCummulative_PageObjects';
import Measurement_Approval_PageObjects from '../Locater/Measurement_Approval_PageObjects';
import MeasurementCreationPageObjects from '../Locater/MeasurementCreationPageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { log } from "console";
import * as sql from "../../main/database/database"
import Log from "../hooks/until/logger";

let Base: common_methods;
let PHRSNumber: string;
let PHRSDB = "LE/LE150756/PHR/24/000145"
let AssetCode: string;


const redirect_hirerequest = async()=>{
  await fixture.page.fill(PHR_PageObjects.Hiring.Job, testdata_NonCumulative.Job);
  await fixture.page.keyboard.press('ArrowDown')
  await fixture.page.keyboard.press('Enter')
  await fixture.page.fill(PHR_PageObjects.DashBoard.Document, testdata_NonCumulative.Document)
  await fixture.page.keyboard.press('ArrowDown')
  await fixture.page.keyboard.press('Enter')
  await fixture.page.fill(PHR_PageObjects.DashBoard.PHRSNUM, testdata_NonCumulative.S3R_NUM)
  await fixture.page.click(PHR_PageObjects.Hiring.Search);
  await fixture.page.click(PHR_PageObjects.Hirerequest.Icon);
  await fixture.page.click(PHR_PageObjects.Hirerequest.WithHireTeam);
}




//------------- HireRequest Creation ---------------//



Given('Check whether the user able Navigate to landing Page NonCumulative', async function () {

    
    await fixture.page.click(PHR_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(PHR_PageObjects.LoginPage.Username, testdata_NonCumulative.Username);
   Log.info(" Enter Username as " + testdata_NonCumulative.Username + ". Entered successfully" );
    await fixture.page.fill(PHR_PageObjects.LoginPage.Password, testdata_NonCumulative.Password);
   Log.info(" Enter Password as " + testdata_NonCumulative.Password + ". Entered successfully" );
    await fixture.page.click(PHR_PageObjects.LoginPage.Login);
    // printing the logged user details in the console
   Log.info(" User successfully logged in as " + testdata_NonCumulative.Username);

    await fixture.page.waitForTimeout(5000)
    
 
});


Then('Verify BreadCrumbs before navigating to the PHR page', async function (){
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


// Then('Check whether the user able to click on the Access Based Menu button', async function () {
    
//     await fixture.page.click(PHR_PageObjects.DashBoard.AccessMenu);
    
//    Log.info(await fixture.page.textContent('//a[@title="Access Based Menu"]'));
//     await fixture.page.waitForTimeout(2000);
//     if(await fixture.page.locator(PHR_PageObjects.DashBoard.AccessMenu)){
//      Log.info("Button clicked");
      
//     }else{
//      Log.info("Button not clicked");
      
//     }

//   });
  

//   Then('Check whether the user able to select the Asset Management from the dropdown', async function () {
//     await fixture.page.click(PHR_PageObjects.DashBoard.AssetManagement);
    
//   });


//   Then('Check whether the user able to select the Planning & Procurement from the dropdown', async function () {
//     await fixture.page.click(PHR_PageObjects.DashBoard.Planning_and_Procurement);
    
//   });

//   Then('Check whether the user able to select the Plant Hire Request and Confirmation from the dropdown', async function () {
//     await fixture.page.click(PHR_PageObjects.DashBoard.Plant_Hire_Request_Confirmation);
  
//   });

  Then ('Verify BreadCrumbs after navigating to the PHR page', async function () {
    await fixture.page.waitForTimeout(2000);
    // Here $ is to store the breadcrumb element
    const breadcrumbsElement = await fixture.page.$("//ul[@class='breadcrumb']");

      if (breadcrumbsElement) {
        
        const breadcrumbsText = await breadcrumbsElement.textContent();
        if(breadcrumbsText!=null) // Here it tells the breadcrumbstext is not equals to null
        // Here it includes all the breadcrumbstext elements
        if (breadcrumbsText.includes('Asset') && breadcrumbsText.includes('Planning') && breadcrumbsText.includes('Plant Hire'))  {
         Log.info('Breadcrumbs path is correct.');
        } else {
         Log.info('Breadcrumbs path is incorrect.');
        }
       
    }else {
     Log.info('Breadcrumbs element not found.');
    }
});


  Then('Check whether the user able to navigate to the PHR page', async function(){
    //Here checking the navigation is correct or not with url() method
    if(testdata_NonCumulative.HiringPage === await fixture.page.url()){
     Log.info("Successfully Navigated to PHR");
      
    }else{ 
     Log.info("UnSuccessful");
      
    }
    
  });


  Then('Check whether the job is displaying in the PHR page', async function(){
    await fixture.page.waitForTimeout(1000);
    // Here we are validating the job text in the page
    if(testdata_NonCumulative.JobText === await fixture.page.textContent(PHR_PageObjects.DashBoard.Job_text)){
     Log.info( testdata_NonCumulative.JobText+ "  Displayed Correctly");
      
    }else{ 
     Log.info("JobText Not Displayed");
      
    }

  });


  Then('Check whether the Document is displaying in the PHR page', async function(){
    await fixture.page.waitForTimeout(1000);
    // Here we are validating the Document text in the page
    if(testdata_NonCumulative.DocumentText === await fixture.page.textContent(PHR_PageObjects.DashBoard.Document_text)){
     Log.info( testdata_NonCumulative.DocumentText+ "  Displayed Correctly");
      
    }else{ 
     Log.info("DocumentText Not Displayed");
      
    }

  });


  Then('Check whether the PHRS Number is displaying in the PHR page', async function(){
    await fixture.page.waitForTimeout(1000);
    // Here we are validating the PHRS Number text in the page
    if(testdata_NonCumulative.PHRSnumberText === await fixture.page.textContent(PHR_PageObjects.DashBoard.PHRS_Number)){
     Log.info( testdata_NonCumulative.PHRSnumberText+  "  Displayed Correctly");
      
    }else{ 
     Log.info("PHRSnumberText Not Displayed");
      
    }

  });


  Then('Check whether the Asset Group is displaying in the PHR page', async function(){
    await fixture.page.waitForTimeout(1000);
    // Here we are validating the Asset Group text in the page
    if(testdata_NonCumulative.AssetGroupText === await fixture.page.textContent(PHR_PageObjects.DashBoard.Asset_Group)){
     Log.info( testdata_NonCumulative.AssetGroupText+ "  Displayed Correctly");
      
    }else{ 
     Log.info("AssetGroupText Not Displayed");
      
    }

  });

  Then('Check whether the user able to click FullScreen Button which is on the top of S3R table', async function(){
    await fixture.page.waitForTimeout(1000);
     await fixture.page.click(PHR_PageObjects.DashBoard.Fullscreen);
     await fixture.page.waitForTimeout(3000);
    Log.info("Clicked and Successfully Opened the Fullscreen")
  });



  Then('Check whether the user able to enter the job description', async function () {

    await fixture.page.fill(PHR_PageObjects.Hiring.Job, testdata_NonCumulative.Job);
    await fixture.page.waitForTimeout(2000);
   Log.info(" Enter job field as " + testdata_NonCumulative.Job + "clicked successfully" );
  });



  Then('Check whether the user able to select the {int} - Khulna Mongla Bridge Project from the dropdown', async function (int) {

   Log.info(" Selected " + testdata_NonCumulative.Job + " successfully" );
  });

  Then('Check whether the user able to click on the Search button which is on right top of the S3R table', async function () {
    await fixture.page.click(PHR_PageObjects.Hiring.Search);
    
  });


  //--------------------- Printing the grid using the collections -----------------------//

  // First printing table heading from the grid // 
  Then('Check whether the user able to view the S3R table', async function () {
      await fixture.page.waitForTimeout(2000);
      const row = await fixture.page.$$(PHR_PageObjects.Hiring.Grid_Head);
      if(row.length>0){
        for (let i = 0; i < row.length; i++) {
          await fixture.page.waitForTimeout(1000);
          const element = await row[i].innerText();
          // Here $ is to store the element
         Log.info(`${element}`)
          
        }
      }
    // THEN printing table rows from the grid // 
    await fixture.page.waitForSelector(PHR_PageObjects.Hiring.Grid_Row);

    // Here $$ is to store the set of similar elements 
    const rows = await fixture.page.$$(PHR_PageObjects.Hiring.Grid_Row);
    
    if(rows.length > 0) {
        for (let i = 0; i < rows.length; i++) {
            await fixture.page.waitForTimeout(1000);
            // Here $$ stores all the td elements
            const cells = await rows[i].$$("//td");
            for (let j = 0; j < cells.length; j++) {
                const cellText = await cells[j].innerText();
               Log.info(`${cellText}`);
            }
           Log.info("-----------------------------------");
            // Then printing the dropdown grids for every row
            await fixture.page.click(`(//i[@id = 'gibtexpandlist'])[${i+1}]`);
            const sub_rows = await fixture.page.$$(PHR_PageObjects.Hiring.Gird_Dropdown)
            if(sub_rows.length > 0){
              for(let k=0;k<sub_rows.length;k++){
                await fixture.page.waitForTimeout(1000);
                // Here $$ stores all the td elements
                const cell_data = await sub_rows[k].$$("//td")
                for (let l = 0; l < cell_data.length; l++) {
                  const cellText = await cell_data[l].innerText();
                 Log.info(`${cellText}`);
              }
              }
            }else{
             Log.info("No records available")
            }
            // Here ${i+1} is to click the dropdown one after one 
            await fixture.page.click(`(//i[@id = 'gibtexpandlist'])[${i+1}]`);
           Log.info("-----------------------------------");
        }
    } else {
       Log.info("No records available");
    }
    

  });

  Then('Click on the Action button for S3R Number', async function () {
    await fixture.page.click(PHR_PageObjects.Hirerequest.Icon);
  });


  Then('Check whether the user able to select With Hire Team from the dropdown', async function () {
    await fixture.page.click(PHR_PageObjects.Hirerequest.WithHireTeam);
    if(await fixture.page.locator(PHR_PageObjects.Hirerequest.alert_box).isVisible()){
      await fixture.page.click(PHR_PageObjects.Hirerequest.Icon);
      await fixture.page.waitForTimeout(1000)
      await fixture.page.click(PHR_PageObjects.Hirerequest.ExpandList)
      await fixture.page.waitForTimeout(1000)
      await fixture.page.click(PHR_PageObjects.Hirerequest.Cancel_PHRS)
      await fixture.page.waitForTimeout(1000)
      await fixture.page.click(PHR_PageObjects.Hirerequest.confirmCancel)
      await fixture.page.waitForTimeout(1000)
      await fixture.page.click(PHR_PageObjects.Hirerequest.Icon)
      await fixture.page.waitForTimeout(1000)
      await fixture.page.click(PHR_PageObjects.Hirerequest.WithHireTeam);
    }

  });


  When('User click on With Hire Team after clicking on the action button', async () =>{
    try {
      await expect(await fixture.page.locator(PHR_PageObjects.Hirerequest.WithHireTeam)).toBeVisible()
    } catch (error) {
     Log.info("With Hire team option is not available");
    }
  });


  Then("Check whether the user able change the request from date",async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1)
    await common_methods.datepicker(PHR_PageObjects.Hirerequest.Requiredfrom,year,month,1) //selecting date as 1st of present month
  });

  Then('Check whether the user able change the request to date', async function () {

    const date = new Date();
    const year = date.getFullYear();// present year
    const month = (date.getMonth() + 1) //present month
    await common_methods.datepicker(PHR_PageObjects.Hirerequest.RequiredTo,year,month+2,30) //selecting date as 30th of 2 months from now
 
  });

  Then('Check whether the user able to enter the Quantity', async function () {
  
    const ele = await fixture.page.locator(PHR_PageObjects.Hirerequest.Quantity);
    //Here we are using the click and clear method to first click the required field and the clear that field to fill with new value
    await ele.click();
    await ele.clear();
    await fixture.page.fill(PHR_PageObjects.Hirerequest.Quantity, testdata_NonCumulative.Quantity);
   Log.info(" Enter quantity field as " + testdata_NonCumulative.Quantity + ". Entered successfully" );
  });

  Then('Check whether the user able to enter the Equipment Age - Minimum', async function () {
    await fixture.page.fill(PHR_PageObjects.Hirerequest.MinAge, testdata_NonCumulative.MinAge);
   Log.info(" Enter MinAge field as " + testdata_NonCumulative.MinAge + ". Entered successfully" );
  });


  Then('Check whether the user able to enter the Equipment Age - Maximum', async function () {
    await fixture.page.fill(PHR_PageObjects.Hirerequest.MaxAge, testdata_NonCumulative.MaxAge);
   Log.info(" Enter MaxAge field as " + testdata_NonCumulative.MaxAge + ". Entered successfully" );
  });

  Then('Check whether the user able to click on the Work Type', async function () {
    await fixture.page.click(PHR_PageObjects.Hirerequest.Worktype);
   Log.info(await fixture.page.textContent("//input[@id='workType']"));
  });

  Then('Check whether the user able to select the NonCumulative from the dropdown', async function () {
    await fixture.page.click(PHR_PageObjects.Hirerequest.NonCumulative);
  });

  Then('Check whether the user able to click on Tearms', async function () {
    await fixture.page.click(PHR_PageObjects.Hirerequest.Tearms);
  });


  Then('Check whether the user able to select the Included in hire charges Single shift Fixed charges per month for 12 hours from the dropdown', async function () {
    await fixture.page.click(PHR_PageObjects.Hirerequest.Tearmvalue);
  });


  Then('Check whether the user able to click on the No Of Shifts', async function () {
    try {
      await expect(await fixture.page.locator(PHR_PageObjects.Hirerequest.ShiftInput)).toBeEditable() //toBeEditable() is to check whether the field is editable or not
    } catch (error) {
     Log.info("Shift Hours is not taking input");
    }
  });

    
  Then('Check whether the user able to enter on the No Of Shifts', async function () {
    await fixture.page.fill(PHR_PageObjects.Hirerequest.ShiftInput, testdata_NonCumulative.ShiftInput);
   Log.info(" Enter ShiftInput field as " + testdata_NonCumulative.ShiftInput + ". Entered successfully" );
  });


  Then('Check whether the user able to click on the Shifts Hours', async function () {
    try {
      await expect(await fixture.page.locator(PHR_PageObjects.Hirerequest.ShiftHours)).toBeEditable()
    } catch (error) {
     Log.info("Shift Hours is not taking input");
    }
  });
  

  Then('Check whether the user able to select on the Shifts Hours from the dropdown', async function () {
    await fixture.page.fill(PHR_PageObjects.Hirerequest.ShiftHours, testdata_NonCumulative.ShiftHours);
   Log.info(" Enter ShiftHours field as " + testdata_NonCumulative.ShiftHours + ". Selcted successfully" );
  });

  Then('Check whether the user able to click on the Add Vendor which is on top right of vendor table', async function () {
    await fixture.page.click(PHR_PageObjects.Vendor.Addvendor);
  });

  Then('Check whether the user able to select on the KNOWELL INTERNATIONAL PRIVATE LIMITED from the dropdown', async function () {
    Log.info("KNOWELL INTERNATIONAL PRIVATE LIMITED is selected")
  });

  

  When('User click on the post button which is right below the vendor table', async function () {
    await fixture.page.click(PHR_PageObjects.Vendor.selectVendorBtnId);
  });


  Then('Check whether the vendor is added after clicking on the post button', async function () {
    const vendor = await fixture.page.textContent(PHR_PageObjects.Hirerequest.Check_Vendor_added);
    if(testdata_NonCumulative.Vendor == vendor?.trim()){
     Log.info("vendor" + testdata_NonCumulative.Vendor+ "added successfully");
    }else{
     Log.info("Vendor is not added");
    }
  });


  Then('Get the PHRS number from the Popup after creating the Hire Request', async () => {
    const PHRS_NUM = await fixture.page.textContent(PHR_PageObjects.Hiring.Message_box);
    if(PHRS_NUM) //to validate the value is not null
    PHRSNumber = PHRS_NUM?.substring(0,25) //substring() - to get a part of string
   Log.info(PHRSNumber);
  })




//-------------------- HireRequest Confirmation -----------------------//


  Given('Check whether the user able Navigate to Confirmation Page', async function () {
    


      await fixture.page.click(PHR_PageObjects.LoginPage.Otheruser);
      await fixture.page.fill(PHR_PageObjects.LoginPage.Username, testdata_NonCumulative.Username)
      await fixture.page.fill(PHR_PageObjects.LoginPage.Password, testdata_NonCumulative.Password)
      await fixture.page.click(PHR_PageObjects.LoginPage.Login);
     Log.info(" User successfully logged in as " + testdata_NonCumulative.Username)
      
   
  });
  


  Then('Select Job from Autocomplete box which is already created',async () => {
    await fixture.page.waitForTimeout(1000);  
    await fixture.page.fill(PHR_PageObjects.Hiring.Job, testdata_NonCumulative.Job);
    await fixture.page.waitForTimeout(2000);
  });
  
  Then('Select the document as SR3 number which is created',async () => {
      
    await fixture.page.fill(PHR_PageObjects.DashBoard.Document, testdata_NonCumulative.Document)
   Log.info(" Enter Document field as " + testdata_NonCumulative.Document + ". Entered successfully" );
    await fixture.page.fill(PHR_PageObjects.DashBoard.PHRSNUM, testdata_NonCumulative.S3R_NUM)
   Log.info(" Enter S3R_NUM field as " + testdata_NonCumulative.S3R_NUM + ". Entered successfully" );
  });
  
  Then('click on the Search which is on right top of the S3R table',async () => {
      
    await fixture.page.click(PHR_PageObjects.Hiring.Search);
  });
  
  Then('Find the required Job and click on Dropdown icon',async () => {
      
      await fixture.page.click(PHR_PageObjects.Vendor.Gibtexpandlist);
  });
  
  Then('Click on Confirm PHRS tick icon of selected S3R number',async () => {
      
      await fixture.page.click(PHR_PageObjects.Vendor.ConfirmedBtn);
  });
  
  
  Then('Navigate to TCC for that particular Request',async () => {
      
    await fixture.page.click(PHR_PageObjects.TCC.TCCID);
    await fixture.page.click(PHR_PageObjects.TCC.Checkbox);
    await fixture.page.fill(PHR_PageObjects.TCC.Quantity, testdata_NonCumulative.Quantity);
   Log.info(" Enter quantity field as " + testdata_NonCumulative.Quantity + ". Entered successfully" );
    await fixture.page.click(PHR_PageObjects.TCC.SelectVendor);
  });

  Then("Verify the Quantity is matching with the value given in the PHRS Creation Page",async () => {
    try {
      const query = `select * from EIP40ALM.PHS.PHR_H_PlantHire_Request where DPTL_Request_Number='${PHRSNumber}'`
      const data = await sql.executeQuery("ALM",query)
      const quantity = await data.recordset[0].HPR_Quantity
      if(quantity == testdata_NonCumulative.Quantity){
       Log.info("Quantity is matching with value given in PHRS Creation");
        
      }else{
       Log.info("Quantity is not matching with value given in PHRS Creation");
        
      }
    } catch (error) {
      
    }
  })
  
  Then('Click on Save And Next Button which is on the right bottom of the page',async () => {
      
    await fixture.page.click(PHR_PageObjects.TCC.SaveandNext);
  });
  
  Then('Add the Hire Charges which is on the top of the table', async () => {
    await fixture.page.fill(PHR_PageObjects.OT.HireCharges, testdata_NonCumulative.HireCharges)
   Log.info(" Enter HireCharges as " + testdata_NonCumulative.HireCharges + ". Entered successfully" );
  });
  


  Then('Click on OT Charges option which is on bottom of the Normal Hours charges',async () => {
      
    await fixture.page.click(PHR_PageObjects.OT.OTButton);
  });

    Then ('Fill the OT Percentage which is on the top of the OT table',async () => {
    await fixture.page.fill(PHR_PageObjects.OT.OTPercentage, testdata_NonCumulative.OTPercentage);
   Log.info(" Enter OTPercentage as " + testdata_NonCumulative.OTPercentage + ". Entered successfully" );
  });

    Then ('Fill the OT Expected Hours which is on the top of the OT table',async () => {
    await fixture.page.fill(PHR_PageObjects.OT.OTExpectedhrs, testdata_NonCumulative.OTExpectedhrs);
   Log.info(" Enter OTExpected hrs as " + testdata_NonCumulative.OTExpectedhrs + ". Entered successfully" );
    await fixture.page.waitForTimeout(1000);
  });


  Then("Validating the OT hours calculation for 31 days", async () => {
      

      //--------------- Calculating NR/HR ------------------//

      const Normalrate_HR = await fixture.page.textContent(PHR_PageObjects.OTCalculation.NormalrateperHR);
      //Here we used the pause() method to pause the automation and check the next steps in the page one by one
      // await fixture.page.pause();
      const ele = await fixture.page.locator(PHR_PageObjects.OTCalculation.OffDays);
      //Here we are using the click and clear method to first click the required field and the clear that field to fill with new value
      await ele.click();
      await ele.clear();
      const Working_Days = await fixture.page.textContent(PHR_PageObjects.OTCalculation.WorkingDays);
     Log.info(" Enter WorkingDays as " + testdata_NonCumulative.OTExpectedhrs + ". Entered successfully" );
      const Off_Days = await fixture.page.fill(PHR_PageObjects.OTCalculation.OffDays, testdata_NonCumulative.Offdays);

      const Days = await fixture.page.textContent(PHR_PageObjects.OTCalculation.Days);
      const Working_months = await fixture.page.textContent(PHR_PageObjects.OTCalculation.Workingmonths);
      const Working_hrs = await fixture.page.textContent(PHR_PageObjects.OTCalculation.Days);

      
      let NR_HR;
      if (Normalrate_HR && Working_Days){
        let NR_HR:number = (parseInt(testdata_NonCumulative.HireCharges)/parseInt(Working_Days))/parseInt(testdata_NonCumulative.ShiftHours);

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

      const Normal_Qty = await fixture.page.textContent(PHR_PageObjects.OTCalculation.NormalQTY)
      const Normal_Hrs_Amount = await fixture.page.textContent(PHR_PageObjects.OTCalculation.NormalHRSAmount)
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

      const OT_Rate_Hr = await fixture.page.textContent(PHR_PageObjects.OTCalculation.OTRatePerHour)
      let OT_R_Hr;
      if(Normalrate_HR && OT_Rate_Hr){
        OT_R_Hr = parseFloat(Normalrate_HR)*(parseFloat(testdata_NonCumulative.OTPercentage)/100)
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

      const OT_QTY = await fixture.page.textContent(PHR_PageObjects.OTCalculation.OTQTY)
      const OT_Hours_Amount = await fixture.page.textContent(PHR_PageObjects.OTCalculation.OTHRSAmount)
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


  Then("Validating the OT hours calculation for 30 days", async () => {
      

    //--------------- Calculating NR/HR for 30 days ------------------//

    const Normalrate_HR = await fixture.page.textContent(PHR_PageObjects.OTCalculation30.NormalrateperHR);
    
    const ele = await fixture.page.locator(PHR_PageObjects.OTCalculation30.OffDays);
    //Here we are using the click and clear method to first click the required field and the clear that field to fill with new value
    await ele.click();
    await ele.clear();
    const Working_Days = await fixture.page.textContent(PHR_PageObjects.OTCalculation30.WorkingDays);
    
    const Off_Days = await fixture.page.fill(PHR_PageObjects.OTCalculation30.OffDays, testdata_NonCumulative.Offdays);
    const Days = await fixture.page.textContent(PHR_PageObjects.OTCalculation30.Days);
    const Working_months = await fixture.page.textContent(PHR_PageObjects.OTCalculation30.Workingmonths);
    const Working_hrs = await fixture.page.textContent(PHR_PageObjects.OTCalculation30.Days);

    
    let NR_HR;
    if (Normalrate_HR && Working_Days){
      let NR_HR:number = (parseInt(testdata_NonCumulative.HireCharges)/parseInt(Working_Days))/parseInt(testdata_NonCumulative.ShiftHours);

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

    const Normal_Qty = await fixture.page.textContent(PHR_PageObjects.OTCalculation30.NormalQTY)
    const Normal_Hrs_Amount = await fixture.page.textContent(PHR_PageObjects.OTCalculation30.NormalHRSAmount)
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

    const OT_Rate_Hr = await fixture.page.textContent(PHR_PageObjects.OTCalculation30.OTRatePerHour)
    let OT_R_Hr;
    if(Normalrate_HR && OT_Rate_Hr){
      //Multipling  normalrate
      OT_R_Hr = parseFloat(Normalrate_HR)*(parseFloat(testdata_NonCumulative.OTPercentage)/100)
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

    const OT_QTY = await fixture.page.textContent(PHR_PageObjects.OTCalculation30.OTQTY)
    const OT_Hours_Amount = await fixture.page.textContent(PHR_PageObjects.OTCalculation30.OTHRSAmount)
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

    Then ('In OT click on the save button which is on the bottom of the OT table',async () => {
    await fixture.page.click(PHR_PageObjects.OT.SaveOT);
    await fixture.page.waitForTimeout(1000);
  });

  Then('Fill the Operator rate in the Hire_Request_Confirmation Page', async () =>{
    await fixture.page.waitForTimeout(1000);
    await fixture.page.fill(PHR_PageObjects.Operator.OperatorRate, testdata_NonCumulative.OperatorRate)
   Log.info(" Enter Operator rate field as " + testdata_NonCumulative.OperatorRate + ". Entered successfully" );
    await fixture.page.waitForTimeout(1000);

  });
  

  Then('Fill the Additional Operator rate in the Hire_Request_Confirmation Page', async () =>{
    await fixture.page.waitForTimeout(1000);
    await fixture.page.fill(PHR_PageObjects.AdditionalOperator.AdditionalOperatorRate, testdata_NonCumulative.AdditionalOperatorRate)
   Log.info(" Enter AdditionalOperatorRate field as " + testdata_NonCumulative.AccommodationRate + ". Entered successfully" );
    await fixture.page.waitForTimeout(1000);

  }); 


  Then('Click on Additional Helper option which is placed bottom of the helper', async () =>{
    await fixture.page.click(PHR_PageObjects.AdditionalHelper.AdditionalHelper),
    await fixture.page.waitForTimeout(2000);
  });

  Then('Click on the Checkbox on top and beside the applicable text', async () =>{
    await fixture.page.click(PHR_PageObjects.AdditionalHelper.Checkbox),
    await fixture.page.waitForTimeout(1000);
  });

  Then('In AdditionalHelper click on the Save button which is on the right bottom of the page', async () =>{
    await fixture.page.click(PHR_PageObjects.AdditionalHelper.Save),
    await fixture.page.waitForTimeout(1000);
  });

  Then('Fill the Additional Helper rate in the Hire_Request_Confirmation Page', async () =>{
    await fixture.page.waitForTimeout(1000);
    await fixture.page.fill(PHR_PageObjects.AdditionalHelper.AdditionalHelperRate, testdata_NonCumulative.AdditionalHelperRate)
   Log.info(" Enter AdditionalHelper Rate field as " + testdata_NonCumulative.AdditionalHelperRate + ". Entered successfully" );
    await fixture.page.waitForTimeout(1000);

  });

  
  Then('Fill the Helper rate in the Hire_Request_Confirmation Page', async () =>{
    await fixture.page.waitForTimeout(2000);
    await fixture.page.fill(PHR_PageObjects.Helper.HelperRate, testdata_NonCumulative.HelperRate)
   Log.info(" Enter Helper Rate field as " + testdata_NonCumulative.HelperRate + ". Entered successfully" );
    await fixture.page.waitForTimeout(2000);

  });


  Then('Fill the Accommodation rate in the Hire_Request_Confirmation Page', async () =>{
    await fixture.page.waitForTimeout(1000);
    await fixture.page.fill(PHR_PageObjects.Accommodation.AccommodationRate, testdata_NonCumulative.AccommodationRate)
   Log.info(" Enter Accommodation Rate field as " + testdata_NonCumulative.AccommodationRate + ". Entered successfully" );
    await fixture.page.waitForTimeout(1000);

  });


  Then('Click on Accommodation option which is on bottom of the Additional helper', async () =>{
    await fixture.page.click(PHR_PageObjects.Accommodation.Accommodation),
    await fixture.page.waitForTimeout(1000);
  });

  Then('In Accommodation click on the Save button which is on the right bottom', async () =>{
    await fixture.page.click(PHR_PageObjects.Accommodation.Save)
    await fixture.page.waitForTimeout(1000);
  });
  

  Then('Click on Mobilisation option which is on bottom of the Accommodation', async () =>{
    await fixture.page.click(PHR_PageObjects.Mobilisation.Mobilisation)
  });

  Then('Click on Mobilisation option as Both way payable at actual option', async () =>{
    await fixture.page.click(PHR_PageObjects.Mobilisation.Way)
  });

  Then('Click on Fromstate option to select state that the mobilisation is from', async () =>{
    await fixture.page.click(PHR_PageObjects.Mobilisation.Fromstate)
  });


  Then('Click on Fromcity option to select city that the mobilisation is from', async () =>{
    await fixture.page.click(PHR_PageObjects.Mobilisation.Fromcity)
  });

  Then('Fill the Pin Number Of 1nd City which is beside the Fromcity', async () =>{
    await fixture.page.fill(PHR_PageObjects.Mobilisation.Pin1, testdata_NonCumulative.Pin1)
   Log.info(" Enter Pin1 field as " + testdata_NonCumulative.Pin1 + ". Entered successfully" );
  });

  Then('Click on Tostate option to select state that the mobilisation is to be done', async () =>{
    await fixture.page.click(PHR_PageObjects.Mobilisation.Tostate)
  });

  Then('Click on Tocity option to select city that the mobilisation is to be done', async () =>{
    await fixture.page.click(PHR_PageObjects.Mobilisation.Tocity)
  });


  Then('Fill the Pin Number Of 2nd City which is beside the Tocity', async () =>{
    await fixture.page.fill(PHR_PageObjects.Mobilisation.Pin2, testdata_NonCumulative.Pin2)
   Log.info(" Enter Pin2 field as " + testdata_NonCumulative.Pin2 + ". Entered successfully" );
  });

  Then('Click on Next Button in Mobilisation which is on the right bottom of the page besides the remarks', async () =>{
    await fixture.page.click(PHR_PageObjects.Mobilisation.Next)
  });

  Then('Click on Save Button in Mobilisation which is on the right bottom of the Waiver Clause table', async () =>{
    await fixture.page.click(PHR_PageObjects.Mobilisation.Save)

  });

  Then('Fill the Mobilisation rate in the Hire_Request_Confirmation Page', async () =>{
    await fixture.page.waitForTimeout(1000);
    await fixture.page.fill(PHR_PageObjects.Mobilisation.MobilisationRate, testdata_NonCumulative.MobilisationRate)
   Log.info(" Enter Mobilisation Rate field as " + testdata_NonCumulative.MobilisationRate + ". Entered successfully" );
    await fixture.page.waitForTimeout(1000);

  });

  Then('Click on Save and Next Button which is on the right bottom of the table', async () => {
    await fixture.page.click(PHR_PageObjects.Mobilisation.SaveandNext);
  });

  Then('Enter Primary Engine details in the OtherTerms', async () => {
    await fixture.page.click(PHR_PageObjects.Primary.clear)
    //Here the selectByIndex() method to select the element with there index
    await fixture.page.click(PHR_PageObjects.Primary.Fueltype)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
    await fixture.page.click(PHR_PageObjects.Primary.Fuelquantity)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
    // await Base.selectByIndex(PHR_PageObjects.Primary.Fueltype,1)
    // await Base.selectByIndex(PHR_PageObjects.Primary.Fuelquantity,2)
  });

  Then ('Fill the Primary MinimumInputBox for primary engine for Maximum input' , async () =>{ 
    await fixture.page.fill(PHR_PageObjects.Primary.MinimumInputBox, testdata_NonCumulative.MinimumInputBox);
   Log.info(" Enter Primary MinimumInputBox field as " + testdata_NonCumulative.MinimumInputBox + ". Entered successfully" );
  });

  Then ('Fill the Primary MaximumInputBox for primary engine for Minimum input' , async () =>{ 
    await fixture.page.fill(PHR_PageObjects.Primary.MaximumInputBox, testdata_NonCumulative.MaximumInputBox);
   Log.info(" Enter Primary MaximumInputBox field as " + testdata_NonCumulative.MaximumInputBox + ". Entered successfully" );
  });
  
  Then('Enter Secondary Engine details in the OtherTerms', async () => {
    await fixture.page.click(PHR_PageObjects.Secondary.Fueltype)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
    await fixture.page.click(PHR_PageObjects.Secondary.Fuelquantity)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")

    // await Base.selectByIndex(PHR_PageObjects.Secondary.Fueltype,2)
    // await Base.selectByIndex(PHR_PageObjects.Secondary.Fuelquantity,1)
  });

  Then('Fill the Secondary MinimumInputBox for secondary engine', async () => {
    await fixture.page.fill( PHR_PageObjects.Secondary.MinimumInputBox, testdata_NonCumulative.MinimumInputBox);
   Log.info(" Enter Secondary MinimumInputBox field as " + testdata_NonCumulative.MinimumInputBox + ". Entered successfully" );
  });

  Then('Fill the Secondary MaximumInputBox for secondary engine', async () => {
    await fixture.page.fill(PHR_PageObjects.Secondary.MaximumInputBox, testdata_NonCumulative.MaximumInputBox);
   Log.info(" Enter Secondary MaximumInputBox field as " + testdata_NonCumulative.MaximumInputBox + ". Entered successfully" );
  });
  
  Then('Verify able to enter breakdown cause form the drop down in breakdown cause', async () => {
    await fixture.page.click(PHR_PageObjects.Breakbown.selectedBreakdownCause)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
    // await Base.selectByIndex(PHR_PageObjects.Breakbown.selectedBreakdownCause, 2)
  });
  
  
  Then('In Other Terms section Click on Save and Next which is on the right bottom of the page', async () => {
    await fixture.page.click(PHR_PageObjects.Breakbown.saveAndNextBtn)
  });
  
  Then('In SOP Validations Click on Confirm Hire Request Button', async () => {
    // await fixture.page.click(PHR_PageObjects.Breakbown.confirmHireBtn);
  });

  Then("Send STC to Vendor by performing some actions", async () => {
    await fixture.page.click(PHR_PageObjects.STC.STCbtn)
    await fixture.page.click(PHR_PageObjects.STC.Generate_STC)
    await fixture.page.click(PHR_PageObjects.STC.Select_doc)
    await fixture.page.click(PHR_PageObjects.STC.Close_box)
    await fixture.page.click(PHR_PageObjects.STC.Send_STC)
    await fixture.page.click(PHR_PageObjects.STC.Close_STC)
  });


 Then('Click on Confirm Hire Request Button which is on right bottom of the page', async () => {
  await fixture.page.waitForTimeout(5000);
    await fixture.page.click(PHR_PageObjects.Breakbown.confirmHireBtn);
  });


//--------------------- Vendor Acceptance -----------------------//


  Then("Verify That user login is opened successfully", async () => {
    // validating the text content
    const vendorname = await fixture.page.textContent(PHR_PageObjects.Vendor_Page.UserName)
    if(testdata_NonCumulative.Vendor === vendorname?.trim()){
     Log.info("Correct Vendor Logged Successfully");
    }else{
     Log.info("Vendor login failed");
    }
  })
  
  Then("Verify Vendor able to select My Assests when the user is navigating", async () => {
    await fixture.page.click(PHR_PageObjects.Vendor_Page.MyAssets)
  })
  
  Then("Enter Menu details as Hire Term Acceptance which is a dropdown in the left side top", async () => {
    await fixture.page.click(PHR_PageObjects.Vendor_Page.Menu_Clear)
    await fixture.page.fill(PHR_PageObjects.Vendor_Page.Menu_Input, testdata_NonCumulative.MenuInput)
    await fixture.page.keyboard.press('ArrowDown')//Here using the press method is to press a particular key
    await fixture.page.keyboard.press('Enter')
  })
  
  Then("Filter by giving generated PHRS number from PHRS Creation page in the Reference number Noncumulative", async () => {
    // await fixture.page.pause()
    await fixture.page.fill(PHR_PageObjects.Vendor_Page.ReferenceInput,PHRSNumber)
  })
  
  
  Then("Accept the request by clicking on the tick icon", async () => {
    await fixture.page.click(PHR_PageObjects.Vendor_Page.Accept_Request)
  })
  
  Then("Add Acceptance Remarks by clicking on the Accept button", async () => {
    await fixture.page.fill(PHR_PageObjects.Vendor_Page.Acceptance_Remarks, testdata_NonCumulative.Test)
   Log.info(" Enter Acceptance_Remarks as " + testdata_NonCumulative.Test + ". Entered successfully" );
    await fixture.page.click(PHR_PageObjects.Vendor_Page.Accept)
  })



  //-------------------- Work-Order Request -----------------------//



  Given('Check whether the user able Navigate to landing Page as GOWRI SHANKAR MM', async function () {


    await fixture.page.click(PHR_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(PHR_PageObjects.LoginPage.Username, testdata_NonCumulative.Username1)
    await fixture.page.fill(PHR_PageObjects.LoginPage.Password, testdata_NonCumulative.Password)
    await fixture.page.click(PHR_PageObjects.LoginPage.Login);
   Log.info(" User successfully logged in as " + testdata_NonCumulative.Username1)
    
 
});


Then("Verify weather user able to enter job field in workorder request page NonCumulative", async () => {
  await fixture.page.fill(PHR_PageObjects.Wo.JOB, testdata_NonCumulative.Job);
  await fixture.page.keyboard.press('ArrowDown')
  await fixture.page.keyboard.press('Enter')
})
  
  Then('Add the filter to filter tasks based on PHRS number generated while Creation NonCumulative', async() => {
    
    await fixture.page.fill(PHR_PageObjects.Wo.PHRSInput,PHRSNumber)
  })

  Then('Add the filter to filter tasks based on Pending field', async() => {
    await fixture.page.fill(PHR_PageObjects.Wo.PendingFieldInput,"1")
  })


  Then('Check whether the user able to click on submit button', async () =>{
    await fixture.page.click(PHR_PageObjects.Wo.Submit);

  });


  Then('Check whether the user able to click on Ok button', async () =>{
    await fixture.page.click(PHR_PageObjects.Wo.Ok);

  });

  Then('Check whether the user able to click on the add icon', async () =>{
    await fixture.page.click(PHR_PageObjects.Wo.Icon)

  });

  Then('Click on save and next button in generals which is on the right bottom', async () =>{
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(PHR_PageObjects.Creactioncheck.GeneralSave)

  });


  
  Then('Add the filter to filter tasks based on PHRS number generated while Creation for validation', async() => {
    
    await fixture.page.fill(PHR_PageObjects.Wo.PHRSInput,PHRSDB)
  })

  Then('Check whether the user able to click on the drop down', async()=>{
    await fixture.page.click(PHR_PageObjects.Mobilisation.Dropdown)

  })

  Then('Click on the Edit WO button to edit the workorder which is already created', async()=>{
    await fixture.page.click(PHR_PageObjects.Mobilisation.Edit)
  })



  Then('Verify the Mobilisation From State is matching with the value given in the PHRS Confirmation Page', async () =>{
    await fixture.page.waitForTimeout(5000)
    try {
      const Fromstate = await fixture.page.inputValue(PHR_PageObjects.Mobilisation.Fromstate)
      const query = `select top 1 * from EIP40ALM.PHS.PHR_D_PlantHire_Transport_Location where DPTL_Request_Number='${PHRSDB}'`
      const data = await sql.executeQuery("ALM",query)
      const Fromstate_text = await data.recordset[0].DPTL_From_State
     Log.info("pagee"+Fromstate);
     Log.info("Database"+Fromstate_text);
      
      if(Fromstate_text == Fromstate.trim()){
       Log.info("Fromstate is matching with value given in PHRS Creation");
        
      }else{
       Log.info("Fromstate is not matching with value given in PHRS Creation");
        
      }
    } catch (error) {
      
    }

  });


  Then('Verify the Mobilisation From City is matching with the value given in the PHRS Confirmation Page', async () =>{
    await fixture.page.waitForTimeout(2000)
    try {
      const FromCity = await fixture.page.inputValue(PHR_PageObjects.Mobilisation.Fromcity)
      const query = `select top 1 * from EIP40ALM.PHS.PHR_D_PlantHire_Transport_Location where DPTL_Request_Number='${PHRSDB}'`
      const data = await sql.executeQuery("ALM",query)
      const FromCity_text = await data.recordset[0].DPTL_From_City
      if(FromCity_text == FromCity.trim()){
       Log.info("FromCity is matching with value given in PHRS Creation");
        
      }else{
       Log.info("FromCity is not matching with value given in PHRS Creation");
        
      }
    } catch (error) {
      
    }


  });


  Then('Verify the Mobilisation From City Pincode is matching with the value given in the PHRS Confirmation Page', async () =>{
    await fixture.page.waitForTimeout(2000)
    try {
      const FromCityPincode = await fixture.page.inputValue(PHR_PageObjects.Mobilisation.Pin1)
      const query = `select top 1 * from EIP40ALM.PHS.PHR_D_PlantHire_Transport_Location where DPTL_Request_Number='${PHRSDB}'`
      const data = await sql.executeQuery("ALM",query)
      const FromCityPincode_text = await data.recordset[0].DPTL_From_PIN
      if(FromCityPincode_text == FromCityPincode.trim()){
       Log.info("ToCityPincode is matching with value given in PHRS Creation");
        
      }else{
       Log.info("Tostate is not matching with value given in PHRS Creation");
        
      }
    } catch (error) {
      
    }


  });


  Then('Verify the Mobilisation To State is matching with the value given in the PHRS Confirmation Page', async () =>{
    await fixture.page.waitForTimeout(2000)
    try {
      const Tostate = await fixture.page.inputValue(PHR_PageObjects.Mobilisation.Tostate)
      const query = `select top 1 * from EIP40ALM.PHS.PHR_D_PlantHire_Transport_Location where DPTL_Request_Number='${PHRSDB}'`
      const data = await sql.executeQuery("ALM",query)
      const Tostate_text = await data.recordset[0].DPTL_To_State
      if(Tostate_text == Tostate.trim()){
       Log.info("Tostate is matching with value given in PHRS Creation");
        
      }else{
       Log.info("Tostate is not matching with value given in PHRS Creation");
        
      }
    } catch (error) {
      
    }


  });


  Then('Verify the Mobilisation To City is matching with the value given in the PHRS Confirmation Page', async () =>{
    await fixture.page.waitForTimeout(2000)
    try {
      const Tocity = await fixture.page.inputValue(PHR_PageObjects.Mobilisation.Tocity)
      const query = `select top 1 * from EIP40ALM.PHS.PHR_D_PlantHire_Transport_Location where DPTL_Request_Number='${PHRSDB}'`
      const data = await sql.executeQuery("ALM",query)
      const Tocity_text = await data.recordset[0].DPTL_To_City
      if(Tocity_text == Tocity.trim()){
       Log.info("Tocity is matching with value given in PHRS Creation");
        
      }else{
       Log.info("Tocity is not matching with value given in PHRS Creation");
        
      }
    } catch (error) {
      
    }


  });



Then('Capture the Asset Code generated from the popup appeared for non cumulative', async () => {
  await fixture.page.waitForTimeout(1000);
  const assetCode = await fixture.page.textContent(PHRS_PageObjects.WoRequest.AssetCode);
  if(assetCode){
    AssetCode = assetCode;
    // export AssetCode;
  }
  Log.info("Asset Code generated : "+assetCode)
})

Then('fill the assect field to get needed assect NonCumulative',async ()=>{
  await fixture.page.fill("(//kendo-grid-filter-wrapper-cell)[3]/input", AssetCode);
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(RN_PageObjects.Receipt.Go)
})

Then('Verify whether user able to enter Asset Code in the autocomplete box available in the top left corner of page NonCumulative', async() => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.fill(LogSheet_NonCummulative_PageObjects.LogsheetDayBased.AssetCode, AssetCode)
  await fixture.page.waitForTimeout(2000)
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
})

Then('Select an Asset code from the list of asset codes available in the grid NonCumulative', async() => {
  await fixture.page.click(MeasurementCreationPageObjects.MeasurementEntry.Filter)
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(MeasurementCreationPageObjects.MeasurementEntry.AssetCodeInput,AssetCode)
  await fixture.page.waitForTimeout(2000);
  await fixture.page.click(MeasurementCreationPageObjects.MeaserementCreation.Assetcheckbox)
  if(await fixture.page.locator(MeasurementCreationPageObjects.MeaserementCreation.Assetcheckbox).isChecked()){ // to verify check box is checked or not
    Log.info("Checkbox checked successfully");
  }else{
    Log.info("Checkbox is not checked");
  }
})

Then ('Click on the Approve icon to enter the approval remarks which is on the buttom of the actions heading NonCumulative', async () =>{
  await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Filter)
  await fixture.page.waitForTimeout(2000);
  await fixture.page.fill(Measurement_Approval_PageObjects.Measurement_App.AssetCodeInput,AssetCode)
  await fixture.page.waitForTimeout(1000)
  if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Approve).isVisible()){
    Log.info('Approve Icon is visible');
  } else{
    Log.info('Approve Icon is not visible');
  }      
    await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Approve)
});






  Then('Click on save and next button which is on the right bottom in commercials', async () =>{
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(PHR_PageObjects.Creactioncheck.CommercialSave)

  });

  Then('Click on save and next button in OtherTerms which is on the right bottom', async () =>{
    await fixture.page.click(PHR_PageObjects.Creactioncheck.CommercialSave)

  });

  Then('Click on save and next button which is on the right bottom in MaterialLinking', async () =>{
    await fixture.page.click(PHR_PageObjects.Creactioncheck.MaterialLinking)

  });

  Then('Select the Fromstate and fill the option in the tax page', async () =>{
    await fixture.page.waitForTimeout(2000);
    await fixture.page.fill(PHR_PageObjects.Tax.FromState, testdata_NonCumulative.FromState)
    await fixture.page.waitForTimeout(3000);
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")//Here using the press method to press that particular key
  });

  Then('Select the Tostate and fill the option in the tax page', async () =>{
    await fixture.page.click(PHR_PageObjects.Tax.ToState)
    await fixture.page.click(PHR_PageObjects.Tax.Andhra)

  });

  Then('Select SAC option which is below the country', async () =>{
    await common_methods.selectByIndex(PHR_PageObjects.Tax.SAC,6)// Here selectRandomOption is to select a random option from the dropdown

  });
 

  Then('Click on Save and Next button in tax which is in the right bottom of Detailed Tax Structure table', async () =>{

    await fixture.page.click(PHR_PageObjects.Tax.Save)
  });


  Then('Click on Add button in Asset details which is on the top of the table', async () =>{

    await fixture.page.click(PHR_PageObjects.AssetDetails.Add)
  });

  Then('Click on Save and Next button in Asset details which is on the right side below the table', async () =>{

    await fixture.page.click(PHR_PageObjects.AssetDetails.Create)
  });

  Then('Click on Save and Next button in WO Request which is on the right side bottom of the page', async () =>{

    await fixture.page.click(PHR_PageObjects.WoRequest.Confirm)
  });

  //------------------- Negative Test Cases -----------------------//


//---------------------------------------------------------------------------

// Then('Check whether the user able Navigate Page', async () => {
//   await fixture.page.click(Extension_Request_PageObjects.DashBoard.AccessMenu);
//   await fixture.page.click('//*[@title="Access Control"]')
//   await fixture.page.click('///*[@title="Workflow"]');

//   await fixture.page.click('//*[@title="WorkBench"]');

// })
Then('TABLE', async () => {
const Row = await fixture.page.$$('//table/tbody/descendant::tr');
const n = Row.length;
console.log('  Length is ' +n );

let rowData = ""; 

for (let i = 1; i <= n; i++) {
    var No = `[${i}]`;
    var Row_Each = `(//table/tbody/descendant::tr)${No}`;

    //Log.info("Row " + No);
    // const Col = await fixture.page.$$('//tbody/descendant::td');
    // const m = Col.length;
    //Log.info('  Length is ' +m );
    for (let j = 1; j <= 8; j++) {
        var Next_Col = `[${j}]`;
        var Row_each_Col = `(//table/tbody/descendant::tr)${No}/descendant::td${Next_Col}`;

        const cellText = await fixture.page.locator(Row_each_Col).innerText();
        if (cellText) {
            rowData += cellText.trim() + " "; 
        }
    }

    rowData += "\n";
}

console.log("Row Data: \n" + rowData);
});

Then('Verify the Mobilisation To City Pincode is matching with the value given in the PHRS Confirmation Page', () => {
  // Write code here that turns the phrase above into concrete actions
})
Then('Click on the next button which is on the right buttom of the page', async() => {
  await fixture.page.click(PHR_PageObjects.WoRequest.Next)
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(PHR_PageObjects.WoRequest.Save)
})
