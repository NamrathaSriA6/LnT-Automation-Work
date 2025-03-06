@SubcontractorPM
Feature: Adding a new Asset in SubcontractorPM section

    Background: 
    Given Navigate to Test Environment

    @Verify_Adding_Asset
    Scenario: Verify the Process of Adding new Asset in the SubcontractorPM
        Given Check whether the user able Navigate to the landing Page of SubcontractorPM Page
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether the user able to select the Masters from the dropdown
        Then Check whether the user able to select the SubcontractorPM from the dropdown
        Then Check Whether user able to click on SubContractor toggle at top left of Page
        Then Check whether user able to enter JOB in the autocomplete box available
        Then Check whether user able to enter Vendor in the autocomplete box available
        Then Verify whether user able to click on Go button
        Then Verify whether user able to Click on new Asset Button
        Then Verify whether Asset Group Field is Mandatory
        Then Verify whether user able to enter Asset Group details in the auto complete box available
        Then Verify whether Asset Description Field is Mandatory
        Then Verify whether user able to enter Asset Description details in the auto complete box available
        Then Verify whether Make Field is Mandatory
        Then Verify whether user able to enter Make details in the auto complete box available
        Then Verify whether Model Field is Mandatory
        Then Verify whether user able to enter Model details in the auto complete box available
        Then Verify whether Capacity Field is Mandatory
        Then Verify whether user able to enter Capacity details in the auto complete box available
        Then Verify whether Serial Number Field is Mandatory
        Then Verify whether user able to enter Serial Number details in the auto complete box available
        Then Verify whether Registration Number Field is Mandatory
        Then Verify whether user able to enter Registration Number details in the auto complete box available
        Then Verify whether Year of manufacture Field is Mandatory
        Then Verify whether user able to enter Year of manufacture details in the auto complete box available
        Then Verify whether WOrk Order number Field is Mandatory
        Then Verify whether user able to enter WOrk Order number details in the auto complete box available
        Then Check whether user able to click on create button to create a new Asset
        Then Verify whether user able to capture the SCPM number generated after clicking in create button

    @Verify_Updating_Asset
    Scenario: Verify the Process of updating existing Asset in the SubcontractorPM
        Given Check whether the user able Navigate to the landing Page of SubcontractorPM Page
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether the user able to select the Masters from the dropdown
        Then Check whether the user able to select the SubcontractorPM from the dropdown
        Then Check Whether user able to click on SubContractor toggle at top left of Page
        Then Check whether user able to enter JOB in the autocomplete box available
        Then Check whether user able to enter Vendor in the autocomplete box available
        Then Verify whether user able to click on Go button
        Then Filter the Asset by giving the Request number in the filter input
        Then Click on update icon for that asset to update the details of that asset
        Then Verify whether user able to enter Asset Description details in the auto complete box available
        Then Verify whether user able to enter Make details in the auto complete box available       
        Then Verify whether user able to enter Model details in the auto complete box available        
        Then Verify whether user able to enter Capacity details in the auto complete box available        
        Then Verify whether user able to enter Serial Number details in the auto complete box available       
        Then Verify whether user able to enter Registration Number details in the auto complete box available
        Then Verify whether user able to enter WOrk Order number details in the auto complete box available
        Then Click on Update button to update the details
        

