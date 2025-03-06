import { BeforeAll, AfterAll, Before, After, Status, formatterHelpers, ITestCaseHookParameter } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { fixture } from "../hooks/Pagefixture";
import invokeBrowser from "../../../src/main/browser/browser";
import { createLogger } from "winston";
import Log from "../hooks/until/logger"
const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;
let Page : Page;
let videoPath: string | null = null;

BeforeAll (async function () {
    
    browser = await invokeBrowser();
   
})

Before(async function ({ pickle, gherkinDocument }: ITestCaseHookParameter) {
    const { line } = formatterHelpers.PickleParser.getPickleLocation({ gherkinDocument, pickle })
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext({
        // viewport: null,
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });
    const page = await context.newPage()
    fixture.page = page;
    Log.testBegin(`${pickle.name}: ${line}`);
});
After(async function ({ result, pickle, gherkinDocument }: ITestCaseHookParameter) {
    const { line } = formatterHelpers.PickleParser.getPickleLocation({ gherkinDocument, pickle })
    const scenarioName = pickle.name + pickle.id
    let img: Buffer;
    const path = `./test-results/trace/${pickle.id}.zip`;
    let videoPath: string | null = null;
    let videoObject = fixture.page.video();
    if (result?.status == Status.PASSED) {
        img = await fixture.page.screenshot(
            { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })           
        
        if (videoObject == null) {
            console.log('Video not available')
        } else {
            videoPath = await videoObject.path()
        }
        
    }else {
        img = await fixture.page.screenshot(
            { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
            if (videoObject == null) {
                console.log('Video not available')
            } else {
                videoPath = await videoObject.path()
            }
            Log.error(`${scenarioName}: ${line} - ${result?.status}\n${result?.status}`);
    }

    await context.tracing.stop({ path: path });
  
    if (result?.status == Status.PASSED) {
         await this.attach(
            img, "image/png"
        );
            if(videoPath != null){
              await this.attach(
                    fs.readFileSync(videoPath),
                    'video/webm'
                );
            }
        const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${path}</a>`
         this.attach(`Trace file: ${traceFileLink}`, 'text/html');

    }else{
        await this.attach(
            img, "image/png"
        );
        if(videoPath != null){
            await this.attach(
                fs.readFileSync(videoPath),
                'video/webm'
            );
        }
        const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${path}</a>`
         this.attach(`Trace file: ${traceFileLink}`, 'text/html');

    }
    Log.testEnd(`${pickle.name}`, `${result?.status}`);
    await fixture.page.close();
    await context.close();
});
        

AfterAll(async function () {
try {
    await browser.close();
    fixture.logger.close();
} catch (error) {}
   Log.error('Some tests failed:');
});

