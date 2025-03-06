export default class WorkOrderAmendment_PageObjects {
    public static LoginPage = {
        Otheruser: '//a[text()="Other User"]',
        Username: '#username',
        Password: '#password-field',
        Login: '#login-submit',
        
        
    };
  
    public static DashBoard = {
      AccessMenu: '//a[@title="Access Based Menu"]',
      AssetManagement: '//span[@title="Asset Management"]',
      Planning_and_Procurement: '//span[@title="Planning & Procurement"]',
      Plant_Hire_Request_Confirmation: '//span[text()="Plant Hire Request & Confirmation (PHR)"]',
      AmendmentRequest:"//span[@title='Amendment Request']",

    };

    public static WOA ={
        Job: "//input[@id='drpJoblistWoAmend']",
        Document: "//input[@id='drprequestTypesHR']",
        PHRSNUM: "//input[@id='phrsNumber']",
        Search: "//button[text()='Search']",
        Filter:"//i[@id='ibtExcelImport']",
        WONumberInput:"//thead/descendant::td[1]/descendant::input",
        EditAction:"(//i[@title='Edit'])[1]",
        alert_box: "//eiptoastalert",
        Icon: "//i[@id='openMenuBtnIcon'][1]",
        
        Job_Role: "//p[@class='job-value']",
        RequiredForm: "(//span[@title='Toggle calendar'])[1]/parent::span",
        RequiredTo: "(//span[@title='Toggle calendar'])[2]",
        Dateclick:"(//kendo-calendar-header/span)[1]",
        June: "//span[text()= 'Jul']",
        Date:"//td[@title='Sunday, July 30, 2024']",
        Today: "//span[text()=' TODAY ']",
        EquipmentDescription:"//input[@id='equipDes']",
        Capacity:"//input[@id='capacityInput']",
        Quantity: "//input[@id='quantityInput']",
        MinAge: "//input[@id='equipAge']",
        MaxAge: "//input[@id='equipAgeMax']",
        MakeDescription: "//kendo-combobox[@id='makeDesInput']/descendant::input",
        ModelDescription:"//kendo-combobox[@id='modelDesInput']/descendant::input",
        ReasonforHiring:"//input[@id='reasonForHiring']",
        ScopeofWork:"//input[@id='scopeOfWork']",
        SpecificRequirements:"//input[@id='specRequirments']",
        ScopeWorkEquipment:"//input[@id='scopeWorkEquipment']",
        Duration:"//input[@id='durationInput']",
        Worktype: "//input[@id='workType']",
        Cumulative: "//span[text()='Cumulative']",
        Tearms: "//input[@id='operatorTermsDD']",
        Tearmvalue: "//span[text()='Included in hire charges~Single shift~Fixed charges/month for 12 hours']",
        ShiftInput: "//input[@id='shiftsInput']",
        ShiftHours: "//input[@id='shiftHours']",
        Addloperators:"//input[@id='addlOperators']",
        Helpers:"//input[@id='helpersInput']",
        ClaimablefromClient:"//input[@id='claimableClient']",
        ShiftTimings:"//kendo-maskedtextbox[@id='shiftTimingsInputbox']",
        VendorInput:"//input[@id='vendorInputBox']",
        SaveandNext: "//button[@id='saveAndNextButton']",
        Vendorpage:"//mat-dialog-container",
        
        CreateHireBtn: "//button[@id='CreateHireBtn']",
        SuccessOK: "//button[text()='Ok']",
        Message_box: "//eipmessagebox/descendant::p",
        Check_Vendor_added: "//div[@role='grid']/descendant::td[2]",
        ConfirmHireRequest:"//button[@id='confirmHireBtn']"
    }

    public static OT = {
        HireCharges: "//input[@id='hireChargesId']",
        OTCharges: "//span[text()='OT Charges']",
        OTExpectedHrsMonth30: "(//input[@id='expectedMonthInput'])[1]",
        OTExpectedHrsMonth31: "(//input[@id='expectedMonthInput'])[2]",     
        SaveOT: "//button[@id='saveOtChargesBtn']",
      };

    public static Commercials ={
        OperatorAmendmentQty:"(//input[@id='amendmentCalculation'])[3]",
        AddiOperatorAmendmentQty:"(//input[@id='amendmentCalculation'])[4]",
        HelperAmendmentQty:"(//input[@id='amendmentCalculation'])[5]",
        AddiHelperAmendmentQty:"(//input[@id='amendmentCalculation'])[6]",
        AccomodationAmendmentQty:"(//input[@id='amendmentCalculation'])[7]",
        MobilisationAmendmentQty:"(//input[@id='amendmentCalculation'])[8]",
        DeMobilisationAmendmentQty:"(//input[@id='amendmentCalculation'])[9]",
        SaveAndNext_btn:"//button[@id='saveAndNextBtn']",

      }

      public static MaterialLinking = {
        SaveAndNext:"//button[@id='saveAndNextBtnId']",
      }

      public static Tax = {
        TaxDetails:"//kendo-grid/descendant:: tbody/descendant:: tr",

      }

      public static SOP = {
        FailedValidation:"//p[text()='Fail']/following-sibling::p",

      }
}