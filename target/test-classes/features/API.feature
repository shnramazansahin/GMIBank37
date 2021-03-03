@customer
Feature: all customer api data testing
 Background: Set the api url
   Given the api data is set to response using apu end point "https://www.gmibank.com/api/tp-customers"
   Scenario: all api data validation
     Given all customer info will be set to customers with deserilation
     When all customer info will be saved to correspendent files
     Then  all customer infor has been validated