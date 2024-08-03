abstract class TakePhotos  {
    constructor(
        public cameraMode : string,
        public filter : string
    ){}
}

// let takePhoto = new TakePhotos('test','Test');
//  this line throws an error => cannot create instance of an abstract class

class Instagrams extends TakePhotos{}

const takePhoto = new Instagrams('test','Test')

// We can create object of the class which is interiting it but cannot create an instance of abstract class/