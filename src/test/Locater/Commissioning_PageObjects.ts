export default class Commissioning_PageObjects {

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
        Mobilization_Movements: '//span[@title="Mobilization & Movements"]',
        Movement: '//span[text()="Movement"]'
    }

    public static Commissioning = {
        Go : "//i[@title='Go']",
        Fullscreen : "//i[@title = 'Expand']",
        Commissioning1: '//*[@id="mat-button-toggle-4-button"]/span',
        Create : "(//i[@title='Create Commissioning'])[1]",
        Hover:"//table[@class='k-grid-table']/tbody/tr[1]/td[7]/span",
        Asset_Details : '(//div[@class="mat-dialog-content"]/descendant :: div)[2]',
        Calendar : "//span[@title='Toggle calendar']",
        Date : "//span[@class='k-today']",
        Meter_reading_current : '(//div[@class="col-3"])[2]/descendant::input',
        Reason : '(//div[@class="col-3"])[3]/descendant::input',
        Reason_text :'//app-commissioning/div/div/div[4]/p',
        Meter_reading_previous_text : "//p[text()= 'Meter Reading (Previous)']",
        Meter_reading_current_text :'(//div[@class="col-3"])[2]/descendant::p',
        Close : "//i[@title = 'Collapse']",
        Submit : "//p[text()= 'Submit']",
        SuccessButtonOk :"//eipmessagebox/descendant::button",
        Commissioning_text : "//p[text() = 'Commissioning']",
        DC_RN_Dates: "//app-container/div[2]/div[2]/descendant::div[2]",
        alert_box:"//eiptoastalert",
        Page_text: "//app-container/div[1]/div/p",
        Filter:"//i[@title='Filter']",
        AssetCodeInput:"//thead/descendant::td[@aria-colindex='4']/descendant::input",
        
    }

    public static Asset = {
        SearchIcon:"//i[@id='ibtAdvanceSearch']",
        Search:"//button[@id='btnSearch']",
        DatePicker:"//input[@id='icon-rightdateRange_Kendo']"
    }
}