@PHRCreation_WithoutHireterm
Feature: Plant Hire Request Creation without Hire Term

  Background:
    Given Navigate to Test Environment

  @PHR_WithoutHireTerm
  Scenario: Creation of Plant Hire Request without Hire Term
    Given Check whether the user able Navigate to landing Page
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Planning & Procurement from the dropdown
    Then Check whether the user able to select the Plant Hire Request and Confirmation from the dropdown
    Then Verify after selecting Plant Hire Request and Confirmation it is Redirecting to PHRS page
    Then After PHRS page opened verify the Title of PHRS page
    Then Check whether the user able to enter the Job field in the Autocomplete box without Hireterm
    Then Check whether the user able to enter the Document field in the Autocomplete box
    Then Check weather the user able to enter S3R Number in the input field for without Hireterm
    Then Check whether the user able to click on the Search button in top right corner
    Then Validate the Balance Quantity in the Plant hire Request Page
    Then Check whether the user able to click on the Action button for S3R Number
    Then Verify weather without Hireterm button is appearing after clicking on Action button
    Then Check whether the user able to select Without Hire term from the Available options
    Then Check whether the user able to Navigate Hire Request Page
    Then Verify the Job value in the Hire Request Creation Page
    Then Verify the Balance Quantity in th Hire Request Creation Page
    Then Check whether the user able change the request from date in the Hire Request Creation Page
    Then Check weather user able to change to date in the Hire Request Creation Page
    Then Check whether the user able to enter the Quantity in the Hire Request Creation Page
    Then Check whether the user able to enter the Equipment Age - Minimum in the Hire Request Creation Page
    Then Check whether the user able to enter the Equipment Age - Maximum in the Hire Request Creation Page
    Then Verify weather user able to enter make description in the autocomplete box in the Hire Request Creation Page
    Then Verify weather user able to enter model description in the autocomplete box in the Hire Request Creation Page
    Then Verify weather user able to enter reason for hiring in the input box in the Hire Request Creation Page
    Then Verify weather user able to enter scope of work in the input box in the Hire Request Creation Page
    Then Verify weather user able to enter Specific Requirements Emission Norms Etc in the input box in the Hire Request Creation Page
    Then Verify weather user able to enter Scope Of Work Qty per Equipment  in the input box in the Hire Request Creation Page
    Then Verify weather user able to enter duration in the autocomplete box in the Hire Request Creation Page
    Then Check whether the user able to click on the Work Type in the Hire Request Creation Page
    Then Check whether the user able to select the Cumulative from the dropdown in the Hire Request Creation Page
    Then Check whether the user able to click on Tearms in the Hire Request Creation Page
    Then Check whether the user able to select the Included in hire charges Single shift Fixed charges per month for 12 hours from the dropdown in the Hire Request Creation Page
    Then Check whether the user able to click on the No Of Shifts in the Hire Request Creation Page
    Then Check whether the user able to enter on the No Of Shifts in the Hire Request Creation Page
    Then Check whether the user able to click on the Shifts Hours in the Hire Request Creation Page
    Then Check whether the user able to select on the Shifts Hours from the dropdown in the Hire Request Creation Page
    Then Check weather user able to enter Additional operators in the Hire Request Creation Page
    Then Check weather user able to enter Helpers in the Hire Request Creation Page
    Then Check whether user able to enter Claimable from client section
    Then Verify weather Create Hire Request button is enabled
    Then Check whether the user able to click on Create Hire Request
    Then Get the PHRS number from the Popup
    Then Check whether the user able to view popup as Success