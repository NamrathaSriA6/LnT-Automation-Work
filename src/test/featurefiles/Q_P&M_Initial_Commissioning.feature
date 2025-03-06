@Smoke_PM_Initial_Commissioning
Feature: P&M Initial Commissioning 

    Background:
        Given Navigate to Test Environment

    @Verify_the_PM_Initial_Commissioning
    Scenario: Verify the P&M Initial Commissioning
        Given Check whether user able to navigate to landing page of P&M Initial Commissioning Page
        Then Verify BreadCrumbs before navigating to the P&M Initial Commissioning page
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in P&M Initial Commissioning page
        Then Check whether the user able to select the Asset Management from the dropdown in P&M Initial Commissioning page
        Then Check whether the user able to select the Mobilization_Movements from the dropdown in P&M Initial Commissioning page
        Then Check whether the user able to select the PM_Initial_Commissioning from the dropdown in P&M Initial Commissioning page
        Then Verify BreadCrumbs after navigating to the P&M Initial Commissioning page
        Then Check whether the user able to navigate to the P&M Initial Commissioning page
        Then Check whether the user able to click on the group field
        Then Select the random group from the group field dropdown  
        Then Check whether the user able to click on the search button which is on the top right of the page
        Then Validating whether the user able to click FullScreen Button which is on the top of details table P&M Initial Commissioning page
        Then Check whether the table is displaying in the P&M Initial Commissioning page
        Then Check whether the user able to click on the edit button to enter the dates 
        Then Check on the Received Date calendar icon which is displayed after clicking on the edit icon
        Then Select the date form the Received Date calendar
        Then Check on the Commission Date calendar icon which is displayed after clicking on the edit icon
        Then Select the date form the Commission Date calendar
        Then Check whether the user able to click on the save button
        Then Check whether the user able to view the success popup after approving the approval remarks in PM initial commissioning
        Then Printing the text in the success popup after approval in P&M Initial Commissioning page
        Then Click on the Ok button in the success popup for the next process in P&M Initial Commissioning page
        Then Click on the filter button for filtering the needed assect in P and M Initial Commissioning page
        Then Enter the asset code to filter the required assect code in P and M Initial Commissioning page
        Then Print the filtered asset row in the console after filtering the required asset code