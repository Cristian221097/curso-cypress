import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderMethods{

    static insertName(name){
        PlaceOrderElements.textBoxes.name.invoke('val',name);
    }

    static insertCountry(country){
        PlaceOrderElements.textBoxes.country.invoke('val',country);
    }

    static insertCity(city){
        PlaceOrderElements.textBoxes.city.invoke('val',city);
    }

    static insertCreditCard(creditCard){
        PlaceOrderElements.textBoxes.creditCard.invoke('val',creditCard);
    }

    static insertMonth(month){
        PlaceOrderElements.textBoxes.month.invoke('val',month);
    }

    static insertYear(year){
        PlaceOrderElements.textBoxes.year.invoke('val',year);
    }

    static clickOnClose(){
        PlaceOrderElements.buttons.close().click();
    }

    static clickOnPurchase(){
        PlaceOrderElements.buttons.close().click();
    }

}