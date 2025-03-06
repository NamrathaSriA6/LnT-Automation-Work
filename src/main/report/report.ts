import { userInfo } from "os";


const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Instership Automation",
    displayDuration: true,
    metadata: {
        browser: {
            name: "chromium" ,
            version: "122",
        },
        device: userInfo,
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "EIP4 EPM" },
            { label: "Release", value: "1" },
            { label: "Cycle", value: "Smoke" }
        ],
    },
});