@DataConfiguration
Feature: Verify Data Configuration Page

  Background:
    Given Navigate to Test Environment

  @DataConfiguration_PositiveFlow
  Scenario: Verify the Data Configuration Positive Flow 
    Given Check whether the user able Navigate to landing Page of Data Configuration
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Masters from the dropdown
    Then Check whether the user able to select the Data Configuration from the dropdown
    Then Verify whether after selecting Data Configuration page opened successfully
    Then Verify the Master Type
    Then Verify whether user able to click on Asset Code toggle
    Then Verify whether Asset code field is taking input
    Then Verify whether user able to select the Asset code from the available options
    Then Verify whether user able to click on Go button
    Then Verify the Job code in the popup appeared after selecting Asset code
    Then Verify the Asset Code Description in the popup appeared after selecting Asset code
    Then Select the required field by checking the Checkbox
    Then Verify the Description of the field selected
    Then Check whether user able to select the Date by clicking on data picker
    Then Check whether user able to click on Document upload Icon for the selected field
    Then check whether user able to upload a document
    Then Check whether user able to select the Type from the list of options
    Then Check whether the user able to enter the description for the document uploaded
    Then Check whether user able to click on upload documents button
    And Check whether user able to handle the popup appeared
    Then Check whether user able to click on Submit button
    And Check whether user able to handle the popup appeared

  @DataConfiguration_Uploadwithoutdate
  Scenario: Verify the Data Configuration flow without selecting the date
    Given Check whether the user able Navigate to landing Page of Data Configuration
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Masters from the dropdown
    Then Check whether the user able to select the Data Configuration from the dropdown
    Then Verify whether after selecting Data Configuration page opened successfully
    Then Verify the Master Type
    Then Verify whether user able to click on Asset Code toggle
    Then Verify whether Asset code field is taking input
    Then Verify whether user able to select the Asset code from the available options
    Then Verify whether user able to click on Go button
    Then Verify the Job code in the popup appeared after selecting Asset code
    Then Verify the Asset Code Description in the popup appeared after selecting Asset code
    Then Select the field with RC by checking the Checkbox
    Then Verify the user able to click on document upload icon withwout entering date
    And Check whether user able to handle the popup appeared
    
  @DataConfiguration_UploadInvalidFile
  Scenario: Verify the Data Configuration Page by uploading Invalid file
    Given Check whether the user able Navigate to landing Page of Data Configuration
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Masters from the dropdown
    Then Check whether the user able to select the Data Configuration from the dropdown
    Then Verify whether after selecting Data Configuration page opened successfully
    Then Verify the Master Type
    Then Verify whether user able to click on Asset Code toggle
    Then Verify whether Asset code field is taking input
    Then Verify whether user able to select the Asset code from the available options
    Then Verify whether user able to click on Go button
    Then Verify the Job code in the popup appeared after selecting Asset code
    Then Verify the Asset Code Description in the popup appeared after selecting Asset code
    Then Select the required field by checking the Checkbox
    Then Verify the Description of the field selected
    Then Check whether user able to select the Date by clicking on data picker
    Then Check whether user able to click on Document upload Icon for the selected field
    Then check whether user able to upload an invalid document



