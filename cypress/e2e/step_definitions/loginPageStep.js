import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require('../../pages/loginPage.json');
import { generateValidName} from '../../support/commands.js';
// Path to the image file in the fixtures directory
const fileName = 'image.jpeg';

var name = generateValidName();
Given('I Access the site', () => {    
    cy.visit(Cypress.env("appUrl"));    
}); 

Then('I click on login screen signup button', () => {
    cy.get(loginPage.signUpBtn).should('be.visible').click(); 
})

Then('I click on secure pro signup button', () => {
    cy.get(loginPage.secureProSignupBtn).should('be.visible').click(); 
})

Then('I click on popup no button', () => {
    cy.get(loginPage.signupNoBtn).should('be.visible').click(); 
})

Then(/^I enter organization name "(.*)"$/, (val) => {    
    cy.get(loginPage.organizationNameTxt).should('be.visible').clear().type(val);
})

Then('I click on agree and continue button', () => {
    cy.get(loginPage.agreeAndContinueBtn).should('be.visible').click(); 
})

Then('I click on email signup button', () => {
    cy.get(loginPage.emailSignupBtn).should('be.visible').click(); 
})

Then(/^I enter email "(.*)"$/, (val) => {    
    cy.get(loginPage.emailTxt).should('be.visible').clear().type(name+"+"+val);
})

Then(/^I enter name "(.*)"$/, (val) => {    
    cy.get(loginPage.nameTxt).should('be.visible').clear().type(val);
})

Then(/^I enter password "(.*)"$/, (val) => {    
    cy.get(loginPage.passwordTxt).should('be.visible').clear().type(val);
})

Then('I click on agree and signup button', () => {
    cy.get('span').contains(loginPage.agreeAndSignUpBtn).should('be.visible').click(); 
})

Then('I see verify your email page', () => {
    cy.get('h1').contains(loginPage.verifyYourEmailPage).should('be.visible')
})

Then('logout user', () => {
    cy.visit("https://app-staging.securecompliance.us/auth/sign-up"); 
    cy.get('button').contains(loginPage.logoutBtn).should('be.visible').click(); 
})

Then(/^I enter login email "(.*)"$/, (val) => {    
    cy.get(loginPage.loginEmailTxt).should('be.visible').clear().type(name+"+"+val);
})

Then(/^I enter login password "(.*)"$/, (val) => {    
    cy.get(loginPage.loginPasswordTxt).should('be.visible').clear().type(val);
})

Then('I click on login button', () => {
    cy.get(loginPage.loginBtn).should('be.visible').click(); 
})

Then('I click on next button', () => {
    cy.get("span").contains(loginPage.nextBtn).should('be.visible').click(); 
})

Then('I click on proceed to payment button', () => {
    cy.get("span").contains(loginPage.proceedToPaymentBtn).should('be.visible').click(); 
})

Then(/^I enter card number "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.cardNumberTxt).should('be.visible').clear().type(val);
})

Then(/^I enter card expiry "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.cardExpiryTxt).should('be.visible').clear().type(val);
})

Then(/^I enter card cvc "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.cardCvcTxt).should('be.visible').clear().type(val);
})

Then(/^I enter billing name "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.billingNameTxt).should('be.visible').clear().type(val);
})

Then(/^I enter billing postal code "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.billingPostalCodeTxt).should('be.visible').clear().type(val);
})

Then(/^I select billing country "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.billingCountry).should('be.visible').select(val);
})

Then('I click on pay button', () => {
    cy.wait(5000);
    cy.switchToSystemIfram().find(loginPage.payBtn).should('be.visible').invoke('show').click(); 
    
})

Then('I click on back To Dashboard button', () => {
    cy.get("button").contains(loginPage.backToDashboard).should('be.visible').click(); 
})

Then('I click on entities', () => {
    cy.get("h2").contains(loginPage.entitiesSideNav).should('be.visible').click(); 
})

Then('I click on New entity', () => {
    cy.get("span").contains(loginPage.newEntityButton).should('be.visible').click(); 
})
Then(/^I enter Legal Name "(.*)"$/, (val) => {    
    cy.get(loginPage.organizationLegalName).should('be.visible').clear().type(val);
})
Then('I click on Save Changes', () => {
    cy.get("span").contains(loginPage.saveChanges).should('be.visible').click(); 
})

Then('I click on Add Owner', () => {
    cy.get("span").contains(loginPage.addOwnerButton).scrollIntoView().should('be.visible').click(); 
})

Then(/^I enter Phone Number "(.*)"$/, (val) => {    
    cy.get("mat-label").contains("Phone Number").scrollIntoView().should('be.visible').click();
    cy.get(loginPage.nationalPhoneNumber).should('be.visible').clear().type(val);
})

Then(/^I enter date of Birth "(.*)"$/, (val) => {    
    cy.get("mat-label").contains("Date of Birth").scrollIntoView().should('be.visible').click();
    cy.get(loginPage.openCalender).should('be.visible').clear().type(val);
})


Then('I click on Upload ID Button', () => {
    cy.get("span").contains(loginPage.uploadID).scrollIntoView().should('be.visible').click(); 
})

Then('I Upload File', () => {
    cy.get(loginPage.uploadFile).should('be.visible').invoke('removeAttr', 'hidden');
    cy.get(loginPage.uploadFile).attachFile(fileName);
    cy.get(loginPage.uploadFile).should('have.value', fileName);  
})





beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });

afterEach(() => {
    cy.visit("https://app-staging.securecompliance.us/auth/sign-up"); 
    cy.get('button').contains(loginPage.logoutBtn).should('be.visible').click(); 
    cy.wait(3000)
  });






