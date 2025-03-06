import { Locator, Page, expect } from "@playwright/test";

import Common_PageObjects from "../Locater/Common_PageObjects";
import { fixture } from "../hooks/Pagefixture";
import Log from "../hooks/until/logger";
import { compileFunction } from "vm";

import { Given, Then, When } from "@cucumber/cucumber";
 

export class common_methods {
    page: Page;
   
    constructor(page: Page) {
        this.page = page;
    }
    static timeOut = 10000;


    public static async PrintTabledetails(){
        if(await fixture.page.locator('//tbody //tr[@role="row"][1]').isVisible()){

          let TableData: string[] = [];
          let TableHeader: string[] = [];
        
          // Locate the header columns
          const rows = await fixture.page.$$('//tbody //tr[@role="row"]'); // Replace with actual header XPath
          Log.info("Row size"+rows.length)
          
          let rowsize = rows.length>4 ? 4 : rows.length;

          const columns = await fixture.page.$$('//th[@role="columnheader"]');

        //   let columnSize = columns.length>10 ? 10 : columns.length;

        //   Log.info("Column Size" + columnSize)
          // await fixture.page.pause()
          // Loop through the columns
          for(let index=1; index<=rowsize ; index++){
              Log.info("____________________________________________________");
              await fixture.page.waitForTimeout(2000);
              for (let i = 1; i <= columns.length; i++) {
                const string = await fixture.page.innerText(`(//tbody //tr[@role="row"])[${index}] // td[@role="gridcell"][${i}]`); // XPath index of Values
                const string1 = await fixture.page.textContent(`//th[@role="columnheader"][${i}]`); // XPath index of TableHeader

                  if(string)
                  TableData.push(string.trim());
                  else
                  TableData.push('NA')
                  if (string1) TableHeader.push(string1);
                  else
                  TableHeader.push('NA')
              }

              Log.info(`Table Value from Page Size: ${TableData.length}`);
              Log.info(`Table header from Page Size: ${TableHeader.length}`);

              for (let i = 0; i < TableData.length; i++) {
                  const pageValue = TableData[i];
                  const heading = TableHeader[i];
                  
                  if (pageValue) {
                      Log.info(`Value of ${heading} = ${pageValue}`);
                  }
              }
              TableData = [];
              TableHeader = [];
              Log.info("____________________________________________________");
              await fixture.page.waitForTimeout(2000);
          }
        } else{
            Log.info(await fixture.page.textContent('//tbody//tr//td[1]'))
        }
    }

    public static async autocompleteField(locator: string, data: string){
        await fixture.page.waitForTimeout(2000)
        await fixture.page.locator(locator).clear()
        await fixture.page.waitForTimeout(1000)
        await fixture.page.fill(locator, data)
        await fixture.page.waitForTimeout(2000)
        await fixture.page.keyboard.press('ArrowDown')
        await fixture.page.keyboard.press('Enter')
        await fixture.page.waitForTimeout(1000)
        Log.info(`Selected option is ${await fixture.page.inputValue(locator)}`)
    }

    public static async selectByIndex(locator: string, index: number) {
        const dropdown = await fixture.page.locator(locator);
        await dropdown.click();
        await fixture.page.waitForSelector('.mat-option');
        const options = await fixture.page.$$('.mat-option');
        if (index >= 0 && index < options.length) {

            const selectedOption = options[index];
            const selectedOptionText = await selectedOption.innerText();
            await selectedOption.click();
            Log.info(`Selected option: ${selectedOptionText}`);

        }
    }

    public static async datepicker(locator: string, year: number, month: number, day: number): Promise<void>;
    public static async datepicker(locator: string, year: number, month: string, day: number): Promise<void>;


    public static async datepicker(locator: string, year: number, month: number | string, day: number): Promise<void> {
        const months = new Map<number, string>([
            [1, "Jan"], [2, "Feb"], [3, "Mar"], [4, "Apr"], [5, "May"], [6, "Jun"],
            [7, "Jul"], [8, "Aug"], [9, "Sep"], [10, "Oct"], [11, "Nov"], [12, "Dec"],
        ]);
    
        await fixture.page.click(locator);
        await fixture.page.click(Common_PageObjects.Common.DatePickerHeader);
        await fixture.page.click(Common_PageObjects.Common.DatePickerHeader);
        await fixture.page.click(`//span[text()='${year}']`);
    
        if (typeof month === "number") {
            const monthString = months.get(month);   
            if (monthString) {
                await fixture.page.click(`(//span[text()='${monthString}'])[1]`);
            } else {
                console.error('Invalid month value.');
                return;
            }
        } else {
            await fixture.page.click(`(//span[text()='${month}'])[1]`);
        }
    
        await fixture.page.click(`(//span[text()='${day}'])[1]`);
    }


    public static async eipdaterangepicker(locator: string, startyear: number) {
        
        await fixture.page.click(locator,{timeout:60000})
        await fixture.page.click(Common_PageObjects.Common.DatePickerHeader);
        await fixture.page.click(Common_PageObjects.Common.DatePickerHeader);
        await fixture.page.click(`//span[text()='${startyear}']`);
        await fixture.page.click(Common_PageObjects.Common.StartMonth);
        await fixture.page.click(Common_PageObjects.Common.StartDate);
        await fixture.page.click(Common_PageObjects.Common.Today)
        Log.info("Selected Date : "+await fixture.page.inputValue(locator))
    }

    public static async ChooseOption(){
        const options=await fixture.page.$$('//mat-option');
        //const options1=await fixture.page.$$('//mat-checkbox);
        if(options.length>0){
        const randomIndex=Math.floor(Math.random()*options.length);
        const selectedOptionText=await options[randomIndex].innerText();
        Log.info("Selected option 1:"+selectedOptionText);
        await options[randomIndex].click();
        await fixture.page.waitForTimeout(2000);
        }
    }

    public static async generateRandomFourDigitNumber() {
        return (Math.floor(1000 + Math.random() * 9000).toString());
    }
        

    async selectByText(locator: string, Text: string) {
        const dropdown = this.page.locator(locator);
        await dropdown.waitFor({ state: 'visible' });
        await dropdown.click();
        await this.page.fill(locator, Text);
        const optionSelector = `.mat-option:has-text("${Text}")`;
        await this.page.waitForSelector(optionSelector);
        const options = await this.page.$$(optionSelector);
        for (const option of options) {
            const optionText = await option.innerText();
            if (optionText.includes(Text)) {
                const selectedOptionText = await option.innerText();
                await option.click();
                Log.info(`Selected option: ${selectedOptionText}`);
                return;
            }
        }

        console.error(`No option with partial text "${Text}" found in the dropdown.`);
    }

    public static RandomLetter(){
        function generateRandomLetters(count:number):string{
            let result='';
            for (let i = 0; i<count;i++){
            const randomCharCode='A'.charCodeAt(0)+Math.floor(Math.random()*26);
            const randomLetter=String.fromCharCode(randomCharCode);
            result+=randomLetter;
         }
         return result;
        }
        const numberOfLetters=5;
        const randomLetters=generateRandomLetters(numberOfLetters);
        Log.info(randomLetters);
        return randomLetters;
      }


    public static async selectRandomOption(locator: string) {
        const dropdown = await fixture.page.locator(locator);
        await dropdown.click();
        await fixture.page.waitForSelector('.mat-option');
        const options = await fixture.page.$$('.mat-option');

        if (options.length > 0) {
            const randomIndex = Math.floor(Math.random() * options.length);
            const selectedOption = options[randomIndex];
            const selectedOptionText = await selectedOption.innerText();
            await selectedOption.click();
            Log.info(`Selected option: ${selectedOptionText}`);

        }
    }
    async getText(locator: string): Promise<string | null> {
        await this.page.waitForSelector(locator);
        const element = await this.page.$(locator);
        const textContent = await element?.textContent();
        return textContent || null;
    }


}