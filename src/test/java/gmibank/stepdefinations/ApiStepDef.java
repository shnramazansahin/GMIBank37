package gmibank.stepdefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pojos.Customer;
import gmibank.utilities.ConfigurationReader;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;

import static io.restassured.RestAssured.given;

public class ApiStepDef {
    Response response;
    String bearerToken = ConfigurationReader.getProperty("api_bearer_token");

    @Given("the api data is set to response using apu end point {string}")
    public void the_api_data_is_set_to_response_using_apu_end_point(String url) {
     response = given().headers("Authorization",
             "Bearer "+ bearerToken,
             "Content-Type", ContentType.JSON,
             "Accept",
             ContentType.JSON).
             when().get(url).then().contentType(ContentType.JSON).extract().response();

     //response.prettyPrint();


    }

    @Given("all customer info will be set to customers with deserilation")
    public void all_customer_info_will_be_set_to_customers_with_deserilation() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        Customer[] customer= objectMapper.readValue(response.asString(),Customer[].class);// this will return the all data about the customers
        //logic:get the actual data from response body and store them in customer classs in the pojos

//        System.out.println(customer[0].getFirstName());
//        for(int i =0;i<customer.length;i++) {
//            System.out.println(customer[i].);
//        }


    }

    @When("all customer info will be saved to correspendent files")
    public void all_customer_info_will_be_saved_to_correspendent_files() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("all customer infor has been validated")
    public void all_customer_infor_has_been_validated() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }
}
