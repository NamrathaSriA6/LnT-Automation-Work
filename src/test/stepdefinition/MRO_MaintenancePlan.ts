import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as MRO_MaintenancePlan_testdata from "../../main/testdata/MRO_MaintenancePlan_testdata.json";
import MRO_MaintenancePlan_PageObjects from '../Locater/MRO_MaintenancePlan_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { log } from "console";
import * as sql from "../../main/database/database"
import Log from "../hooks/until/logger";
import { fix } from "mssql";


let Base: common_methods;
let PHRSNumber: string;



//------------- MRO_Masters Maintenance Plan ---------------//


  Given('Navigate to MRO Masters Maintenance Plan Test Enviroment', async function () {

      await fixture.page.goto(MRO_MaintenancePlan_testdata.Environment)
      Base = new common_methods(fixture.page)

  });


  Given('Check whether the user able Navigate to MRO_Masters MaintenancePlan landing Page', async function () {

      
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.LoginPage.Otheruser);
      await fixture.page.fill(MRO_MaintenancePlan_PageObjects.LoginPage.Username, MRO_MaintenancePlan_testdata.Username);
      Log.info(" Enter Username as " + MRO_MaintenancePlan_testdata.Username + ". Entered successfully" );
      await fixture.page.fill(MRO_MaintenancePlan_PageObjects.LoginPage.Password, MRO_MaintenancePlan_testdata.Password);
      Log.info(" Enter Password as " + MRO_MaintenancePlan_testdata.Password + ". Entered successfully" );
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.LoginPage.Login);
      // printing the logged user details in the console
      Log.info(" User successfully logged in as " + MRO_MaintenancePlan_testdata.Username);

      
  
  });


  Then('Verify BreadCrumbs before navigating to the MRO_Masters MaintenancePlan page', async function (){
    await fixture.page.waitForTimeout(2000);

      // Here $ is to store the breadcrumb element
      const breadcrumbsElement = await fixture.page.$("//ul[@class='breadcrumb']");
      await fixture.page.waitForTimeout(2000);

        if (breadcrumbsElement) {
          
          const breadcrumbsText = await breadcrumbsElement.textContent();
          if(breadcrumbsText!=null) //Here it tells that the breadcrumbstext element is not equals to the null
          // Here the inclued() method includes the text given in it and compares to breadcrumbstext elements 
          if (breadcrumbsText.includes('')) {
            Log.info('Breadcrumbs path is correct.');
          } else {
            Log.info('Breadcrumbs path is incorrect.');
          }
        
      }else {
        Log.info('Breadcrumbs element not found.');
      }
  })


  Then('Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters MaintenancePlan page', async function () {
      
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.DashBoard.AccessMenu);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_MaintenancePlan_PageObjects.DashBoard.AccessMenu)){
        Log.info("AccessMenu icon clicked");
        
      }else{
        Log.info("AccessMenu icon not clicked");
        
      }

    });
    

    Then('Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters MaintenancePlan page', async function () {
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.DashBoard.AssetManagement);
      
    });


    Then('Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters MaintenancePlan page', async function () {
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.DashBoard.Operations_and_Maintenance);
      
    });

    Then('Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters MaintenancePlan page', async function () {
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.DashBoard.Maintenance_Plan);
    
    });

    Then ('Verify BreadCrumbs after navigating to the MRO_Masters MaintenancePlan page', async function () {
      await fixture.page.waitForTimeout(2000);
      // Here $ is to store the breadcrumb element
      const breadcrumbsElement = await fixture.page.$("//ul[@class='breadcrumb']");

        if (breadcrumbsElement) {
          
          const breadcrumbsText = await breadcrumbsElement.textContent();
          if(breadcrumbsText!=null) // Here it tells the breadcrumbstext is not equals to null
          // Here it includes all the breadcrumbstext elements
          if (breadcrumbsText.includes('Asset') && breadcrumbsText.includes('Operations') && breadcrumbsText.includes('Maintenance'))  {
            Log.info('Breadcrumbs path is correct.');
          } else {
            Log.info('Breadcrumbs path is incorrect.');
          }
        
      }else {
        Log.info('Breadcrumbs element not found.');
      }
  });


    Then('Verify wheather the user able to click on the Create New Source RMC Plus icon', async function() {
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.NewRMC.CreateRMC_icon);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_MaintenancePlan_PageObjects.NewRMC.CreateRMC_icon)){
        Log.info("CreateRMC icon clicked");
        
      }else{
        Log.info("CreateRMC icon not clicked");
        
      }

    }) 

    Then('Check wheather the user able to get the RMC Creation pop up to create the RMC', async function() {
      if(await fixture.page.locator(MRO_MaintenancePlan_PageObjects.NewRMC.RMC_Creation_popup)){
        Log.info("RMC_Creation Popup is Displayed");
      }else{
        Log.info("RMC_Creation Popup is Not Displayed");
      }

    })

    Then('Check wheather the user able to click on the Asset group feild', async function() {
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.NewRMC.AssetGroup);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_MaintenancePlan_PageObjects.NewRMC.AssetGroup)){
        Log.info("AssetGroup field  clicked");
        
      }else{
        Log.info("AssetGroup field not clicked");
        
      }


    })

    Then('Select the Asset group from the dropdown which will be come after clicking the field', async function() {
      await fixture.page.fill(MRO_MaintenancePlan_PageObjects.NewRMC.AssetGroup, MRO_MaintenancePlan_testdata.AssetGroup);
      await fixture.page.waitForTimeout(2000);
      await fixture.page.keyboard.press("ArrowDown")
      await fixture.page.keyboard.press("Enter")

    })

    Then('Check wheather the user able to click on the Asset feild', async function() {
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.NewRMC.Asset);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_MaintenancePlan_PageObjects.NewRMC.Asset)){
        Log.info("Asset field  clicked");
        
      }else{
        Log.info("Asset field not clicked");
        
      }

    })

    Then('Select the Asset from the dropdown which will be come after clicking the field', async function() {
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.NewRMC.Asset);
      await fixture.page.waitForTimeout(2000);
      await fixture.page.keyboard.press("ArrowDown")
      await fixture.page.keyboard.press("Enter")

    })

    Then('Check wheather the user able to click on the Frequency Type feild', async function() {
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.NewRMC.Frequency_Type);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_MaintenancePlan_PageObjects.NewRMC.Frequency_Type)){
        Log.info("Frequency_Type field  clicked");
        
      }else{
        Log.info("Frequency_Type field not clicked");
        
      }

    })

    Then('Select the Frequency Type from the dropdown which will be come after clicking the field', async function() {
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.NewRMC.Frequency_Type);
      await fixture.page.waitForTimeout(2000);
      await fixture.page.keyboard.press("ArrowDown")
      await fixture.page.keyboard.press("Enter")


    })

    Then('Click on the Create RMC button after selecting all the fields', async function() {
      await fixture.page.waitForTimeout(2000);
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.NewRMC.CreateRMC_btn);
      await fixture.page.waitForTimeout(1000);
    })
    


    Then('Check whether the user able to view the success popup after approving the approval remarks in Maintenance_Plan page', async () =>{
        if(await fixture.page.locator(MRO_MaintenancePlan_PageObjects.NewRMC.Messagebox)){
          Log.info("Success Popup is Displayed");
        }else{
          Log.info("Success Popup is Not Displayed");
        }
    });

    Then('Printing the text in the success popup after approval in Maintenance_Plan page', async () =>{
        const Popup_text = await fixture.page.textContent(MRO_MaintenancePlan_PageObjects.NewRMC.Popup_text);
        Log.info(Popup_text);
    });

    Then('Click on the Ok button in the success popup for the next process in Maintenance_Plan page', async () =>{
        await fixture.page.click(MRO_MaintenancePlan_PageObjects.NewRMC.Ok)
    });



    Then('Check whether the user able to click on the Action icon', async () =>{
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.CurrentRMC.Action_icon);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_MaintenancePlan_PageObjects.CurrentRMC.Action_icon)){
        Log.info("Action icon clicked");
        
      }else{
        Log.info("Action icon not clicked");
        
      }
    })


    Then('Print the details of the CreatRMC popup in the console', async () =>{
      let Popup_heading = await fixture.page.textContent(MRO_MaintenancePlan_PageObjects.CurrentRMC.Popup_heading)
      Log.info(Popup_heading)
      Log.info("____________________________________________________");

        
      await fixture.page.waitForSelector(MRO_MaintenancePlan_PageObjects.NewRMC.RMC_Creation_popup);

      const rows = await fixture.page.$$(MRO_MaintenancePlan_PageObjects.NewRMC.RMC_Creation_popup);
        
        if(rows.length > 0) {
            for (let i = 0; i < rows.length; i++) {
                await fixture.page.waitForTimeout(1000);
                const cells = await fixture.page.$$(MRO_MaintenancePlan_PageObjects.CurrentRMC.Popup_text);
                for (let j = 0; j < cells.length; j++) {
                    const cellText = await cells[j].innerText();
                  Log.info(`${cellText}`);
                }
              Log.info("____________________________________________________");
              }
            }else{
            Log.info("No records available")
            }
    })




    Then('Verify whether the user able to click on the edit button to edit the Active type in Maintenance_Plan page',async() => {
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.CreatedRMCs.Edit)
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_MaintenancePlan_PageObjects.CreatedRMCs.Edit)){
        Log.info("Edit button is clicked");
        
      }else{
        Log.info("Edit button is not clicked");
        
      }
 
    });

    Then('Check whether the success popup is displayed or not in Maintenance_Plan page',async() => {
      if(await fixture.page.locator(MRO_MaintenancePlan_PageObjects.CreatedRMCs.Popup)){
        Log.info("Service type Success Popup is Displayed");
      }else{
        Log.info("Service type Success Popup is Not Displayed");
      }
      
    });


    Then('Click on the save icon to save the changes in Maintenance_Plan page',async() => {
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.CreatedRMCs.Save)
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_MaintenancePlan_PageObjects.CreatedRMCs.Save)){
        Log.info("Save icon is clicked");
        
      }else{
        Log.info("Save icon is not clicked");
        
      }
      
    });

    

    Then('Verify whether user able to change the active button to change the status in Maintenance_Plan page',async() => {
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.CreatedRMCs.YesNo_Btn)
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_MaintenancePlan_PageObjects.CreatedRMCs.YesNo_Btn)){
        Log.info("Yes/No Button is clicked");
        
      }else{
        Log.info("Yes/No Button is not clicked");
        
      }
    });

    Then('Check whether the user able to click on the RMC to check the details in Maintenance_Plan page',async()=>{
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.CreatedRMCs.ResourceMaintenanceCode)
      let RMC_heading = await fixture.page.textContent(MRO_MaintenancePlan_PageObjects.CreatedRMCs.RMC)
      Log.info(RMC_heading)
      await fixture.page.waitForTimeout(2000);
      let RMC_Number = await fixture.page.textContent(MRO_MaintenancePlan_PageObjects.CreatedRMCs.RMC_Number)
      Log.info(RMC_Number)
      Log.info("______________________________")
      await fixture.page.waitForTimeout(2000);
    })


    Then('Click on the info icon to check the details of that RMC',async()=>{
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.CreatedRMCs.Info_icon)
      await fixture.page.waitForTimeout(2000);
      await fixture.page.textContent(MRO_MaintenancePlan_PageObjects.CreatedRMCs.Info_text)
      await fixture.page.waitForTimeout(2000);

    })

    Then('Check whether the user able to click on the back button to go to the previous page',async()=>{
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.CreatedRMCs.Back)
    })

    Then('Check whether the user able to Click on the created button',async()=>{
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.CreatedRMCs.Created_btn)
    })

    Then('Check whether the user able to Click on the Asset button',async()=>{
      await fixture.page.click(MRO_MaintenancePlan_PageObjects.CreatedRMCs.Asset)
    })