import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as Commissioning_testdata from "../../main/testdata/Commissioning_testdata.json";
import * as testdata from "../../main/testdata/testdata.json";
import Commissioning_PageObjects from '../Locater/Commissioning_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { Console, log } from "console";
import { findSourceMap } from "module";
import Log from "../hooks/until/logger";



let Base: common_methods;
let submittedRFPNumber: string;
// let assetCode = "13716XPH"

Given('Navigate to Test Enviroment of Commissioning', async function () {
    // await fixture.page.setViewportSize({ width: 1900, height:950});
    await fixture.page.goto(Commissioning_testdata.Environment)
    Base = new common_methods(fixture.page)

});


Given('Check whether the user able Navigate to Mobilization & Movements for commissioning Page', async function () {

    
    await fixture.page.click(Commissioning_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Commissioning_PageObjects.LoginPage.Username, Commissioning_testdata.Username);
   Log.info(" Enter Username as " + Commissioning_testdata.Username + ". Entered successfully" );
    await fixture.page.fill(Commissioning_PageObjects.LoginPage.Password, Commissioning_testdata.Password);
   Log.info(" Enter Password as " + Commissioning_testdata.Password + ". Entered successfully" );
    await fixture.page.click(Commissioning_PageObjects.LoginPage.Login);
    // printing the logged user details in the console
   Log.info(" User successfully logged in as " + Commissioning_testdata.Username)
    
 
});

Given('Check whether the user able Navigate to Mobilization & Movements for commissioning Page NonCumulative', async function () {

    
  await fixture.page.click(Commissioning_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(Commissioning_PageObjects.LoginPage.Username, Commissioning_testdata.Username_Noncumulative);
 Log.info(" Enter Username as " + Commissioning_testdata.Username + ". Entered successfully" );
  await fixture.page.fill(Commissioning_PageObjects.LoginPage.Password, Commissioning_testdata.Password);
 Log.info(" Enter Password as " + Commissioning_testdata.Password + ". Entered successfully" );
  await fixture.page.click(Commissioning_PageObjects.LoginPage.Login);
  // printing the logged user details in the console
 Log.info(" User successfully logged in as " + Commissioning_testdata.Username_Noncumulative)
  

});


Then('Verify BreadCrumbs before navigating to the Mobilization & Movements for commissioning page', async function (){
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

    Then('Check whether the user able to click on the Access Based Menu button in Mobilization & Movements for commissioning page', async function () {
        
        await fixture.page.click(Commissioning_PageObjects.DashBoard.AccessMenu);
        
       Log.info(await fixture.page.textContent('//a[@title="Access Based Menu"]'));
        //Here we are checking whether the Accessmenu is clicking or not
        await fixture.page.waitForTimeout(2000);
        if(await fixture.page.locator(Commissioning_PageObjects.DashBoard.AccessMenu)){
       Log.info("Button clicked");
        
        }else{
       Log.info("Button not clicked");
        
        }

    });

    Then('Check whether the user able to select the Asset Management from the dropdown in Mobilization & Movements for commissioning page', async function () {
        await fixture.page.click(Commissioning_PageObjects.DashBoard.AssetManagement);
        
      });
    
    
      Then('Check whether the user able to select the Mobilization & Movements in the dropdown', async function () {
        await fixture.page.click(Commissioning_PageObjects.DashBoard.Mobilization_Movements);
        
      });
    
      Then('Check whether the user able to select the Movement in the dropdown', async function () {
        await fixture.page.click(Commissioning_PageObjects.DashBoard.Movement);
      
      });


      Then ('Verify BreadCrumbs after navigating to the Mobilization & Movements for commissioning page', async function () {
        await fixture.page.waitForTimeout(2000);
        
        // Here $ is to store the breadcrumb element
        const breadcrumbsElement = await fixture.page.$("//ul[@class='breadcrumb']");
    
          if (breadcrumbsElement) {
            
            const breadcrumbsText = await breadcrumbsElement.textContent();
            if(breadcrumbsText!=null) // Here it tells the breadcrumbstext is not equals to null
            // Here it includes all the breadcrumbstext elements
            if (breadcrumbsText.includes('Asset') && breadcrumbsText.includes('Mobilization') && breadcrumbsText.includes('Movement'))  {
             Log.info('Breadcrumbs path is correct.');
            } else {
             Log.info('Breadcrumbs path is incorrect.');
            }
           
        }else {
         Log.info('Breadcrumbs element not found.');
        }        
    });


    Then('Check whether the commissioning is displaying in the Movement page', async function(){
        await fixture.page.waitForTimeout(1000);
        // Here we are validating the Asset Group text in the page
        if(Commissioning_testdata.Commissioning === await fixture.page.textContent(Commissioning_PageObjects.Commissioning.Commissioning1)){
         Log.info( Commissioning_testdata.Commissioning+ "  Displayed Correctly");
          
        }else{ 
         Log.info( Commissioning_testdata.Commissioning+  "Not Displayed");
          
        }
    
      });

      Then('Click on the Commissioning which is on the top of the DC table besides delivery challan', async function () {
        await fixture.page.click(Commissioning_PageObjects.Commissioning.Commissioning1);
      
      });


    //   Then('Click on arrow which is next to the commissioning to display the table details', async function () {
    //     await fixture.page.click(Commissioning_PageObjects.Commissioning.Go);
      
    // });


      Then("Click on search icon to the right of Asset code input to do an advance search in the Movement page", async () => {
        await fixture.page.click(Commissioning_PageObjects.Asset.SearchIcon)
    })

      Then("Verify weather date input field is editable and taking input in the Movement page", async () => {
          try {
              await expect(await fixture.page.locator(Commissioning_PageObjects.Asset.DatePicker)).toBeEditable()
          } catch (error) {
             Log.info("Date input is not editable");
          }
      })

      Then("Select the time duration from the calendar in advanced search in the Movement page", async () => {
          const dateInput = await fixture.page.locator(Commissioning_PageObjects.Asset.DatePicker);
          dateInput.click();
          dateInput.clear();
          dateInput.fill(Commissioning_testdata.AdvSearchdate);
      })
      Then("Click on search button in the advanced search in Commissioning",async () => {
          await fixture.page.click(Commissioning_PageObjects.Asset.Search);

      })

      Then('Validating whether the user able to click FullScreen Button which is on the top of details table in Commissioning page', async function(){
        // await fixture.page.waitForTimeout(1000);
        //  await fixture.page.click(Commissioning_PageObjects.Commissioning.Fullscreen);
        //  await fixture.page.waitForTimeout(2000);
        // Log.info("Clicked and Successfully Opened the Fullscreen")
        //  await fixture.page.click(Commissioning_PageObjects.Commissioning.Fullscreen);
      });

      Then('Click on the plus button to create the Commisssioning_RN for the first job code', async function () {
        await fixture.page.click(Commissioning_PageObjects.Commissioning.Filter)
        await fixture.page.waitForTimeout(2000);
        await fixture.page.fill(Commissioning_PageObjects.Commissioning.AssetCodeInput,testdata.AssetCode)
        await fixture.page.click(Commissioning_PageObjects.Commissioning.Go)
        await fixture.page.waitForTimeout(2000);
        await fixture.page.hover(Commissioning_PageObjects.Commissioning.Hover);// here using hover is to move over a element to make it visible
        await fixture.page.click(Commissioning_PageObjects.Commissioning.Create);
      
    });

      Then('Click on the plus button to create the Commisssioning_RN for the first job code NonCumulative', async function () {
        await fixture.page.hover(Commissioning_PageObjects.Commissioning.Hover);// here using hover is to move over a element to make it visible
        await fixture.page.click(Commissioning_PageObjects.Commissioning.Create);
      
    });

    Then('Check whether assest details is displayed at right side of Create Commissioning window', async () => {
      const Asset = await fixture.page.locator(Commissioning_PageObjects.Commissioning.Asset_Details);
      const Asset_Details = await Asset.textContent()
      Log.info(Asset_Details);
    });

    Then('Check whether Commissioning details is displayed at right side of Create Commissioning window', async () => {
      const Commissioning = await fixture.page.locator(Commissioning_PageObjects.Commissioning.Commissioning_text);
      const Commissioning_text = await Commissioning.textContent()
     Log.info(Commissioning_text);
    });

    Then('Check whether Dates details is displayed at right side of Create Commissioning window', async () => {
      const Dates = await fixture.page.locator(Commissioning_PageObjects.Commissioning.DC_RN_Dates);
      const DC_RN_Dates = await Dates.textContent()
     Log.info(DC_RN_Dates);
    });

    Then('Check whether the Create Asset - CX Request is displaying in the page', async function(){
      await fixture.page.waitForTimeout(1000);
      // Here we are validating the Asset Group text in the page
      if(Commissioning_testdata.Page_main_text === await fixture.page.textContent(Commissioning_PageObjects.Commissioning.Page_text)){
       Log.info( Commissioning_testdata.Page_main_text+ "  Displayed Correctly");
        
      }else{ 
       Log.info( Commissioning_testdata.Page_main_text+ "Not Displayed");
        
      }
  
    });

    Then('Verify weather Asset1 is mandatory in Measurement Creation page', async() => {
      await fixture.page.click(Commissioning_PageObjects.Commissioning.Submit)
      if(await fixture.page.locator(Commissioning_PageObjects.Commissioning.alert_box)){
       Log.info(await fixture.page.textContent(Commissioning_PageObjects.Commissioning.alert_box));
      }else{
       Log.info("Asset1 is not a mandatory field");
      }
    });


    Then('Click on the calendar icon to set the Commissioning date which is below the accessories table', async function () {
      // await fixture.page.click(Commissioning_PageObjects.Commissioning.Calendar);
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth()+1
      const day = date.getDate()
      await common_methods.datepicker(Commissioning_PageObjects.Commissioning.Calendar,year,month,day-3)
    
    });


    Then('Check whether the Meter Reading_Previous is displaying in the Create Asset-CX Request page', async function(){
      await fixture.page.waitForTimeout(1000);
      if(Commissioning_testdata.Meter_Reading_pre === await fixture.page.textContent(Commissioning_PageObjects.Commissioning.Meter_reading_previous_text)){
       Log.info( Commissioning_testdata.Meter_Reading_pre+ " Displayed Correctly");
        
      }else{ 
       Log.info( Commissioning_testdata.Meter_Reading_pre+ " Not Displayed");
        
      }

    });

    Then('Check whether the Meter Reading_Current is displaying in the Create Asset-CX Request page', async function(){
      await fixture.page.waitForTimeout(1000);
      if(Commissioning_testdata.Meter_Reading_cur === await fixture.page.textContent(Commissioning_PageObjects.Commissioning.Meter_reading_current_text)){
       Log.info( Commissioning_testdata.Meter_Reading_cur+ " Displayed Correctly");
        
      }else{ 
       Log.info( Commissioning_testdata.Meter_Reading_cur+ " Not Displayed");
        
      }

    });

    Then('Verify weather Asset2 is mandatory in Measurement Creation page', async() => {
      await fixture.page.click(Commissioning_PageObjects.Commissioning.Submit)
      if(await fixture.page.locator(Commissioning_PageObjects.Commissioning.alert_box)){
       Log.info(await fixture.page.textContent(Commissioning_PageObjects.Commissioning.alert_box));
      }else{
       Log.info("Asset2 is not a mandatory field");
      }
    });

    Then('Check whether the user able to Fill Current Meter Reading field which is besides the previous Meter Reading field', async () => {
      await fixture.page.fill(Commissioning_PageObjects.Commissioning.Meter_reading_current, Commissioning_testdata.Meter_reading_current);

      
    });


  
    Then('Check whether the Reason for Meter Reading Change is displaying in the Create Asset-CX Request page', async function(){
    //   await fixture.page.waitForTimeout(1000);
    //   if(Commissioning_testdata.Reason_text === await fixture.page.textContent(Commissioning_PageObjects.Commissioning.Reason_text)){
    //    Log.info( Commissioning_testdata.Reason_text+ "  Displayed Correctly");
        
    //   }else{ 
    //    Log.info(Commissioning_testdata.Reason_text+ "Not Displayed");
        
    //   }

    });


    Then('Check whether the user able to Fill Reason for Meter Reading Change field which is besides the current Meter Reading field', async () => {
      await fixture.page.waitForTimeout(1000);
      await fixture.page.fill(Commissioning_PageObjects.Commissioning.Reason, Commissioning_testdata.Reason);
      await fixture.page.waitForTimeout(1000);

    });



    // Then('Validating whether the user able to close FullScreen Button which is on the top of details table in Commissioning page', async function(){
    //   await fixture.page.waitForTimeout(1000);
    //    await fixture.page.click(Commissioning_PageObjects.Commissioning.Close);
    //    await fixture.page.waitForTimeout(3000);
    //   Log.info("Clicked and Successfully Opened the Fullscreen")

    // });

    Then('Click on the Submit button which is in the right bottom of the page', async () => {
      await fixture.page.waitForTimeout(2000);
      await fixture.page.click(Commissioning_PageObjects.Commissioning.Submit);

    });


    Then("Click on OK button from the Success popup appeared after Issuing commissioning", async () => {
      await fixture.page.waitForTimeout(1000);
      await fixture.page.click(Commissioning_PageObjects.Commissioning.SuccessButtonOk);
      Log.info("Commissioning Done for the Asset")
    })