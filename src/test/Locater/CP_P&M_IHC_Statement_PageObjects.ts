export default class CP_PM_IHC_Statement_PageObjects {
    public static IHC_Statement ={
        PM_IHC_Statement:"//span[@title='P&M IHC Statement']",
        JOB_field:"//input[@id='job']",
        Date_field:"//input[@id='propConstDateId']",
        Year:"//button[@aria-label='2023']",
        Month:"//button[@aria-label='Mar 2023']",
        GetStatement_btn:"//button[text()='Get Statement']",
        Created_by:"//span[text()='Created By : '] / following-sibling :: p",
        CreatedOn:"//span[text()='Created On : '] / following-sibling :: p",
        GrphireCharges_total:"//tfoot // tr[1] // td[@aria-colindex='4']",
        IHCBillable_total:"//tfoot // tr[1] // td[@aria-colindex='5']",
        BreacdownCost_total:"//tfoot // tr[1] // td[@aria-colindex='6']",
        IHCBilled_total:"//tfoot // tr[1] // td[@aria-colindex='7']",

    }
}