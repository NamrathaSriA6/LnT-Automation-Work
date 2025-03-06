@CPMissingCostAllocation
Feature: Verify the Cost of plant Missing Cost Allocation

  Background:
    Given Navigate to Test Environment

  @Allocation_Based_on_GroupCode
  Scenario: Verify Asset Missing Cost using Group Code
    Given Check whether the user able Navigate to landing Page of Cost of plant
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Cost of plant from the dropdown
    Then Check whether the user able to select the Asset Missing Cost from the dropdown
    Then Verify whether after selecting Cost of plant Asset Missing Cost page opened successfully
    # Then Verify whether user able to select Job Code from the autocomplete box