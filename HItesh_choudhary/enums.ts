const enum SeatChoice {
    AISLE = 10,
    MIDDLE,
    WINDOW,
    FOURTH
}
const hcSeat = SeatChoice.FOURTH
// in this case AISLE is initialized to 10 so rest of them will be following interface. but if this is the case :

const enum SeatChoice1{
    AISLE1=12,
    MIDDLE2 = 15,
    WINDOW3,
    FOURTH4
}
let seater = SeatChoice1.WINDOW3
// when you hover on the above we see that window3 has value of 16 , so it followed what is just above it and not on the ever first value of the enum


