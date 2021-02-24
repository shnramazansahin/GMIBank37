$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/CustomerPage.feature");
formatter.feature({
  "name": "Customer creation feature",
  "description": "    Create a new customer",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Customer"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User able to create new customer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters  9 digit SSN in ssn search box \"\u003cSSN\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters a first name as \"\u003cFirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters a lastname \"\u003cLastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters a middel initials as \"\u003cMiddel Initials\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters an email  address as\"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters 10 digits mobile phone number as \"\u003cMobile Phone Number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters 10 digits phone number as \"\u003cPhone Number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters a zip code as \"\u003cZip Code\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters an address as \"Address\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters a city name as \"\u003cCity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters a 9 digits SSN as \"\u003cSSN\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User creates a date as \"Create Date\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can select a country as \"name\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters as a state as \"name\" in US",
  "keyword": "When "
});
formatter.step({
  "name": "User can select an user type as \"User Type\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can select an account as \"Account Type\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the save button",
  "keyword": "When "
});
formatter.step({
  "name": "Verify the success message as \"\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN",
        "FirstName",
        "LastName",
        "Middel Initials",
        "Email",
        "Mobile Phone Number",
        "Phone Number",
        "Zip Code",
        "City",
        "SSN"
      ]
    },
    {
      "cells": [
        "SSN",
        "FirstName",
        "LastName",
        "Middel Initials",
        "Email",
        "Mobile Phone Number",
        "Phone Number",
        "Zip Code",
        "City",
        "SSN"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User logs in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDef.user_logs_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigates to my operations dropdown",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on the mananage customers",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on create a new customer button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "User able to create new customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Customer"
    }
  ]
});
formatter.step({
  "name": "User enters  9 digit SSN in ssn search box \"SSN\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters a first name as \"FirstName\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters a lastname \"LastName\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters a middel initials as \"Middel Initials\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters an email  address as\"Email\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters 10 digits mobile phone number as \"Mobile Phone Number\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters 10 digits phone number as \"Phone Number\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters a zip code as \"Zip Code\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters an address as \"Address\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters a city name as \"City\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters a 9 digits SSN as \"SSN\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User creates a date as \"Create Date\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User can select a country as \"name\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters as a state as \"name\" in US",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User can select an user type as \"User Type\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User can select an account as \"Account Type\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on the save button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Verify the success message as \"\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});