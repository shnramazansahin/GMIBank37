package gmibank.step_definitions;

import com.github.javafaker.Faker;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.HomePage;
import gmibank.pages.RegistrationPage;
import gmibank.pojos.Customer;
import gmibank.pojos.User;
import gmibank.utilities.*;
import org.junit.Assert;
import org.openqa.selenium.Alert;
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
    String ssn;


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

        ssn=faker.idNumber().ssnValid();
        this.ssn=ssn;
        Driver.waitAndSendText(registrationPage.ssnTextbox,ssn,3);
        customer.setSsn(ssn);
    }

    @When("user enters a name{string}")
    public void user_enters_a_name(String firstname) {

        firstname=faker.name().firstName();
        this.firstName=firstname;
        Driver.waitAndSendText(registrationPage.firstnameTextbox,firstname,3);
        customer.setFirstName(firstName);

    }

    @When("user enter a lastname {string}")

    public void user_enter_a_lastname(String lastname) {

        lastname=faker.name().lastName();
        this.lastName=lastname;
        Driver.waitAndSendText(registrationPage.lastnameTextbox,lastname,3);
        customer.setLastName(lastname);
    }

    @When("user enter an address {string} with zip")
    public void user_enter_an_address_with_zip(String address) {

        address = faker.address().streetAddress();
        Driver.waitAndSendText(registrationPage.addressTextbox,address,3);
        customer.setAddress(address);

    }

    @When("user enter a {int} digits phone {string} number")
    public void user_enter_a_digits_phone_number(Integer int1, String phoneNumber) {
        boolean validPhone=false;
        while(!validPhone){
            phoneNumber = faker.phoneNumber().cellPhone();
            validPhone=UsefulMethods.isValidPhoneNumber(phoneNumber);
        }
        Driver.waitAndSendText( registrationPage.mobilephoneTextbox,phoneNumber,5);
        customer.setMobilePhoneNumber(phoneNumber);

    }

    @When("user create a username {string} without digits")
    public void user_create_a_username_without_digits(String username) {
        username = faker.name().username();
        this.username = username;
        Driver.waitAndSendText( registrationPage.usernameTextbox,username,3);

    }

    @When("user enter a email {string} address")
    public void user_enter_a_email_address(String email) {

        email = firstName+lastName+"@gmail.com";
        Driver.waitAndSendText(registrationPage.emailTextbox,email,3);
        customer.setEmail(email);

    }

    @When("user enter a valid password {string}")
    public void user_enter_a_valid_password(String password) {

        password = faker.internet().password(10,15,true,true);
        this.password = password;
        Driver.waitAndSendText( registrationPage.firstPasswordTextbox,password,5);

    }

    @When("user reenter the {string}")
    public void user_reenter_the(String repeatedPassword) {
        repeatedPassword=password;
        Driver.waitAndSendText(registrationPage.newPasswordTextbox,repeatedPassword,3);
    }

    @When("click on the register")
    public void click_on_the_register() throws InterruptedException {
        Driver.waitAndClick(registrationPage.registerSubmitButton,3);
        WriteToTxt.saveAllCustomer(fileName, customer,password,username );

    }
    @Then("verify the success message")
    public void verifyTheSuccessMessage() {

        BrowserUtils.switchToWindow(registrationPage.successMessage.getText());
        String actual= Driver.waitAndGetText(registrationPage.successMessage,10);
        Assert.assertEquals("Registration saved!", actual);
        System.out.println(actual);


    }
    @Given("User enters SSN {string}")
    public void userEntersSSN(String ssn) {

        Driver.waitAndSendText(registrationPage.ssnTextbox,ssn,3);

    }

    @When("User enters a name as {string}")
    public void userEntersANameAs(String firstname) {

        Driver.waitAndSendText(registrationPage.firstnameTextbox,firstname,3);
    }

    @When("User enter a lastname as {string}")
    public void userEnterALastnameAs(String lastname) {
        Driver.waitAndSendText(registrationPage.lastnameTextbox,lastname,3);
    }

    @When("User enter an address {string} with zip")

    public void userEnterAnAddressWithZip(String address) {

        Driver.waitAndSendText(registrationPage.addressTextbox,address,5);
    }

    @When("User enter a {int} digits phone {string} number")
    public void userEnterADigitsPhoneNumber(int arg0, String phoneNumber) {

        Driver.waitAndSendText( registrationPage.mobilephoneTextbox,phoneNumber,5);
    }

    @When("User create a username {string} without digits")
    public void userCreateAUsernameWithoutDigits(String username) {

        Driver.waitAndSendText( registrationPage.usernameTextbox,username,5);
    }

    @When("User enter a email {string} address")
    public void userEnterAEmailAddress(String email) {

        Driver.waitAndSendText(registrationPage.emailTextbox,email,3);
    }

    @When("User enter a valid password {string}")
    public void userEnterAValidPassword(String password) {

        Driver.waitAndSendText( registrationPage.firstPasswordTextbox,password,5);
    }

    @When("User reenter the {string}")
    public void userReenterThe(String repeatPassword ) {

        Driver.waitAndSendText(registrationPage.newPasswordTextbox,repeatPassword,3);
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



}