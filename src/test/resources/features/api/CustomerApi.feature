@CustomerApi
Feature: All customer api data testing


  Background: Set the api uri
    Given All api data is set to response using  api end point "https://www.gmibank.com/api/tp-customers"

  @UpdateApiCustomer
  Scenario Outline: update a customer
    Given User update customer using "<id>" "<firstName>" "<lastName>" "<middleInitial>" "<email>" "<mobilePhoneNumber>""<address>" "<ssn>"
    Then Validate new updated information
    Examples: update customer
      | id    | firstName | lastName | middleInitial | email                | mobilePhoneNumber | address                                              | ssn         |
      | 36531 | Jon       | Snow     | K             | jon.snow@example.com | 319-015-1814      | 829 McLaughlin River, Stiedemannville, NY 19004-5961 | 476-90-9374 |

  Scenario: All api data validation
    Given All customer info will be set to customers with deserialization
    And All customer info will be saved to correspondent files
    Then All customer info has been validated
