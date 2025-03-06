import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as PHRS_Status_testdata from "../../main/testdata/PHRS_Status_testdata.json";
import PHRS_Status_PageObjects from '../Locater/PHRS_Status_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { log } from "console";
import * as sql from "../../main/database/database"
import Log from "../hooks/until/logger";


let Base: common_methods;
let PHRSNumber: string;



//------------- PHRS Status ---------------//


Given('Navigate to PHRS Status Test Enviroment', async function () {

    await fixture.page.goto(PHRS_Status_testdata.Environment)
    Base = new common_methods(fixture.page)

});


Given('Check whether the user able Navigate to PHRS Status landing Page', async function () {

    
    await fixture.page.click(PHRS_Status_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(PHRS_Status_PageObjects.LoginPage.Username, PHRS_Status_testdata.Username);
   Log.info(" Enter Username as " + PHRS_Status_testdata.Username + ". Entered successfully" );
    await fixture.page.fill(PHRS_Status_PageObjects.LoginPage.Password, PHRS_Status_testdata.Password);
   Log.info(" Enter Password as " + PHRS_Status_testdata.Password + ". Entered successfully" );
    await fixture.page.click(PHRS_Status_PageObjects.LoginPage.Login);
    // printing the logged user details in the console
   Log.info(" User successfully logged in as " + PHRS_Status_testdata.Username);

    await fixture.page.waitForTimeout(5000)
    
 
});


Then('Verify BreadCrumbs before navigating to the PHRS Status page', async function (){
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


Then('Check whether the user able to click on the Access Based Menu button to get into  the PHRS Status page', async function () {
    
    await fixture.page.click(PHRS_Status_PageObjects.DashBoard.AccessMenu);
    
  //  Log.info(await fixture.page.textContent('//a[@title="Access Based Menu"]'));
    await fixture.page.waitForTimeout(2000);
    if(await fixture.page.locator(PHRS_Status_PageObjects.DashBoard.AccessMenu)){
     Log.info("Button clicked");
      
    }else{
     Log.info("Button not clicked");
      
    }

  });
  

  Then('Check whether the user able to select the Asset Management from the dropdown to get into the PHRS Status page', async function () {
    await fixture.page.click(PHRS_Status_PageObjects.DashBoard.AssetManagement);
    
  });


  Then('Check whether the user able to select the Planning & Procurement from the dropdown to get into the PHRS Status page', async function () {
    await fixture.page.click(PHRS_Status_PageObjects.DashBoard.Planning_and_Procurement);
    
  });

  Then('Check whether the user able to select the PHRS Status from the dropdown to get into the PHRS Status page', async function () {
    await fixture.page.click(PHRS_Status_PageObjects.DashBoard.Plant_Hire_Request_Status);
  
  });

  Then ('Verify BreadCrumbs after navigating to the PHRS Status page', async function () {
    await fixture.page.waitForTimeout(2000);
    // Here $ is to store the breadcrumb element
    const breadcrumbsElement = await fixture.page.$("//ul[@class='breadcrumb']");

      if (breadcrumbsElement) {
        
        const breadcrumbsText = await breadcrumbsElement.textContent();
        if(breadcrumbsText!=null) // Here it tells the breadcrumbstext is not equals to null
        // Here it includes all the breadcrumbstext elements
        if (breadcrumbsText.includes('Asset') && breadcrumbsText.includes('Planning') && breadcrumbsText.includes('PHR'))  {
         Log.info('Breadcrumbs path is correct.');
        } else {
         Log.info('Breadcrumbs path is incorrect.');
        }
       
    }else {
     Log.info('Breadcrumbs element not found.');
    }
});


  Then('Check whether the user able to navigate to the PHRS Status page', async function(){
    //Here checking the navigation is correct or not with url() method
    if(PHRS_Status_testdata.PHRS_Status_Page === await fixture.page.url()){
     Log.info("Successfully Navigated to PHR");
      
    }else{ 
     Log.info("UnSuccessful");
      
    }
    
  });

  Then('Check whether the user able to select the dropdown from the Query type as summary', async()=>{
    await fixture.page.click(PHRS_Status_PageObjects.PHRStatus.Query_type)
    await fixture.page.waitForTimeout(2000);
    await fixture.page.keyboard.press('ArrowDown')
    await fixture.page.keyboard.press('Enter')
    // await fixture.page.click(PHRS_Status_PageObjects.PHRStatus.Summary)
    await fixture.page.waitForTimeout(2000);
    if(await fixture.page.locator(PHRS_Status_PageObjects.PHRStatus.Summary)){
     Log.info("Summary clicked");
      
    }else{
     Log.info("Summary not clicked");
      
    }

  })

  Then('Check whether the user able to select the IC from the dropdownthen', async()=>{
    await fixture.page.click(PHRS_Status_PageObjects.PHRStatus.IC)
    await fixture.page.click(PHRS_Status_PageObjects.PHRStatus.Transportation_Infrastructure_IC)

  })

  Then('Check whether the user able to enter the job code and select the particular job from the dropdown', async()=>{
    await fixture.page.fill(PHRS_Status_PageObjects.PHRStatus.Job, '150756')
    await fixture.page.keyboard.press('ArrowDown')
    await fixture.page.keyboard.press('Enter')
  
  })

  Then('Check whether the user able to click on the Go button', async()=>{
    await fixture.page.click(PHRS_Status_PageObjects.PHRStatus.Go_btn)
  })

  Then ('Click on the show items dropdown which is on the left side above the Asset details table in the PHRStatus page', async () => {
    await fixture.page.click(PHRS_Status_PageObjects.PHRStatus.Show)
    const Number = await fixture.page.locator(PHRS_Status_PageObjects.PHRStatus.Show)
    await Number.selectOption("5"); // selectoption() is to select a particular option from the dropdown

  });


 Then('Check whether the user able to click on the PHRS Number and on the details of that PHRS Number', async() =>{
  await fixture.page.click(PHRS_Status_PageObjects.PHRStatus.PHRS_Number)
  await fixture.page.waitForTimeout(2000);
    if(await fixture.page.locator(PHRS_Status_PageObjects.PHRStatus.PHRS_Number)){
     Log.info("PHRS_Number clicked");
      
    }else{
     Log.info("PHRS_Number not clicked");
      
    }

 })



    Then('Check whether the user able to click on the close button',async()=>{
      await fixture.page.click(PHRS_Status_PageObjects.PHRStatus.close)
      await fixture.page.waitForTimeout(2000);
    if(await fixture.page.locator(PHRS_Status_PageObjects.PHRStatus.close)){
     Log.info("Close icon clicked");
      
    }else{
     Log.info("Close icon not clicked");
      
    }
    })



      Then('Check whether the table is displaying in the PHRS Status page', async () => {
        if(await fixture.page.locator("//tbody //tr[@role='row'][1]").isVisible()){

          await fixture.page.waitForTimeout(5000)
          let PHRData: string[] = [];
          let PHRHeader: string[] = [];
      
          // Locate the header columns
          const rows = await fixture.page.$$("//tbody //tr[@role='row']"); // Replace with actual header XPath
          Log.info("Row size"+rows.length)
          
          let rowsize = rows.length>3 ? 3 : rows.length;

          const columns = await fixture.page.$$("//th[@role='columnheader']");

          // let columnSize = columns.length>10 ? 10 : columns.length;

          Log.info("Column Size" + columns.length)
          // await fixture.page.pause()
          // Loop through the columns
          for(let index=1; index<=rowsize ; index++){
              Log.info("____________________________________________________");
              await fixture.page.waitForTimeout(2000);
              for (let i = 1; i <= columns.length; i++) {
                  const string = await fixture.page.innerText(`//tbody //tr[@role='row'][${index}] // td [@role='gridcell'][${i}]`); // XPath index of Values
                  const string1 = await fixture.page.textContent(`(//th[@role='columnheader'])[${i}]`); // XPath index of PHRHeader

                  if(string)
                  PHRData.push(string.trim());
                  else
                  PHRData.push('NA')
                  if (string1) PHRHeader.push(string1);
                  else
                  PHRHeader.push('NA')
              }

              Log.info(`Hired_Owned Value from Page Size: ${PHRData.length}`);
              Log.info(`Hired_Owned header from Page Size: ${PHRHeader.length}`);

              for (let i = 0; i < PHRData.length; i++) {
                  const pageValue = PHRData[i];
                  const heading = PHRHeader[i];
                  
                  if (pageValue) {
                      Log.info(`Value of ${heading} = ${pageValue}`);
                  }
              }
              PHRData = [];
              PHRHeader = [];
              Log.info("____________________________________________________");
              await fixture.page.waitForTimeout(2000);
          }
        }else{
          Log.info('No Data Available')
        }
        
        });


        Then('Select the Query type fiels and clear the field to select the new type', async()=>{
          await fixture.page.click(PHRS_Status_PageObjects.PHRStatus.Query_type)
          await fixture.page.click(PHRS_Status_PageObjects.PHRStatus.Clear)
          await fixture.page.waitForTimeout(2000);
          if(await fixture.page.locator(PHRS_Status_PageObjects.PHRStatus.Clear)){
          Log.info("Clear icon clicked");
            
          }else{
          Log.info("Clear icon not clicked");
            
          }
            
        })


        Then('Check whether the user able to select the dropdown from the Query type as details', async()=>{
          await fixture.page.click(PHRS_Status_PageObjects.PHRStatus.Details)
          await fixture.page.waitForTimeout(2000);
          if(await fixture.page.locator(PHRS_Status_PageObjects.PHRStatus.Details)){
          Log.info("Details clicked");
            
          }else{
          Log.info("Details not clicked");
            
          }
      
        })


