package gmibank.stepdefinations;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.*;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
public class US6_1_UI {
    MainPage mainPage = new MainPage();
    LoginPage loginPage = new LoginPage();
    RegistrationPage registrationPage = new RegistrationPage();
    SingedInPage singedInPage = new SingedInPage();
    UserSettingPage userSettingPage = new UserSettingPage();
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


    @When("user clicks on the Sign In button")
    public void user_clicks_on_the_Sign_In_button() {
     loginPage.signButton.click();
    }

    @When("user clicks on the user name {string}")
    public void user_clicks_on_the_user_name(String string) {
        singedInPage.userNameButton.click();
    }

    @When("clicks team name {string} button")
    public void clicks_team_name_button(String string) {
     singedInPage.userInfo.click();
    }

    @When("user set the language as English")
    public void user_set_the_language_as_English() {
        Select language = new Select(userSettingPage.languageOpt);
        language.selectByIndex(0);

    }
    @When("user set the language as Turksih")
    public void user_set_the_language_as_Turksih() {
        Select language = new Select(userSettingPage.languageOpt);
        language.selectByIndex(1);

    }
    @When("user verifys options {string} in Turkish")
    public void user_verifys_options_in_Turkish(String string) {
        Driver.wait(5);
        String firstName =userSettingPage.firstname.getText();
        Assert.assertTrue(firstName.contains("İsim"));

        String lastname =userSettingPage.lastname.getText();
        Assert.assertTrue(lastname.contains("Soyisim"));

        String email= userSettingPage.email.getText();
        Assert.assertTrue(email.contains("E-posta"));

        String language= userSettingPage.language.getText();
        Assert.assertTrue(language.contains("Dil"));
    }

    @When("user verifys options {string} in English")
    public void user_verifys_options_in_English(String string) {
        Driver.wait(2);
        String firstName =userSettingPage.firstname.getText();
        Assert.assertTrue(firstName.contains("First Name"));

        String lastname =userSettingPage.lastname.getText();
        Assert.assertTrue(lastname.contains("Last Name"));

        String email= userSettingPage.email.getText();
        Assert.assertTrue(email.contains("Email"));

        String language= userSettingPage.language.getText();
        Assert.assertTrue(language.contains("Language"));
    }


    @When("user update the firstname {string}")
    public void user_update_the_firstname(String string) {
        userSettingPage.firstnameTexbox.clear();
        userSettingPage.firstnameTexbox.sendKeys(string);
    }
    @When("user update the lastname {string}")
    public void user_update_the_lastname(String string) {
            userSettingPage.lastnameTexBox.clear();
        userSettingPage.lastnameTexBox.sendKeys(string);
    }

    @When("user update the email {string}")
    public void user_update_the_email(String string) {
        userSettingPage.emailBox.clear();
      userSettingPage.emailBox.sendKeys(string);
    }

    @When("user clicks on the save button {string}")
    public void user_clicks_on_the_save_button(String string) {
        userSettingPage.saveButton.click();
    }

    @Then("user closes the applicaiton")
    public void user_closes_the_applicaiton() {
       Driver.closeDriver();
    }

}
