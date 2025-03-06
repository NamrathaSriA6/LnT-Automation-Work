export default class GroupMaster_PageObjects {
    public static common = {
        InfoMessage:"//eipmessagebox // p",
        Info_Ok_btn:"//eipmessagebox // button",
        GroupMaster:"//span[text()='Group Master']",

    }
    public static General = {
        GroupCode_input:"//input[@placeholder='Group Code']",
        GroupDescription_input:"//input[@data-placeholder='Group Description']",
        Go_btn:"//button[text()='Go']",
        Download_btn:"//button[text()='Go'] / following-sibling :: button",
        New_btn:"//button[text()='New']",
        
        General_toggle:"//div[text()='General']",
        Engine_toggle:"//div[text()='Engine']",
        Hiring_toggle:"//div[text()='Hiring']",
        AlternateGroup_toggle:"//div[text()='Alternate Group']",
        Makeandmodel_toggle:"//div[text()='Make & Model']",
        Productiontype_toggle:"//div[text()='Production Types']",
        DefectCodes_toggle:"//div[text()='Defect Codes']",

        AssetType_input:"//input[@data-placeholder='Asset Type']",
        IC_input:"//input[@data-placeholder='IC']",
        BU_input:"//input[@data-placeholder='BU']",
        Category_input:"//input[@data-placeholder='Category']",
        SubCategory:"//input[@data-placeholder='Sub Category']",
        Class_input:"//input[@data-placeholder='Class']",
        Asset_Account_tag_input:"//input[@data-placeholder='Asset Account Tag']",
        Major_Minor_input:"//input[@id='majorminor']",
        HSNCode_input:"//kendo-combobox[@valuefield='hsnCode'] // input",
        Depreciation_percentage_input:"//input[@data-placeholder='Depreciation Percentage']",

        InternalHirecharge:"//p[text()='Internal Hire Charge'] / following-sibling :: i",
        InternalHireCharge_input:"//input[@data-placeholder='Internal Hiring Charge']",
        InternalHirecharge_Save_btn:"//mat-dialog-container //button[text()='Save']",

        Fuelperhour_input:"//input[@data-placeholder='Fuel Per Hour']",
        Leasetype_input:"//input[@data-placeholder='Lease Type']",
        AllowProcurement_checkbox:"(//mat-checkbox // input // parent :: span)[1]",
        AllowHiring_checkbox:"(//mat-checkbox // input // parent :: span)[2]",
        AllowSubcontracting_checkbox:"(//mat-checkbox // input // parent :: span)[3]",
        RTAApplicable_checkbox:"(//mat-checkbox // input // parent :: span)[4]",
        Employee_Scheme_Applicable_checkbox:"(//mat-checkbox // input // parent :: span)[5]",
        Strategic_Group_checkbox:"(//mat-checkbox // input // parent :: span)[6]",
        Save_btn:"//button[text()='Save']"
    }

    public static Engine = {
        Primary_EngineDesc_input:"//input[@data-placeholder='Engine Desc']",
        Primary_Metertype_input:"(//input[@data-placeholder='Meter Type'])[1]",
        Primary_Logsheet_checkbox:"(//span[text()='Log Sheet']/ ancestor :: mat-checkbox // input // parent :: span)[1]",
        Primary_Production_checkbox:"(//span[text()='Production']/ ancestor :: mat-checkbox // input // parent :: span)[1]",

        SecondaryEngineADD_icon:"//p[text()='Secondary Engine'] / following-sibling :: i",
        Secondary_EngineDesc_input:"//input[@data-placeholder='Secondary Engine Desc']",
        Secondary_Metertype_input:"(//input[@data-placeholder='Meter Type'])[2]",
        Secondary_Logsheet_checkbox:"(//span[text()='Log Sheet']/ ancestor :: mat-checkbox // input // parent :: span)[2]",
        Secondary_Production_checkbox:"(//span[text()='Production']/ ancestor :: mat-checkbox // input // parent :: span)[2]",

        Configuration_engine:"//input[@data-placeholder='Engine']",
        Configuration_Engine_clear:"//input[@data-placeholder='Engine'] / parent :: div / following-sibling :: div // span",
        Configuration_Primary_engine:"//mat-option[@title='1 - Primary']",
        Configuration_Secondary_engine:'//mat-option[@title="2 - Secondary"]',
        Configuration_fueltype:"//input[@data-placeholder='Fuel Type']",
        Configuration_minimum:"//input[@data-placeholder='Minimum']",
        Configuration_Maximum:"//input[@data-placeholder='Maximum']",
        Configuration_Update_btn:"//button[text()='Update']",
        Save_btn:"//button[text()='Save']"
    }

    public static Hiring = {
        ExternalHireCharge :"//p[text()='External Hire Charge'] / following-sibling :: i",
        ExternalHireCharge_input:"//input[@data-placeholder='External Hire Charge']",
        ExternalHireCharge_Save_btn:"//mat-dialog-container //button[text()='Save']",

        MinimumHireCharge:"//input[@data-placeholder='Minimum Hiring Charge']",
        MaximumHireCharge:"//input[@data-placeholder='Maximum Hiring Charge']",
        AverageHireCharge:"//input[@data-placeholder='Average Hiring Charge']",
        HireShiftType:"//input[@data-placeholder='Hire Shift Type']",

        HoursperDay:"//input[@data-placeholder='No of hours per day']",
        DaysperMonth:"//input[@data-placeholder='No of Days per month']",
        HoursperMonth:"//input[@data-placeholder='No of Hours per month']",

        AgeValidation_Applicable:"//mat-radio-group[@name='age'] // span[text()=' Applicable '] / preceding-sibling :: span",
        AgeValidation_NotApplicable:"//mat-radio-group[@name='age'] // span[text()=' Not Applicable '] / preceding-sibling :: span",

        MinAge:"//input[@data-placeholder='Min Age']",
        MaxAge:"//input[@data-placeholder='Max Age']",

        TransportClause_Applicable:"//mat-radio-group[@name='transport'] // span[text()=' Applicable '] / preceding-sibling :: span",
        TransportClause_NotApplicable:"//mat-radio-group[@name='transport'] // span[text()=' Not Applicable '] / preceding-sibling :: span",

        Save_btn:"//button[text()='Save']"
    }
    public static Productiontypes = {
        ProductionCode:"//input[@id='productionType']",
        Link_btn:"//button[contains(text(),'Link')]",
        
    }

    public static DefectCodes = {
        DefectCode:"//input[@id='defectCodes']",
        Link_btn:"//button[contains(text(),'Link')]",
        
    }

    public static Existing ={
        Group:"(//span[@id='hroupDescToolTip1'])[1]",
        Category:"(//span[@id='hroupDescToolTip1'])[2]",
        Sub_Category:"(//span[@id='hroupDescToolTip1'])[3]",
        Class:"(//span[@id='hroupDescToolTip'])",
        
    }
}