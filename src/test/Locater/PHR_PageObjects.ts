
export default class PageObjects {
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
      Job: "//input[@id='drpJoblistHR']",
      Document: "//input[@id='drprequestTypesHR']",
      PHRSNUM: "//input[@id='phrsNumber']",
      Fullscreen: "//i[@id = 'toggleFullScreen']",
      Job_text: "//p[text() = 'Job']",
      Document_text: "//p[text() = 'Document']",
      PHRS_Number: "//p[text() = 'PHRS Number']",
      Asset_Group: "//p[text() = 'Asset Group']"


    };
    public static Hiring = {

      Job: "//input[@id='drpJoblistHR']",
      Job_Code: "//mat-option[@title='LE150756 - Khulna Mongla Bridge Project']",
      Search: "//button[@id='searchBtnId']",
      Message_box: "//eipmessagebox/descendant::p",
      Grid_Head: "//div[@role='grid']/descendant::thead/descendant::th",
      Grid_Row: "//div[@role='grid']/descendant::tbody/descendant::tr",
      Gird_Dropdown: "//kendo-grid[@id='kendoGrid']/descendant::tr"
    };

    public static Hirerequest= {
      alert_box: "//eiptoastalert",
      Icon: "(//i[@id='openMenuBtnIcon'])[1]",
      WithHireTeam: "//p[text()='With Hire Term']",
      Job_Role: "//p[@class='job-value']",
      ExpandList:"//i[@id='gibtexpandlist']",
      ConfirmAction:"//i[@id='confirmedBtn']",
      Cancel_PHRS:"//i[@id='rejectedBtn']",
      confirmCancel:"//eipmessagebox/descendant :: button",
      Check_Vendor_added: "//div[@role='grid']/descendant::td[2]",
      Vendorpage:"//mat-dialog-container",
      Requiredfrom:"(//span[@class='k-icon k-i-calendar'])[1]",
      Today: "//span[text()=' TODAY ']",
      RequiredTo:"(//span[@class='k-icon k-i-calendar'])[2]",
      March2028: "//span[@class='k-button k-bare k-title']",
      Year: "//span[text()='2024']",
      May: "(//span[text()='May'])[1]",
      Date2: "//span[text()='30']",
      Quantity: "//input[@id='quantityInput'] ",
      MinAge: "//input[@id='equipAge']",
      MaxAge: "//input[@id='equipAgeMax']",
      MakeDescription: "//kendo-combobox[@id='makeDesInput']/descendant::input",
      Worktype: "//input[@id='workType']",
      NonCumulative: "//span[text()='Non-Cumulative']",
      CreateHireBtn: "//button[@id='CreateHireBtn']",
      Tearms: "//input[@id='operatorTermsDD']",
      Tearmvalue: "//span[text()='Included in hire charges~Single shift~Fixed charges/month for 12 hours']",
      ShiftInput: "//input[@id='shiftsInput']",
      ShiftHours: "//input[@id='shiftHourssInput']",
      Ok: "//button[text()='Ok']",
      Dropdown : "(//i[@id = 'gibtexpandlist'])[1]"
    };

    public static Vendor = {
      Addvendor: "//p[text()='Add Vendor']",
      Vendor: "//input[@placeholder='Vendor (min 4 char)'] ",
      listbox: "//ul[@role='listbox']/child::li",
      selectVendorBtnId: "//button[@id='selectVendorBtnId']",
      CreateHireBtn: "//button[@id='CreateHireBtn']",
      Gibtexpandlist: "//i[@id='gibtexpandlist']",
      ConfirmedBtn: "//i[@id='confirmedBtn']",
      VendorTable:"//kendo-grid[@id='addVndorGrid']"
      
      
    };

    public static TCC = {
      TCCID: "//div[@id='tccId']",
      Checkbox: "//input[@type='checkbox']//parent::span",
      Quantity: "//input[@id='txtvndrQty0']",
      SelectVendor: "//button[@id='selectVendorBtn']",
      SaveandNext: "//button[@id='saveAndNextBtn']"
    };
    
    public static OT = {
      HireCharges: "//input[@id='hireChargesId']",
      OTButton: "//span[text()='OT Charges']",
      OTPercentage: "//input[@id='otPercentInputBox']",
      OTExpectedhrs: "//input[@id='expectedOtHrs']",
      SaveOT: "//button[@id='saveOtChargesBtn']",
    };

    public static OTCalculation ={
      NormalrateperHR:"//td[text()='31']/parent::tr[@role='row']/descendant::td[6]",
      Days: "//td[text()='31']/parent::tr[@role='row']/descendant::td[1]",
      Workingmonths: "//td[text()='31']/parent::tr[@role='row']/descendant::td[5]",
      WorkingDays: "//td[text()='31']/parent::tr[@role='row']/descendant::td[2]",
      OffDays: "//td[text()='31']/parent::tr[@role='row']/descendant::td[3]/descendant::input",
      NormalQTY: "//td[text()='31']/parent::tr[@role='row']/descendant::td[8]",
      NormalHRSAmount: "//td[text()='31']/parent::tr[@role='row']/descendant::td[9]",
      OTRatePerHour: "//td[text()='31']/parent::tr[@role='row']/descendant::td[11]",
      OTQTY: "//td[text()='31']/parent::tr[@role='row']/descendant::td[14]",
      OTHRSAmount: "//td[text()='31']/parent::tr[@role='row']/descendant::td[15]",
  
    }

    public static OTCalculation30 ={
      NormalrateperHR:"//td[text()='30']/parent::tr[@role='row']/descendant::td[6]",
      Days: "//td[text()='30']/parent::tr[@role='row']/descendant::td[1]",
      Workingmonths: "//td[text()='30']/parent::tr[@role='row']/descendant::td[5]",
      WorkingDays: "//td[text()='30']/parent::tr[@role='row']/descendant::td[2]",
      OffDays: "//td[text()='30']/parent::tr[@role='row']/descendant::td[3]/descendant::input",
      NormalQTY: "//td[text()='30']/parent::tr[@role='row']/descendant::td[8]",
      NormalHRSAmount: "//td[text()='30']/parent::tr[@role='row']/descendant::td[9]",
      OTRatePerHour: "//td[text()='30']/parent::tr[@role='row']/descendant::td[11]",
      OTQTY: "//td[text()='30']/parent::tr[@role='row']/descendant::td[14]",
      OTHRSAmount: "//td[text()='30']/parent::tr[@role='row']/descendant::td[15]",
  
    }

    public static AdditionalOperator = {
      AdditionalOperatorRate: "(//input[@id='calculation'])[4]"
    }

    public static AdditionalHelper = {
      AdditionalHelper: "//span[text()='Additional Helper']",
      Checkbox: '(//label[@class="mat-checkbox-layout"])[1]',
      Save: "//button[text()='Save']",
      AdditionalHelperRate: "(//input[@id='calculation'])[6]"
    }

    public static Accommodation = {
      Accommodation: "//span[text()='Accommodation']",
      Bachelor: "//span[text()='Bachelor Accomodation provided by site']",
      Save: "//button[text()='Save']",
      AccommodationRate: "(//input[@id='calculation'])[7]"

    }

    public static Helper = {
      HelperRate: "(//input[@id='calculation'])[5]"
    }

    public static Operator = {
      OperatorRate: "(//input[@id='calculation'])[3]"

    }

    public static Mobilisation = {

      MobilisationRate: "(//input[@id='calculation'])[8]",
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
      SaveandNext: "//button[@id='saveAndNextBtn']",
      Edit:"//i[@id='editWoIcon']",
      Dropdown:"//i[@id='gibtexpandlist']",
      MobClose:"//i[@id = 'ibtClose']"
    }

    public static Primary= {
      clear: "//eipautocomplete[@id='fuelTypeDropdown']/descendant::span[@title='clear']",
      Fueltype: "//eipautocomplete[@id='fuelTypeDropdown']/descendant::input[@data-placeholder='Fuel Type']",
      Fuelquantity: "//eipautocomplete[@id='fuelQuantityDropdown']/descendant::input[@data-placeholder='Fuel Quantity']",
      MinimumInputBox: "//input[@id='minimumInputBox']",
      MaximumInputBox: "//input[@id='maximumInputBox']"

    }

    public static Secondary = {
      Fueltype: "//input[@id='sFuelType']",
      Fuelquantity: "//input[@id='sFuelQuantity']",
      MinimumInputBox: "//input[@id='secondaryMiniumInput']",
      MaximumInputBox: "//input[@id='secondaryMaxiINput']"

    }

    public static Breakbown = {
      selectedBreakdownCause: "//input[@id='selectedBreakdownCause']",
      breakdownDeductionRate: "//input[@id='breakdownDeductionRate']",
      selectedMaintenanceType: "//input[@id='selectedMaintenanceType']",
      saveAndNextBtn: "//button[@id='saveAndNextBtn']",
      confirmHireBtn: "//button[@id='confirmHireBtn']"

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
      ReferenceNo: "//span[text() = 'Reference No.']",
      Required_on: "//span[text()='Received On']",
      Filter: "//i[@title='Filter']",
      ReferenceInput:"(//table)[1]/descendant::td[@aria-colindex='1']/descendant::input",
      JobFill: "(//td[@class='ng-star-inserted'])[2]/descendant::input",
      Accept_Request: "//kendo-grid-list/descendant::tr[1]/descendant::i[@title='Accept']",
      Acceptance_Remarks: "//kendo-popup[@id='kendoPopupRemark']/descendant::textarea",
      Accept: "//button[text()='Accept']",
  
    }


    public static Wo = {
      JOB:"//input[@id='drpJoblistHR']",
      WoJob: "//span[@title='WO Request']",
      Remark: "(//button[@id='btnViewRmks'])[1]",
      Textarea: "//div[@class= 'popUpHolder checkedPopUp']/descendant::textarea",
      Submit: "//button[text()='Submit']",
      Ok: "//button[text()='Ok']",
      Icon: "(//i[@id = 'newRequestIcon'])[1]",
      Filter: "//i[@title='Filter']",
      PHRSInput: "//thead/descendant::td[3]/descendant::input",
      PendingFieldInput:"//thead/descendant::td[7]/descendant::input",
      alert_box:"//eiptoastalert",
      ReferenceInput:"//thead/descendant::td[3]/descendant::input",
      Search_Document:"//thead/descendant::td[2]/descendant::input",
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
      EditWO:"//i[@id='editWoIcon']",
    }

    public static Creactioncheck = {
      GeneralSave : "//button[@id = 'saveAndNextButton']",
      CommercialSave : "//button[@id = 'saveAndNextBtn']",
      MaterialLinking : "//button[@id = 'saveAndNextBtnId']"
      
    }

    public static Tax ={
      FromState : "(//input[@data-placeholder = 'State'])[1]",
      West : "//span[text() = 'st Bengal']",
      ToState : "(//input[@data-placeholder = 'State'])[2]",
      Andhra : "//span[text() = 'Andhra Pradesh']",
      SAC: "//input [@id = 'drpsacDetailListHR']",
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
    Add : "//button[@id = 'addBtn']",
    Create : "//button[@id = 'createBtn']"
  }

  public static WoRequest = {
    Confirm : "//button[@id = 'confirmHireBtn']",
    Status:"(//tbody)[2]/descendant::td[@aria-colindex='8']",
    Next: "//button[text()='Next']",
    Save:"//button[text()='Save']"
  }


  

  }