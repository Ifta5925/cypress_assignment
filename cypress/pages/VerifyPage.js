class Verify{
    verifyContent(){
        cy.get('#facility').should("have.text", "Seoul CURA Healthcare Center")
        cy.get('#hospital_readmission').should("have.text","Yes")
        cy.get('#program').should("have.text","Medicaid")
        cy.get('#visit_date').should("have.text","27/04/2023")
        cy.get(':nth-child(6) > .col-xs-8')
    }
}
export default Verify;