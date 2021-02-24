@Customer
  Feature: Customer creation feature
    Create a new customer

    Background:
      Given User logs in
      And User navigates to my operations dropdown
      And User clicks on the mananage customers
      And User clicks on create a new customer button

    Scenario Outline:User able to create new customer

      Given User enters  9 digit SSN in ssn search box "<SSN>"
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
      When User creates a date as "Create Date"
      When User can select a country as "name"
      When User enters as a state as "name" in US
      When User can select an user type as "User Type"
      When User can select an account as "Account Type"
      When User clicks on the save button
      Then Verify the success message as ""

      Examples:
        |SSN|FirstName|LastName|Middel Initials|Email|Mobile Phone Number|Phone Number|Zip Code|City|SSN|
        |SSN|FirstName|LastName|Middel Initials|Email|Mobile Phone Number|Phone Number|Zip Code|City|SSN|








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