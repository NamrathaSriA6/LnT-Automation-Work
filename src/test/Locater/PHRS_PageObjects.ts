
export default class PHRS_PageObjects {
  public static LoginPage = {      Otheruser: '//a[text()="Other User"]',
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
    Plant_Hire_Request_Confirmation: '//span[text()="Plant Hire Request & Confirmation (PHR)"]',
    
  };
  
  public static Hirerequest= {
    Job: "//input[@id='drpJoblistHR']",
    Job_Code: "//mat-option[@title='LE150530 - Ghoshpukur Salsalabari Road Project']",
    Document: "//input[@id='drprequestTypesHR']",
    PHRSNUM: "//input[@id='phrsNumber']",
    Search: "//button[@id='searchBtnId']",
    S3RQTY:"//kendo-grid-list/descendant::td[@aria-colindex='8']",
    PHRSCreated:"//kendo-grid-list/descendant::td[@aria-colindex='9']",
    ExpandList:"//i[@id='gibtexpandlist']",
    ConfirmAction:"//i[@id='confirmedBtn']",
    Cancel_PHRS:"//i[@id='rejectedBtn']",
    confirmCancel:"//eipmessagebox/descendant :: button",
    alert_box: "//eiptoastalert",
    Icon: "//i[@id='openMenuBtnIcon'][1]",
    WithHireterm: "//p[text()='With Hire Term']",
    WithoutHireterm: "//p[text()='Without Hire Term']",
    Job_Role: "//p[@class='job-value']",
    BalanceQuantity:"//p[text()='Balance Quantity']/following-sibling::p",
    RequiredForm: "(//span[@class='k-icon k-i-calendar'])[1]",
    RequiredTo: "(//span[@class='k-icon k-i-calendar'])[2]",
    Dateclick:"(//kendo-calendar-header/span)[1]",
    June: "//span[text()= 'Jun']",
    Date:"//td[@title='Sunday, June 30, 2024']",
    Today: "//span[text()=' TODAY ']",
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
    Tearmvalue: "//span[text()='Excluded in hire charges']",
    ShiftInput: "//input[@id='shiftsInput']",
    ShiftHours: "//input[@id='shiftHours']",
    Addloperators:"//input[@id='addlOperators']",
    Helpers:"//input[@id='helpersInput']",
    Claimable_clear:"//input[@id='claimableClient']/ parent :: div / following-sibling :: div /span",
    Vendorpage:"//mat-dialog-container",
    
    CreateHireBtn: "//button[@id='CreateHireBtn']",
    SuccessOK: "//button[text()='Ok']",
    Message_box: "//eipmessagebox/descendant::p",
    Check_Vendor_added: "//div[@role='grid']/descendant::td[2]",
    ConfirmHireRequest:"//button[@id='confirmHireBtn']"

  };

  public static DB ={
    VendorInput :"//input[@id='vendorInputBox']",

  }

  public static Vendor = {
    Addvendor: "//p[text()='Add Vendor']",
    Vendor: "//input[@placeholder='Vendor (min 4 char)'] ",
    listbox: "//ul[@role='listbox']/child::li",
    selectVendorBtnId: "//button[@id='selectVendorBtnId']",
    VendorTable:"//kendo-grid[@id='addVndorGrid']",
  };


  public static TCC = {
    TCCID: "//div[@id='tccId']",
    Checkbox: "//input[@type='checkbox']//parent::span",
    Quantity: "//input[@id='txtvndrQty0']",
    SelectVendor: "//button[@id='selectVendorBtn']",
    SaveandNext: "//button[@id='saveAndNextBtn']"
  }
  
  public static OT = {
    HireCharges: "//input[@id='hireChargesId']",
    OTButton: "//span[text()='OT Charges']",
    OTPercentage: "//input[@id='otPercentInputBox']",
    OTExpectedhrs: "//input[@id='expectedOtHrs']",
    SaveOT: "//button[@id='saveOtChargesBtn']",
  };

  public static OTCalculation ={
    NormalrateperHR:"//td[text()='30']/parent::tr[@role='row']/descendant::td[6]",
    NormalQTY: "//td[text()='30']/parent::tr[@role='row']/descendant::td[8]",
    NormalHRSAmount: "//td[text()='30']/parent::tr[@role='row']/descendant::td[9]",
    OTRatePerHour: "//td[text()='30']/parent::tr[@role='row']/descendant::td[11]",
    OTQTY: "//td[text()='30']/parent::tr[@role='row']/descendant::td[14]",
    OTHRSAmount: "//td[text()='30']/parent::tr[@role='row']/descendant::td[15]",
    NormalAmountTotal: "//tfoot/descendant::td[@aria-colindex='9']",
    NormalQTYTotal:"//tfoot/descendant::td[@aria-colindex='8']",
    OTAmountTotal: "//tfoot/descendant::td[@aria-colindex='15']",
    OTQTYTotal: "//tfoot/descendant::td[@aria-colindex='14']"

  }

  public static OTCalculation31 ={
    NormalrateperHR:"//td[text()='31']/parent::tr[@role='row']/descendant::td[6]",
    NormalQTY: "//td[text()='31']/parent::tr[@role='row']/descendant::td[8]",
    NormalHRSAmount: "//td[text()='31']/parent::tr[@role='row']/descendant::td[9]",
    OTRatePerHour: "//td[text()='31']/parent::tr[@role='row']/descendant::td[11]",
    OTQTY: "//td[text()='31']/parent::tr[@role='row']/descendant::td[14]",
    OTHRSAmount: "//td[text()='31']/parent::tr[@role='row']/descendant::td[15]",
    
  }

  public static Commercials ={
    Operatorrate:"(//input[@id='calculation'])[3]",
    AddiOperatorrate:"(//input[@id='calculation'])[4]",
    Helperrate:"(//input[@id='calculation'])[5]",
    AddiHelperrate:"(//input[@id='calculation'])[6]",
    Accomodationrate:"(//input[@id='calculation'])[7]",
    Mobilisationrate:"(//input[@id='calculation'])[8]",
    DeMobilisationrate:"(//input[@id='calculation'])[9]",
    Operator :"//span[text()='Operator']",
    Addioperator:"//span[text()='Additional Operator']",
    Helper:"//span[text()='Helper']",

    SelectAllcheckbox:"//input[@id='checkApplicable-input']/ parent :: span",
    Save: "//button[text()='Save']",
  }

  public static AdditionalHelper = {
    AdditionalHelper: "//span[text()='Additional Helper']",
    Checkbox: '(//label[@class="mat-checkbox-layout"])[2]',
    Save: "//button[text()='Save']",
    Rate2: "(//input[@id='calculation'])[6]"
  }

  public static Accommodation = {
    Accommodation: "//span[text()='Accommodation']",
    Bachelor: "//span[text()='Bachelor Accomodation provided by site']",
    Save: "//button[text()='Save']",

  }

  public static Mobilisation = {
    Mobilisation: "//span[text()='Mobilisation']",
    Way: "//span[text()='Both way payable at actual']",
    Fromstate: "(//input[@data-placeholder='From State'])[1]",
    State1: "//span[text()='Andhra Pradesh']",
    Fromcity : "(//input[@data-placeholder='From City'])[1]",
    City1: "//span[text()='Adilabad']",
    Pin1:"//input[@name='Pmypincode']",
    Tostate: "(//input[@data-placeholder='To State'])[1]",
    State2: "//span[text()='Tamil Nadu']",
    Tocity: "(//input[@data-placeholder='To City'])[1]",
    City2: "//span[text()='Ariyalur']",
    Pin2: "//input[@id='Secpincode']",
    Next: "//button[text()='Next']",
    Save: "//button[text()='Save']",
    SaveandNext: "//button[@id='saveAndNextBtn']"
  }

  public static primaryEngine ={
    Dropdown_clear: "//eipautocomplete[@id='fuelTypeDropdown']/descendant::span[@title='clear']",
    Fuel_dropdown : "//eipautocomplete[@id='fuelTypeDropdown']/descendant::input[@data-placeholder='Fuel Type']",
    Quantity_Dropdown: "//eipautocomplete[@id='fuelQuantityDropdown']/descendant::input[@data-placeholder='Fuel Quantity']",
    Min: "//input[@id='minimumInputBox']",
    Max: "//input[@id='maximumInputBox']"

  }

  public static SecondaryEngine ={
    Fuel_dropdown : "//input[@id='sFuelType']",
    Quantity_Dropdown: "//input[@id='sFuelQuantity']",
    Min: "//input[@id='secondaryMiniumInput']",
    Max: "//input[@id='secondaryMaxiINput']"

  }

  public static BreakDown ={
    Breakdown_Cause : "//input[@id='selectedBreakdownCause']",
    Deduction_rate: "//input[@id='breakdownDeductionRate']",
    Maintenance: "//input[@id='selectedMaintenanceType']"
  }


  public static STC ={
    STCbtn : "//p[text()='STC']",
    Generate_STC: "//i[@title='Generate STC']",
    Select_doc: "(//div[@class='ng-star-inserted'])[5]/descendant::i",
    Close_box : "//i[@title='close']",
    Send_STC: "//i[@title='send STC']",
    Close_STC: "//i[@id='ibtClose']",

  }

  public static Vendor_Page ={
    UserName: "//span[@class='user_name']",
    MyAssets: "//span[@title='My Assets']",
    Menu_Clear: "//span[@title='clear']",
    Menu_Input: "//input[@id='drpMenuId']",
    Required_on: "//span[text()='Received On']",
    Accept_Request: "//kendo-grid-list/descendant::tr[1]/descendant::i[@title='Accept']",
    Acceptance_Remarks: "//kendo-popup[@id='kendoPopupRemark']/descendant::textarea",
    Accept: "//button[text()='Accept']",
    Filter: "//i[@title='Filter']",
    ReferenceInput:"(//table)[1]/descendant::td[@aria-colindex='1']/descendant::input"

  }

  public static Wo = {
  WoJob: "//span[@title='WO Request']",
  Remark: "(//button[@id='btnViewRmks'])[1]",
  Textarea: "//div[@class= 'popUpHolder checkedPopUp']/descendant::textarea",
  Submit: "//button[text()='Submit']",
  Ok: "//button[text()='Ok']",
  Icon: "(//i[@id = 'newRequestIcon'])[1]",
  EditWO:"//i[@id='editWoIcon']",
  Filter: "//i[@title='Filter']",
  ReferenceInput:"//thead/descendant::td[3]/descendant::input",
  Search_Document:"//thead/descendant::td[2]/descendant::input",
  PendingFieldInput: "//thead/descendant::td[7]/descendant::input",
  Filtered_Document: "(//kendo-grid-list//child::td)[2]",
  NormalHours_amt :"//kendo-grid-list/descendant::tr[1]/td[@aria-colindex='5']",
  OTHours_amt :"//kendo-grid-list/descendant::tr[2]/td[@aria-colindex='5']",
  Operator_amt :"//kendo-grid-list/descendant::tr[3]/td[@aria-colindex='5']",
  AddlOperator_amt :"//kendo-grid-list/descendant::tr[4]/td[@aria-colindex='5']",
  Helper_amt :"//kendo-grid-list/descendant::tr[5]/td[@aria-colindex='5']",  
  AddlHelper_amt :"//kendo-grid-list/descendant::tr[6]/td[@aria-colindex='5']",
  Accom_amt :"//kendo-grid-list/descendant::tr[7]/td[@aria-colindex='5']",
  Mob_amt :"//kendo-grid-list/descendant::tr[8]/td[@aria-colindex='5']",
  DeMob_amt :"//kendo-grid-list/descendant::tr[9]/td[@aria-colindex='5']",
}

  

  public static Creactioncheck = {
    GeneralSave : "//button[@id = 'saveAndNextButton']",
    CommercialSave : "//button[@id = 'saveAndNextBtn']",
    MaterialLinking : "//button[@id = 'saveAndNextBtnId']"
    
  }

  public static Tax ={
    countryVendor:"//eipautocomplete[@collectiontype='billFromCountry']/descendant::input",
    FromState : "(//input[@data-placeholder = 'State'])[1]",
    West : "//span[text() = 'st Bengal']",
    RegistrationNumberVendor:"//eipautocomplete[@collectiontype='fromRegisterNumberList']/descendant::input",
    countryjob:"//eipautocomplete[@collectiontype='billToCountry']/descendant::input",
    ToState : "(//input[@data-placeholder = 'State'])[2]",
    RegistrationNumberJob:"//eipautocomplete[@collectiontype='toRegisterNumberList']/descendant::input",
    Andhra : "//span[text() = 'Andhra Pradesh']",
    SAC: "//eipautocomplete[@collectiontype='sacDetailList']/descendant::input",
    Save : "//button[@id = 'saveAndNextBtn']",
    NormalHRReference_30:"//tbody/descendant::tr[@data-kendo-grid-item-index='0']/td[5]",
    NormalHRReference_31:"//tbody/descendant::tr[@data-kendo-grid-item-index='1']/td[5]",
    NormalHRTax_30:"//tbody/descendant::tr[@data-kendo-grid-item-index='0']/td[6]",
    NormalHRTax_31:"//tbody/descendant::tr[@data-kendo-grid-item-index='1']/td[6]",
    TaxRate:"//tbody/descendant::tr[@data-kendo-grid-item-index='0']/td[4]",
    OTHRReference_30: "//tbody/descendant::tr[@data-kendo-grid-item-index='2']/td[5]",
    OTHRReference_31:"//tbody/descendant::tr[@data-kendo-grid-item-index='3']/td[5]",
    OTHRTax_30:"//tbody/descendant::tr[@data-kendo-grid-item-index='2']/td[6]",
    OTHRTax_31:"//tbody/descendant::tr[@data-kendo-grid-item-index='3']/td[6]",
    TotalReferenceValue:"//p[text()='Reference Value']/following-sibling::p",
    TotalTaxValue:"//p[text()='Tax']/following-sibling::p",
    TotalAmount:"//p[text()='Total Amount']/following-sibling::p"

  }

  public static AssetDetails = {
    RemainingQty: "//span[text()='Remaining QTY ']/following-sibling::span",
    Add : "//button[@id = 'addBtn']",
    Create : "//button[@id = 'createBtn']",
    Description: "//input[@id='descriptionInputId']",
    Capacity: "//input[@id='capacity']",
    Make:"//input[@id='make']",
    Model:"//input[@id='model']",
    Type:"//kendo-combobox/descendant::input",
    
  }

  public static WoRequest = {
    Confirm : "//button[@id = 'confirmHireBtn']",
    AssetCode:"//tbody/descendant :: td[@aria-colindex='2']",
  } 

}