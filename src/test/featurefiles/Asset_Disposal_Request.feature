@Asset_Disposal_Request
Feature: Verify the working of Asset Disposal Request
    Background:
        Given Navigate to Test Environment

    @ADR_Request
    Scenario: Asset Disposal Request creation
        Given Check whether the user able Navigate to landing Page of Asset Disposal Request
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether the user able to select the Disposal and Dehire from the dropdown
        Then Check whether the user able to select the Asset Disposal Request from the dropdown
        Then Verify whether Job field is taking input or not
        Then Verify whether user able to enter JOB code in the autocomplete box available
        Then Verify whether WareHouse field is taking input or not
        Then Verify whether user able to enter Warehouse in the autocomplete box available
        Then Verify whether Search button is enabled to click
        Then Verify whether user able to click on Search button to get the Asset disposal requests
        Then Verify whether Create new Request button is enabled to click
        Then Verify whether user able to click on Creat new request Icon
        Then Verify whether Job field inside the popup container is taking input
        Then Check whether user able to clear and enter the Jobcode in the input field
        Then Verify whether Warehouse field inside the popup container is taking input
        Then Verify whether user able to enter Warehouse details in the field
        Then Verify whether Search button inside the popup container is enabled to click
        Then Check whether user able to click on Search button in the popup
        Then Select the Asset from the list of asset codes appeared
        Then Verify whether user able to click on Post button
        Then Verify whether user able to click on Next button
        Then Verify whether user able to redirected to Details Entry section
        Then Verify whether user able to select the Asset status from the list of options
        Then verify whether user able to enter Realisable value in the input field
        Then verify whether user able to enter Weight in tons in the input field
        Then Verify whether user able to Submit the ADR request by clickig on Submit button
        Then Verify whether user able to capture the ADR number generated

        Then Signout from the current login
        Then Navigate to the Approval Page
        Then Filter the currently created ADR
        Then Approve the filtered Document

        Then Signout from the current login
        Then Navigate to the Approval Page
        Then Filter the currently created ADR
        Then Approve the filtered Document

