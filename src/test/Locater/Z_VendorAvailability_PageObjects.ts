export default class VendorAvailability_PageObjects{
    public static Vendor = {
        Breadcrums:"//ul[@class='breadcrumb']",
        MyAssets: "//span[@title='My Assets']",
        Menu_Clear: "//span[@title='clear']",
        Menu_Input: "//input[@id='drpMenuId']",
        Enterdetailspopup:"//mat-dialog-container",
        Equipment_Availability:"//span[text()='Add Equipment Availability']",
        CreateNew_btn:"//button[@id='newinput']",
        Asssetgrp:"//p[text()='Asset Group']/ following-sibling :: input",
        Assetdescription:"//p[text()='Asset Description']/ following-sibling :: input",
        EquipmentQty:"//p[text()='Equipment Qty'] / following-sibling :: eipnumeric // input",
        Status:"//eipautocomplete[@id='statusdropdown'] // input",
        Equipment_capacity:"//p[text()='Equipment Capacity']/ following-sibling :: input",
        Availfrom_date:"(//span[@title='Toggle calendar'])[1]",
        Availto_date:"(//span[@title='Toggle calendar'])[2]",
        Age:"//p[text()='Age']/ following-sibling :: eipnumeric // input",
        Location:"//p[text()='Location']/ following-sibling :: input",
        Remarks:"//p[text()='Remarks']/ following-sibling :: input",
        Reset_btn:"//button[@id='restbuttonid']",
        Save_btn:"//button[@id='savebuttonid']",

    }

    public static Emp = {
        VendorEQPAvailability :"//a/span[text()='Vendor Equipment Availability']",
        Vendor_input:"//input[contains(@placeholder,'Vendor')]",
        knowell:"//kendo-list// li",
        Search_btn:"//button[@id='searchBtnId']",
        Active_toggle:"//input[@role='switch']/ parent :: span",
        Assetgrp_input:"//input[@placeholder='Asset Group']",
        Assetgrp:"//tbody/ tr / td[@aria-colindex='1']",
        Assetdescription:"//tbody/ tr / td[@aria-colindex='2']",
        VendorDescription:"//tbody/ tr / td[@aria-colindex='3']",
        EquipmentQTY:"//tbody/ tr / td[@aria-colindex='4']/ div",
        Status:"//tbody/ tr / td[@aria-colindex='5']",
        Capacity:"//tbody/ tr / td[@aria-colindex='8']",
        Age:"//tbody/ tr / td[@aria-colindex='9']",
        Location:"//tbody/ tr / td[@aria-colindex='10']",
        Remarks:"//tbody/ tr / td[@aria-colindex='11']"
    }
}