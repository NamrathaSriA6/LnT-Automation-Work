export default class Common_PageObjects{
    public static LoginPage = {      
        Otheruser: '//a[text()="Other User"]',
        Username: '#username',
        Password: '#password-field',
        Login: '#login-submit',
        Signout_button: '//a[text()="Sign Out"]',
        Signout: '#profiledropdownbtn',
        Document_Approve:'//i[@title="Approve"]',
        Document_Reject:'//i[@title="Reject"]',
    };
    
      public static DashBoard = {
        AccessMenu: '//a[@title="Access Based Menu"]',
        AssetManagement: '//span[@title="Asset Management"]',
        Planning_and_Procurement: '//span[@title="Planning & Procurement"]',
        AccessandMaster:"//span[text()='Access & Master']",
        AccessControl:"//span[text()='Access Control']",
        WorkFlow:"//span[text()='Workflow']",
        WorkBench:"//span[text()='WorkBench']",
        Mobilization_Movements: '//span[@title="Mobilization & Movements"]',
        Movement: '//span[text()="Movement"]',
        
      };

      public static Common = {
        Filter: "//i[@title='Filter']",
        DatePickerHeader :"//kendo-calendar-header/ span[1]",
        StartYear:"//span[text(),'2020']",
        StartMonth:"(//span[text()='Jan'])[1]",
        StartDate:"(//span[text()='1'])[1]",
        Today:"//kendo-calendar-header/ span[2]",
        Breadcrums:"//ul[@class='breadcrumb']",
        PopupMessage:"//eipmessagebox // p",
        Popup_Ok_btn:"//eipmessagebox // button",
        alert_box: "//eiptoastalert",

        KendoPagevalue5:"(//mat-dialog-container //kendo-pager-page-sizes)[1] // option[@value='5']",
        KendoPagevalue10:"(//mat-dialog-container //kendo-pager-page-sizes)[1] // option[@value='10']",
        KendoPagevalue20:"(//mat-dialog-container //kendo-pager-page-sizes)[1] // option[@value='20']",
        KendoPagevalue40:"(//mat-dialog-container //kendo-pager-page-sizes)[1] // option[@value='40']",

        // TableRow

      }
}