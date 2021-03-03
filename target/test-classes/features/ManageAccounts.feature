@CreateAccount
Feature: account managing
  Background: login
    Given user is on the application website
  Scenario Outline:creating account
    When user enters  valid username "<username>"
    When user enters valid password "<password>"
    And user clicks on the sign in button
    When user clicks on my operation and choose manage account
    Then user click on create a new account button
    When user provides description as  "<description>"
    When user provides balance as "<balance>"
    When user provides account type as "<type>"
    When  user choose account status as "<account_status>"
    Then user user saves the changes
    Examples:

      |username    |password |description |balance |type |account_status |
      |t37employee |12345As! |saving account 1| 1000|SAVING|ACTIVE  |
      |t37employee |12345As! |checking account2| 12000|CHECKING|ACTIVE  |


