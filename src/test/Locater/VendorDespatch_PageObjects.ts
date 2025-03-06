export default class VendorDespatch_PageObjects {
    public static VD ={
        vendorDespatch:"//span[@title='Vendor Despatch']",
        JobCode:"//input[@id='groupDropdown']",
        Go_btn:"//button[text()='Go']",
        Assetcode:"//tbody /tr[1] / td[1] //span",
    }

    public static VD_popup ={
        AssetCode:"//p[text()='Asset Code'] / following-sibling :: p",
        JobCode:"//p[text()='From JobCode'] / following-sibling :: p",
        DCDatePicker:"(//span[@title='Toggle calendar'])[1]",
        DespatchThrough:"//input[@data-placeholder='Despatch through']",
        OtherDespatch:"//input[@data-placeholder='Other Despatch']",
        Freighttopay:"//input[@data-placeholder='Freight to pay']",
        NoofDcs:`//input[@data-placeholder="No. of DC's"]`,
        LRno:`//input[@data-placeholder="LR No."]`,
        LRDate:"(//span[@title='Toggle calendar'])[2]",
        MeterReading:`//input[@data-placeholder="Meter Reading(Req)"]`,
        FuelTankFull:"//input[@id='FuelTypeReq']",
        FuelQTY:`//input[@data-placeholder="Fuel Qty(ltr)"]`,
        Cancel_btn:"//button[text()='Cancel']",
        Sumbit_btn:"//button[text()='Submit']"
    }
}