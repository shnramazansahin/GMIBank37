$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\US6.feature");
formatter.feature({
  "name": "userinfo segment",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login page should not be accessbile in English with invalid credantials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US6"
    }
  ]
});
formatter.step({
  "name": "user  on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enter valid password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the user name \"team 37\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks team name \"userinfo\" button",
  "keyword": "When "
});
formatter.step({
  "name": "user verifys options \"populated info\"",
  "keyword": "When "
});
formatter.step({
  "name": "user update the firstname \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user update the lastname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user update the email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user update the language \"turksih\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the save button \"save\"",
  "keyword": "When "
});
formatter.step({
  "name": "verifys populated info is \"turkish\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "email"
      ]
    },
    {
      "cells": [
        "wallstreetbets",
        "1234As$",
        "Newfirst",
        "NewLast",
        "new@gmail.com"
      ]
    }
  ]
});
formatter.background({
  "name": "user on the application page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "login page should not be accessbile in English with invalid credantials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US6"
    }
  ]
});
formatter.step({
  "name": "user  on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "US6_UI.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username \"wallstreetbets\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_UI.user_enters_valid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid password \"1234As$\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_UI.user_enter_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "US5_UI.user_click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the user name \"team 37\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_UI.user_clicks_on_the_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks team name \"userinfo\" button",
  "keyword": "When "
});
formatter.match({
  "location": "US6_UI.clicks_team_name_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifys options \"populated info\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_UI.user_verifys_options(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user update the firstname \"Newfirst\"",
  "keyword": "And "
});
formatter.match({
  "location": "US6_UI.user_update_the_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user update the lastname \"NewLast\"",
  "keyword": "And "
});
formatter.match({
  "location": "US6_UI.user_update_the_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user update the email \"new@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "US6_UI.user_update_the_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user update the language \"turksih\"",
  "keyword": "And "
});
formatter.match({
  "location": "US6_UI.user_update_the_language(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the save button \"save\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_UI.user_clicks_on_the_save_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifys populated info is \"turkish\"",
  "keyword": "Then "
});
formatter.match({
  "location": "US6_UI.verifys_populated_info_is(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat gmibank.stepdefinations.US6_UI.verifys_populated_info_is(US6_UI.java:124)\r\n\tat ✽.verifys populated info is \"turkish\"(src\\test\\resources\\features\\US6.feature:17)\r\n",
  "status": "failed"
});
});