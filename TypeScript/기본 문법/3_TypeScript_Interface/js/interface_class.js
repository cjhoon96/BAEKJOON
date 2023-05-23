class Bmw {
    constructor(c) {
        this.wheels = 4;
        this.color = c;
    }
    start() {
        console.log('go..');
    }
}
const b = new Bmw('green');
console.log(b);
b.start();


