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
// my method:
function placeOrder(pizzaName){
    let obj = {};
    menu.forEach(x =>{
        if(x.name === pizzaName){
            cashInRegister += x.price;
            obj.pizza = x;
            obj.status = "ordered";
            orderQueue.push(obj);
        }
    })
    if(!orderQueue.length){
        console.log('sorry this menu is not here');
    }
    return orderQueue;
}
// console.log(placeOrder('Burger'))

let nextOrderId = 0;
// 2nd method (using find()) : 
function placeOrders(pizzaName){
    let menuFound = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if(!menuFound) return 'No such menu';
    cashInRegister +=menuFound.price;
    nextOrderId++;
    let orderPlaced = {id:nextOrderId,pizza:menuFound,status:"Ordered"};
    orderQueue.push(orderPlaced)
    return orderQueue;
}
placeOrders('Sandwitch')
placeOrders('Pizza');
placeOrders('Milk Shake')
console.log(placeOrders('Burger'))

// ---------------------------------------------------

/**
Challenge : write another utility function ,completeOrder,that takes an orderId as a paramter 
* finds the correct order from the orderQueue, and make its status as completed, for good measure
* return the found order from the function.

* Note : you'll need to ensure that we're adding id's to our order's when we create new orders. You can use  a global 'nextOrderId' variable and increment it every time a new order is created to simulate real id's being managed for us by a database.

 */
function completeOrder(orderId){
    let orderFound =  orderQueue.find(queueElem => queueElem.id === orderId);
    orderFound.status = "Completed";
    return orderQueue
}
completeOrder(1);
completeOrder(2);
console.log(completeOrder(3));