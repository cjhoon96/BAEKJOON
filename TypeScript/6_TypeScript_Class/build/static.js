"use strict";
class Mathmatics {
    // 스태틱 메서드
    // circumference = 둘레(원주)
    static calcCircumference(radius) {
        return this.PI * radius * 2;
    }
    static calcCircleWidth(radius) {
        return this.PI * Math.pow(radius, 2);
    }
    getPi() {
        return Mathmatics.PI;
    }
}
// 스태틱 속성
Mathmatics.PI = Math.PI;
// radius = 반지름
let radius = 4;
console.log("PI(원주율) = ", Mathmatics.PI);
console.log(`반지름이 ${radius}인 원의 넓이: πr² = `, Mathmatics.calcCircleWidth(radius));
console.log(`반지름이 ${radius}인 원의 둘레: 2πr = `, Mathmatics.calcCircumference(radius));
