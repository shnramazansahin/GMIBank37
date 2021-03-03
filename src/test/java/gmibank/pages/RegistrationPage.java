package gmibank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class RegistrationPage extends BasePage {

    @FindBy(linkText="Register")
    public WebElement registrationButton;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public List<WebElement> fieldList;

    @FindBy(id= "ssn")
    public WebElement ssnTextbox;

    @FindBy(id = "firstname")
    public WebElement firstnameTextbox;

    @FindBy(id = "lastname")
    public WebElement lastnameTextbox;

    @FindBy(id = "address")
    public WebElement addressTextbox;

    @FindBy(id = "mobilephone")
    public WebElement mobilephoneTextbox;

    @FindBy(id = "username")
    public WebElement usernameTextbox;

    @FindBy(id = "email")
    public WebElement emailTextbox;

    @FindBy(id = "firstPassword")
    public WebElement firstPasswordTextbox;

    @FindBy(id = "secondPassword")
    public WebElement newPasswordTextbox;

    @FindBy(id = "register-submit")
    public WebElement registerSubmitButton;

    @FindBy (xpath = "//div[contains(text(),'Your SSN is invalid')]")
    public WebElement invalidSSnWarningMessage;

    @FindBy (xpath = "//div[contains(text(),'Your mobile phone number is invalid')]")
    public WebElement invalidPhoneNumberWarningMessage;

    @FindBy(xpath = "//div[contains(text(),'This field is invalid')]")
    public WebElement invalidEmailWarningmessage;

    @FindBy (xpath = "//div[contains(text(),'translation-not-found')]")
    public WebElement ssnWarningmessage;

    @FindBy(xpath = "//strong[contains(text(),'Registration saved!')]")
    public WebElement successMessage;

    @FindBy(xpath = "//a[@class='d-flex align-items-center dropdown-toggle nav-link']")
    public WebElement firstbutton;

    public void navigateRegister() {
        firstbutton.click();
        registrationButton.click();
    }







}
