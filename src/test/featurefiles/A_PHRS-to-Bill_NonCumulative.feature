@PHR_Bill_NonCumulative
Feature: Plant Hire Request Creation to Bill Generation Non Cumulative

    Background:
        Given Navigate to Test Environment

    @Verify_the_Hire_Request_Creation_NonCumulative
    Scenario: Verify the Hire Request Creation NonCumulative
        Given Check whether the user able Navigate to landing Page NonCumulative
        Then Verify BreadCrumbs before navigating to the PHR page
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether the user able to select the Planning & Procurement from the dropdown
        Then Check whether the user able to select the Plant Hire Request and Confirmation from the dropdown
        Then Verify BreadCrumbs after navigating to the PHR page
        Then Check whether the user able to navigate to the PHR page
        Then Check whether the job is displaying in the PHR page
        Then Check whether the Document is displaying in the PHR page
        Then Check whether the PHRS Number is displaying in the PHR page
        Then Check whether the Asset Group is displaying in the PHR page
        Then Check whether the user able to enter the job description 
        Then Check whether the user able to select the 150756 - Khulna Mongla Bridge Project from the dropdown
        Then Check whether the user able to click on the Search button which is on right top of the S3R table
        Then Check whether the user able to click FullScreen Button which is on the top of S3R table
        # Then Check whether the user able to view the S3R table 
        Then Click on the Action button for S3R Number 
        Then Check whether the user able to select With Hire Team from the dropdown
        When User click on With Hire Team after clicking on the action button
        Then Check whether the user able to Navigate Hire Request Page
        Then Check whether the user able change the request from date
        Then Check whether the user able change the request to date
        Then Check whether the user able to enter the Quantity
        Then Check whether the user able to enter the Equipment Age - Minimum
        Then Check whether the user able to enter the Equipment Age - Maximum
        Then Check whether the user able to click on the Work Type
        Then Check whether the user able to select the NonCumulative from the dropdown
        Then Check whether the user able to click on Tearms
        Then Check whether the user able to select the Included in hire charges Single shift Fixed charges per month for 12 hours from the dropdown
        Then Check whether the user able to click on the No Of Shifts
        Then Check whether the user able to enter on the No Of Shifts
        Then Check whether the user able to click on the Shifts Hours
        Then Check whether the user able to select on the Shifts Hours from the dropdown
        Then Check whether the user able to click on the Add Vendor which is on top right of vendor table
        Then Check whether the user able Navigate to Vendor Selection
        Then Check whether the user able to click on the Vendor
        Then check whether the user able to enter the input-knowell
        Then Check whether the user able to select on the KNOWELL INTERNATIONAL PRIVATE LIMITED from the dropdown
        Then Check whether the user able to view the vendor table
        When User click on the post button which is right below the vendor table
        Then Check whether the vendor is added after clicking on the post button
        Then Check whether the user able to click on Create Hire Request
        Then Get the PHRS number from the Popup after creating the Hire Request
        Then Check whether the user able to view popup as Success

    @Verify_the_Hire_Request_Confirmation_NonCumulative
    Scenario: Verify the Hire Request Confirmation NonCumulative
        Given Check whether the user able Navigate to landing Page
        # Then Verify after logging in redirecting correctly to EIP dashboard
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether the user able to select the Planning & Procurement from the dropdown
        Then Check whether the user able to select the Plant Hire Request and Confirmation from the dropdown
        Then Select Job from Autocomplete box which is already created
        Then Select the document as SR3 number which is created
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
        # Then Validate the OT hours calculation for 30 days for cumulative worktype
        # Then Validate the OT hours calculation for 31 days for cumulative worktype
        # Then Validate sum of all months for Normal Hour QTY for cumulative worktype
        # Then Validate sum of all months for Normal Hour Amount for cumulative worktype
        Then Click on the save button in OT Charges below the grid
        Then Enter the Operator Rate in the input field of Operator
        Then Enter the Additional Operator Rate in the input field of Operator
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


  

    @Verify_the_Knowell_Confirmation_NonCumulative
    Scenario:Confirmation of STC from vendor NonCumulative
        Given Check whether the Vendor able Navigate to landing Page
        Then Verify that exact user dashboard is opened
        Then Check whether the Vendor able to click on the Access Based Menu button
        Then Check whether the Vendor able to select the Asset Management from the dropdown
        Then Verify Vendor able to select My Assests
        Then Enter Menu details as Hire Term Acceptance in the autocomplete box available at top left of the page
        Then Click on the filter icon to filter required Asset
        Then Filter by giving generated PHRS number from PHRS Creation page in the Reference number Noncumulative
        Then Accept the request by clicking on tick icon under the actions for the Required Job
        Then Add Acceptance Remarks for the Accepted Job in the text area appeared


    

    @Verify_the_Work_Order_Request_NonCumulative
    Scenario: Verify the Work Order Request NonCumulative
        Given Check whether the user able Navigate to WorkOrder landing Page
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether the user able to select the Planning & Procurement from the dropdown
        Then Check whether the user able to select the WO Request from the dropdown
        Then Verify weather user able to enter job field in workorder request page NonCumulative
        Then Check whether the user able to click on the Search button in top right corner
        Then Click on the filter icon at the right side of page above the grid
        Then Add the filter to filter tasks based on PHRS number generated while Creation NonCumulative
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
        Then Capture the Asset Code generated from the popup appeared for non cumulative

    @Verify_the_TCD_Approval
        Scenario: Verify the TCD Approval and Auto WO Creation
        Given Check whether the user able Navigate to TCD landing Page
        Then filter the currently created TCD
        Then Click on the Document number
        Then Approve the document

    




    @Verify_the_Work_Order_Request_SQL_Validations_NonCumulative
    Scenario: DataBase validations for the Work Order Request NonCumulative
     Given Check whether the user able Navigate to landing Page as GOWRI SHANKAR MM
        Then Check whether the user able to click on the Access Based Menu button
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether the user able to select the Planning & Procurement from the dropdown
        Then Check whether the user able to select the WO Request from the dropdown
        Then Click on the filter icon at the right side of page above the grid
        Then Add the filter to filter tasks based on PHRS number generated while Creation for validation
        # Then Add the filter to filter tasks based on Pending field
        Then Check whether the user able to enter the job description 
        Then Check whether the user able to select the 150756 - Khulna Mongla Bridge Project from the dropdown
        Then Check whether the user able to click on the Search button which is on right top of the S3R table
        Then Check whether the user able to click on the drop down
        Then Click on the Edit WO button to edit the workorder which is already created
        Then Click on save and next button in generals which is on the right bottom
        Then Click on Mobilisation option which is on bottom of the Accommodation 
        Then Verify the Mobilisation From State is matching with the value given in the PHRS Confirmation Page
        Then Verify the Mobilisation From City is matching with the value given in the PHRS Confirmation Page
        Then Verify the Mobilisation From City Pincode is matching with the value given in the PHRS Confirmation Page
        Then Verify the Mobilisation To State is matching with the value given in the PHRS Confirmation Page
        Then Verify the Mobilisation To City is matching with the value given in the PHRS Confirmation Page
        Then Verify the Mobilisation To City Pincode is matching with the value given in the PHRS Confirmation Page
        Then Click on the next button which is on the right buttom of the page
        Then Click on save and next button which is on the right bottom in commercials
        Then Click on save and next button in OtherTerms which is on the right bottom
        Then Click on save and next button which is on the right bottom in MaterialLinking
        Then Select the Fromstate and fill the option in the tax page
        Then Select the Tostate and fill the option in the tax page
        Then Select SAC option which is below the country
        Then Verify the tax value for the Normal hours in a month of 30 calendar days in the Tax section
        Then Verify the tax value for the Normal hours in a month of 31 calendar days in the Tax section
        Then Verify the tax value for the Overtime Charges in a month of 30 calendar days in the Tax section
        Then Verify the tax value for the Overtime Charges in a month of 31 calendar days in the Tax section
        Then Verify the Total of the reference value in the Tax section
        Then Verify the Total of the Tax value in the Tax section
        Then Verify the total of Reference and Tax amount
        Then Click on Save and Next button in tax which is in the right bottom of Detailed Tax Structure table
        Then Click on Add button in Asset details which is on the top of the table
        # Then Click on Save and Next button in Asset details which is on the right side below the table 
        # Then Click on Save and Next button in WO Request which is on the right side bottom of the page


    @Receipt_RN_NonCummulative
    Scenario: Create New - Asset - Receipt NonCumulative
        Given Check whether the user able Navigate to Mobilization & Movements Page Noncumulative
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
        Then fill the assect field to get needed assect NonCumulative
        Then Click on the plus button to create the Receipt_RN for the first job code NonCumulative
        Then Click on the action button which is on the left side of the status
        Then Click on the calendar iron to set the RN date which is below the accessories table
        Then Verify whether remarks field is taking input or not
        Then Verify whether Issue RN button is enabled or not
        Then Enter the remarks to issue the RN which is besides the RN date
        Then Click on the Issue RN button to issue the receipt which is left side below the accessories table
        Then Click on OK button from the Success popup appeared after Issuing RN
        # Then Verify the Status of Asset changed to RN Taken or not 
        Then Click on the close icon and close the New Asset receipt modal
        Then Click on Yes in the confirmation to close Asset receipt model



    @Verify_Asset_Commissioning_page_NonCumulative
    Scenario: Create New - Asset - Commissioning NonCumulative
        Given Check whether the user able Navigate to Mobilization & Movements for commissioning Page NonCumulative
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
        Then fill the assect field to get needed assect NonCumulative
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



  @Logsheet_Creation_DayBased_NonCumulative
    Scenario:Generating Logsheet for particular Asset using day based logic NonCumulative
         Given Check whether user able to navigate to landing page of Logsheet NonCumulative
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in LogSheet page NonCumulative
        Then Check whether the user able to select the Asset Management from the dropdown in LogSheet page NonCumulative
        Then Check whether the user able to select the operations and maintenance from the dropdown in LogSheet page NonCumulative
        Then Check whether the user able to select the Log Sheet from the dropdown in LogSheet page NonCumulative
        Then Verify after selecting Plant Hire Request and Confirmation it is Redirecting to PHRS page in LogSheet page NonCumulative
        Then After LogSheet page opened verify the Title of Logsheet page in LogSheet page NonCumulative
        Then Verify whether Job autocomplete box is visible in the Page NonCumulative
        Then Verify whether user able to enter required job in field which is poped on opening the page NonCumulative
        Then Verify whether user able to enter Asset Code in the autocomplete box available in the top left corner of page NonCumulative
        Then Verify whether User able to click on Arrow to the right of Date input NonCumulative
        Then Verify that Asset details are displaying after clicking on Go Arrow NonCumulative
        Then Verify the details of Logsheet displayed below the graph on the page NonCumulative
        Then Click on Create New LogSheet Button available on the top right of the Page NonCumulative
        Then Verify user able to enter End Reading in the input field in the LogSheet Creation page NonCumulative
        Then Verify user able to enter working hours below the End Reading in the LogSheet Creation page NonCumulative
        Then Verify user able to enter Idle hours below the start Reading in the LogSheet Creation page NonCumulative
        Then Verify user able to enter Breakdown hours below the Working Hours in the LogSheet Creation page NonCumulative
        # Then Check whether Idle Hours are calculated correctly NonCumulative
        Then Verify whether User able to click on Fuel Entry popup in the Fuel Section in the LogSheet Creation page NonCumulative
        Then Verify whether user able to enter Meter Reading in the Fuel Entry Popup NonCumulative
        Then Verify whether user able to enter quantity in the Fuel Entry Popup NonCumulative
        Then Verify whether user able to click on post button in the Fuel Entry Popup NonCumulative
        Then Verify whether user able to enter production quantity in the input field NonCumulative
        Then Click on the remarks icon to enter the remarks in remarks field NonCumulative
        Then Verify whether user able to click on Submit button in the LogSheet Creation page NonCumulative

   @Measurement_Creation_NonCumulative
  Scenario: Creating the measurements NonCumulative
    Given Check whether the user able Navigate to Measurement Creation Page NonCumulative
    Then Verify BreadCrumbs before navigating to the Measurement Creation Page
    Then Check whether the user able to click on the Access Based Menu button in Measurement Creation Page
    Then Check whether the user able to select the Asset Management from the dropdown in Measurement Creation Page
    Then Check whether the user able to select the Planning and Procurement from the dropdown
    Then Check whether the user able to select the Measurement Creation from the dropdown
    Then Verify BreadCrumbs after navigating to the Measurement Creation Page
    Then Verify weather User able to enter job in the Job input field NonCumulative
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
    Then Select an Asset code from the list of asset codes available in the grid NonCumulative
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
    Then Verify weather measurement number is displaying or not in th success Popup
    Then Click on Ok in the Success Popup Appeared after submitting
    Then Verify weather clicking on back button redirecting to previous page
    Then Verify weather balance Assets reduced after creating measurement for an Asset code
    Then Verify the value of Total Assets in the Measurement Creation Page after creating measurement for an Asset code
    Then Verify the value of MES Created Assets in the Measurement Creation Page after creating measurement for an Asset code
    Then Verify the value of Approved Assets in the Measurement Creation Page after creating measurement for an Asset code
    Then Verify the value of Awaiting Approval Assets in the Measurement Creation Page after creating measurement for an Asset code
    Then Verify the value of Hold Assets in the Measurement Creation Page after creating measurement for an Asset code

  @Verify_Measurement_Approval_Page_AwaitingApproval_NonCumulative
  Scenario: Verify the Measurement Approval NonCumulative
    Given Check whether the user able Navigate to Measurement_Approval Page NonCumulative
    Then Verify BreadCrumbs before navigating to the Measurement_Approval page
    Then Check whether the user able to click on the Access Based Menu button in Measurement_Approval page
    Then Check whether the user able to select the Asset Management from the dropdown in Measurement_Approval page
    Then Check whether the user able to select the Planning_Procurement from the dropdown
    Then Check whether the user able to select the Measurement_Approval from the dropdown
    Then Verify BreadCrumbs after navigating to the Measurement_Approval page
    Then Check whether the Measurement Approval is displaying in the navigated page on the top right
    Then Click on the job input field which is on the bottom of Measurement Approval
    Then Check whether the user is able to select the job from the dropdown NonCumulative
    Then Click on the Search For field which is top on the table and besides the Month and year field and also clear the text in it
    Then Select the Awaiting Approval option from the dropdown in the Select From field
    Then Click on the search button which is on the left side top of the icons
    Then Click on the show items dropdown which is on the left side above the Asset details table
    Then Validating whether the user able to click FullScreen Button which is on the top of details table in Measurement Approval pege
    Then Click on the Approve icon to enter the approval remarks which is on the buttom of the actions heading NonCumulative
    Then Check whether the Approval Popup is displaying to enter the remarks
    Then Check whether the user able to view the Approval Remarks heading text in the popup
    Then Enter the Approval remarks after the popup is displayed
    Then Click on the approve button to approve the Approval Remarks
    Then Check whether the user able to view the success popup after approving the approval remarks
    Then Printing the text in the success popup after approval
    Then Click on the Ok button in the success popup for the next process

