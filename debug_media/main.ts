type User = {
    name:string,
    age:number,
}

interface Users {
    name:string,
    age:number | string,
    email?:string
}

let user:Users =  {
    name:'kishanta',
    age:'23'
}
//in the interface I used union so that age was accepted as string also

let arr: (string | number)[] = [1,'2',3]

// - type name = string | number | boolean

// - interface name {

// } This is the first difference  = and object between interface and type
// for type multiple values can be assigned after the  = 

                        // CUSTOM TYPES

type numOrString = 'pending' | 'completed' | 'cancelled'

let val:numOrString =   'cancelled'


export{}