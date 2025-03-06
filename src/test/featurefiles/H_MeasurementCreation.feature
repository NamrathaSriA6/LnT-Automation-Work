@Smoke_MeasurementCreation
Feature: Measurement Creation

    Background:
        Given Navigate to Test Enviroment of Measurement creation

    @Measurement_Creation
    Scenario: Creating the measurements
        Given Check whether the user able Navigate to Measurement Creation Page
    Then Verify BreadCrumbs before navigating to the Measurement Creation Page
    Then Check whether the user able to click on the Access Based Menu button in Measurement Creation Page
    Then Check whether the user able to select the Asset Management from the dropdown in Measurement Creation Page
    Then Check whether the user able to select the Planning and Procurement from the dropdown
    Then Check whether the user able to select the Measurement Creation from the dropdown
    Then Verify BreadCrumbs after navigating to the Measurement Creation Page
    Then Verify weather User able to enter job in the Job input field
    Then Verify the value of Total Assets in the Measurement Creation Page
    Then Verify the value of MES Created Assets in the Measurement Creation Page
    Then Verify the value of Approved Assets in the Measurement Creation Page
    Then Verify the value of Awaiting Approval Assets in the Measurement Creation Page
    Then Verify the value of Hold Assets in the Measurement Creation Page
    Then Check if the Balance is greater than Zero
    Then If balance greater than zero click on Balance Button
    Then Verify weather Create measurement button is enabled or not
    Then Verify user able to click on Create Measurement Button which is above the grid
    Then Accept the confirmation to proceed for measurement creation
    Then Verify weather Job field is editable or not in Measurement Creation page
    Then Verify weather Vendor input field is mandatory in Measurement Creation page
    Then Verify weather Asset group is mandatory in Measurement Creation page
    Then Verify weather Asset is mandatory in Measurement Creation page
    Then Check if search button which is in right side of the page above the grid is enabled or not
    Then Click on search button which is in right side of the page above the grid
    Then Select an Asset code from the list of asset codes available in the grid
        #####
    Then Verify weather after user check the Assset code Possible amount section is also checked
    Then Verify Operator possible amount is greater than Zero for the selected Asset Code
    Then Verify weather user able to edit Operator Payable amount for the selected Asset code
    Then Verify AddiOperator possible amount is greater than Zero for the selected Asset Code
    Then Verify weather user able to edit AddiOperator Payable amount for the selected Asset code
    Then Verify Helper possible amount is greater than Zero for the selected Asset Code
    Then Verify weather user able to edit Helper Payable amount for the selected Asset code
    Then Verify Additional Helper possible amount is greater than Zero for the selected Asset Code
    Then Verify weather user able to edit Additional Helper Payable amount for the selected Asset code
    Then Verify Accomodation possible amount is greater than Zero for the selected Asset Code
    Then Verify weather user able to edit Accomodation Payable amount for the selected Asset code
    Then Verify Assembly possible amount is greater than Zero for the selected Asset Code
    Then Verify weather user able to edit Assembly Payable amount for the selected Asset code
    Then Verify Mobilisation possible amount is greater than Zero for the selected Asset Code
    Then Verify weather user able to edit Mobilisation Payable amount for the selected Asset code
    Then Verify DeMobilisation possible amount is greater than Zero for the selected Asset Code
    Then Verify weather user able to edit DeMobilisation Payable amount for the selected Asset code
    Then Verify Transport Expenses possible amount is greater than Zero for the selected Asset Code
    Then Verify weather user able to edit Transport Expenses Payable amount for the selected Asset code
    Then Verify weather submit button below the grid is enabled
    Then Submit the changes by clicking on the submit button below the grid
        # Then Verify weather Asset code what we have submitted is displaying in the success Popup
    Then Verify weather measurement number is displaying or not in th success Popup
    Then Click on Ok in the Success Popup Appeared after submitting
    Then Verify weather clicking on back button redirecting to previous page
    Then Verify weather balance Assets reduced after creating measurement for an Asset code
    Then Verify the value of Total Assets in the Measurement Creation Page after creating measurement for an Asset code
    Then Verify the value of MES Created Assets in the Measurement Creation Page after creating measurement for an Asset code
    Then Verify the value of Approved Assets in the Measurement Creation Page after creating measurement for an Asset code
    Then Verify the value of Awaiting Approval Assets in the Measurement Creation Page after creating measurement for an Asset code
    Then Verify the value of Hold Assets in the Measurement Creation Page after creating measurement for an Asset code

    @Measurement_Creation_Negative_Cases
    Scenario: Verifying the input field validations in Measurement Creation
        Given Check whether the user able Navigate to Measurement Creation Page
        Then Check whether the user able to click on the Access Based Menu button in Measurement Creation Page
        Then Check whether the user able to select the Asset Management from the dropdown in Measurement Creation Page
        Then Check whether the user able to select the Planning and Procurement from the dropdown
        Then Check whether the user able to select the Measurement Creation from the dropdown
        Then Verify BreadCrumbs after navigating to the Measurement Creation Page
        Then Verify weather User able to enter job in the Job input field
        Then If balance greater than zero click on Balance Button
        Then Verify user able to click on Create Measurement Button which is above the grid
        Then Accept the confirmation to proceed for measurement creation
        Then Click on search button which is in right side of the page above the grid
        Then Select an Asset code from the list of asset codes available in the grid for negative cases
        Then Verify weather user able to edit Operator Payable amount if possible amount is Zero for the selected Asset code
        Then Verify weather user able to edit Additional Operator Payable amount if possible amount is Zero for the selected Asset code
        Then Verify weather user able to edit Helper Payable amount if possible amount is Zero for the selected Asset code
        Then Verify weather user able to edit Additional Helper Payable amount if possible amount is Zero for the selected Asset code
        Then Verify weather user able to edit Accomodation Payable amount if possible amount is Zero for the selected Asset code
        Then Verify weather user able to edit Assembly Payable amount if possible amount is Zero for the selected Asset code
        Then Verify weather user able to edit Mobilisation Payable amount if possible amount is Zero for the selected Asset code
        Then Verify weather user able to edit DeMobilisation Payable amount if possible amount is Zero for the selected Asset code
        Then Verify weather user able to edit Transport Expenses Payable amount if possible amount is Zero for the selected Asset code
        Then Verify weather user able to submit without selecting any Asset code