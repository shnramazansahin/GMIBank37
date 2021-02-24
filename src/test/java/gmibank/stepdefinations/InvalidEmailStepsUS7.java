package gmibank.stepdefinations;

import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;

public class InvalidEmailStepsUS7 {
    @When("user navigate to {string}")
    public void user_navigate_to(String string) {
        Driver.getDriver().get(string);

    }

    @Then("click register")
    public void click_register() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("user enter the {string} and see  {string}")
    public void user_enter_the_and_see(String string, String string2) {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }


}
