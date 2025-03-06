export default class LogsheetPageObjects{

    public static LoginPage = {      
        Otheruser: '//a[text()="Other User"]',
        Username: '#username',
        Password: '#password-field',
        Login: '#login-submit',
        Signout_button: '//a[text()="Sign Out"]',
        Signout: '#profiledropdownbtn',
    };

    public static DashBoard = {
        AccessMenu: '//a[@title="Access Based Menu"]',
        AssetManagement: '//span[@title="Asset Management"]',
        Operation_and_Maintenance:"//span[@title='Operations & Maintenance']",
        LogSheet:"//span[@title='Log Sheet']"
        
    };

    public static LogsheetDayBased = {
        CreatelogSheet_btn:"//button[@type='button']",
        Logsheet: "//div[text()= 'Log Sheet']",
        Remarks_icon: "//button[@id='btnViewRmks']",
        Remarks_field: "//textarea[@id='remarksItem']",
        Grid_Head: "//div[@role='grid']/descendant::thead/descendant::th",
        Grid_Row: "//div[@role='grid']/descendant::tbody/descendant::tr",
        Job:"//input[@id='job']",
        AssetCode:"//input[@id='lsAssetCode']",
        GoArrow:"//i[@title='Go']",
        Chart:"//kendo-chart",
        StartReading:"//app-logsheet-create/descendant::span[20]",
        EndReading:"//kendo-numerictextbox[@id='txtEndReadingPrimary']/descendant::input",
        WorkHours:"//kendo-numerictextbox[@id='txtWorkPrimary']/descendant::input",
        IdleHours:"//kendo-numerictextbox[@id='txtIdlePrimary']/descendant::input",
        BreakdownHours:"//kendo-numerictextbox[@id='txtBreakdownPrimary']/descendant::input",
        FuelPopup:"//i[@id='btnFuelPopup']",
        MeterReading:"(//input[@role='spinbutton'])[10]",
        FuelQuantity:"(//input[@role='spinbutton'])[11]",
        FuelAdd:"//i[@id='GridbtAdd']",
        FuelPost_btn:"//button[@id='btnPOst']",
        ProdQuantity:"//kendo-grid[@id='prodGrid']/descendant::tbody/descendant::td[@aria-colindex='3']/descendant::input",
        Submit_btn:"//button[@id='btnSubmit']",
        alert_box: "//eiptoastalert",


    }


    public static LogSheetTimeBased ={
        TimeBased:"//li[@id='ibtToggleTimeBased']",
        Confirmation_yes:"//eipmessageboxcontainercomponent/descendant::button[1]",
        Work_btn:"//button[@id='btnAddWorkReading']",
        Idle_btn:"//button[@id='btnAddIdleReading']",
        BreakDown_btn:"//button[@id='btnAddBreakdownReading']",
        OT_btn:"//button[@id='btnAddOTReading']",
        StartReading_Work:"(//kendo-grid-list)[1]/descendant::tr[@aria-rowindex='3']/td[@aria-colindex='1']/span",
        EndReading_Work:"(//kendo-grid-list)[1]/descendant::tr[@aria-rowindex='3']/td[@aria-colindex='2']/descendant::input",
        StartReading_Idle:"(//kendo-grid-list)[1]/descendant::tr[@aria-rowindex='4']/td[@aria-colindex='1']/span",
        EndReading_Idle:"(//kendo-grid-list)[1]/descendant::tr[@aria-rowindex='4']/td[@aria-colindex='2']/descendant::input",
        StartReading_breakdown:"(//kendo-grid-list)[1]/descendant::tr[@aria-rowindex='5']/td[@aria-colindex='1']/span",
        EndReading_breakdown:"(//kendo-grid-list)[1]/descendant::tr[@aria-rowindex='5']/td[@aria-colindex='2']/descendant::input",
        HoursperKM:"(//kendo-grid-list)[1]/descendant::tr[@aria-rowindex='3']/td[@aria-colindex='3']/span",
        StartTimeIcon:"(//kendo-timepicker)[1]/descendant::span[@title='Toggle time list']",
        StartTime_work:"//kendo-timelist/descendant::li[@data-timelist-item-index='5']",
        EndTime_work:"//kendo-timelist/descendant::li[@data-timelist-item-index='10']",
        StartTime_idle:"//kendo-timelist/descendant::li[@data-timelist-item-index='10']",
        EndTime_idle:"//kendo-timelist/descendant::li[@data-timelist-item-index='12']",
        StartTime_breakdown:"//kendo-timelist/descendant::li[@data-timelist-item-index='12']",
        EndTime_breakdown:"//kendo-timelist/descendant::li[@data-timelist-item-index='13']",
        SetTime:"//button[@title='Set time']",
        EndTimeIcon:"(//kendo-timepicker)[2]/descendant::span[@title='Toggle time list']",
        SaveWork_Work:"(//kendo-grid-list)[1]/descendant::tr[@aria-rowindex='3']/td[@aria-colindex='8']/descendant::button[3]",
        SaveWork_Idle:"(//kendo-grid-list)[1]/descendant::tr[@aria-rowindex='4']/td[@aria-colindex='8']/descendant::button[3]",
        SaveWork_breakdown:"(//kendo-grid-list)[1]/descendant::tr[@aria-rowindex='5']/td[@aria-colindex='8']/descendant::button[3]",
        Submit_btn:"//button[@id='btnSubmit']"
    }


}