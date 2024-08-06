            Function Overloading in TypeScript
          _____________________________________


In TypeScript, function overloading allows you to define multiple function signatures for the same function name, enabling the function to handle different types of arguments and return appropriate types

1) Function signatures : Defined multiple function signatures above the function implementation

2) Function implementation : A single function implementation that handles all the possible cases.



        function sumMer(val1: string, val2: string): string;
        function sumMer(val1: number, val2: number): number;

        function sumMer(val1: any, val2: any): any {
            return val1 + val2;
        }

        // Valid calls
        console.log(sumMer(1, 2)); // Outputs: 3
        console.log(sumMer('Hello, ', 'World!')); // Outputs: "Hello, World!"

        // Invalid call - will cause a compile-time error
        console.log(sumMer('2', true)); // Error: No overload matches this call.

Explanation : 
1) Function Signatures:
    - function sumMer(val1:string,val2:string):string indicates that if both arguments are string then function should return string.

    - function sumMer(val1:number,val2:number):number indicates that if both arguments are number then function should return number.

2) Function Implementation:
    - the last function above will handle the implementation, and handling the logic of adding all the 2 values together. 'any' is used to cover all possbile input types but only mentioned in the signatures will only be handled.    