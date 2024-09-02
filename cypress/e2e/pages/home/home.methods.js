import { HomeElements } from "./home.elements";

export class HomeMethods{

    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phone.click();
    }

    static clickOnLaptopsOption(){
        HomeElements.categoriesMenu.laptops.click();
    }

    static clickOnMonitosOption(){
        HomeElements.categoriesMenu.monitors.click();
    }

    static clickOnProductLink(productName){
        HomeElements.product(productName).click();
    }

}