@MissingLogsheet
Feature: Verify MissingLogsheet Page

  Background:
    Given Navigate to Test Environment

  @Missing_Logsheet
  Scenario: Verify the MissingLogsheet Page
    Given Check whether the user able Navigate to landing Page of MissingLogsheet
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the operations and maintenance from the dropdown
    Then Check whether the user able to select the MissingLogsheet from the dropdown
    Then Verify whether after selecting MissingLogsheet page opened successfully
    Then Verify whether user able to enter JOB code in the autocomplete box available for MissingLogsheet
    Then Verify whether user able to change the Date in the Missing Logsheet page
    Then Verify whether user able to click on View Missing Assets Button to display Missing Logsheet details
    Then Print all the details of MissingLogsheet details in the console