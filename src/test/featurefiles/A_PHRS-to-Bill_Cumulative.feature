@PHRS_Bill_Cumulative
Feature: Plant Hire Request Creation to Bill generation Cumulative

  Background:
    Given Navigate to Test Environment

  @PHR_Creation_Cumulative
  Scenario: Creation of Plant Hire Request Cumulative
    Given Check whether the user able Navigate to landing Page
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Planning & Procurement from the dropdown
    Then Check whether the user able to select the Plant Hire Request and Confirmation from the dropdown
    Then Verify after selecting Plant Hire Request and Confirmation it is Redirecting to PHRS page
    Then After PHRS page opened verify the Title of PHRS page
    Then Check whether the user able to enter the Job field in the Autocomplete box
    Then Check whether the user able to enter the Document field in the Autocomplete box
    Then Check weather the user able to enter S3R Number in the input field
    Then Check whether the user able to click on the Search button in top right corner
    Then Validate the Balance Quantity in the Plant hire Request Page
    Then Check whether the user able to click on the Action button for S3R Number
    Then Verify weather withHireterm button is appearing after clicking on Action button
    Then Check whether the user able to select With Hire term from the Available options
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
    Then Check whether the user able to click on the Add Vendor in the Hire Request Creation Page
    Then Check whether the user able Navigate to Vendor Selection
    Then Check whether the user able to click on the Vendor
    Then check whether the user able to enter the input-knowell
    Then Check whether the user able to view the vendor table
    Then Check whether the user able to click on post button
    Then Verify weather post button is enabled in vendor adding page
    Then Check whether the vendor is added in the Hire Request Creation page
    Then Verify weather Create Hire Request button is enabled
    Then Check whether the user able to click on Create Hire Request
    Then Get the PHRS number from the Popup
    Then Check whether the user able to view popup as Success

  @PHRS_Confirmation_Cumulative
  Scenario: PHRS Confirmation Cumulative
    Given Check whether the user able Navigate to landing Page
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Planning & Procurement from the dropdown
    Then Check whether the user able to select the Plant Hire Request and Confirmation from the dropdown
    Then Select Job from Autocomplete box which is in the top left corner in the Plant Hire Request Page
    Then Select the document as SR3 number which is right to the Job field in the Plant Hire Request page
    Then Click on the Search Button to get the available assets for the selected job
    Then Find the required Job from the Grid of availavle jobs and click on Dropdown icon
    When Click on Confirm PHRS tick icon for the required job in the Actions part
    Then Navigate to TCC which is in top right above the Equipment Availability option in the PHRS Confirmation Page
    Then Select the Vendor by clicking on the checkbox available
    Then Enter the quantity in the input field available next to checkbox
    Then Verify weather user able to click on Select Vendor button at the bottom of the page
    Then Verify weather Quantity is same as given in the PHRS creation page
    Then Verify weather Equipment minimum age is same as given in the PHRS creation page
    Then Verify weather Equipment maximum age is same as given in the PHRS creation page
    Then Verify weather No of shifts is same as given in the PHRS creation page
    Then Verify weather No of Additional operators is same as given in the PHRS creation page
    Then Verify weather No of Helpers is same as given in the PHRS creation page
    Then Click on Save And Next Button in the Generals section of Hire Request Page
    Then Add the Hire Charges which is above the grid in the commercials page
    Then Click on OT Charges option which is available inside the grid
    Then Fill the OT Percentage in the input field which is in the OT Charges menu for cumulative worktype
    Then Fill the OT Expected Hours in the input field which is in the OT Charges menu for cumulative worktype
    Then Validate the OT hours calculation for 30 days for cumulative worktype
    Then Validate the OT hours calculation for 31 days for cumulative worktype
    Then Validate sum of all months for Normal Hour QTY for cumulative worktype
    Then Validate sum of all months for Normal Hour Amount for cumulative worktype
    Then Click on the save button in OT Charges below the grid
    Then Click on Operator option inside the grid
    Then Select the required months by checking the checkbox available for particular month
    Then Click on the Save button inside the sections
    Then Enter the Operator Rate in the input field of Operator
    Then Click on Additional Operator option inside the grid
    Then Select the required months by checking the checkbox available for particular month
    Then Click on the Save button inside the sections
    Then Enter the Additional Operator Rate in the input field of Operator
    Then Click on Helper option inside the grid
    Then Select the required months by checking the checkbox available for particular month
    Then Click on the Save button inside the sections
    Then Enter the Helper Rate in the input field of Operator
    Then Click on Additional Helper option option inside the grid
    Then Select the required months by checking the checkbox available for particular month
    Then Click on the Save button inside the sections
    Then Enter the Additional Helper Rate in the input field of Operator
    Then Click on Accommodation option inside the grid under description
    Then Select the Accommodation option as Bachelor Accomodation provided by site
    Then Click on the Save button in Accommodation
    Then Enter the Accomodation Rate in the input field of Operator
    Then Click on Mobilisation option inside the grid under description
    Then Click on Mobilisation option as Both way payable at actual in the Autocomplete box
    Then Click on Fromstate autocomplete box
    Then Select the State1 option from the dropdown
    Then Click on Fromcity autocomplete box
    Then Select the City1 option from the dropdown
    Then Fill the PinCode of the from city in the input field
    Then Click on Tostate autocomplete box
    Then Select the State2 option from the dropdown
    Then Click on Tocity autocomplete box
    Then Select the City2 option from the dropdown
    Then Fill the Pincode of the to city in the input field
    Then Click on Next Button in Mobilisation section
    Then Click on Save Button in Mobilisation section
    Then Enter the Mobilisation Rate in the input field of Operator
    Then Enter the DeMobilisation Rate in the input field of Operator
    Then Click on Save and Next Button in Commersials tab
    Then In the Other tearms enter Primary Engine details
    Then In the Other tearms enter Secondary Engine details
    Then Verify able to enter breakdown cause
    Then Verify able to enter breakdown deduction rate and Maintenance
    When in Other Terms section Click on Save and Next
    Then Send STC to Vendor by clicking on the STC option available at top right of the SOP Validations page
    When in SOP Validations Click on Confirm Hire Request Button

  @Verify_the_PHR_Negative_Cases
    Scenario: Negative cases for Creation of Plant Hire Request NonCumulative
        Given Check whether the user able Navigate to landing Page
        Then Check whether the user able to click on the Access Based Menu button
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether the user able to select the Planning & Procurement from the dropdown
        Then Check whether the user able to select the Plant Hire Request and Confirmation from the dropdown
        Then Verify weather Job is mandatory field or not
        Then Verify weather document field is mandatory
        Then Verify if search button is enabled or not
        Then Check whether the user able to enter the Job field in the Autocomplete box
        Then Check whether the user able to enter the Document field in the Autocomplete box
        Then Check weather the user able to enter S3R Number in the input field
        Then Check whether the user able to click on the Search button in top right corner
        Then Validate the Balance Quantity in the Plant hire Request Page
        Then Check whether the user able to click on the Action button for S3R Number
        Then Verify weather withHireterm button is appearing after clicking on Action button
        Then Check whether the user able to select With Hire term from the Available options
        Then Verify weather Quality field is mandatory in Plant Hire Request page
        Then Verify weather Minimum Age field is mandatory in Plant Hire Request page
        Then Verify weather Maximum Age field is mandatory in Plant Hire Request page
        Then Verify weather Work Type field is mandatory in Plant Hire Request page
        Then Verify weather Operator Terms field is mandatory in Plant Hire Request page
        Then Verify weather No Of Shifts field is mandatory in Plant Hire Request page
        Then Verify weather Shift Hours field is mandatory in Plant Hire Request page

  @Knowell_Confirmation_Cumulative
  Scenario: Confirmation of STC from vendor Cumulative
    Given Check whether the Vendor able Navigate to landing Page
    Then Verify that exact user dashboard is opened
    Then Check whether the Vendor able to click on the Access Based Menu button
    Then Check whether the Vendor able to select the Asset Management from the dropdown
    Then Verify Vendor able to select My Assests
    Then Enter Menu details as Hire Term Acceptance in the autocomplete box available at top left of the page
    Then Click on the filter icon to filter required Asset
    Then Filter by giving generated PHRS number from PHRS Creation page in the Reference number
    Then Accept the request by clicking on tick icon under the actions for the Required Job
    Then Add Acceptance Remarks for the Accepted Job in the text area appeared

  @Verify_the_Work_Order_Request_Cumulative
  Scenario: Verify the Work Order Request Cumulative
    Given Check whether the user able Navigate to WorkOrder landing Page
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
    Then Check whether the user able to select the Asset Management from the dropdown
    Then Check whether the user able to select the Planning & Procurement from the dropdown
    Then Check whether the user able to select the WO Request from the dropdown
    Then Verify weather user able to enter job field in workorder request page
    Then Check whether the user able to click on the Search button in top right corner
    Then Click on the filter icon at the right side of page above the grid
    Then Verify user able to filter by using the PHRS number generated while creating request
    Then Check whether the user able to click on remarks button
    Then Check whether the user able to enter the remarks
    Then Check whether the user able to click on submit button for Remarks
    Then Check whether the user able to view the popup as Remarks updated successfully
    Then Check whether the user able to click on Ok button on the popup appeared
    Then Check whether the user able to click on the Add icon create a new request
    Then Click on save and next button in generals section
    Then Click on save and next button in commercials section
    Then Click on save and next button in OtherTerms section
    Then Click on save and next button in MaterialLinking section
    Then Verify weather Country autocomplete box is editable in Bill from vendor in Tax page
    Then Verify weather State autocomplete box is editable in Bill from vendor in Tax page
    Then Verify weather Registration Number autocomplete box is editable in Bill from vendor in Tax page
    Then Verify weather Country autocomplete box is editable in Bill to Job in Tax page
    Then Verify weather State autocomplete box is editable in Bill to Job in Tax page
    Then Verify weather Registration Number autocomplete box is editable in Bill to Job in Tax page
    Then Verify weather user able to select state from dropdown in Bill from Vendor in Tax page
    Then Verify weather user able to select state from dropdown in Bill to Job in Tax page
    Then Select SAC from the autocomplete box which is above the grid to left of page
    Then Verify the tax value for the Normal hours in a month of 30 calendar days in the Tax section
    Then Verify the tax value for the Normal hours in a month of 31 calendar days in the Tax section
    Then Verify the tax value for the Overtime Charges in a month of 30 calendar days in the Tax section
    Then Verify the tax value for the Overtime Charges in a month of 31 calendar days in the Tax section
    Then Verify the Total of the reference value in the Tax section
    Then Verify the Total of the Tax value in the Tax section
    Then Verify the total of Reference and Tax amount
    Then Click on Save and Next button in Tax Section
    Then Verify weather Description autocomplete box is editable in Asset details
    Then Verify weather Type autocomplete box is editable in Asset details
    Then Verify weather Capacity autocomplete box is editable in Asset details
    Then Verify weather Make autocomplete box is editable in Asset details
    Then Verify weather model autocomplete box is editable in Asset details
    Then Click on Add button in Asset details
    Then Check if save and next button is enabled after adding required number of assets
    Then Click on Save and Next button in Asset details
    Then Click on Create Work Order Request in SOP Validations
    Then Capture the Asset Code generated from the popup appeared

  @Verify_the_TCD_Approval
  Scenario: Verify the TCD Approval and Auto WO Creation
    Given Check whether the user able Navigate to TCD landing Page
    Then filter the currently created TCD
    Then Click on the Document number
    Then Approve the document


  @Receipt_RN_Cumulative
  Scenario: Create New - Asset - Receipt Cumulative
    Given Check whether the user able Navigate to Mobilization & Movements Page RN Page
    Then Verify BreadCrumbs before navigating to the Mobilization & Movements page
    Then Check whether the user able to click on the Access Based Menu button in Mobilization & Movements page
    Then Check whether the user able to select the Asset Management from the dropdown in Mobilization & Movements page
    Then Check whether the user able to select the Mobilization & Movements from the dropdown
    Then Check whether the user able to select the Movement from the dropdown
    Then Verify BreadCrumbs after navigating to the Mobilization & Movements page
    Then Check whether the Receipt is displaying in the Movement page
    Then Click on the Receipt which is on the top of the DC table besides delivery challan
    Then Click on arrow which is next to the commissioning to display the table details
    Then Click on search icon to the right of Asset code input to do an advance search
    Then Select the time duration from the calendar in advanced search
    Then Click on search button in the advanced search for changing the to and from date
    Then click on the filter button for filtering the needed assects
    Then fill the assect field to get needed assect
    Then Click on the plus button to create the Receipt_RN for the first job code NonCumulative
    Then Click on the action button which is on the left side of the status
    Then Click on the calendar iron to set the RN date which is below the accessories table
    Then Verify whether remarks field is taking input or not
    Then Verify whether Issue RN button is enabled or not
    Then Enter the remarks to issue the RN which is besides the RN date
    Then Click on the Issue RN button to issue the receipt which is left side below the accessories table
    Then Click on OK button from the Success popup appeared after Issuing RN
    Then Click on the close icon and close the New Asset receipt modal
    Then Click on Yes in the confirmation to close Asset receipt model

  @Verify_Asset_Commissioning_page_Cumulative
  Scenario: Create New - Asset - Commissioning Cumulative
    Given Check whether the user able Navigate to Mobilization & Movements for commissioning Page
    Then Verify BreadCrumbs before navigating to the Mobilization & Movements for commissioning page
    Then Check whether the user able to click on the Access Based Menu button in Mobilization & Movements for commissioning page
    Then Check whether the user able to select the Asset Management from the dropdown in Mobilization & Movements for commissioning page
    Then Check whether the user able to select the Mobilization & Movements in the dropdown
    Then Check whether the user able to select the Movement in the dropdown
    Then Verify BreadCrumbs after navigating to the Mobilization & Movements for commissioning page
    Then Check whether the commissioning is displaying in the Movement page
    Then Click on the Commissioning which is on the top of the DC table besides delivery challan
    Then Click on search icon to the right of Asset code input to do an advance search in the Movement page
    Then Verify weather date input field is editable and taking input in the Movement page
    Then Select the time duration from the calendar in advanced search in the Movement page
    Then Click on search button in the advanced search in Commissioning
    Then click on the filter button for filtering the needed assects
    Then fill the assect field to get needed assect
    Then Validating whether the user able to click FullScreen Button which is on the top of details table in Commissioning page
    Then Click on the plus button to create the Commisssioning_RN for the first job code NonCumulative
    Then Check whether assest details is displayed at right side of Create Commissioning window
    Then Check whether Commissioning details is displayed at right side of Create Commissioning window
    Then Check whether Dates details is displayed at right side of Create Commissioning window
    Then Check whether the Create Asset - CX Request is displaying in the page
        # Then Verify whether Asset1 is mandatory in Measurement Creation page
    Then Click on the calendar icon to set the Commissioning date which is below the accessories table
        # Then Check whether the Meter Reading_Previous is displaying in the Create Asset-CX Request page
        # Then Check whether the Meter Reading_Current is displaying in the Create Asset-CX Request page
    Then Verify weather Asset2 is mandatory in Measurement Creation page
    Then Check whether the user able to Fill Current Meter Reading field which is besides the previous Meter Reading field
    Then Check whether the Reason for Meter Reading Change is displaying in the Create Asset-CX Request page
    Then Check whether the user able to Fill Reason for Meter Reading Change field which is besides the current Meter Reading field
        # Then Validating whether the user able to close FullScreen Button which is on the top of details table in Commissioning page
    Then Click on the Submit button which is in the right bottom of the page
    Then Click on OK button from the Success popup appeared after Issuing commissioning

  @Logsheet_Creation_DayBased_Cumulative
  Scenario: Generating Logsheet for particular Asset using day based logic Cumulative
    Given Check weather user able to navigate to landing page of Logsheet
    Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in LogSheet page
    Then Check whether the user able to select the Asset Management from the dropdown in LogSheet page
    Then Check whether the user able to select the operations and maintenance from the dropdown in LogSheet page
    Then Check whether the user able to select the Log Sheet from the dropdown in LogSheet page
    Then Verify after selecting Plant Hire Request and Confirmation it is Redirecting to PHRS page in LogSheet page
    Then After LogSheet page opened verify the Title of Logsheet page in LogSheet page
    Then Verify weather Job autocomplete box is visible in the Page
    Then Verify weather user able to enter required job in field which is poped on opening the page
    Then Verify weather user able to enter Asset Code in the autocomplete box available in the top left corner of page
    Then Verify weather User able to click on Arrow to the right of Date input
    Then Verify that Asset details are displaying after clicking on Go Arrow
    Then Verify the details of Logsheet displayed below the graph on the page
    Then Click on Create New LogSheet Button available on the top right of the Page
    Then Verify user able to enter End Reading in the input field in the LogSheet Creation page
    Then Verify user able to enter working hours below the End Reading in the LogSheet Creation page
    Then Verify user able to enter Idle hours below the start Reading in the LogSheet Creation page
    Then Verify user able to enter Breakdown hours below the Working Hours in the LogSheet Creation page
    Then Verify weather User able to click on Fuel Entry popup in the Fuel Section in the LogSheet Creation page
    Then Verify weather user able to enter Meter Reading in the Fuel Entry Popup
    Then Verify weather user able to enter quantity in the Fuel Entry Popup
    Then Verify weather user able to click on post button in the Fuel Entry Popup
    Then Verify weather user able to enter production quantity in the input field
    Then Verify weather user able to click on Submit button in the LogSheet Creation page

  @Measurement_Creation_Cumulative
  Scenario: Creating the measurements Cumulative
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
        ###
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
    Then Verify weather measurement number is displaying or not in th success Popup
    Then Click on Ok in the Success Popup Appeared after submitting
    Then Verify weather clicking on back button redirecting to previous page
    Then Verify weather balance Assets reduced after creating measurement for an Asset code
    Then Verify the value of Total Assets in the Measurement Creation Page after creating measurement for an Asset code
    Then Verify the value of MES Created Assets in the Measurement Creation Page after creating measurement for an Asset code
    Then Verify the value of Approved Assets in the Measurement Creation Page after creating measurement for an Asset code
    Then Verify the value of Awaiting Approval Assets in the Measurement Creation Page after creating measurement for an Asset code
    Then Verify the value of Hold Assets in the Measurement Creation Page after creating measurement for an Asset code

  @Verify_Measurement_Approval_Page_AwaitingApproval_Cumulative
  Scenario: Verify the Measurement Approval Cumulative
    Given Check whether the user able Navigate to Measurement_Approval Page
    Then Verify BreadCrumbs before navigating to the Measurement_Approval page
    Then Check whether the user able to click on the Access Based Menu button in Measurement_Approval page
    Then Check whether the user able to select the Asset Management from the dropdown in Measurement_Approval page
    Then Check whether the user able to select the Planning_Procurement from the dropdown
    Then Check whether the user able to select the Measurement_Approval from the dropdown
    Then Verify BreadCrumbs after navigating to the Measurement_Approval page
    Then Check whether the Measurement Approval is displaying in the navigated page on the top right
    Then Click on the job input field which is on the bottom of Measurement Approval
    Then Check whether the user is able to select the job from the dropdown
    Then Click on the Search For field which is top on the table and besides the Month and year field and also clear the text in it
    Then Select the Awaiting Approval option from the dropdown in the Select From field
    Then Click on the search button which is on the left side top of the icons
    Then Click on the show items dropdown which is on the left side above the Asset details table
    Then Validating whether the user able to click FullScreen Button which is on the top of details table in Measurement Approval pege
    Then Click on the Approve icon to enter the approval remarks which is on the buttom of the actions heading
    Then Check whether the Approval Popup is displaying to enter the remarks
    Then Check whether the user able to view the Approval Remarks heading text in the popup
    Then Enter the Approval remarks after the popup is displayed
    Then Click on the approve button to approve the Approval Remarks
    Then Check whether the user able to view the success popup after approving the approval remarks
    Then Printing the text in the success popup after approval
    Then Click on the Ok button in the success popup for the next process
