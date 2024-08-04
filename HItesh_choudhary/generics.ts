const score: Array<number> = []
const names: Array<string> = []

function identityThree<Type>(val: Type):Type{
    return val;
}
identityThree(3);
identityThree('5');
//hover over the line 7 and 8 so that what is the difference happened will be known

// -------------------------------------------------------------

// how production level codes are written:

function identityFour <T>(val:T):T{
    return val;
}
// instead of our traditional number, string, we use custom type:
interface Bottle{
    brand:string,
    type:number
}

// ok now it is created now how to pass it into the function

identityFour<Bottle>({brand:'test',type:3})
// if it was number or string or like that then no need to <> , becz this is custom it need to be specified.

// -------------------------------------------------------------


        // GENERICS in Arrays and arrow functions

function getSearchProducts<T>(products:Array<T>): T{
    //do some complex database designs
    const myIndex = 3;
    return products[myIndex];
}        

// next task is how to convert the exact same function to arrow function

// const getMoreSearchProducts = <T>(): => {} the actual syntax


                // ARROW FUNCTION


const getMoreSearchProducts = <T,>(products:Array<T>):T => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
} 