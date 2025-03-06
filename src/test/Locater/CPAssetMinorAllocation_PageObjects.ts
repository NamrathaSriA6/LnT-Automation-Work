export default class CPAssetMinorAllocation_PageObjects{
    public static AssetminorAllocation = {
        AssetrMinorAllocation:"//span[text()='Asset Minor Allocation']",
        JobCode_input:"//input[@id='job']",
        GroupCodeRadio_btn:"//input[@type='radio' and @value='1']/ parent :: span",
        AssetCodeRadio_btn:"//input[@type='radio' and @value='2']/ parent :: span",
        Go_btn:"//button[text()='Go']",
        Allocate_btn:"(//span[text()='Allocate'])[1]",
        JobCode:"//p[text()='Job Code'] / following-sibling :: p",
        GroupCode:`//p[text()='Group Code / Description'] / following-sibling :: p`,
        AssetCode:"//p[text()='Asset Code / Description'] / following-sibling :: p",
        ReconCode:"//mat-dialog-container //tbody /tr[1] /td[2]",
        AllocatePercentage:"//mat-dialog-container //tbody /tr[1] /td[3] // input",
        Save_btn:"//button[@id='savebuttonid']",
        
    }
}