@CostOfplantStatement
Feature: Verify the Cost of plant Statement

  Background:
    Given Navigate to Test Environment

  @Statement_Approve
  Scenario: Verify the Approval of cost of plant Statement
    Given Check whether the user able Navigate to landing Page of Cost of plant
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Cost of plant from the dropdown
    Then Check whether the user able to select the Cost of plant Statement from the dropdown
    Then Verify whether after selecting Cost of plant Statement page opened successfully
    Then Verify whether user able to click on job code to Approve the cost of plant
    Then Verify whether Job code is displaying correctly in the dialogue container appeared
    Then Verify the Approval period in the dialogue container appeared
    Then Verify whether user able to enter remarks in the dialogue container appeared
    Then Verify whether user able to click on Approve button to approve the statement
    Then Verify whether Statement is Approved successfully

  @Statement_Reject
  Scenario: Verify the Rejection of cost of plant Statement
    Given Check whether the user able Navigate to landing Page of Cost of plant
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Cost of plant from the dropdown
    Then Check whether the user able to select the Cost of plant Statement from the dropdown
    Then Verify whether after selecting Cost of plant Statement page opened successfully
    Then Verify whether user able to click on job code to Approve the cost of plant
    Then Verify whether Job code is displaying correctly in the dialogue container appeared
    Then Verify the Approval period in the dialogue container appeared
    Then Verify whether user able to enter remarks in the dialogue container appeared
    Then Verify whether user able to click on Reject button to reject the statement
    Then Verify whether Statement is rejected successfully
