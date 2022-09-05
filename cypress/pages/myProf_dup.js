

export class MyProf{

    login()
    {
        cy.viewport(1280,720)
        cy.visit('https://demo.talenticks.meetcs.com/lauth/login')
        cy.get(':nth-child(2) > .form-control').type('APPS000')
        cy.get(':nth-child(3) > .form-control').type('Apps@123')
        cy.get('#btnLogin').click()
    }
    

    Myprofile()
    {
        cy.get('.sidebar-user-material-menu > .legitRipple').click() //click on Username
        cy.get('#user-nav > .navigation > :nth-child(1) > .legitRipple').click() //click on myprofile
        cy.get(':nth-child(2) > .btn').click()  //click on complete profile
    }

    BasicDetails()
    {   it('top form',function()
        {
        //cy.get('#txt_firstname').type('Rajesh') //firstName NonEditable
        //cy.get('#txt_lastname').type('Pujare')    //lastName NonEditable
        //cy.get('#txt_email').type('rajas.p@outlook.com')  //email NonEditable
        cy.get('#txt_contact').clear().type('9022022689')
        cy.get('#txt_dob').click()
        cy.get('#txt_dob_root > .picker__holder > .picker__frame > .picker__wrap > .picker__box > .picker__header > .picker__select--year').select('1993')
        cy.get('#txt_dob_root > .picker__holder > .picker__frame > .picker__wrap > .picker__box > .picker__header > .picker__select--month').select('August')
        //cy.get('#txt_dob_table > tbody > :nth-child(3) > :nth-child(5) > .picker__day').click()
        cy.get('#txt_dob_table > tbody > :nth-child(3) > :nth-child(1) > .picker__day').click()
        })

        //Address
        it('perm add',function()
        {
        //perm add
        cy.get('#txt_hsno').clear().type('404')
        cy.wait(3000)
        cy.get('#txt_bldgname').clear().type('Mistry Mahal CHSL')
        cy.wait(3000)
        cy.get('#txt_strtname').clear().type('Sahakar Road')
        cy.wait(3000)
        cy.get('#txt_locality').clear().type('VileParle East')
        cy.wait(3000)
        cy.get('#select2-selcountry-container').click()
        cy.get('li[id$="101"]').click()
        cy.get('#select2-selstate-container').click()
        cy.get('li[id$="-22"]').click()
        cy.get('#select2-selcity-container').click()
        cy.get('li[id$="2707"]').click()
        })

        it('chkbox for cur_add is perm',function()
        {
        //Checkbox for perm add is same as cur add
        cy.get('.col-md-12 > .form-group > :nth-child(2) > .choice > span > .styled').click()       //No 
        //cy.get("#BasicDetailsForm > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > div > div > label:nth-child(3) > div > span > input").check()
        cy.get('.col-md-12 > .form-group > :nth-child(3) > .choice > span > .styled').click()       //Yes
        //cy.get("#BasicDetailsForm > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > div > div > label:nth-child(2) > div > span > input").check()
        })

        it('curr add',function()
        {
        //Current add
        cy.get('#txt_currhsno').type('5/A Wing')
        cy.get('#txt_currbldgname').type('Shanti Apt')
        cy.get('#txt_currstrtname').type('Datta Mandir Road')
        cy.get('#txt_currlocality').type('Sector 17 Airoli West')
        cy.get('#select2-selcurrcountry-container').click()
        cy.get('li[id$="101"]').click()
        cy.get('#select2-selcurrstate-container').click()
        cy.get('li[id$="-22"]').click()
        cy.get('#select2-selcurrcity-container').click()
        cy.get('li[id$="2726"]').click()
        })

        it('gender',function()
        {
        //Male & Female 
        cy.get('.row > :nth-child(1) > .select2 > .selection > .select2-selection').click()
        cy.get('li[id$="-2"]').click()  //-1> Male  ; -2 > Female
        })
    
        it('Marrital Status',function()
        {
        //Marrital Status
        cy.get(':nth-child(5) > .row > :nth-child(2) > .select2 > .selection > .select2-selection').click()
        cy.get('li[id$="-2"]').click()  //-1> Single  ; -2 > Married ; -3 > Divorced
        })

        it('Anniversary date',function()
        {
        //Anniversary date
        cy.get('#txt_wedanniv').click()
        cy.get('.ui-datepicker-year').select('1997')
        cy.get('.ui-datepicker-month').select('Jan')
        cy.wait(4000)
        cy.get(':nth-child(2) > :nth-child(3) > .ui-state-default').click().click() //path of particular date given by cypress
        })

        it('Lang Known',function()
        {
        // cy.get('.icon').click({ multiple: true }) //delete or dustbin button on add language form
        // cy.get('.swal2-confirm').click()    //select ok displayed msg
        // cy.get('.icon').click() //delete or dustbin button on add language form
        // cy.get('.swal2-confirm').click()    //select ok displayed msg
        // cy.get('.icon').click() //delete or dustbin button on add language form
        // cy.get('.swal2-confirm').click()    //select ok displayed msg
        
        //this functionality has challege as ID becomes 1 after deleting one language if there are two
        cy.get('#btn_add_language').click() //add button of language
        cy.get('#langname1').type('Marathi')    //Enter Language
        cy.get('#langread1').check()    //check read
        cy.get('#langspeak1').check()   //check speak
        cy.get('#langwrite1').check()   //check write 
        })

        it('Save continue',function()
        {
        cy.get(':nth-child(7) > .col-md-12 > .btn').click() //save & continue
        })
    }   
    
    

    Logout()
    {
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()
    }


}

