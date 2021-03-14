package gmibank.step_definitions;

import com.fasterxml.jackson.databind.ObjectMapper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pojos.Customer;
import gmibank.pojos.NewApplicant;
import gmibank.pojos.User;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.ReadTxt;
import gmibank.utilities.UsefulMethods;
import gmibank.utilities.WriteToTxt;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;

import java.io.IOException;
import java.util.*;

import static io.restassured.RestAssured.given;

public class NewApplicantStepDef {

    Response response;
    String filePath = ConfigurationReader.getProperty("fileNameOfCustomer");
    String bearerToken = ConfigurationReader.getProperty("api_bearer_token");
    NewApplicant [] newApplicants;
    List<NewApplicant> expectedApplicantsInfos;
    List<String> registeredSSNs;


    @Given("All api new applicant data is set to response using  api end point {string}")
    public void allApiNewApplicantDataIsSetToResponseUsingApiEndPoint(String url) {

        response = given().headers(
                "Authorization",
                "Bearer " + bearerToken,
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when()
                .get(url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();

     //   response.prettyPrint();

    }


    @Given("All new applicants info will be set to new applicants with deserialization")
    public void all_new_applicants_info_will_be_set_to_new_applicants_with_deserialization() throws IOException {

        ObjectMapper objectMapper=new ObjectMapper();
        newApplicants= objectMapper.readValue(response.asString(),NewApplicant[].class);

    }

    @When("User reads new applicants data from correspondent file")
    public void user_reads_new_applicants_data_from_correspondent_file() {
       registeredSSNs=ReadTxt.returnRegistrantsSSNList(filePath);
        System.out.println("registeredSSNs = " + registeredSSNs);
    //   expectedApplicantsInfos= ReadTxt.returnAWholeApplicant(filePath);

    }

    @Then("All new applicants info has been validated")
    public void all_new_applicants_info_has_been_validated() {

   //    WriteToTxt.saveAllNewApplicants("NewApplicants.txt",newApplicants);

       WriteToTxt.saveDataInFileWithApplicantSSN("ApplicantsSSN.txt",newApplicants);
       List<Object>actualSSNs=ReadTxt.returnAllSSNForNewApplicants("ApplicantsSSN.txt");
       Assert.assertTrue("Does not match",actualSSNs.containsAll(registeredSSNs));


    }


}
