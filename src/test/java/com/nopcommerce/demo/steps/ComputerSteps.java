package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputer;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {
    @Given("^I am on Computer page$")
    public void iAmOnComputerPage() {
    }

    @When("^I click on Menu Tab \"([^\"]*)\"$")
    public void iClickOnMenuTab(String menu)  {
        new HomePage().clickOnMenuTab(menu);

    }


    @Then("^I should navigate computers page successfully$")
    public void iShouldNavigateComputersPageSuccessfully() {
        String expectedMessage = "Computers";
        String actualMessage = new ComputerPage().getPageTitleText();
        Assert.assertEquals(expectedMessage, actualMessage, "Computers page not displayed");
    }

    @And("^I click On subMenu \"([^\"]*)\"$")
    public void iClickOnSubMenu(String subTab)  {
        new ComputerPage().clickOnSubMenu(subTab);

    }

    @Then("^Verify desktop page displayed successfully$")
    public void verifyDesktopPageDisplayedSuccessfully() {
        String expectedMessage = "Desktops";
        String actualMessage = new DesktopsPage().getPageTitleText();
        Assert.assertEquals(expectedMessage, actualMessage, "Desktops page not displayed");
    }


    @And("^I select Product \"([^\"]*)\"$")
    public void iSelectProduct(String productName)  {
        new DesktopsPage().selectProduct(productName);

    }

    @And("^i select Processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor)  {
        new BuildYourOwnComputer().selectProcessor(processor);

    }

    @And("^i select ram \"([^\"]*)\"$")
    public void iSelectRam(String ram)  {
        new BuildYourOwnComputer().selectRam(ram);

    }

    @And("^i select hdd \"([^\"]*)\"$")
    public void iSelectHdd(String hdd)  {
        new BuildYourOwnComputer().selectHDD(hdd);

    }

    @And("^i select os \"([^\"]*)\"$")
    public void iSelectOs(String os)  {
        new BuildYourOwnComputer().selectOS(os);

    }

    @And("^i select software \"([^\"]*)\"$")
    public void iSelectSoftware(String software)  {
        new BuildYourOwnComputer().selectSoftware(software);

    }

    @And("^I click on Add to cart  button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputer().clickOnAddToCartButton();
    }

    @Then("^I should see the  confirmation message$")
    public void iShouldSeeTheConfirmationMessage() {
        String expectedMessage = "The product has been added to your shopping cart";
        String actualMessage = new BuildYourOwnComputer().getProductAddedMessage();
        Assert.assertEquals(expectedMessage, actualMessage, "Product does not added to cart");
    }
}
