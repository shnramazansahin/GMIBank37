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
}
