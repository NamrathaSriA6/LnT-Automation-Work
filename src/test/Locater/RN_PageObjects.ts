export default class RN_PageObjects {

  public static LoginPage = {
      Otheruser: '//a[text()="Other User"]',
      Username: '#username',
      Password: '#password-field',
      Login: '#login-submit',
      AccessMaster: '(//*[text()="Access & Master"])[1]',
      AccessControl: '(//*[text()="Access Control"])[1]',
      Workflow: '(//*[text()="Workflow"])[1]',
      WorkBench: '(//*[text()="WorkBench"])[1]'
      
  }

  public static DashBoard = {
      AccessMenu: '//a[@title="Access Based Menu"]',
      AssetManagement: '//span[@title="Asset Management"]',
      Mobilization_Movements: '//span[@title="Mobilization & Movements"]',
      Movement: '//span[text()="Movement"]'
  }

  public static Receipt = {
      Mobilization_Movements: '//span[@title="Mobilization & Movements"]',
      Movement: '//span[text()="Movement"]',
      Receipt : "//span[text()=' Receipt']",
      Go : "//i[@title='Go']",
      Create : "(//i[@title='Create RN'])[1]",
      Action : "//i[@title='Update Initial RN']",
      Calendar : "//span[@title='Toggle calendar']",
      Date : "//span[@class='k-today']",
      Remarks : "//textarea[@id='rnRemarks']",
      IssueRN : "//p[text()='Issue RN']",
      Fullscreen :"//i[@title = 'Expand']",
      Close: "//i[@title = 'Collapse']",
      Hover:"//table[@class='k-grid-table']/tbody/tr[1]/td[7]/span",
      SuccessButtonOk:"//eipmessagebox/descendant::button",
      Grid_Head: '(//div[@role="presentation"]/descendant :: thead/ descendant :: tr)[2]',
      Grid_Row: '(//div[@role="presentation"]/descendant :: thead/ descendant :: tr)[2]',
      Filter:"//i[@title='Filter']",
      AssetCodeInput:"//thead/descendant::td[@aria-colindex='4']/descendant::input",
      Breadcrums:"//ul[@class='breadcrumb']",
      SearchIcon:"//i[@id='ibtAdvanceSearch']",
      DatePicker:"//input[@id='icon-rightdateRange_Kendo']",
    }
    public static Asset = {
      Status:"(//tbody)[2]/descendant::td[@aria-colindex='8']",
      Close:"//i[@id='ibtClose']",
      Yes:"//eipmessageboxcontainercomponent/descendant::button[1]",
      SearchIcon:"//i[@id='ibtAdvanceSearch']",
      Search:"//button[@id='btnSearch']",
      DatePicker:"//input[@id='icon-rightdateRange_Kendo']"
    }
}