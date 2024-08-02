// creating a class in typeScript

class User {
    email:string
    name:string
    constructor(email:string,name:string){
        this.email = email;
        this.name = name;
    }
}

let hitesh = new User('h@h.com','Hitesh');