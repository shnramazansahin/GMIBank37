package gmibank.step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.utilities.DatabaseUtility;
import gmibank.utilities.ReadTxt;
import gmibank.utilities.UsefulMethods;
import gmibank.utilities.WriteToTxt;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;

public class UsersDBStepDef {

    List<Object> rowList;

    @Given("User creates a connection with DB")
    public void user_creates_a_connection_with_DB() {

        DatabaseUtility.createConnection();
    }

    @Given("User retrieves all users information for using the query as {string} with column as{string}")
    public void userRetrievesAllUsersInformationForUsingTheQueryAsWithColumnAs(String query, String columnName) {

       rowList= DatabaseUtility.getColumnData(query,columnName);

    }

    @When("User sets all users info to correspondent files")
    public void user_sets_all_users_info_to_correspondent_files() {

        WriteToTxt.saveDifferentInfoFromDB("AllUsersInfo.txt", rowList);

    }

    @Then("User validates all users information")
    public void user_validates_all_users_information() {

       List<Object> expectedData= ReadTxt.returnFiveItemsComingFromDB("AllUsersInfo.txt");

       System.out.println("expectedData = " + expectedData);

        Assert.assertTrue("Validation is not successful!",UsefulMethods.compareTwoObjectList(expectedData,rowList));

        System.out.println("It's workinggggg!!!" );

    }



}
