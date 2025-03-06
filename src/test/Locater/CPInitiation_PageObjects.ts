export default class CPinitiation_PageObjects {
    public static Initiation = {
        Costofplant :"//span[@title='Cost of Plant']",
        Initiation:"//span[@title='Initiation']",
        Jobcode:"//input[@id='job']",
        CPMonth_Year:"(//label)[3]",
        Month_Year:"(//label)[3] / parent :: div / following-sibling :: div // p",
        GiveRequest_btn:"//button[text()='Give Request']",
        MisingAssets_toggle:"//span[text()=' Missing Assets ']",
        
    }
}