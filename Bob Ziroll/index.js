let menu = [
    {name:"Sandwitch",price:25},
    {name:"Burger",price: 30},
    {name:"Pizza",price:60},
    {name:"Milk Shake",price:70}
]

let cashInRegister = 100
let orderQueue = []
// -----------------------------------------------
/**
 Challenge 1 : Create a utility function "addNewPizza" that takes a pizza object and add it to the menu
 **/
function addNewPizza(addPizza){
    menu.push(addPizza);
}
// ---------------------------------------------

/** 
Challenge 2 :Write another utility function, placeOrder that takes a "pizza name parameter" and :

1:  finds that pizaa object in the menu,
2:  adds the income to the cashRegister,
3:  pushes a new "order object" to the order queue.,
    (eg:{pizza:selectedPizzaObjFrom step:1,status:"ordered"})
4 : returns the new order object(just in case we need it later)

**/

function placeOrder(pizzaName){
    
}