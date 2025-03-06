@VendorDespatch
Feature: Verify the Vendor despatch Page

  Background:
    Given Navigate to Test Environment

  @VerifyVendorDespatch
  Scenario: Verify the Vendor despatch
    Given Check whether the user able Navigate to landing Page of Vendor despatch
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Mobilization & Movements from the dropdown
    Then Check whether the user able to select the Vendor despatchs from the dropdown
    Then Verify whether after selecting VendorDespatch page opened successfully
    Then Verify whether user able to select Jobcode from the list of options
    Then Verify whether user able to click on Go button to get all the Assets available
    Then Verify whether user able to click on Asset Code to add the Vendor Despatch
    Then Verify the Asset code is same as selected in the popup
    And Verify the Job code is same as selected in the popup
    And Verify whether user able to select DC Date
    Then Check whether user able to enter Despatch through details in the input field
    Then Check whether user able to enter Other Despatch details in the input field
    Then Check whether user able to enter Freight to pay details in the input field
    Then Check whether user able to enter No of DCs details in the input field
    Then Check whether user able to enter LR no details in the input field
    Then Verify whether user able to select LR Date
    Then Check whether user able to enter Meater reading details in the input field
    Then Verify whether user able to select Fuel tank full option
    Then Check whether user able to enter Fuel Quantity details in the input field
    Then Verify whether details are cleared by clicking on Clear button

    Then Verify whether user able to click on Asset Code to add the Vendor Despatch
    Then Verify the Asset code is same as selected in the popup
    And Verify the Job code is same as selected in the popup
    And Verify whether user able to select DC Date
    Then Check whether user able to enter Despatch through details in the input field
    Then Check whether user able to enter Other Despatch details in the input field
    Then Check whether user able to enter Freight to pay details in the input field
    Then Check whether user able to enter No of DCs details in the input field
    Then Check whether user able to enter LR no details in the input field
    Then Verify whether user able to select LR Date
    Then Check whether user able to enter Meater reading details in the input field
    Then Verify whether user able to select Fuel tank full option
    Then Check whether user able to enter Fuel Quantity details in the input field
    Then Verify whether details are saved by clicking on Submit button
    Then Capture the PDC generated after submitting

