@Smoke_Extension_Confirmation
Feature: Plant Hire Extension Confirmation 

    Background:
        Given Navigate to Test Environment

    @Verify_the_Extension_Confirmation
    Scenario: Verify the Extension_Confirmation
        Given Check whether the user able Navigate to landing in the Extension_Confirmation Page
        Then Verify BreadCrumbs before navigating to the Extension_Confirmation Page
        Then Check whether the user able to click on the Access Based Menu button to get into Extension_Confirmation
        Then Check whether the user able to select the Asset Management from the dropdown to get into Extension_Confirmation
        Then Check whether the user able to select the Planning & Procurement from the dropdown to get into Extension_Confirmation
        Then Check whether the user able to select the Extension Confirmation from the dropdown
        Then Verify BreadCrumbs after navigating to the Extension_Confirmation Page
        Then Check whether the user able to navigate to the Extension_Confirmation Page
        Then Check whether the job is displaying in the Extension_Confirmation Page
        Then Check whether the user able to enter the job description in the Extension_Confirmation Page
        Then Check whether the user able to click on the Search button which is on right top of the S3R table in the Extension_Confirmation Page
        Then Click on the action for the extension request PHR number
        Then Click on the save and next button in the Extension_Confirmation Page
        Then Click on OT Charges option which is on bottom of the Normal Hours charges in the Extension_Confirmation Page
        Then Fill the OT Percentage which is on the top of the OT table in the Extension_Confirmation Page
        Then Fill the OT Expected Hours which is on the top of the OT table in the Extension_Confirmation Page
        Then Validating the OT hours calculation for 31 days in the Extension_Confirmation Page
        # Then Validating the OT hours calculation for 30 days in the Extension_Confirmation Page
        # Then Validating the OT hours calculation for 29 days in the Extension_Confirmation Page
        # Then Validating the OT hours calculation for 28 days in the Extension_Confirmation Page
        Then In OT click on the save button which is on the bottom of the OT table in the Extension_Confirmation Page
        Then Fill the Operator rate in the Extension_Confirmation Page
        Then Click on Additional Operator option which is placed bottom of the Operator in the Extension_Confirmation Page
        Then Click on the Checkbox on top in the Extension_Confirmation Page
        Then In Additional Operator click on the Save button which is on the right bottom of the page in the Extension_Confirmation Page
        Then Fill the Additional Operator rate in the Extension_Confirmation Page
        Then Click on Additional Helper option which is placed bottom of the helper in the Extension_Confirmation Page
        Then Click on the Checkbox on top and beside the applicable text in the Extension_Confirmation Page
        Then In AdditionalHelper click on the Save button which is on the right bottom of the page in the Extension_Confirmation Page
        Then Fill the Additional Helper rate in the Extension_Confirmation Page
        Then Fill the Helper rate in the Extension_Confirmation Page
        Then Click on Accommodation option which is on bottom of the Additional helper in the Extension_Confirmation Page
        Then Select the Accommodation option as Bachelor Accomodation provided by site in the Extension_Confirmation Page
        Then In Accommodation click on the Save button which is on the right bottom in the Extension_Confirmation Page
        Then Fill the Accommodation rate in the Extension_Confirmation Page
        Then Click on Save and Next Button which is on the right bottom of the table in the Extension_Confirmation Page
        Then Enter Primary Engine details in the OtherTerms in the Extension_Confirmation Page
        Then Fill the Primary MinimumInputBox for primary engine for Maximum input in the Extension_Confirmation Page
        Then Fill the Primary MaximumInputBox for primary engine for Minimum input in the Extension_Confirmation Page
        Then Enter Secondary Engine details in the OtherTerms in the Extension_Confirmation Page
        Then Fill the Secondary MinimumInputBox for secondary engine in the Extension_Confirmation Page
        Then Fill the Secondary MaximumInputBox for secondary engine in the Extension_Confirmation Page
        Then Verify able to enter breakdown cause form the drop down in breakdown cause in the Extension_Confirmation Page
        Then Verify able to enter breakdown deduction rate and Maintenance in the Extension_Confirmation Page
        When In Other Terms section Click on Save and Next which is on the right bottom of the page in the Extension_Confirmation Page
        Then Click on Confirm Hire Request Button which is on right bottom of the page in the Extension_Confirmation Page
