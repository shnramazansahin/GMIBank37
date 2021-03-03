package gmibank.stepdefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.LoginPage;
import gmibank.pages.MainPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;

public class Login {

    MainPage mainPage = new MainPage();
    LoginPage loginPage = new LoginPage();

    @Given("user is on the application website")
    public void user_is_on_the_application_website() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
        mainPage.mainPageManIcon.click();
        mainPage.signInButton.click();
    }


    @When("verifys the cancel option")
    public void verifys_the_cancel_option() {
      String cancelButtonText=loginPage.cancelButton.getText();
        System.out.println(cancelButtonText);
        //Assert.assertTrue(cancelButtonText.contains("Cancel"));
    }

    @When("user enters  valid username {string}")
    public void user_enters_valid_username(String string) {
        loginPage.username.sendKeys(string);
    }


    @When("user enters valid password {string}")
    public void user_enters_valid_password(String string) {
      loginPage.password.sendKeys(string);
    }

    @When("user clicks on the sign in button")
    public void user_clicks_on_the_sign_in_button() {
        Driver.waitAndClick(loginPage.signButton,5);

    }

    @Then("user verifys option {string}")
    public void user_verifys_option(String string) {
        System.out.println("no message availabe");

    }


}
