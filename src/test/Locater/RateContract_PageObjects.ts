export default class RateContract_PageObjects{
    public static LoginPage = {
        Otheruser: '//a[text()="Other User"]',
        Username: '#username',
        Password: '#password-field',
        Login: '#login-submit',
      };

      public static DashBoard = {
        AccessMenu: '//a[@title="Access Based Menu"]',
        AssetManagement: '//span[@title="Asset Management"]',
        Masters: '//span[@title="Masters"]',
        Rate_Contract: '//span[text()="Rate Contract"]'
    }

    public static RateContract ={
        FileUpload: "//input[@id='flpUpload']",
        Search_RC_btn: "(//button[@type='button'])[2]",
        Groupcode: "(//kendo-searchbar[@class='k-searchbar'])[1]/descendant::input",
        Search_btn: "//button[text()='Search']",
        All_btn: "(//button[@type= 'button'])[3]",
        With_Attachment_btn: "(//button[@type= 'button'])[4]",
        Without_Attachment_btn: "(//button[@type= 'button'])[5]",
        Active: "//span[@class='mat-slide-toggle-bar']",
        Icon:"//button[@title='Toggle View']/descendant::i",

    }

    public static PHRS ={
        Assetcode: "//input[@id='drpassetGrpCodesHR']",
        Job: "//input[@id='drpJoblistHR']",
        Action: "(//i[@id='rcWithouttrm'])[1]",
        PersonName:"//input[@id='contactPersonNameInput']",
        MobileNoInput:"//input[@id='mobileNoInput']",
        EmailId:"//input[@id='emailIdInput']",
        MailCc:"//input[@id='mailCcInput']"

    }
}