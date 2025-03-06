@CostOfplantInitiation
Feature: Verify the Cost of plant

  Background:
    Given Navigate to Test Environment

  @Initiation
  Scenario: Verify the Initiation of cost of plant
    Given Check whether the user able Navigate to landing Page of Cost of plant
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Cost of plant from the dropdown
    Then Check whether the user able to select the Initiation from the dropdown
    Then Verify whether after selecting Cost of plant Initiation page opened successfully
    Then Verify whether user able to select Job Code from the list of available job codes
    Then Verify whether User able to print the details of CP Month and Year
    Then Verify whether user able to click on Give Request button
    Then Verify whether Popup handled correctly
    Then Verify whether user able to print the details of all the process requests
    Then Verify whether user able to click in Missing Assets toggle
    Then Verify whether user able to print Missing Asset details
    Then Verify whether user able to print Minor Asset Allocation details