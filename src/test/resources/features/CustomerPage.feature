@Customer
  Feature: Customer creation feature
    Create a new customer

    Background:
      Given User goes to login page
      When user enters a valid username and password
      Then User logs in
      And User navigates to my operations dropdown
      And User clicks on the manage customers
      And User clicks on create a new customer button

    Scenario Outline:User able to create new customer

      Given User enters  9 digit SSN in ssn search box "<SSN>"
      When User clicks on search button
      And User should see all registration information
      When User enters a first name as "<FirstName>"
      When User enters a lastname "<LastName>"
      When User enters a middel initials as "<Middel Initials>"
      When User enters an email  address as"<Email>"
      When User enters 10 digits mobile phone number as "<Mobile Phone Number>"
      When User enters 10 digits phone number as "<Phone Number>"
      When User enters a zip code as "<Zip Code>"
      When User enters an address as "Address"
      When User enters a city name as "<City>"
      When User enters a 9 digits SSN as "<SSN>"

      When User can select a country as "name"
      When User enters as a state as "<state>" in US
      When User can select an user type as "User Type"
      When User can select an account as "Account Type"
      When User able to check zelle enrolled checkbox
      When User clicks on the save button
      Then Verify the success message as ""

      Examples:
        |SSN|FirstName|LastName|Middel Initials|Email|Mobile Phone Number|Phone Number|Zip Code|City|SSN|state|
        |760-45-6719|Aaa|Bbb|AB|ab@gmail.com|123-456-7890|124-456-7890|76543 |Dallas|812-35-6019|TX|
  @Date
  Scenario:
    When User creates a date as "Create Date"









#@CustomerAddress
#  Feature: Create an address
#    Address of customer can be created
#
#
#    Scenario Outline:Address as street and number should be provided  and cannot be left blank
#         When User enters valid "<Address>"
#
#     Examples:
#      |Address|
#      |       |
#      |       |