@Smoke_Logsheet
Feature:Logsheet Generation
    Background:
        Given Navigate to Test Enviroment of logsheet Page
    
    @Logsheet_Creation_DayBased
    Scenario:Generating Logsheet for particular Asset using day based logic
        Given Check weather user able to navigate to landing page of Logsheet
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in LogSheet page
        Then Check whether the user able to select the Asset Management from the dropdown in LogSheet page
        Then Check whether the user able to select the operations and maintenance from the dropdown in LogSheet page
        Then Check whether the user able to select the Log Sheet from the dropdown in LogSheet page
        Then Verify after selecting Plant Hire Request and Confirmation it is Redirecting to PHRS page in LogSheet page
        Then After LogSheet page opened verify the Title of Logsheet page in LogSheet page
        Then Verify weather Job autocomplete box is visible in the Page
        Then Verify weather user able to enter required job in field which is poped on opening the page
        Then Verify weather user able to enter Asset Code in the autocomplete box available in the top left corner of page
        Then Verify weather User able to click on Arrow to the right of Date input
        Then Verify that Asset details are displaying after clicking on Go Arrow
        Then Verify the details of Logsheet displayed below the graph on the page
        Then Click on Create New LogSheet Button available on the top right of the Page
        Then Verify user able to enter End Reading in the input field in the LogSheet Creation page
        Then Verify user able to enter working hours below the End Reading in the LogSheet Creation page
        Then Verify user able to enter Idle hours below the start Reading in the LogSheet Creation page
        Then Verify user able to enter Breakdown hours below the Working Hours in the LogSheet Creation page
        Then Verify weather User able to click on Fuel Entry popup in the Fuel Section in the LogSheet Creation page
        Then Verify weather user able to enter Meter Reading in the Fuel Entry Popup
        Then Verify weather user able to enter quantity in the Fuel Entry Popup
        Then Verify weather user able to click on post button in the Fuel Entry Popup
        Then Verify weather user able to enter production quantity in the input field
        Then Verify weather user able to click on Submit button in the LogSheet Creation page

    @Logsheet_Creation_DayBased_NegativeCases
    Scenario: Validations for Logsheet Daybased page
        Given Check weather user able to navigate to landing page of Logsheet
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in LogSheet page
        Then Check whether the user able to select the Asset Management from the dropdown in LogSheet page
        Then Check whether the user able to select the operations and maintenance from the dropdown in LogSheet page
        Then Check whether the user able to select the Log Sheet from the dropdown in LogSheet page
        Then Verify after selecting Plant Hire Request and Confirmation it is Redirecting to PHRS page in LogSheet page
        Then After LogSheet page opened verify the Title of Logsheet page in LogSheet page
        Then Verify weather Job autocomplete box is visible in the Page
        Then Verify weather user able to enter required job in field which is poped on opening the page
        Then Verify weather user able to enter Asset Code in the autocomplete box available in the top left corner of page
        Then Verify weather User able to click on Arrow to the right of Date input
        Then Verify that Asset details are displaying after clicking on Go Arrow
        Then Verify the details of Logsheet displayed below the graph on the page
        Then Click on Create New LogSheet Button available on the top right of the Page
        Then Verify what will happen if we submit without giving the End Reading
        Then Verify the limit of working hours by giving a large value than 24 hours
        Then Verify the limit of Idle hours by giving a large value than 24 hours
        Then Verify the limit of Breakdown hours by giving a large value than 24 hours
        Then Verify the total limit of hours by giving work Breakdown idle hours greater than 24hrs
        Then Verify what will happen if we submit without giving Production Quantity
        Then Verify weather fuel quantity is mandatory field in logsheet page


    @Logsheet_Creation_TimeBased
    Scenario: Generating Logsheet for particular Asset using time based logic
        Given Check weather user able to navigate to landing page of Logsheet
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in LogSheet page
        Then Check whether the user able to select the Asset Management from the dropdown in LogSheet page
        Then Check whether the user able to select the operations and maintenance from the dropdown in LogSheet page
        Then Check whether the user able to select the Log Sheet from the dropdown in LogSheet page
        Then Verify after selecting Plant Hire Request and Confirmation it is Redirecting to PHRS page in LogSheet page
        Then After LogSheet page opened verify the Title of Logsheet page in LogSheet page
        Then Verify weather Job autocomplete box is visible in the Page
        Then Verify weather user able to enter required job in field which is poped on opening the page
        Then Verify weather user able to enter Asset Code in the autocomplete box available in the top left corner of page
        Then Verify weather User able to click on Arrow to the right of Date input
        Then Verify that Asset details are displaying after clicking on Go Arrow
        Then Verify the details of Logsheet displayed below the graph on the page
        Then Click on Create New LogSheet Button available on the top right of the Page
        Then Verify weather user able to click on Timebased Button on top left before the Asset Code
        Then Verify weather user able to confirm the popup appeared by clicking on Yes
        Then Verify weather user able to add Work Hours by clicking the Work button 
        Then Verify user able to add Start Time in Work Hours Section
        Then Verify weather user able to add End Time in Work Hours Section
        Then Verify weather user able to Save the Work Hours by clicking on Save Icon under Actions
        Then Verify weather user able to add Idle Hours by clicking the Idle button 
        Then Verify weather user able to add End Time in Idle Hours Section
        Then Verify weather user able to Save the Idle Hours by clicking on Save Icon under Actions
        Then Verify weather user able to add Breakdown Hours by clicking the Breakdown button 
        Then Verify weather user able to add End Time in Breakdown Hours Section
        Then Verify weather user able to Save the Breakdown Hours by clicking on Save Icon under Actions
        Then Verify weather user able to Submit the details by clicking on Submit button at bottom of the page

    @Logsheet_Creation_TimeBased_NegativeCases
    Scenario:Validations for LogSheet TimeBased page
        Given Check weather user able to navigate to landing page of Logsheet
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner in LogSheet page
        Then Check whether the user able to select the Asset Management from the dropdown in LogSheet page
        Then Check whether the user able to select the operations and maintenance from the dropdown in LogSheet page
        Then Check whether the user able to select the Log Sheet from the dropdown in LogSheet page
        Then Verify after selecting Plant Hire Request and Confirmation it is Redirecting to PHRS page in LogSheet page
        Then After LogSheet page opened verify the Title of Logsheet page in LogSheet page
        Then Verify weather Job autocomplete box is visible in the Page
        Then Verify weather user able to enter required job in field which is poped on opening the page
        Then Verify weather user able to enter Asset Code in the autocomplete box available in the top left corner of page
        Then Verify weather User able to click on Arrow to the right of Date input
        Then Verify that Asset details are displaying after clicking on Go Arrow
        Then Verify the details of Logsheet displayed below the graph on the page
        Then Click on Create New LogSheet Button available on the top right of the Page
        Then Verify weather user able to click on Timebased Button on top left before the Asset Code
        Then Verify weather user able to confirm the popup appeared by clicking on Yes
        Then Verify weather Start and End Reading can be same for Work hours in time based logic
        Then Verify weather End Reading can be lower than Start Reading in time based logic

    
