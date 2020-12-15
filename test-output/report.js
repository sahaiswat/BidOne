$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ssinha/eclipse-workspace/BidOne/src/main/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "BidOne Login Feature",
  "description": "",
  "id": "bidone-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "BidOne Login Test Scenarion",
  "description": "",
  "id": "bidone-login-feature;bidone-login-test-scenarion",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User is on the BidOne Loginpage and Title of the page is BidOne",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User logs into application",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User searches for Coconut Milk",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Search page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Closes the application",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8080841500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_on_the_BidOne_Loginpage_and_Title_of_the_page_is_BidOne()"
});
formatter.result({
  "duration": 7123800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_correct_username_and_password()"
});
formatter.result({
  "duration": 13033436300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_searches_for_Coconut_Milk()"
});
formatter.result({
  "duration": 1032619301,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[contains(@name,\u0027searchTerm\u0027)]\"}\n  (Session info: chrome\u003d78.0.3904.70)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027AKLSSINHA\u0027, ip: \u0027192.168.1.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 78.0.3904.11 (eaaae9de6b899..., userDataDir: C:\\Users\\ssinha\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:64956}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0ea9b37103565756b45a6442b716ec3f\n*** Element info: {Using\u003dxpath, value\u003d//input[contains(@name,\u0027searchTerm\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.StepDefinition.user_searches_for_Coconut_Milk(StepDefinition.java:59)\r\n\tat ✽.And User searches for Coconut Milk(C:/Users/ssinha/eclipse-workspace/BidOne/src/main/java/features/Login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.search_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.closes_the_application()"
});
formatter.result({
  "status": "skipped"
});
});