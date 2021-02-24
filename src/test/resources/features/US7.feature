@invalid
Feature:invalid credentials
  Scenario Outline: System should not allow to make updates with invalid credentials
    When user navigate to "http://www.gmibank.com/"
    Then click register
    And user enter the "<email>" and see  "<error message>"
     Examples:
     |email          |error message        |
     |12345gmail.com |This field is invalid|
     |12345@gmailcom |This field is invalid|
     |Aysegmail.com  |This field is invalid|
     |Ayse@gmailcom  |This field is invalid|




  #Email id cannot contain just digits or chars without "@" sign or "." extension
  #There should not be an option of any other language other than English or Turkish