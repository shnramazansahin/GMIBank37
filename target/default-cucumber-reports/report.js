$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/RegistrationPageUS_2.feature");
formatter.feature({
  "name": "Invalid credentials on the registration page",
  "description": "  System should not allow anyone to register with invalid credentials",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@RegPageUS_2"
    }
  ]
});
formatter.scenarioOutline({
  "name": "register with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BlankField"
    }
  ]
});
formatter.step({
  "name": "user enters a  9 digit SSN \"\u003cSSN\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters a name\" \u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enter a lastname \"\u003clastname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enter an address \"\u003caddress\u003e\" with zip",
  "keyword": "When "
});
formatter.step({
  "name": "user enter a 10 digits phone \"\u003cphone\u003e\" number",
  "keyword": "When "
});
formatter.step({
  "name": "user create a username \"\u003cusername\u003e\" without digits",
  "keyword": "When "
});
formatter.step({
  "name": "user enter a email \"\u003cemail\u003e\" address",
  "keyword": "When "
});
formatter.step({
  "name": "user enter a valid password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user reenter the \"\u003cconfirmation password\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on the register",
  "keyword": "When "
});
formatter.step({
  "name": "verify the invalid feedback",
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
        "name",
        "lastname",
        "address",
        "phone",
        "username",
        "email",
        "password",
        "confirmation password"
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "343-78-9345",
        "Filiz",
        "",
        "Turkey",
        "123-385-2354",
        "User",
        "usertestr@gmail.com",
        "Abcds!",
        "Abcds!"
      ]
    },
    {
      "cells": [
        "343-78-9345",
        "Filiz",
        "",
        "Turkey",
        "123-385-2354",
        "User",
        "usertestr@gmail.com",
        "",
        "Abcds!"
      ]
    },
    {
      "cells": [
        "343-78-9345",
        "Filiz",
        "Abcde",
        "",
        "",
        "User",
        "usertestr@gmail.com",
        "Abcds!",
        "Abcds!"
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
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to registration page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepDef.user_navigates_to_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "register with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegPageUS_2"
    },
    {
      "name": "@BlankField"
    }
  ]
});
formatter.step({
  "name": "user enters a  9 digit SSN \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_enters_a_digit_SSN(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a name\" \"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enters_a_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a lastname \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter an address \"\" with zip",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_an_address_with_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a 10 digits phone \"\" number",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_digits_phone_number(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user create a username \"\" without digits",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_create_a_username_without_digits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a email \"\" address",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a valid password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user reenter the \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_reenter_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the register",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.click_on_the_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the invalid feedback",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepDef.verify_the_invalid_feedback()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to registration page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepDef.user_navigates_to_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "register with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegPageUS_2"
    },
    {
      "name": "@BlankField"
    }
  ]
});
formatter.step({
  "name": "user enters a  9 digit SSN \"343-78-9345\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_enters_a_digit_SSN(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a name\" Filiz\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enters_a_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a lastname \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter an address \"Turkey\" with zip",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_an_address_with_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a 10 digits phone \"123-385-2354\" number",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_digits_phone_number(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user create a username \"User\" without digits",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_create_a_username_without_digits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a email \"usertestr@gmail.com\" address",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a valid password \"Abcds!\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user reenter the \"Abcds!\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_reenter_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the register",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.click_on_the_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the invalid feedback",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepDef.verify_the_invalid_feedback()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to registration page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepDef.user_navigates_to_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "register with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegPageUS_2"
    },
    {
      "name": "@BlankField"
    }
  ]
});
formatter.step({
  "name": "user enters a  9 digit SSN \"343-78-9345\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_enters_a_digit_SSN(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a name\" Filiz\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enters_a_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a lastname \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter an address \"Turkey\" with zip",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_an_address_with_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a 10 digits phone \"123-385-2354\" number",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_digits_phone_number(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user create a username \"User\" without digits",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_create_a_username_without_digits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a email \"usertestr@gmail.com\" address",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a valid password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user reenter the \"Abcds!\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_reenter_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the register",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.click_on_the_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the invalid feedback",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepDef.verify_the_invalid_feedback()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to registration page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepDef.user_navigates_to_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "register with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegPageUS_2"
    },
    {
      "name": "@BlankField"
    }
  ]
});
formatter.step({
  "name": "user enters a  9 digit SSN \"343-78-9345\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_enters_a_digit_SSN(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a name\" Filiz\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enters_a_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a lastname \"Abcde\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter an address \"\" with zip",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_an_address_with_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a 10 digits phone \"\" number",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_digits_phone_number(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user create a username \"User\" without digits",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_create_a_username_without_digits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a email \"usertestr@gmail.com\" address",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a valid password \"Abcds!\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user reenter the \"Abcds!\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_reenter_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the register",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.click_on_the_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the invalid feedback",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepDef.verify_the_invalid_feedback()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat gmibank.step_definitions.RegistrationStepDef.verify_the_invalid_feedback(RegistrationStepDef.java:108)\n\tat ✽.verify the invalid feedback(src/test/resources/features/RegistrationPageUS_2.feature:21)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});