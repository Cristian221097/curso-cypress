import { LoginMethod } from "./pages/login/login.method";

describe('template spec', () => {
  it('passes', () => {
    const user = "Lunes01"
    const password = "Lunes01"
    cy.visit('https://demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click();
    LoginMethod.login(user,password)
    cy.get('a#nameofuser').should('contains.text',user)
    cy.wait(5000)
  })
})