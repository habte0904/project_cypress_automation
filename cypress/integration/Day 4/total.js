/// <reference types="cypress" />
import  'cypress-iframe';  //import the cypress-iframe from modules




describe('Handling Table, Mouse Over and Frames', () => {
        
    let datas;
            before(() => {
            
                //calling example json file from fixture
                cy.fixture("example").then(function(data) {
                //this.data ( is to initialize the global variable in the cypress)
                //if we not do that data parameter is local variable. so we cann't access out of the loop
                datas = data
                }) 
            })


            //**************************************/  
            //***    Handling Alert and Confirm    */ 
            //=====================================*/
            it('Handling Alert and Confirm',function() {
        
                //Check boxes
                cy.visit("http://qaclickacademy.com/practice.php")
                cy.get('#alertbtn').click()
                cy.get('[value="Confirm"]').click()
                
                //normal window:alert
                cy.on('window:alert',(str)=> {//Mocha libraries used to assert 
                    expect(str).to.equal('Hello , share this practice page and share your knowledge')
                })
                

                // confirm alert
                cy.on('window:confirm',(str)=>
                {
                    expect(str).to.equal('Hello , Are you sure you want to confirm?')
                })
                
                cy.get('#opentab').invoke('removeAttr','target').click()
                //cy.url().should('include','practice')
                cy.go('back')
                
            })


            //**************************************/  
            //***      Handling Table              */
            //=====================================*/

            it('Handling Table Data',function() {
                cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

                cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

                        const text=$e1.text()
                        if(text.includes("Python"))
                        {
                            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                            {
                            const priceText=   price.text()
                            expect(priceText).to.equal('25')
                            })
                        }
                    })   
            })

            //**************************************/
            //***    Handling Mouse over            */     
            //=====================================*/

            it("Handling Mouse over",()=>{
                cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
                cy.get('div .mouse-hover-content').invoke('show')
                cy.contains('Top').click()
                cy.url().should('include','top')

                cy.contains('Top').click({force: true})
                cy.url().should('include','top')
            })


            //**************************************/
            //***        Handling iframes          */
            //=====================================*/

            it("handling iframes",()=>{
                cy.visit("https://rahulshettyacademy.com/AutomationPractice/",{timeout:10000})
                cy.frameLoaded('#courses-iframe')//first load your iframe page

                //iframe() make to render in the iframes browser
                cy.iframe().find("[href='#/mentorship']").eq(0).click()
                cy.iframe().find("h1[class*='pricing-title']").should("have.length",2)

            
            })



            //**************************************/
            //***  Handling data with fixture      */
            //*====================================*/
            it.only("create json in fixture for every form",()=>{

                cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
                cy.get("input[name='name']:nth-child(2)").type(datas.name)
                cy.get(':nth-child(2) > .form-control').type(datas.email)
                cy.get("select").select(datas.gender)
        
            })

})