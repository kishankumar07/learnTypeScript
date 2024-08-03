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

            // GETTERS & SETTERS
// _________________________________________________________

class User1 {

    private courseCount = 1
    protected courseCounts = 1;
    readonly city:string = 'Jaipur'
    constructor(
        public name : string,
        public email: string,
        private userId : number
    ){}

    get getAppleEmail():string {
        return `apple${this.email}`
    }

    get getCourseCount():number{
        return this.courseCount;
    }

    // set setCourseCount(courseNum:number):void{
    //     this.courseCount = courseNum;
    // }

    set setCourseCount(courseNum:number){

        if(courseNum < 1){
            throw new Error('Course count should be more than 1');
        }

        this.courseCount = courseNum;
    }
    //remember the return type of set is not needed to mention give it as blank

    //same like private properties we have private methods
    private deleteToken(){
        console.log('token deleted');
    }
}

class subClassOfUser1 extends User1{
    isFamily:boolean = true;
    changeCourseCountWhichisPrivate(){
        // this.courseCount = 4;
        //this will gives you error,because course count is only accessible in the User1 class.
    }
    changeCourseCountProtected(){
        this.courseCounts = 3;
    }
    //This works in protected because Protected works well also for its inherited class but not to outside like objects calling. Anyways private is always private to its class.
}

let user1 = new User1('Kishan','email@email.com',22)
// user1.deleteToken() will gives error because deleteToken is private method