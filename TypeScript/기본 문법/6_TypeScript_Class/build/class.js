"use strict";
class Car {
    constructor(theName) {
        this.name = theName;
    }
    start() {
        console.log("start");
        console.log(this.name);
    }
}
class Bmw extends Car {
    constructor(theName) {
        super(theName); // check_1
    }
}
let car = new Car("SUV");
let bmw = new Bmw("BMW");
car = bmw; // check_2
car.start();
