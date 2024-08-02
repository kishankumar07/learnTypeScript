// const user: (string | number)[] = [1,'kishan'] this is a possible case of mixed data types in an array.

let user:[string,number,boolean];

// user = ['Kishan.ta',121,true,true] this will gives you error because tuple violation

// user = [121,'Kishan.ta',true] this also is invalid

user = ['Kishan.ta',121,true] // this is ok and follows tuple , order is also important

// let rgb:[number,number,number] = [255,255,255,0] throws error 

// --------------------------------------------------------------------------
type User = [number,string]

let newUser:User = [121,'kishantashok@gmail.com'];

newUser.push(23)
// accroding to tuple array rule, it will have a fixed length, and for each index there will be fixed type which can't be changed but still the javascript array methods will work like push. 

newUser.splice(0,1,'Hello world');
// this will change the tuple number property to string

// even pop(), shift() all will work against tuple

// So why does these all happens, the reason : Tuples are implemented as arrays in typeScript. so inherited all array methods.

// Tuples are implemented as arrays, so all methods available at array's will surely be available with tuples also , at the end everything is javascript right, at run time there is no typeChecking will be there.