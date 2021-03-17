package gmibank.step_definitions;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.javafaker.Faker;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import gmibank.pojos.Customer;
import gmibank.pojos.User;
import gmibank.utilities.*;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.io.IOException;
import java.util.*;

import static gmibank.jsonModels.CustomerJson.createCustomer;
import static io.restassured.RestAssured.given;

public class CustomerApiStepDef {

    Response response;
    String filePath = ConfigurationReader.getProperty("filePath_Customer");
    String bearerToken = ConfigurationReader.getProperty("api_bearer_token");
    Customer [] customers;
    Map<String,Object> createCustomer=new HashMap<>();
    Map<String,Object> putCustomer=new HashMap<>();
    List<String> updatedInfos;
    Object newCustomerSSN;
    Object updatedAddress;
    String updatedFirstName;
    String updatedLastName;



    String password=ConfigurationReader.getProperty("password");
    String username=ConfigurationReader.getProperty("username");

    @Given("All api data is set to response using  api end point {string}")
    public void all_api_data_is_set_to_response_using_api_end_point(String url) {

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

       response.prettyPrint();

    }

    @Given("All customer info will be set to customers with deserialization")
    public void all_customer_info_will_be_set_to_customers_with_deserialization() throws IOException {

        ObjectMapper obj = new ObjectMapper();
        customers = obj.readValue(response.asString(),Customer[].class);

    }

    @Given("All customer info will be saved to correspondent files")
    public void all_customer_info_will_be_saved_to_correspondent_files() {

        WriteToTxt.saveDataInFileWithSSN(filePath,customers);

    }

    @Then("All customer info has been validated")
    public void all_customer_info_has_been_validated() throws Exception {

        List<String > expectedAllCustomerSSNs =new ArrayList<>();

        expectedAllCustomerSSNs.add("108-53-6655");
        expectedAllCustomerSSNs.add("224-71-4004");
        expectedAllCustomerSSNs.add("398-56-4356");
        expectedAllCustomerSSNs.add("159-63-9246");
        expectedAllCustomerSSNs.add("498-53-5576");
        expectedAllCustomerSSNs.add("458-62-6584");

       // System.out.println("expectedAllCustomerSSNs = " + expectedAllCustomerSSNs);
        List<Object> actualAllCustomerSSNs=ReadTxt.returnAllCustomersSSNs(filePath);
      //  System.out.println("actualAllCustomerSSNs = " + actualAllCustomerSSNs);

       Assert.assertTrue("It doesn't match",actualAllCustomerSSNs.containsAll(expectedAllCustomerSSNs));

    }

    @Given("User create a customer using {string} {string} {string} {string} {string}{string} {string} {string}")
    public void userCreateACustomerUsing(String firstName, String lastName, String middleInitial,
                                         String email, String mobilePhoneNumber,String address,String SSN ,String createDate) {

      createCustomer=UsefulMethods.createACustomerWithAPI(firstName,lastName,middleInitial,email,mobilePhoneNumber,address,SSN);

        response= given().headers("Authorization",
                "Bearer "+ bearerToken,
                "Content-Type", ContentType.JSON,
                "Accept",ContentType.JSON)
                .when()
                .body(createCustomer)
                .post("https://www.gmibank.com/api/tp-customers")
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();

        response.prettyPrint();


        newCustomerSSN= createCustomer.get("ssn");



    }

    @Then("Validate new customer")
    public void validateNewCustomer() throws IOException {

        JsonPath jsonPath=response.jsonPath();
        String actualSsn= jsonPath.getString("ssn");
        System.out.println("actualSsn = " + actualSsn);
        System.out.println("newCustomerSSN = " + newCustomerSSN);
        Assert.assertEquals("It is NOT created", actualSsn, newCustomerSSN);

    }


    @Given("User update customer using {string} {string} {string} {string} {string} {string}{string} {string}")
    public void userUpdateCustomerUsing(String id, String firstName1, String lastName1, String middleInitial,
                                        String email, String mobilePhoneNumber,String address1,String ssn)  {

        putCustomer.put("id",id);
        putCustomer.put("firstName",firstName1);
        putCustomer.put("lastName",lastName1);
        putCustomer.put("middleInitial",middleInitial);
        putCustomer.put("email",email);
        putCustomer.put("mobilePhoneNumber",mobilePhoneNumber);
        putCustomer.put("address",address1);
        putCustomer.put("ssn",ssn);

        response= given().headers("Authorization",
                "Bearer "+ bearerToken,
                "Content-Type", ContentType.JSON,
                "Accept",ContentType.JSON)
                .when()
                .body(putCustomer)
                .put("https://www.gmibank.com/api/tp-customers")
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();

        response.prettyPrint();

     //updatedInfos=new ArrayList<>(Arrays.asList(firstName,lastName,middleInitial,email,mobilePhoneNumber,address1));
                updatedFirstName=firstName1;
                updatedLastName=lastName1;
                updatedAddress=address1;

    }


    @Then("Validate new updated information")
    public void validateNewUpdatedInformation() throws IOException {

        JsonPath jsonPath=response.jsonPath();
        String actualFirstName= jsonPath.getString("firstName");
        String actualLastName= jsonPath.getString("lastName");
        String actualAddress= jsonPath.getString("address");

        System.out.println("actualFirstName = " + actualFirstName);
        System.out.println("updatedFirstName = " + updatedFirstName);
        Assert.assertEquals("It does not created", actualFirstName, updatedFirstName);
        System.out.println("actualLastName = " + actualLastName);
        System.out.println("updatedLastName = " + updatedLastName);
        Assert.assertEquals("It does not created", actualLastName, updatedLastName);
        System.out.println("actualAddress = " + actualAddress);
        System.out.println("updatedAddress = " + updatedAddress);
        Assert.assertEquals("It does not created", actualAddress, updatedAddress);




//        ObjectMapper obj = new ObjectMapper();
//        customers = obj.readValue(response.asString(),Customer[].class);
//
//        WriteToTxt.saveDataInFileWithAllCustomerInfos("CustomerInfos.txt",customers);
//
//        List<String> actualAllCustomerSSNs=ReadTxt.returnAllCustomersSSNs("CustomerInfos.txt");
//        System.out.println("updatedInfos = " + updatedInfos);
//        Assert.assertFalse("All data is not updated",actualAllCustomerSSNs.containsAll(updatedInfos));
    }



}

