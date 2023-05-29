"use strict";
/**
 * Type Inference
 */
let text = 'hello';
function print(message = 'hello') {
    console.log(message);
}
print('hello');
function add(x, y) {
    return x + y;
}
const result = add(1, 2);
