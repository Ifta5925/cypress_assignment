import LoginPage from "../pages/LogInPage"
import Appointment from "../pages/Appointment"
import Verify from "../pages/VerifyPage"

describe("Make An Appointment", ()=>{
    const loginPage = new LoginPage();
    const appointment = new Appointment;
    const verify = new Verify;
    beforeEach(()=>{
        cy.viewport(1920,1080)
    })
    it("Going to make an appointment",()=>{
        loginPage.userLogin("John Doe","ThisIsNotAPassword");
        appointment.userInAppointmentPage();
        verify.verifyContent();
    })
})