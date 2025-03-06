import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/CostofPlant.json";
import CPInitiation_PageObjects from '../Locater/CPInitiation_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";



let Base: common_methods;
let Assetcode: string;

//Global Variable declarations

Given('Check whether the user able Navigate to landing Page of Cost of plant', async () => {
  await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(Common_PageObjects.LoginPage.Username, testdata.Username)
  await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(Common_PageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("User successfully logged in as " + testdata.Username)
})

Then('Check whether the user able to select the Cost of plant from the dropdown', async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(CPInitiation_PageObjects.Initiation.Costofplant)
})

Then('Check whether the user able to select the Initiation from the dropdown', async () => {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(CPInitiation_PageObjects.Initiation.Initiation)
})

Then('Verify whether after selecting Cost of plant Initiation page opened successfully', async () => {
    await fixture.page.waitForLoadState()
    if(await fixture.page.url() === testdata.CPInitiationURL){
        Log.info('CP Initiation Page opened successfully')
    }else{
        Log.info('Error in opening CP Initiation page')
    }
})

Then('Verify whether user able to select Job Code from the list of available job codes', async () => {
    await fixture.page.click(CPInitiation_PageObjects.Initiation.Jobcode)
    await common_methods.ChooseOption()
})

Then('Verify whether User able to print the details of CP Month and Year', async () => {
    const CPMonth_Year = await fixture.page.textContent(CPInitiation_PageObjects.Initiation.CPMonth_Year)
    const Month_Year = await fixture.page.textContent(CPInitiation_PageObjects.Initiation.Month_Year)

    Log.info(`${CPMonth_Year} = ${Month_Year}`)
})

Then('Verify whether user able to click on Give Request button', async () => {
    await fixture.page.click(CPInitiation_PageObjects.Initiation.GiveRequest_btn)
})

Then('Verify whether user able to print the details of all the process requests', async () => {
    await fixture.page.waitForTimeout(5000)
    await common_methods.PrintTabledetails()
})

Then('Verify whether Popup handled correctly', async () => {
    Log.info(await fixture.page.textContent(Common_PageObjects.Common.PopupMessage));
    await fixture.page.click(Common_PageObjects.Common.Popup_Ok_btn)
})

Then('Verify whether user able to click in Missing Assets toggle', async () => {
    await fixture.page.click(CPInitiation_PageObjects.Initiation.MisingAssets_toggle)
})

Then('Verify whether user able to print Missing Asset details', async () => {
    await fixture.page.waitForLoadState()
    Log.info('Missing Asset Details')
    await common_methods.PrintTabledetails()
})

Then('Verify whether user able to print Minor Asset Allocation details', async () => {
    Log.info('MinorAsset Allocation Details')
    await common_methods.PrintTabledetails()
})

Then('', async () => {
    
})

Then('', async () => {
    
})