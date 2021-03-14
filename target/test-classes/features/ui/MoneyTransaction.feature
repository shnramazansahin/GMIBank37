@Transaction

Feature: Money Transaction feature
  As a customer I should be able to make money transfer

  Background: Login As customer
    Given User goes to login page
    Then User logs in as a customer

  Scenario Outline: Money transfer should be available

    When User clicks on my operations
    And User navigates to money transfer button
    And User selects an account from account dropdown "<From>"
    And User selects an account to account dropdown "<To>"
    And User enters amount of balance "<Balance>"
    And User provides a description for transfer "<Description>"
    And User clicks on make transfer button
    And System should display success message as "Transfer is succesfull"
    And User clicks on my operations
    And User navigates to my accounts button
    Then User should be able to see accounts information after transaction

    Examples:
      | Balance | Description                                          |
      | 30      | 30$ transferred between checking and saving accounts |





