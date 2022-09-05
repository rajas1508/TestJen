describe ('Finance', () =>
{

    it('Single Finance', () =>
    {

    cy.visit('https://demo.talenticks.meetcs.com/lauth/login')
    cy.get(':nth-child(2) > .form-control').type('APPS000')
    cy.get(':nth-child(3) > .form-control').type('Apps@123')
    cy.get('#btnLogin').click()

    //Payslip
    cy.get(':nth-child(11) > .has-ul').click();
    cy.get('.active > .hidden-ul > :nth-child(2) > .legitRipple').click()
    cy.get('.odd > :nth-child(6) > .btn').click()
    
    })

})