interface Car {
	color: string;
    wheels: number;
    start(): void;
}

class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c:string){
        this.color = c
    }
    start(){
        console.log('go..');
    }
}

const b = new Bmw('green');
console.log(b);
b.start();