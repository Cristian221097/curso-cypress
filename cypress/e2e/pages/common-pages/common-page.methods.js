import { CommonPageData,CommonPageElements } from "./common-page.data";

export class CommonPageMethods{

    static navigateToDemoBlaze(){
        cy.visit(CommonPageData.url);
    }

    static clickOnHomeOption(){
       CommonPageElements.topMenu.home().click();
    }

    static clickOnContactOption(){
        CommonPageElements.topMenu.contact().click();
     }

     
     static clickOnAboutUsOption(){
        CommonPageElements.topMenu.aboutUs().click();
     }

     static clickOnCartOption(){
        CommonPageElements.topMenu.cart().click();
     }

     static clickOnLoginOption(){
        CommonPageElements.topMenu.login().click();
     }

     static clickOnSignupOption(){
        CommonPageElements.topMenu.signup().click();
     }
 

}