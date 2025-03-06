import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
import { Page,Browser } from "@playwright/test";
import * as testdata from "../../main/testdata/Dehiring_testdata.json";
import PageObjects from '../Locater/Dehiring_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import cluster from "cluster";
import Common_PageObjects from "../Locater/Common_PageObjects";


let Base: common_methods;
let submittedRFPNumber: string;

Given('Navigate to Test Enviroment of Dehiring', async function () {
// fixture.page.setViewportSize({ width:1900 , height:1000})
await fixture.page.goto(testdata.Environment)
Base = new common_methods(fixture.page)
  
  });

Given('Check whether the user able Navigate to Asset De-Hire landing Page', async function () {
    await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Common_PageObjects.LoginPage.Username,testdata.AssetDe_HireUserName);
    await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password);
    await fixture.page.click(Common_PageObjects.LoginPage.Login);
    console.log("User successfully logged in as " + testdata.AssetDe_HireUserName);
});

  Then('Click on the Asset De-Hire MenuBar and go to Asset Management>Planning & Procurement>Dehiring', async function () {
  await fixture.page.click(Common_PageObjects.DashBoard.AccessMenu);
  await fixture.page.click(Common_PageObjects.DashBoard.AssetManagement);
  await fixture.page.click(Common_PageObjects.DashBoard.Planning_and_Procurement);
  await fixture.page.click(PageObjects.Dehiring.AssetDe_HireAssetDehiring);
  });

Then('Check whether the user is able to select the Asset De-Hirejob code from the drop down', async function () {
await common_methods.autocompleteField(PageObjects.Dehiring.AssetDe_HireAssetjob, testdata.AssetDe_HireJobList)
});



Then('Check whether the user is able to click the Asset De-Hire Go Button', async function () {
await fixture.page.click(PageObjects.Dehiring.AssetDe_HireAssetGo);
await fixture.page.waitForTimeout(2000)
});
Then('Check whether the user is able to click on show drop down menu and select the value', async function () {
await fixture.page.click(PageObjects.Dehiring.AssetDe_HireShow);  
const pages= await fixture.page.locator(PageObjects.Dehiring.AssetDe_HireShow);
await pages.selectOption('10');
await fixture.page.waitForTimeout(5000);
const lists =await fixture.page.$$('//table/tbody/tr');
console.log(" length of the objects : "+lists.length);
await fixture.page.waitForTimeout(2000);
});


Then('Check whether the user is able click on the Check box of Reason to Hire', async function () {
  await fixture.page.click(PageObjects.Dehiring.Reason_for_Dehire_Checkbox);  
});


Then('Verify Whether the user is able to click on the input field and enter', async function () {
  await fixture.page.click(PageObjects.Dehiring.Reason_For_Dehire_Description);  
  await fixture.page.fill(PageObjects.Dehiring.Reason_For_Dehire_Description, testdata.Dehire_Reason);
});

Then('Check whether the user is able to click on the action icon', async function () {
  await fixture.page.click(PageObjects.Dehiring.Reason_For_Dehire_Action);  
});


