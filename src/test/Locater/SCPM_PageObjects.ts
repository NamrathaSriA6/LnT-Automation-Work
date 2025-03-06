export default class SCPM_PageObjects {
    public static SCPM = {
        Masters:"//span[@title='Masters']",
        SubContractorPM :"//span[@title='Subcontractor P&M']",
        SubContractor_toggle:"//span[text()='SubContractor']",
        Client_toggle:"//span[text()='Client']",
        JOB_input:"//input[@id='jobSearchSCPM']",
        Vendor_input:"//input[contains(@placeholder,'Vendor')]",
        Go_btn:"//button[text()='Go']",
        NewAsset:"//p[text()=' New Asset']",
        Assetgrp:"//input[@id='assetGrp']",
        Assetgrp_mandatory:"//eipautocomplete[@id='assetGrp'] / following-sibling :: div/div",
        Asset_descrition:"//input[contains(@data-placeholder,'Description')]",
        Asset_descrition_mandatory:"//input[contains(@data-placeholder,'Description')] / ancestor :: mat-form-field / following-sibling :: div/div",
        Make:"//input[@id='make']",
        Make_mandatory:"//eipautocomplete[@id='make'] / following-sibling :: div/div",
        Model:"//input[@id='modelString']",
        Model_mandatory:"//eipautocomplete[@id='modelString'] / following-sibling :: div/div",
        Capacity:"//input[@data-placeholder='Capacity']",
        SerialNumber:"//input[contains(@data-placeholder,'Serial Number')]",
        SerialNumber_mandatory:"//input[contains(@data-placeholder,'Serial Number')] / ancestor :: mat-form-field / following-sibling :: div/div",
        
        RegistrationNumber:"//input[contains(@data-placeholder,'Registration Number')]",
        YearManufacture:"//input[contains(@data-placeholder,'Year Of Manufacture')]",
        WorkOrderNum:"//input[contains(@data-placeholder,'Work Order number')]",
        SCPMgenerated:"//eipmessagebox // p",
        Create_btn:"//button[text()='Create']",
        Update_btn:"//button[text()='Update']",

        ReferenceNum_input:"//thead / tr[2] / td[@aria-colindex='1'] // input",
        Update_icon:"//i[@title='Update']",
        Cancel_icon:"//i[@title='Cancel']"

    }
}