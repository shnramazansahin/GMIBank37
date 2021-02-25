$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\US7InvalidEmail.feature");
formatter.feature({
  "name": "Invalid Email",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Email id cannot contain just digits or chars without \"@\" sign or \".\" extension",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to \"http://www.gmibank.com/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter the \"\u003cemail\u003e\" see \"\u003cerrormessage\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "errormessage"
      ]
    },
    {
      "cells": [
        "12345gmail.com",
        "This field is invalid"
      ]
    },
    {
      "cells": [
        "12345@gmailcom",
        "This field is invalid"
      ]
    },
    {
      "cells": [
        "Aysegmail.com",
        "This field is invalid"
      ]
    },
    {
      "cells": [
        "Ayse@gmailcom",
        "This field is invalid"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Email id cannot contain just digits or chars without \"@\" sign or \".\" extension",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user navigate to \"http://www.gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "InvalidEmailStepsUS7.user_navigate_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidEmailStepsUS7.click_register()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat gmibank.utilities.Driver.waitForVisibility(Driver.java:123)\r\n\tat gmibank.pages.RegistrationPage.navigateRegister(RegistrationPage.java:68)\r\n\tat gmibank.stepdefinations.InvalidEmailStepsUS7.click_register(InvalidEmailStepsUS7.java:29)\r\n\tat ✽.click register(src\\test\\resources\\features\\US7InvalidEmail.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter the \"12345gmail.com\" see \"This field is invalid\"",
  "keyword": "When "
});
formatter.match({
  "location": "InvalidEmailStepsUS7.userEnterTheSee(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Email id cannot contain just digits or chars without \"@\" sign or \".\" extension",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user navigate to \"http://www.gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "InvalidEmailStepsUS7.user_navigate_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidEmailStepsUS7.click_register()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat gmibank.utilities.Driver.waitForVisibility(Driver.java:123)\r\n\tat gmibank.pages.RegistrationPage.navigateRegister(RegistrationPage.java:68)\r\n\tat gmibank.stepdefinations.InvalidEmailStepsUS7.click_register(InvalidEmailStepsUS7.java:29)\r\n\tat ✽.click register(src\\test\\resources\\features\\US7InvalidEmail.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter the \"12345@gmailcom\" see \"This field is invalid\"",
  "keyword": "When "
});
formatter.match({
  "location": "InvalidEmailStepsUS7.userEnterTheSee(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Email id cannot contain just digits or chars without \"@\" sign or \".\" extension",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user navigate to \"http://www.gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "InvalidEmailStepsUS7.user_navigate_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidEmailStepsUS7.click_register()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat gmibank.utilities.Driver.waitForVisibility(Driver.java:123)\r\n\tat gmibank.pages.RegistrationPage.navigateRegister(RegistrationPage.java:68)\r\n\tat gmibank.stepdefinations.InvalidEmailStepsUS7.click_register(InvalidEmailStepsUS7.java:29)\r\n\tat ✽.click register(src\\test\\resources\\features\\US7InvalidEmail.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter the \"Aysegmail.com\" see \"This field is invalid\"",
  "keyword": "When "
});
formatter.match({
  "location": "InvalidEmailStepsUS7.userEnterTheSee(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Email id cannot contain just digits or chars without \"@\" sign or \".\" extension",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user navigate to \"http://www.gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "InvalidEmailStepsUS7.user_navigate_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidEmailStepsUS7.click_register()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat gmibank.utilities.Driver.waitForVisibility(Driver.java:123)\r\n\tat gmibank.pages.RegistrationPage.navigateRegister(RegistrationPage.java:68)\r\n\tat gmibank.stepdefinations.InvalidEmailStepsUS7.click_register(InvalidEmailStepsUS7.java:29)\r\n\tat ✽.click register(src\\test\\resources\\features\\US7InvalidEmail.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter the \"Ayse@gmailcom\" see \"This field is invalid\"",
  "keyword": "When "
});
formatter.match({
  "location": "InvalidEmailStepsUS7.userEnterTheSee(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "There should not be an option of any other language other than English or Turkish",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
});