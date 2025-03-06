export default class FAP_PageObjects{
    public static FAP={
        Process:"//span[@title='Process']",
        FixedAssetProcess:"//span[@title='Fixed Asset Process']",
        Requesttype_input:"//input[@id='requestType']",
        Company:"//input[@id='drpJoblistHR']",
        Ownertag:"//input[@id='company']",
        Duration:"//input[@id='icon-rightdateRange_Kendo']",
        Search_btn:"//button[text()='Search']",
        RequestNumber_click:"//tbody // tr[1] // td[1] // span",
        RequestType:"//tbody // tr[1] // td[3]",
        RequestDate:"//tbody // tr[1] // td[2] // span",
        PopupRequestNum:"//p[text()='Request Number'] / following-sibling :: p",
        PopupRequestType:"//p[text()='Request Type'] / following-sibling :: p",
        PopupRequestDate:"//p[text()='Requested Date'] / following-sibling :: p",

        NewRequest_btn:"//p[text()='New Request']",
        Selectfiles:"//input[@type='file']",
        Remarks:"//textarea",
        Total_Value:"//p[text()='Total'] / following-sibling :: span",
        Valid_Value:"//p[text()='Valid'] / following-sibling :: span",
        Invalid_Value:"//p[text()='Invalid'] / following-sibling :: span",
        Create_btn:"//button[text()='Create']",
        Close_popup:"//i[@id='ibtClose']",
        
    }
}