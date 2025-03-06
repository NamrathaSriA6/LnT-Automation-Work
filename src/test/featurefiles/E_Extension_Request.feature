@Smoke_Extension_Request
Feature: Plant Hire Extension Request 

    Background:
        Given Navigate to Test Environment

    @Verify_the_Extension_Request
    Scenario: Verify the Extension_Request
        Given Check whether the user able Navigate to landing in the Extension_Request Page
        Then Verify BreadCrumbs before navigating to the Extension_Request Page
        Then Check whether the user able to click on the Access Based Menu button to get into Extension_Request
        Then Check whether the user able to select the Asset Management from the dropdown to get into Extension_Request
        Then Check whether the user able to select the Planning & Procurement from the dropdown to get into Extension_Request
        Then Check whether the user able to select the Extension Request from the dropdown
        Then Verify BreadCrumbs after navigating to the Extension_Request Page
        Then Check whether the user able to navigate to the Extension_Request Page
        Then Check whether the job is displaying in the Extension_Request Page
        Then Check whether the Document is displaying in the Extension_Request Page
        Then Check whether the PHRS Number is displaying in the Extension_Request Page
        Then Check whether the Asset Group is displaying in the Extension_Request Page
        Then Check whether the user able to click on the Search button which is on right top of the S3R table in the Extension_Request Page
        Then Check whether the user able to click FullScreen Button which is on the top of S3R table in the Page in the Extension_Request Page
        Then Click on the filter icon to filter required Asset which is on the right top of the table and down to the search button
        Then Filter by giving generated PHRS number to get the main data to the top
        Then Click on the Action button for extension request for a PHRS number which is in the last cell of the table row
        Then Click on the calendar icon to give the required to date which is next to the required from field
        Then Click on the shift hours field to enter the shift hours
        Then Check whether the user able to click on the Create extension request button which is in the right button of the page



        