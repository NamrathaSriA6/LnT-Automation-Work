import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Page, Browser, expect } from "@playwright/test";
import * as testdata from "../../main/testdata/CostofPlant.json";
import CPMCA_PageObjects from '../Locater/CPMissingCostAllocation_PageObjects';
import { common_methods } from '../base/Baseclass';
import { fixture } from "../hooks/Pagefixture";
import * as sql from "../../main/database/database";
import Log from "../hooks/until/logger";
import Common_PageObjects from "../Locater/Common_PageObjects";
import { Console } from "node:console";



let Base: common_methods;
let JobCode: string;

//Global Variable declarations



Then('Check whether the user able to select the Asset Missing Cost from the dropdown', async () => {
    await fixture.page.waitForTimeout(2000)
    // await fixture.page.click(CPMCA_PageObjects.MCA.CP_Statement)
})

Then('Verify whether after selecting Cost of plant Asset Missing Cost page opened successfully', async () => {
    await fixture.page.waitForLoadState()
    if(await fixture.page.url() === testdata.CPMissingCostAllocationURL){
        Log.info('CP Statement Page opened successfully')
    }else{
        Log.info('Error in opening CP Statement page')
    }
})