import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
import { Page,Browser, expect } from "@playwright/test";
import * as AssetInspection_testdata from "../../main/testdata/AssetInspection_testdata.json";
import AssetInspection_Pageobjects from '../Locater/Asset_Inspection_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import cluster from "cluster";
import { fix } from "mssql";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";
import AssetInspection_PageObjects from "../Locater/Asset_Inspection_PageObjects";


let Base: common_methods;
let GIN_Num : string;

    Given('Navigate to Test Enviroment of AssetInspection', async function () {
        await fixture.page.goto(AssetInspection_testdata.Environment)
        Base = new common_methods(fixture.page)
        });
    
    
    Given('Check whether the user able Navigate to the landing Page of AssetInspection Page', async function () {
        
    await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Common_PageObjects.LoginPage.Username, AssetInspection_testdata.Username)
    await fixture.page.fill(Common_PageObjects.LoginPage.Password, AssetInspection_testdata.Password)
    await fixture.page.click(Common_PageObjects.LoginPage.Login);
    console.log("User successfully logged in as " + AssetInspection_testdata.Username)
    });

Then('Check whether the user able to select the Inspection and technical Detail Entry from the dropdown',async ()=>{
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(AssetInspection_Pageobjects.AssetInspection.Inspection_TechnicalDetailEntry)
})
Then('Check whether the user able to select the Asset Inspection from the dropdown',async ()=>{
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(AssetInspection_Pageobjects.AssetInspection.AssetInspection)
})
Then('Check whether user able to clear Type Input Field',async ()=>{
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(AssetInspection_Pageobjects.AssetInspection.ClearType)
})
Then('Check whether user able to enter Type in the autocomplete box available',async ()=>{
    await fixture.page.fill(AssetInspection_Pageobjects.AssetInspection.Type_input, AssetInspection_testdata.Type)
})
Then('Verify whether user able to enter Job in the autocomplete box available',async ()=>{
    await fixture.page.fill(AssetInspection_Pageobjects.AssetInspection.Job_input,AssetInspection_testdata.JOB)
    await fixture.page.waitForTimeout(2000)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
    await fixture.page.waitForTimeout(1000)
    Log.info("Job Field entered is "+await fixture.page.inputValue(AssetInspection_Pageobjects.AssetInspection.Job_input))
    await fixture.page.locator(AssetInspection_Pageobjects.AssetInspection.Job_input).clear()
})
Then('Verify whether user able to enter Document number in the autocomplete box available',async ()=>{
    await fixture.page.fill(AssetInspection_Pageobjects.AssetInspection.Doc_num,AssetInspection_testdata.Doc_num)
    await fixture.page.waitForTimeout(1000)
    Log.info("Document number entered is "+await fixture.page.inputValue(AssetInspection_Pageobjects.AssetInspection.Doc_num))
    await fixture.page.locator(AssetInspection_Pageobjects.AssetInspection.Doc_num).clear()
})
Then('Verify whether user able to enter Status in the autocomplete box available',async ()=>{
    // await fixture.page.click(AssetInspection_Pageobjects.AssetInspection.ClearStatus)
    await fixture.page.click(AssetInspection_PageObjects.AssetInspection.Status_input)
    await fixture.page.waitForTimeout(2000)
    await fixture.page.keyboard.press("ArrowDown")
    // await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")

})

Then('Check whether user able to enter Duration in the datepicker available',async ()=>{
    // await fixture.page.pause()
    await common_methods.eipdaterangepicker(AssetInspection_PageObjects.AssetInspection.Duration_date_input,2020)

})

Then('Verify whether user able to click on Search button',async ()=>{
    await fixture.page.click(AssetInspection_PageObjects.AssetInspection.Search_btn)

})
Then('Verify whether user able to Click on GIN number open the deails of that Job',async ()=>{
    await fixture.page.waitForSelector(AssetInspection_PageObjects.AssetInspection.GIN_Num_click);
    await fixture.page.click(AssetInspection_PageObjects.AssetInspection.GIN_Num_click);
    const gin_num = await fixture.page.textContent(AssetInspection_PageObjects.AssetInspection.GIN_Num_click)
    if(gin_num){
        GIN_Num = gin_num.trim()
    }

})
Then('Check whether GIn Number in the Page is matching to the one we clicked',async ()=>{

    await fixture.page.waitForSelector(AssetInspection_PageObjects.AssetInspection.Current_Gin_Num)
    const CurrentGin = await fixture.page.textContent(AssetInspection_PageObjects.AssetInspection.Current_Gin_Num)
    if(CurrentGin?.trim() == GIN_Num){
        Log.info(GIN_Num +" is matching")
    }else{
        Log.info("Gin Number is not matching")
    }
})
Then('Check whether Type is same as given in the previous Page',async ()=>{
    const Type = await fixture.page.textContent(AssetInspection_PageObjects.AssetInspection.Current_Gin_Num)
    if(Type?.trim() == AssetInspection_testdata.Type){
        Log.info(Type +" is matching")
    }else{
        Log.info("Type is not matching")
    }
}
)

Then("Check whether user able to select Accept All checkbox in the grid header section", async () => {
    await fixture.page.click(AssetInspection_PageObjects.AssetInspection.AcceptAll_checkbox)
    if(await fixture.page.locator(AssetInspection_PageObjects.AssetInspection.AcceptAll_checkbox).isChecked){
        Log.info("Accept All Checkbox is checked");
    }else{
        Log.info("Accept All checkbox is not checked")
    }
})

Then("Check whether user able to click on submit button", async () => {
    await fixture.page.click(AssetInspection_PageObjects.AssetInspection.Submit_btn)
})