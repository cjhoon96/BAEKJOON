interface Add {
    (num1: number, num2: number): number;
}
const add : Add = function (x, y){
    return x + y;
}

console.log(add(10,1))