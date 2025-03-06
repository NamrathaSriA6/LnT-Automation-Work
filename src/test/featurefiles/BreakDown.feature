@BreakDownEntry
Feature:BreakDownEntry process

  Background: 
      Given Navigate to Test Environment

  @Verify_Break_Down_Entry_Approve
  Scenario: Verify the BreakDownEntry process
      Given Check whether the user able Navigate to the landing Page of BreakDownEntry
      Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
      Then Check whether the user able to select the Asset Management from the dropdown
      Then Check whether user able to Click on the Operations and Maintenance
      Then Check whether user able to Click on the Break down entry
      Then Verify whether user able to Click on the Break down Job and the enter the code
      Then Check  whether the user is able to click on the Assest And select the Assest 
      Then Check Whether the user is able to click on the Break Down Search Button
      Then Check Whether the user is able to click on the Add Button for adding Break Down
      Then check Whether the user is able to click on the Break Down Toggle Button
      Then verify Whether the user is able to click on the Break Down Type and able to choose the option 
      Then Verify Whether the user is able to click on the BreakDown time
      Then Check Whether the user is able to click on the Break Down FROM date and able to pick the date 
      Then Verify  Whether the user is able to click on the Nature of the Defect and able to choose the option
      Then Check Whether the user is able to click on the exp Comminissioning date and able to click the date
      Then Verify Whether the user is able to click on the Exp Commissioning time
      Then Verify Whether the user is able to click on the Remarks input and enter the remarks
      Then Verify whether user able to click on submit to save the given details 
      Then Verify whether user able to click on Detailed Estimation Toggle at top right of the page 
      Then Verify whether user able to click on Failure Investigation toggle 
      Then Verify whether user able to enter Causes of Failure in the textarea available
      Then Verify whether user able to click on Sub Assembly toggle to the right of Failure Investigation toggle
      Then Verify whether user able to enter Sub Assembly in the sub assembly auto complete box available
      Then Verify whether user able to enter Agency name in the agency name auto complete box available
      Then Verify whether user able to enter Nature of repair in the input field available 
      Then Verify whether user able to enter spares cost in the iput field available
      Then Verify whether user able to enter Labour cost in the iput field available
      Then Verify whether user able to enter Oil cost in the iput field available
      Then Verify whether user able to enter Consumable cost in the iput field available
      Then Verify whether user able to enter agency repairs cost in the iput field available
      Then Verify whether user able to enter Others cost in the iput field available
      Then Verify whether user able to click on clear the details entered by clicking on clear button available
      Then Verify whether after clicking on clear button clears the details entered
      ## Enter the details again 
      Then Verify whether user able to enter Sub Assembly in the sub assembly auto complete box available
      Then Verify whether user able to enter Agency name in the agency name auto complete box available
      Then Verify whether user able to enter Nature of repair in the input field available 
      Then Verify whether user able to enter spares cost in the iput field available
      Then Verify whether user able to enter Labour cost in the iput field available
      Then Verify whether user able to enter Oil cost in the iput field available
      Then Verify whether user able to enter Consumable cost in the iput field available
      Then Verify whether user able to enter agency repairs cost in the iput field available
      Then Verify whether user able to enter Others cost in the iput field available
      Then Verify whether user able to save the datails by clicking on Save button
      Then Verify whether the details entered are displayed in the below in a tabular format
      Then Verify whether user able to click on Major Spares toggle button
      Then Verify whether user able to enter Materials details in tha auto complete box available
      Then Verify whether user able to enter Part No in the input field available
      Then Verify whether user able to enter Part name in the input field available
      Then Verify whether user able to enter Quantity in the input field available
      Then Verify whether user able to enter Amount in the input field available
      Then Verify whether user able to enter Remarks in the textarea field available
      Then Verify whether user able to save the datails by clicking on Save button
      Then Verify whether user able to submit the details by clicking on Submit button available at bottom of the page
      Then Capture the DER number generated from the popup appeared after submitting
      Then Confirm the submission by clicking on OK button in the popup appeared

      Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
      Then Check whether user able to click on Access and Master from the dropdown
      Then Check whether user able to click on Access Control from the dropdown
      Then Check whether user able to click on WorkFlow from the dropdown
      Then Check whether user able to click on WorkBench from the dropdown
      Then Verify Whether user able to click on filter icon to filter the recently created BreakDownEntry
      Then Verify whether user able to enter the DER number generated in the DER input field in the grid
      Then Verify whether user able to click on DER Number to approve the BreakDownEntry
      Then Verify whether user able to click on Approve Icon at top right of page to Approve the BreakDownEntry


  @Comminissioning_for_Approved_BreakDownEntry
  Scenario: Adding Comminissioning for BreakDownEntry Approved
      Given Check whether the user able Navigate to the landing Page of BreakDownEntry
      Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
      Then Check whether the user able to select the Asset Management from the dropdown
      Then Check whether user able to Click on the Operations and Maintenance
      Then Check whether user able to Click on the Break down entry
      Then Verify whether user able to Click on the Break down Job and the enter the code
      Then Check  whether the user is able to click on the Assest And select the Assest 
      Then Check Whether the user is able to click on the Break Down Search Button
      Then Verify Whether user able to click on filter icon to filter the recently created BreakDownEntry
      Then Verify whether user able to enter DER number in the input fleld
      Then Verify whether user able lo click on that entry to add Comminissioning
      Then Verify whether user able to click on Commissioning Toggle at top right side of page
      Then Verify whether user able to enter Commissioning date in the field available
      Then Verify whether user able to enter Next Maintenance date in the field available
      Then Verify whether user able to select OWN at by whom the work is done
      Then Verify whether Vendor details field is editable when OWN is selected at previoues step
      Then Verify whether user able to select Agency at by whom the work is done
      Then Verify whether Vendor details field is editable when Agency is selected at previoues step
      Then Verify whether user able to select Both at by whom the work is done
      Then Verify whether Vendor details field is editable when Both is selected at previoues step
      Then Verify whether user able to enter Work Done details in the textarea available
      Then Verify whether user able to enter Remarks in the text area available
      Then Verify whethert user able to enter P and M incharge details in the autocomplete box available
      Then Verify whether user able to Submit the commissioning details by clicking on Submit button at bottom of the page
      
    @Verify_Break_Down_Entry_Reject
    Scenario: Verify the BreakDownEntry process Rejection Flow
        Given Check whether the user able Navigate to the landing Page of BreakDownEntry
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether user able to Click on the Operations and Maintenance
        Then Check whether user able to Click on the Break down entry
        Then Verify whether user able to Click on the Break down Job and the enter the code
        Then Check  whether the user is able to click on the Assest And select the Assest 
        Then Check Whether the user is able to click on the Break Down Search Button
        Then Check Whether the user is able to click on the Add Button for adding Break Down
        Then check Whether the user is able to click on the Break Down Toggle Button
        Then verify Whether the user is able to click on the Break Down Type and able to choose the option 
        Then Check Whether the user is able to click on the Break Down FROM date and able to pick the date 
        Then Verify Whether the user is able to click on the BreakDown time for Rejectflow
        Then Verify  Whether the user is able to click on the Nature of the Defect and able to choose the option
        Then Check Whether the user is able to click on the exp Comminissioning date and able to click the date
        Then Verify Whether the user is able to click on the Exp Commissioning time
        Then Verify Whether the user is able to click on the Remarks input and enter the remarks
        Then Verify whether user able to click on submit to save the given details 
        Then Verify whether user able to click on Detailed Estimation Toggle at top right of the page 
        Then Verify whether user able to click on Failure Investigation toggle 
        Then Verify whether user able to enter Causes of Failure in the textarea available
        Then Verify whether user able to click on Sub Assembly toggle to the right of Failure Investigation toggle
        Then Verify whether user able to enter Sub Assembly in the sub assembly auto complete box available
        Then Verify whether user able to enter Agency name in the agency name auto complete box available
        Then Verify whether user able to enter Nature of repair in the input field available 
        Then Verify whether user able to enter spares cost in the iput field available
        Then Verify whether user able to enter Labour cost in the iput field available
        Then Verify whether user able to enter Oil cost in the iput field available
        Then Verify whether user able to enter Consumable cost in the iput field available
        Then Verify whether user able to enter agency repairs cost in the iput field available
        Then Verify whether user able to enter Others cost in the iput field available
        Then Verify whether user able to click on clear the details entered by clicking on clear button available
        Then Verify whether after clicking on clear button clears the details entered
        ## Enter the details again 
        Then Verify whether user able to enter Sub Assembly in the sub assembly auto complete box available
        Then Verify whether user able to enter Agency name in the agency name auto complete box available
        Then Verify whether user able to enter Nature of repair in the input field available 
        Then Verify whether user able to enter spares cost in the iput field available
        Then Verify whether user able to enter Labour cost in the iput field available
        Then Verify whether user able to enter Oil cost in the iput field available
        Then Verify whether user able to enter Consumable cost in the iput field available
        Then Verify whether user able to enter agency repairs cost in the iput field available
        Then Verify whether user able to enter Others cost in the iput field available
        Then Verify whether user able to save the datails by clicking on Save button
        Then Verify whether the details entered are displayed in the below in a tabular format
        Then Verify whether user able to click on Major Spares toggle button
        Then Verify whether user able to enter Materials details in tha auto complete box available
        Then Verify whether user able to enter Part No in the input field available
        Then Verify whether user able to enter Part name in the input field available
        Then Verify whether user able to enter Quantity in the input field available
        Then Verify whether user able to enter Amount in the input field available
        Then Verify whether user able to enter Remarks in the textarea field available
        Then Verify whether user able to save the datails by clicking on Save button
        Then Verify whether user able to submit the details by clicking on Submit button available at bottom of the page
        Then Capture the DER number generated from the popup appeared after submitting
        Then Confirm the submission by clicking on OK button in the popup appeared

        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether user able to click on Access and Master from the dropdown
        Then Check whether user able to click on Access Control from the dropdown
        Then Check whether user able to click on WorkFlow from the dropdown
        Then Check whether user able to click on WorkBench from the dropdown
        Then Verify Whether user able to click on filter icon to filter the recently created BreakDownEntry
        Then Verify whether user able to enter the DER number generated in the DER input field in the grid
        Then Verify whether user able to click on DER Number to Reject the BreakDownEntry
        Then Verify whether user able to click on Reject Icon at top right of page to Reject the BreakDownEntry
        Then Verify Whether user able to enter remarks for rejecting the BreakDown entry
        Then Verify whether user able to click on Yes button to confirm Rejection

    @Make_Changes_Basedon_Rejection_Remarks
    Scenario: Making Changes based on the remarks given while rejecting BreakDown
        Given Check whether the user able Navigate to the landing Page of BreakDownEntry
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether user able to Click on the Operations and Maintenance
        Then Check whether user able to Click on the Break down entry
        Then Verify whether user able to Click on the Break down Job and the enter the code
        Then Check  whether the user is able to click on the Assest And select the Assest 
        Then Check Whether the user is able to click on the Break Down Search Button
        Then Verify Whether user able to click on filter icon to filter the recently created BreakDownEntry
        Then Verify whether user able to enter DER number in the input fleld
        Then Verify whether user able lo click on that entry to make Changes
        Then Verify whether user able to click on Detailed Estimation Toggle at top right of the page
        Then Verify the Rejection Remarks and make necessary Changes and submit again
        Then Verify whether user able to click on Sub Assembly toggle to the right of Failure Investigation toggle
        Then Verify whether user able to click on Major Spares toggle button
        Then Verify whether user able to submit the details by clicking on Submit button available at bottom of the page
        Then Confirm the submission by clicking on OK button in the popup appeared
        
        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether user able to click on Access and Master from the dropdown
        Then Check whether user able to click on Access Control from the dropdown
        Then Check whether user able to click on WorkFlow from the dropdown
        Then Check whether user able to click on WorkBench from the dropdown
        Then Verify Whether user able to click on filter icon to filter the recently created BreakDownEntry
        Then Verify whether user able to enter the DER number generated in the DER input field in the grid
        Then Verify whether user able to click on DER Number to approve the BreakDownEntry
        Then Verify whether user able to click on Approve Icon at top right of page to Approve the BreakDownEntry

        Then Check whether the user able to click on the Access Based Menu Hamburger Icon on top left corner
        Then Check whether the user able to select the Asset Management from the dropdown
        Then Check whether user able to Click on the Operations and Maintenance
        Then Check whether user able to Click on the Break down entry
        Then Verify whether user able to Click on the Break down Job and the enter the code
        Then Check  whether the user is able to click on the Assest And select the Assest 
        Then Check Whether the user is able to click on the Break Down Search Button
        Then Verify Whether user able to click on filter icon to filter the recently created BreakDownEntry
        Then Verify whether user able to enter DER number in the input fleld
        Then Verify whether user able lo click on that entry to add Comminissioning
        Then Verify whether user able to click on Commissioning Toggle at top right side of page
        Then Verify whether user able to enter Commissioning date in the field available
        Then Verify whether user able to enter Next Maintenance date in the field available
        Then Verify whether user able to select OWN at by whom the work is done
        Then Verify whether Vendor details field is editable when OWN is selected at previoues step
        Then Verify whether user able to select Agency at by whom the work is done
        Then Verify whether Vendor details field is editable when Agency is selected at previoues step
        Then Verify whether user able to select Both at by whom the work is done
        Then Verify whether Vendor details field is editable when Both is selected at previoues step
        Then Verify whether user able to enter Work Done details in the textarea available
        Then Verify whether user able to enter Remarks in the text area available
        Then Verify whethert user able to enter P and M incharge details in the autocomplete box available
        Then Verify whether user able to Submit the commissioning details by clicking on Submit button at bottom of the page