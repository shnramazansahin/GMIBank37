package gmibank.stepdefinations;


import cucumber.api.java.en.*;



public class InvalidEmailStepsUS7 {
    @When("user navigate to {string}")
    public void user_navigate_to(String string) {
        Driver.getDriver().get(string);

    }

    @Then("click register")
    public void click_register() {

    }

    @And("user enter the {string} and see  {string}")
    public void user_enter_the_and_see(String string, String string2) {

    }


}
