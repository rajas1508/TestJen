
export class LeaveManagement{

    login()
    {
        cy.visit('https://demo.talenticks.meetcs.com/lauth/login')
        cy.get(':nth-child(2) > .form-control').type('APPS000')
        cy.get(':nth-child(3) > .form-control').type('Apps@123')
        cy.get('#btnLogin').click()
    }
    

    LeaveReg()
    {
        cy.get(':nth-child(4) > .has-ul').click()
        cy.get(':nth-child(4) > .hidden-ul > :nth-child(5) > .legitRipple').click()
        //cy.get('.fc-next-button').click()
        cy.get(':nth-child(2) > .fc-bg > table > tbody > tr > .fc-wed').click()
        cy.wait(3000)
        //cy.get(':nth-child(4) > .hidden-ul > :nth-child(5) > .legitRipple').click()
        //cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[4]/ul/li[5]/a').click()
        //cy.get(':nth-child(5) > .fc-content-skeleton > table > thead > tr > .fc-thu').click() //comment for case 4
        
        // // cy.get('.fc-next-button').click()                                                       //comment for casse 1,2 & 3
        // // cy.get(':nth-child(5) > .fc-bg > table > tbody > tr > .fc-wed').click()                 //comment for casse 1,2 & 3
        cy.get('.select2-selection').click()
        cy.get('li[id$="-7"]').click()    //-2 > privilege; -7> LWP ; -11 > Casual

        //CASE 1: fullday
        //cy.get(':nth-child(2) > .fc-bg > table > tbody > tr > .fc-wed').click()    //full day
        // cy.get('#from').click()
        // cy.get('#to').click()
        cy.get('#reason').clear().type('due to medical emergency')
        cy.get('.btn-primary').click()
        cy.wait(7000)
        cy.get('.swal2-confirm').click()


        // //CASE 2: half day
        // cy.get('.kind_of_leave > .col-lg-9 > :nth-child(2)').click()    //half day
        // cy.get('.which_half > .col-lg-9 > :nth-child(1)').click()   //first half
        // cy.get('.which_half > .col-lg-9 > :nth-child(2)').click()   //second half
        // cy.get('#reason').clear().type('due to medical emergency')
        // cy.get('.btn-primary').click()
        // cy.wait(7000)
        // cy.get('.swal2-confirm').click()
        

        // //CASE 3: Full day multiple days
        // cy.get('.kind_of_leave > .col-lg-9 > :nth-child(1)').click()    //full day
        // //*NOTE: kept from date default as employee will click only on that where he has taken leave**
        // cy.get('#to').click()
        // //cy.get(':nth-child(5) > :nth-child(5) > .ui-state-default').click()
        // cy.get('.ui-datepicker-next').click()   //for next month calendar
        // cy.get(':nth-child(2) > :nth-child(5) > .ui-state-default').click()
        // cy.get('#reason').clear().type('due to medical emergency')        
        // cy.get('.btn-primary').click()
        // cy.wait(7000)
        // cy.get('.swal2-confirm').click()


        // //CASE 4: Preplanned next months leave
        // cy.get('.kind_of_leave > .col-lg-9 > :nth-child(1)').click()            //full day
        // cy.get('#to').click()
        // //cy.get(':nth-child(5) > :nth-child(6) > .ui-state-default').click()   //for current months to date
        // cy.get('.ui-datepicker-next').click()                                   //for next month calendar
        // cy.get(':nth-child(1) > :nth-child(3) > .ui-state-default').click()     //for next month calendar
        // // cy.get('#reason').clear().type('due to medical emergency')        
        // // cy.get('.btn-primary').click()
        // cy.wait(7000)
        // cy.get('.swal2-confirm').click()
    }


    EncashLeave()
    {
        //cy.get(':nth-child(4) > .has-ul').click()
        cy.get(':nth-child(4) > ul > :nth-child(6) > .legitRipple').click()
        cy.get('#select2-leavetype-container').click()
        cy.get('li[id$="-8"]').click()      //-2 > privilege; -4 > compensatory; -7> LWP ; -11 > Casual; -8 > maternity
        cy.wait(2000)
        cy.get('#btnSubmit').click()        //button apply leave encashment
        cy.wait(5000)
        cy.get('.swal2-confirm').click()    //click ok on msg
        cy.get(':nth-child(4) > ul > :nth-child(8) > .legitRipple').click()
        //cy.wait(2000)   
     }

    // ApplyCompOff()  //pending due to data is not available
    // {
        // // cy.get(':nth-child(4) > .has-ul').click()
        // // cy.get(':nth-child(4) > ul > :nth-child(7) > .legitRipple').click()

    // }

    CancelLeave()
    {
        cy.get(':nth-child(4) > .has-ul').click()
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
        cy.get(':nth-child(4) > ul > :nth-child(9) > .legitRipple').click()
        cy.get('#dateRange').click()    //select date range
        cy.get('.today').click()
        cy.get('.today').click()
        cy.get('.applyBtn').click()
        cy.get('.buttons-excel > :nth-child(1)').click()    //for excel
        
    }



    Logout()
    {
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()
    }   
}