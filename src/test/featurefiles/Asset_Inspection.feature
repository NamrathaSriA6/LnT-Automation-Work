@AssetInspection
Feature:AssetInspection Page

  Background: 
      Given Navigate to Test Environment

  @Verify_Approve
  Scenario: Verify the AssetInspection process
    Given Check whether the user able Navigate to the landing Page of AssetInspection Page
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Inspection and technical Detail Entry from the dropdown
    Then Check whether the user able to select the Asset Inspection from the dropdown
    Then Check whether user able to clear Type Input Field
    Then Check whether user able to enter Type in the autocomplete box available
    Then Verify whether user able to enter Job in the autocomplete box available
    Then Verify whether user able to enter Document number in the autocomplete box available
    Then Verify whether user able to enter Status in the autocomplete box available
    Then Check whether user able to enter Duration in the datepicker available
    Then Verify whether user able to click on Search button
    Then Verify whether user able to Click on GIN number open the deails of that Job
    Then Check whether GIn Number in the Page is matching to the one we clicked
    Then Check whether Type is same as given in the previous Page
    Then Check whether user able to select Accept All checkbox in the grid header section
    Then Check whether user able to click on submit button