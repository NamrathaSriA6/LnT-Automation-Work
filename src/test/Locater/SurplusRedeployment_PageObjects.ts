export default class SurplusRedeploymentPageObjects{

    public static LoginPage = {      
        Otheruser: '//a[text()="Other User"]',
        Username: '#username',
        Password: '#password-field',
        Login: '#login-submit',
        Signout_button: '//a[text()="Sign Out"]',
        Signout: '#profiledropdownbtn',
    };

    public static DashBoard = {
        AccessMenu: '//a[@title="Access Based Menu"]',
        AssetManagement: '//span[@title="Asset Management"]',
        OperationandMaintenance:"//span[@title='Operations & Maintenance']",
        AssetSurplusDeclaration:"//span[@title='Asset Surplus Declaration']"
        
    };

    public static Surplus = {
        Job:"//input[@id='job']",
        Asset:"//input[@id='asset']",
        Search_btn:"//button[text()='Search']",
        AssetCode_click:"//tbody / tr[1] / td[1] // div",
        AddSurplus_btn:"//div[@id='surplusUpload']/child::button",
        AddRedeployement_btn:`//div[@id="surplusUpload"] // button`,
        SurplusEffectivedate:"//p[text()='Surplus Effective From'] / following-sibling :: span",
        RedeployementDatepicker:"//span[@title='Toggle calendar']",
        Surplus_remarks:"//input[@id='txtRemarks']",
        Submit:"//p[text()='Submit']",
        alert_box: "//eiptoastalert",
        Cancel_Surplus:"//i[@title='cancel']",
        Confirmation_Remarks:"//eipconfirmationlistmessagebox//textarea",
        ConfirmationYes:"//button[text()='Yes']",
        

        Profiledropdown:"//i[@id='profiledropdownbtn']",
        SignOut:"//a[text()='Sign Out']",
        
    }

    public static Clustermanager = {
        Filter:"//i[@title='Filter']",
        DocumentNo:"//thead/descendant::td[@aria-colindex='2']/descendant::input",
        DocumentClick:"//tbody/tr[@aria-rowindex='3']/descendant::td[@data-kendo-grid-column-index='1']/descendant::a",
        Accept:"(//lib-surplus-view/descendant::i)[1]",
        Reject:"(//lib-surplus-view/descendant::i)[2]",
        Remarks:"//textarea[@data-placeholder='Remarks']",
        Confirmation_yes:"//button[text()='Yes']",

    }

}