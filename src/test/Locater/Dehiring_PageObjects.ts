export default class Dehiring_PageObjects{
    public static Dehiring= {
        AssetDe_HireAssetPlanningAndProcurement:"//span[@title='Planning & Procurement']",
        AssetDe_HireAssetDehiring:"//span[@title='Dehiring']",
        AssetDe_HireAssetjob:"//input[@id='job']",
        AssetDe_HireAssetGo:"//button[@id='goBtnId']",
        // OK: '//button[contains(text(),"Ok")]',
        AssetDe_HireShow:"//select[@aria-label='items per page']",
        AssetDe_HireFliter:"//i[@id='ibtFilterBtn']",
        Asset_HireFliterInput:"(//kendo-grid-filter-wrapper-cell/input)[1]",
        AssetDe_HireSettings:'//*[@id="settingiconID"]',
        AssetDe_HireExpand:"//i[@title='Expand']",
        Reason_for_Dehire_Checkbox:"(//input[@type='checkbox'])[1]",
        Reason_For_Dehire_Description:"(//input[@id='txtReason'])",
        Reason_For_Dehire_Action:"(//i[@title='Dehire'])",
    }
}