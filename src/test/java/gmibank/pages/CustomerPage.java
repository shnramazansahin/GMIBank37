package gmibank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class CustomerPage extends BasePage {

    @FindBy(id="entity-menu")
    public WebElement entityMenuDropdown;

    @FindBy(xpath = "//span[contains(text(),'Manage Customers')]")
    public WebElement manageCustomerButton;

    @FindBy(id="jh-create-entity")
    public WebElement createCustomerButton;

    @FindBy(name = "search-ssn")
    public WebElement searchSsnField;

    @FindBy(xpath = "//button[contains(text(),'Search')]")
    public WebElement searchButton;

    @FindBy(xpath = "//div[@class='form-group']")
    public List<WebElement> allFieldInfo;

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

    @FindBy(name = "ssn")
    public WebElement ssnField;

    @FindBy(id="tp-customer-createDate")
    public WebElement createDate;

    @FindBy(name = "country.id")
    public WebElement countryDropdown;

    @FindBy(name = "state")
    public WebElement stateField;

    @FindBy(name = "user.id")
    public WebElement userDropdown;

    @FindBy(name = "accounts")
    public WebElement accountsDropdown;

    @FindBy(name = "zelleEnrolled")
    public WebElement zelleEnrolledCheckButton;

    @FindBy(id = "save-entity")
    public WebElement saveButton;

    @FindBy()
    public WebElement succesMessage;





}
