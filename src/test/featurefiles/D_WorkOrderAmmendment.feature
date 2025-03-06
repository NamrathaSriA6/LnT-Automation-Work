@SmokeWorkOrderAmendmant
Feature:Work Order Amendent

    Background:
        Given Navigate to Test Environment
    
    @WOAmendment
    Scenario: Making Amendment in Work Order
        Given Verify weather User able to navigate to Amendment Request page
        Then Verify BreadCrumbs before navigating to the Amendment Request page
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether the user able to select the Planning & Procurement from the dropdown
        Then Check weather user able to select Amendment Request from the dropdown
        Then Verify BreadCrumbs after navigating to the Amendment Request page
        Then Verify weather user able to enter input in the Job field
        Then Enter the required job in the autocomplete box available in top left corner of Amendment Request page
        Then Verify weather Search button is enabled or not in the Amendment Request Page
        Then Verify weather user able to click on filter icon above the grid
        Then Filter the required job field to top in the Amendment Request page
        Then Verify weather user able to click on plus icon for creating an amendment under the actions section
        Then Verify weather user able to edit Required from date in the Amendment Creation page
        Then Verify weather user able to edit Required to date in the Amendment Creation page
        Then Verify weather user able to edit Equipment description in Amendment Creation page
        Then Verify weather user able to edit Capacity in Amendment Creation page
        Then Verify weather user able to edit Quantity in Amendment Creation page
        Then Verify weather user able to edit minimum age in Amendment Creation page
        Then Verify weather user able to edit maximum age in Amendment Creation page
        Then Verify weather user able to edit Make description in Amendment Creation page
        Then Verify weather user able to edit Model Description in Amendment Creation page
        Then Verify weather user able to edit Reason for Hiring in Amendment Creation page
        Then Verify weather user able to edit Scope of work in Amendment Creation page
        Then Verify weather user able to edit Specific Requirements in Amendment Creation page
        Then Verify weather user able to edit Scope Of Work Qty per Equipment in Amendment Creation page
        Then Verify weather user able to edit Duration in Amendment Creation page
        Then Verify weather user able to edit Worktype in Amendment Creation page
        Then Verify weather user able to edit Operator terms in Amendment Creation page
        Then Verify weather user able to edit no of Shifts in Amendment Creation page
        Then Verify weather user able to edit Shift hours in Amendment Creation page
        Then Verify weather user able to edit Additional operators in Amendment Creation page
        Then Verify weather user able to edit Helpers in Amendment Creation page
        Then Verify weather user able to edit Claibable from client field in Amendment Creation page
        Then Verify weather user able to edit Shift timings in Amendment Creation page
        Then Verify weather user able to edit Vendor in Amendment Creation page
        Then Verify weather user able to Click on Save and next button in Amendment Creation page
        Then Verify weather user Edit Hire charges in the Commercials section in Amendment Creation page
        Then Verify weather User able to edit OT Charges in commercials section
        Then Verify weather User able to edit OT Expected hours per month in OT Charges popup appeared
        Then Verify weather User able to enter Operator Amendment Quantity in the Commercials section
        Then Verify weather User able to enter Additional Operator Amendment Quantity in the Commercials section
        Then Verify weather User able to enter Helper Amendment Quantity in the Commercials section
        Then Verify weather User able to enter Additional Helper Amendment Quantity in the Commercials section
        Then Verify weather User able to enter Accomodation Amendment Quantity in the Commercials section
        Then Verify weather User able to enter Mobilisation Amendment Quantity in the Commercials section
        Then Verify weather User able to enter DeMobilisation Amendment Quantity in the Commercials section
        Then Verify weather new section is opening after clicking on Save And Next in Commercials page
        Then Verify weather new section is opening after clicking on Save And Next in Other terms page
        Then Verify weather new section is opening after clicking on Save And Next in Material Linking page
        Then Verify weather tax details are displaying correctly in the Tax section
        Then Verify weather All Validations are passed in SOP Validations
        