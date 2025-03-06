export default class PageObjects {
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
        Operations_and_Maintenance: '//span[@title="Operations & Maintenance"]',
        Maintenance_Tasks: '//span[text()="Maintenance Tasks"]',
    };

    public static MRO_Servicetype = {
        Clear: '//span[@title="clear"]',
        Add_servicetype: '//p[@class="tableheader"]/i',
        Servicetype_input: '//input[@id="serviceType"]',
        Addservicetype_btn: '//button[text()="Add Service Type "]',
        Service_Type: '//span[text()="Service Type"]',
        Service_Type_ID:'//span[text()="Service Type ID"]',
        Edit: '(//i[@title="Edit"])[1]',
        Save: '(//i[@title="Save"])[1]',
        Cancel_icon: '(//i[@title="Cancel"])[1]',
        YesNo_Btn: "//span[@role='switch']/span[3]" ,
        Popup:"//kendo-popup"  

    }

    public static MRO_Task = {
        Task: '//span[text()="Task"]',
        Task_input: '//input[@id="serviceType"]',
        Add_Task: '//p[@class="tableheader"]/i',
        AddTask_btn: '//button[text()="Add Task "]',
        Linking_icon: "//span[@class='ng-star-inserted'][1]/i[1]",
        list1: "(//div[@class='mat-list-text'])[1]",
        list2:"(//div[@class='mat-list-text'])[2]",
        list3:"(//div[@class='mat-list-text'])[3]",
        Post_btn: '(//div[@class="job-post-button"])[2]/button',
        Info_icon: "//kendo-grid-list/div/div[1]/table/tbody/tr[1]/td[3]/span[2]/i",
        Task_ID:'//span[text()="Task ID"]',
        Popup:"//kendo-popup",
        Choose_Service_Type_Head: "(//div[@class='job-cart'])[1]//h5",
        Selected_Service_Types_Head: "(//div[@class='job-cart'])[2]//h5",
        Section1: "//div[@class='job-cart-box']/mat-selection-list",
        Section2: "//div[@class='job-cart-box job-cart-box1']/mat-selection-list",
        Chevron_icon1:"(//div[@class='btn-group']//i)[1]",
        Chevron_icon2:"(//div[@class='btn-group']//i)[2]",
        Info_field_values: "//kendo-popup"
    }

    public static MRO_Task_Group = {
        Task_Group: '//span[text()="Task Group"]',
        Linking_icon: "//span[@class='ng-star-inserted'][1]/i[1]",
        Task_Group_Id: '//span[text()="Task Group ID"]',
        Task_Group_input: '//input[@id="serviceType"]',
        list1: "(//div[@class='mat-list-text'])[1]",
        list2:"(//div[@class='mat-list-text'])[2]",
        Info_field_values: "//kendo-popup",
        AddTask_Group_btn: '//button[text()="Add Task Group "]',
        Post_btn: '(//div[@class="job-post-button"])[2]/button'
    }

    public static MRO_Service_Frequency = {
        Add_Service_Frequency: '//p[@class="tableheader"]/i',
        Service_Frequency: '//span[text()="Service Frequency"]',
        AddService_Frequency_btn: '//button[text()="Add Service Frequency "]',
        Service_Frequency_UoM: "(//input[@id='groupDropdown'])[2]",
        Service_Frequency_Value: "//input[@id='remarksId']",
        Filter: "//i[@title='Filter']",
        ValueFill: '(//kendo-grid-filter-wrapper-cell/input)[3]',
        Grid_Head: "//div[@role='grid']/descendant::thead/descendant::th",
        Grid_Row: "//div[@role='grid']/descendant::tbody/descendant::tr"
    }
}