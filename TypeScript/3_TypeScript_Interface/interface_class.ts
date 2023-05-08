interface Car {
	color: string;
    wheels: number;
    start(): void;
}

interface Benz extends Car {
    door: number;
    stop(): void;
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


class benz implements Benz {
    color;
    wheels = 4;
    constructor(c:string){
        this.color = c
    }
    start(){
        console.log('go..');
    };
    door: 5;
    stop(){
        console.log('stop');
    }
}