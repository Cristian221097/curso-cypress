import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-pages/common-page.methods";
import { LoginElement } from "./login.element";

export class LoginMethod{

    static insertUserName(username){
        LoginElement.textBoxes.username.invoke('val',username);
    }

    static insertPassword(password){
        LoginElement.textBoxes.password.invoke('val',password);
    }

    static clickOnLoginButton(){
        LoginElement.buttons.login.click();
    }

    static login(username, password){
        Logger.subStep('Insert username')
        this.insertUserName(username);
        Logger.subStep('Insert password')
        this.insertPassword(password);
        Logger.subStep('Click on login button')
        this.clickOnLoginButton();
    }

    static verifyWrongPasswordMessage(){
        CommonPageMethods.verifyAlert('Wrong password.')
    }

}