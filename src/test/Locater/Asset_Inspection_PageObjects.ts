export default class AssetInspection_PageObjects{
    public static AssetInspection = {
        Inspection_TechnicalDetailEntry:"//span[@title='Inspection & Technical Detail Entry']",
        AssetInspection:"//span[@title='Asset Inspection']",
        ClearType:"(//span[@title='clear'])[1]",
        Type_input:"//input[@id='categoryGrp']",
        Job_input:"//input[@id='job']",
        Doc_num:"//input[@id='gin']",
        Status_input:"//input[@data-placeholder='Status']",
        ClearStatus:"(//span[@title='clear'])[2]",
        DatePicker:"//eipdaterangepicker",
        
        Duration_date_input:"//eipdaterangepicker/ descendant :: input",
        Search_btn:"//button[text()='Search']",
        GIN_Num_click:"//tbody/descendant :: tr[@data-kendo-grid-item-index='0']/descendant :: td[@aria-colindex='1']/ descendant :: a",

        Current_Job:"//span[@id='currentJobLabelInput']",
        Current_Gin_Num:"//span[@id='currentginNumberLabelInput']",
        Current_Type:"//span[@id='assetCodeLabelInput']",
        AcceptAll_checkbox :"//mat-checkbox/ descendant :: span [1]",

        AssetCode:"//tbody/descendant :: tr[@data-kendo-grid-item-index='0']/descendant :: td[@aria-colindex='1']/ descendant :: a",
        Accepted_toggle:"(//mat-button-toggle[@value='Accpeted'])[1]",
        Rejected_toggle:"(//mat-button-toggle[@value='Rejected'])[1]",
        Pending_toggle:"(//mat-button-toggle[@value='Pending'])[1]",

        Total_Assets:"//label[text()='Total Number of Assets'] / parent :: div / following-sibling :: span",
        Accepted_Assets:"//label[text()='Accepted'] / parent :: div / following-sibling :: span",
        Rejected_Assets:"//label[text()='Rejected'] / parent :: div / following-sibling :: span",

        Cancel_btn:"//div[text()=' Cancel']",
        Submit_btn:"//button[text()='Submit']",
        
    }
}