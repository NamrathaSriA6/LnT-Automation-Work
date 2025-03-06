@HiredWOMaterialLink
Feature: Verify Hired WO Material Link Page

  Background:
    Given Navigate to Test Environment

  @HiredWOMaterialLink
  Scenario: Verify the Hired WO Material Link Page
    Given Check whether the user able Navigate to landing Page of HiredWOMaterialLink
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Planning_Procurement from the dropdown
    Then Check whether the user able to select the HiredWOMaterialLink from the dropdown
    Then Verify whether after selecting HiredWOMaterialLink page opened successfully
    Then Verify whether user able to enter JOB code in the autocomplete box available for HiredWOMaterialLink
    Then Verify whether user able to enter Asset code in the Autocomplete box available
    Then Verify whether user able to click on GO Button to display HiredWOMaterialLink details
    Then Verify whether Popup appeared after clicking on GO button