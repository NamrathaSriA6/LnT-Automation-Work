export default class Despatch_Customer_PageObjects {
    public static DC = {
        Despatch_Customer:"//span[@title='Asset Despatch - Customer']",
        JOB:"//input[@id='jobDropdown']",
        AssetCode:"//input[@id='assetDropdown']",
        Duration_Date:"//input[@id='icon-rightdateRange_Kendo']",
        Search_btn:"//div[@id='searchBtnId']",
        Clear_btn:"//div[@id='clearBtnId']",
        row:"//tbody/tr[1]",
        Create_icon:"//i[@title='Create']",
        Asset_Checkbox:"(//mat-checkbox)[2]",
        CreateDC:"//button[@id='confirmHireBtn'][1]",
        PDC_generated:"(//eipmessagebox // p)[3]",
        Success_ok:"//eipmessagebox // button",

    }
}