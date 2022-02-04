/// <reference types="cypress" />

describe('Hooks', () => {
    before(() => {
      // runs once before all tests in the block
    })
  
    beforeEach(() => {
      // runs before each test in the block
    })
  
    afterEach(() => {
      // runs after each test in the block
    })
  
    after(() => {
      // runs once after all tests in the block
    })


    //block of excution 
    it("Hook test 1",()=>{

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        //cy.get("form input.form-control:nth-child(1)").type('bob')
        cy.get("input[name='name']:nth-child(2)").type("bob")
        cy.get("select").select("Female")

    })
  })
