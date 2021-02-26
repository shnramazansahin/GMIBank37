package gmibank.stepdefinations;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import gmibank.utilities.Driver;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Hook {

    @Before(order = 2)
    public void setup() {
        System.out.println("Test setup");
        Driver.getDriver().manage().window().maximize();
    }

    @Before(value = "@driver", order = 1)
    public void specialSetup() {
        System.out.println("Setup for driver only");
    }

    @After("@driver")
    public void specialTearDown() {
        System.out.println("Tear down for driver only");
    }

    @After
    public void tearDown(Scenario scenario) {
        //how to check if scenario failed
        final byte[] screenshot= ((TakesScreenshot)Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
        if(scenario.isFailed()){
            scenario.embed(screenshot,"image/png");

        }
        System.out.println("Test clean up");
       // Driver.closeDriver();
    }
}
