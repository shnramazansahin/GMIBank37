package gmibank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AccountCreationPage extends BasePage {

    @FindBy(xpath="//span[contains(.,'My Operations')]")
    public WebElement myOperation;

    @FindBy(xpath="//span[contains(.,'Manage Accounts')]")
    public WebElement manageAccounts;

    @FindBy(id="jh-create-entity")
    public WebElement createAccount;

    @FindBy(xpath="//input[@name='description']")
    public WebElement description;

    @FindBy(xpath="//input[@name='balance']")
    public WebElement balance;

    @FindBy(xpath="//select[@name='accountType']")
    public WebElement accountType;

    @FindBy(xpath="//select[@name='accountStatusType']")
    public WebElement accountStatus;

    @FindBy(xpath="//input[@name='createDate']/following::input")
    public WebElement  createDate;

    @FindBy(xpath="//input[@name='closedDate']")
    public WebElement closedDate;

    @FindBy(xpath="//input[@name='employee.id']")
    public WebElement employeeId;

    @FindBy(xpath="//span[contains(.,'Save')]")
    public WebElement save;
}
