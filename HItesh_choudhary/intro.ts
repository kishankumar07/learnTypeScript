function signUpUser(name:string,email:string,isValid:string){
    return name + email + isValid;
}
signUpUser('1','2','3')

let User = {
    name : "Kishan",
    email : 'kishantashok@gmail.com',
    isActive : true
}

function createUser({name:string,isActive:boolean}){}

let newUser = {name:User.name,isActive:User.isActive,email:'h@h.com'}
createUser(newUser)

function createCourse():{name:string,price:number}{
    return {name:"React.js",price:333}
}
createCourse();
// -------------------------------------------------------------------------

                // TYPE ALIAS

type User = {
    readonly _id: number,
    name: string,
    email: string,
    isActive:boolean
    credPayDetails ?:number,
}

let myUser:User = {
    _id:123,
    name:'Kishan',
    email:'kishantashok@gmail.com',
    isActive:true,
}
myUser.name = 'Kishan.ta'
// myUser._id = '234'
// if you try to assign value to _id, it will throw error on your face , becz it is readonly
// there is an optional use case where some might not have credit card , so it is optional and if given it will be accepted else no issue

// now about the optional credPayDetails
type cardNumber = {
    cardNumber : string
}
type cardDate = {
    cardDate:string
}
// finally 
type cardDetails = cardNumber & cardDate & {
    cvv:number
}


// ------------------------------------------------------------------------------






// -----------------------------------------------------------------------------

 
export{}