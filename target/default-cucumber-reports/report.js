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
  "status": "passed"
});
formatter.step({
  "name": "User goes to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDef.user_goes_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enters_a_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to my operations dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerPageStepDef.user_navigates_to_my_operations_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the mananage customers",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerPageStepDef.user_clicks_on_the_mananage_customers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on create a new customer button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerPageStepDef.user_clicks_on_create_a_new_customer_button()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "CustomerPageStepDef.user_enters_digit_SSN_in_ssn_search_box(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a first name as \"FirstName\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_a_first_name_as(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027firstname\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.192)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Imacs-iMac.local\u0027, ip: \u0027192.168.1.44\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002714\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.192, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/3y/4pw3tlsd4mj...}, goog:chromeOptions: {debuggerAddress: localhost:51858}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f14cbcf6ece081e89b00b299db68ee82\n*** Element info: {Using\u003dname, value\u003dfirstname}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.clear(Unknown Source)\n\tat gmibank.step_definitions.CustomerPageStepDef.user_enters_a_first_name_as(CustomerPageStepDef.java:53)\n\tat ✽.User enters a first name as \"FirstName\"(src/test/resources/features/CustomerPage.feature:16)\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters a lastname \"LastName\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_a_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a middel initials as \"Middel Initials\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_a_middel_initials_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters an email  address as\"Email\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_an_email_address_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters 10 digits mobile phone number as \"Mobile Phone Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_digits_mobile_phone_number_as(Integer,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters 10 digits phone number as \"Phone Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_digits_phone_number_as(Integer,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a zip code as \"Zip Code\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_a_zip_code_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters an address as \"Address\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_an_address_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a city name as \"City\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_a_city_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a 9 digits SSN as \"SSN\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_a_digits_SSN_as(Integer,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User creates a date as \"Create Date\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_creates_a_date_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can select a country as \"name\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_can_select_a_country_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters as a state as \"name\" in US",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_as_a_state_as_in_US(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can select an user type as \"User Type\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_can_select_an_user_type_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can select an account as \"Account Type\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_can_select_an_account_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on the save button",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_clicks_on_the_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the success message as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerPageStepDef.verify_the_success_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});