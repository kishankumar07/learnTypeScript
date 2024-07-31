function signUpUser(name, email, isValid) {
    return name + email + isValid;
}
signUpUser('1', '2', '3');
var User = {
    name: "Kishan",
    email: 'kishantashok@gmail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
var newUser = { name: User.name, isActive: User.isActive, email: 'h@h.com' };
createUser(newUser);
function createCourse() {
    return { name: "React.js", price: 333 };
}
createCourse();
var myUser = {
    _id: 123,
    name: 'Kishan',
    email: 'kishantashok@gmail.com',
    isActive: true,
};
myUser.name = 'Kishan.ta';
// myUser._id = '234'
// if you try to assign value to _id, it will throw error on your face , becz it is readonly
// there is an optional use case where some might not have credit card , so it is optional and if given it will be accepted else no issue
// ------------------------------------------------------------------------------
// -----------------------------------------------------------------------------
