@Movements_Asset_Repair
Feature: Repair of Asset

  Background:
    Given Navigate to Test Environment

@Verify_DA_Asset_Repair
  Scenario:Verify despatch Advise of Asset Repair

    Given Check whether the user able to Navigate to Landing Page
    Then Verify BreadCrumbs before navigating to the Mobilization & Movements page
    Then Check whether the user able to click on the Access Based Menu button in Mobilization & Movements page
    Then Check whether the user able to select the Asset Management from the dropdown in Mobilization & Movements page
    Then Check whether the user able to select the Mobilization & Movements from the dropdown
    Then Check whether the user able to select the Movement from the dropdown
    Then Verify BreadCrumbs after navigating to the Mobilization & Movements page
    Then Click on the Repair button
    Then Check whether user able to click on the despatch advice
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

  # Vendor
    Then check whether the user is able to click on the vendor code input field
    Then Click on the Country field and check whether the country is autopopulated or not in the vendor 
    Then Click on the State field and verify whether the state is present in the vendor or not
    Then Verify if the information provided in the Contact Details input field is valid or not
    Then verify whether the mobile number provided in the input field is correct format
    Then Verify whether the email address provided is in a valid format or wrong in the Vendor section

#   # New Vendor
#   Then click on the New Vendor icon to add new vendor Details
#   Then click on the name and enter the name of the vendor
#   Then click on the address and give the correct details of the vendor
#   Then Check whether the user is able to click on the country
#   Then click on the state and choose the valid state
#   Then click on the RegNo and enter the number 
#   Then click on add to add the new vendor details

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

    #Transportation
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
    Then Capture the RDA number generated from the popup appeared
    Then check whether the user is able to click on the vechicles Success button


@DeliveryChallan_Asset_Repair
    Scenario: Verify the DC Creation for Asset Repair
    Given Check whether the user able to Navigate to Landing Page
    Then Verify BreadCrumbs before navigating to the Mobilization & Movements page
    Then Check whether the user able to click on the Access Based Menu button in Mobilization & Movements page
    Then Check whether the user able to select the Asset Management from the dropdown in Mobilization & Movements page
    Then Check whether the user able to select the Mobilization & Movements from the dropdown
    Then Check whether the user able to select the Movement from the dropdown
    Then Verify BreadCrumbs after navigating to the Mobilization & Movements page
    Then Click on the Repair button
    Then check whether the user is able to navigate to the  Delivery challan
    Then Verify whether user able to Click on Filter Icon
    Then Verify whether user able to enter RDA generated in DA number field
    Then check whether the the user is able to click on the Go button 
    Then click on create DC
    Then check whether the user is able to click on the DC Essentials
    Then Verify whether user able to capture the FMV Value form the DC Essentials Page
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








