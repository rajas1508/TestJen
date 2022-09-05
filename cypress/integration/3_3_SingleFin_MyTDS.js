describe ('Finance', () =>
{

    it('Single Finance', () =>
    {
    cy.visit('https://demo.talenticks.meetcs.com/lauth/login')
    cy.get(':nth-child(2) > .form-control').should('have.class', 'form-control').type('APPS000')
            
    cy.get(':nth-child(3) > .form-control').should('have.class', 'form-control').type('Apps@123')
    cy.get('#btnLogin').click()

    //MyTDS
    cy.get(':nth-child(11) > .has-ul').click()                               //click on menu of Finance
    cy.get(':nth-child(11) > ul > :nth-child(4) > .legitRipple').click()     //click on menu of MY TDS calculation
    cy.wait(2000)
    cy.get('.select2-selection').click()                                     //click on calendar
    cy.get('li[id$="-126"]').click()                                         //select year



    
    cy.get('.col-md-12 > table > tbody >tr > td > a').invoke('removeAttr', 'target').click()            //*CUSTOM CSS*//
    //cy.url()
        //.should('include', 'https://demo.talenticks.meetcs.com/payroll/tds/get_tds_calculation/')
    //cy.xpath('/html/body/div[4]/div/div[2]/div[1]/div/h4/span')
        //.should('have.text', 'TDS Calculations')
    
    //LOGOUT
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()

    })

})