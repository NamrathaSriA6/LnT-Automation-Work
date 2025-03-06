export default class Reports_PageObjects {
    public static LogSheetDetails = {
        Reports:"//span[@title='Reports']",
        Report_selection:"//input[@id='id-report-sel']",
        ReportMode:"//input[@id='id-report-type']",
        ClusterElements:"//input[@id='id-cluster-ele']",
        JobCart:"//p[contains(text() , 'Job Cart')]",
        Jobcart_search_input:"(//mat-dialog-content // input)[1]",
        Job_select:"(//mat-selection-list)[1] // mat-list-option[1]",
        Post_Job:"(//button[text()='Post'])[2]",
        Period:"//input[@id='icon-rightdateRange_Kendo']",
        AssetOwnerType:"//input[@data-placeholder='Asset Owner Type']",
        AssetCode:"//input[@placeholder='Asset Code']",
        Arrow :"//i[@title='Generate Report']",
        
    }

    public static BreakDownHistory = {
        Fromdate:"//div[@id='fromMonthYearPickerId']//input",
        FromYear:"//button[@aria-label='2023']",
        FromMonth:"//button[@aria-label='June 2023']",
        InfoMessage:"//eipmessagebox // p",
        Info_Ok_btn:"//eipmessagebox // button"
    }

    public static HireCashFlow = {
        Searchby:"(//mat-radio-button)[1]",
    }

    public static AssetMaster = {
        TillDate:"//input[@id='propConstDateId']",
        TillYear:"//button[@aria-label='2024']",
        TillMonth:"//button[@aria-label='Jul 2024']",
        Category:"//input[@placeholder='Category']",
        CategoryExpand:"//input[@placeholder='Category'] / parent :: kendo-searchbar / following-sibling :: span",
        Category_option:"//kendo-popup // li[2]",

        AMS_Asset_Status_input:"//input[@placeholder='AMS-Asset-Status']",
        AMS_Asset_Status_Expand:"//input[@placeholder='AMS-Asset-Status'] / parent :: kendo-searchbar / following-sibling :: span",
        AMS_Asset_Status_option:"//kendo-popup // li[4]",
    }

    public static SchEBreakupDepreciationAssetsAddition = {
        FinancialYear:"//input[@data-placeholder='Financial Year']",
        SelectYear:"//div[@role='listbox'] // mat-option[2]",
        
    }

    public static Depreciation_Itemwise = {
        DepreciationYear:"//input[@data-placeholder='Depreciation Year']",
        Assetcategory:"//input[@data-placeholder='Asset Category']",
        AssetOwnertype:"//input[@data-placeholder='Asset Owner Type']",

    }

    public static Datewise_Movement = {
        Category:"//input[@placeholder='Category']",
        Category_Expand:"//input[@placeholder='Category'] / parent :: kendo-searchbar / following-sibling :: span",
        Category_option:"//kendo-popup // li[4]",
    }

    public static Monthwise_CP = {
        CP_for:"//input[@data-placeholder='CP For']",
    }

    public static Reconwise_sCP_Breakup = {
        Month_year:"//input[@id='propConstDateId']",
        Month:"//button[@aria-label='Jun 2023']",
    }
}