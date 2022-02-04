class ProductPage {
    
    checkout(){
        return cy.get(':nth-child(5) > :nth-child(5) > .btn')
    }

    getCountry(){
        return  cy.get('#country')
    }
    getSuggestions(){
        return  cy.get(".suggestions > :nth-child(1) > li > a")
    }
    getcheckBox(){
        return  cy.get('.checkbox > label > a')
    }
    getAlertCloseButton(){
        return  cy.get('.nsm-dialog-animation-fade > .btn')
    }

    getPurchaseButton(){
        return cy.get('.ng-untouched > .btn')
    }

}
export default ProductPage;