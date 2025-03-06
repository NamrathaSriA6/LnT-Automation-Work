export default class MearsurementCreationPageObjects{
    public static LoginPage = {
        Otheruser: '//a[text()="Other User"]',
        Username: '#username',
        Password: '#password-field',
        Login: '#login-submit',
      };
    
      public static DashBoard = {
        AccessMenu: '//a[@title="Access Based Menu"]',
        AssetManagement: '//span[@title="Asset Management"]',
        Planning_and_Procurement: '//span[@title="Planning & Procurement"]',
        MeaserementCreation:"//span[@title='Measurement Creation']"
      };

      public static MeaserementCreation = {
        Job:"//input[@id='job']",
        Balance:"//p[text()='Balance']/following-sibling::p",
        Total_Assets:"//p[text()='Total Assets']/following-sibling::p",
        MES_Created:"//p[text()='MES Created']/following-sibling::p",
        Approved:"//p[text()='Approved']/following-sibling::p",
        Awaiting_Approval:"//p[text()='Awaiting Approval']/following-sibling::p",
        Hold:"//p[text()='Hold']/following-sibling::p",
        BalanceButton:"//p[text()='Balance']",
        CreateMeasurement:"//div[@id='createMeasurementId']",
        ConfirmationYes:"//eipmessageboxcontainercomponent/descendant::button[1]",
        JobinCreate:"//input[@id='jobDropdown']",
        alert_box: "//eiptoastalert",
        Search:"//div[@id='searchBtnId']",
        Assetcheckbox:"(//tr[@data-kendo-grid-item-index='1'])[1]/descendant::span[1]",
        AssetcheckboxPossible:"(//tr[@data-kendo-grid-item-index='0'])[1]/descendant::span[1]",
        Breadcrums:"//ul[@class='breadcrumb']",
        Popup:"//kendo-popup",
        Messagebox:"//eipmessagebox",
        
      }

      public static MeasurementEntry ={
        OperatorPossible:"(//tr[@data-kendo-grid-item-index='0'])[2]/descendant::td[@aria-colindex='13']/descendant::div",
        AddiOperatorPossible:"(//tr[@data-kendo-grid-item-index='0'])[2]/descendant::td[@aria-colindex='14']/descendant::div",
        HelperPossible:"(//tr[@data-kendo-grid-item-index='0'])[2]/descendant::td[@aria-colindex='15']/descendant::div",
        AddiHelperPossible:"(//tr[@data-kendo-grid-item-index='0'])[2]/descendant::td[@aria-colindex='16']/descendant::div",
        AccomodationPossible:"(//tr[@data-kendo-grid-item-index='0'])[2]/descendant::td[@aria-colindex='17']/descendant::div",
        AssemblyPossible:"(//tr[@data-kendo-grid-item-index='0'])[2]/descendant::td[@aria-colindex='18']/descendant::div",
        MobPossible:"(//tr[@data-kendo-grid-item-index='0'])[2]/descendant::td[@aria-colindex='18']/descendant::div",
        DeMobPossible:"(//tr[@data-kendo-grid-item-index='0'])[2]/descendant::td[@aria-colindex='18']/descendant::div",
        TransExpPossible:"(//tr[@data-kendo-grid-item-index='0'])[2]/descendant::td[@aria-colindex='18']/descendant::div",

        OperatorPayable:"(//tr[@data-kendo-grid-item-index='1'])[2]/descendant::td[@aria-colindex='13']/descendant::input",
        AddiOperatorPayable:"(//tr[@data-kendo-grid-item-index='1'])[2]/descendant::td[@aria-colindex='14']/descendant::input",
        HelperPayable:"(//tr[@data-kendo-grid-item-index='1'])[2]/descendant::td[@aria-colindex='15']/descendant::input",
        AddiHelperPayable:"(//tr[@data-kendo-grid-item-index='1'])[2]/descendant::td[@aria-colindex='16']/descendant::input",
        AccomodationPayable:"(//tr[@data-kendo-grid-item-index='1'])[2]/descendant::td[@aria-colindex='17']/descendant::input",
        AssemblyPayable:"(//tr[@data-kendo-grid-item-index='1'])[2]/descendant::td[@aria-colindex='18']/descendant::input",
        Mobpayable:"(//tr[@data-kendo-grid-item-index='1'])[2]/descendant::td[@aria-colindex='19']/descendant::input",
        DeMobPayable:"(//tr[@data-kendo-grid-item-index='1'])[2]/descendant::td[@aria-colindex='20']/descendant::input",
        TransExpPayable:"(//tr[@data-kendo-grid-item-index='1'])[2]/descendant::td[@aria-colindex='21']/descendant::input",
        SubmitButton:"//button[@id='submitButtonId']",
        AssetCode_Success:"//app-mes-success-alert/descendant::tr[@data-kendo-grid-item-index='0']/td[@aria-colindex='1']",
        MeasurementNum:"//app-mes-success-alert/descendant::tr[@data-kendo-grid-item-index='0']/td[@aria-colindex='2']",
        SuccessOk:"//button[@id='confirmHireBtn']",
        BackButton:"//button[@id='backButtonId']",
        Filter:"//i[@title='Filter']",
        AssetCodeInput:"//thead/descendant::td[@aria-colindex='1']/descendant::input",
      }
}