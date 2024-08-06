Refer this page for a good understanding : https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/



        function sumMer<T extends number | string>(val1: T, val2: T): T {
            return (val1 as any) + (val2 as any);
        }

        // Valid calls
        console.log(sumMer(1, 2)); // Outputs: 3
        console.log(sumMer('Hello, ', 'World!')); // Outputs: "Hello, World!"

        // Invalid call - will cause a compile-time error
        // console.log(sumMer('2', true)); // Error: Argument of type 'true' is not assignable to parameter of type 'string'.


In the above code, a generic type parameter 'T' is used which is either number or string and the function is only accepting two arguments of same type 'T' and finally return a value of type 'T'.


Generic type parameter T :
    - T is a generic type parameter that can be either 'number' or 'string'.
    - T extends number | string means 'T' must be either number or string, nothing else.

Function Implementation:
    - the function sumMer takes two parameters : val1 and val2 both of type 'T'.
    - The cast(val1 as any) + (val2 as any) is used to allow '+' operation, and it assumes "T" as either 'number' or 'string'.



    function randomm<T extends object,U extends object>(val1:T,val2:U){
        return {
            ...val1,...val2
        }
    }
    console.log(randomm({name:'kishan'},23))

this is a good example when we need for a T or U to have a specific type





            GENERIC STACK
        _______________________
        
    class Stack<T>{
        private array: T[];

    constructor(private size:number){
        this.size = size;
        this.array = [];
    }
    isEmpty():boolean{
        return this.array.length === 0;
    }
    isFull():boolean{
        return this.array.length === this.size;
    }
    push(val:T):void{
        if(this.isFull()){
            throw new Error('Stack is full now');
            
        }
        console.log('peeky poo')
        this.array.push(val)
    }
    pop():T | undefined{
        if(this.isEmpty()){
            throw new Error('Empty stack dont play');
        }
        console.log('pop issue')
        return this.array.pop();
    }
    peek():T{
        if(this.isEmpty()){
            throw new Error('Empty stack');
        }
        return this.array[this.array.length -1]
    }

}
let stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek());