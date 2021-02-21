package gmibank.stepdefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import gmibank.pages.LoginPage;
import gmibank.pages.MainPage;
import gmibank.pages.RegistrationPage;
import gmibank.pages.SingedInPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;

public class US6 {
    MainPage mainPage = new MainPage();
    LoginPage loginPage = new LoginPage();
    RegistrationPage registrationPage = new RegistrationPage();
    SingedInPage singedInPage = new SingedInPage();


    @Given("user  on the login page")
    public void user_on_the_login_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
        mainPage.mainPageManIcon.click();
        mainPage.signInButton.click();
    }

    @When("user enters valid username {string}")
    public void user_enters_valid_username(String string) {
     loginPage.username.sendKeys(string);
    }

    @When("user enter valid password {string}")
    public void user_enter_valid_password(String string) {
      loginPage.password.sendKeys(string);
    }

    @When("user clicks on the {string}")
    public void user_clicks_on_the(String string) {
      loginPage.signButton.click();
    }

    @When("clicks user info button")
    public void clicks_user_info_button() {
     singedInPage.userInfo.click();
     singedInPage.userNameButton.click();
    }

    @When("user verifys {string}")
    public void user_verifys(String string) {

    }

    @When("user verifys the language options")
    public void user_verifys_the_language_options() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("user update the firstname {string}")
    public void user_update_the_firstname(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("user update the lastname {string}")
    public void user_update_the_lastname(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("user update the email {string}")
    public void user_update_the_email(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

}
