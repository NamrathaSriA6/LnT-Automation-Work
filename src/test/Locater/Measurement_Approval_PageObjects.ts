export default class Measurement_Approval_PageObjects {
    public static LoginPage = {
        Otheruser: '//a[text()="Other User"]',
        Username: '#username',
        Password: '#password-field',
        Login: '#login-submit',
        AccessMaster: '(//*[text()="Access & Master"])[1]',
        AccessControl: '(//*[text()="Access Control"])[1]',
        Workflow: '(//*[text()="Workflow"])[1]',
        WorkBench: '(//*[text()="WorkBench"])[1]'
        
    }

    public static DashBoard = {
        AccessMenu: '//a[@title="Access Based Menu"]',
        AssetManagement: '//span[@title="Asset Management"]',
        Planning_Procurement: '//span[@title="Planning & Procurement"]',
        Measurement_Approval: '//span[text()="Measurement Approval"]'
    }


    public static Measurement_App = {
        alert_box:"//eiptoastalert",
        Job:"(//input[@type='text'])[1]",
        Search: "//div[@id='searchBtnId']",
        Header: "//div[@class='header']/p",
        Fullscreen : "//i[@title = 'Expand']",
        Assetdetails: "//p[@class='eipBlue']",
        Asset_Count: "//kendo-popup/div",
        Option: "(//span[@class= 'mat-option-text'])[2]",
        Approve: "(//i[@title='Approve'])[1]",
        Hold: "(//i[@title='Hold'])[1]",
        Send_Back: "(//i[@title='Send back'])[1]",
        Remarks: "//kendo-popup//textarea",
        Heading_text: "//kendo-popup//p",
        Popup_text: "//eipmessagebox/div/div[2]/p",
        Button : '//*[@id="kendoPopupApproved"]/div/div/div/button[2]',
        Error_popup: "//*[@id='cdk-overlay-1']",
        Error_text: "//eipmessagebox//p",
        Error: "//eipmessagebox/div/div/div",
        Ok: "//button[text()='Ok']",
        Show: "//kendo-pager-page-sizes/select",
        Hold_popup : "//*[@id='cdk-overlay-2']",
        Send_Back_popup : "//*[@id='cdk-overlay-3']",
        Search_For: "//input[@data-placeholder='Search For']",
        Hold_option: "(//span[@class = 'mat-option-text']/span)[2]",
        Awaitapproval_option: "(//span[@class = 'mat-option-text']/span)[1]",
        Approved_option : "(//span[@class = 'mat-option-text']/span)[3]",
        Cancel: "(//i[@title='Cancel'])[1]",
        List: "//div[@class = 'cdk-overlay-pane']",
        GridHeading:"//div[@role='grid']/descendant::thead/descendant::th",
        GridRows:"//div[@role='grid']/descendant::tbody/descendant::tr",
        Breadcrums:"//ul[@class='breadcrumb']",
        Popup:"//kendo-popup",
        Messagebox:"//eipmessagebox",
        Filter:"//i[@title='Filter']",
        AssetCodeInput:"//thead/descendant::td[@aria-colindex='1']/descendant::input",
    }
}