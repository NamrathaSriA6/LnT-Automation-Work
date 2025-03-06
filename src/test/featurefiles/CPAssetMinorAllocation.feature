@CPAssetMinorAllocation
Feature: Verify the Cost of plant Asset Minor Allocation

  Background:
    Given Navigate to Test Environment

  @Allocation_Based_on_GroupCode
  Scenario: Verify Asset Minor Allocation using Group Code
    Given Check whether the user able Navigate to landing Page of Cost of plant
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Cost of plant from the dropdown
    Then Check whether the user able to select the Asset Minor Allocation from the dropdown
    Then Verify whether after selecting Cost of plant Asset Minor Allocation page opened successfully
    Then Verify whether user able to select job code from the list of options
    Then Check Whether user able to check Group Code Radio button
    Then Verify whether user able to click on Go button to display the details
    Then Verify whether User able to Click on Allocate button for selected Group code
    Then Verify whether Minor Asset Allocation dialogue container has appeared
    Then Verify the Job Code in the dialogue container and print details in console
    Then Verify the Group code and Group description and print details in console
    Then Verify the Recon code and description and print details in console
    Then Check whether Allocate percentage is taking anything other than 100
    Then Verify whether user able to click on Save button to save Minor Asset Allocation

  @Allocation_Based_on_AssetCode
  Scenario: Verify Asset Minor Allocation using Group Code
    Given Check whether the user able Navigate to landing Page of Cost of plant
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Cost of plant from the dropdown
    Then Check whether the user able to select the Asset Minor Allocation from the dropdown
    Then Verify whether after selecting Cost of plant Asset Minor Allocation page opened successfully
    Then Verify whether user able to select job code from the list of options
    Then Check Whether user able to check Asset Code Radio button
    Then Verify whether user able to click on Go button to display the details
    Then Verify whether User able to Click on Allocate button for selected Asset code
    Then Verify whether Minor Asset Allocation dialogue container has appeared
    Then Verify the Job Code in the dialogue container and print details in console
    Then Verify the Asset code and Asset description and print details in console
    Then Verify the Recon code and description and print details in console
    Then Check whether Allocate percentage is taking anything other than 100
    Then Verify whether user able to click on Save button to save Minor Asset Allocation
