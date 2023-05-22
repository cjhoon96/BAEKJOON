"use strict";
// type t1 = 'string literal';     // type
// const t1:t1 = 'string literal'; // value
// interface Person {
//   first: string;
//   last: string;
// }
// const p: Person = { first: "Jane", last: "Jacobs" };
//   // p: value Person: type
// function email(p: Person, subject: string, body: string) {}
//   // value: email, p, subject, body 
//   // type:  Person, string , string, Response 
class Cylinder {
    constructor() {
        this.radius = 1;
        this.height = 1;
    }
}
function calculateVolume(shape) {
    if (shape instanceof Cylinder) {
        return shape.radius;
    }
}
// ///////////////////////////////////////////////////////////////////////////////////
// type t1 = "string literal";
// const t1: t1 = "string literal";
// interface Person {
//   first: string;
//   last: string;
// }
// const p: Person = { first: "Jane", last: "Jacobs" };
// // function email(p: Person, subject: string, body: string): Response {}
// class Cylinder {
//   radius = 1;
//   height = 1;
// }
// function calculateVolume(shape: unknown) {
//   if (shape instanceof Cylinder) {
//     return shape.radius;
//   }
// }
// type T1 = typeof p;
// type T2 = typeof email;
// const v1 = typeof p;
// const v2 = typeof email;
// const v = typeof Cylinder; //value is "function"
// type T = typeof Cylinder; //type T = typeof Cylinder
// type T_1 = Cylinder;
// declare let fn: T;
// const c = new fn(); // const c: Cylinder
// const c_1: Cylinder = new Cylinder();
// type C = InstanceType<typeof Cylinder>; // type C = Cylinder
// const first: Person["first"] = p["first"];
// // const second: Person.first = p.first;
// type PersonEl = Person["first" | "last"]; //type PersonEl = string
// type Tuple = [string, number, Date];
// type TupleEl = Tuple[number]; //type TupleEl = string | number | Date
// // function email(options: {person: Person, subject: string, body: string}){
// // }
// // function email({person: Person, subject: string, body: string}){
// // //(parameter) Person: any
// // //'Person 에 암시적으로 'any' 형식이 있다.
// // //(parameter) string: any
// // //Duplicate identifier 'string'.
// // //(parameter) string: any
// // //Duplicate identifier 'string'.
// // }
// function email({
//   person,
//   subject,
//   body,
// }: {
//   person: Person;
//   subject: string;
//   body: string;
// }) {
// }
