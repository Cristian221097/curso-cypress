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
        this.insertUserName(username);
        this.insertPassword(password);
        this.clickOnLoginButton();
    }

}