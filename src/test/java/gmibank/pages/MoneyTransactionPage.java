package gmibank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MoneyTransactionPage {

    @FindBy(xpath = "//a[contains(text(),'Transfer Money')]")
    public WebElement moneyTransfer;

    @FindBy(id="fromAccountId")
    public WebElement fromAccountId;

    @FindBy(id="toAccountId")
    public WebElement toAccountId;

    @FindBy(id="balance")
    public WebElement balanceField;

    @FindBy(id="balancecent")
    public WebElement balancecentField;

    @FindBy(name="description")
    public WebElement descriptionField;

    @FindBy(id="make-transfer")
    public WebElement makeTransferButton;
}
