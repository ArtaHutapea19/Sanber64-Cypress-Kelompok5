describe('Create an Account', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('First Name empty', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#firstname-error').should('be.visible')
    cy.get('#firstname-error').should('contain.text','This is a required field.')
  })
  it('Last Name empty', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Haloo')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#lastname-error').should('be.visible')
    cy.get('#lastname-error').should('contain.text','This is a required field.')
  })
  it('Email address empty', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Haloo ')
    cy.get('#lastname').type('Tester ')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#email_address-error').should('be.visible')
    cy.get('#email_address-error').should('contain.text','This is a required field.')   
  })
  it('Email address not valid', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Haloo ')
    cy.get('#lastname').type('Tester ')
    cy.get('#email_address').type('halotester')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#email_address-error').should('be.visible')
    cy.get('#email_address-error').should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com).')   
  })
  it('Password Empty', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Haloo ')
    cy.get('#lastname').type('Tester ')
    cy.get('#email_address').type('halotester@mail.com')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error').should('be.visible')
    cy.get('#password-error').should('contain.text','This is a required field.')   
  })
  it('Confirmation Password Empty', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Haloo ')
    cy.get('#lastname').type('Tester ')
    cy.get('#email_address').type('halotester@mail.com')
    cy.get('#password').type('Testing123#')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-confirmation-error').should('be.visible')
    cy.get('#password-confirmation-error').should('contain.text','This is a required field.')   
  })
  it('Confirmation Password Not Same as password', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Haloo ')
    cy.get('#lastname').type('Tester ')
    cy.get('#email_address').type('halotester@mail.com')
    cy.get('#password').type('Testing123#')
    cy.get('#password-confirmation').type('Test12345$')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-confirmation-error').should('be.visible')
    cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again.')   
  })
  it('Password without combination characters', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Haloo ')
    cy.get('#lastname').type('Tester ')
    cy.get('#email_address').type('halotester@mail.com')
    cy.get('#password').type('testabcde')
    cy.get('#password-confirmation').type('testabcde')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error').should('be.visible')
    cy.get('#password-error').should('contain.text','Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')   
  })
  it('Password less then 8 characters', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Haloo ')
    cy.get('#lastname').type('Tester ')
    cy.get('#email_address').type('halotester@mail.com')
    cy.get('#password').type('Tes1@3')
    cy.get('#password-confirmation').type('Tes1@3')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error').should('be.visible')
    cy.get('#password-error').should('contain.text','Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')   
  })
  it('Register with existing email', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Haloo ')
    cy.get('#lastname').type('Tester ')
    cy.get('#email_address').type('halotester@mail.com')
    cy.get('#password').type('Halo12345$')
    cy.get('#password-confirmation').type('Halo12345$')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.message-error > div').should('be.visible')
    cy.get('.message-error > div').should('contain.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')     
  })
    it.('Create an an account succeeded', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Haloo ')
    cy.get('#lastname').type('Tester 4')
    cy.get('#email_address').type('halotester4@mail.com')
    cy.get('#password').type('Halo12345$')
    cy.get('#password-confirmation').type('Halo12345$')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.message-success > div').should('be.visible')
    cy.get('.message-success > div').should('contain.text','Thank you for registering with Main Website Store.')
  })  
})