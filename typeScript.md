TS => JS

- TypeScript is a developement too, even after writing all these code, still the project is going to run only in js.

- If any class is trying to implement any interface in it, then what all is there in the interface should be there in the class, else throws error

- Cannot instantiate an 'abstract class', just inherit the abstract class and then instantiate that new inherited class.




                parseInt and parseFloat instead of Int or Float
- Why int or Float instead of parseInt and parseFloat ?

    key point : 
    - parseInt and parseFloat are specifically designed to parse Strings and convert them into numbers. Takes string as argument and convert them into number.

    - Name parse infront of them clearly mentions their purpose, parsing the string and converting to number.

    -Using int or float leads to confusion, and might mistakes for type declaration or constructors.    