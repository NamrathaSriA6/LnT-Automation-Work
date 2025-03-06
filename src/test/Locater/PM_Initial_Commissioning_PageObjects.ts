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
        Mobilization_Movements: '//span[@title="Mobilization & Movements"]',
        PM_Initial_Commissioning: "//span[@title='P&M Initial Commissioning']",
        Group: "//input[@id='groupDropdown']",
        Search_btn: "//button[text()='Search']",
        Edit_icon: "(//i[@title='Edit'])[1]",
        Received_Date_Calendar_icon:"(//span[@class='k-select'])[1]/span",
        Commission_Date_Calendar_icon:"(//span[@class='k-select'])[2]/span",
        Save_btn: "(//button[@id='imgbtnCFL2Save'])[1]",
        Date: "//span[text()=' TODAY ']",
        Fullscreen :"//i[@title = 'Expand']",
        Cancel_icon: "(//i[@title='Cancel'])[1]",
        Popup_text: "//eipmessagebox/div/div[2]/p",
        Ok: "//button[text()='Ok']",
        Grid_Head: "//div[@role='grid']/descendant::thead/descendant::th",
        Grid_Row: "//div[@role='grid']/descendant::tbody/descendant::tr",
        Received_Date_text: "(//span[@class='k-dateinput-wrap']/descendant::input)[1]",
        Commission_Date_text: "(//input[@class='k-input'])[2]",
        Filter: "//i[@title='Filter']",
        AssectcodeFill: '(//kendo-grid-filter-wrapper-cell/input)[1]'
      };
    }