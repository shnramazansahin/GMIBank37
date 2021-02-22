package gmibank.step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.HomePage;
import gmibank.pages.RegistrationPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import gmibank.utilities.UsefulMethods;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class RegistrationStepDef {

    HomePage homePage = new HomePage();
    RegistrationPage registrationPage = new RegistrationPage();


    @Given("User is on the home page")
    public void user_is_on_the_home_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmiBank_url"));
    }

    @Given("User navigates to registration page")
    public void user_navigates_to_registration_page() {
        homePage.homePageManIcon.click();
        registrationPage.registrationButton.click();
    }

    @Given("User is on the registration page")
    public void user_is_on_the_registration_page() {

    }
    @Given("user enters a  {int} digit SSN {string}")
    public void user_enters_a_digit_SSN(Integer int1, String string) {
       registrationPage.ssnTextbox.sendKeys(string);
    }

    @When("user enters a name{string}")
    public void user_enters_a_name(String string) {
        registrationPage.firstnameTextbox.sendKeys(string);
    }

    @When("user enter a lastname {string}")
    public void user_enter_a_lastname(String string) {

        registrationPage.lastnameTextbox.sendKeys(string);

    }

    @When("user enter an address {string} with zip")
    public void user_enter_an_address_with_zip(String string) {
        registrationPage.addressTextbox.sendKeys(string);

    }

    @When("user enter a {int} digits phone {string} number")
    public void user_enter_a_digits_phone_number(Integer int1, String string) {

        registrationPage.mobilephoneTextbox.sendKeys(string);

    }

    @When("user create a username {string} without digits")
    public void user_create_a_username_without_digits(String string) {
        registrationPage.usernameTextbox.sendKeys(string);

    }

    @When("user enter a email {string} address")
    public void user_enter_a_email_address(String string) {
        registrationPage.emailTextbox.sendKeys(string);

    }

    @When("user enter a valid password {string}")
    public void user_enter_a_valid_password(String string) {
        registrationPage.firstPasswordTextbox.sendKeys(string);

    }

    @When("user reenter the {string}")
    public void user_reenter_the(String string) {
        registrationPage.newPasswordTextbox.sendKeys(string);

    }

    @When("click on the register")
    public void click_on_the_register() throws InterruptedException {

        Thread.sleep(3000);
        registrationPage.registerSubmitButton.click();
        Thread.sleep(5000);
    }

    @Then("verify the invalid feedback")
    public void verify_the_invalid_feedback() throws InterruptedException {
        boolean verify=true;
        List<WebElement> expectedFeedback = registrationPage.fieldList;
        int size= UsefulMethods.getTextFromWebElements(expectedFeedback).size();
        System.out.println("Size"+size);
        verify = size > 0;
        Assert.assertTrue(verify);


    }

    @When("User enter invalid {string}")
    public void userEnterInvalid(String arg0) {

        registrationPage.ssnTextbox.sendKeys(arg0);
        registrationPage.registerSubmitButton.click();
        Assert.assertFalse(UsefulMethods.isValidSSN(arg0));
    }

    @Then("System should display {string}")
    public void system_should_display(String string) {

        Assert.assertEquals(string,Driver.waitAndGetText(registrationPage.invalidSSnWarningMessage,1));
        System.out.println(registrationPage.invalidSSnWarningMessage);

    }

    @When("User enter invalid mobile {string}")
    public void userEnterInvalidMobile(String arg0) {

        registrationPage.mobilephoneTextbox.sendKeys(arg0);
        registrationPage.registerSubmitButton.click();
        Assert.assertFalse(UsefulMethods.isValidPhoneNumber(arg0));

    }
    @Then("System should display this message {string}")
    public void systemShouldDisplayThisMessage(String arg0) {

        Assert.assertEquals(arg0,Driver.waitAndGetText(registrationPage.invalidPhoneNumberWarningMessage,3));
        System.out.println(registrationPage.invalidPhoneNumberWarningMessage);
    }


    @When("User enters invalid {string}")
    public void userEntersInvalid(String arg0) {
        registrationPage.emailTextbox.sendKeys(arg0);
        registrationPage.registerSubmitButton.click();
        Assert.assertFalse(UsefulMethods.isValidEmailAddress(arg0));
    }

    @Then("System should display email message {string}")
    public void systemShouldDisplayEmailMessage(String arg0) {

        Assert.assertEquals(arg0,Driver.waitAndGetText(registrationPage.invalidEmailWarningmessage,1));
        System.out.println(registrationPage.invalidEmailWarningmessage);

    }
}