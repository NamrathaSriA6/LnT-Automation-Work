@SurplusandRedeployment
Feature: Surplus and Redeployment

    Background:
        Given Navigate to Test Environment

    @SurplusCreation_RejectbyInitiator
    Scenario: Surplus Creation and Reject by Initiator
        Given Check whether the user able Navigate to landing Page of Surplus Declaration
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in Surplus Declaration Page
        Then Check whether the user able to select the Asset Management from the dropdown in Surplus Declaration Page
        Then Check whether the user able to select the operations and maintenance from the dropdown
        Then Check whether the user able to select the Asset Surplus Declaration from the dropdown in Surplus Declaration Page
        Then Check whether the user able to enter Job code in the autocomplete box available in Surplus Declaration Page
        Then Check whether the user able to enter Asset code in the autocomplete box available in Surplus Declaration Page
        Then Check whether user abel to click on Search button on the top right of the Page
        Then Chek whether User able to click on Add Surplus button in the right side of page to add surplus date
        Then Verify whether user able to edit surplus effective from date in the surplus Menu
        Then Verify whether user able to add remarks for the surplus
        Then Verify whether user able to submit the Surplus declaration by clicking on submit button
        Then Verify whether Surplus is created for the asset or not
        Then Verify whether user able to reject the surplus by clicking on cancel icon appearing to right of Status
        Then Check whether user able to enter remarks for cancelling the Surplus
        

    @SurplusCreation_Rejection
    Scenario: Surplus Creation and Rejection
        Given Check whether the user able Navigate to landing Page of Surplus Declaration
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in Surplus Declaration Page
        Then Check whether the user able to select the Asset Management from the dropdown in Surplus Declaration Page
        Then Check whether the user able to select the operations and maintenance from the dropdown
        Then Check whether the user able to select the Asset Surplus Declaration from the dropdown in Surplus Declaration Page
        Then Check whether the user able to enter Job code in the autocomplete box available in Surplus Declaration Page
        Then Check whether the user able to enter Asset code in the autocomplete box available in Surplus Declaration Page
        Then Check whether user abel to click on Search button on the top right of the Page
        Then Chek whether User able to click on Add Surplus button in the right side of page to add surplus date
        Then Verify whether user able to edit surplus effective from date in the surplus Menu
        Then Verify whether user able to add remarks for the surplus
        Then Verify whether user able to submit the Surplus declaration by clicking on submit button
        Then Verify whether Surplus is created for the asset or not
        Then Click on Profile Dropdown icon at top right of the page
        Then Verify whether user able to click on SignOut button in the profile section
        Given Check whether user able to navigate to landing page of Cluster plant manager to Reject the Surplus Request
        Then Filter the recently created surplus by using filter aption available 
        Then Verify whether user able to click on Document number to view details of that Document
        Then Verify whether user able to Reject the request by clicking on Close Icon in the document view page
        Then Verify whether user able to enter remarks for confirmation in popup appeared
        Then Verify whether user able to Click yes for confirmation in popup appeared

        Then Click on Profile Dropdown icon at top right of the page
        Then Verify whether user able to click on SignOut button in the profile section

        Given Check whether the user able Navigate to landing Page of Surplus Declaration
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in Surplus Declaration Page
        Then Check whether the user able to select the Asset Management from the dropdown in Surplus Declaration Page
        Then Check whether the user able to select the operations and maintenance from the dropdown
        Then Check whether the user able to select the Asset Surplus Declaration from the dropdown in Surplus Declaration Page
        Then Check whether the user able to enter Job code in the autocomplete box available in Surplus Declaration Page
        Then Check whether the user able to enter Asset code in the autocomplete box available in Surplus Declaration Page
        Then Check whether user abel to click on Search button on the top right of the Page
        Then Verify whether user able to reject the surplus by clicking on cancel icon appearing to right of Status
        Then Check whether user able to enter remarks for cancelling the Surplus

    @SurplusCreation_Acceptance
    Scenario: Surplus Creation and Acceptance
        Given Check whether the user able Navigate to landing Page of Surplus Declaration
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in Surplus Declaration Page
        Then Check whether the user able to select the Asset Management from the dropdown in Surplus Declaration Page
        Then Check whether the user able to select the operations and maintenance from the dropdown
        Then Check whether the user able to select the Asset Surplus Declaration from the dropdown in Surplus Declaration Page
        Then Check whether the user able to enter Job code in the autocomplete box available in Surplus Declaration Page
        Then Check whether the user able to enter Asset code in the autocomplete box available in Surplus Declaration Page
        Then Check whether user abel to click on Search button on the top right of the Page
        Then Chek whether User able to click on Add Surplus button in the right side of page to add surplus date
        Then Verify whether user able to edit surplus effective from date in the surplus Menu
        Then Verify whether user able to add remarks for the surplus
        Then Verify whether user able to submit the Surplus declaration by clicking on submit button
        Then Verify whether Surplus is created for the asset or not
        Then Click on Profile Dropdown icon at top right of the page
        Then Verify whether user able to click on SignOut button in the profile section
        Given Check whether user able to navigate to landing page of Cluster plant manager to accept the Surplus Request
        Then Filter the recently created surplus by using filter aption available 
        Then Verify whether user able to click on Document number to view details of that Document
        Then Verify whether user able to Accept the request by clicking on Tick Icon in the document view page
        Then Verify whether user able to enter remarks for confirmation in popup appeared
        Then Verify whether user able to Click yes for confirmation in popup appeared

    @Redeployment_Accceptance
    Scenario: Redeployment Creation and Acceptance
        Given Check whether the user able Navigate to landing Page of Surplus Declaration
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in Surplus Declaration Page
        Then Check whether the user able to select the Asset Management from the dropdown in Surplus Declaration Page
        Then Check whether the user able to select the operations and maintenance from the dropdown
        Then Check whether the user able to select the Asset Surplus Declaration from the dropdown in Surplus Declaration Page
        Then Check whether the user able to enter Job code in the autocomplete box available in Surplus Declaration Page
        Then Check whether the user able to enter Asset code in the autocomplete box available in Surplus Declaration Page
        Then Check whether user abel to click on Search button on the top right of the Page
        Then Verify whether user able to click on Asset Code in the drid to view details
        Then Verify whether user able to click on Add Redeployement button
        Then Verify whether user able to select redeployement date
        Then Verify whether user able to add remarks for the surplus
        Then Verify whether user able to submit the Surplus declaration by clicking on submit button

    
    


    
