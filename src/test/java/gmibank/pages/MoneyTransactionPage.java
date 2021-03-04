package gmibank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MoneyTransactionPage extends BasePage {

    @FindBy(linkText = "Transfer Money")
    public WebElement moneyTransfer;

    @FindBy(id="fromAccountId")
    public WebElement fromAccountId;

    @FindBy(id="toAccountId")
    public WebElement toAccountId;

    @FindBy(id="balance")
    public WebElement balanceField;

    @FindBy(id="balancecent")
    public WebElement balanCentField;

    @FindBy(id="description")
    public WebElement descriptionField;

    @FindBy(id="make-transfer")
    public WebElement makeTransferButton;

    @FindBy(xpath = "//div[contains(text(),'Transfer is succesfull')]")
    public WebElement successTransferMessage;

    @FindBy(xpath = "//a[contains(text(),'My Accounts')]")
    public WebElement myAccounts;

    @FindBy(xpath = "//tbody/tr[1]/td[4]/button[1]")
    public WebElement firstAccountInfoButton;

    @FindBy(xpath = "//tbody/tr[2]/td[4]/button[1]")
    public WebElement secondAccountInfoButton;
}
