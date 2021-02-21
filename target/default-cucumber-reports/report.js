$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\US6.feature");
formatter.feature({
  "name": "userinfo segment",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US6"
    }
  ]
});
formatter.scenarioOutline({
  "name": "login page should not be accessbile with invalid credantials",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "user clicks on the \"team 37\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks user info button",
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
  "name": "login page should not be accessbile with invalid credantials",
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
  "location": "US6.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username \"wallstreetbets\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6.user_enters_valid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid password \"1234As$\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6.user_enter_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "US5.user_click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the \"team 37\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6.user_clicks_on_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks user info button",
  "keyword": "When "
});
formatter.match({
  "location": "US6.clicks_user_info_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QHIGBOM\u0027, ip: \u002710.0.0.39\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49337}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 946ae939d2a8a93c2514156fd4245909\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinations.US6.clicks_user_info_button(US6.java:43)\r\n\tat ✽.clicks user info button(src\\test\\resources\\features\\US6.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user verifys options \"populated info\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user update the firstname \"Newfirst\"",
  "keyword": "And "
});
formatter.match({
  "location": "US6.user_update_the_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user update the lastname \"NewLast\"",
  "keyword": "And "
});
formatter.match({
  "location": "US6.user_update_the_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user update the email \"new@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "US6.user_update_the_email(String)"
});
formatter.result({
  "status": "skipped"
});
});