export default class Extension_Request_PageObjects {
    public static LoginPage = {
        Otheruser: '//a[text()="Other User"]',
        Username: '#username',
        Password: '#password-field',
        Login: '#login-submit',
        AccessMaster: '(//*[text()="Access & Master"])[1]',
        AccessControl: '(//*[text()="Access Control"])[1]',
        Workflow: '(//*[text()="Workflow"])[1]',
        WorkBench: '(//*[text()="WorkBench"])[1]'
        
    };
  
      public static DashBoard = {
  
        AccessMenu: '//a[@title="Access Based Menu"]',
        AssetManagement: '//span[@title="Asset Management"]',
        Planning_and_Procurement: '//span[@title="Planning & Procurement"]',
        Extension_Request: '//span[text()="Extension Request"]',
        Job: "//input[@id='drpJoblistHR']",
        Document: "//input[@id='drprequestTypesHR']",
        PHRSNUM: "//input[@id='phrsNumber']",
        Fullscreen: "//i[@id = 'toggleFullScreen']",
        Job_text: "//p[text() = 'Job']",
        Document_text: "//p[text() = 'Document']",
        PHRS_Number: "//p[text() = 'PHRS Number']",
        Asset_Group: "//p[text() = 'Asset Group']"
      };


      public static Extension_Request = {
        Search: "//button[@id='searchBtnId']",
        Filter: "//i[@title='Filter']",
        PHER_Number: "(//kendo-grid-string-filter-cell)[3]//input",
        Icon_click: "(//i[@id ='openRequest'])[1]",
        Calendar: "(//span[@class='k-icon k-i-calendar'])[2]",
        March2024: "//span[@class='k-button k-bare k-title']",
        Year: "(//span[text()='2024'])[1]",
        Jan: "//span[text()='Jan']",
        Date: "//td[@title='Monday, January 1, 2024']",
        Today:"//span[text()=' TODAY ']",
        CreateExtn: "//button[@id= 'saveAndNextButton']",
        Shifthours: '//input[@id="shiftHourssInput"]'
      };


}