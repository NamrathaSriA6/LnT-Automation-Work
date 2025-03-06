import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
import { Page,Browser } from "@playwright/test";
import * as testdata from "../../main/testdata/AssestTechnicalDetailsMaster_testdata.json";
import PageObjects from '../Locater/AssestTechnicalDetailsMaster_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import cluster from "cluster";
import { fix } from "mssql";
import { text } from "stream/consumers";


let Base: common_methods;
let submittedRFPNumber: string;

Given('Navigate to The Assest AssestTechnicalDetailsMaster Enviroment', async function () {

await fixture.page.goto(testdata.Environment)
Base = new common_methods(fixture.page)
});

Then('Check whether the user able Navigate to the landing Page of AssestTechnicalDetailsMaster', async function () {
    await fixture.page.click(PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(PageObjects.LoginPage.Username,testdata.AssestTechnicalnewUsername1);
    await fixture.page.fill(PageObjects.LoginPage.Password, testdata.Password);
    await fixture.page.click(PageObjects.LoginPage.Login);
    console.log("User successfully logged in as " + testdata.AssestTechnicalnewUsername1);
    });

Then('check wheteher the user is able to Click on the MenuBar for flow of the page', async function () {
   await fixture.page.click(PageObjects.LoginPage.ClickMenu);
    });

Then('check wheteher the user is able to Click on the MenuBar and go to the AssestManagemnt', async function () {
  await fixture.page.click(PageObjects.LoginPage.AssetManagement);
});

Then ('Verify the user is able to click on the Inspection and Technical Detail Entry',async function () {
    await fixture.page.click(PageObjects.LoginPage. Inspection_Technical_Details_Entry);  
});

Then ('Verify The user is able to Click on the Asset Technical Details and Master',async function () {
    await fixture.page.click(PageObjects.LoginPage. Assest_Details_master);  
});

Then ('Click on the Ic and Check the whether the user is able to select',async function () {
    await fixture.page.click(PageObjects.LoginPage. Asset_Technical_Details_Master_IC);  
    await fixture.page.waitForTimeout(1000);
    await common_methods.ChooseOption();
});

Then ('Verify whether the user is able to click on the job and select',async function () {
    await fixture.page.click(PageObjects.LoginPage. Asset_Technical_Details_Master_job);  
    await fixture.page.waitForTimeout(1000);
    await common_methods.ChooseOption();
});

Then ('Check whether the user is able to Click on the Category input',async function () {
    await fixture.page.click(PageObjects.LoginPage. Asset_Technical_Details_Master_categorygrp);  
    await fixture.page.waitForTimeout(1000);
    await common_methods.ChooseOption();
});

Then ('Verify the user is able to click on the input field of owner code',async function () {
    await fixture.page.click(PageObjects.LoginPage. Assest_Technical_Details_ownercode);  
    await fixture.page.waitForTimeout(1000);
    await common_methods.ChooseOption();
});



Then ('Verify the user is able to click on the Assest input',async function () {
    // await fixture.page.click(PageObjects.LoginPage. Assest_Technical_Details_Assest);  
    await fixture.page.click(PageObjects.LoginPage. Assest_DropDown);  
    // await fixture.page.waitForTimeout(1000);
    await common_methods.ChooseOption();
    await fixture.page.waitForTimeout(1000);

});

Then ('Check whether the user is able to Click on the Search Button',async function () {
    await fixture.page.click(PageObjects.LoginPage. Assest_Technical_Details_Search);  
});

// Poisitive Scenerio
Then ('Click on the Ic and Check whether the user is able to select',async function () {
    await fixture.page.click(PageObjects.LoginPage.Asset_Technical_Details_Master_IC);  
    await fixture.page.fill(PageObjects.LoginPage.Asset_Technical_Details_Master_IC, testdata.Assest_Technical_Ic);
    const IC = await fixture.page.inputValue(PageObjects.LoginPage.Asset_Technical_Details_Master_IC);
   
    console.log(IC);
    
    if(IC?.trim() === 'Buildings & Factories'){
       console.log("IC matched");
        }else{
            console.log("IC not matched");
        }
});

Then ('Verify whether the user is able to click on the job and select valid job code',async function () {
    await fixture.page.click(PageObjects.LoginPage.Asset_Technical_Details_Master_job);  
    await fixture.page.waitForTimeout(1000);
    await fixture.page.fill(PageObjects.LoginPage.Asset_Technical_Details_Master_job, testdata.Assest_Technical_Job);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press('ArrowDown')
    await fixture.page.keyboard.press('Enter')
});

Then ('Check whether the user is able to Click on the Category input field',async function () {
    await fixture.page.click(PageObjects.LoginPage.Asset_Technical_Details_Master_categorygrp);  
    await fixture.page.fill(PageObjects.LoginPage.Asset_Technical_Details_Master_categorygrp, testdata.Assest_Technical_Category);
});

Then ('Verify the user is able to click on the input field of owner code and choose the owner code',async function () {
    await fixture.page.click(PageObjects.LoginPage.Assest_Technical_Details_ownercode);  
    await fixture.page.fill(PageObjects.LoginPage.Assest_Technical_Details_ownercode, testdata.Assest_Technical_OwnerCode);
});

Then ('check wheteher the user is able to click and  select the status',async function () {
    await fixture.page.click(PageObjects.LoginPage.Assest_Technical_Details_Status);  
    await fixture.page.fill(PageObjects.LoginPage.Assest_Technical_Details_Status, testdata.Assest_Technical_Status);
});


Then ('Verify the user is able to click on the Assest input field and select minimum with 4 characters',async function () {

    await fixture.page.waitForLoadState()
    await fixture.page.fill(PageObjects.LoginPage. Assest_Technical_Details_Assest, '01240030' );

    await fixture.page.waitForTimeout(1000);
    await fixture.page.keyboard.press('ArrowDown');
    await fixture.page.keyboard.press('Enter');

});

Then ('Check whether the user is able to Click on the Search Button to search the data',async function () {
   await fixture.page.click(PageObjects.LoginPage.Assest_Technical_Details_Search);  
});

Then ('click New assest button To add the new assests',async function () {
    await fixture.page.click(PageObjects.LoginPage.New_Assest_Create);  
 });
 

Then ('Verify That the user is able to click on the AssestType and select the Assest Type',async function () {
  await fixture.page.click(PageObjects.LoginPage. New_Assest_Assest_Type);
  await fixture.page.fill(PageObjects.LoginPage.New_Assest_Assest_Type, testdata.New_Assest_AssestType);
  await fixture.page.waitForTimeout(2000)
  await fixture.page.keyboard.press("ArrowDown")
  await fixture.page.keyboard.press("Enter")
});
// await common_methods.ChooseOption(); 


Then ('Check whether the user is able enter the job code',async function () {
    await fixture.page.click(PageObjects.LoginPage. New_Assest_Job_code); 
    await common_methods.ChooseOption(); 
});

Then ('verify that the user is able click on the Assest grp and select from dropdown MenuBar',async function () {
    await fixture.page.click(PageObjects.LoginPage.New_Assest_Assest_Grp); 
    await common_methods.ChooseOption(); 
});

Then ('Check whether the user is able to enter the AssestDescription',async function () {
    await fixture.page.click(PageObjects.LoginPage.New_Assest_Assest_Description)
    const text= await common_methods.RandomLetter();
   await fixture.page.fill(PageObjects.LoginPage.New_Assest_Assest_Description, text); 
});

Then('Verify whether user able to add Parent Asset code n the autocompletebox available',async () => {
    await fixture.page.click(PageObjects.LoginPage.Parent_Assest_Code)
})

Then ('Verify the user is able to click on the DC Number and enter',async function () {
    await fixture.page.click(PageObjects.LoginPage.New_Assest_DC_Number); 
    await fixture.page.fill(PageObjects.LoginPage.New_Assest_DC_Number, testdata.New_Assest_DCNumber);
});

Then ('Check whether the user is able to click on the DC Date and able to pick the date from the date picker',async function () {
    await fixture.page.click(PageObjects.LoginPage. New_assest_Date_Picker); 
    await fixture.page.click(PageObjects.LoginPage. New_assest_Date_Today); 
    
});


Then ('Check whether the user is able to click on the Recieved Date and able to pick the date from the date picker',async function () {

    await fixture.page.click(PageObjects.LoginPage. New_Assest_Received_Date_Picker); 
    await fixture.page.click(PageObjects.LoginPage. New_assest_Date_Today); 
    
});


Then('Verify the user is able to click on the PO Number in the new Assest',async function (){
    await fixture.page.click(PageObjects.LoginPage.New_Assest_Po_Number); 
    await fixture.page.fill(PageObjects.LoginPage.New_Assest_Po_Number, testdata.New_Assest_PONumber);
});

Then('Check whether the user is able to click on the purchase Date',async function (){
    await fixture.page.click(PageObjects.LoginPage. New_Assest_Purchase_Date_Picker); 
    await fixture.page.click(PageObjects.LoginPage. New_assest_Date_Today); 
});


Then('Verify that the user is able to enter the purchase value',async function (){
    await fixture.page.click(PageObjects.LoginPage.New_assest_Purchase_Value); 
    await fixture.page.click(PageObjects.LoginPage. New_Assest_PurchaseValue_Clear); 
    await fixture.page.fill(PageObjects.LoginPage.New_assest_Purchase_Value, testdata.New_Assest_PurchaseValue);
});

Then('Check whether the user is able to click acquisition Value field and the enter the input',async function (){
    await fixture.page.click(PageObjects.LoginPage.New_Assest_Acquisition_Value); 
    await fixture.page.fill(PageObjects.LoginPage.New_Assest_Acquisition_Value, testdata.New_Assest_AcquisitionValue);
});

Then('Check Whether the user is able to click on the Acquisition Date and select the date',async function (){
    await fixture.page.click(PageObjects.LoginPage. New_Assest_Acquisition_DatePicker); 
    await fixture.page.click(PageObjects.LoginPage. New_assest_Date_Today); 
});

Then('parent Assest',async function(){

    if(await fixture.page.locator(PageObjects.LoginPage.Parent_Assest_Code).isVisible()){
        await fixture.page.click(PageObjects.LoginPage.Parent_Assest_Code); 
        await fixture.page.keyboard.press("ArrowDown")  
        await fixture.page.keyboard.press("Enter")  
        // await fixture.page.fill(PageObjects.LoginPage.Parent_Assest_Code, testdata.New_Assest_Parent);        
    }else{
        console.log("Parent Assest is not visible");
    }
});

 Then('Cummulative Depriciation',async function(){
    if(await fixture.page.locator(PageObjects.LoginPage.Cummulative_depriciation).isVisible()){
        console.log(await fixture.page.textContent(PageObjects.LoginPage.Cummulative_depriciation));
    }else{
        console.log("Cummulative Depriciation is not a mandatory field");
    }
 })

 Then('Click on the Create Assest',async function(){
    await fixture.page.click(PageObjects.LoginPage.New_Assest_Added);  
})

