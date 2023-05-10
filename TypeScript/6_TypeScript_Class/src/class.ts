class Car {
    private name: string;
    constructor( theName: string ) {
        this.name = theName;
    }
    start() {
       console.log("start");
       console.log(this.name);
   }
}

class Bmw extends Car {
    constructor(theName: string) {
		super(theName); // check_1
    }
    // showName() {
    //   	console.log(super.name) // 오류 발생 
    // }
}

let car = new Car("SUV");
let bmw = new Bmw("BMW");

car = bmw // check_2
car.start();