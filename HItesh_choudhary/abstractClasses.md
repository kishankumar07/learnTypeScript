Abstract classes: classes that cannot be instantiated directly.

- Blue print for other classes

- Abstract classes can contain implementation details for some methods(like a method will be both declared and defined in the abstract class itself)/

- Not only that they will also be possibility like method will be declared but MUST be implemented by derived classes.

            KEY POINTS
- Abstract Methods : These methods are declared without an implementation and must be overridden in derived class.*( means the derived class must define and use it)

- Abstract class : It can't be instantiated correctly and is intended to be subclassed.( means we can't create an object of the abstract class directly , in an indirect way only it is possible).


            abstract class TakePhoto {
                constructor(
                     public cameraMode: string,
                      public filter: string
                 ){}

        ----->  getSepia(): void
            }

            class Instagram extends TakePhoto {}

            let cl = new Instagram('test', 'Test');
            
in the above code, the 'getSepia' method is declared but not defined.             
- for an abstract class if a method is only just declared and not implemented , IT MUST BE MARKED AS 'ABSTRACT'.

- The 'Instagram class' extends the 'TakePhoto' but does not provide an implementation for 'getSepia' method.



correct way :-

        abstract class TakePhoto {
          constructor(
           public cameraMode: string,
            public filter: string
        ){}

     --->  abstract getSepia(): void; // Marking it as abstract
}
make 'getSepia' as an abstract method in class 'TakePhoto' class.

This Abstract method should be implemented in the Derived class.

        class Instagram extends TakePhoto {
              constructor(
                  cameraMode: string,
                   filter: string
              ) {
             super(cameraMode, filter); // Call the parent class constructor
           }

          getSepia(): void {
                console.log("Applying sepia filter");
            }
        }

The Instagram class must provide an implementation for the getSepia method because getSepia is an abstract method in its parent class.

            let cl = new Instagram('test','Test');
            cl.getSepia();

So the getSepia() from the Instagram class was called.

Summary :

 Abstract class : It is a blueprint for other classes and cannot be instantiated directly.

 Abstract method : It is a method declared in abstract class without any implementation, but must be implemented in derived classes.

 Derived class : Class that extends the abstract class, and provide implementation for all abstract methods.