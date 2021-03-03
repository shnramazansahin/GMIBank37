package gmibank.stepdefinations;

import com.github.javafaker.Faker;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.MainPage;
import gmibank.pages.RegistrationPage;
import gmibank.pojos.Customer;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import gmibank.utilities.WriteToTxt;

public class Registration {
    RegistrationPage registrationPage= new RegistrationPage();
    MainPage mainPage= new MainPage();
    Faker faker= new Faker();
    Customer customer = new Customer();
   // User user = new User();
    String fileName = ConfigurationReader.getProperty("fileNameOfCustomer");
    String firstName;
    String lastName;
    String firstPassword;
    String userName;


    @Given("user on the regisration page")
    public void user_on_the_regisration_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
        mainPage.mainPageManIcon.click();
        mainPage.registerButton.click();
    }

    @When("user enters a  {int} digit SSN {string}")
    public void user_enters_a_digit_SSN(Integer int1, String ssn) {
       // registrationPage.ssn.sendKeys(string);
        Driver.sleep(1);
        ssn=faker.idNumber().ssnValid();
        Driver.waitAndSendText(registrationPage.ssn,ssn,5);
        customer.setSsn(ssn);

    }

    @When("user enters a name {string}")
    public void user_enters_a_name(String firstName) {
        //registrationPage.firstname.sendKeys(string);
        firstName= faker.name().firstName();
        this.firstName= firstName;
        Driver.waitAndSendText(registrationPage.firstname,firstName,5);
        customer.setFirstName(firstName);
    }

    @When("user enter a lastname {string}")
    public void user_enter_a_lastname(String lastname) {
      //  registrationPage.lastname.sendKeys(string);
        lastname= faker.name().lastName();
        this.lastName= lastname; // why
        Driver.waitAndSendText(registrationPage.lastname,lastname,5);
        customer.setLastName(lastName);
    }

    @When("user enter an address {string}")
    public void user_enter_an_address(String adress) {
       // registrationPage.address.sendKeys(string);
        adress= faker.address().streetAddress();
        Driver.waitAndSendText(registrationPage.address,adress,5);
        customer.setAddress(adress);
    }

    @When("user enter a {int} digits phone {string} number")
    public void user_enter_a_digits_phone_number(Integer int1, String mobile) {
       // registrationPage.mobile.sendKeys(string);

        mobile= faker.phoneNumber().cellPhone();
        Driver.phone(mobile);
        Driver.waitAndSendText(registrationPage.mobile,mobile,5);
        customer.setMobilePhoneNumber(mobile);

    }

    @When("user create a username {string} without digits")
    public void user_create_a_username_without_digits(String userName) {
        //registrationPage.username.sendKeys(string);
        Driver.sleep(1);
        userName= faker.name().username();
        this.userName= userName;
        Driver.waitAndSendText(registrationPage.username,userName,2);

    }


    @When("user enter a email {string} address")
    public void user_enter_a_email_address(String email) {
       // registrationPage.email.sendKeys(string);
        Driver.sleep(2);
        email = firstName+lastName+"@gmail.com";
        Driver.waitAndSendText(registrationPage.email,email,5);
        customer.setEmail(email);
    }

    @When("user enter a valid password {string}")
    public void user_enter_a_valid_password(String firstPassword) {
       // registrationPage.firstpassword.sendKeys(string);
        Driver.sleep(2);
       firstPassword= faker.internet().password(10,15,true,true);
       this.firstPassword=firstPassword;
        Driver.waitAndSendText(registrationPage.firstpassword,firstPassword,2);
    }

    @When("user reenter the password as {string}")
    public void user_reenter_the_password_as(String secondPassword) {
//        registrationPage.secondPassword.sendKeys(string);
//        System.out.println(string);
        Driver.sleep(2);
        secondPassword=firstPassword;
        Driver.waitAndSendText(registrationPage.secondPassword,secondPassword,5);

    }

    @When("click on the register")
    public void click_on_the_register() {
       registrationPage.registerButton.click();
    }

    @Then("verify the success message")
    public void verify_the_success_message() {
        System.out.println("no message available");
        WriteToTxt.saveAllCustomer(fileName,customer,firstPassword,userName);
    }

}
