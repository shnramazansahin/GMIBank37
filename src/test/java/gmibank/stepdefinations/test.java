package gmibank.stepdefinations;

import cucumber.api.java.en.Given;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;

public class test {
    @Given("user goes to page")
    public void user_goes_to_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

}
