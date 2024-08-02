interface User {
    readonly dbId:number,
    email : string,
    userId:number,
    googleId ?: string,
    // startTrial:() => string
    startTrial(): string,
    couponOffer(couponName:string):number
}

// in 12 th line User was changed to Admin because inherited from user
const hitesh: Admin = {
    dbId:22,
    email:'kishantashok@gmail.com',
    userId:3322,
    googleId:"abcd",
    startTrial:()=>{
        return '123'
    },
    couponOffer:(name:'Diwali')=>{
        return 33;
    },
    githubToken:'https:github.io',
    role: 'admin'
}

// ------------------------------------------------------------------
            // REOPENING THE INTERFACE
            // _________________________

            // interface User {
            //     readonly dbId:number,
            //     email : string,
            //     userId:number,
            //     googleId ?: string,
            //     // startTrial:() => string
            //     startTrial(): string,
            //     couponOffer(couponName:string):number
            // }

            // suppose this is an interface you got from some git repository and you instead of wanting to touch it but you can reopen the interface like this 

interface User {
    githubToken:string
}
// so this is a reopening and if any variable is declared with User as User Interface, then 'githubToken' also need to be included in that else it will throw error


// interface also allows inheritence
interface Admin extends User {
    role: 'admin' | 'ta' | 'Learner'
}
















export{}