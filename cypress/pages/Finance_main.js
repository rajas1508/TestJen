
export class Finance{

    Login()
    {
        cy.visit('https://demo.talenticks.meetcs.com/lauth/login')
        cy.get(':nth-child(2) > .form-control').type('APPS000')
        cy.get(':nth-child(3) > .form-control').type('Apps@123')
        cy.get('#btnLogin').click()
        cy.log('Logged In Successfully')
    }
    
    Fina()
    {
        //cy.get(':nth-child(11) > .has-ul').click();
        //cy.get(':nth-child(11) > .hidden-ul > :nth-child(3) > .legitRipple > span').click()
    }

    Payslip()
    {
        //cy.get(':nth-child(11) > .hidden-ul > :nth-child(2) > .legitRipple').click();
        //cy.get(':nth-child(11) > ul > .active > .legitRipple').click()  //click on payslip submenu under finance
        //cy.get(':nth-child(11) > .hidden-ul > :nth-child(2) > .legitRipple > span').click()
        //cy.get('.odd > :nth-child(6) > .btn').click()   //download btn of payslip
        //cy.wait(3000)
        //cy.get(':nth-child(11) > .hidden-ul > :nth-child(3) > .legitRipple > span').click()
    }

    Reimb()
    {
        //cy.get(':nth-child(11) > .hidden-ul > :nth-child(3) > .legitRipple > span').click()  //click on payslip submenu under finance
        cy.get('.media-right > .btn').click()   //create
        cy.wait(3000)
        cy.get('#select2-selProject-container').click() //select project
        cy.get('li[id$="-87"]').click() //-87>Dentist & Doctors; -145>Theuniformcompany.com.au; -146>Welbornecorporateuniforms.com.au; -147>Evershinewalls.com.au
        //Select start date
        cy.get('#txtStartDate').click()
        cy.xpath('//*[@id="ui-datepicker-div"]/div[1]/div/select[1]').select('Mar')
        cy.xpath('//*[@id="ui-datepicker-div"]/div[1]/div/select[2]').select('2012')
        cy.get(':nth-child(2) > :nth-child(5) > .ui-state-default').click()
        //Select To date 
        cy.get('#txtEndDate').click()
        cy.xpath('//*[@id="ui-datepicker-div"]/div[1]/div/select[1]').select('Jun')
        cy.xpath('//*[@id="ui-datepicker-div"]/div[1]/div/select[2]').select('2012')
        cy.get(':nth-child(2) > :nth-child(5) > .ui-state-default').click()
        //Expense Details
        cy.get('#taExpenseDetails').type('test')

        cy.get('#out_expense').check()
        cy.get('#local_expense').check()
        cy.get('#loc_expense3 > :nth-child(2) > .text-slate > .icon-trash').click() //delete or dustbin icon
        cy.get('#loc_expense2 > :nth-child(2) > .text-slate > .icon-trash').click() //delete or dustbin icon

        //date
        cy.get('#loc_expense_date1').click()
        cy.xpath('//*[@id="ui-datepicker-div"]/div[1]/div/select[1]').select('Jun')
        cy.xpath('//*[@id="ui-datepicker-div"]/div[1]/div/select[2]').select('2012')
        cy.get(':nth-child(2) > :nth-child(5) > .ui-state-default').click()

        //merchant
        cy.get('#loc_merchant1').type('test')
        cy.get('#select2-loc_category1-container').click()
        cy.get('li[id$="-44"]').click()     //44> Train
        //Subcategories
        cy.get('#select2-loc_sub_category1-container').click()
        cy.get('li[id$="-20"]').click() //15>first class; 20> second class
        
        //currency
        cy.get('#bstb-loc_currency1').click()
        cy.get('#loc_expense1 > :nth-child(7) > :nth-child(1) > .input-group-addon > .btn-group > .dropdown-menu > :nth-child(59) > a').click()
        cy.get('#loc_amount1').type('5400')
        cy.get('#loc_desc1').type('test')
        cy.get('#loc_paid1').type('card')
        const filepath1 = 'bill.png'
        cy.get('#loc_file1').attachFile(filepath1)

        cy.get('#btnSave').click()
        cy.get('.swal2-confirm').click()
        cy.get('#btnSubmit').click()
        cy.wait(2000)
        cy.get('.swal2-confirm').click()
        cy.get('.swal2-confirm').click()


    }

    MyTDSCal()
    {
        cy.get(':nth-child(11) > .has-ul').click()
        cy.get(':nth-child(11) > ul > :nth-child(4) > .legitRipple').click()
        cy.wait(2000)
        cy.get('.select2-selection').click()
        cy.get('li[id$="-172"]').click()
        cy.get(':nth-child(4) > .btn').click()
    }
    
    MyInvDec_PreviousDeclarations()
    {
        cy.get(':nth-child(11) > .has-ul').click()
        cy.get(':nth-child(11) > ul > :nth-child(5) > .legitRipple').click()
        cy.wait(2000)
        cy.get('#add_signatory').click()    
    }

    MyInvDec_TaxRegime()
    {
        cy.get(':nth-child(11) > .has-ul').click()
        cy.get(':nth-child(11) > ul > :nth-child(5) > .legitRipple').click()
        cy.wait(2000)  
        cy.get('#view_tax_regime_btn').click()
    }

    Logout()
    {
        cy.wait(7000)
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()
    }
}