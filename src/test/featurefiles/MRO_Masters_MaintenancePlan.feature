@Smoke_MRO_Masters_MaintenancePlan
Feature: MRO Masters Maintenance Plan RMC Creation 

    Background:
        Given Navigate to Test Environment

    @Verify_the_MRO_Maintenance_Plan_CreateNewSourceRMC
    Scenario: Verify the MRO Maintenance Plan
        Given Check whether the user able Navigate to MRO_Masters MaintenancePlan landing Page
            Then Verify BreadCrumbs before navigating to the MRO_Masters MaintenancePlan page 
            Then Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters MaintenancePlan page
            Then Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters MaintenancePlan page 
            Then Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters MaintenancePlan page 
            Then Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters MaintenancePlan page
            Then Verify BreadCrumbs after navigating to the MRO_Masters MaintenancePlan page
            Then Verify wheather the user able to click on the Create New Source RMC Plus icon
            Then Check wheather the user able to get the RMC Creation pop up to create the RMC
            Then Check wheather the user able to click on the Asset group feild 
            And  Select the Asset group from the dropdown which will be come after clicking the field
            Then Check wheather the user able to click on the Asset feild 
            And  Select the Asset from the dropdown which will be come after clicking the field
            Then Check wheather the user able to click on the Frequency Type feild 
            And  Select the Frequency Type from the dropdown which will be come after clicking the field
            Then Click on the Create RMC button after selecting all the fields
            Then Check whether the user able to view the success popup after approving the approval remarks in Maintenance_Plan page
            Then Printing the text in the success popup after approval in Maintenance_Plan page
            Then Click on the Ok button in the success popup for the next process in Maintenance_Plan page


    @Verify_the_MRO_Maintenance_Plan_CreateRMC
    Scenario: Verify the MRO Maintenance Plan
        Given Check whether the user able Navigate to MRO_Masters MaintenancePlan landing Page
            Then Verify BreadCrumbs before navigating to the MRO_Masters MaintenancePlan page 
            Then Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters MaintenancePlan page
            Then Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters MaintenancePlan page 
            Then Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters MaintenancePlan page 
            Then Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters MaintenancePlan page
            Then Verify BreadCrumbs after navigating to the MRO_Masters MaintenancePlan page
            Then Check whether the user able to click on the Action icon 
            Then Check wheather the user able to get the RMC Creation pop up to create the RMC
            Then Check wheather the user able to click on the Frequency Type feild 
            And  Select the Frequency Type from the dropdown which will be come after clicking the field
            Then Print the details of the CreatRMC popup in the console
            Then Click on the Create RMC button after selecting all the fields
            Then Check whether the user able to view the success popup after approving the approval remarks in Maintenance_Plan page
            Then Printing the text in the success popup after approval in Maintenance_Plan page
            Then Click on the Ok button in the success popup for the next process in Maintenance_Plan page


    @Verify_the_MRO_Maintenance_Plan_RMCCreated_Group
    Scenario: Verify the MRO Maintenance Plan
        Given Check whether the user able Navigate to MRO_Masters MaintenancePlan landing Page
            Then Verify BreadCrumbs before navigating to the MRO_Masters MaintenancePlan page 
            Then Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters MaintenancePlan page
            Then Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters MaintenancePlan page 
            Then Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters MaintenancePlan page 
            Then Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters MaintenancePlan page
            Then Verify BreadCrumbs after navigating to the MRO_Masters MaintenancePlan page
            Then Check whether the user able to Click on the created button
            Then Verify whether the user able to click on the edit button to edit the Active type in Maintenance_Plan page
            Then Click on the save icon to save the changes in Maintenance_Plan page
            Then Check whether the success popup is displayed or not in Maintenance_Plan page
            Then Verify whether the user able to click on the edit button to edit the Active type in Maintenance_Plan page
            Then Verify whether user able to change the active button to change the status in Maintenance_Plan page 
            Then Click on the save icon to save the changes in Maintenance_Plan page
            Then Check whether the success popup is displayed or not in Maintenance_Plan page
            Then Check whether the user able to click on the RMC to check the details in Maintenance_Plan page
            Then Click on the info icon to check the details of that RMC
            Then Check whether the user able to click on the back button to go to the previous page

    @Verify_the_MRO_Maintenance_Plan_RMCCreated_Asset
    Scenario: Verify the MRO Maintenance Plan
        Given Check whether the user able Navigate to MRO_Masters MaintenancePlan landing Page
            Then Verify BreadCrumbs before navigating to the MRO_Masters MaintenancePlan page 
            Then Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters MaintenancePlan page
            Then Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters MaintenancePlan page 
            Then Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters MaintenancePlan page 
            Then Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters MaintenancePlan page
            Then Verify BreadCrumbs after navigating to the MRO_Masters MaintenancePlan page
            Then Check whether the user able to Click on the created button
            Then Check whether the user able to Click on the Asset button
            Then Verify whether the user able to click on the edit button to edit the Active type in Maintenance_Plan page
            Then Click on the save icon to save the changes in Maintenance_Plan page
            Then Check whether the success popup is displayed or not in Maintenance_Plan page 
            Then Verify whether the user able to click on the edit button to edit the Active type in Maintenance_Plan page
            Then Verify whether user able to change the active button to change the status in Maintenance_Plan page 
            Then Click on the save icon to save the changes in Maintenance_Plan page
            Then Check whether the success popup is displayed or not in Maintenance_Plan page
        
            