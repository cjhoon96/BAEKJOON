class toy {
    constructor(c) {
        this.wheels = 4;
        this.name = 'toy car';
        this.price = 3000;
        this.color = c;
    }
    start() {
        console.log('Burr Burr');
    }
}
const b = new toy('green');
console.log(b);
b.start();
