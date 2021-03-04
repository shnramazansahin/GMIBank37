package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class Customerpage {

    public Customerpage(){
        super();
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(name ="search-ssn")
    public WebElement ssn1;

    @FindBy(name ="firstname")
    public WebElement firstNameTextbox;

    @FindBy(name ="lastname")
    public WebElement lastNameTextbox;

    @FindBy(name ="middleInitial")
    public WebElement middleInitialTextbox;

    @FindBy(name ="email")
    public WebElement emailTextbox;

    @FindBy(name ="address")
    public WebElement addressTextbox;

    @FindBy(name ="mobilePhoneNumber")
    public WebElement mobilePhoneNumberTextbox;

    @FindBy(name ="phoneNumber")
    public WebElement phoneNumberTextbox;

    @FindBy(name ="zipCode")
    public WebElement zipCodeTextbox;

    @FindBy(xpath ="//input[@id='tp-customer-firstName']")
    public WebElement usernameTextbox;

    @FindBy(name ="city")
    public WebElement cityTextbox;

    @FindBy(name ="country.id")
    public WebElement countryDropdown;

    @FindBy(name ="state")
    public WebElement stateTextbox;

    @FindBy(name ="country.id")
    public WebElement userDropdown;

    @FindBy(name ="accounts")
    public WebElement accountsDropdown;

    @FindBy(name ="zelleEnrolled")
    public WebElement zelloEnrolledCheckmark;

    @FindBy(id ="save-entity")
    public WebElement saveButton;

    @FindBy(name ="createDate")
    public WebElement createdate;

    @FindBy(xpath ="//span[contains(text(),'Create or edit a Account')]")
    public WebElement CreateorEditAccount;

    @FindBy(xpath="//span[contains(text(),'Create a new Customer')]")
    public WebElement CreateNewAccount;

    @FindBy(xpath ="//*[text()='My Operations']")
    public WebElement myOperations;

    @FindBy(id="entity-menu")
    public WebElement myoperationsdropdown;


    @FindBy(xpath ="//*[text()='Manage Customers']")
    public WebElement manageCustomer;

    @FindBy(id="entity-menu")
    public WebElement entityMenuDropdown;

    @FindBy(xpath = "//span[contains(text(),'Manage Customers')]")
    public WebElement manageCustomerButton;

    @FindBy(xpath="//span[contains(text(),'Create a new Customer')]")
    public WebElement createCustomerButton;


    @FindBy(xpath = "//button[contains(text(),'Search')]")
    public WebElement searchButton;

    @FindBy(xpath = "//div[contains(text(),'translation-not-found[gmiBankBackendApp.tPAccountR")
    public WebElement searchButtonMessage;

    @FindBy(name = "firstName")
    public WebElement firstNameField;

    @FindBy(name = "lastName")
    public WebElement lastNameField;

    @FindBy(name = "middleInitial")
    public WebElement middleInitialField;

    @FindBy(name = "email")
    public WebElement emailField;

    @FindBy(name = "address")
    public WebElement addressField;

    @FindBy(name = "mobilePhoneNumber")
    public WebElement mobilePhoneNumberField;

    @FindBy(name = "phoneNumber")
    public WebElement phoneNumberField;

    @FindBy(name = "zipCode")
    public WebElement zipCodeField;

    @FindBy(name = "username")
    public WebElement usernameField;

    @FindBy(name = "city")
    public WebElement cityField;

    @FindBy(name="ssn")
    public WebElement ssn2;

    @FindBy(id="tp-customer-createDate")
    public WebElement createDate;

    @FindBy(name = "state")
    public WebElement stateField;


    @FindBy(name = "zelleEnrolled")
    public WebElement zelleEnrolledCheckButton;


    @FindBy()
    public WebElement succesMessage;





}






