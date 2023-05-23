"use strict";
function loggingIdentity1(arg) {
    console.log(arg.length); // 오류 발생 x 
    return arg;
}
function loggingIdentity2(arg) {
    // console.log(arg.length); // 오류 발생
    return arg;
}
function loggingIdentity3(arg) {
    console.log(arg.length); // 오류 발생: T에는 .length 가 없다.
    return arg;
}
function identity(arg) {
    return arg;
}
let a = identity;
let b = identity;
