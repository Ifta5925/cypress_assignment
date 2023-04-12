import LoginPage from "../pages/LogInPage"
import Appointment from "../pages/Appointment"


describe("Make An Appointment", ()=>{
    const loginPage = new LoginPage();
    const appointment = new Appointment;
    beforeEach(()=>{
        cy.viewport(1920,1080)
    })
    it("Going to make an appointment",()=>{
        loginPage.userLogin("John Doe","ThisIsNotAPassword");
        appointment.userInAppointmentPage();
    })
})