class ShopPage {
 
    getShopMaterail(){
        let datas;
        cy.fixture("example").then(function(data) {
            datas = data
            return datas
           }) 
       return datas.productName.forEach(element => {
            cy.selectProduct(element)
          });
    }
}
export default ShopPage;