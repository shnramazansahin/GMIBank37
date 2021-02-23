package gmibank.stepdefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.MainPage;
import gmibank.pages.RegistrationPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import org.junit.Assert;

public class US1_UI {
    RegistrationPage registrationPage= new RegistrationPage();
    MainPage mainPage= new MainPage();

    @Given("user enters a  {int} digit SSN {string}")
    public void user_enters_a_digit_SSN(Integer int1, String string) {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
        mainPage.mainPageManIcon.click();
        mainPage.registerButton.click();
        registrationPage.ssn.sendKeys(string);

    }

    @When("user enters a name{string}")
    public void user_enters_a_name(String string) {
        registrationPage.firstname.sendKeys(string);
    }

    @When("user enter a lastname {string}")
    public void user_enter_a_lastname(String string) {
        registrationPage.lastname.sendKeys(string);
    }

    @When("user enter an address {string} with zip")
    public void user_enter_an_address_with_zip(String string) {
        registrationPage.address.sendKeys(string);
    }

    @When("user enter a {int} digits phone {string} number")
    public void user_enter_a_digits_phone_number(Integer int1, String string) {
        registrationPage.mobile.sendKeys(string);
    }

    @When("user create a username {string} without digits")
    public void user_create_a_username_without_digits(String string) {
        registrationPage.username.sendKeys(string);
    }

    @When("user enter a email {string} address")
    public void user_enter_a_email_address(String string) {
        registrationPage.email.sendKeys(string);
    }

    @When("user enter a valid password {string}")
    public void user_enter_a_valid_password(String string) {
        registrationPage.firstpassword.sendKeys(string);
    }


    @When("user reenter the {string}")
    public void user_reenter_the(String string) {
       registrationPage.secondPassword.sendKeys(string);
    }

    @When("click on the register")
    public void click_on_the_register() {
       registrationPage.registerButton.click();
    }

    @Then("verify the success message")
    public void verify_the_success_message() {
        System.out.println("no message available");
    }

}
