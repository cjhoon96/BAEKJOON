"use strict";
// String
let str = 'HelloWorld';
console.log(str);
// Number
let num = 10;
console.log(num);
// Boolean
let bool1 = false;
let bool2 = true;
console.log(bool1, bool2);
// Array
let arr1 = [1, 2, 3, 4];
let arr2 = ['hello', 'world'];
for (let i = 1; i <= arr1.length; i++) {
    console.log(arr1[i]);
}
for (let j = 1; j <= arr2.length; j++) {
    console.log(arr1[j]);
}
// Tuple
let arr = ['hi', 10];
// arr = [10, 'hi'] 와 같이 type 의 순서를 맞추지 않는 경우 오류가 발생한다. 
console.log(arr[0], arr[1]);
// Enum
var Os1;
(function (Os1) {
    Os1[Os1["Window"] = 0] = "Window";
    Os1[Os1["Ios"] = 1] = "Ios";
    Os1[Os1["Android"] = 2] = "Android";
})(Os1 || (Os1 = {}));
let nowOs1 = Os1.Window;
let nowOs2 = Os1[0];
console.log(nowOs1, nowOs2);
var Os2;
(function (Os2) {
    Os2[Os2["Window"] = 3] = "Window";
    Os2[Os2["Ios"] = 10] = "Ios";
    Os2[Os2["Android"] = 11] = "Android";
})(Os2 || (Os2 = {}));
let nowOs3 = Os2[3]; // Window
let nowOs4 = Os2[10]; // Ios
let nowOs5 = Os2[11]; // Android
console.log(nowOs3, nowOs4, nowOs5);
let osIdx3 = Os2.Window;
let osIdx4 = Os2.Ios;
let osIdx5 = Os2.Android;
console.log(osIdx3, osIdx4, osIdx5);
var Os3;
(function (Os3) {
    Os3["Window"] = "win";
    Os3["Ios"] = "ios";
    Os3["Android"] = "and";
})(Os3 || (Os3 = {}));
let nowOs6 = Os3.Window;
let nowOs7 = Os3.Ios;
let nowOs8 = Os3.Android;
console.log(nowOs6, nowOs7, nowOs8);
let idxOs6 = Os3['win'];
