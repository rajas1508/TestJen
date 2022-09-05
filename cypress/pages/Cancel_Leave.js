export class LeaveManagement{

    login()
    {
        cy.visit('https://demo.talenticks.meetcs.com/lauth/login')
        cy.get(':nth-child(2) > .form-control').type('APPS000')
        cy.get(':nth-child(3) > .form-control').type('Apps@123')
        cy.get('#btnLogin').click()
    }

    LeaveMg()
    {
        cy.get(':nth-child(4) > .has-ul').click()
        cy.get(':nth-child(4) > .hidden-ul > :nth-child(5) > .legitRipple').click()
    }

    CancelLeave()
    {
        cy.get(':nth-child(4) > ul > :nth-child(8) > .legitRipple').click()
        cy.get('#cancel_9155').click()
        cy.get('.swal2-confirm').click()    //confirm
        //cy.wait(7000)
        //cy.get('.swal2-cancel').click()   //cancel
        cy.get('.swal2-confirm').click()    //comment in case of cancel
        //cy.get('.breadcrumb > :nth-child(2) > a').click() 
        //cy.wait(3000)
        cy.get(':nth-child(4) > ul > :nth-child(9) > .legitRipple').click()
    }
    
    AttReport()
    {
        //cy.get(':nth-child(4) > .has-ul').click()
        //cy.get(':nth-child(4) > ul > :nth-child(9) > .legitRipple').click()
        cy.get('#dateRange').click()    //select date range
        cy.get('.today').click()
        cy.get('.today').click()
        // cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(1) > [data-title="r0c3"]').click()
        // cy.get(':nth-child(5) > .today').click()

        cy.get('.applyBtn').click()
        cy.get('.buttons-excel > :nth-child(1)').click()    //for excel
        
    }



    Logout()
    {
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()
    }


}