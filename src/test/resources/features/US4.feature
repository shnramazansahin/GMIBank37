@US4
Feature:
  Scenario Outline: login page should be accessbile with  valid credantials
    Given user on the stated page "login page"
    When verifys the cancel option
    When user enters  valid username "<username>"
    When user enters valid password "<password>"
    And user clicks on the sign in button
    Then user verifys option "success message"
    Examples:  valid data
      |username       |password |
      |wallstreetbets |1234As$  |
