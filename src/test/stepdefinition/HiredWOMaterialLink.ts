import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/HiredWOMaterialLink_testdata.json";
import HiredWOMaterialLink_PageObjects from '../Locater/HiredWOMaterialLink_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";

Given('Check whether the user able Navigate to landing Page of HiredWOMaterialLink', async () => {
    await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
    await fixture.page.fill(Common_PageObjects.LoginPage.Username, testdata.Username)
    await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password)
    await fixture.page.click(Common_PageObjects.LoginPage.Login);
    await fixture.page.waitForTimeout(3000);
    Log.info("User successfully logged in as " + testdata.Username)
  })
  
  Then('Check whether the user able to select the HiredWOMaterialLink from the dropdown', async () => {
      await fixture.page.waitForTimeout(1000)
      await fixture.page.click(HiredWOMaterialLink_PageObjects.HiredWOMaterialLink.HiredWOMaterialLink)
  })
  
  Then('Verify whether after selecting HiredWOMaterialLink page opened successfully', async () => {
      await fixture.page.waitForTimeout(3000)
      if(await fixture.page.url() === testdata.HiredWOMaterialLinkURL){
          Log.info('HiredWOMaterialLink Page Opened successfully')
      }else{
          Log.info('HiredWOMaterialLink Page not opened correctly')
      }
  })
  
  Then('Verify whether user able to enter JOB code in the autocomplete box available for HiredWOMaterialLink', async () => {
      await fixture.page.fill(HiredWOMaterialLink_PageObjects.HiredWOMaterialLink.JOB, testdata.JOB)
      await fixture.page.waitForTimeout(1000)
      await fixture.page.keyboard.press("ArrowDown")
      await fixture.page.keyboard.press("Enter")
  })
  
  Then('Verify whether user able to enter Asset code in the Autocomplete box available', async () => {
      await fixture.page.click(HiredWOMaterialLink_PageObjects.HiredWOMaterialLink.AssetCode)
      await common_methods.ChooseOption()
  })
  
  
  Then('Verify whether user able to click on GO Button to display HiredWOMaterialLink details', async () => {
      await fixture.page.click(HiredWOMaterialLink_PageObjects.HiredWOMaterialLink.Go_btn)
      await fixture.page.waitForTimeout(2000)
  })
  
  Then('Verify whether Popup appeared after clicking on GO button', async () => {
    await fixture.page.waitForTimeout(2000)
    if(await fixture.page.locator(Common_PageObjects.Common.PopupMessage).isVisible()){
        Log.info(await fixture.page.textContent(Common_PageObjects.Common.PopupMessage))
        await fixture.page.click(Common_PageObjects.Common.Popup_Ok_btn)
    }else{
        Log.info('No popup appeared')
    }
  })