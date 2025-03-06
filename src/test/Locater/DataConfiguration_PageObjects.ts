export default class DataConfiguration_PageObjects{
    public static DataConfiguration = {
        DataConfiguration:"//span[text()='Data Configuration']",
        MasterType:"//span[text()='RTA Document']",
        AssetCode_toggle:"//div[text()='Asset Code']",
        AssetList_toggle:"//div[text()='Asset List']",
        Asset_Input:"//input[contains(@placeholder,'Asset')]",
        Go_btn:"//button[text()='Go']",
        Job:"//p[text()='Job : '] / following-sibling :: p",
        AssetCode_Description:"//p[text()='Asset Code/Description : '] / following-sibling :: p",
        InvoiceCheckbox:"(//tbody // tr[1]//mat-checkbox // span)[1]",
        RCCheckbox:"(//tbody // tr[2]//mat-checkbox // span)[1]",
        InvoiceDescription:"(//tbody // tr[1] // td[2]// span)[1]",
        RCDescription:"(//tbody // tr[2] // td[2]// span)[1]",
        DatePicker:"(//kendo-datepicker // span[@class='k-icon k-i-calendar'])[1]",
        InvoiceDocument_upload:"//tbody // tr[1] // eipdocumentupload[1]",
        RCDocument_upload:"//tbody // tr[2] // eipdocumentupload[1]",
        upload:"(//kendo-upload // input)[2]",
        SelectType:"(//mat-dialog-container)[2] // tbody // tr[1] // td[2] // mat-select",
        TypeOption:"// mat-option // span[contains(text(),'INVOICE')]",
        FileDescription:"(//mat-dialog-container)[2] // tbody // tr[1] // td[3] // input",
        Upload_Documents_btn:"//button[text()='Upload Documents']",
        Submit_btn:"//button[text()='Submit']",

        AlertBox:"//lib-group-messagebox",
        AlertText:"//lib-group-messagebox // li",

    }
}