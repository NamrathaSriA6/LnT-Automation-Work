@Despatch_Customer
Feature: Verify the working of Despatch Customer
    Background:
        Given Navigate to Test Environment

    @DespatchCustomer
    Scenario: Verify Despatch Customer
        Given Check whether the user able Navigate to landing Page of Asset Despatch Customer
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether the user able to select the Disposal and Dehire from the dropdown
        Then Check whether the user able to select the Despatch Customer from the dropdown
        Then Verify whether Job field is taking input or not
        Then Verify whether user able to enter Job in the autocomplete box available for Despatch Customer
        Then Verify whether Asset Code autocomplete box is taking input
        Then Verify whether Duration date picker is taking input
        Then Verify whether Search button is enabled and able to click
        Then Verify whether Clear button is enabled and able to click
        Then Verify whether user able to click on Search button in Despatch Customer Page
        Then Verify whether user able to Hover on the Asset row
        Then Click on Create icon for particular Asset to complete DC for that Asset
        Then Verify whether user able to select the Asset by checking the checkbox
        Then Click on Create DC button to create DC for that Asset
        Then Verify whether user able to capture the PDC code generated from the popup
        Then Verify whether user able to click on Ok button from the popup appeared
