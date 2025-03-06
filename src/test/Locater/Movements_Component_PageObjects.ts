export default class Movements_Components_PageObjects {
    public static DA = {
        Component_toggle:"//p[text()='Component']",
        Checkbox:"//mat-checkbox / descendant :: span[1]",
        Components:"//p[text()='Components']",
        ShoppingCart:"//p[text()='Component Details']/ following-sibling :: i",
        Addcomponent:"//p[text()='Component Details']/ following-sibling :: button",
        ComponentDescriptionCheckbox:"(//mat-checkbox)[2] / descendant :: span[1]",
        Component_Desc:"//input[@name='CompDesc']",
        component_Qty:"//input[@name='TotalQty']",
        Save_Comp:"(//tbody)[3]/ tr[1] / td[@aria-colindex='5'] / button[3]",
        ADD_Comp:"//p[text()='Add']",
        Components_Submit:'//p[text()="Submit"]',
        Components_Submit_ok:"//button[text()='Ok']",
        From_Job:"//input[@id='ActxtboxGINJob']",
        
    }

    public static DC = {
        FMV_value:"//input[@id='FMVValue']",
        Component_Make:"(//tbody)[3]/ tr[1] / td[@aria-colindex='4'] / input",
        Componnet_Model:"(//tbody)[3]/ tr[1] / td[@aria-colindex='5'] / input",
        Despatch_Qty:"(//tbody)[3]/ tr[1] / td[@aria-colindex='8'] /descendant :: input",
        Unit_FMV_Value:"(//tbody)[3]/ tr[1] / td[@aria-colindex='10'] /descendant :: input",
        Weight: "(//tbody)[3]/ tr[1] / td[@aria-colindex='13'] /descendant :: input",
        Length:"(//tbody)[3]/ tr[1] / td[@aria-colindex='14'] /descendant :: input",
        Width:"(//tbody)[3]/ tr[1] / td[@aria-colindex='15'] /descendant :: input",
        Height:"(//tbody)[3]/ tr[1] / td[@aria-colindex='16'] /descendant :: input",
        HSN_Code:"(//tbody)[3]/ tr[1] / td[@aria-colindex='17'] /descendant :: input",
        Total_DA_Qty:"(//tbody)[3]/ tr[1] / td[@aria-colindex='6']",
        CDCGenerated:"//eipmessagebox/ descendant :: p[3]",
    }
}