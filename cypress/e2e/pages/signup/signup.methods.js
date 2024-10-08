import { CommonPageMethods } from "../common-pages/common-page.methods";
import { SignupsElements } from "./signup.elements";

export class SignupsMethods{

    static insertUsername(username){
        SignupsElements.textboxes.username.invoke('val',username);
    }

    static  insetPassword(password){
        SignupsElements.textboxes.password.invoke('val',password);
    }

    static clickOnSignupButton(){
        SignupsElements.buttons.signup.click();
    }

    static signup(username,password){
        this.insertUsername(username);
        this.insetPassword(password);
        this.clickOnSignupButton();
    }

   static verifySignupSuccessfulMessageIsDisplayed(){
        CommonPageMethods.verifyAlert('Sign up successful.')
    }

    static verifyThatThisUserAlreadyExistsMessageIsDisplayed(){
        CommonPageMethods.verifyAlert('This user already exist.')
    }

}