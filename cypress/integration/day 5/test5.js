/// <reference types="cypress" />
import HomePage from "./pageObject/HomePage"
import ShopPage from "./pageObject/ShopPage"
import ProductPage from "./pageObject/ProductPage"
import SumOfProduct from "./pageObject/SumOfProduct";

describe('Reuse code and POM', () => {
            let datas;
            before(() => {
            
            cy.fixture("example").then(function(data) {
                datas = data
                return datas
            }) 
            })
            
        //===---------------------------------------------------==
        //===                   Reuse code                      ==
        //===---------------------------------------------------==
            it("Reuse code",()=>{
        
                cy.visit("https://rahulshettyacademy.com/angularpractice/")

                cy.get(':nth-child(2) > .nav-link').click()

                //======= passing parameter directly       ===============
                cy.selectProduct("Blackberry") 

                cy.get(':nth-child(1) > .card > .card-footer > .btn')
                //======= Loading from JSON file of array  ===============
                for (let index = 0; index < datas.productName.length; index++) {
                cy.selectProduct(datas.productName[index])
                }
                //======= Loading from JSON file of array using foreach ==
                datas.productName.forEach(element => {
                cy.selectProduct(element)
                });
            })



        //===---------------------------------------------------==
        //===     Pause and Debug function                      ==
        //===---------------------------------------------------==

            it("Pause and Debug function",()=>{
                cy.visit("https://rahulshettyacademy.com/angularpractice/")
                cy.get("input[name='name']:nth-child(2)").type(datas.name)
                cy.get("select").select(datas.gender)
                cy.get(':nth-child(4) > .ng-untouched').should('have.value',datas.name)
                cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
                cy.get('#inlineRadio3').should('be.disabled')

                cy.get('#inlineRadio1').should('not.be.checked')
                cy.get('#inlineRadio1').check()
                cy.get('#inlineRadio1').should('be.checked')

                //pause for code debug
                cy.pause() //pause()

                cy.get(':nth-child(2) > .nav-link').click().debug()   //debug()
                cy.selectProduct("Blackberry")   
                cy.selectProduct("Nokia Edge") 
                cy.selectProduct("iphone X") 
                datas.productName.forEach(element => {
                cy.selectProduct(element)
                });
            })



       //===---------------------------------------------------==
       //===         implement POD pattern                     ==
       //===---------------------------------------------------==

            it.only("implement POD pattern",()=>{
                cy.visit("https://rahulshettyacademy.com/angularpractice/")

                const homePage = new HomePage()  // how to declare the class
                const shopPage = new ShopPage()
                const productPage = new ProductPage()
                
        
                homePage.getEditBox().type(datas.name)

                homePage.getGender().select(datas.gender)
                homePage.getTwoWayDataBinding().should('have.value',datas.name)
                homePage.getEditBox().should('have.attr','minlength','2')
                homePage.getEntrepreneaur().should('be.disabled')
                homePage.getShopTab().click()
        
                //to take the product
                datas.productName.forEach(element => {
                cy.selectProduct(element)
                });
        
                //to see the product added into cart
                productPage.checkoutButton().click()
            })
   })
 