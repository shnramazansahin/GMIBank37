@RegisterFull
Feature: register page
  @RegPos
  Scenario Outline: register with valid credentials
    Given user on the regisration page
    When user enters a  9 digit SSN "<SSN>"
    When user enters a name "<name>"
    When user enter a lastname "<lastname>"
    When user enter an address "<address>"
    When user enter a 10 digits phone "<phone>" number
    When user create a username "<username>" without digits
    When user enter a email "<email>" address
    When user enter a valid password "<password>"
    When user reenter the password as "<password>"
    When  click on the register
    Then verify the success message
    Examples:
    |SSN|name|lastname|address|phone|username|email|password|
    |123456789|ALI |AK|123 WALLSTREET 55565|9876543210|DEMO|demo@gmail.com|1234As|

  @RegNeg
  Scenario Outline: register with invalid credentials
    Given user enters a  9 digit SSN "<SSN>"
    When user enters a name "<name>"
    When user enter a lastname "<lastname>"
    When user enter an address "<address>" with zip
    When user enter a 10 digits phone "<phone>" number
    When user create a username "<username>" without digits
    When user enter a email "<email>" address
    When user enter a valid password "<password>"
    When user reenter the "password"
    When  click on the register
    Examples:
      |SSN|name|lastname|address|phone|username|email|password|
      |   |     |       |        |    |        |      |       |
      |   |     |       |        |    |        |  df |  d     |
