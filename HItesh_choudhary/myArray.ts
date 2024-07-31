// syntax to use is : number[] ,  string[] , Array<number>, Array<string>

let superHeroes:string[] = [];
let heroPower: number[] = [];
// let heroPower: Array<number> = []
// let superHerores: Array<string> = []


superHeroes.push('Spiderman')
heroPower.push(2)


// ----------------------------------------------------------
// Using the above it will work for either number or string in an array but if multiple data types are needed to be there in an array then we can use UNION

let mixedArray: (string | number )[] = []

mixedArray.push('Spiderman',1,2)

// --------------------------------------------------------

// now using a helper function to achieve the same, like mixed array will be there that takes string and array
let mixedArray1:(string | number)[] = []
function mixedFunction(hero:string,power:number):(string | number)[] {
        mixedArray1.push(hero,power)
        return mixedArray1;
}
mixedFunction('Superman',1)

// -----------------------------------------------------------


// question : try out a case for array which accepts more other than string, number also inlclude other data types like objects.

type user = {
    name:string,
    email:string,
    age?:number
}

let mercyObj = {
    name:'Kishan',
    email:'kishantashok@gmail.com',
    age:27
}

let mercyArray: (string | number | user)[] = [];

function mercyCreation(text:string,num:number,obj:user):(string | number | user)[]{
    mercyArray.push(text,num,obj)
    return mercyArray;
}
mercyCreation('handful',35,mercyObj)

// Here it has a helper function that helps adding all types of data into the mercyArray with the aid of helper function.
// ----------------------------------------------------------------------------