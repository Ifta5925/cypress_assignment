import LoginPage from "../pages/LogInPage"

describe("Testing Login functionality", ()=>{
    const loginPage = new LoginPage();
    beforeEach(()=>{
        cy.viewport(1920,1080)
    })
    it("Testing with valid Credential",()=>{
        loginPage.userLogin("John Doe","ThisIsNotAPassword");
    })
    it("Testing with invalid Credential",()=>{
        loginPage.userLogin("John DoE","ThisIsNotAPassword");
        loginPage.invalidAssertion();
    })
})