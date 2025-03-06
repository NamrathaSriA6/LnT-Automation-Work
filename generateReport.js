const report = require('cucumber-html-reporter');
const { readdirSync } = require('fs');
const path = require('path');

// Options for generating the report
const options = {
    theme: 'bootstrap',
    jsonFile: './src/reports/cucumber-report.json',
    output: './src/reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        'App Version': '1.0.0',
        'Test Environment': 'QA',
        'Browser': 'Chrome',
        'Parallel': 'Scenarios',
        'Executed': 'Local',
    },
    brandTitle: 'Playwright Automation Report', // Title to be displayed on the report
};

// Generate the report
report.generate(options);
