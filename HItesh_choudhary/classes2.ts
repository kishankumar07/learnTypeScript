// why interface is important

interface TakePhoto {
    cameraMode : string,
    filter : string,
    burst : number
}

interface Story {
    createStory():void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode :string,
        public filter : string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto,Story {
    constructor(
        public cameraMode : string,
        public filter:string,
        public burst:number,
        public views : number,
    ){}

    createStory():void{}

}
// in youtube class, along with the interface, there is again one more property views . So the main idea is that when we use any interface in any classes what is there inside the interface should be there in the class itself and whatever there in the class is upto that class, but interface properties should be there.