@date
Feature: account creation
  Scenario Outline: choosing a date
    Given user on the stated page "login page"
    When verifys the cancel option
    When user enters  valid username "<username>"
    When user enters valid password "<password>"
    And user clicks on the sign in button
    When user clicks on my operation and choose manage account
    When user click on create a new account
    When user provides description balance
    When  user choose account type and status
    When user  choose a valid date
    Examples:
      |username       |password |
      |t37employee |12345As!  |


