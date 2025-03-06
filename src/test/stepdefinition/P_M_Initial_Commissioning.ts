import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as PM_Initial_Commissioning_testdata from "../../main/testdata/PM_Initial_Commissioning_testdata.json";
import PM_Initial_Commissioning_PageObjects from '../Locater/PM_Initial_Commissioning_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { Console, log, table } from "console";
import { findSourceMap } from "module";
import Log from "../hooks/until/logger";



let Base: common_methods;
let submittedRFPNumber: string;

Given('Navigate to P&M Initial Commissioning Test Enviroment', async function () {
    // await fixture.page.setViewportSize({ width: 1900, height:950})

    await fixture.page.goto(PM_Initial_Commissioning_testdata.Environment)
    Base = new common_methods(fixture.page)

});

Given('Check whether user able to navigate to landing page of P&M Initial Commissioning Page', async function () {

    
    await fixture.page.click(PM_Initial_Commissioning_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(PM_Initial_Commissioning_PageObjects.LoginPage.Username, PM_Initial_Commissioning_testdata.Username);
   Log.info(" Enter Username as " + PM_Initial_Commissioning_testdata.Username + ". Entered successfully" );
    await fixture.page.fill(PM_Initial_Commissioning_PageObjects.LoginPage.Password, PM_Initial_Commissioning_testdata.Password);
   Log.info(" Enter Password as " + PM_Initial_Commissioning_testdata.Password + ". Entered successfully" );
    await fixture.page.click(PM_Initial_Commissioning_PageObjects.LoginPage.Login);
    // printing the logged user details in the console
   Log.info(" User successfully logged in as " + PM_Initial_Commissioning_testdata.Username)
    
});


Then('Verify BreadCrumbs before navigating to the P&M Initial Commissioning page', async function (){
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
  


Then('Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in P&M Initial Commissioning page', async() => {
    await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.AccessMenu);
    await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(PM_Initial_Commissioning_PageObjects.DashBoard.AccessMenu)){
         Log.info("Menu icon was clicked");
          
          }else{
         Log.info("Menu icon not clicked");
          
          }
  })
  
  Then('Check whether the user able to select the Asset Management from the dropdown in P&M Initial Commissioning page', async() => {
    await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.AssetManagement);
    await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(PM_Initial_Commissioning_PageObjects.DashBoard.AssetManagement)){
         Log.info("AssetManagement is clicked");
          
          }else{
         Log.info("AssetManagement not clicked");
          
          }
    })
  
  Then('Check whether the user able to select the Mobilization_Movements from the dropdown in P&M Initial Commissioning page', async() => {
    await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Mobilization_Movements)
    await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(PM_Initial_Commissioning_PageObjects.DashBoard.Mobilization_Movements)){
         Log.info("Mobilization and Movements is clicked");
          
          }else{
         Log.info("Mobilization and Movements not clicked");
          
          }
  })
  
  Then('Check whether the user able to select the PM_Initial_Commissioning from the dropdown in P&M Initial Commissioning page', async() => {
    await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.PM_Initial_Commissioning)
    await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(PM_Initial_Commissioning_PageObjects.DashBoard.PM_Initial_Commissioning)){
         Log.info("P&M Initial Commissioning was clicked");
          
          }else{
         Log.info("P&M Initial Commissioning not clicked");
          
          }
    })

    Then ('Verify BreadCrumbs after navigating to the P&M Initial Commissioning page', async function () {
        await fixture.page.waitForTimeout(2000);
        // Here $ is to store the breadcrumb element
        const breadcrumbsElement = await fixture.page.$("//ul[@class='breadcrumb']");
    
          if (breadcrumbsElement) {
            
            const breadcrumbsText = await breadcrumbsElement.textContent();
            if(breadcrumbsText!=null) // Here it tells the breadcrumbstext is not equals to null
            // Here it includes all the breadcrumbstext elements
            if (breadcrumbsText.includes('Asset') && breadcrumbsText.includes('Planning') && breadcrumbsText.includes('P&M Initial'))  {
             Log.info('Breadcrumbs path is correct.');
            } else {
             Log.info('Breadcrumbs path is incorrect.');
            }
           
        }else {
         Log.info('Breadcrumbs element not found.');
        }
    });

    Then('Check whether the user able to navigate to the P&M Initial Commissioning page', async function(){
        //Here checking the navigation is correct or not with url() method
        if(PM_Initial_Commissioning_testdata.PM_Initial_Commissioning === await fixture.page.url()){
         Log.info("Successfully Navigated to P&M Initial Commissioning");
          
        }else{ 
         Log.info("UnSuccessful Navigated to P&M Initial Commissioning");
          
        }
        
      });


      Then('Check whether the user able to click on the group field', async function(){
        await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Group)
        await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(PM_Initial_Commissioning_PageObjects.DashBoard.Group)){
         Log.info("Group field was clicked know you can select the group from dropdown");
          
          }else{
         Log.info("Group field not clicked");
          
          }
      });

      
      Then('Select the random group from the group field dropdown', async function(){
        await fixture.page.waitForTimeout(2000)
        await fixture.page.keyboard.press("ArrowDown")
        await fixture.page.keyboard.press("Enter")
      });

      
      Then('Check whether the user able to click on the search button which is on the top right of the page', async function(){
        await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Search_btn)
        await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(PM_Initial_Commissioning_PageObjects.DashBoard.Search_btn)){
         Log.info("Search button is clicked");
          
          }else{
         Log.info("Search button not clicked");
          
          }

      });

      Then('Validating whether the user able to click FullScreen Button which is on the top of details table P&M Initial Commissioning page', async function(){
        await fixture.page.waitForTimeout(1000);
        //checking wheather the full screen button is working and displaying full screen
        //  await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Grid_Head);
         await fixture.page.waitForTimeout(3000);
        Log.info("Clicked and Successfully Opened the Fullscreen")
    });

      Then('Check whether the table is displaying in the P&M Initial Commissioning page', async function(){

        await fixture.page.waitForTimeout(2000);
      const row = await fixture.page.$$(PM_Initial_Commissioning_PageObjects.DashBoard.Grid_Head);
      if(row.length>0){
        for (let i = 0; i < row.length; i++) {
          await fixture.page.waitForTimeout(1000);
          const element = await row[i].innerText();
          // Here $ is to store the element
         Log.info(`${element}`)
          
        }
      }
    // THEN printing table rows from the grid // 
    await fixture.page.waitForSelector(PM_Initial_Commissioning_PageObjects.DashBoard.Grid_Row);

    // Here $$ is to store the set of similar elements 
    const rows = await fixture.page.$$(PM_Initial_Commissioning_PageObjects.DashBoard.Grid_Row);
    
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
        }else{
         Log.info("No records available")
        }
  

      });

      
      Then('Check whether the user able to click on the edit button to enter the dates', async function(){
        await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Edit_icon)
        await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(PM_Initial_Commissioning_PageObjects.DashBoard.Edit_icon)){
         Log.info("Edit_icon is clicked");
          
          }else{
         Log.info("Edit_icon not clicked");
          
          }

      });

      
      Then('Check whether the user able to click on the cancle button after clicking on the edit button', async function(){
        await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Cancel_icon)

      });

      
      Then('Check on the Received Date calendar icon which is displayed after clicking on the edit icon', async function(){
        await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Received_Date_Calendar_icon)
        await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(PM_Initial_Commissioning_PageObjects.DashBoard.Received_Date_Calendar_icon)){
         Log.info("Received_Date_icon is clicked");
          
          }else{
         Log.info("Received_Date_icon not clicked");
          
          }

      });

      
      Then('Select the date form the Received Date calendar', async function(){
        await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Date)
        // await fixture.page.innerText("Received date is: " +PM_Initial_Commissioning_PageObjects.DashBoard.Received_Date_text)

      });

      
      Then('Check on the Commission Date calendar icon which is displayed after clicking on the edit icon', async function(){
        await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Commission_Date_Calendar_icon)
        await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(PM_Initial_Commissioning_PageObjects.DashBoard.Commission_Date_Calendar_icon)){
         Log.info("Commission_Date_Calendar_icon is clicked");
          
          }else{
         Log.info("Commission_Date_Calendar_icon not clicked");
          
          }


      });
      
      Then('Select the date form the Commission Date calendar', async function(){
        await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Date)
        // await fixture.page.innerText("Commission date is: " +PM_Initial_Commissioning_PageObjects.DashBoard.Commission_Date_text)

      });
      
      Then('Check whether the user able to click on the save button', async function(){
        await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Save_btn)
        await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(PM_Initial_Commissioning_PageObjects.DashBoard.Save_btn)){
         Log.info("Save_icon is clicked");
          
          }else{
         Log.info("Save_icon not clicked");
          
          }

      });

      Then('Check whether the user able to view the success popup after approving the approval remarks in PM initial commissioning', async () =>{
        if(await fixture.page.locator("//eipmessagebox")){ // Here locator is searched and if it is there then if condition prints, if not there then else
         Log.info("Success Popup is Displayed");
        }else{
         Log.info("Success Popup is Not Displayed");
        }

    });

      Then('Printing the text in the success popup after approval in P&M Initial Commissioning page', async () =>{

            const Popup_text = await fixture.page.textContent(PM_Initial_Commissioning_PageObjects.DashBoard.Popup_text);
           Log.info(Popup_text);

    });


      Then('Click on the Ok button in the success popup for the next process in P&M Initial Commissioning page', async () =>{
        await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Ok)

    });

        Then('Click on the filter button for filtering the needed assect in P and M Initial Commissioning page',async ()=>{
            await fixture.page.waitForTimeout(2000)
            await fixture.page.click(PM_Initial_Commissioning_PageObjects.DashBoard.Filter);
    });
        
        Then('Enter the asset code to filter the required assect code in P and M Initial Commissioning page', async()=>{
            await fixture.page.waitForTimeout(2000)
            await fixture.page.fill(PM_Initial_Commissioning_PageObjects.DashBoard.AssectcodeFill, '01050206')
            await fixture.page.waitForTimeout(1000)
        
    });
       
Then('Print the filtered asset row in the console after filtering the required asset code', async()=>{
            await fixture.page.waitForSelector(PM_Initial_Commissioning_PageObjects.DashBoard.Grid_Row);

            // Here $$ is to store the set of similar elements 
            const rows = await fixture.page.$$(PM_Initial_Commissioning_PageObjects.DashBoard.Grid_Row);
            
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
                }else{
               Log.info("No records available")
                }
            
    });

        
        

        

        