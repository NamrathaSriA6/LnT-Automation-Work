export default class Movements_Repair_PageObjects {
    public static Asset = {
        Repair_toggle:"//p[text()='Repair']",
        Repair_WareHouse:"//input[@id='ActxtboxGINWarehouse']",
        Vendor_Input:'(//kendo-combobox/span/kendo-searchbar/input)[2]',
        Vendor_code:'//div[@class="job px-30 vendor-name"]',
        Vendorcontact:"(//kendo-combobox/span/kendo-searchbar/input)[3]",
        Vendor_Country:"//input[@id='actxtSMDCountry2']",
        Vendor_State:"//input[@id='actxtSMDState2']",
        Vendor_mobile_Number:"//input[@id='toMobileNumberId']",
        Vendor_EMail:"//input[@id='toEmailAdressId']",
        
        
    }

    public static Component = {
        Component:"//button[text()='Component']",
        Components_toggle:"//p[text()='Components']",
        
    }
}