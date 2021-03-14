@UserActivation
Feature: Activate user feature

  Background:
    Given User goes to login page

Scenario: User activation by admin
Given User logs in as an admin
When User clicks on administration dropdown
When User clicks on the user management button
When User activates the current customer
Then User signs out


