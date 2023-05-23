interface Car {
	color: string;
    wheels: number;
    start(): void;
}

interface Toy {
    name: string;
}

interface ToyCar extends Car, Toy {
    price : number
}

class toy implements ToyCar {
    color;
    wheels = 4;
    constructor(c:string){
        this.color = c
    }
    start(): void {
        console.log('Burr Burr')
    }
    name = 'toy car';
    price = 3000;
}

const b = new toy('green');
console.log(b);
b.start();