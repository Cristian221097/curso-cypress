import { CommonPageData } from "../pages/common-pages/common-page.data";
import { CommonPageMethods } from "../pages/common-pages/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethod } from "../pages/login/login.method";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.autenticacion,()=>{
    it('Inicio de sesión válido',()=>{

        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer cli en "Log in" en la barra de navegacion');
        CommonPageMethods.clickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña válidos');
        LoginMethod.insertUserName(LoginData.validCredentials.username);
        LoginMethod.insertPassword(LoginData.validCredentials.password);

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión');
        LoginMethod.clickOnLoginButton();
        Logger.verification('Verificar que se redirige al usuario a la página de inicio');
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username);


    })
})