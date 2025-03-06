export default class CPStatement_PageObjects {
    public static Statement= {
        CP_Statement:"//span[@title='Cost of Plant (CP) statement']",
        JobCode_click:"//tbody /tr[1] / td[1] // span",
        Jobcode:"//p[contains(text(),'JobCode')]",
        ApprovalPeriod:"//p[contains(text(),'Approval period')]",
        ApprovalRemarks:"//input[@data-placeholder='Approval Remarks']",
        Approve_btn:"//button[text()='Approve']",
        Reject_btn:"//button[text()='Reject']",
        JobCodeVerify :"//span[text()='LE150005']"
    }
}