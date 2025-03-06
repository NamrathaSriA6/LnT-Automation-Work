import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect, Response } from "@playwright/test";
import * as testdata from "../../main/testdata/SurplusRedeployment_testdata.json";
import SurplusRedeploymentPageObjects from '../Locater/SurplusRedeployment_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import Log from "../hooks/until/logger";

// import { Route  } from 'playwright';


let Base: common_methods;
//Global Variable declarations
let surplusId: string;
let day: number;
let month: string;
let year: number;

Given('Navigate to Test Enviroment of Surplus Declaration', async function () {
  await fixture.page.goto(testdata.Environment) // goto() - redirects to the specified url
  Base = new common_methods(fixture.page)
});

Given('Check whether the user able Navigate to landing Page of Surplus Declaration', async function () {
  await fixture.page.click(SurplusRedeploymentPageObjects.LoginPage.Otheruser);
  await fixture.page.fill(SurplusRedeploymentPageObjects.LoginPage.Username, testdata.Username)
  await fixture.page.fill(SurplusRedeploymentPageObjects.LoginPage.Password, testdata.Password)

  await fixture.page.click(SurplusRedeploymentPageObjects.LoginPage.Login);
  
  await fixture.page.waitForTimeout(3000);
  console.log("User successfully logged in as " + testdata.Username)
});


Then('Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in Surplus Declaration Page', async() => {
    await fixture.page.click(SurplusRedeploymentPageObjects.DashBoard.AccessMenu);
  })
  
  Then('Check whether the user able to select the Asset Management from the dropdown in Surplus Declaration Page', async() => {
    await fixture.page.click(SurplusRedeploymentPageObjects.DashBoard.AssetManagement);
    })
  
  Then('Check whether the user able to select the operations and maintenance from the dropdown', async() => {
    await fixture.page.click(SurplusRedeploymentPageObjects.DashBoard.OperationandMaintenance)
  })
  
  Then('Check whether the user able to select the Asset Surplus Declaration from the dropdown in Surplus Declaration Page', async() => {
    await fixture.page.click(SurplusRedeploymentPageObjects.DashBoard.AssetSurplusDeclaration)
    })
  
  Then('Check whether the user able to enter Job code in the autocomplete box available in Surplus Declaration Page', async() => {
    await fixture.page.fill(SurplusRedeploymentPageObjects.Surplus.Job,"LE180399")
    await fixture.page.waitForTimeout(1000)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
    })
  
  Then('Check whether the user able to enter Asset code in the autocomplete box available in Surplus Declaration Page', async() => {
    // await fixture.page.pause()
    await fixture.page.waitForTimeout(2000)
    await fixture.page.fill(SurplusRedeploymentPageObjects.Surplus.Asset,"02040026")
    await fixture.page.waitForTimeout(2000)
    await fixture.page.keyboard.press("ArrowDown")
    await fixture.page.keyboard.press("Enter")
    })
  
  Then('Check whether user abel to click on Search button on the top right of the Page', async() => {
    
    // await fixture.page.route('**/*', route => route.continue());

  // Perform actions to trigger the internal API call
  // For example, click a button or perform any action that triggers the API call
    await fixture.page.click(SurplusRedeploymentPageObjects.Surplus.Search_btn)
  // Wait for the internal API call to complete
  // const response = await fixture.page.waitForResponse(response => {
  //   // Replace 'https://api.example.com' with the actual URL of your API endpoint
  //   return response.url().startsWith('https://eip4qaapi.lntecc.com');
  // });

  // // Check the response status code
  // console.log("Status "+response.status());
  // console.log("URL "+response.url());
  
  // expect(response.status()).toBe(200); // Replace 200 with the expected status code

    })
  
  Then('Chek whether User able to click on Add Surplus button in the right side of page to add surplus date', async() => {
    await fixture.page.click(SurplusRedeploymentPageObjects.Surplus.AddSurplus_btn)
    })
  
  Then('Verify whether user able to edit surplus effective from date in the surplus Menu', async() => {
    // await fixture.page.click(SurplusRedeploymentPageObjects.DashBoard.AssetSurplusDeclaration)
    })
  
  Then('Verify whether user able to add remarks for the surplus', async() => {
    await fixture.page.click(SurplusRedeploymentPageObjects.Surplus.Surplus_remarks)
    })
  
  Then('Verify whether user able to submit the Surplus declaration by clicking on submit button', async() => {
    await fixture.page.click(SurplusRedeploymentPageObjects.Surplus.Submit)
    })
  
  Then('Verify whether Surplus is created for the asset or not', async() => {
    await fixture.page.waitForTimeout(1000)
    if(await fixture.page.locator(SurplusRedeploymentPageObjects.Surplus.alert_box).isVisible()){
        const surplusId_generated = await fixture.page.textContent(SurplusRedeploymentPageObjects.Surplus.alert_box)
        if(surplusId_generated){
            surplusId = surplusId_generated.substring(0,33)
        }
        console.log("SUrplus Id --- "+surplusId);
        
    }
    })

    Then("Click on Profile Dropdown icon at top right of the page",async () => {
      await fixture.page.click(SurplusRedeploymentPageObjects.Surplus.Profiledropdown);
    })
    Then("Verify whether user able to click on SignOut button in the profile section",async () => {
      await fixture.page.click(SurplusRedeploymentPageObjects.Surplus.SignOut);
      await fixture.page.waitForTimeout(2000)
    })


  Then('Check whether user able to navigate to landing page of Cluster plant manager to accept the Surplus Request', async() => {
    await fixture.page.click(SurplusRedeploymentPageObjects.LoginPage.Otheruser);
    await fixture.page.fill(SurplusRedeploymentPageObjects.LoginPage.Username, testdata.Username2)
    await fixture.page.fill(SurplusRedeploymentPageObjects.LoginPage.Password, testdata.Password)
    await fixture.page.click(SurplusRedeploymentPageObjects.LoginPage.Login);
    await fixture.page.waitForTimeout(3000);
    console.log("User successfully logged in as " + testdata.Username2)
    })
  
  Then('Filter the recently created surplus by using filter aption available', async() => {
    await fixture.page.click(SurplusRedeploymentPageObjects.Clustermanager.Filter);
    await fixture.page.waitForTimeout(1000)
    await fixture.page.fill(SurplusRedeploymentPageObjects.Clustermanager.DocumentNo,surplusId);
    })
  
  Then("Verify whether user able to click on Document number to view details of that Document",async () => {
    await fixture.page.click(SurplusRedeploymentPageObjects.Clustermanager.DocumentClick)
  })
  Then("Verify whether user able to Accept the request by clicking on Tick Icon in the document view page",async () => {
    await fixture.page.click(SurplusRedeploymentPageObjects.Clustermanager.Accept)
  })
  Then("Verify whether user able to enter remarks for confirmation in popup appeared",async () => {
    await fixture.page.fill(SurplusRedeploymentPageObjects.Clustermanager.Remarks,"test")
  })
  Then("Verify whether user able to Click yes for confirmation in popup appeared",async () => {
    await fixture.page.click(SurplusRedeploymentPageObjects.Clustermanager.Confirmation_yes)
  })


  Then('Verify whether user able to click on Asset Code in the drid to view details', async () => {
    await fixture.page.waitForLoadState()
    await fixture.page.click(SurplusRedeploymentPageObjects.Surplus.AssetCode_click)
  })


  Then('Check whether user able to navigate to landing page of Cluster plant manager to Reject the Surplus Request', async() => {
    await fixture.page.click(SurplusRedeploymentPageObjects.LoginPage.Otheruser);
    await fixture.page.fill(SurplusRedeploymentPageObjects.LoginPage.Username, testdata.Username2)
    await fixture.page.fill(SurplusRedeploymentPageObjects.LoginPage.Password, testdata.Password)
    await fixture.page.click(SurplusRedeploymentPageObjects.LoginPage.Login);
    await fixture.page.waitForTimeout(3000);
    console.log("User successfully logged in as " + testdata.Username2)
    })

    Then("Verify whether user able to Reject the request by clicking on Close Icon in the document view page",async () => {
      await fixture.page.click(SurplusRedeploymentPageObjects.Clustermanager.Reject)
    })


    Then("Verify whether user able to reject the surplus by clicking on cancel icon appearing to right of Status",async () => {

      await fixture.page.hover(SurplusRedeploymentPageObjects.Surplus.AssetCode_click)
      await fixture.page.click(SurplusRedeploymentPageObjects.Surplus.Cancel_Surplus)
    })

    Then('Check whether user able to enter remarks for cancelling the Surplus', async () => {
      await fixture.page.fill(SurplusRedeploymentPageObjects.Surplus.Confirmation_Remarks, 'test')
      await fixture.page.click(SurplusRedeploymentPageObjects.Surplus.ConfirmationYes)
      
    })

    Then('Verify whether user able to click on Add Redeployement button', async () => {
      await fixture.page.click(SurplusRedeploymentPageObjects.Surplus.AddRedeployement_btn)
    })

    Then('Verify whether user able to select redeployement date', async () => {
      const dateString = await fixture.page.textContent(SurplusRedeploymentPageObjects.Surplus.SurplusEffectivedate)

      if(dateString){
        const datePattern = /^(\d{2})-(\w{3})-(\d{4})$/;
        const match = dateString.match(datePattern);

        if (match) {
            day = parseInt(match[1], 10); // Convert day to number
            month = match[2];             // Month as string
            year = parseInt(match[3], 10); // Convert year to number

            console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        } else {
            console.error('Date string does not match the expected format.');
        }
      }
      
      await common_methods.datepicker(SurplusRedeploymentPageObjects.Surplus.RedeployementDatepicker, year, month, day)
    })
