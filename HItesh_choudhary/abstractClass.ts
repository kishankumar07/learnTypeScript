abstract class TakePhotos  {
    constructor(
        public cameraMode : string,
        public filter : string
    ){}

    abstract getSepia():void

    getReelCount():number{
        // after so many complex calculations
        return 8
    }
}

// let takePhoto = new TakePhotos('test','Test');
//  this line throws an error => cannot create instance of an abstract class

class Instagrams extends TakePhotos{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst : number
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log('getSepia implemented')
    }
}

const takePhoto = new Instagrams('test','Test',33)
takePhoto.getReelCount();

// We can create object of the class which is interiting it but cannot create an instance of abstract class/