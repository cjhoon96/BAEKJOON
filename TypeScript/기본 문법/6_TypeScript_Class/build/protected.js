"use strict";
class Person {
    constructor(theName) { this.name = theName; }
}
// Employee는 Person을 확장할 수 있습니다.
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); // 오류: 'Person'의 생성자는 protected
