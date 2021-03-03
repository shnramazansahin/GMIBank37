package gmibank.pages;

import gmibank.utilities.Driver;
import org.jsoup.helper.W3CDom;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PasswordPage {
    public PasswordPage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//input[@name='currentPassword']")
    public WebElement currentPassword;

    @FindBy(xpath = "//input[@name='newPassword']")
    public WebElement newPassword;

    @FindBy(xpath = "//input[@name='confirmPassword']")
    public WebElement confirmPassword;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement saveButton;




}
