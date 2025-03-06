@Smoke_Dehiring
Feature: Dehire process

  Background: 
    Given Navigate to Test Environment

  @Verify_Dehiring
  Scenario: Verify the Dehiring Page
    Given Check whether the user able Navigate to Asset De-Hire landing Page
    Then Click on the Asset De-Hire MenuBar and go to Asset Management>Planning & Procurement>Dehiring
    Then Check whether the user is able to select the Asset De-Hirejob code from the drop down

  #  Then Check the popup

    Then Check whether the user is able to click the Asset De-Hire Go Button
    Then Check whether the user is able to click on show drop down menu and select the value
    Then Check whether the user is able click on the Check box of Reason to Hire
    Then Verify Whether the user is able to click on the input field and enter 
    Then Check whether the user is able to click on the action icon


