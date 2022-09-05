
export class MyProf{

    login()
    {

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

    BasicDetails_top()
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
        cy.log('Basic details filled successfully')
    }

    BasicDetails_add()
    {   
        //Address
        //perm add
        cy.get('#txt_hsno').clear().type('404')
        //cy.wait(3000)
        cy.get('#txt_bldgname').clear().type('Mistry Mahal CHSL')
        //cy.wait(3000)
        cy.get('#txt_strtname').clear().type('Sahakar Road')
       // cy.wait(3000)
        cy.get('#txt_locality').clear().type('VileParle East')
       // cy.wait(3000)
        cy.get('#select2-selcountry-container').click()
        cy.get('li[id$="101"]').click()
        cy.get('#select2-selstate-container').click()
        cy.get('li[id$="-22"]').click()
        cy.get('#select2-selcity-container').click()
        cy.get('li[id$="2707"]').click()
        cy.log('Permenant Address Filled Successfully')

        //Checkbox for perm add is same as cur add
        cy.get('.col-md-12 > .form-group > :nth-child(2) > .choice > span > .styled').click()       //No 
        //cy.get("#BasicDetailsForm > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > div > div > label:nth-child(3) > div > span > input").check()
        cy.get('.col-md-12 > .form-group > :nth-child(3) > .choice > span > .styled').click()       //Yes
        //cy.get("#BasicDetailsForm > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > div > div > label:nth-child(2) > div > span > input").check()

        //Current add
        cy.get('#txt_currhsno').clear().type('5/A Wing')
        cy.get('#txt_currbldgname').clear().type('Shanti Apt')
        cy.get('#txt_currstrtname').clear().type('Datta Mandir Road')
        cy.get('#txt_currlocality').clear().type('Sector 17 Airoli West')
        cy.get('#select2-selcurrcountry-container').click()
        cy.get('li[id$="101"]').click()
        cy.get('#select2-selcurrstate-container').click()
        cy.get('li[id$="-22"]').click()
        cy.get('#select2-selcurrcity-container').click()
        cy.get('li[id$="2726"]').click()
        cy.log('Current Address Filled Successfully')
    }
    
    BasicDetails_Gender()
    {   
        //Male & Female 
        cy.get('.row > :nth-child(1) > .select2 > .selection > .select2-selection').click()
        cy.get('li[id$="-2"]').click()  //-1> Male  ; -2 > Female

        //Marrital Status
        cy.get(':nth-child(5) > .row > :nth-child(2) > .select2 > .selection > .select2-selection').click()
        cy.get('li[id$="-2"]').click()  //-1> Single  ; -2 > Married ; -3 > Divorced
    
        //Anniversary date
        cy.get('#txt_wedanniv').click()
        cy.get('.ui-datepicker-year').select('1997')
        cy.get('.ui-datepicker-month').select('Jan')
        cy.wait(4000)
        cy.get(':nth-child(2) > :nth-child(3) > .ui-state-default').click().click() //path of particular date given by cypress
        cy.log('Gender Selection & Birthdate Updated Successfully')
    }

    BasicDetails_Lang()
    {       
        cy.get('.icon').click({ multiple: true }) //delete or dustbin button on add language form
        cy.get('.swal2-confirm').click()    //select ok displayed msg
        cy.get('.icon').click() //delete or dustbin button on add language form
        cy.get('.swal2-confirm').click()    //select ok displayed msg
        
        //this functionality has challege as ID becomes 1 after deleting one language if there are two
        cy.get('#btn_add_language').click() //add button of language
        cy.get('#langname1').type('Marathi')    //Enter Language
        cy.get('#langread1').check()    //check read
        cy.get('#langspeak1').check()   //check speak
        cy.get('#langwrite1').check()   //check write 
        cy.log('Language Selection done Successfully')

        cy.get(':nth-child(7) > .col-md-12 > .btn').click() //save & continue
        cy.log('BASIC DETAILS FORM SAVED SUCCESSFULLY')
    }   
    

    PerDetails()
    {
    //Personal Details
    cy.get('#txt_national').clear().type('Himalaya')   //Nationality
    cy.get('#txt_religion').clear().type('Aghori')  //religion
    cy.get('#txt_nomname').clear().type('abc')  //nom name
    
    //nom dob
    cy.get('#txt_nomdob').click()
    cy.xpath('//*[@id="txt_nomdob_root"]/div/div/div/div/div[1]/select[1]').select('1952')
    //cy.get("#txt_nomdob_root > div > div > div > div > div.picker__header > select.picker__select--year").select('1803')  //By JS path
    cy.xpath('//*[@id="txt_nomdob_root"]/div/div/div/div/div[1]/select[2]').select('April')
    //cy.get("#txt_nomdob_root > div > div > div > div > div.picker__header > select.picker__select--month").select('August') //by JS path
    cy.xpath('//*[@id="txt_nomdob_table"]/tbody/tr[3]/td[4]/div').click()
    //cy.get('#txt_nomdob_table > tbody > :nth-child(4) > :nth-child(5) > .picker__day').click()  //By JS path

    cy.get('#txt_nomrelatn').clear().type('abcd')           //Nominee relation
    cy.get('#txt_pannumbr').clear().type('BSHPP6926L')      //Pan
    cy.get('#txt_uannumbr').clear().type('123414529556')    //UAN Number
    
    //Blood group Selection
    cy.get('#select2-selbldgrp-container').click()
    cy.get('li[id$="5"]').click()

    //do you have relative in family
    cy.get(':nth-child(3) > .col-md-4 > .form-group > :nth-child(3)').click()   //No
    cy.wait(2000)
    cy.get(':nth-child(3) > .col-md-4 > .form-group > :nth-child(2)').click()   //Yes
    cy.get('#txt_relname').clear().type('abcd')   //add name
    cy.get('#reldiv > :nth-child(2) > .form-group > .select2 > .selection > .select2-selection').click()    //selection of grade
    cy.get('li[id$="-7"]').click()          // - 6 for A & -7 for G
    cy.get('#reldiv > :nth-child(3) > .form-group > .select2 > .selection > .select2-selection').click()    //selection of dept
    cy.get('li[id$="-5"]').click()     //selection of dept
    //-1 E Comm; -2 Digital; -3 SEO; -4 Client Servicing; -5 Link Buildng; -6 Content; -7 Design; -8 Developement; -9 Marktng; -10 HR
    //-12 Sales; -13 SEM; -14 Social Media; -15 IT; -17 Digital SEO; -18 Digital Marketng; -19 SEO-OffPage; -20 Ecommerce; -21 GMB

    //are u suffering from any ailments
    cy.get(':nth-child(4) > :nth-child(1) > .form-group > :nth-child(3)').click()   //No
    cy.wait(2000)
    cy.get('#PersonalDetails > .panel > :nth-child(4) > :nth-child(1) > .form-group > :nth-child(2)').click()   //Yes
    cy.get('#txta_alimnt').clear().type('cold fever')
    
    //undergone any surgery
    cy.get(':nth-child(4) > .col-md-4 > .form-group > :nth-child(3)').click()   // No
    cy.wait(2000)
    cy.get(':nth-child(4) > .col-md-4 > .form-group > :nth-child(2)').click()   // yes
    cy.get('#txta_surgery').clear().type('hand surgery')

    cy.get('#PersonalDetails > :nth-child(4) > .col-md-12 > .btn').click()  //save & continue
    cy.log('PERSONAL DETAILS FORM SAVED SUCCESSFULLY')
    }

    FamDet()
    {
        cy.get('#fmlyname1').clear().type('abc')    //family name
        cy.get('#select2-fmlyrel1-container').click()   //relationship
        cy.get('li[id$="-8"]').click()  //-1:Father; -2:Mother; -3:Wife; -4:Son; -5:Brother; -6:Sister; -7:Husband; -8:Daughter
    
        cy.get('#select2-fmlyoccp1-container').click()  //occupation
        cy.get('li[id$="-8"]').click()  //-1:Business; -2:Selfemployed; -3:ServicePublic; -4:ServicePrivate; -5:Retired; -6:Homemaker; -7:Deceased; -8:Others
        cy.get('#otherfmlyoccp1').clear().type('kheti')
    
        //dob
        cy.get('#fmlydob1').click()
        cy.get('.ui-datepicker-month').select('Feb')
        cy.get('.ui-datepicker-year').select('1978')
        cy.wait(1500) 
           
        //dependent on you
        cy.get(':nth-child(2) > .form-group > :nth-child(2) > .choice > span > .styled').check()    //dependent? yes
        cy.get(':nth-child(2) > .form-group > :nth-child(3) > .choice > span > .styled').check()    //dependent? no

       // residing with u is pending due to dyanamic element
        cy.get('.panel > :nth-child(1) > :nth-child(3) > :nth-child(3) > .form-group > :nth-child(2)').click()  //yes
        cy.get('.panel > :nth-child(1) > :nth-child(3) > :nth-child(3) > .form-group > :nth-child(3)').click()  //no
        cy.get('#fmlyaadhar_no1').clear().type('548787458749')  //enter adhar
        //add member, delete, skip pending
        
        //cy.get('#btn_add_fmly').click()   //Add member change value 1 to 2

        cy.get(':nth-child(6) > :nth-child(1) > .btn').click()  //save & continue
    }


    Ed_SSC()
    {
     //HIGH SCHOOL
    cy.get('#txt_ssc_board').clear().type('pune')   //board
    cy.get('#txt_ssc_school').clear().type('parle tilak')   //school name
    cy.get('#select2-selsscgrd-container').click()  //select grade system
    cy.get('li[id$="-1"]').click()
    cy.get('#txt_ssc_grade').clear().type('92.54')          //enter grade 
    cy.get('#select2-selsscfrom-container').click() //select from year
    cy.get('li[id$="1999"]').click()            
    cy.get('#select2-selsscto-container').click()   //Select To year
    cy.get('li[id$="2009"]').click()
    cy.get('#edudetssc > :nth-child(2) > .col-md-12 > .btn').click()    //Next degree
    }
    

    Ed_HSC()
    {
    //SECONDARY SCHOOL
    cy.get('#edunavtabs > :nth-child(2) > .legitRipple').click()
    cy.get('#txt_hsc_board').clear().type('mumbai')
    cy.get('#txt_hsc_college').clear().type('sathaye')
    cy.get('#select2-selhscsplztn-container').click()
    cy.get('li[id$="-4"]').click()
    cy.get('#select2-selhscgrd-container').click()
    cy.get('li[id$="-2"]').click()
    cy.get('#txt_hsc_grade').clear().type('54.15')
    cy.get('#select2-selhscfrom-container').click() //select from year
    cy.get('li[id$="2009"]').click()
    cy.get('#select2-selhscto-container').click()   //Select To year
    cy.get('li[id$="2011"]').click()
    cy.get('#edudethsc > :nth-child(2) > .col-md-12 > .btn').click()    //Next degree
    }


    Ed_Grad()
    {
    //GRADUATION
    cy.get('#edunavtabs > :nth-child(3) > .legitRipple').click()
    cy.get('#txt_grad_board').clear().type('Mumbai University')
    cy.get('#txt_grad_college').clear().type('FAMT')
    cy.get('#select2-selgraddeg-container').click() //click course
    cy.get('li[id$="-1"]').click()
    cy.get('#select2-selSpecialization-container').click()
    cy.get('li[id$="-5"]').click()         
    cy.get('#select2-selgradtype-container').click()
    cy.get('li[id$="-3"]').click()  
    cy.get('#select2-selgradgrd-container').click()
    cy.get('li[id$="-1"]').click()
    cy.get('#txt_grad_grade').clear().type('61.2')
    cy.get('#select2-selgradfrom-container').click()    //select from year
    cy.get('li[id$="2011"]').click()
    cy.get('#select2-selgradto-container').click()      //Select To year
    cy.get('li[id$="2015"]').click()
    cy.get('#edudetgrad > :nth-child(2) > .col-md-12 > .btn').click()   //click on next degree
    }

    
    Ed_PostGrad()
    {
    //POST GRADUATION STARTS   ***********PERFECT FORM, REFER THIS TO REMAINING OTHER FORM*****************
    cy.get('#edunavtabs > :nth-child(4) > .legitRipple').click()
    cy.get('#txt_pgrad_board').clear().type('ABC')
    cy.get('#txt_pgrad_college').clear().type('XYZ')
    cy.get('#select2-selpgraddeg-container').click()
    cy.get('li[id$="-14"]').click()
    cy.get('#select2-selpSpecialization-container').click()
    cy.get('li[id$="-1281"]').click()
    cy.get('#select2-selpgradtype-container').click()
    cy.get('li[id$="-3"]').click()
    cy.get('#select2-selpgradgrd-container').click()
    cy.get('li[id$="-1"]').click()
    cy.get('#txt_pgrad_grade').clear().type('52.3')
    cy.get('#select2-selpgradfrom-container').click()
    cy.get('li[id$="2015"]').click()
    cy.get('#select2-selpgradto-container').click()
    cy.get('li[id$="2017"]').click()
    cy.get('#edudetpg > :nth-child(2) > :nth-child(1) > .btn').click()  //
    //POST GRADUATION ENDS   ***********PERFECT FORM, REFER THIS TO REMAINING OTHER FORM*****************
    }
    

    Logout()
    {
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()
    }


}

