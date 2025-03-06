@Vendor_Equipment_Availability
Feature: Checking the Equipment availability with Vendor

  Background:
    Given Navigate to Test Environment

@Adding_New_Equipment__Vendor
  Scenario: Adding new Equipment in Vendor Page

    Given Check whether the user able to Navigate to Landing Page of Vendor Availability
    Then Check whether the Vendor able to click on the Access Based Menu button
    Then Check whether the Vendor able to select the Asset Management from the dropdown
    Then Verify Vendor able to select My Assests
    Then Verify BreadCrumbs after navigating to the Vendor Availability page
    Then Enter Menu details as Add Equipment Availability in the autocomplete box available at top left of the page
    Then Verify whether user able to clcik on Crete New button to create a new Equipment
    Then verify whether a popup to enter details is displayed or not
    Then Check whether Asset Group input field is taking input
    Then Check whether user able to enter Asset Group in the input field available
    Then Check whether Asset Description input field is taking input
    Then Check whether user able to enter Asset Description in the input field available
    Then Check whether Equipment QTY input field is taking input
    Then Check whether user able to enter Equipment QTY in the input field available
    Then Check whether Status input field is taking input
    # Then Check whether user able to enter Status in the input field available
    Then Check whether Equipment capacity input field is taking input
    Then Check whether user able to enter Equipment capacity in the input field available
    Then Check whether Age input field is taking input
    Then Check whether user able to enter Age in the input field available
    Then Check whether Location input field is taking input
    Then Check whether user able to enter Location in the input field available
    Then Check whether Remarks input field is taking input
    Then Check whether user able to enter Remarks in the input field available
    # Then Check whether user able to select Available from date in the date picker
    # Then Check whether user able to select Available to date in the date picker
    Then Check whether user able to Click on reset button to remove all the details entered
    Then Check whether Asset Group input field is taking input
    Then Check whether user able to enter Asset Group in the input field available
    Then Check whether Asset Description input field is taking input
    Then Check whether user able to enter Asset Description in the input field available
    Then Check whether Equipment QTY input field is taking input
    Then Check whether user able to enter Equipment QTY in the input field available
    Then Check whether Status input field is taking input
    Then Check whether user able to enter Status in the input field available
    Then Check whether Equipment capacity input field is taking input
    Then Check whether user able to enter Equipment capacity in the input field available
    Then Check whether Age input field is taking input
    Then Check whether user able to enter Age in the input field available
    Then Check whether Location input field is taking input
    Then Check whether user able to enter Location in the input field available
    Then Check whether Remarks input field is taking input
    Then Check whether user able to enter Remarks in the input field available
    Then Check whether user able to select Available from date in the date picker
    Then Check whether user able to select Available to date in the date picker
    Then Verify whether user able to click on Save button so save the details

@Check_Vendor_Equipment_Availaility
  Scenario: Verify the asset from Vendor is displaying in Vendor Equipment Availaility Page

    Given Check whether the user able to Navigate to Landing Page of Vendor Equipment Availaility
    Then Check whether the Vendor able to click on the Access Based Menu button
    Then Check whether the Vendor able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Planning & Procurement from the dropdown
    Then Check whether user able to select Vendor Equipment Availability from the Dropdown
    Then Verify BreadCrumbs after navigating to the Vendor Equipment Availability page
    Then Verify Whether user able to enter Vendor details in the autocomplete box
    Then Verify Whether user able to enter Asset group in the input field
    Then Verify whether user able to click on Search button to get the available details
    Then Check whether the details with the asset group given is displaying
    Then Check whether Asset Description is same as given in the Vendor page
    Then Check whether Equipment Quantity is same as given in the Vendor page
    Then Check whether Equipment Capacity is same as given in the Vendor page
    Then Check whether Age is same as given in the Vendor page
    Then Check whether Location is same as given in the Vendor page
    Then Check whether Remarks is same as given in the Vendor page

    