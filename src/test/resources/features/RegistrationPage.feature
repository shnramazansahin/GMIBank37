@RegPage

Feature:Registration page feature

  Background:
  Given User is on the home page
    And User navigates to registration page

  @ValidCredentials
  Scenario:Register with valid credentials
    Given user enters a  9 digit SSN "SSN"
    When user enters a name"name"
    When user enter a lastname "lastname"
    When user enter an address "address" with zip
    When user enter a 10 digits phone "phone" number
    When user create a username "username" without digits
    When user enter a email "email" address
    When user enter a valid password "password"
    When user reenter the "confirmation password"
    When  click on the register
    Then verify the success message


  @InvalidCredentials
  Scenario Outline: Register with invalid credentials
    Given User enters SSN "<SSN>"
    When User enters a name as "<name>"
    When User enter a lastname as "<lastname>"
    When User enter an address "<address>" with zip
    When User enter a 10 digits phone "<phone>" number
    When User create a username "<username>" without digits
    When User enter a email "<email>" address
    When User enter a valid password "<password>"
    When User reenter the "<confirmation password>"
    When  click on the register
    Then verify the invalid feedback
    Examples:
      |SSN|name|lastname|address|phone|username|email|password|confirmation password|
      |   |     |       |       |     |        |      |       |                     |
      |343-78-9345|Filiz|   |Turkey|123-385-2354|User|usertestr@gmail.com|Abcds!|Abcds!|
      |343-78-9345|Filiz|   |Turkey|123-385-2354|User|usertestr@gmail.com|      |Abcds!|
     # |343-78-9345|Filiz|Abcde |      |      |User|usertestr@gmail.com|Abcds!|Abcds!|  Buggg


   @InvalidSSN
   Scenario Outline: SSN number cannot be of any chars, spec chars except "-"
     When User enters invalid as ssn "<SSN>"
     Then System should display "Your SSN is invalid"
     Examples:
     |  SSN        |
     |999-75-7654  |
     |000-76-5670  |
     |abc-65-7652  |
     |765987897    |
     |123-44-444444|

  @InvalidPhoneNumber
  Scenario Outline: Mobile phone number cannot be of any chars nor spec chars except "-"
    When User enter invalid mobile "<phone number>"
    Then System should display this message "Your mobile phone number is invalid"
    Examples:
    |phone number     |
    |832555-5555      |
    |abc-cde-efgh     |
   # |832-555-55555555 | Bug
    |83$-555-5555     |
   # |000-000-0000     | Bug

  @InvalidEmail
  Scenario Outline:  email id cannot be created without "@" sign and "." extensions
    When User enters invalid "<emailFormat>"
    Then System should display email message "This field is invalid"
    Examples:
     |  emailFormat         |
     | testuser@.gmail.com  |
     | testusergmail.com    |
     | testuser@gmailcom    |
     | testuser@gmail.com.  |
     #| testuser@gmail.3    |??
     | .testuser@gmail.com  |








