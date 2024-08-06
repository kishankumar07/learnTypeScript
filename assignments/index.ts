import { read } from "fs";

let readlineSync = require('readline-sync');

// 1) Function to accept a char and display at console

// (function(){
//     let userInput = readlineSync.question('enter a char');
//     console.log(`Entered character is ${userInput}`);
// })()

// ---------------------------------------------------------------------


// 2)
//function to accept 2 number as  input and display the sum at the console

// (function(){
//     let userInput1 = readlineSync.question('Please enter a number');
//     let userInput2 = readlineSync.question('please enter another number');
   
//     let num1 = parseFloat(userInput1);
//     let num2 = parseFloat(userInput2);

//     console.log(`Sum of both is ${num1+num2}`)
    
// })()

// ----------------------------------------------------------------------

// 3) write a program to find the simple interest

   

    // (function(){
    //     let userInput1 = readlineSync.question('Please enter the principal amount');
    //     let userInput2 = readlineSync.question('Please enter the Interest rate now');
    //     let userInput3 = readlineSync.question('Enter the number of years');

    //     let principalAmount = parseFloat(userInput1);
    //     let interestRate = parseFloat(userInput2);
    //     let noOfYears = parseFloat(userInput3)

    //     let simpleInterest = (principalAmount * interestRate * noOfYears)/100;
    //     console.log(`simple interest is ${simpleInterest}`);

    // })()


// -----------------------------------------------------------------------    

// 4) Check whether a student has passed or failed

// (function(){
//     let userInput = readlineSync.question('Enter your mark');
//     let mark= parseFloat(userInput);
//     if(mark >50){
//         console.log('passed');
//     }else{
//         console.log('failed')
//     }
// })()


// ---------------------------------------------------------------------------

// 5) To display grade when he/she enter their marks

// (function(){
//     let userInput = readlineSync.question('Enter your mark to get your grade');

//     let mark = parseFloat(userInput);

//     if(mark > 90) console.log('A');
//     else if(mark >80 && mark <= 90) console.log('B');
//     else if(mark > 70 && mark <=80) console.log('c');
//     else if(mark >60 && mark <= 70) console.log('D');
//     else if(mark >50 && mark <= 60) console.log('E');
//     else console.log('failed because your mark is :',mark,typeof mark);

// })()


// --------------------------------------------------------------------------

// 6)  Use switch case write a program to accept an input from the user and output day of a week based on that

// (function(){
//     let day = parseFloat(readlineSync.question('enter the number'));

//     switch(day){
//         case 1 : 
//             console.log('Monday');break;
//         case 2 :
//             console.log('Tuesday');break;
//         case 3 : 
//             console.log('Wednesday');break;
//         case 4 : 
//             console.log('Thursday');break;
//         case 5 :
//             console.log('Friday');break;
//         case 6 :
//             console.log('Saturday');break;
//         case 7 :
//             console.log('Sunday');break;
//         default :
//             console.log('Invalid entry ')            
//     }

// })()

// -----------------------------------------------------------------------------

// 7) Print multiplication table of given numbers 


// (()=>{
//     let value = parseFloat(readlineSync.question('Enter the number to get printed as the multiplication table'));

//     for(let i = 1;i<=10;i++){
//         console.log(`${value} x ${i} = ${value * i}`);
//     }

// })()

// ------------------------------------------------------------------------------

// 8) Sum of all odd numbers of a given limit

// (()=>{
//     let input = parseFloat(readlineSync.question('Enter the limit upto which the sum of odd numbers need to be found'));
//     let sum = 0;
//     for(let i = 1;i<input;i++){
//         if(i%2 !==0){
//             sum += i;
//         }
//     }
//     console.log('sum of all odd numbers upto this limit is :',sum);

// })()

// -=--------------------------------------------------------------------------

// 9) Printing the pattern 
// 1
// 1 2
// 1 2 3
// 1 2 3 4


// (function(){
//     for(let i=1;i<5;i++){
//         let str = ''
//         for(let j = 1;j<=i;j++){
//             str += j + ' ';
//         }
//         console.log(str);
//     }
// })()

// ====================================================================-----------

// 10) array swapping :

// function createArray(size:number):number[] {
//     let array:number[] = [];
//         for(let i = 0;i<size;i++){
//             let value = parseInt(readlineSync.question(`Enter ${i+1}st element of the array`));
//             array.push(value);
//         }
//         return array;
// }



// function main(){
//     let size = parseInt(readlineSync.question('Enter the size of the array'));

//     console.log('size given by user is :',size)
//     let array1 = createArray(size)
//     console.log('array1 is :',array1);

//     let array2 = createArray(size);
//     console.log('array2 is :',array2);

//     for(let i=0;i<size;i++){
//         let temp = array1[i];
//         array1[i]= array2[i];
//         array2[i] = temp;
//     }
//     console.log('after swapping');
//     console.log('array1 is :',array1);
//     console.log('array2 is :',array2);

// }
// main();

// -------------------------------------------------------------------------------

// 11) Write a program to find the number of even numbers in an array

// function createAnotherArray(size:number):Array<number>{
//     let array:Array<number> = [];
//     for(let i = 0 ;i<size;i++){
//         let value = parseInt(readlineSync.question(`Enter ${i+1}th value of the array`));
//         array.push(value);
//     }
//     return array;
// }

// function numberOfEvenNumbersInArray(arr:number[]):number{
//     let flag = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0){
//             flag++;
//         }
//     }
//     return flag;
// }



// let size = parseInt(readlineSync.question('Enter the size of the array'));

// let array1 = createAnotherArray(size);
// console.log('entered array is :',array1);

// console.log(numberOfEvenNumbersInArray(array1));



// ------------------------------------------------------------------------------

// 12) Program to sort an array in descending order

// function getArrayFromUser(size:number):number[]{
//     let arr = [];
//     for(let i=0;i<size;i++){
//         let value = parseInt(readlineSync.question(`Enter value of ${i+1}th of array`));
//         arr.push(value);
//     }
//     return arr;
// }



// let size = parseInt(readlineSync.question('enter the size of the array'));

// let array1 = getArrayFromUser(size);

// array1.sort((a,b)=>(b-a));
// console.log('after sorting : ',array1)

// ------------------------------------------------------------------------------

// 13) To check whether a string is palindrome or not

// let string = readlineSync.question('Enter the string to check for palindrome');

// let reversedString = string.split('').reverse().join('');

// string === reversedString ? console.log('Palindrome') : console.log('not palindrome');


// 14) Program to add 2 two-dimensional array

// function getSum2DArray(arr1:number[][],arr2:number[][]):number[][]{
//     let array:number[][] = [];

//     for(let i=0;i<arr1.length;i++){
//         let row:number[] = []
//         for(let j=0;j<arr1[i].length;j++){
//             row.push(arr1[i][j] + arr2[i][j]);
//         }
//         array.push(row);
//     }
//     return array;
// }

// function getArrayValues(size:number):number[][]{
//     let arr:number[][] = [];
//     for(let i=0;i<size;i++){
//         let row:number[] = [];
//         for(let j=0;j<size;j++){
//             let value = parseInt(readlineSync.question(`enter the ${i+1}th value of the array`))
//             row.push(value);
//         }
//         arr.push(row);
//     }
//     return arr;
// }


// let size = parseInt(readlineSync.question('Enter the size of the array'));

// let array1 = getArrayValues(size);
// console.log('1st array is:',array1)

// let array2 = getArrayValues(size);
// console.log('2nd array is :',array2);

// let arraySum = getSum2DArray(array1,array2);

// console.log('summed array  is: ',arraySum);


// ----------------------------------------------------------------------------------
// 15) write a program to accept an array and display it on the console using function

// function getArray(size:number):number[]{
//     let array:number[] = []
//     for(let i=0;i<size;i++){
//         let value = parseInt(readlineSync.question('enter the array values one by one'));
//         array.push(value);
//     }
//     return array;
// }

// function displayArray(arr:number[]):string{
//    return arr.join('');
// }

// function main(){
//     let size = parseInt(readlineSync.question('enter the size of the array'));
//     let arr = getArray(size)
//     console.log(displayArray(arr))
// }

// main()




// ------------------------------------------------------------------------

// 16) Write a program to check whether a given number is prime or not

// function checkPrime(num:number):void{
//     if(num<=1) console.log('not prime');
//     let flag = 0;
//     for(let i=2;i<num;i++){
//         if(num%i===0){
//             flag++;
//         }
//     }
//     flag > 0 ? console.log('Not prime') : console.log('Prime');
// }


// let number = parseInt(readlineSync.question('Enter the number to check prime'));
// checkPrime(number);

// ------------------------------------------------------------------------

// 17) Write a menu driven program

// class Calculator{
//     addition(a:number,b:number):number{
//         return a+b;
//     }
//     subtraction(a:number,b:number):number{
//         return a-b;
//     }
//     multiplication(a:number,b:number):number{
//         return a*b;
//     }
//     division(a:number,b:number):number{
//         return a/b;
//     }
// }

// function main(){
//     let calc = new Calculator();
//    while(true){
//     console.log('Choose : 1 for addition')
//     console.log('2 for subtraction');console.log('3 for multiplication');
//     console.log('4 for division');console.log('5 for exit');

//     let value = parseInt(readlineSync.question('enter a choice from 1 to 5'));
//     if(value === 5) break;
//     let result;
//     let val1 = parseInt(readlineSync.question('enter first number'));
//     let val2 = parseInt(readlineSync.question('Enter the 2nd number'));
//     switch(value){
//         case 1 : {
//             result = calc.addition(val1,val2);
//             console.log(` Sum is ${result}`)
//             break; 
//         }
//         case 2 : {
//             result = calc.subtraction(val1,val2);
//             console.log(`Difference is ${result}`)
//             break;
//         }
//         case 3 :{
//             result = calc.multiplication(val1,val2);
//             console.log(`Multiplication is ${result}`);break;
//         }
//         case 4 : {
//             result = calc.division(val1,val2);
//             console.log(`Division is ${result}`);break;
//         }
//         default :{
//             console.log('Invalid entry')
//         }
//      }

//    }
   
// }
// main()




// -------------------------------------------------------------------------------

// 18) Grades are computed using weighted average


// function overallGrade(mark1:number,mark2:number,mark3:number):number{

//     let result:number;

//     result = (mark1 * 70/100) + (mark2 * 20/100) + (mark3 * 10/100);
//     return result;

// }


// let mark = parseFloat(readlineSync.question('enter the mark scored'));

// let labMark = parseFloat(readlineSync.question('enter your lab mark'));

// let assiMark = parseFloat(readlineSync.question("Enter your assignment mark"));

// let result = overallGrade(mark,labMark,assiMark);
// console.log('your result is :',result)

// =--------------------------------------------------------------------

// 19) Income tax calculation

// function getIncomeTaxAmount(income:number):number | undefined{

//     if(income <= 250000){
//         return 0;
//     }
//     else if(income > 250000 && income <= 500000){
//         return income * (5/100);
//     }
//     else if(income > 500000 && income <= 1000000){
//         return income * (20/100);
//     }
//     else if(income >1000000 ){
//         return income * (30/100);
//     }

// }



// let income = parseFloat(readlineSync.question('Enter your income in LPA eg:300000 or 250000'));

// let res = getIncomeTaxAmount(income);
// console.log('Your tax amount is :',res)

// ---------------------------------------------------------------------------


// 20) Pattern printing 

// 1

// 2  3

// 4  5  6

// 7  8  9  10

// let val = 1;
// for(let i=1;i<5;i++){
//     let str = '';
//     for(let j=1;j<=i;j++){
//         str += val + ' ';
//         val++; 
//     }
//     console.log(str)
// }




// -----------------------------------------------------------------------------

// 21) Program to multiply adjacant values of an arra

// function getArray(size:number):number[]{
//     let array:number[] = [];
//         for(let i=0;i<size;i++){
//             let val = parseInt(readlineSync.question('Enter each value of array'));
//             array.push(val);
//         }
//         return array;

// }

// function multiplyAdhacantValues(array:number[]){
//     let arr:number[] = [];
//     for(let i=1;i<array.length;i++){
//         arr.push(array[i] * array[i-1])
//     }
//     return arr;
// }




// let size = parseInt (readlineSync.question('enter the size of the array'));

// let array = getArray(size);

// console.log('this is the product we were looking for :',multiplyAdhacantValues(array));

// ------------------------------------------------------------------

// 22) Add the values of 2D array 

// function getArray(size:number):number[][]{
//     let arr:number[][] = [];

//     for(let i=0;i<size;i++){
//         let row:number[] = []
//         for(let j=0;j<size;j++){
//             let value = parseInt(readlineSync.question(`Enter the ${i+1}th value of the array`));
//             row.push(value);
//         }
//         arr.push(row);
//     }
//     return arr;
// }

// function addArray(arr1:number[][],arr2:number[][]):number[][]{
//     let arr:number[][] = [];

//     for(let i=0;i<arr1.length;i++){
//         let row:number[] = [];
//         for(let j=0;j<arr1[i][j];j++){
//             row.push(arr1[i][j] + arr2[i][j]);
//         }
//         arr.push(row);
//     }
//     return arr;
// }

// function displayArray(arr1:number[][],arr2:number[][]){
//     console.log('array1 is :',arr1);console.log('array2 is :',arr2);
// }

// let size = parseInt(readlineSync.question('Enter the size of the array'));

// let array1 = getArray(size);

// let array2 = getArray(size);

// console.log('array sum is :',addArray(array1,array2))

// displayArray(array1,array2)


// -------------------------------------------------------------------------

// 23) write object oriented program to store and display the values of 2D array

// class Array2D{
//     private array:number[][] = [];
//     constructor(private size:number){
//         this.size = size;
//     }

//     getArray():number[][]{
       
//         for(let i=0;i<this.size;i++){
//             let row:number[] = [];
//             for(let j=0;j<this.size;j++){
//                 let value = parseInt(readlineSync.question('Enter the array values'));
//                 row.push(value);
//             }
//             this.array.push(row);
//         }
//         return this.array;
//     }
//     displayArray(){
//         console.log('The array when display function called is :',this.array);
//     }

// }
// let size = parseInt(readlineSync.question('Enter the size of the array'));
// let array2D = new Array2D(size);

// console.log('2D array is :',array2D.getArray());
// array2D.displayArray();



// ------------------------------------------------------------------------------

// 24) Area of the given object :

// class Area{
//     circle(radius:number):number{
//         const pi = 3.14;
//             return pi * radius **2;
//     }
//     square(side:number){
//         return side * side;
//     }
//     rectangle(length:number,breadth:number){
//         return length * breadth;
//     }
//     triangle(base:number,alti:number){
//         return 0.5 * base * alti;
//     }
// }

// class MyClass extends Area{
//     main(){
//         while(true){
//             console.log('Enter your choice : 1 for circle | 2 for Square | 3 for Rectangle | 4 for Triangle');

//             let val = parseInt(readlineSync.question('1 - 4 which is your choice'));

//             switch(val){
//                 case 1 :{
//                     this.calculateCircleArea();
//                     break;
//                 }
//                 case 2 :{
//                     this.calculateSquareArea();
//                     break;
//                 }
//                 case 3 : {
//                     this.calculateRectangleArea();
//                     break;
//                 }
//                 case 4 : {
//                     this.caculateTriangleArea();
//                     break;
//                 }
//                 default : {
//                     console.log('invalid entry');
//                 }
//             }
//         }
//     }
//     calculateCircleArea(){
//         let radius = parseFloat(readlineSync.question('enter the radius of the circle'));
//         console.log('Area of circle is :',this.circle(radius));
//     }
//     calculateSquareArea(){
//         let side = parseFloat(readlineSync.question('Enter the side of the square'));
//         console.log('area of square is:',this.square(side));
//     }
//     calculateRectangleArea(){
//         let length = parseFloat(readlineSync.question('enter the lenght of the rectangle'));
//         let breadth = parseFloat (readlineSync.question('Enter the breadth of the rectangle'));
//         console.log('Area of the rectangle is :',this.rectangle(length,breadth));
//     }
//     caculateTriangleArea(){
//         let base = parseFloat(readlineSync.question('Enter the base of the triangle'));
//         let altitude = parseFloat(readlineSync.question('Enter the altitude of the triangle'));
//         console.log('Area of the triangle is:',this.triangle(base,altitude));
//     }
// }
// let myClass = new MyClass();
// myClass.main();


// ----------------------------------------------------------------------------

// 25)  Display the status


// interface LibraryItem{
//     title:string,
//     author:string,
//     readingStatus:boolean
// }
// type LibraryItem = {
//     title :string,
//     author:string,
//     readingStatus:boolean
// }


// let library:LibraryItem[] = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];

//     function displayStatus(library:LibraryItem[]):string[] {
//         let arr:string[] = []
//         for(let c of library){
//             if(c.readingStatus ===true){
//                 arr.push(`Already read ${c.title} by ${c.author}`);
//             }
//             else{
//                 arr.push(`You still need to read ${c.title} by ${c.author}`)
//             }
//         }
//         return arr;
//     }
//     console.log('Status of each books in the library :',displayStatus(library));

// -------------------------------------------------------------------------

// 26)  Try and catch and finally problem

    // function stringReverse(str:any):void{
    //     try{
    //         let revS = str.split('').reverse().join('');
    //         console.log(`reversed string from ${str} is ${revS}`);
    //     }catch(err:any){
    //         console.log(`Error is ${err.message}`);
    //     }
    //     finally{
    //         console.log(`Type of str :${typeof str}`)
    //     }
        
        
    // }
    // let str = '1234'
    // stringReverse(str);
    // console.log('next----------------------');
    // stringReverse(Number(1234))

// ---------------------------------------------------------------------------    

// 27) throw error under the following conditions :

function checkHeight(value:any){
    try{
        if(value > 50){
            throw new Error('Huge height');
        }
        else if(value < 20){
            throw new Error('Tiny height')
        }else{
            console.log('Height is :',value);
        }
    }catch(err:any){
        console.log('error at checkHeight function :',err.message)
    }
}
let value = 'seven';
checkHeight(value);


// ---------------------------------------------------------------------------