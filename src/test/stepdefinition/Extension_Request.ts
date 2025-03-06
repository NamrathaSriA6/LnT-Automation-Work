import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as Extension_Request_testdata from "../../main/testdata/Extension_Request_testdata.json";
import Extension_Request_PageObjects from '../Locater/Extension_Request_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { log } from "console";
import Log from "../hooks/until/logger";

import * as testdata from "../../main/testdata/testdata.json"

let Base: common_methods;
let PHRSNumber: string;




//------------- Extension_Request --------------- //


Given('Navigate to Test Enviroment of Extension_Request', async function () {
  // await fixture.page.setViewportSize({ width: 1900, height:1000})


    await fixture.page.goto(Extension_Request_testdata.Environment)
    Base = new common_methods(fixture.page)

});


Given('Check whether the user able Navigate to landing in the Extension_Request Page', async function () {

    
    await fixture.page.click(Extension_Request_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Extension_Request_PageObjects.LoginPage.Username, Extension_Request_testdata.Username);
   Log.info(" Enter Username as " + Extension_Request_testdata.Username + ". Entered successfully" );
    await fixture.page.fill(Extension_Request_PageObjects.LoginPage.Password, Extension_Request_testdata.Password);
   Log.info(" Enter Password as " + Extension_Request_testdata.Password + ". Entered successfully" );
    await fixture.page.click(Extension_Request_PageObjects.LoginPage.Login);
    // printing the logged user details in the console
   Log.info(" User successfully logged in as " + Extension_Request_testdata.Username);
    
 
});

Then('Verify BreadCrumbs before navigating to the Extension_Request Page', async function (){
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


Then('Check whether the user able to click on the Access Based Menu button to get into Extension_Request', async function () {
    
    await fixture.page.click(Extension_Request_PageObjects.DashBoard.AccessMenu);
    await fixture.page.waitForTimeout(2000);
    if(await fixture.page.locator(Extension_Request_PageObjects.DashBoard.AccessMenu)){
     Log.info("Button clicked");
      
    }else{
     Log.info("Button not clicked");
      
    }

  });

  Then('Check whether the user able to select the Asset Management from the dropdown to get into Extension_Request', async function () {
    await fixture.page.click(Extension_Request_PageObjects.DashBoard.AssetManagement);
    
  });


  Then('Check whether the user able to select the Planning & Procurement from the dropdown to get into Extension_Request', async function () {
    await fixture.page.click(Extension_Request_PageObjects.DashBoard.Planning_and_Procurement);
    
  });

  Then('Check whether the user able to select the Extension Request from the dropdown', async function () {
    await fixture.page.click(Extension_Request_PageObjects.DashBoard.Extension_Request);
  
  });
  Then ('Verify BreadCrumbs after navigating to the Extension_Request Page', async function () {
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

  Then('Check whether the user able to navigate to the Extension_Request Page', async function(){
    //Here checking the navigation is correct or not with url() method
    if(Extension_Request_testdata.Extension_Request_Page === await fixture.page.url()){
     Log.info("Successfully Navigated to Extension_Request Page");
      
    }else{ 
     Log.info("UnSuccessful");
      
    }
    
  });
  Then('Check whether the job is displaying in the Extension_Request Page', async function(){
    await fixture.page.waitForTimeout(1000);
    // Here we are validating the job text in the page
    if(Extension_Request_testdata.JobText === await fixture.page.textContent(Extension_Request_PageObjects.DashBoard.Job_text)){
     Log.info( Extension_Request_testdata.JobText+ "  Displayed Correctly");
      
    }else{ 
     Log.info("Job_text Not Displayed");
      
    }

  })


  Then('Check whether the Document is displaying in the Extension_Request Page', async function(){
    await fixture.page.waitForTimeout(1000);
    // Here we are validating the Document text in the page
    if(Extension_Request_testdata.DocumentText === await fixture.page.textContent(Extension_Request_PageObjects.DashBoard.Document_text)){
     Log.info( Extension_Request_testdata.DocumentText+ "  Displayed Correctly");
      
    }else{ 
     Log.info("Document_text Not Displayed");
      
    }

  })


  Then('Check whether the PHRS Number is displaying in the Extension_Request Page', async function(){
    await fixture.page.waitForTimeout(1000);
    // Here we are validating the PHRS Number text in the page
    if(Extension_Request_testdata.PHRSnumberText === await fixture.page.textContent(Extension_Request_PageObjects.DashBoard.PHRS_Number)){
     Log.info( Extension_Request_testdata.PHRSnumberText+  "  Displayed Correctly");
      
    }else{ 
     Log.info("PHRS_Number Not Displayed");
      
    }

  })


  Then('Check whether the Asset Group is displaying in the Extension_Request Page', async function(){
    await fixture.page.waitForTimeout(1000);
    // Here we are validating the Asset Group text in the page
    if(Extension_Request_testdata.AssetGroupText === await fixture.page.textContent(Extension_Request_PageObjects.DashBoard.Asset_Group)){
     Log.info( Extension_Request_testdata.AssetGroupText+ "  Displayed Correctly");
      
    }else{ 
     Log.info("Asset_Group Not Displayed");
      
    }

  })

  Then('Check whether the user able to click on the Search button which is on right top of the S3R table in the Extension_Request Page', async function () {
    await fixture.page.click(Extension_Request_PageObjects.Extension_Request.Search);
    
  });


  Then('Check whether the user able to click FullScreen Button which is on the top of S3R table in the Page in the Extension_Request Page', async function(){
    await fixture.page.waitForTimeout(1000);
     await fixture.page.click(Extension_Request_PageObjects.DashBoard.Fullscreen);
     await fixture.page.waitForTimeout(3000);
    Log.info("Clicked and Successfully Opened the Fullscreen")
  });


  Then("Click on the filter icon to filter required Asset which is on the right top of the table and down to the search button", async () => {
    await fixture.page.click(Extension_Request_PageObjects.Extension_Request.Filter);
  });


  Then("Filter by giving generated PHRS number to get the main data to the top", async () => {
    await fixture.page.waitForTimeout(1000);
    await fixture.page.fill(Extension_Request_PageObjects.Extension_Request.PHER_Number, Extension_Request_testdata.PHRSNumber)
  });


  Then("Click on the Action button for extension request for a PHRS number which is in the last cell of the table row", async () =>{
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(Extension_Request_PageObjects.Extension_Request.Icon_click)

  });


  Then("Click on the calendar icon to give the required to date which is next to the required from field", async () => {
    await fixture.page.waitForTimeout(2000);
    await fixture.page.click(Extension_Request_PageObjects.Extension_Request.Calendar);
    await fixture.page.waitForTimeout(1000);
    await fixture.page.click(Extension_Request_PageObjects.Extension_Request.Today)
    // await fixture.page.click(Extension_Request_PageObjects.Extension_Request.March2024);
    // await fixture.page.waitForTimeout(1000);
    // await fixture.page.click(Extension_Request_PageObjects.Extension_Request.Year);
    // await fixture.page.waitForTimeout(1000);
    // await fixture.page.click(Extension_Request_PageObjects.Extension_Request.Jan);
    // await fixture.page.waitForTimeout(1000);
    // await fixture.page.click(Extension_Request_PageObjects.Extension_Request.Date);

  });

 Then("Click on the shift hours field to enter the shift hours", async () => {
  await fixture.page.fill(Extension_Request_PageObjects.Extension_Request.Shifthours, Extension_Request_testdata.ShitHours)

 });

  Then("Check whether the user able to click on the Create extension request button which is in the right button of the page", async function () {
    await fixture.page.click(Extension_Request_PageObjects.Extension_Request.CreateExtn);
    
  })






  

