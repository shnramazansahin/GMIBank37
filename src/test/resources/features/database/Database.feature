@Database
Feature: Database Testing

  Background: create a connection with DB
    Given User creates a connection with DB

  @UserDB
  Scenario Outline: User should be able to get the all users data
    Given User retrieves all users information for using the query as "select * from jhi_user" with column as"<Column Name>"
    When User sets all users info to correspondent files
    Then User validates all users information
    Examples:
      | Column Name   |
      | id            |
      | login         |
      | password_hash |
      | first_name    |
      | last_name     |
      | email         |

  @CustomerDB

  Scenario Outline: User should be able to get the all customers data
    Given User retrieves all customers information for using the query as "select * from tp_customer" with column as"<Column Name>"
    When User sets all customers info to correspondent files
    Then User validates all customers information
    Examples:
      | Column Name         |
      | id                  |
      | email               |
      | mobile_phone_number |
      | ssn                 |




