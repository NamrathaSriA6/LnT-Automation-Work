import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
import { Page,Browser } from "@playwright/test";
import * as testdata from "../../main/testdata/AssetAvailability_testdata.json";
import PageObjects from '../Locater/Asset_Availability_PageObjects';
import {common_methods} from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import cluster from "cluster";
import { fix } from "mssql";



let Base: common_methods;
let submittedRFPNumber: string;


Given('Navigate to the Test Environment of Assest Availability page', async function () {
fixture.page.setViewportSize({ width:1900 , height:1000})
await fixture.page.goto(testdata.Environment)
Base = new common_methods(fixture.page)

});


Given('Check whether the user able Navigate to the landing Page', async function () {
await fixture.page.click(PageObjects.AssetAvailability.Otheruser);
await fixture.page.fill(PageObjects.AssetAvailability.Username, testdata.Username)
await fixture.page.fill(PageObjects.AssetAvailability.Password, testdata.Password)
await fixture.page.click(PageObjects.AssetAvailability.Login);
console.log("User successfully logged in as " + testdata.Username)
});


Then('check wheteher the user is able to Click on the MenuBar to click the flow', async function () {
await fixture.page.click(PageObjects.AssetAvailability.ClickMenu);
await fixture.page.click(PageObjects.AssetAvailability.AssetManagement);
await fixture.page.click(PageObjects.AssetAvailability.PlanningAndProcurement);
await fixture.page.click(PageObjects.AssetAvailability.AssetAvailability);
});
Then('Check whether the user is able to select the job code from the drop down', async function () {
await fixture.page.click(PageObjects.AssetAvailability.drpJoblistHR);
await fixture.page.waitForTimeout(1000)
await fixture.page.fill(PageObjects.AssetAvailability.drpJoblistHR, testdata.drpJoblistHR);
await fixture.page.click(PageObjects.AssetAvailability.JobList);
await fixture.page.waitForTimeout(2000);
// common_methods.ChooseOption();
// await fixture.page.click(PageObjects.AssetAvailability.JobListHR_select)
});
    
Then('check whether the user is able to select the group code from the drop down', async function () {
    await fixture.page.waitForTimeout(1000)
await fixture.page.click(PageObjects.AssetAvailability.input);
await fixture.page.waitForTimeout(1000)
await fixture.page.fill(PageObjects.AssetAvailability.input, testdata.input);
await fixture.page.waitForTimeout(2000)
// await fixture.page.click(PageObjects.AssetAvailability.Input_Selection);
await fixture.page.click(" (//kendo-list//li[@role='option'])[1]")
});  

Then('check whether the user is able to click the Go button', async function () {
await fixture.page.click(PageObjects.AssetAvailability.button);
await fixture.page.waitForTimeout(10000)
console.log("");
console.log(await fixture.page.textContent(PageObjects.AssetAvailability.button));
});
Then('go to Available-owned', async function () {
await fixture.page.click(PageObjects.AssetAvailability.AvailableOwned);
});
Then('check whether the user is able to click job in Available-owned', async function () {
await fixture.page.click(PageObjects.AssetAvailability.AvailableOwnedjob);
});
Then('check whether the user is able to click cluster in Available-owned', async function () {
await fixture.page.click(PageObjects.AssetAvailability.AvailableOwnedCluster);
console.log("Details of cluster");
});
Then('check whether the user is able to click BU in Available-owned', async function () {
await fixture.page.click(PageObjects.AssetAvailability.AvailableOwnedBU);  
});
Then('check whether the user is able to click IC in Available-owned', async function () {
await fixture.page.click(PageObjects.AssetAvailability.AvailableOwnedIC);  
});
Then('check whether the user is able to click Company in Available-owned', async function () {
await fixture.page.click(PageObjects.AssetAvailability.AvailableOwnedCompany);  
});
Then('go to Surplus-Owned', async function () {
await fixture.page.click(PageObjects.AssetAvailability.SurplusOwned); 
});
Then('check whether the user is able to click job in Surplus-Owned', async function () {
await fixture.page.click(PageObjects.AssetAvailability.SurplusOwnedjob);  
});
Then('check whether the user is able to click cluster in Surplus-Owned', async function () {
await fixture.page.click(PageObjects.AssetAvailability.SurplusOwnedcluster);  
});
Then('check whether the user is able to click BU in Surplus-Owned', async function () {
await fixture.page.click(PageObjects.AssetAvailability.SurplusOwnedBU);  
});
Then('check whether the user is able to click IC in Surplus-Owned', async function () {
await fixture.page.click(PageObjects.AssetAvailability.SurplusOwnedIC);  
});
Then('check whether the user is able to click Company in Surplus-Owned', async function () {
await fixture.page.click(PageObjects.AssetAvailability.SurplusOwnedCompany);  
});
Then('go to Available-Hired', async function () {
await fixture.page.click(PageObjects.AssetAvailability.AvailableHired); 
});
Then('check whether the user is able to click job in Available-Hired', async function () {
await fixture.page.click(PageObjects.AssetAvailability.AvailableHiredjob); 
});
Then('check whether the user is able to click cluster in Available-Hired', async function () {
await fixture.page.click(PageObjects.AssetAvailability.AvailableHiredcluster); 
});
Then('check whether the user is able to click BU in Available-Hired', async function () {
await fixture.page.click(PageObjects.AssetAvailability.AvailableHiredBU); 
});
Then('check whether the user is able to click IC in Available-Hired', async function () {
await fixture.page.click(PageObjects.AssetAvailability.AvailableHiredIC); 
});
Then('check whether the user is able to click Company in Available-Hired', async function () {
await fixture.page.click(PageObjects.AssetAvailability.AvailableHiredCompany); 
});

Then('check whether the user is able to click on show drop down menu and select it', async function () {
await fixture.page.click(PageObjects.AssetAvailability.dropdownmenu);  
const pages= await fixture.page.locator(PageObjects.AssetAvailability.dropdownmenu);
await pages.selectOption('5');
});

Then('check whether the user is able to click Excel Download and Download the Equipment Avaliable file', async function () {
await fixture.page.click(PageObjects.AssetAvailability.ExcelDownload); 
});

Then('check whether the user is able to Click Filter icon', async function () {
    await fixture.page.waitForTimeout(2000)
    await fixture.page.click(PageObjects.AssetAvailability.Asset_Management); 
//     await fixture.page.waitForTimeout(2000)
// await fixture.page.click(PageObjects.AssetAvailability.Filtericon);
//await fixture.page.fill(PageObjects.AssetAvailability.Filter, testdata.fliter);
});
Then('check whether the user is able to take input in AssetDescription or not', async function () {
    await fixture.page.waitForTimeout(2000)
    // await fixture.page.fill(PageObjects.AssetAvailability.Filter, testdata.fliter);
  });


//First printing table heading from the grid//
Then('check whether user is able view table',  async function () {
    await fixture.page.waitForTimeout(2000);
    const row = await fixture.page.$$('//kendo-grid/div/div/div/table/thead/tr');
    if(row.length>0){
        for(let i=0;i< row.length;i++){
            await fixture.page.waitForTimeout(1000);
            const element = await row[i].innerText();
            console.log(`${element}`)
        }
    }
    //Then printing the rows of the grid//
    await fixture.page.waitForSelector('//kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]');

    //here $$ is to store the set of similar elements
    const rows=await fixture.page.$$('//kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]');
    if(rows.length>0){
        for(let i=0;i<rows.length;i++){
            await fixture.page.waitForTimeout(1000);
            const cells=await rows[i].$$("//td");
            for(let j=0; j<cells.length;j++){
            const cellText=await cells[j].innerText();
            console.log(`${cellText}`);
            }
            console.log("-----------------------------------------------");
        }
    }else{
        console.log("No records avaliable");
    }

 } );


 Then('verify whether the job and group code is mandatory in Asset Availability',async() => {
    await fixture.page.click(PageObjects.AssetAvailability.button)
    if(!await fixture.page.locator(PageObjects.AssetAvailability.alert_box)){
        console.log(await fixture.page.textContent(PageObjects.AssetAvailability.alert_box));
    }else{
        console.log("Job code is not a mandatory field");
    }
 })

Then('check whether the user able to print the grid if the company number and grid count are same', async () => {
  
const companyCount=String(await fixture.page.locator(PageObjects.AssetAvailability.company).textContent())
  const Gridcount = String(await fixture.page.locator(PageObjects.AssetAvailability.CompanyGrid).count())
  console.log("company count is : "+companyCount)
  console.log("Grid count is : "+Gridcount)
  if(companyCount === Gridcount.toString()){
console.log("Both are matched")
await fixture.page.waitForTimeout(2000);
const row = await fixture.page.$$('//kendo-grid/div/div/div/table/thead/tr');
if(row.length>0){
    for(let i=0;i< row.length;i++){
        await fixture.page.waitForTimeout(1000);
        const element = await row[i].innerText();
        console.log(`${element}`)
    }
}
//Then printing the rows of the grid//
await fixture.page.waitForSelector('//kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]');

//here $$ is to store the set of similar elements
const rows=await fixture.page.$$('//kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]');
if(rows.length>0){
    for(let i=0;i<rows.length;i++){
        await fixture.page.waitForTimeout(1000);
        const cells=await rows[i].$$("//td");
        for(let j=0; j<cells.length;j++){
        const cellText=await cells[j].innerText();
        console.log(`${cellText}`);
        }
        console.log("-----------------------------------------------");
    }
}else{
    console.log("No records avaliable");
}


  }else{
    console.log("Both are not matched")
  }
})

    
    
Then('check whether the user able to compare the each section count and grid count and print the grid if matches', async () => {
   const count =await fixture.page.locator(PageObjects.AssetAvailability.AvailableOwnedSection).count();
    for(let index=1;index<count;index++){
        const sectioncount=String(await fixture.page.locator(PageObjects.AssetAvailability.AvailableOwnedSection).nth(index).textContent())
        const Gridcount = String(await fixture.page.locator(PageObjects.AssetAvailability.CompanyGrid).count())
       
        console.log("company count is : "+sectioncount)
        console.log("Grid count is : "+Gridcount)
        
        if(sectioncount === Gridcount.toString()){
      console.log("Both are matched")
      await fixture.page.waitForTimeout(2000);
      const row = await fixture.page.$$('//kendo-grid/div/div/div/table/thead/tr');
      if(row.length>0){
          for(let i=0;i< row.length;i++){
              await fixture.page.waitForTimeout(1000);
              const element = await row[i].innerText();
              console.log(`${element}`)
          }
      }
      //Then printing the rows of the grid//
      await fixture.page.waitForSelector('//kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]');
      
      //here $$ is to store the set of similar elements
      const rows=await fixture.page.$$('//kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]');
      if(rows.length>0){
          for(let i=0;i<rows.length;i++){
              await fixture.page.waitForTimeout(1000);
              const cells=await rows[i].$$("//td");
              for(let j=0; j<cells.length;j++){
              const cellText=await cells[j].innerText();
              console.log(`${cellText}`);
              }
              console.log("-----------------------------------------------");
          }
      }else{
          console.log("No records avaliable");
      }
      
      
        }else{
          console.log("Both are not matched")
        }
    }


})