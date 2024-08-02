// TypeScript union type helps to store various types in a variable

// suppose this is the case :

// question : Given a function , in this two arguments will be there that can be of type either string or number, so how will you handle this :

function add(a:any,b:any){
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b)
    }
    throw new Error('Parameters must be number or strings');
}
//  suppose if the arguments are add(true,false), the thing is that it will take any parameters other than string and number also

// see this, for the type any, it is like this, so we come across union

let result: string | number;
result = 'Hello world';
result = 23;
// result = true; this will give error

// ---------------------------------------------------------------------------

// so now handle the above function once again

function adds(a:number | string, b: number | string): string | number{
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    throw new Error('Parameters have to be either number or string')
}
// ----------------------------------------------------------------------- in this even the return type is also specified with the help of union


type User = {
    name : string,
    id:number
}

type Admin = {
    userName : string,
    id : number
}

let newUser: User | Admin = {name:'Kishan',id:12};
newUser = {userName:'Kishan.ta',id:23}


export{}