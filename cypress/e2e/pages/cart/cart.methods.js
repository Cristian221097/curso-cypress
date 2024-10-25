import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-pages/common-page.methods";
import { LoginMethod } from "../login/login.method";
import { CartElements } from "./cart.elements";

export class CartMethods{

    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }

    static verifyCartPageIsShown(){
        cy.url().should('include','cart.html')
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click();
    }

    static deleteProducts(){
        cy.intercept('POST','https://api.demoblaze.com/deleteitem').as('deleteItem')
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.click();
            cy.wait('@deleteItem');
        })
    }

    static emptyCart(username,password){
        Logger.subStep('Navigate to DemoBlaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Log out')
        CommonPageMethods.logout();
        Logger.subStep('Click on Home option')
        CommonPageMethods.clickOnHomeOption();
        Logger.subStep('Click on Login option')
        CommonPageMethods.clickOnLoginOption();
        Logger.subStep(`Login with this credentials ${username}/${password}`)
        LoginMethod.login(username,password);
        Logger.subStep('Click on Cart option')
        CommonPageMethods.clickOnCartOption();
        Logger.subStep('Delete products cart')
        this.deleteProducts();
    }

}