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
        Operations_and_Maintenance: '//span[@title="Operations & Maintenance"]',
        Maintenance_Plan: '//span[text()="Maintenance Plan"]',
  
    };

    public static NewRMC = {
       CreateRMC_icon: '//p[text()="Create New Source RMC"]',
       AssetGroup : '//input[@id="assetGroupDropdown"]',
       Asset: '//input[@id="assetDropdown"]',
       RMC_Creation_popup: '//mat-dialog-container',
       Frequency_Type: "//input[@id='freqDropdown']",
       CreateRMC_btn: "//button[@id='createRMCBtn']",
       Popup_text: "//eipmessagebox/div/div[2]/p",
       Messagebox:"//eipmessagebox",
       Ok: "//button[text()='Ok']"

    };

    public static CurrentRMC = {
      Action_icon: "//i[@title='Create RMC']",
      Frequency_Type: "//input[@id='freqDropdown']",
      CreateRMC_btn: "//button[@id='createRMCBtn']",
      Popup_heading: "//i[@id='ibtClose']/preceding-sibling::p",
      Popup_text: '//div[@class="d-flex"]/div',
      Popup:"//kendo-popup"  

    };

    public static CreatedRMCs = {
      Created_btn: '(//div[@role="tab"])[2]',
      Edit: '(//i[@title="Edit"])[1]',
      Save: '(//i[@title="Save"])[1]',
      YesNo_Btn: "//span[@role='switch']/span[3]" ,
      ResourceMaintenanceCode: '(//span[@id="rmcDetailLink"])[1]',
      Popup:"//kendo-popup",
      RMC: "//div[@class='left-side-content']/p",
      RMC_Number: "//div[@class='d-flex']/p",
      Info_icon: "//div[@class='d-flex']/i",
      Info_text: "//kendo-popup/div",
      Back: "//img[@class='cursor-pointer']",
      Asset: "//div[@id='assetBtn']"

    }

}