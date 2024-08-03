class User {
    name:string;
    email:string;
  private readonly city:string = '';
    constructor(name:string,email:string){
        this.name = name;
        this.email = email;
    }
}
let hitesh = new User('Hitesh','hitesh@gmail.com')
hitesh.name = 'Kishan';
// hitesh.city = 'Tcr' will throws an error
//  Property 'city' is private and only accessible within class 'User'.(2341)
// Cannot assign to 'city' because it is a read-only property.(2540)

// --------------------------------------------------------------------

            // PROFESSIONAL WAY

class Users {

    readonly city:string = 'Jaipur'
    constructor(
        public email : string,
        public name:string,
        private userId :string
    ){

    }
}            
const v1 = new Users('hitesh','h@h.com','22')

// ------------------------------------------------------------------------