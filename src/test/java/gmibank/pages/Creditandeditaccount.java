package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Creditandeditaccount {
    public Creditandeditaccount() {
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath="//input[@name='description']")
    public WebElement description;

    @FindBy(xpath="//input[@name='balance']")
    public WebElement balance;

    @FindBy(xpath="//select[@name='accountType']")
    public WebElement accountType;

    @FindBy(xpath="//select[@name='accountStatusType']")
    public WebElement accountStatus;

    @FindBy(xpath="//input[@name='createDate']")
    public WebElement  createDate;

    @FindBy(xpath="//input[@name='closedDate']")
    public WebElement closedDate;

    @FindBy(xpath="//input[@name='employee.id']")
    public WebElement employeeId;

    @FindBy(xpath="//span[contains(.,'Save')]")
    public WebElement Save;
}

