function hello(name: string, age?:number) {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}.`;
    } else {
        return `Hello, ${name}`;
    }
}

console.log(hello('jihoon'))
console.log(hello('jihoon', 28))