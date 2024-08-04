 interface Quiz{
    name:string,
    type:string,
    course:string,
}
interface Course{
    name:string,
    author:string,
    subject:string,
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}