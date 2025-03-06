export default class Extension_Confirmation_PageObjects {
    public static LoginPage = {
        Otheruser: '//a[text()="Other User"]',
        Username: '#username',
        Password: '#password-field',
        Login: '#login-submit',
        AccessMaster: '(//*[text()="Access & Master"])[1]',
        AccessControl: '(//*[text()="Access Control"])[1]',
        Workflow: '(//*[text()="Workflow"])[1]',
        WorkBench: '(//*[text()="WorkBench"])[1]'
        
    };
  
      public static DashBoard = {
  
        AccessMenu: '//a[@title="Access Based Menu"]',
        AssetManagement: '//span[@title="Asset Management"]',
        Planning_and_Procurement: '//span[@title="Planning & Procurement"]',
        Extension_Confirmation: '//span[text()="Extension Confirmation"]',
        Job: "//input[@id='drpJoblistHR']",
        Document: "//input[@id='drprequestTypesHR']",
        PHRSNUM: "//input[@id='phrsNumber']",
        Fullscreen: "//i[@id = 'toggleFullScreen']",
        Job_text: "//p[text() = 'Job']",
        Search: "//button[@id='searchBtnId']",
      };


      public static Extension_Confirmation = {
        Job: "//input[@id='drpJoblistHR']",
        Action: "(//i[@id='openRequest'])[1]",
        Save: "//button[@id='saveAndNextButton']",
        Edit: "(//i[@id='rejectedBtn'])[1]"

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
    
      };
  
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
    
      };

      public static OTCalculation29 ={
        NormalrateperHR:"//td[text()='29']/parent::tr[@role='row']/descendant::td[6]",
        Days: "//td[text()='29']/parent::tr[@role='row']/descendant::td[1]",
        Workingmonths: "//td[text()='29']/parent::tr[@role='row']/descendant::td[5]",
        WorkingDays: "//td[text()='29']/parent::tr[@role='row']/descendant::td[2]",
        OffDays: "//td[text()='29']/parent::tr[@role='row']/descendant::td[3]/descendant::input",
        NormalQTY: "//td[text()='29']/parent::tr[@role='row']/descendant::td[8]",
        NormalHRSAmount: "//td[text()='29']/parent::tr[@role='row']/descendant::td[9]",
        OTRatePerHour: "//td[text()='29']/parent::tr[@role='row']/descendant::td[11]",
        OTQTY: "//td[text()='29']/parent::tr[@role='row']/descendant::td[14]",
        OTHRSAmount: "//td[text()='29']/parent::tr[@role='row']/descendant::td[15]",
    
      }
  
  
      
      public static AdditionalHelper = {
        AdditionalHelper: "//span[text()='Additional Helper']",
        Checkbox: '(//label[@class="mat-checkbox-layout"])[1]',
        Save: "//button[text()='Save']",
        AdditionalHelperRate: "(//input[@id='calculation'])[6]"
      }

      public static AdditionalOperator = {
        AdditionalOperator: "//span[text()='Additional Operator']",
        Checkbox: '(//label[@class="mat-checkbox-layout"])[1]',
        Save: "//button[text()='Save']",
        AdditionalOperatorRate: "(//input[@id='calculation'])[4]"
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
        SaveandNext: "//button[@id='saveAndNextBtn']"
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
  
  

      

}