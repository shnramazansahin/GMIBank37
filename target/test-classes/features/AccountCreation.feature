@CreateAccount
Feature: Account Creation feature

  Background:
    Given User goes to login page
    When user enters a valid username and password
    Then User logs in

  Scenario Outline: User should be able to create an account
    When User clicks on my operations
    And  User selects manage account
    When User clicks on create a new account
    And User provides a description "<description>"
    And User provides balance "<balance>"
    And User choose account type "<type>"
    And  User provides the account status "<status>"
    And User  choose a valid date for creation date
    Then User saves the account
    Examples:
      | description               | balance | type     | status |
      | Checking account for user | 10000   | CHECKING | ACTIVE |

