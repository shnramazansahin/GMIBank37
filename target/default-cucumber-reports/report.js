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
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: Cannot read property \u0027click\u0027 of null\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PTINUE1\u0027, ip: \u002710.0.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\16824\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50417}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dffd38c99e7a56290b810d7a9dd635ad\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat gmibank.pages.RegistrationPage.navigateRegister(RegistrationPage.java:71)\r\n\tat gmibank.stepdefinations.InvalidEmailStepsUS7.click_register(InvalidEmailStepsUS7.java:30)\r\n\tat ✽.click register(src\\test\\resources\\features\\US7InvalidEmail.feature:5)\r\n",
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
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: Cannot read property \u0027click\u0027 of null\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PTINUE1\u0027, ip: \u002710.0.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\16824\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50417}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dffd38c99e7a56290b810d7a9dd635ad\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat gmibank.pages.RegistrationPage.navigateRegister(RegistrationPage.java:71)\r\n\tat gmibank.stepdefinations.InvalidEmailStepsUS7.click_register(InvalidEmailStepsUS7.java:30)\r\n\tat ✽.click register(src\\test\\resources\\features\\US7InvalidEmail.feature:5)\r\n",
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
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: Cannot read property \u0027click\u0027 of null\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PTINUE1\u0027, ip: \u002710.0.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\16824\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50417}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dffd38c99e7a56290b810d7a9dd635ad\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat gmibank.pages.RegistrationPage.navigateRegister(RegistrationPage.java:71)\r\n\tat gmibank.stepdefinations.InvalidEmailStepsUS7.click_register(InvalidEmailStepsUS7.java:30)\r\n\tat ✽.click register(src\\test\\resources\\features\\US7InvalidEmail.feature:5)\r\n",
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
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: Cannot read property \u0027click\u0027 of null\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PTINUE1\u0027, ip: \u002710.0.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\16824\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50417}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dffd38c99e7a56290b810d7a9dd635ad\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat gmibank.pages.RegistrationPage.navigateRegister(RegistrationPage.java:71)\r\n\tat gmibank.stepdefinations.InvalidEmailStepsUS7.click_register(InvalidEmailStepsUS7.java:30)\r\n\tat ✽.click register(src\\test\\resources\\features\\US7InvalidEmail.feature:5)\r\n",
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