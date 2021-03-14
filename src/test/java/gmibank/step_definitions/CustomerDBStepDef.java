package gmibank.step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pojos.Customer;
import gmibank.utilities.*;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;

import static gmibank.utilities.DatabaseUtility.getQueryResultList;

public class CustomerDBStepDef {

    List<Object> rowList;

    @Given("User retrieves all customers information for using the query as {string} with column as{string}")
    public void user_retrieves_all_customers_information_for_using_the_query_as_with_column_as(String query, String columnData) {

       rowList= DatabaseUtility.getColumnData(query,columnData);
    }

    @When("User sets all customers info to correspondent files")
    public void user_sets_all_customers_info_to_correspondent_files() {

        WriteToTxt.saveAllCustomersComingFromDB("AllCustomerInfo.txt",rowList);

    }

    @Then("User validates all customers information")
    public void user_validates_all_customers_information() {

        List<Object> expectedData= ReadTxt.returnRandomFiveItemsComingFromDB("AllCustomerInfo.txt");
        System.out.println("expectedData = " + expectedData);
//        System.out.println("================================================================================");
//        System.out.println("rowList = " + rowList);
        Assert.assertTrue("Validation is not successful!", UsefulMethods.compareTwoObjectList(expectedData,rowList));
    //    System.out.println("It's workinggggg!!!" );


    }


    @And("User retrieves users information for using the query as {string}")
    public void userRetrievesUsersInformationForUsingTheQueryAs(String query) {

        String fileName ="UsersRoles.pdf";
        String header = "    USER ROLES";

        List<List<Object>>list=getQueryResultList(query);

        PDFGenerator.pdfGeneratorRowsAndCellsWithListOfList(header,list,fileName);

    }

    }




