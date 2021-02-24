package gmibank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CustomerPage extends BasePage {

    @FindBy(id="entity-menu")
    public WebElement entityMenuDropdown;

    @FindBy(name = "search-ssn")
    public WebElement searchSsnField;

    @FindBy(xpath = "//button[contains(text(),'Search')]")
    public WebElement searchButton;

    @FindBy(xpath = "//div[contains(text(),'translation-not-found[gmiBankBackendApp.tPAccountRegistration.updated']")
    public WebElement searchButtonMessage;

    @FindBy(name = "firstname")
    public WebElement firstNameField;

    @FindBy(name = "lastname")
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

    @FindBy(name = "country.id")
    public WebElement countryDropdown;

    @FindBy(name = "state")
    public WebElement stateField;

    @FindBy(name = "country.id")
    public WebElement userDropdown;

    @FindBy(name = "accounts")
    public WebElement accountsDropdown;

    @FindBy(name = "zelleEnrolled")
    public WebElement zelleEnrolledCheckButton;

    @FindBy(id = "save-entity")
    public WebElement saveButton;


}
