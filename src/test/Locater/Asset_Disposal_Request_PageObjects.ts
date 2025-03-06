export default class ADR_PageObjects {
    public static ADR = {
        Disposal_Dehire:"//span[@title='Disposal & Dehire']",
        ADR:"//span[@title='Asset Disposal Request']",
        JOB:"//input[@id='jobDropdown']",
        Warehouse:"//input[@id='warehouseDropdown']",
        Search_btn:"//div[@id='searchBtnId']",
        CreateNewRequest:"//span[text()=' Create New Request ']",
        Job_Dialogue:"//mat-dialog-container // input[@id='jobDropdown']",
        Warehouse_Dialogue:"//mat-dialog-container // input[@id='warehouseDropdown']",
        Asset_select:"(//mat-selection-list)[1] / mat-list-option[1]",
        SearchDialogue_btn:"//mat-dialog-container // div[@id='searchBtnId']",
        Selected_Asset:"(//mat-selection-list)[2] / mat-list-option",
        Post_btn:"(//button[text()='Post'])[2]",
        Next_btn:"//p[@title='Next']",
        AssetStatus:"//kendo-dropdownlist // span[2]",
        StatusSelect:"//kendo-popup // li[@index='0']",
        RealisableValue:" //tbody // td[7] // input",
        Weight:" //tbody // td[8] // input",
        Delete_icon:"//i[@title='delete asset']",
        Submit_btn:"//p[text()='Submit']",
        ADR_generated:"//eipalertwithtrace // p",
        CancelRequest:"//i[@title='Cancel']",
        CancelRequest_remarks:"//input[@id='remarksId']",
        Search_Document:"//thead/descendant::td[2]/descendant::input",
        Filtered_Document: "(//kendo-grid-list//child::td)[2] // a",
        Approve_Document:"//i[@title='Approve Document']",
        Reject_Document:"//i[@title='Reject Document']",
        PopupOk:"//button[text()='Ok']",
        
    }
}