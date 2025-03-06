import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/Reports_testdata.json";
import Report_PageObjects from '../Locater/Reports_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import { log } from "console";
import assert from "assert";
import { exceptions } from "winston";
import test from "node:test";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";


let Base: common_methods;
//Global Variable declarations


Given(`Check whether the user able Navigate to landing Page of Reports`,async function (){
  await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(Common_PageObjects.LoginPage.Username, testdata.Username)
  await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(Common_PageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("User successfully logged in as " + testdata.Username)
});

Then('check whether user able to select Reports from the dropdown', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.LogSheetDetails.Reports)
})

Then('Verify whether Reports Page has been opened correctly', async () => {
  await fixture.page.waitForLoadState()
  await fixture.page.waitForTimeout(2000)
  if(await fixture.page.url() === testdata.ReportsURL){
    Log.info('Redirected to Reports page successfully')
  }else{
    Log.error('Redirection failed to Reports Page')
  }
})

Then('Verify whether Report Selection Field is taking input', async () => {
  try {
    await fixture.page.waitForSelector(Report_PageObjects.LogSheetDetails.Report_selection);
    await expect(await fixture.page.locator(Report_PageObjects.LogSheetDetails.Report_selection)).toBeEditable()
    Log.info('Report Selection Field is taking input')
  } catch (error) {
    Log.error('Report Selection Field is not taking input')
  }
})

Then('Verify whether user able to select LogSheet Details from the Report selection field', async () => {
  await fixture.page.waitForTimeout(2000)
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Logsheet_Details)
})

Then('Verify whether Report Mode Field is taking input', async () => {
  await fixture.page.waitForTimeout(5000)
  try {
    await expect(await fixture.page.locator(Report_PageObjects.LogSheetDetails.ReportMode)).toBeEditable()
    Log.info('Report Mode Field is taking input')
  } catch (error) {
    Log.error('Report Mode Field is not taking input')
  }
})

Then('verify whether user able to select Report mode', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.ReportMode, testdata.Mode)
})

Then('Verify whether Cluster Elements Field is taking input', async () => {
  try {
    await expect(await fixture.page.locator(Report_PageObjects.LogSheetDetails.ClusterElements)).toBeEditable()
    Log.info('Cluster Elements Field is taking input')
  } catch (error) {
    Log.error('Cluster Elements Field is not taking input')
  }
})

Then('Verify whether user able to select Job from the Cluster Elements field', async () => {
  await fixture.page.waitForLoadState()
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.ClusterElements, testdata.ClusterEle)
})

Then('Verify whether user able to click on Job Cart', async () => {
  await fixture.page.click(Report_PageObjects.LogSheetDetails.JobCart)
  
})

Then('Check whether user able to select a Job code from list of options', async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.dblclick(Report_PageObjects.LogSheetDetails.Job_select)
  await fixture.page.waitForTimeout(1000);
  Log.info(`Selected Job is  ${await fixture.page.textContent(Report_PageObjects.LogSheetDetails.Job_select)}`)
  await fixture.page.click(Report_PageObjects.LogSheetDetails.Post_Job)
})

Then('Verify whether Period DatePicker Field is taking input', async () => {
  try {
    await expect(await fixture.page.locator(Report_PageObjects.LogSheetDetails.Period)).toBeEditable()
    Log.info('Period DatePicker Field is taking input')
  } catch (error) {
    Log.error('Period DatePicker Field is not taking input')
  }
})

Then('Verify whether user able to Enter date in the Period DatePicker field', async () => {

  await common_methods.eipdaterangepicker(Report_PageObjects.LogSheetDetails.Period, 2020)
})

Then('Verify whether Asset Owner type field is taking input', async () => {
  try {
    await expect(await fixture.page.locator(Report_PageObjects.LogSheetDetails.AssetOwnerType)).toBeEditable()
    Log.info('Asset Owner type Field is taking input')
  } catch (error) {
    Log.error('Asset Owner type Field is not taking input')
  }
})

Then('Verify whether user able to select All in the Asset Owner type', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.AssetOwnerType, testdata.AssetOwnertype)

})

Then('Verify whether Asset Code field is taking input', async () => {
  try {
    await expect(await fixture.page.locator(Report_PageObjects.LogSheetDetails.AssetCode)).toBeEditable()
    Log.info('Asset Code Field is taking input')
  } catch (error) {
    Log.error('Asset Code Field is not taking input')
  }
})


Then('Check whether user able to enter Asset code in the Field available', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.AssetCode, testdata.Assetcode)
})

Then('Verify whether user able to click on Go Arrow to display the Details', async () => {
  // await fixture.page.pause()
  await fixture.page.click(Report_PageObjects.LogSheetDetails.Arrow)
  // await fixture.page.waitForTimeout(20000)
})

Then('Verify whether data is being displayed in the Page or not', async () => {
  await fixture.page.waitForTimeout(5000)
  await fixture.page.waitForLoadState()
  const visible = await fixture.page.locator(Report_PageObjects.BreakDownHistory.InfoMessage).isVisible();
  if(visible){
    Log.info(await fixture.page.textContent(Report_PageObjects.BreakDownHistory.InfoMessage))
    await fixture.page.waitForTimeout(1000)
    await fixture.page.click(Report_PageObjects.BreakDownHistory.Info_Ok_btn)
  }

  else{

    await fixture.page.click(`//span[text()='Fullscreen'] / preceding-sibling :: div`)
          await fixture.page.waitForTimeout(5000)
          let ReportData: string[] = [];
          let ReportHeader: string[] = [];
      
          // Locate the header columns
          const rows = await fixture.page.$$("(//div[@role='row'])"); // Replace with actual header XPath
          Log.info("Row size"+rows.length)
          
          let rowsize = rows.length>4 ? 4 : rows.length;

          const columns = await fixture.page.$$("(//div[@title='Click to filter'])");

          let columnSize = columns.length>10 ? 10 : columns.length;

          Log.info("Column Size" + columnSize)
          // await fixture.page.pause()
          // Loop through the columns
          for(let index=1; index<=rowsize ; index++){
              Log.info("____________________________________________________");
              await fixture.page.waitForTimeout(2000);
              for (let i = 1; i <= columnSize; i++) {
                  const string = await fixture.page.innerText(`(//div[@role='row'])[${index}] / div [@role='gridcell'][${i}]`); // XPath index of Values
                  const string1 = await fixture.page.textContent(`(//div[@title='Click to filter'])[${i}]`); // XPath index of ReportHeader

                  if(string)
                  ReportData.push(string.trim());
                  else
                  ReportData.push('NA')
                  if (string1) ReportHeader.push(string1);
                  else
                  ReportHeader.push('NA')
              }

              Log.info(`Value from Page Size: ${ReportData.length}`);
              Log.info(`header from Page Size: ${ReportHeader.length}`);

              for (let i = 0; i < ReportData.length; i++) {
                  const pageValue = ReportData[i];
                  const heading = ReportHeader[i];
                  
                  if (pageValue) {
                      Log.info(`Value of ${heading} = ${pageValue}`);
                  }
              }
              ReportData = [];
              ReportHeader = [];
              Log.info("____________________________________________________");
              await fixture.page.waitForTimeout(2000);
          }
    }
})




//********************************* */
//****BreakDown History************ */

Then('Verify whether user able to select BreakDown History from the Report selection field', async () => {
  await fixture.page.waitForTimeout(2000)
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Breakdown_History)
})

Then('Verify whether user able to change from date in the datepicker', async () => {
  await fixture.page.click(Report_PageObjects.BreakDownHistory.Fromdate);
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.BreakDownHistory.FromYear)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.BreakDownHistory.FromMonth)
})


Then('Verify whether user able to select Breakdown Estimation DER Breakup from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata["Breakdown_Estimation_(DER)_Breakup"])
})

Then('Verify whether user able to select Despatch Advice MVT from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata["Despatch_Advice_(MVT)"])
})

Then('Verify whether user able to select Surplus Details from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Surplus_Details)
})

Then('Verify whether user able to select MES Status from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.MES_Status)
})

Then('Verify whether user able to select Hire Cash Flow from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Hire_Cash_Flow)
})

Then('Check whether user able to check the Bill Period checkbox', async () => {
  await fixture.page.click(Report_PageObjects.HireCashFlow.Searchby)
})

Then('Verify whether user able to select Asset Master from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Asset_Master)
})

Then('Verify whether user able to change till date in the datepicker', async () => {
  await fixture.page.click(Report_PageObjects.AssetMaster.TillDate);
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.AssetMaster.TillYear)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.AssetMaster.TillMonth)
})

Then('Verify whether user able to select Category as PandM Vehicles', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.AssetMaster.CategoryExpand)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.AssetMaster.Category_option)
})

Then('Verify whether user able to select AMS Asset Status as PandM Vehicles', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.AssetMaster.AMS_Asset_Status_Expand)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.AssetMaster.AMS_Asset_Status_option)
})

Then('Verify whether user able to select ADR Detail Report from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.ADR_Detail_Report)
})

Then('Verify whether user able to select Productivity Report Report from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Productivity_Report)
})

Then('Verify whether user able to select Surplus Details PySpark Report from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata["Surplus_Details_(PySpark)"])
})

Then('Verify whether user able to select SchE Breakup Depreciation Assets Addition from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata["Sch-EBreakupDepreciationAssets_Addition"])
})

Then('Verify whether user able to select Financial year from the Field', async () => {
  await fixture.page.waitForTimeout(2000)
  await fixture.page.click(Report_PageObjects.SchEBreakupDepreciationAssetsAddition.FinancialYear)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.SchEBreakupDepreciationAssetsAddition.SelectYear)
})

Then('Verify whether user able to select SchE Breakup Depreciation Assets Disposed from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata["Sch-EBreakupDepreciationAssets_Disposed"])
})

Then('Verify whether user able to select SchE Breakup Depreciation Assets Obsoleted from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata["Sch-EBreakupDepreciationAssets_Obsoleted"])
})

Then('Verify whether user able to select SchE Breakup Depreciation Assets Transfered In from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata["Sch-EBreakupDepreciationAssets_Transfered_In"])
})

Then('Verify whether user able to select SchE Breakup Depreciation Assets Transfered Out from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata["Sch-EBreakupDepreciationAssets_Transfered_Out"])
})

Then('Verify whether user able to select Depreciation Item wise Report from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Depreciation_Item_wise)
})

Then('Verify whether Depreciation year field is taking input', async () => {
  await fixture.page.waitForTimeout(5000)
  try {
    await expect(await fixture.page.locator(Report_PageObjects.Depreciation_Itemwise.DepreciationYear)).toBeEditable()
    Log.info('Depreciation year Field is taking input')
  } catch (error) {
    Log.error('Depreciation year Field is not taking input')
  }
})

Then('Verify whether user able to select Depreciation year the list of options', async () => {
  const ReportMode = await fixture.page.locator(Report_PageObjects.Depreciation_Itemwise.DepreciationYear)
  await ReportMode.clear()
  await common_methods.ChooseOption()
})

Then('Verify whether Asset category field is taking input', async () => {
  await fixture.page.waitForTimeout(5000)
  try {
    await expect(await fixture.page.locator(Report_PageObjects.Depreciation_Itemwise.Assetcategory)).toBeEditable()
    Log.info('Asset Category Field is taking input')
  } catch (error) {
    Log.error('Asset Category Field is not taking input')
  }
})

Then('Verify whether user able to select Asset category the list of options', async () => {
  const ReportMode = await fixture.page.locator(Report_PageObjects.Depreciation_Itemwise.Assetcategory)
  await ReportMode.clear()
  await common_methods.ChooseOption()
})

Then('Verify whether Asset owner type field is taking input', async () => {
  await fixture.page.waitForTimeout(5000)
  try {
    await expect(await fixture.page.locator(Report_PageObjects.Depreciation_Itemwise.AssetOwnertype)).toBeEditable()
    Log.info('Asset Owner type Field is taking input')
  } catch (error) {
    Log.error('Asset Owner type Field is not taking input')
  }
})

Then('Verify whether user able to select Asset owner type the list of options', async () => {
  const ReportMode = await fixture.page.locator(Report_PageObjects.Depreciation_Itemwise.AssetOwnertype)
  await ReportMode.clear()
  await common_methods.ChooseOption()
})


Then('Verify whether user able to select Depreciation Job wise Report from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Depreciation_Job_wise)
})

Then('Verify whether user able to select Datewise Movement from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Datewise_Movement)
})

Then('Verify whether user able to select a category in the Category field for Datewise Movement Report', async () => {
  
})

Then('Verify whether Category Field is taking input', async () => {
  await fixture.page.waitForTimeout(5000)
  try {
    await expect(await fixture.page.locator(Report_PageObjects.Depreciation_Itemwise.DepreciationYear)).toBeEditable()
    Log.info('Depreciation year Field is taking input')
  } catch (error) {
    Log.error('Depreciation year Field is not taking input')
  }
})

Then('Verify whether user able to select a category in the Category field', async () => {
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.Datewise_Movement.Category_Expand)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.Datewise_Movement.Category_option)
})

Then('Verify whether user able to select Pending RN from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Pending_RN)
})

Then('Verify whether user able to select Monthwise CP from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Monthwise_CP)
})

Then('Verify whether CP for field is taking input', async () => {
  await fixture.page.waitForTimeout(5000)
  try {
    await expect(await fixture.page.locator(Report_PageObjects.Monthwise_CP.CP_for)).toBeEditable()
    Log.info('CP for Field is taking input')
  } catch (error) {
    Log.error('CP for Field is not taking input')
  }
})

Then('Verify whether user able to select CP from the list of options', async () => {
  await fixture.page.click(Report_PageObjects.Monthwise_CP.CP_for)
  await common_methods.ChooseOption()
})

Then('Verify whether user able to select Reconwise CP Breakup from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Reconwise_CP_Breakup)
})

Then('Check whether User able to select month and year', async () => {
  await fixture.page.click(Report_PageObjects.Reconwise_sCP_Breakup.Month_year);
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.BreakDownHistory.FromYear)
  await fixture.page.waitForTimeout(1000)
  await fixture.page.click(Report_PageObjects.Reconwise_sCP_Breakup.Month)
})

Then('Verify whether user able to select Asset Plant Cost Summary Report from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Asset_PlantCostSummary)
})

Then('Verify whether user able to select Assetwise CP Breakup from the Report selection field', async () => {
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Assetwise_CP_Breakup)
})

Then('Check whether the user able Navigate to landing Page of Pending Initial Commissioning Reports', async () => {
  await fixture.page.click(Common_PageObjects.LoginPage.Otheruser);
  await fixture.page.fill(Common_PageObjects.LoginPage.Username, testdata.Username1)
  await fixture.page.fill(Common_PageObjects.LoginPage.Password, testdata.Password)
  await fixture.page.click(Common_PageObjects.LoginPage.Login);
  await fixture.page.waitForTimeout(3000);
  Log.info("User successfully logged in as " + testdata.Username1)
})

Then('Verify whether user able to select Pending Initial Commissioning from the Report selection field', async () => {
  await fixture.page.waitForTimeout(2000)
  await common_methods.autocompleteField(Report_PageObjects.LogSheetDetails.Report_selection, testdata.Pending_Initial_Commissioning)
})
