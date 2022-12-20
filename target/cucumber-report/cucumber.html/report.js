$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginpage.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "verify User Should Navigate To Login Page",
  "description": "",
  "id": "login-test;verify-user-should-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am On login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On login Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Welcome Message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 190842900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 99675800,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLoginLink(HomePage.java:50)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iClickOnLoginLink(LoginSteps.java:18)\r\n\tat ✽.When I click On login Link(loginpage.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.welcomeMessageDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "verify Error Message With Invalid Credentials",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am On login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click On login Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"prime1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 5838600,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLoginLink(HomePage.java:50)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iClickOnLoginLink(LoginSteps.java:18)\r\n\tat ✽.When I click On login Link(loginpage.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime1234@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeErrorMessageDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "verify That User Should LogIn SuccessFully With Valid Credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I am On login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click On login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"prime1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"Prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should  see Logout link displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 38900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 3237500,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLoginLink(HomePage.java:50)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iClickOnLoginLink(LoginSteps.java:18)\r\n\tat ✽.When I click On login Link(loginpage.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime1234@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeLogoutLinkDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am On login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click On login Link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I enter email \"prime123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"Prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click On logout link",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "i should see login link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 86100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 4003800,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLoginLink(HomePage.java:50)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iClickOnLoginLink(LoginSteps.java:18)\r\n\tat ✽.When I click On login Link(loginpage.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeLoginLinkIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
});