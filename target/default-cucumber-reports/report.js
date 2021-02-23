$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\US6.feature");
formatter.feature({
  "name": "userinfo segment",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Us6"
    }
  ]
});
formatter.scenarioOutline({
  "name": "userinfo should be editable and match with selected language",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Eng"
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
  "name": "user clicks on the Sign In button",
  "keyword": "When "
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
  "name": "user set the language as English",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the save button \"save\"",
  "keyword": "When "
});
formatter.step({
  "name": "user verifys options \"populated info\" in English",
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
  "name": "user closes the applicaiton",
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
formatter.scenario({
  "name": "userinfo should be editable and match with selected language",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Us6"
    },
    {
      "name": "@Eng"
    }
  ]
});
formatter.step({
  "name": "user  on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "US6_1_UI.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username \"wallstreetbets\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_enters_valid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid password \"1234As$\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_enter_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Sign In button",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_clicks_on_the_Sign_In_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the user name \"team 37\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_clicks_on_the_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks team name \"userinfo\" button",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.clicks_team_name_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user set the language as English",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_set_the_language_as_English()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the save button \"save\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_clicks_on_the_save_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifys options \"populated info\" in English",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_verifys_options_in_English(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user update the firstname \"Newfirst\"",
  "keyword": "And "
});
formatter.match({
  "location": "US6_1_UI.user_update_the_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user update the lastname \"NewLast\"",
  "keyword": "And "
});
formatter.match({
  "location": "US6_1_UI.user_update_the_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user update the email \"new@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "US6_1_UI.user_update_the_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the applicaiton",
  "keyword": "Then "
});
formatter.match({
  "location": "US6_1_UI.user_closes_the_applicaiton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "userinfo should be in Turkish",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TR"
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
  "name": "user clicks on the Sign In button",
  "keyword": "When "
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
  "name": "user set the language as Turksih",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the save button \"save\"",
  "keyword": "When "
});
formatter.step({
  "name": "user verifys options \"populated info\" in Turkish",
  "keyword": "When "
});
formatter.step({
  "name": "user closes the applicaiton",
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
formatter.scenario({
  "name": "userinfo should be in Turkish",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Us6"
    },
    {
      "name": "@TR"
    }
  ]
});
formatter.step({
  "name": "user  on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "US6_1_UI.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username \"wallstreetbets\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_enters_valid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid password \"1234As$\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_enter_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Sign In button",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_clicks_on_the_Sign_In_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the user name \"team 37\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_clicks_on_the_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks team name \"userinfo\" button",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.clicks_team_name_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user set the language as Turksih",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_set_the_language_as_Turksih()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the save button \"save\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_clicks_on_the_save_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifys options \"populated info\" in Turkish",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_verifys_options_in_Turkish(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the applicaiton",
  "keyword": "Then "
});
formatter.match({
  "location": "US6_1_UI.user_closes_the_applicaiton()"
});
formatter.result({
  "status": "passed"
});
});