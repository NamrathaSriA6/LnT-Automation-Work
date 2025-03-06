@Smoke_RateContract
Feature:RateContract 
    Background:
        Given Navigate to Test Environment
    
    @RateContract_UploadRC
    Scenario:Verify the Rate Contract UploadRC
        Given Check whether user able to navigate to landing page of RateContract Page
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in RateContract page
        Then Check whether the user able to select the Asset Management from the dropdown in RateContract page
        Then Check whether the user able to select the Masters from the dropdown in RateContract page
        Then Check whether the user able to select the Rate Contract from the dropdown in RateContract page
        Then Check whether the user able to navigate to the RateContract page
        Then Verify whether user able to upload Excel File in the File upload box

    @RateContract_SearchRC
    Scenario:Verify the Rate Contract SearchRC
     Given Check whether user able to navigate to landing page of RateContract Page
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in RateContract page
        Then Check whether the user able to select the Asset Management from the dropdown in RateContract page
        Then Check whether the user able to select the Masters from the dropdown in RateContract page
        Then Check whether the user able to select the Rate Contract from the dropdown in RateContract page
        Then Check whether the user able to click on the SearchRC button which is on the top left besides UploadRC button
        Then Check whether the user able to select the group code from the dropdown 
        Then Check whether the user able to click on the search button which is on the top right corner of RateContract page
        Then Check whether the user able to click on the With_Attachment button which is beside the All button
        Then Check whether the user able to click on the WithOut_Attachment button which is beside the With_Attachment button
        Then Check whether the user able to click on the Active button which is beside the WithOut_Attachment button
        Then Click on the Toggle View icon which is on the right top of the details that are displayed
        Then Check whether the user able to click on the All button which is below the capacity field


    @Verify_the_Hire_Request_Creation_RC
    Scenario: Verify the Hire Request Creation
        Given Check whether the user able Navigate to PHR Creation landing Page
        Then Verify BreadCrumbs before navigating to the PHR page
        Then Check whether the user able to click on the Access Based Menu button
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether the user able to select the Planning & Procurement from the dropdown
        Then Check whether the user able to select the Plant Hire Request and Confirmation from the dropdown
        Then Verify BreadCrumbs after navigating to the PHR page
        Then Check whether the user able to navigate to the PHR page
        Then Check whether the job is displaying in the PHR page
        Then Check whether the Document is displaying in the PHR page
        Then Check whether the PHRS Number is displaying in the PHR page
        Then Check whether the Asset Group is displaying in the PHR page
        Then Check whether the user able to enter the job description in PHR Page
        Then Check whether the user able to select the 150530 Project from the dropdown
        Then Check whether the user able to enter the asset code and select the required asset code from the dropdown 
        Then Check whether the user able to click on the Search button which is on right top of the S3R table
        Then Check whether the user able to click FullScreen Button which is on the top of S3R table
        Then Check whether user able to print the print the table 
        Then Click on the Action button for S3R Number in PHR Page 
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
        Then Check whether user able to fill the L&T Contact Person Name field
        Then Check whether user able to fill the L&T Contact Person Mobile Number field
        Then Check whether user able to fill the L&T Contact Person Email ID field
        Then Check whether user able to fill the L&T Mail CC field
        Then Check whether the user able to click on Create Hire Request
        Then Get the PHRS number from the Popup after creating the Hire Request
        Then Check whether the user able to view popup as Success


    