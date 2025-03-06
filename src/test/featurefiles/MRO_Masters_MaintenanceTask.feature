@Smoke_MRO_Masters_MaintenanceTask
Feature: MRO Masters Maintenance Task 

    Background:
        Given Navigate to Test Environment

    @Verify_the_MRO_ServiceType_Addition
    Scenario: Verify the MRO_Servicetype_Addition
        Given Check whether the user able Navigate to MRO_Masters landing Page
            Then Verify BreadCrumbs before navigating to the MRO_Masters page 
            Then Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters page
            Then Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters page 
            Then Verify BreadCrumbs after navigating to the MRO_Masters page 
            Then Check whether the user able to navigate to the MRO_Masters page 
            Then Check whether the user able to click on the close icon 
            Then Check whether user able to select the Service type field from the dropdown
            Then Check whether the user able to click on the add icon whick is on the right top of the service type table
            Then Verify whether the user able to enter the service type in the service type input field
            Then Check whether the user able to click on the add service type button
            Then Check whether the success popup is displayed or not 


    @Verify_the_MRO_Servicetype_Edit
        Scenario: Verify the MRO_Servicetype_Edit
            Given Check whether the user able Navigate to MRO_Masters landing Page
            Then Verify BreadCrumbs before navigating to the MRO_Masters page 
            Then Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters page
            Then Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters page 
            Then Verify BreadCrumbs after navigating to the MRO_Masters page 
            Then Check whether the user able to navigate to the MRO_Masters page 
            Then Check whether the user able to click on the close icon 
            Then Check whether user able to select the Service type field from the dropdown
            Then Double click on the service type id field in the table to get the recently added service type
            Then Verify whether the user able to click on the edit button to edit the Active type
            Then Click on the save icon to save the changes
            Then Check whether the success popup is displayed or not 
            Then Verify whether the user able to click on the edit button to edit the Active type
            Then Verify whether user able to change the active button to change the status 
            Then Click on the save icon to save the changes
            Then Check whether the success popup is displayed or not 

    @Verify_the_MRO_Task_Addition
        Scenario: Verify the MRO_Task_Addition
            Given Check whether the user able Navigate to MRO_Masters landing Page
            Then Verify BreadCrumbs before navigating to the MRO_Masters page 
            Then Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters page
            Then Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters page 
            Then Verify BreadCrumbs after navigating to the MRO_Masters page 
            Then Check whether the user able to navigate to the MRO_Masters page 
            Then Check whether the user able to click on the close icon 
            Then Check whether user able to select the Task field from the dropdown
            Then Check whether the user able to click on the add icon whick is on the right top of the Task table
            Then Verify whether the user able to enter the Task in the Task input field
            Then Check whether the user able to click on the add Task button
            Then Check whether the success popup is displayed or not 
            Then Check whether the user able to Double click on the Task ID to filter recently created task group
            Then Click on the linking icon to link the Service types to the Task
            Then Check whether user able to view the choose Service Types list 
            Then Click on the service types which are to be linked in the displayed list
            Then Check whether the user able to click on the right chevron icon clicked which are viewd in select the service type field
            Then Check whether user able to view the Selected Service Types list
            Then Check whether the user able to click on the post button which is on the right button 
            Then Check whether the user able to click on the Info icon 
            Then Check whether the user able to view the selected service types when the Info icon is clicked

    @Verify_the_MRO_Task_Edit
        Scenario: Verify the MRO_Task_Edit
            Given Check whether the user able Navigate to MRO_Masters landing Page
            Then Verify BreadCrumbs before navigating to the MRO_Masters page 
            Then Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters page
            Then Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters page 
            Then Verify BreadCrumbs after navigating to the MRO_Masters page 
            Then Check whether the user able to navigate to the MRO_Masters page 
            Then Check whether the user able to click on the close icon 
            Then Check whether user able to select the Task field from the dropdown
            Then Double click on the Task Id field in the table to get the recently added Task
            Then Verify whether the user able to click on the edit button to edit the Active type
            Then Click on the save icon to save the changes
            Then Check whether the success popup is displayed or not 
            Then Verify whether the user able to click on the edit button to edit the Active type
            Then Verify whether user able to change the active button to change the status
            Then Click on the save icon to save the changes
            Then Check whether the success popup is displayed or not


    @Verify_the_MRO_Task_Group_Addition
        Scenario: Verify the MRO_Task_Group_Addition
            Given Check whether the user able Navigate to MRO_Masters landing Page
            Then Verify BreadCrumbs before navigating to the MRO_Masters page 
            Then Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters page
            Then Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters page 
            Then Verify BreadCrumbs after navigating to the MRO_Masters page 
            Then Check whether the user able to navigate to the MRO_Masters page 
            Then Check whether the user able to click on the close icon 
            Then Check whether user able to select the Task_Group field from the dropdown
            Then Check whether the user able to click on the add icon whick is on the right top of the Task_Group table
            Then Verify whether the user able to enter the Task in the Task_Group input field
            Then Check whether the user able to click on the add Task_Group button
            Then Check whether the user able to Double click on the Task Group ID to filter recently created task group
            Then Check whether user able to click on link icon for the recently created task group
            Then Check whether user able to select the task types from the list of tasks
            Then Check whether the user able to click on the right chevron icon clicked which are viewd in select the service type field
            Then Check whether user able to view the Selected Service Types list
            Then Verify whether user able to click on Post button in the Task Group Task Linking popup

    @Verify_the_MRO_Task_Group_Edit
        Scenario: Verify the MRO_Task_Group_Addition
            Given Check whether the user able Navigate to MRO_Masters landing Page
            Then Verify BreadCrumbs before navigating to the MRO_Masters page 
            Then Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters page
            Then Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters page 
            Then Verify BreadCrumbs after navigating to the MRO_Masters page 
            Then Check whether the user able to navigate to the MRO_Masters page 
            Then Check whether the user able to click on the close icon 
            Then Check whether user able to select the Task_Group field from the dropdown
            Then Double click on the Task Group id feild in the table to get the recently added Task
            Then Verify whether the user able to click on the edit button to edit the Active type
            Then Click on the save icon to save the changes
            Then Check whether the success popup is displayed or not 
            Then Verify whether the user able to click on the edit button to edit the Active type
            Then Verify whether user able to change the active button to change the status 
            Then Click on the save icon to save the changes
            Then Check whether the success popup is displayed or not

    @Verify_the_MRO_Service_Frequency_Addition
        Scenario: Verify the MRO_Service_Frequency_Addition
            Given Check whether the user able Navigate to MRO_Masters landing Page
            Then Verify BreadCrumbs before navigating to the MRO_Masters page 
            Then Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters page
            Then Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters page 
            Then Verify BreadCrumbs after navigating to the MRO_Masters page 
            Then Check whether the user able to navigate to the MRO_Masters page 
            Then Check whether the user able to click on the close icon
            Then Check whether user able to select the Service Frequency field from the dropdown
            Then Check whether the user able to click on the add icon which is on the right top of the Service Frequency table
            Then Verify whether user able to select UoM type in the input field available
            Then Verify whether user able to enter value in the input field available
            Then Check whether user able to click on Add Service Frequency button
            Then Check whether user able to click on Filter icon to filter recently created entry
            Then Verify whether user able to enter the value in the input field to filter recently created entry
            Then Check whether the details entered is there in the grid

    @Verify_the_MRO_Service_Frequency_Edit
        Scenario: Verify the MRO_Service_Frequency_Edit
            Given Check whether the user able Navigate to MRO_Masters landing Page
            Then Verify BreadCrumbs before navigating to the MRO_Masters page 
            Then Check whether the user able to click on the Access Based Menu button to get into  the MRO_Masters page
            Then Check whether the user able to select the Asset Management from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the Operations_and_Maintenance from the dropdown to get into the MRO_Masters page 
            Then Check whether the user able to select the MRO_Masters from the dropdown to get into the MRO_Masters page 
            Then Verify BreadCrumbs after navigating to the MRO_Masters page 
            Then Check whether the user able to navigate to the MRO_Masters page 
            Then Check whether the user able to click on the close icon
            Then Check whether user able to select the Service Frequency field from the dropdown
            Then Check whether user able to click on Filter icon to filter recently created entry
            Then Verify whether user able to enter the value in the input field to filter recently created entry
            Then Verify whether the user able to click on the edit button to edit the Active type
            Then Click on the save icon to save the changes
            Then Check whether the success popup is displayed or not 
            Then Verify whether the user able to click on the edit button to edit the Active type
            Then Verify whether user able to chance the active button to change the status 
            Then Click on the save icon to save the changes
            Then Check whether the success popup is displayed or not
