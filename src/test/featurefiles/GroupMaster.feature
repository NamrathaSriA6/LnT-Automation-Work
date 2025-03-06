@GroupMaster
Feature: Verify the Group Master Page

  Background:
    Given Navigate to Test Environment

  @NewGroup
  Scenario: Creation of New Group Code
    Given Check whether the user able Navigate to landing Page of Group Master
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Masters from the dropdown
    Then Check whether the user able to select the Group Masters from the dropdown
    Then Verify whether after selecting GroupMaster page opened successfully
    Then Verify whether Group code field is taking input
    Then Verify whether user able to enter Group code in the input field available
    Then Verify whether Group Description field is taking input
    Then Verify whether user able to enter Group Description in the input field available
    Then Verify whether user able to click on new button to create new Group
    Then Verify whether after clicking on new button Asset Group creation page is opened
    Then Verify whether user able to select Asset type from the autocomplete box
    Then Verify whether user able to select IC from the autocomplete box
    Then Verify whether user able to select BU from the autocomplete box
    Then Verify whether user able to enter Category in the input field
    Then Verify whether user able to enter Sub Category in the input field
    Then Verify whether user able to enter Class in the input field
    Then Verify whether user able to select Asset Account tag from the autocomplete box
    Then Verify whether user able to select Major or minor from the autocomplete box
    Then Verify whether user able to enter HSN code from the autocomplete box
    Then Verify whether user able to enter Depreciation percentage in the input field
    Then Verify whether user able to click on Internal Hire Charge file Icon
    Then Verify whether user able to enter Internal Hire Charge in the Popup appeared
    Then Check whether user able to save the changes by clicking on Save button
    And Check whether user able to handle the popup appeared
    Then Verify whether user able to enter fuel per hour in the input field
    Then Verify whether user able to select Lease type from the autocomplete box
    Then Check whether user able to check some checkboxes
    Then Check whether user able to Save the details by clicking on Save button
    And Check whether user able to handle the popup appeared

    Then Check whether user able to click on Engine toggle to edit engine details
    Then Verify whether Engine Desc is taking input or not for Primary Engine
    And Verify whether user able to enter Engine Description in the input field for Primary Engine
    Then Verify whether Meter Type is taking input or not for Primary Engine
    And Verify whether user able to select Meter Type from the available options for Primary Engine
    And Verify whether user able to check Logsheet Checkbox for primary Engine
    And Verify whether user able to check Production Checkbox for primary Engine
    Then Check whether user able to expand Seconday Engine options
    Then Verify whether Engine Desc is taking input or not for Secondary Engine
    And Verify whether user able to enter Engine Description in the input field for Secondary Engine
    Then Verify whether Meter Type is taking input or not for Secondary Engine
    And Verify whether user able to select Meter Type from the available options for Secondary Engine
    And Verify whether user able to check Logsheet Checkbox for Secondary Engine
    And Verify whether user able to check Production Checkbox for Secondary Engine
    Then Verify whether user able to add Configuration for Primary Engine
    And Verify whether user able to add Configuration for Secondary Engine
    Then Verify whether user able to Click on Save button to save the Engine details
    And Check whether user able to handle the popup appeared

    Then Verify whether user able to click on Hiring toggle to edit hiring details
    Then Verify whether user able to click on External Hire Charge file Icon
    Then Verify whether user able to enter External Hire Charge in the Popup appeared
    Then Check whether user able to save the changes by clicking on Save button
    And Verify whether user able to enter Minimum Hiring Charge in the input field
    And Verify whether user able to enter Maximum Hiring Charge in the input field
    And Verify whether user able to enter Average Hiring Charge in the input field
    Then Verify whether user able to select Hire Shift Type from the list of options
    And Verify whether user able to enter no of Hours per day in the input field
    And Verify whether user able to enter no of Days per month in the input field
    And Verify whether user able to enter no of Hours per month in the input field
    Then Verify whether user able to select Age validation as Applicable
    Then Verify whether user able to enter Min Age in the input field
    And Verify whether user able to enter Max Age in the input field
    And Verify whether user able to select Transport Clause as Applicable
    Then Verify whether user able to Save the details of by clicking on Save button
    And Check whether user able to handle the popup appeared

    Then Verify whether user able to click on save button in the Alternate Group section
    And Check whether user able to handle the popup appeared

    Then Verify whether user able to click on Production Types toggle
    And Verify whether user able to select Production code from the list of options
    And Verify whether user able to select Production code from the list of options
    Then Verify whether user able to Save the details of by clicking on Save button
    And Check whether user able to handle the popup appeared

    Then Verify whether user able to click on Defect Codes Types toggle
    And Verify whether user able to select Defect Codes code from the list of options
    And Verify whether user able to select Defect Codes code from the list of options
    Then Verify whether user able to Save the details of by clicking on Save button
    And Check whether user able to handle the popup appeared

  @VerifyExistingGroup
  Scenario: Verify the Existing Group Code
    Given Check whether the user able Navigate to landing Page of Group Master
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Masters from the dropdown
    Then Check whether the user able to select the Group Masters from the dropdown
    Then Verify whether after selecting GroupMaster page opened successfully
    Then Verify whether Group code field is taking input
    Then Verify whether user able to enter Group code in the input field available
    Then Verify whether user able to click on Go button to check the Group code details
    Then Verify the Group Code is displaying Correctly for the selected Group Code
    Then Verify the Category is displaying Correctly for the selected Group Code
    Then Verify the Sub Category is displaying Correctly for the selected Group Code
    Then Verify the Class is displaying Correctly for the selected Group Code
    Then Check whether user able to Save the details by clicking on Save button
    And Check whether user able to handle the popup appeared
    Then Verify whether user able to Click on Save button to save the Engine details
    And Check whether user able to handle the popup appeared
    Then Verify whether user able to Save the details of by clicking on Save button
    And Check whether user able to handle the popup appeared

    Then Verify whether user able to click on save button in the Alternate Group section
    And Check whether user able to handle the popup appeared

    Then Verify whether user able to click on Production Types toggle
    Then Verify whether user able to Save the details of by clicking on Save button
    And Check whether user able to handle the popup appeared
    Then Verify whether user able to Save the details of by clicking on Save button
    And Check whether user able to handle the popup appeared