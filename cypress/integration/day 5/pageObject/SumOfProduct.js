class SumOfProduct {
 
   
    sumProduct(){
        let sum = 0;
     return  cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
            const textvalue= $el.text()
            const result = textvalue.split(" ");
            //to get accurate value by removing space infront and back of the number
            const res = result[1].trim()
    
            sum = Number(sum)+ Number(res)
            cy.log(sum)

        }).then(function() {
            cy.log(sum)
        })
       
       
    }
}
export default SumOfProduct;