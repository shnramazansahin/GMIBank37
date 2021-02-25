package gmibank.stepdefinations;



import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.RegistrationPage;
import gmibank.utilities.Driver;


public class InvalidEmailStepsUS7 {

    RegistrationPage register=new RegistrationPage();

    @When("user navigate to {string}")
    public void user_navigate_to(String string) {
        Driver.getDriver().get(string);

    }

    @Then("click register")
    public void click_register() {
        register.navigateRegister();

    }

    @And("user enter the {string} and see  {string}")
    public void user_enter_the_and_see(String string, String string2) {

    }


}
