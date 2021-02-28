package gmibank.step_definitions;

import com.github.javafaker.Faker;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.HomePage;
import gmibank.pages.RegistrationPage;
import gmibank.pojos.Customer;
import gmibank.pojos.User;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import gmibank.utilities.UsefulMethods;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.List;

public class RegistrationStepDef {

    HomePage homePage = new HomePage();
    RegistrationPage registrationPage = new RegistrationPage();
    Faker faker= new Faker();
    Customer customer=new Customer();
    User user =new User();
    String fileName=ConfigurationReader.getProperty("fileNameOfCustomer");
    String firstName;
    String lastName;
    String password;
    String username;


    @Given("User is on the home page")
    public void user_is_on_the_home_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmiBank_url"));
    }

    @Given("User navigates to registration page")
    public void user_navigates_to_registration_page() {
        homePage.homePageManIcon.click();
        registrationPage.registrationButton.click();
    }

    @Given("user enters a  {int} digit SSN {string}")
    public void user_enters_a_digit_SSN(Integer int1, String ssn) {

        registrationPage.ssnTextbox.sendKeys(ssn);
    }

    @When("user enters a name{string}")
    public void user_enters_a_name(String firstname) {
        registrationPage.firstnameTextbox.sendKeys(firstname);
    }

    @When("user enter a lastname {string}")
    public void user_enter_a_lastname(String lastname) {

        registrationPage.lastnameTextbox.sendKeys(lastname);

    }

    @When("user enter an address {string} with zip")
    public void user_enter_an_address_with_zip(String address) {
        registrationPage.addressTextbox.sendKeys(address);

    }

    @When("user enter a {int} digits phone {string} number")
    public void user_enter_a_digits_phone_number(Integer int1, String phoneNumber) {

        registrationPage.mobilephoneTextbox.sendKeys(phoneNumber);

    }

    @When("user create a username {string} without digits")
    public void user_create_a_username_without_digits(String username) {
        registrationPage.usernameTextbox.sendKeys(username);

    }

    @When("user enter a email {string} address")
    public void user_enter_a_email_address(String email) {
        registrationPage.emailTextbox.sendKeys(email);

    }

    @When("user enter a valid password {string}")
    public void user_enter_a_valid_password(String password) {
        registrationPage.firstPasswordTextbox.sendKeys(password);

    }

    @When("user reenter the {string}")
    public void user_reenter_the(String repeatPassword) {
        registrationPage.newPasswordTextbox.sendKeys(repeatPassword);

    }

    @When("click on the register")
    public void click_on_the_register() throws InterruptedException {

        Thread.sleep(3000);
        registrationPage.registerSubmitButton.click();
        Thread.sleep(5000);
    }

    @Then("verify the invalid feedback")
    public void verify_the_invalid_feedback() throws InterruptedException {
        boolean verify = true;
        List<WebElement> expectedFeedback = registrationPage.fieldList;
        int size = UsefulMethods.getTextFromWebElements(expectedFeedback).size();
        System.out.println("Size" + size);
        verify = size > 0;
        Assert.assertTrue(verify);

    }

    @When("User enters invalid as ssn {string}")
    public void userEntersInvalidAsSsn(String ssn) throws InterruptedException {

        Thread.sleep(2000);
        registrationPage.ssnTextbox.sendKeys(ssn);
        Thread.sleep(2000);
        registrationPage.registerSubmitButton.click();
        Assert.assertFalse(UsefulMethods.isValidSSN(ssn));

    }

    @Then("System should display {string}")
    public void system_should_display(String string) {

        Assert.assertEquals(string, Driver.waitAndGetText(registrationPage.invalidSSnWarningMessage, 3));
        System.out.println(registrationPage.invalidSSnWarningMessage);

    }

    @When("User enter invalid mobile {string}")
    public void userEnterInvalidMobile(String mobilePhone) {

        registrationPage.mobilephoneTextbox.sendKeys(mobilePhone);
        registrationPage.registerSubmitButton.click();
        Assert.assertFalse(UsefulMethods.isValidPhoneNumber(mobilePhone));

    }

    @Then("System should display this message {string}")
    public void systemShouldDisplayThisMessage(String arg0) {

        Assert.assertEquals(arg0, Driver.waitAndGetText(registrationPage.invalidPhoneNumberWarningMessage, 3));
        System.out.println(registrationPage.invalidPhoneNumberWarningMessage);
    }


    @When("User enters invalid {string}")
    public void userEntersInvalid(String email) {
        registrationPage.emailTextbox.sendKeys(email);
        registrationPage.registerSubmitButton.click();
        Assert.assertFalse(UsefulMethods.isValidEmailAddress(email));
    }

    @Then("System should display email message {string}")
    public void systemShouldDisplayEmailMessage(String arg0) {

        Assert.assertEquals(arg0, Driver.waitAndGetText(registrationPage.invalidEmailWarningmessage, 1));
        System.out.println(registrationPage.invalidEmailWarningmessage);
    }

    @Then("verify the success message")
    public void verifyTheSuccessMessage() {

        Driver.waitAndClick(registrationPage.registerSubmitButton, 6);
        // String succesPopUp =Driver.getDriver().switchTo().alert().getText();
        // System.out.println(succesPopUp);
        String actual = registrationPage.successMessage.getText();
        Assert.assertEquals("Registration saved!", actual);
        System.out.println(actual);


    }
}