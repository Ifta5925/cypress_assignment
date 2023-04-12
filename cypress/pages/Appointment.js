class Appointment{
    userInAppointmentPage(){
            cy.get('#combo_facility').select("Seoul CURA Healthcare Center").should("have.value","Seoul CURA Healthcare Center");
            cy.get('#chk_hospotal_readmission').check();
            cy.get('#radio_program_medicaid').check("Medicaid")
            cy.get('#txt_visit_date').click().type("27/04/2023");
            cy.get('#txt_comment')
            cy.get('#btn-book-appointment').click()   
    }
}
export default Appointment;