import { CommonPageData } from "../pages/common-pages/common-page.data"
import { CommonPageMethods } from "../pages/common-pages/common-page.methods"
import { LoginData } from "../pages/login/login.data";
import { SignupsMethods } from "../pages/signup/signup.methods"
import { Logger } from "../util/logger"
const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);
const existingUser = LoginData.validCredentials.username;

describe(CommonPageData.testSuites.registro, ()=>{
    it('Registro de usuario valido',()=>{

        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación.')
        CommonPageMethods.clickOnSignupOption();

        Logger.stepNumber(3)
        Logger.step(' Completar todos los campos obligatorios con información válida.')
        SignupsMethods.insertUsername(user)
        SignupsMethods.insetPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SignupsMethods.clickOnSignupButton();
        Logger.verification('Verificar que se muestre el mensaje "signup successful"')
        SignupsMethods.verifySignupSuccessfulMessageIsDisplayed()

    })

    it('Registro de usuario inválido',()=>{

        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación.')
        CommonPageMethods.clickOnSignupOption();

        Logger.stepNumber(3)
        Logger.step(' Completar algunos campos con información inválida.')
        SignupsMethods.insertUsername(existingUser);
        SignupsMethods.insetPassword(password);

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SignupsMethods.clickOnSignupButton();
        Logger.verification('Verificar que se muestra un mensaje de error indicando los campos inválidos')
        SignupsMethods.verifyThatThisUserAlreadyExistsMessageIsDisplayed();
        
    })
})

