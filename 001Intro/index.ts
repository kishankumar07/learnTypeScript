//function that will just return a string
// 1)
function greet(name:string):string{
    return `My name is ${name}`;
}
console.log('this function just returns a string :')
console.log(greet('Dave'));






// 2)
//Function to check the length of the string
function checkStringLength(str:string):number{
    return str.length;
}
let str:string = 'Hello'
console.log(checkStringLength(str));






// 3) Question: Define an interface for a Person object with properties name (string) and age (number). Write a function that takes a Person object and returns a greeting message.
interface Person {
    name:string,
    age:number
}
function greeting(name:string,age:number):string{
        return `Hello ${name} with age : ${age}`;
}
let Person = {name:"Rahul",age:36};
console.log(greeting(Person.name,Person.age));







// 4) Find area of rectanbgle using class repseresentation
class Area {
    length:number;
        breadth:number;
    constructor(length:number,breadth:number){
        

        this.length= length;
        this.breadth = breadth;
    }
    area():number{
       return this.length * this.breadth;
    }
}
let area= new Area(10,3);
console.log(area.area())