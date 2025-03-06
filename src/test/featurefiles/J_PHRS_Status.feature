@Smoke_PHR_Status
Feature: Plant Hire Request Status 

    Background:
        Given Navigate to Test Environment

    @Verify_the_PHRS_Status
    Scenario: Verify the PHRS Status
        Given Check whether the user able Navigate to PHRS Status landing Page
        Then Verify BreadCrumbs before navigating to the PHRS Status page
        Then Check whether the user able to click on the Access Based Menu button to get into  the PHRS Status page
        Then Check whether the user able to select the Asset Management from the dropdown to get into the PHRS Status page 
        Then Check whether the user able to select the Planning & Procurement from the dropdown to get into the PHRS Status page 
        Then Check whether the user able to select the PHRS Status from the dropdown to get into the PHRS Status page 
        Then Verify BreadCrumbs after navigating to the PHRS Status page 
        Then Check whether the user able to navigate to the PHRS Status page
        Then Check whether the user able to select the dropdown from the Query type as summary
        Then Check whether the user able to select the IC from the dropdownthen
        Then Check whether the user able to enter the job code and select the particular job from the dropdown
        Then Check whether the user able to click on the Go button
        Then Click on the show items dropdown which is on the left side above the Asset details table in the PHRStatus page
        Then Check whether the user able to click on the PHRS Number and on the details of that PHRS Number
        Then Check whether the user able to click on the close button
        Then Check whether the table is displaying in the PHRS Status page
        Then Select the Query type fiels and clear the field to select the new type
        Then Check whether the user able to select the dropdown from the Query type as details
        Then Check whether the user able to click on the Go button
        Then Click on the show items dropdown which is on the left side above the Asset details table in the PHRStatus page
        Then Check whether the table is displaying in the PHRS Status page

    