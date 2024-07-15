//function that will just return a string
// 1)
function greet(name) {
    return "My name is ".concat(name);
}
console.log('this function just returns a string :');
console.log(greet('Dave'));
// 2)
//Function to check the length of the string
function checkStringLength(str) {
    return str.length;
}
var str = 'Hello';
console.log(checkStringLength(str));
function greeting(name, age) {
    return "Hello ".concat(name, " with age : ").concat(age);
}
var Person = { name: "Rahul", age: 36 };
console.log(greeting(Person.name, Person.age));
// 4) Find area of rectanbgle using class repseresentation
var Area = /** @class */ (function () {
    function Area(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    Area.prototype.area = function () {
        return this.length * this.breadth;
    };
    return Area;
}());
var area = new Area(10, 3);
console.log(area.area());
