@CostOfplant_PM_IHC_Statement
Feature: Verify the Cost of plant IHC Statement

  Background:
    Given Navigate to Test Environment

  @PM_IHC_Statement
  Scenario: Verify the P&M_IHC_Statement of cost of plant
    Given Check whether the user able Navigate to landing Page of Cost of plant
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Cost of plant from the dropdown
    Then Check whether the user able to select the P and M IHC Statement from the dropdown
    Then Verify whether after selecting Cost of plant P and M IHC Statement page opened successfully
    Then Verify whether user able to select Job Code for the P and M IHC Statement
    Then Verify whether user able to select date from the date field
    Then Verify whether user able to click on Get Statement button
    Then Verify the person who created the Statement
    Then verify the date on which the Statement is created on
    Then Verify the total of the Group Hire Charges
    Then Verify the total of the IHC Billable
    Then Verify the total of the Breakdown Cost
    Then Verify the total of the IHC Billed