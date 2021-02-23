package gmibank.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "html:target/default-cucumber-reports",
                "json:target/json-reports/cucumber.json",
                "junit:target/xml-report/cucumber.xml"
                },
        features = "src/test/resources/features",
        glue = "src/test/java/gmibank/stepdefinations",
        tags = "@invalid",
        dryRun = true
)

public class Runner {

}
