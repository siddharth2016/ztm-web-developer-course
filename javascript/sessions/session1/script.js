function someFunc() {
    console.log("Some Function Called");
}

someFunc();

var someFunc2 = function() {
    console.log("Some Other Function, It is Anonymous!");
}

someFunc2();

function thatTakesArguments(someArg) {
    console.log(someArg);
}

thatTakesArguments("helllllooooo");
thatTakesArguments("an argument");
thatTakesArguments(141345314)

function thatReturnsSomething(a, b) {
    return a * b;
}