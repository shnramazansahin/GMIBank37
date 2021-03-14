@CountryApi
Feature: All country api data testing


  Background: Set the api uri
    Given All api country data is set to response using  api end point "https://www.gmibank.com/api/tp-countries"

  @CreateCountry
  Scenario Outline: create a country
    Given User creates country using "<idJson>" and "<nameJson>"

    Examples: create country
      | idJson | nameJson |
#      | name   | Malta    |
#      | name   | Italy    |
      | name   | Germany    |
      | name   | France    |


  Scenario: All api data validation
    Given All country info will be set to countries with deserialization
    And  All country info will be saved to correspondent files
    Then All country info has been validated