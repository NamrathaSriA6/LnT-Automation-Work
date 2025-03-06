@Movements_Component_Flow
Feature: Despatch Advise to Commissioning for Components

  Background:
    Given Navigate to Test Environment

  @Despatch_Advice_Components
    Scenario:Verify the DispatchComponents Page
    Given Check whether the user able to Navigate to Landing Page
    Then Verify BreadCrumbs before navigating to the Mobilization & Movements page
    Then Check whether the user able to click on the Access Based Menu button in Mobilization & Movements page
    Then Check whether the user able to select the Asset Management from the dropdown in Mobilization & Movements page
    Then Check whether the user able to select the Mobilization & Movements from the dropdown
    Then Check whether the user able to select the Movement from the dropdown
    Then Verify BreadCrumbs after navigating to the Mobilization & Movements page
    Then Check click whether the user is able to click the Components
    Then Check whether user able to click on the despatch advice
    Then click on the checkbox
    Then Check whether the user is able to select the assest code from the dropdown 
    Then Check whether the user can successfully click on the "Go" button located within the Asset Movement interface

    # source
    Then Navigate to the "New - Asset - DA Request" section and verify if the user has the capability to access the source and destination fields
    Then Capture the From_Job_Code from the auto populated data
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

    # Components
    Then click on the Components
    Then check whether the user is able to click on the shopping cart
    Then click on the add icon 
    Then check whether the user is able to click on the component description and fill it
    Then check whether the user is able to click on the quantity
    Then click on the action button

    Then click on the add icon 
    Then check whether the user is able to click on the component description and fill it
    Then check whether the user is able to click on the quantity
    Then click on the action button

    Then click on the add icon 
    Then check whether the user is able to click on the component description and fill it
    Then check whether the user is able to click on the quantity
    Then click on the action button

    Then click on the description components checkbox 
    Then click on add button to add the Details
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
    Then Capture the CDA number generated from the popup appeared

  @Despatch_Advice_Components_ExternalLoad
    Scenario: Verify the External process in Transportation
    Given Check whether the user able to Navigate to Landing Page
    Then Verify BreadCrumbs before navigating to the Mobilization & Movements page
    Then Check whether the user able to click on the Access Based Menu button in Mobilization & Movements page
    Then Check whether the user able to select the Asset Management from the dropdown in Mobilization & Movements page
    Then Check whether the user able to select the Mobilization & Movements from the dropdown
    Then Check whether the user able to select the Movement from the dropdown
    Then Verify BreadCrumbs after navigating to the Mobilization & Movements page
    Then Check click whether the user is able to click the Components
    Then Check whether user able to click on the despatch advice
    Then click on the checkbox
    Then Check whether the user is able to select the assest code from the dropdown 
    Then Check whether the user can successfully click on the "Go" button located within the Asset Movement interface

    # source
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

    # Components
    Then click on the Components
    Then check whether the user is able to click on the shopping cart
    Then click on the add icon 
    Then check whether the user is able to click on the component description and fill it
    Then check whether the user is able to click on the quantity
    Then click on the action button

    Then click on the add icon 
    Then check whether the user is able to click on the component description and fill it
    Then check whether the user is able to click on the quantity
    Then click on the action button

    Then click on the add icon 
    Then check whether the user is able to click on the component description and fill it
    Then check whether the user is able to click on the quantity
    Then click on the action button

    Then click on the description components checkbox 
    Then click on add button to add the Details
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


@Despatch_Advice_Components_TransportationNotRequired
  Scenario: Verify the External process in Transportation 
    Given Check whether the user able to Navigate to Landing Page
    Then Verify BreadCrumbs before navigating to the Mobilization & Movements page
    Then Check whether the user able to click on the Access Based Menu button in Mobilization & Movements page
    Then Check whether the user able to select the Asset Management from the dropdown in Mobilization & Movements page
    Then Check whether the user able to select the Mobilization & Movements from the dropdown
    Then Check whether the user able to select the Movement from the dropdown
    Then Verify BreadCrumbs after navigating to the Mobilization & Movements page
    Then Check click whether the user is able to click the Components
    Then Check whether user able to click on the despatch advice
    Then click on the checkbox
    Then Check whether the user is able to select the assest code from the dropdown 
    Then Check whether the user can successfully click on the "Go" button located within the Asset Movement interface

    # source
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

    # Components
    Then click on the Components
    Then check whether the user is able to click on the shopping cart
    Then click on the add icon 
    Then check whether the user is able to click on the component description and fill it
    Then check whether the user is able to click on the quantity
    Then click on the action button

    Then click on the add icon 
    Then check whether the user is able to click on the component description and fill it
    Then check whether the user is able to click on the quantity
    Then click on the action button

    Then click on the add icon 
    Then check whether the user is able to click on the component description and fill it
    Then check whether the user is able to click on the quantity
    Then click on the action button

    Then click on the description components checkbox 
    Then click on add button to add the Details
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
    Then click  on the submit

@DeliveryChallan_Component
  Scenario: Verify the DC Creation for Movement Component Flow
    Given Check whether the user able to Navigate to Landing Page of DC for component flow
    Then Check whether user able to navigate to Movements page to deliverychallan
    Then Check click whether the user is able to click the Components
    Then check whether the user is able to navigate to the  Delivery challan
    Then Verify whether user able to Click on Filter Icon
    Then Verify whether user able to enter CDA generated in DA number field
    Then check whether the the user is able to click on the Go button 
    Then click on create DC
    Then check whether the user is able to click on the DC Essentials
    # Then check whether the user is abe to click on the Number of DCS and fill the input feild
    Then Verify whether user able to fill the FMV Value form the DC Essentials Page
    Then check whether the user is able to navigate to the LR and Load
    Then click on the Load Details
    Then check whether the user is able to fill the input field of LR Number
    Then check whether the user is able to click LRDATE and select date from the date picker
    Then check whether the user is able to fill the input field of Vehicle Number
    Then check whether the user is able to fill the input field of Transporter
    Then check whether the user is able to fill the input field of FMV for component
    Then check whether the currency field is taking default value
    Then check whether the user is able to fill Frieght to PayPaid from the drop down
    Then check whether the user is able to fill the input field of Freight Amount
    Then Verify whether user able to enter Make for the Component
    Then Verify whether user able to enter Model for the Component
    Then Verify whether user able to enter Despatch Quantity for the Component
    Then Verify whether user able to enter Unit FMV Value for the Component
    Then Verify whether user able to enter Weight for the Component
    Then Verify whether user able to enter Length for the Component
    Then Verify whether user able to enter Width for the Component
    Then Verify whether user able to enter Height for the Component
    Then Verify whether user able to enter HSN Code for the Component
    Then Click on Submit Load details to submit
    Then Check whether user able to capture the CDC number generated from the popup

@Receipt_RN_Component
  Scenario: Create Receipt note for the Movement Component Flow
    Given Check whether the user able to Navigate to Landing Page of RN_Commissioning
    Then Verify BreadCrumbs before navigating to the Mobilization & Movements page
    Then Check whether the user able to click on the Access Based Menu button in Mobilization & Movements page
    Then Check whether the user able to select the Asset Management from the dropdown in Mobilization & Movements page
    Then Check whether the user able to select the Mobilization & Movements from the dropdown
    Then Check whether the user able to select the Movement from the dropdown
    Then Verify BreadCrumbs after navigating to the Mobilization & Movements page
    Then Check click whether the user is able to click the Components
    Then Click on the Receipt which is on the top of the DC table besides delivery challan
    Then check whether the the user is able to click on the Go button 
    Then Click on search icon to the right of Asset code input to do an advance search
    Then Select the time duration from the calendar in advanced search
    Then Click on search button in the advanced search for changing the to and from date
    Then Verify whether user able to Click on Filter Icon
    Then Filter the required Asset by giving the CDC generated from the DeliveryChallan
    Then check whether the the user is able to click on the Go button 
    Then Click on the plus button to create the Receipt_RN for the filtered Asset
    Then Verify the Status of Asset is pending or not
    Then Click on the action button which is on the left side of the status to create RN
    # Then Click on Yes toggle to enable commissioning for that Asset
    Then Click on the calendar iron to set the RN date
    Then Verify whether remarks field is taking input or not
    Then Verify whether Issue RN button is enabled or not
    Then Enter the remarks to issue the RN which is besides the RN date
    Then Click on the Issue RN button to issue the receipt which is left side below the accessories table
    Then Click on OK button from the Success popup appeared after Issuing RN
    Then Verify the Status of Asset changed to RN Taken or not
    Then Click on the close icon and close the New Asset receipt modal
    Then Click on Yes in the confirmation to close Asset receipt model

