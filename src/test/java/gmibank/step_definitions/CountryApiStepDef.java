package gmibank.step_definitions;

import com.fasterxml.jackson.databind.ObjectMapper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import gmibank.jsonModels.CountryJson;
import gmibank.pojos.Country;
import gmibank.pojos.Customer;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.ReadTxt;
import gmibank.utilities.WriteToTxt;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Filter;


///




import static gmibank.jsonModels.CountryJson.createCountry;
import static io.restassured.RestAssured.*;

public class CountryApiStepDef {

    Response response;
    Country [] countries;
    String baseUrl=ConfigurationReader.getProperty("apiUrl");
    String bearerToken = ConfigurationReader.getProperty("api_bearer_token");
    List<String> countryIdsCheck=new ArrayList<>();

    @Given("All api country data is set to response using  api end point {string}")
    public void allApiCountryDataIsSetToResponseUsingApiEndPoint(String api_url) {

        response= given().headers("Authorization",
                "Bearer "+ bearerToken,
                "Content-Type", ContentType.JSON,
                "Accept",ContentType.JSON)
                .when()
                .get(api_url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();

      //  response.prettyPrint();



   }

    @Given("User creates country using {string} and {string}")
    public void user_creates_country_using_and(String id, String name) throws IOException {

        response= given().headers("Authorization",
                "Bearer "+ bearerToken,
                "Content-Type", ContentType.JSON,
                "Accept",ContentType.JSON)
                .when()
                .body("{\""+id+"\":\""+name+"\"}")
                .post(baseUrl+"/tp-countries")
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();

        response.prettyPrint();

         JsonPath jsonPath=response.jsonPath();
          String newIds= jsonPath.getString("id");
          countryIdsCheck.add(newIds);

   }

    @Given("All country info will be set to countries with deserialization")
    public void all_country_info_will_be_set_to_countries_with_deserialization() throws IOException {

        ObjectMapper obj = new ObjectMapper();
        countries = obj.readValue(response.asString(), Country[].class);

    }

    @Given("All country info will be saved to correspondent files")
    public void all_country_info_will_be_saved_to_correspondent_files() {

        WriteToTxt.saveDataInFileWithCountryId("CountryID.txt",countries);
    }

    @Then("All country info has been validated")
    public void all_country_info_has_been_validated() throws Exception {

       // List<String> expectedCountryIds=new ArrayList(Arrays.asList("88471","88472"));
        List<String> expectedCountryIds=countryIdsCheck;
       // System.out.println("expectedCountryIds = " + expectedCountryIds);
        List<String> actualCountryIds=ReadTxt.returnAllCountriesId("CountryID.txt");

        Assert.assertTrue("Countries are in the list ", actualCountryIds.containsAll(expectedCountryIds));

    }

}
