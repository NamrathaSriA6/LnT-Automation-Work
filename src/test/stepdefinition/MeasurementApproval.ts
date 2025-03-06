import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as Measurement_Approval_testdata from "../../main/testdata/Measurement_Approval_testdata.json";
import * as testdata from "../../main/testdata/testdata.json";
import Measurement_Approval_PageObjects from '../Locater/Measurement_Approval_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { Console, log } from "console";
import { findSourceMap } from "module";
import { appendFileSync } from "fs";
import Log from "../hooks/until/logger";

let Base: common_methods;
let submittedRFPNumber: string;
// let assetCode = "13716XPH"

Given('Navigate to Test Enviroment of Measurement Approval page', async function () {
    // await fixture.page.setViewportSize({ width: 1900, height:950})

    await fixture.page.goto(Measurement_Approval_testdata.Environment)
    Base = new common_methods(fixture.page)

});

Given('Check whether the user able Navigate to Measurement_Approval Page', async function () {
    await fixture.page.click(Measurement_Approval_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Measurement_Approval_PageObjects.LoginPage.Username, Measurement_Approval_testdata.Username);
    Log.info(" Enter Username as " + Measurement_Approval_testdata.Username + ". Entered successfully" );
    await fixture.page.fill(Measurement_Approval_PageObjects.LoginPage.Password, Measurement_Approval_testdata.Password);
    Log.info(" Enter Password as " + Measurement_Approval_testdata.Password + ". Entered successfully" );
    await fixture.page.click(Measurement_Approval_PageObjects.LoginPage.Login);
    // printing the logged user details in the console
    Log.info(" User successfully logged in as " + Measurement_Approval_testdata.Username)
});
Given('Check whether the user able Navigate to Measurement_Approval Page NonCumulative', async function () {
    await fixture.page.click(Measurement_Approval_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Measurement_Approval_PageObjects.LoginPage.Username, Measurement_Approval_testdata.Username2);
    Log.info(" Enter Username as " + Measurement_Approval_testdata.Username + ". Entered successfully" );
    await fixture.page.fill(Measurement_Approval_PageObjects.LoginPage.Password, Measurement_Approval_testdata.Password);
    Log.info(" Enter Password as " + Measurement_Approval_testdata.Password + ". Entered successfully" );
    await fixture.page.click(Measurement_Approval_PageObjects.LoginPage.Login);
    // printing the logged user details in the console
    Log.info(" User successfully logged in as " + Measurement_Approval_testdata.Username)
});


Then('Verify BreadCrumbs before navigating to the Measurement_Approval page', async function (){
    await fixture.page.waitForTimeout(2000);
      // Here $ is to store the breadcrumb element
      const breadcrumbsElement = await fixture.page.$(Measurement_Approval_PageObjects.Measurement_App.Breadcrums);
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

    Then('Check whether the user able to click on the Access Based Menu button in Measurement_Approval page', async function () {
        
        await fixture.page.click(Measurement_Approval_PageObjects.DashBoard.AccessMenu);
        await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(Measurement_Approval_PageObjects.DashBoard.AccessMenu)){
        Log.info("Button clicked");
        
        }else{
        Log.info("Button not clicked");
        
        }

    });

    Then('Check whether the user able to select the Asset Management from the dropdown in Measurement_Approval page', async function () {
        await fixture.page.click(Measurement_Approval_PageObjects.DashBoard.AssetManagement);
        await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(Measurement_Approval_PageObjects.DashBoard.AssetManagement)){
        Log.info("AssetManagement was clicked");
        
        }else{
        Log.info("AssetManagement not clicked");
        
        }
        
      });
    
    
      Then('Check whether the user able to select the Planning_Procurement from the dropdown', async function () {
        await fixture.page.click(Measurement_Approval_PageObjects.DashBoard.Planning_Procurement);
        await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(Measurement_Approval_PageObjects.DashBoard.Planning_Procurement)){
        Log.info("Planning_Procurement was clicked");
        
        }else{
        Log.info("Planning_Procurement not clicked");
        
        }
        
      });
    
      Then('Check whether the user able to select the Measurement_Approval from the dropdown', async function () {
        await fixture.page.click(Measurement_Approval_PageObjects.DashBoard.Measurement_Approval);
        await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(Measurement_Approval_PageObjects.DashBoard.Measurement_Approval)){
        Log.info("Measurement_Approval was clicked");
        
        }else{
        Log.info("Measurement_Approval not clicked");
        
        }
      
      });


      Then ('Verify BreadCrumbs after navigating to the Measurement_Approval page', async function () {
        await fixture.page.waitForTimeout(2000);
        const breadcrumbsElement = await fixture.page.$(Measurement_Approval_PageObjects.Measurement_App.Breadcrums);
    
          if (breadcrumbsElement) {
            
            const breadcrumbsText = await breadcrumbsElement.textContent();
            if(breadcrumbsText!=null) // Here it tells the breadcrumbstext is not equals to null
            // Here it includes all the breadcrumbstext elements
            if (breadcrumbsText.includes('Asset') && breadcrumbsText.includes('Planning') && breadcrumbsText.includes('Measurement'))  {
              Log.info('Breadcrumbs path is correct.');
            } else {
              Log.info('Breadcrumbs path is incorrect.');
            }
           
        }else {
          Log.info('Breadcrumbs element not found.');
        }        
    });

    Then ('Check whether the Measurement Approval is displaying in the navigated page on the top right', async () =>{
        await fixture.page.waitForTimeout(1000);
        // here we are validating the text in the page with the if-else condition
        if(Measurement_Approval_testdata.Measurement_Approval === await fixture.page.textContent(Measurement_Approval_PageObjects.Measurement_App.Header)){
          Log.info( Measurement_Approval_testdata.Measurement_Approval+ " Displayed Correctly"); 
        }else{ 
          Log.info( Measurement_Approval_testdata.Measurement_Approval+" Not Displayed");
        }
    });

    Then ('Click on the job input field which is on the bottom of Measurement Approval', async () =>{
      
        await fixture.page.fill(Measurement_Approval_PageObjects.Measurement_App.Job,Measurement_Approval_testdata.Job)
        await fixture.page.keyboard.press("ArrowDown")
        await fixture.page.keyboard.press("Enter")  

    });
    Then ('Check whether the user is able to select the job from the dropdown NonCumulative', async () =>{
      
        await fixture.page.fill(Measurement_Approval_PageObjects.Measurement_App.Job,Measurement_Approval_testdata.Job2)
        await fixture.page.keyboard.press("ArrowDown")
        await fixture.page.keyboard.press("Enter")  

    });

    Then ('Check whether the user is able to select the job from the dropdown', async () =>{
        // await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Option)

    });

    Then ('Click on the Search For field which is top on the table and besides the Month and year field and also clear the text in it', async () =>{
        await fixture.page.waitForTimeout(1000);
        const ele = await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Search_For);
        //Here we are using the click and clear method to first click the required field and the clear that field to fill with new value
        await ele.click();
        await ele.clear();
        await fixture.page.waitForTimeout(2000);
    });

    Then ('Select the Awaiting Approval option from the dropdown in the Select From field', async () =>{
      await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Awaitapproval_option)
      await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Awaitapproval_option)){
        Log.info("Awaitapproval_option was clicked");        
        }else{
        Log.info("Awaitapproval_option not clicked");        
        }
    });

    Then ('Select the Hold option from the dropdown in the Select From field', async () =>{
      await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Hold_option)
      await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Hold_option)){
        Log.info("Hold_option was clicked");        
        }else{
        Log.info("Hold_option not clicked");        
        }
    });

    Then("Click on Hold icon to make an asset hold", async () => {
      await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Approve).isVisible()){
        Log.info('Approve Icon is visible');
      } else{
        Log.info('Approve Icon is not visible');
      }      
        await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Approve)
    })

    Then ('Select the Approved option from the dropdown in the Select From field', async () =>{
      await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Approved_option)
      await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Approved_option)){
        Log.info("Approved_option was clicked");        
        }else{
        Log.info("Approved_option not clicked");       
        }
    });

    Then ('Click on the search button which is on the left side top of the icons', async  () =>{
        await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Search)
        await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Search)){
        Log.info("Search was clicked");        
        }else{
        Log.info("Search not clicked");        
        }
    });

    Then ('Click on the show items dropdown which is on the left side above the Asset details table', async () => {
      await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Show)
      const Number = await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Show)
      await Number.selectOption("5");

    });

   Then ('Validating whether the user able to click FullScreen Button which is on the top of details table in Measurement Approval pege', async () =>{
        await fixture.page.waitForTimeout(1000);
        await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Fullscreen);
        await fixture.page.waitForTimeout(3000);
        Log.info("Clicked and Successfully Opened the Fullscreen")
    });

    Then ('Check whether the user able to view the Asset details count if the Asstdetails to hovering', async () =>{
      await fixture.page.waitForTimeout(1000);
      await fixture.page.hover(Measurement_Approval_PageObjects.Measurement_App.Assetdetails);
      Log.info( Measurement_Approval_PageObjects.Measurement_App.Asset_Count )   
    })

    Then ('Check whether the user able to view the details and print them in the console', async () =>{
        await fixture.page.waitForTimeout(2000);
        const row = await fixture.page.$$(Measurement_Approval_PageObjects.Measurement_App.GridHeading);
        if(row.length>0){
          for (let i = 0; i < row.length; i++) {
            await fixture.page.waitForTimeout(1000);
            const element = await row[i].innerText();
            // Here $ is to store the element
            Log.info(`${element}`)
            
          }
        }
      // THEN printing table rows from the grid // 
      await fixture.page.waitForSelector(Measurement_Approval_PageObjects.Measurement_App.GridRows);
      // Here $$ is to store the set of similar elements 
      const rows = await fixture.page.$$(Measurement_Approval_PageObjects.Measurement_App.GridRows);
      Log.info(rows.length);
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
            }
        }

    });


    Then ('Click on the Approve icon to enter the approval remarks which is on the buttom of the actions heading general', async () =>{
      await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Approve).isVisible()){
        Log.info('Approve Icon is visible');
      } else{
        Log.info('Approve Icon is not visible');
      }      
        await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Approve)
    });

    Then ('Check whether the Approval Popup is displaying to enter the remarks', async () =>{
        if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Popup)){
          Log.info("Approval Popup is Displayed");
        }else{
          Log.info("Approval Popup is Not Displayed");
        }
    });

    Then ('Check whether the user able to view the Approval Remarks heading text in the popup', async () =>{
        await fixture.page.waitForTimeout(1000);
      // Here we are validating the Approval_Remarks_text text in the page
      if(Measurement_Approval_testdata.Approval_text === await fixture.page.textContent(Measurement_Approval_PageObjects.Measurement_App.Heading_text)){
        Log.info( Measurement_Approval_testdata.Approval_text+ "  Displayed Correctly");       
      }else{ 
        Log.info( Measurement_Approval_testdata.Approval_text+ "Not Displayed");        
      }
    });

    Then ('Enter the Approval remarks after the popup is displayed', async () =>{
        await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Remarks);
        await fixture.page.fill(Measurement_Approval_PageObjects.Measurement_App.Remarks, Measurement_Approval_testdata.ApprovalRemarks)
        Log.info( Measurement_Approval_testdata.ApprovalRemarks + " entered successfully" );
    });

    Then ('Click on the approve button to approve the Approval Remarks', async () =>{
        await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Button)
    });

    Then('Check whether the user able to view the success popup after approving the approval remarks', async () =>{
        if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Messagebox)){
          Log.info("Success Popup is Displayed");
        }else{
          Log.info("Success Popup is Not Displayed");
        }
    });

    Then('Printing the text in the success popup after approval', async () =>{
        const Popup_text = await fixture.page.textContent(Measurement_Approval_PageObjects.Measurement_App.Popup_text);
        Log.info(Popup_text);
    });

    Then('Click on the Ok button in the success popup for the next process', async () =>{
        await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Ok)
    });

    //------------------------------ Hold Remarks Part ------------------------------------// 

    Then('Click on the Hold icon to enter the Hold remarks which is on the buttom of the actions heading', async () =>{
      if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Hold).isVisible()){
        Log.info('Hold Icon is visible');
      } else{
        Log.info('Hold Icon is not visible');
      } 
      await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Hold)
    });

    Then('Check whether the Hold Popup is displaying to enter the remarks', async () =>{
      if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Hold_popup)){
          Log.info("Hold Popup is Displayed");
        }else{
          Log.info("Hold Popup is Not Displayed");
        }
    });

    Then('Check whether the user able to view the Hold Remarks heading text in the popup', async () =>{
      await fixture.page.waitForTimeout(1000);
      // Here we are validating the Hold_Remarks_text text in the page
      if(Measurement_Approval_testdata.Hold_Remarks === await fixture.page.textContent(Measurement_Approval_PageObjects.Measurement_App.Heading_text)){
        Log.info( Measurement_Approval_testdata.Hold_Remarks+ "  Displayed Correctly");       
      }else{ 
        Log.info( Measurement_Approval_testdata.Hold_Remarks+ "Not Displayed");
      }
    });

    Then('Enter the Hold remarks after the popup is displayed', async () =>{
        await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Remarks);
        await fixture.page.fill(Measurement_Approval_PageObjects.Measurement_App.Remarks, Measurement_Approval_testdata.HoldRemarks)
    });

    Then('Click on the approve button to approve the Hold Remarks', async () =>{
      await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Button)
    });

    Then('Check whether the user able to view the success popup after approving the Hold remarks', async () =>{
      if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Messagebox)){
          Log.info("Success Popup is Displayed");
        }else{
          Log.info("Success Popup is Not Displayed");
        }
    });

    Then('Printing the text in the success popup after Hold', async () =>{
        const Popup_text = await fixture.page.textContent(Measurement_Approval_PageObjects.Measurement_App.Popup_text);
        Log.info(Popup_text);
    });
  //------------------------------ Send Back Remarks Part ------------------------------------// 

    Then('Click on the Send_Back icon to enter the Send_Back remarks which is on the buttom of the actions heading', async () =>{
      if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Send_Back).isVisible()){
        Log.info('Send_Back Icon is visible');
      } else{
        Log.info('Send_Back Icon is not visible');
      } 
      await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Send_Back)
    });

    Then('Check whether the Send_Back Popup is displaying to enter the remarks', async () =>{
      if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Send_Back_popup)){
          Log.info("Send_Back Popup is Displayed");
        }else{
          Log.info("Send_Back Popup is Not Displayed");
        }
    });

    Then('Enter the Send_Back remarks after the popup is displayed', async () =>{
        await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Remarks);
        await fixture.page.fill(Measurement_Approval_PageObjects.Measurement_App.Remarks, Measurement_Approval_testdata.SendBackRemarks)
    });

    Then('Check whether the user able to view the Send Back Remarks heading text in the popup', async () =>{
      await fixture.page.waitForTimeout(1000);
      // Here we are validating the SendBack_Remarks_text text in the page
      if(Measurement_Approval_testdata.SendBack_text === await fixture.page.textContent(Measurement_Approval_PageObjects.Measurement_App.Heading_text)){
        Log.info( Measurement_Approval_testdata.SendBack_text+ "  Displayed Correctly");        
      }else{ 
        Log.info( Measurement_Approval_testdata.SendBack_text+ "Not Displayed");        
      }
    });

    Then('Click on the approve button to approve the Send_Back Remarks', async () =>{
      await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Button)
    });

    Then('Check whether the user able to view the success popup after approving the Send_Back remarks', async () =>{
      if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Messagebox)){
          Log.info("Success Popup is Displayed");
        }else{
          Log.info("Success Popup is Not Displayed");
        }
    });

    Then('Printing the text in the success popup after Send_Back', async () =>{
        const Popup_text = await fixture.page.textContent(Measurement_Approval_PageObjects.Measurement_App.Popup_text);
        Log.info(Popup_text);
    });

    //--------------------- Negative Validations for Job field --------------------------//

    Then('Verify whether job field is mandatory in Measurement Approval page', async() => {
      await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Search)
      await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.alert_box)){
        Log.info(await fixture.page.textContent(Measurement_Approval_PageObjects.Measurement_App.alert_box));
      }else{
        Log.info("Job feild is not a mandatory field");
      }
    });


    Then('Click on the Approve button to check whether the user able to approve the remarks without entering the remarks in it', async () =>{
      await fixture.page.waitForTimeout(1000);
      await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Button);
    });

    Then('Verify whether the user able to view the error popup with the error message', async () =>{
      await fixture.page.waitForTimeout(1000);
      if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Error_popup)){
          Log.info("Error Popup is Displayed");
        }else{
          Log.info("Error Popup is Not Displayed");
        }
    });

    Then('Print the error message in the console that is displayed in the error popup', async() =>{
        await fixture.page.waitForTimeout(1000);
        const Error = await fixture.page.textContent(Measurement_Approval_PageObjects.Measurement_App.Error);
        Log.info(Error);
        await fixture.page.waitForTimeout(1000);

        const Error_text = await fixture.page.textContent(Measurement_Approval_PageObjects.Measurement_App.Error_text);
        Log.info(Error_text);

        await fixture.page.waitForTimeout(1000);
        await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Ok)

    });

 //------------------------------ Cancel Remarks Part ------------------------------------// 

    Then('Click on the cancel icon to cancel the approval to a AssetCode', async () => {
      if(await fixture.page.locator(Measurement_Approval_PageObjects.Measurement_App.Cancel).isVisible()){
        Log.info('Cancel Icon is visible');
      } else{
        Log.info('Cancel Icon is not visible');
      } 
      await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Cancel)
    });

    Then('Check whether the user able to view the Cancel Remarks heading text in the popup', async () =>{
      await fixture.page.waitForTimeout(1000);
      // Here we are validating the Cancel Remarks_text text in the page
      if(Measurement_Approval_testdata.Cancel_text === await fixture.page.textContent(Measurement_Approval_PageObjects.Measurement_App.Heading_text)){
        Log.info( Measurement_Approval_testdata.Cancel_text+ "  Displayed Correctly");       
      }else{ 
        Log.info( Measurement_Approval_testdata.Cancel_text+ "Not Displayed");        
      }
    });

    Then('Click on the Cancel button to Cancel the Approval Remarks', async () =>{
      await fixture.page.click(Measurement_Approval_PageObjects.Measurement_App.Button)
    });
    
    Then('Printing the text in the success popup after Bill Cancel', async () =>{
      const Popup_text = await fixture.page.textContent(Measurement_Approval_PageObjects.Measurement_App.Popup_text);
      Log.info(Popup_text);
    });
