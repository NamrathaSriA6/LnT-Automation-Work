export default class PageObjects {
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
        Plant_Hire_Request_Status: '//span[text()="PHR Status"]',
    };

    public static PHRStatus = {
        Query_type: "[aria-haspopup='listbox']",
        Summary: '//span[text()="Summary"]',
        IC:'//eipautocomplete[@id="icDropdown"]',
        Job:"//input[@data-placeholder='Job']",
        Transportation_Infrastructure_IC: "(//span[@class='mat-option-text'])[2]/descendant::span",
        Go_btn: '//button[@id="goBtnId"]',
        Grid_Head: "//div[@role='grid']/descendant::thead/descendant::th",
        Grid_Row: "//div[@role='grid']/descendant::tbody/descendant::tr",
        Show: "//kendo-pager-page-sizes/select",
        close: "//i[@id='ibtClose']",
        Details: '//span[text()="Detail"]',
        PHRS_Number:"//span[@id='phrsLink'][1]",
        Requirements:'//*[@id="content"]/kendo-pdf-export/div/section[3]/div[2]/div',
        Doc_Head: "//lib-phrs-view/div[1]/div/div",
        Section1:'//*[@id="content"]/kendo-pdf-export/div/section[1]',
        Section2: '//*[@id="content"]/kendo-pdf-export/div/section[2]',
        Requirement:"//p[text()='Requirement']",
        Section3: '//*[@id="content"]/kendo-pdf-export/div/section[3]/div[2]/div[1]',
        Section4: '//*[@id="content"]/kendo-pdf-export/div/section[3]/div[2]/div[2]',
        Additional_Inputs:"//p[text()='Additional Inputs']",
        Section5: '//*[@id="content"]/kendo-pdf-export/div/section[4]/div/div[1]/div[2]',
        PM_Availability:"//p[text()='P&M Availability']",
        Table:'//*[@id="content"]/kendo-pdf-export/div/section[4]/div/div[2]/kendo-grid/div',
        Table_head:'(//mat-dialog-container//div[@role="presentation"]/div/table/thead/tr)[1]',
        Clear: "(//span[@title='clear'])[1]",
        heading:'(//mat-dialog-container//table/thead/tr)[1]',
        Table_rows:'(//*[@id="content"]/kendo-pdf-export/div/section[4]/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr)'

    }
}