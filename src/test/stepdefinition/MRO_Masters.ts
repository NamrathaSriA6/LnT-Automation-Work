import { Given, setDefaultTimeout, Then , When} from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as MRO_Masters_testdata from "../../main/testdata/MRO_Masters_testdata.json";
import MRO_Masters_PageObjects from '../Locater/MRO_Masters_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import { log } from "console";
import * as sql from "../../main/database/database"
import Log from "../hooks/until/logger";
import { fix } from "mssql";



let Base: common_methods;
let PHRSNumber: string;



//------------- MRO_Masters ---------------//


  Given('Navigate to MRO_Masters Test Enviroment', async function () {

      await fixture.page.goto(MRO_Masters_testdata.Environment)
      Base = new common_methods(fixture.page)

  });


  Given('Check whether the user able Navigate to MRO_Masters landing Page', async function () {

      
      await fixture.page.click(MRO_Masters_PageObjects.LoginPage.Otheruser);
      await fixture.page.fill(MRO_Masters_PageObjects.LoginPage.Username, MRO_Masters_testdata.Username);
      Log.info(" Enter Username as " + MRO_Masters_testdata.Username + ". Entered successfully" );
      await fixture.page.fill(MRO_Masters_PageObjects.LoginPage.Password, MRO_Masters_testdata.Password);
      Log.info(" Enter Password as " + MRO_Masters_testdata.Password + ". Entered successfully" );
      await fixture.page.click(MRO_Masters_PageObjects.LoginPage.Login);
      // printing the logged user details in the console
      Log.info(" User successfully logged in as " + MRO_Masters_testdata.Username);

      await fixture.page.waitForTimeout(5000)
      
  
  });


  Then('Verify BreadCrumbs before navigating to the MRO_Masters page', async function (){

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


  Then('Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters page', async function () {
      
      await fixture.page.click(MRO_Masters_PageObjects.DashBoard.AccessMenu);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.DashBoard.AccessMenu)){
        Log.info("AccessMenu icon clicked");
        
      }else{
        Log.info("AccessMenu icon not clicked");
        
      }

    });
    

    Then('Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters page', async function () {
      await fixture.page.click(MRO_Masters_PageObjects.DashBoard.AssetManagement);
      
    });


    Then('Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters page', async function () {
      await fixture.page.click(MRO_Masters_PageObjects.DashBoard.Operations_and_Maintenance);
      
    });

    Then('Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters page', async function () {
      await fixture.page.click(MRO_Masters_PageObjects.DashBoard.Maintenance_Tasks);
    
    });

    Then ('Verify BreadCrumbs after navigating to the MRO_Masters page', async function () {
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


  //---------------- Verify_the_MRO_Servicetype_Addition ------------------//


    Then('Check whether the user able to navigate to the MRO_Masters page', async function(){
      //Here checking the navigation is correct or not with url() method
      if(MRO_Masters_testdata.MRO_Masters_Page === await fixture.page.url()){
        Log.info("Successfully Navigated to MRO_Masters page");
        
      }else{ 
        Log.info("UnSuccessful MRO_Masters page Navigation");
        
      }
      
    });



    Then('Check whether the user able to click on the close icon',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Servicetype.Clear);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Servicetype.Clear)){
        Log.info("Clear icon clicked");
        
      }else{
        Log.info("Clear icon not clicked");
        
      }

    });


    Then('Check whether user able to select the Service type field from the dropdown',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Servicetype.Service_Type);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Servicetype.Service_Type)){
        Log.info("Service type field is selected");
        
      }else{
        Log.info("Service type field is not selected");
        
      }
      
    });



    Then('Check whether the user able to click on the add icon whick is on the right top of the service type table',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Servicetype.Add_servicetype);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Servicetype.Add_servicetype)){
        Log.info("Add_servicetype icon clicked");
        
      }else{
        Log.info("Add_servicetype icon not clicked");
        
      }
      
    });



    Then('Verify whether the user able to enter the service type in the service type input field',async() => {
      const Service_Type = await common_methods.RandomLetter();
      await fixture.page.fill(MRO_Masters_PageObjects.MRO_Servicetype.Servicetype_input,Service_Type)
      Log.info(" Enter Service type as " + Service_Type + ". Entered successfully" );
      
    });



    Then('Check whether the user able to click on the add service type button',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Servicetype.Addservicetype_btn)
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Servicetype.Addservicetype_btn)){
        Log.info("Addservicetype button is clicked");
        
      }else{
        Log.info("Addservicetype button is not clicked");
        
      }
      
    });


    Then('Check whether the success popup is displayed or not',async() => {
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Servicetype.Popup)){
        Log.info("Service type Success Popup is Displayed");
      }else{
        Log.info("Service type Success Popup is Not Displayed");
      }
      
    });

    Then('Check whether the user able to Double click on the Task ID to filter recently created task group',async() => {
      await fixture.page.dblclick(MRO_Masters_PageObjects.MRO_Task.Task_ID)
      await fixture.page.waitForTimeout(2000)
      
    });


    //---------------- Verify_the_MRO_Servicetype_Edit ------------------//


    Then('Double click on the service type id field in the table to get the recently added service type',async() => {
      await fixture.page.dblclick(MRO_Masters_PageObjects.MRO_Servicetype.Service_Type_ID)
      
    });


    Then('Verify whether the user able to click on the edit button to edit the Active type',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Servicetype.Edit)
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Servicetype.Edit)){
        Log.info("Edit button is clicked");
        
      }else{
        Log.info("Edit button is not clicked");
        
      }
 
    });


    Then('Click on the save icon to save the changes',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Servicetype.Save)
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Servicetype.Save)){
        Log.info("Save icon is clicked");
        
      }else{
        Log.info("Save icon is not clicked");
        
      }
      
    });

    

    Then('Verify whether user able to change the active button to change the status',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Servicetype.YesNo_Btn)
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Servicetype.YesNo_Btn)){
        Log.info("Yes/No Button is clicked");
        
      }else{
        Log.info("Yes/No Button is not clicked");
        
      }
    });


    //---------------- Verify_the_MRO_Task_Addition ------------------//



    Then('Check whether user able to select the Task field from the dropdown',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task.Task);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Task.Task)){
        Log.info("Task field is selected");
        
      }else{
        Log.info("Task field is not selected");
        
      }

      
    });



    Then('Check whether the user able to click on the add icon whick is on the right top of the Task table',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task.Add_Task);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Task.Add_Task)){
        Log.info("Add Task icon clicked");
        
      }else{
        Log.info("Add Task icon not clicked");
        
      }
    });



    Then('Verify whether the user able to enter the Task in the Task input field',async() => {
      const Task = await common_methods.RandomLetter();
      await fixture.page.fill(MRO_Masters_PageObjects.MRO_Task.Task_input,Task)
      Log.info(" Enter Task as " + Task + ". Entered successfully" );
      
    });



    Then('Check whether the user able to click on the add Task button',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task.AddTask_btn);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Task.AddTask_btn)){
        Log.info("Add Task button clicked");
        
      }else{
        Log.info("Add Task button not clicked");
        
      }
      
    });




    Then('Click on the linking icon to link the Service types to the Task',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task.Linking_icon);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Task.Linking_icon)){
        Log.info("Linking icon clicked");
        
      }else{
        Log.info("Linking icon not clicked");
        
      }
      
    });


    Then('Check whether user able to view the choose Service Types list',async() => {
      let Choose_Service_Type_Head = await fixture.page.textContent(MRO_Masters_PageObjects.MRO_Task.Choose_Service_Type_Head)
      Log.info(Choose_Service_Type_Head)
      Log.info("____________________________________________________");

  
  await fixture.page.waitForSelector(MRO_Masters_PageObjects.MRO_Task.Section1);

  const rows = await fixture.page.$$(MRO_Masters_PageObjects.MRO_Task.Section1);
    
    if(rows.length > 0) {
        for (let i = 0; i < rows.length; i++) {
            await fixture.page.waitForTimeout(1000);
            const cells = await fixture.page.$$("//div[@class='job-cart-box']/mat-selection-list//div[@class='mat-list-text']");
            for (let j = 0; j < cells.length; j++) {
                const cellText = await cells[j].innerText();
               Log.info(`${cellText}`);
            }
           Log.info("____________________________________________________");
          }
        }else{
         Log.info("No records available")
        }
  
      
    });



    Then('Click on the service types which are to be linked in the displayed list',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task.list1);
      await fixture.page.waitForTimeout(2000);
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task.list2);
      await fixture.page.waitForTimeout(2000);
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task.list3);
      await fixture.page.waitForTimeout(2000);
    });



    Then('Check whether the user able to click on the right chevron icon clicked which are viewd in select the service type field',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task.Chevron_icon1);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Task.Chevron_icon1)){
        Log.info("Chevron icon clicked");
        
      }else{
        Log.info("Chevron icon not clicked");
        
      }
    });



    Then('Check whether user able to view the Selected Service Types list',async() => {
      let Selected_Service_Types_Head = await fixture.page.textContent(MRO_Masters_PageObjects.MRO_Task.Selected_Service_Types_Head)
      Log.info(Selected_Service_Types_Head)
      Log.info("____________________________________________________");

  
      await fixture.page.waitForSelector(MRO_Masters_PageObjects.MRO_Task.Section2);

      const rows = await fixture.page.$$(MRO_Masters_PageObjects.MRO_Task.Section2);
        
        if(rows.length > 0) {
            for (let i = 0; i < rows.length; i++) {
                await fixture.page.waitForTimeout(1000);
                const cells = await fixture.page.$$("//div[@class='job-cart-box job-cart-box1']/mat-selection-list//div[@class='mat-list-text']");
                for (let j = 0; j < cells.length; j++) {
                    const cellText = await cells[j].innerText();
                  Log.info(`${cellText}`);
                }
              Log.info("____________________________________________________");
              }
            }else{
            Log.info("No records available")
            }
        });



    Then('Check whether the user able to click on the post button which is on the right button',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task.Post_btn);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Task.Post_btn)){
        Log.info("Post button clicked");
        
      }else{
        Log.info("Post button not clicked");
        
      }
      
    });



    Then('Check whether the user able to click on the Info icon',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task.Info_icon);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Task.Info_icon)){
        Log.info("Info icon clicked");
        
      }else{
        Log.info("Info icon not clicked");
        
      }
      
    });



    Then('Check whether the user able to view the selected service types when the Info icon is clicked',async() => {
      await fixture.page.waitForSelector(MRO_Masters_PageObjects.MRO_Task.Info_field_values);

      const rows = await fixture.page.$$(MRO_Masters_PageObjects.MRO_Task.Info_field_values);
        
        if(rows.length > 0) {
            for (let i = 0; i < rows.length; i++) {
                await fixture.page.waitForTimeout(1000);
                const cells = await fixture.page.$$("//kendo-popup/div/div");
                for (let j = 0; j < cells.length; j++) {
                    const cellText = await cells[j].innerText();
                  Log.info(`${cellText}`);
                }
              Log.info("____________________________________________________");
              }
            }else{
            Log.info("No records available")
            }
      
    });


    //---------------- Verify_the_MRO_Task_Edit ------------------//


    Then('Double click on the Task Id field in the table to get the recently added Task',async() => {
      await fixture.page.dblclick(MRO_Masters_PageObjects.MRO_Task.Task_ID)
      
    });


    //---------------- Verify_the_MRO_Task_Group_Addition ------------------//


    Then('Check whether user able to select the Task_Group field from the dropdown',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task_Group.Task_Group);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Task_Group.Task_Group)){
        Log.info("Task_Group field is selected");
        
      }else{
        Log.info("Task_Group field is not selected");
        
      }

      
    });


    Then('Check whether the user able to click on the add icon whick is on the right top of the Task_Group table',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Servicetype.Add_servicetype);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Servicetype.Add_servicetype)){
        Log.info("Add_Task_Group icon clicked");
        
      }else{
        Log.info("Add_Task_Group icon not clicked");
        
      }
    });


    // Then('Check whether the user able to click on the add service type button',async() => {
    //   await fixture.page.click(MRO_Masters_PageObjects.MRO_Servicetype.Addservicetype_btn)
    //   await fixture.page.waitForTimeout(2000);
    //   if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Servicetype.Addservicetype_btn)){
    //     Log.info("Addservicetype button is clicked");
        
    //   }else{
    //     Log.info("Addservicetype button is not clicked");
        
    //   }
      
    // });



    Then('Verify whether the user able to enter the Task in the Task_Group input field',async() => {
      const Task_group = await common_methods.RandomLetter();
      await fixture.page.fill(MRO_Masters_PageObjects.MRO_Task_Group.Task_Group_input,Task_group)
      Log.info(" Enter Task Group as " + Task_group + ". Entered successfully" );
    });



    Then('Check whether the user able to click on the add Task_Group button',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task_Group.AddTask_Group_btn);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Task_Group.AddTask_Group_btn)){
        Log.info("Add Task_Group button clicked");
        
      }else{
        Log.info("Add Task_Group button not clicked");
        
      }
      
    });


    Then('Check whether the user able to Double click on the Task Group ID to filter recently created task group',async() => {
      await fixture.page.dblclick(MRO_Masters_PageObjects.MRO_Task_Group.Task_Group_Id)
      await fixture.page.waitForTimeout(2000)
      
    });


    Then('Check whether user able to click on link icon for the recently created task group',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task_Group.Linking_icon);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Task_Group.Linking_icon)){
        Log.info("Linking icon clicked");
        
      }else{
        Log.info("Linking icon not clicked");
        
      }
      
    });


    Then('Check whether user able to select the task types from the list of tasks',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task_Group.list1);
      await fixture.page.waitForTimeout(2000);
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task.list2);
      await fixture.page.waitForTimeout(2000)
      
    });


    Then('Verify whether selected tasks are visible in the Selected task type section',async() => {
      await fixture.page.waitForSelector(MRO_Masters_PageObjects.MRO_Task_Group.Info_field_values);

      const rows = await fixture.page.$$(MRO_Masters_PageObjects.MRO_Task_Group.Info_field_values);
        
        if(rows.length > 0) {
            for (let i = 0; i < rows.length; i++) {
                await fixture.page.waitForTimeout(1000);
                const cells = await fixture.page.$$("//kendo-popup/div/div");
                for (let j = 0; j < cells.length; j++) {
                    const cellText = await cells[j].innerText();
                  Log.info(`${cellText}`);
                }
              Log.info("____________________________________________________");
              }
            }else{
            Log.info("No records available")
            }
      
    });


    Then('Verify whether user able to click on Post button in the Task Group Task Linking popup',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Task_Group.Post_btn)
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Task_Group.Post_btn)){
        Log.info("Post_btn button clicked");
        
      }else{
        Log.info("Post_btn button not clicked");
        
      }
      
      
    });


    //---------------- Verify_the_MRO_Task_Group_Edit ------------------//


    Then('Double click on the Task Group id feild in the table to get the recently added Task',async() => {
      await fixture.page.dblclick(MRO_Masters_PageObjects.MRO_Task_Group.Task_Group_Id)
      await fixture.page.waitForTimeout(2000)
    });


    //---------------- Verify_the_MRO_Service_Frequency_Addition ------------------//


    Then('Check whether user able to select the Service Frequency field from the dropdown',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Service_Frequency.Service_Frequency);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Service_Frequency.Service_Frequency)){
        Log.info("Service Frequency field is selected");
        
      }else{
        Log.info("Service Frequency field is not selected");
        
      }
    });


    Then('Check whether the user able to click on the add icon which is on the right top of the Service Frequency table',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Service_Frequency.Add_Service_Frequency);
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Service_Frequency.Add_Service_Frequency)){
        Log.info("Add_Service_Frequency icon clicked");
        
      }else{
        Log.info("Add_Service_Frequency icon not clicked");
        
      }
    });


    Then('Verify whether user able to select UoM type in the input field available',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Service_Frequency.Service_Frequency_UoM);
      await fixture.page.waitForTimeout(2000)
      await fixture.page.keyboard.press("ArrowDown")
      await fixture.page.keyboard.press("Enter")
    });


    Then('Verify whether user able to enter value in the input field available',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Service_Frequency.Service_Frequency_Value);
      await fixture.page.fill(MRO_Masters_PageObjects.MRO_Service_Frequency.Service_Frequency_Value, MRO_Masters_testdata.Value);
      Log.info(" Enter Value as " + MRO_Masters_testdata.Value + ". Entered successfully" );
    });



    Then('Check whether user able to click on Add Service Frequency button',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Service_Frequency.AddService_Frequency_btn)
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Service_Frequency.AddService_Frequency_btn)){
        Log.info("Addservicetype button is clicked");
        
      }else{
        Log.info("Addservicetype button is not clicked");
        
      }
    });


    Then('Check whether user able to click on Filter icon to filter recently created entry',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Service_Frequency.Filter)
    });


    Then('Verify whether user able to enter the value in the input field to filter recently created entry',async() => {
      await fixture.page.fill(MRO_Masters_PageObjects.MRO_Service_Frequency.ValueFill, MRO_Masters_testdata.Value)
    });


    Then('Check whether the details entered is there in the grid',async() => {
      await fixture.page.waitForTimeout(2000);
      const row = await fixture.page.$$(MRO_Masters_PageObjects.MRO_Service_Frequency.Grid_Head);
      if(row.length>0){
        for (let i = 0; i < row.length; i++) {
          await fixture.page.waitForTimeout(1000);
          const element = await row[i].innerText();
          // Here $ is to store the element
         Log.info(`${element}`)
          
        }
      }
    // THEN printing table rows from the grid // 
    await fixture.page.waitForSelector(MRO_Masters_PageObjects.MRO_Service_Frequency.Grid_Row);

    // Here $$ is to store the set of similar elements 
    const rows = await fixture.page.$$(MRO_Masters_PageObjects.MRO_Service_Frequency.Grid_Row);
    
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
        } else {
           Log.info("No records available");
        }
        
    });


    //---------------- Verify_the_MRO_Service_Frequency_Edit ------------------//


    Then('Verify whether user able to chance the active button to change the status',async() => {
      await fixture.page.click(MRO_Masters_PageObjects.MRO_Servicetype.YesNo_Btn)
      await fixture.page.waitForTimeout(2000);
      if(await fixture.page.locator(MRO_Masters_PageObjects.MRO_Servicetype.YesNo_Btn)){
        Log.info("Yes/No Button is clicked");
        
      }else{
        Log.info("Yes/No Button is not clicked");
        
      }
    });



