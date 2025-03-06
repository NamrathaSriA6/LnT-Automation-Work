@Movements_Asset_Flow
Feature: Despatch Advise to Commissioning for Asset

  Background: 
    Given Navigate to Test Environment

  @Despatch_Advice_Asset
    Scenario: Verify Despatch Advice Process for Asset
    Given Check whether the user able to Navigate to Landing Page
    Then Check whether user able to navigate to Movements page
    Then Check whether user able to click on Asset at to right of page
    Then Check whether user able to click on the despatch advice
    Then Check whether the user is able to select the assest code from the dropdown 
    Then Check whether the user can successfully click on the "Go" button located within the Asset Movement interface
    Then Navigate to the "New - Asset - DA Request" section and verify if the user has the capability to access the source and destination fields
    Then click on the warehouse and check whether the code is there or not
    Then click on the country and check wheteher the country is there or not
    Then click on the state and check whether the state is there or not
    Then check Contact Details is given in the input feild or not
    Then check Mobile Number is given in the input feild or not
    Then check Email Address is given is valid format or not

    #Destination 
    Then click  on destination job code and check whether is the job code input is taking or not
    Then click on warehouse and fill it
    Then click on country and give  the valid country name
    Then click on the state and give the valid state name
    Then check Contact Details is given in the input feild is valid or not
    Then check Mobile Number is given in the input feild is valid or not
    Then check Email Address is given is valid format or wrong format

    Then Click on Accessories
    Then check whether user is able to enter the description or not
    Then click on UDO and check user is able to fill the UDO code from the dropdown
    Then click on quantity and check user is able to enter the quantity or not
    Then click on the add button and check whether the data is being adding or not
    Then check whether user is able to enter the description or not
    Then click on UDO and check user is able to fill the UDO code from the dropdown
    Then click on quantity and check user is able to enter the quantity or not
    Then click on the add button and check whether the data is being adding or not
    Then click on edit buttton and check wheteher the user is able edit the data 
    Then click on update update button and the user is able update the data which is been edited
    Then click on the delete button and check the user is able to delete the unwanted files
    Then go to Dispatch and check wheteher the user is able to enter the data or not
    Then go to the Remarks and check whether the user is able to enter remarks or not

    Then click on the Transportation
    Then check whether the user is able to take transport type from the drop dropdown
    Then check whether the user is able to fill  Approx Weight in MT or not
    Then check whether the user is able to fill Approx Distance in KM or not
    Then check whether the user is able to take Dimension value from the drop dropdown
    Then check whether the user is able to fill Length or not
    Then check whether the user is able to fill Breadth or not
    Then check whether the user is able to fill Height or not
    Then check whether the user is able to fill Time To Destination or not
    Then check whether the user is able to click despatchschedule FROM and select date from from the date picker
    Then check whether the user is able to click despatchschedule TO and select date from the date picker
    Then click on submit button
    Then Capture the PDA number generated from the popup appeared


  @Despatch_Advice_Asset_VerifyMultipleLoad
    Scenario: Verify the Multiple Load process
    Given Check whether the user able to Navigate to Landing Page
    Then Check whether user able to navigate to Movements page
    Then Check whether user able to click on the despatch advice
    Then Check whether the user is able to select the assest code from the dropdown 
    Then  Check whether the user can successfully click on the "Go" button located within the Asset Movement interface
    Then Navigate to the "New - Asset - DA Request" section and verify if the user has the capability to access the source and destination fields 

    Then click on the warehouse and check whether the code is there or not
    Then click on the country and check wheteher the country is there or not
    Then click on the state and check whether the state is there or not
    Then check Contact Details is given in the input feild or not
    Then check Mobile Number is given in the input feild or not
    Then check Email Address is given is valid format or not

    #Destination 
    Then click  on destination job code and check whether is the job code input is taking or not
    Then click on warehouse and fill it
    Then click on country and give  the valid country name
    Then click on the state and give the valid state name
    Then check Contact Details is given in the input feild is valid or not
    Then check Mobile Number is given in the input feild is valid or not
    Then check Email Address is given is valid format or wrong format

    Then Click on Accessories
    Then check whether user is able to enter the description or not
    Then click on UDO and check user is able to fill the UDO code from the dropdown
    Then click on quantity and check user is able to enter the quantity or not
    Then click on the add button and check whether the data is being adding or not
    Then check whether user is able to enter the description or not
    Then click on UDO and check user is able to fill the UDO code from the dropdown
    Then click on quantity and check user is able to enter the quantity or not
    Then click on the add button and check whether the data is being adding or not
    Then click on edit buttton and check wheteher the user is able edit the data 
    Then click on update update button and the user is able update the data which is been edited
    Then click on the delete button and check the user is able to delete the unwanted files
    Then go to Dispatch and check wheteher the user is able to enter the data or not
    Then go to the Remarks and check whether the user is able to enter remarks or not
    Then click on the Transportation
    Then check whether the user is able to choose the option called Multiple Load from the drop down
    Then check whether the user is able to fill  Approx Weight in MT or not
    Then check whether the user is able to fill Approx Distance in KM or not
    Then check whether the user is able to take Dimension value from the drop dropdown
    Then check whether the user is able to fill Length or not
    Then check whether the user is able to fill Breadth or not
    Then check whether the user is able to fill Height or not
    Then check whether the user is able to fill Time To Destination or not
    Then check whether the user is able to click despatchschedule FROM and select date from from the date picker
    Then check whether the user is able to click despatchschedule TO and select date from the date picker
    Then click on submit button

  @Despatch_Advice_Asset_VerifyExternal
    Scenario: Verify the External process
    Given Check whether the user able to Navigate to Landing Page
    Then Check whether user able to navigate to Movements page
    Then Check whether breadcrumb is visible or not
    Then Check Whether breadcrumb is displayed correctly
    Then Check whether user able to click on the despatch advice 
    Then Check whether the user is able to select the assest code from the dropdown 
    Then Check whether the user can successfully click on the "Go" button located within the Asset Movement interface
    Then Navigate to the "New - Asset - DA Request" section and verify if the user has the capability to access the source and destination fields 
    Then click on the warehouse and check whether the code is there or not
    Then check Contact Details is given in the input feild or not
    Then check Mobile Number is given in the input feild or not
    Then check Email Address is given is valid format or not

    #Destination 
    Then click  on destination job code and check whether is the job code input is taking or not
    Then click on warehouse and fill it
    Then check Contact Details is given in the input feild is valid or not
    Then check Mobile Number is given in the input feild is valid or not
    Then check Email Address is given is valid format or wrong format

    Then Click on Accessories
    Then check whether user is able to enter the description or not
    Then click on UDO and check user is able to fill the UDO code from the dropdown
    Then click on quantity and check user is able to enter the quantity or not
    Then click on the add button and check whether the data is being adding or not
    Then check whether user is able to enter the description or not
    Then click on UDO and check user is able to fill the UDO code from the dropdown
    Then click on quantity and check user is able to enter the quantity or not
    Then click on the add button and check whether the data is being adding or not
    Then click on edit buttton and check wheteher the user is able edit the data 
    Then click on update update button and the user is able update the data which is been edited
    Then click on the delete button and check the user is able to delete the unwanted files
    Then go to Dispatch and check wheteher the user is able to enter the data or not
    Then go to the Remarks and check whether the user is able to enter remarks or not

    Then click on the Transportation
    Then check whether the user is able to choose the option 3 from the drop down
    Then check whether the user is able to fill  Approx Weight in MT or not
    Then check whether the user is able to fill Approx Distance in KM or not
    Then check whether the user is able to take Dimension value from the drop dropdown
    Then check whether the user is able to fill Length or not
    Then check whether the user is able to fill Breadth or not
    Then check whether the user is able to fill Height or not
    Then check whether the user is able to fill Time To Destination or not
    Then check whether the user is able to click despatchschedule FROM and select date from from the date picker
    Then check whether the user is able to click despatchschedule TO and select date from the date picker
    
    Then click on vechile cart
    Then check whether the user is able to Choose Vehicle or not
    Then check wheteher the user is able to click on selected option
    Then check whether the user is able to Choose more than 3 Vehicles
    Then check wheteher the user is able to click on vechile button
    Then check whether the user is able to click on the post button
    Then check whether the user is able to enter the Number of vechicles in input fields
    Then check whether the user is able to click on the vechicles delete button
    Then check whether the user is able to click on the vechicles Submit button
    Then check whether the user is able to click on the vechicles Success button

  @Despatch_Advice_Asset_VerifyNotRequired
    Scenario: Verify the Not required process
    Given Check whether the user able to Navigate to Landing Page
    Then Check whether user able to navigate to Movements page

    Then Check whether user able to click on the despatch advice
    Then Check whether the user is able to select the assest code from the dropdown 
    Then Check whether the user can successfully click on the "Go" button located within the Asset Movement interface
    Then Navigate to the "New - Asset - DA Request" section and verify if the user has the capability to access the source and destination fields 
    Then click on the warehouse and check whether the code is there or not
    Then click on the country and check wheteher the country is there or not
    Then click on the state and check whether the state is there or not
    Then check Contact Details is given in the input feild or not
    Then check Mobile Number is given in the input feild or not
    Then check Email Address is given is valid format or not

    #Destination 
    Then click  on destination job code and check whether is the job code input is taking or not
    Then click on warehouse and fill it
    Then click on country and give  the valid country name
    Then click on the state and give the valid state name
    Then check Contact Details is given in the input feild is valid or not
    Then check Mobile Number is given in the input feild is valid or not
    Then check Email Address is given is valid format or wrong format

    Then Click on Accessories
    Then check whether user is able to enter the description or not
    Then click on UDO and check user is able to fill the UDO code from the dropdown
    Then click on quantity and check user is able to enter the quantity or not
    Then click on the add button and check whether the data is being adding or not
    Then check whether user is able to enter the description or not
    Then click on UDO and check user is able to fill the UDO code from the dropdown
    Then click on quantity and check user is able to enter the quantity or not
    Then click on the add button and check whether the data is being adding or not
    Then check whether user is able to enter the description or not
    Then click on UDO and check user is able to fill the UDO code from the dropdown
    Then click on quantity and check user is able to enter the quantity or not
    Then click on the add button and check whether the data is being adding or not
    Then click on edit buttton and check wheteher the user is able edit the data 
    Then click on update update button and the user is able update the data which is been edited
    Then click on the delete button and check the user is able to delete the unwanted files
    Then go to Dispatch and check wheteher the user is able to enter the data or not
    Then go to the Remarks and check whether the user is able to enter remarks or not
    Then click on the Transportation
    Then check whether the user is able to choose the option 4 from the drop down
    Then check whether the user is able to fill  Approx Weight in MT or not
    Then check whether the user is able to fill Approx Distance in KM or not
    Then check whether the user is able to take Dimension value from the drop dropdown
    Then check whether the user is able to fill Length or not
    Then check whether the user is able to fill Breadth or not
    Then check whether the user is able to fill Height or not
    Then check whether the user is able to fill Time To Destination or not
    Then check whether the user is able to click despatchschedule FROM and select date from from the date picker
    Then check whether the user is able to click despatchschedule TO and select date from the date picker
    Then click on submit button


  @DeliveryChallan_Asset
    Scenario: Verify the DC Creation for Asset
    Given Check whether the user able to Navigate to Landing Page
    Then Check whether user able to navigate to Movements page to deliverychallan
    Then check whether the user is able to navigate to the  Delivery challan
    Then Verify whether user able to Click on Filter Icon
    Then Verify whether user able to enter PDA generated in DA number field
    Then check whether the the user is able to click on the Go button 
    Then click on create DC
    Then check whether the user is able to click on the DC Essentials
    Then check whether the user is abe to click on the Number of DCS and fill the input feild
    Then Verify whether user able to capture the FMV Value form the DC Essentials Page
    Then click on save DC
    Then check whether the user is able to navigate to the LR and Load
    Then click on the Load Details
    Then check whether the user is able to fill the input field of LR Number
    Then check whether the user is able to click LRDATE and select date from the date picker
    Then check whether the user is able to fill the input field of Vehicle Number
    Then check whether the user is able to fill the input field of Transporter
    Then check whether the user is able to fill the input field of FMV
    Then check whether the currency field is taking default value
    Then check whether the user is able to fill Frieght to PayPaid from the drop down
    Then check whether the user is able to fill the input field of Freight Amount
    Then Verify whether user able to click on load details Icon
    Then Verify whether user able to enter description in the Load Details
    Then Verify whether user able to enter Quantity in the Load Details
    Then Verify whether user able to enter FMV value in the Load Details
    Then Verify whether user able to Save the load Details
    Then Verify whether user able to click on Accessories Icon
    Then Verify whether user able to enter description in the Accessories
    Then Verify whether user able to enter Quantity in the Accessories
    Then Verify whether user able to Save the Accessories
    Then Verify whether user able to click on Accessories Icon
    Then Verify whether user able to enter description in the Accessories
    Then Verify whether user able to enter Quantity in the Accessories
    Then Verify whether user able to Save the Accessories
    Then Verify whether user able to edit the Accessories
    Then Verify whether user able to edit description in the Accessories
    Then Verify whether user able to enter Quantity in the Accessories
    Then Verify whether user able to Save the Accessories
    Then Click on Submit Load details to submit
    Then Check whether user able to capture the PDC number generated from the popup

  @Receipt_RN_Asset
  Scenario: Create Receipt note for the Movement Asset Flow
    Given Check whether the user able to Navigate to Landing Page of RN_Commissioning
    Then Verify BreadCrumbs before navigating to the Mobilization & Movements page
    Then Check whether the user able to click on the Access Based Menu button in Mobilization & Movements page
    Then Check whether the user able to select the Asset Management from the dropdown in Mobilization & Movements page
    Then Check whether the user able to select the Mobilization & Movements from the dropdown
    Then Check whether the user able to select the Movement from the dropdown
    Then Verify BreadCrumbs after navigating to the Mobilization & Movements page
    Then Check whether user able to click on Asset at to right of page
    Then Click on the Receipt which is on the top of the DC table besides delivery challan
    Then check whether the the user is able to click on the Go button 
    Then Click on search icon to the right of Asset code input to do an advance search
    Then Select the time duration from the calendar in advanced search
    Then Click on search button in the advanced search for changing the to and from date
    Then Verify whether user able to Click on Filter Icon
    Then Filter the required Asset by giving the PDC generated from the DeliveryChallan
    Then check whether the the user is able to click on the Go button 
    Then Click on the plus button to create the Receipt_RN for the filtered Asset
    Then Verify the Status of Asset is pending or not
    Then Click on the action button which is on the left side of the status to create RN
    Then Click on Yes toggle to enable commissioning for that Asset
    Then Click on the calendar iron to set the RN date
    Then Verify whether remarks field is taking input or not
    Then Verify whether Issue RN button is enabled or not
    Then Enter the remarks to issue the RN which is besides the RN date
    Then Click on the Issue RN button to issue the receipt which is left side below the accessories table
    Then Click on OK button from the Success popup appeared after Issuing RN
    Then Verify the Status of Asset changed to RN Taken or not
    Then Click on the close icon and close the New Asset receipt modal
    Then Click on Yes in the confirmation to close Asset receipt model

  @Commissionong_Asset
  Scenario: Create Commissioning for the Movement Asset Flow
    Given Check whether the user able to Navigate to Landing Page of RN_Commissioning
    Then Verify BreadCrumbs before navigating to the Mobilization & Movements page
    Then Check whether the user able to click on the Access Based Menu button in Mobilization & Movements page
    Then Check whether the user able to select the Asset Management from the dropdown in Mobilization & Movements page
    Then Check whether the user able to select the Mobilization & Movements from the dropdown
    Then Check whether the user able to select the Movement from the dropdown
    Then Verify BreadCrumbs after navigating to the Mobilization & Movements for commissioning page
    Then Check whether the commissioning is displaying in the Movement page
    Then Check whether user able to click on Asset at to right of page
    Then Click on the Commissioning which is on the top of the DC table besides delivery challan
    Then Click on search icon to the right of Asset code input to do an advance search in the Movement page
    Then Verify weather date input field is editable and taking input in the Movement page
    Then Select the time duration from the calendar in advanced search in the Movement page
    Then Click on search button in the advanced search in Commissioning
    Then click on the filter button for filtering the needed assects
    Then Filter the required Asset by giving the PDC generated from the DeliveryChallan Commissioning
    Then check whether the the user is able to click on the Go button 
    Then Click on the plus button to create the Commissioning for the filtered Asset
    Then Check whether assest details is displayed at right side of Create Commissioning window
    Then Check whether Commissioning details is displayed at right side of Create Commissioning window
    Then Check whether Dates details is displayed at right side of Create Commissioning window
    Then Click on the calendar icon to set the Commissioning date which is below the accessories table general
    Then Check whether the Meter Reading_Previous is displaying in the Create Asset-CX Request page
    Then Check whether the Meter Reading_Current is displaying in the Create Asset-CX Request page
    Then Check whether the user able to Fill Current Meter Reading field which is besides the previous Meter Reading field
    Then Check whether the user able to Fill Reason for Meter Reading Change field which is besides the current Meter Reading field
    Then Click on the Submit button which is in the right bottom of the page
    Then Click on OK button from the Success popup appeared after Issuing commissioning
