@Smoke_Asset_Availability
Feature: Request for Asset Availablity

    Background:
        Given Navigate to Test Environment

    @AssetAvailability
    Scenario: Verify the Assest Availability Page
        Given Check whether the user able Navigate to the landing Page
        Then check wheteher the user is able to Click on the MenuBar to click the flow
        Then Check whether the user is able to select the job code from the drop down
        Then check whether the user is able to select the group code from the drop down
        Then check whether the user is able to click the Go button
        
        Then  go to Available-owned
        Then check whether the user is able to click job in Available-owned
        Then check whether the user is able to click cluster in Available-owned
        Then check whether the user is able to click BU in Available-owned
        Then check whether the user is able to click IC in Available-owned
        Then check whether the user is able to click Company in Available-owned
        Then check whether the user able to print the grid if the company number and grid count are same
        Then check whether the user able to compare the each section count and grid count and print the grid if matches

        Then go to Surplus-Owned
        Then check whether the user is able to click job in Surplus-Owned
        Then check whether the user is able to click cluster in Surplus-Owned
        Then check whether the user is able to click BU in Surplus-Owned
        Then check whether the user is able to click IC in Surplus-Owned
        Then check whether the user is able to click Company in Surplus-Owned

        Then go to Available-Hired
        Then check whether the user is able to click job in Available-Hired
        Then check whether the user is able to click cluster in Available-Hired
        Then check whether the user is able to click BU in Available-Hired
        Then check whether the user is able to click IC in Available-Hired
        Then check whether the user is able to click Company in Available-Hired
        Then check whether the user is able to click on show drop down menu and select it
        Then check whether the user is able to click Excel Download and Download the Equipment Avaliable file
        Then check whether the user is able to Click Filter icon
        Then check whether the user is able to take input in AssetDescription or not
        Then check whether user is able view table
        Then verify whether the job and group code is mandatory in Asset Availability
        