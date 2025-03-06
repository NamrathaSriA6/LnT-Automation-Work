@ADR_Status_View
Feature: Verify ADR status View Page

  Background:
    Given Navigate to Test Environment

  @ADR_Status
  Scenario: Verify the ADR Status View Page
    Given Check whether the user able Navigate to landing Page of ADR Status View
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Disposal and Dehire from the dropdown
    Then Check whether the user able to select the ADR Status View from the dropdown
#     Then Verify whether after selecting ADR Status page opened successfully
#     Then Verify whether user able to enter JOB code in the autocomplete box available for ADR Status View
#     Then Verify whether user able to change the Duration period from the date picker for ADR Status
#     Then Verify whether user able to click on Clear button to clear ADR Status details
#     Then Verify whether user able to enter JOB code in the autocomplete box available for ADR Status View
#     Then Verify whether user able to change the Duration period from the date picker for ADR Status
#     Then Verify whether user able to click on Search button to display the details
#     Then Print all the details of ADR Status view in the console