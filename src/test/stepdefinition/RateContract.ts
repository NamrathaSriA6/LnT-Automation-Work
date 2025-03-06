import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as RC_testdata from "../../main/testdata/RateContract_testdata.json";
import RateContract_PageObjects from '../Locater/RateContract_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { Console, log, table } from "console";
import { findSourceMap } from "module";
import Log from "../hooks/until/logger";



let Base: common_methods;
let submittedRFPNumber: string;

Given('Navigate to Test Enviroment of Rate Contract Page', async function () {
    // await fixture.page.setViewportSize({ width: 1900, height:950})

    await fixture.page.goto(RC_testdata.Environment)
    Base = new common_methods(fixture.page)

});


Given('Check whether user able to navigate to landing page of RateContract Page', async function () {

    
    await fixture.page.click(RateContract_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(RateContract_PageObjects.LoginPage.Username, RC_testdata.Username);
   Log.info(" Enter Username as " + RC_testdata.Username + ". Entered successfully" );
    await fixture.page.fill(RateContract_PageObjects.LoginPage.Password, RC_testdata.Password);
   Log.info(" Enter Password as " + RC_testdata.Password + ". Entered successfully" );
    await fixture.page.click(RateContract_PageObjects.LoginPage.Login);
    // printing the logged user details in the console
   Log.info(" User successfully logged in as " + RC_testdata.Username)
    
});


Then('Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in RateContract page', async() => {
    await fixture.page.click(RateContract_PageObjects.DashBoard.AccessMenu);
    await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(RateContract_PageObjects.DashBoard.AccessMenu)){
         Log.info("GoArrow was clicked");
          
          }else{
         Log.info("GoArrow not clicked");
          
          }
  })
  
  Then('Check whether the user able to select the Asset Management from the dropdown in RateContract page', async() => {
    await fixture.page.click(RateContract_PageObjects.DashBoard.AssetManagement);
    await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(RateContract_PageObjects.DashBoard.AssetManagement)){
         Log.info("AssetManagement is clicked");
          
          }else{
         Log.info("AssetManagement not clicked");
          
          }
    })
  
  Then('Check whether the user able to select the Masters from the dropdown in RateContract page', async() => {
    await fixture.page.click(RateContract_PageObjects.DashBoard.Masters)
    await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(RateContract_PageObjects.DashBoard.Masters)){
         Log.info("Operation and Maintenance is clicked");
          
          }else{
         Log.info("Operation and Maintenance not clicked");
          
          }
  })
  
  Then('Check whether the user able to select the Rate Contract from the dropdown in RateContract page', async() => {
    await fixture.page.click(RateContract_PageObjects.DashBoard.Rate_Contract)
    await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(RateContract_PageObjects.DashBoard.Rate_Contract)){
         Log.info("Rate Contract was clicked");
          
          }else{
         Log.info("Rate Contract not clicked");
          
          }
    })


  //   Then ('Verify BreadCrumbs after navigating to the PHR page', async function () {
  //     await fixture.page.waitForTimeout(2000);
  //     // Here $ is to store the breadcrumb element
  //     const breadcrumbsElement = await fixture.page.$("//ul[@class='breadcrumb']");
  
  //       if (breadcrumbsElement) {
          
  //         const breadcrumbsText = await breadcrumbsElement.textContent();
  //         if(breadcrumbsText!=null) // Here it tells the breadcrumbstext is not equals to null
  //         // Here it includes all the breadcrumbstext elements
  //         if (breadcrumbsText.includes('Asset') && breadcrumbsText.includes('Planning') && breadcrumbsText.includes('Plant Hire'))  {
  //          Log.info('Breadcrumbs path is correct.');
  //         } else {
  //          Log.info('Breadcrumbs path is incorrect.');
  //         }
         
  //     }else {
  //      Log.info('Breadcrumbs element not found.');
  //     }
  // });
  


    Then('Check whether the user able to navigate to the RateContract page', async function(){
      //Here checking the navigation is correct or not with url() method
      if(RC_testdata.RateContract === await fixture.page.url()){
       Log.info("Successfully Navigated to RateContract");
        
      }else{ 
       Log.info("UnSuccessful Navigated to RateContract");
        
      }
      
    })

    Then("Verify whether user able to upload Excel File in the File upload box",async () => {
        await fixture.page.waitForTimeout(2000);
        await fixture.page.setInputFiles(RateContract_PageObjects.RateContract.FileUpload,"src/main/Attatchments/RCData724855.xlsx");
        await fixture.page.waitForTimeout(2000);

    })




    //####################### SearchRC #############################//


    Then("Check whether the user able to click on the SearchRC button which is on the top left besides UploadRC button",async()=> {
      await fixture.page.click(RateContract_PageObjects.RateContract.Search_RC_btn)
    })


    Then("Check whether the user able to select the group code from the dropdown",async()=> {
      await fixture.page.waitForTimeout(2000);
      await fixture.page.fill(RateContract_PageObjects.RateContract.Groupcode, RC_testdata.Assetcode)
      await fixture.page.waitForTimeout(1000);
      await fixture.page.keyboard.press("ArrowDown")
      await fixture.page.keyboard.press("Enter")
      await fixture.page.waitForTimeout(1000);
    })


    Then("Check whether the user able to click on the search button which is on the top right corner of RateContract page",async()=> {
      await fixture.page.click(RateContract_PageObjects.RateContract.Search_btn)
      await fixture.page.waitForTimeout(3000);
    })

    Then("Check whether user able to print the print the table", async () => {

      const Table = await fixture.page.$$('//table/tbody/descendant::tr')
      const n = Table.length;
     Log.info(' Length : '+n);

      const Table_Heading = await fixture.page.locator('//table/descendant::thead').textContent();

      
      
     Log.info(Table_Heading);
      

      for(let i=1; i<=n; i++){
        var Sno = (`[${i}]`)
        const Row = '(//table/tbody/descendant::tr)' +Sno
        
       Log.info(await fixture.page.locator(Row).innerText())

      }


      
    })


    Then("Check whether the user able to click on the With_Attachment button which is beside the All button",async()=> {
      await fixture.page.click(RateContract_PageObjects.RateContract.With_Attachment_btn)
      await fixture.page.waitForTimeout(3000);
    })


    Then("Check whether the user able to click on the WithOut_Attachment button which is beside the With_Attachment button",async()=> {
      await fixture.page.click(RateContract_PageObjects.RateContract.Without_Attachment_btn)
      await fixture.page.waitForTimeout(3000);
    })


    Then("Check whether the user able to click on the Active button which is beside the WithOut_Attachment button",async()=> {
      await fixture.page.click(RateContract_PageObjects.RateContract.Active)
      await fixture.page.waitForTimeout(3000);
      await fixture.page.click(RateContract_PageObjects.RateContract.Active)
    })



    Then("Click on the Toggle View icon which is on the right top of the details that are displayed",async()=> {
      await fixture.page.click(RateContract_PageObjects.RateContract.Icon)
      await fixture.page.waitForTimeout(3000);
      await fixture.page.click(RateContract_PageObjects.RateContract.Icon)
    })



    Then("Check whether the user able to click on the All button which is below the capacity field",async()=> {
      await fixture.page.click(RateContract_PageObjects.RateContract.All_btn)
      await fixture.page.waitForTimeout(3000);
    })


    Given('Check whether the user able Navigate to PHR Creation landing Page', async function () {

    
      await fixture.page.click(RateContract_PageObjects.LoginPage.Otheruser);
      await fixture.page.fill(RateContract_PageObjects.LoginPage.Username, RC_testdata.Username2);
     Log.info(" Enter Username as " + RC_testdata.Username + ". Entered successfully" );
      await fixture.page.fill(RateContract_PageObjects.LoginPage.Password, RC_testdata.Password);
     Log.info(" Enter Password as " + RC_testdata.Password + ". Entered successfully" );
      await fixture.page.click(RateContract_PageObjects.LoginPage.Login);
      // printing the logged user details in the console
     Log.info(" User successfully logged in as " + RC_testdata.Username);
      
   
  });


  Then('Check whether the user able to enter the job description in PHR Page', async function () {

    await fixture.page.fill(RateContract_PageObjects.PHRS.Job, RC_testdata.Job);
    await fixture.page.waitForTimeout(2000);
   Log.info(" Enter job field as " + RC_testdata.Job + "clicked successfully" );
  });


  Then('Check whether the user able to select the {int} Project from the dropdown', async function (int) {

   Log.info(" Selected " + RC_testdata.Job + " successfully" );
  });


  Then('Check whether the user able to enter the asset code and select the required asset code from the dropdown', async function () {

    await fixture.page.fill(RateContract_PageObjects.PHRS.Assetcode, RC_testdata.Assetcode);
    await fixture.page.waitForTimeout(2000);
   Log.info(" Enter job field as " + RC_testdata.Job + "clicked successfully" );
  });


  Then('Click on the Action button for S3R Number in PHR Page', async function () {
    await fixture.page.click(RateContract_PageObjects.PHRS.Action);
  });


  Then('Check whether user able to fill the L&T Contact Person Name field', async () =>{
    await fixture.page.fill(RateContract_PageObjects.PHRS.PersonName, RC_testdata.PersonName);
    await fixture.page.waitForTimeout(1000);
   Log.info(" Enter job field as " + RC_testdata.PersonName + "clicked successfully" );

  });


  Then('Check whether user able to fill the L&T Contact Person Mobile Number field', async () =>{
    await fixture.page.fill(RateContract_PageObjects.PHRS.MobileNoInput, RC_testdata.MobileNoInput);
    await fixture.page.waitForTimeout(1000);
   Log.info(" Enter MobileNoInput field as " + RC_testdata.MobileNoInput + "clicked successfully" );

  });


  Then('Check whether user able to fill the L&T Contact Person Email ID field', async () =>{
    await fixture.page.fill(RateContract_PageObjects.PHRS.EmailId, RC_testdata.EmailId);
    await fixture.page.waitForTimeout(1000);
   Log.info(" Enter EmailId field as " + RC_testdata.EmailId + "clicked successfully" );

  });


  Then('Check whether user able to fill the L&T Mail CC field', async () =>{
    await fixture.page.fill(RateContract_PageObjects.PHRS.MailCc, RC_testdata.MailCc);
    await fixture.page.waitForTimeout(1000);
   Log.info(" Enter MailCc field as " + RC_testdata.MailCc + "clicked successfully" );

  });







