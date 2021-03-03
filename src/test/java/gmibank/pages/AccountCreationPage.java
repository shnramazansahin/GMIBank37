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

    @FindBy(id="tp-account-accountType")
    public WebElement accountType;

    @FindBy(id="tp-account-accountStatusType")
    public WebElement accountStatus;

    @FindBy(xpath="//input[@id='tp-account-createDate']/following::input")
    public WebElement  createDate;

    @FindBy(xpath="//input[@id='tp-account-closedDate']/following::input")
    public WebElement closedDate;

    @FindBy(xpath="//input[@name='employee.id']")
    public WebElement employeeId;

    @FindBy(xpath="//span[contains(.,'Save')]")
    public WebElement save;

    @FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]")
    public WebElement accounCreationSuccesMessage;
}
