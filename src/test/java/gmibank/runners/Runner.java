package gmibank.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "html:target/default-cucumber-reports",
                "json:target/json-reports/cucumber.json",
                "junit:target/xml-report/cucumber.xml",
                "rerun:target/FailedReRun.txt"
        },
        features = "src/test/resources/features",
        glue = "gmibank/stepdefinations",
        tags = "@Us6",
        dryRun = false



)
public class Runner {

}
