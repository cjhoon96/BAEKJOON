"use strict";
function logText(text) {
    console.log(text.length);
    return text;
}
function getProperty(obj, key) {
    return obj[key];
}
let obj = { a: 1, b: 2, c: 3 };
getProperty(obj, "a");
// getProperty(obj, "z"); // error
