// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function jsFetchNum(id: string): Promise<number> {
//   //code...
//   //code...
//   //code...
//   return new Promise((resolve, reject) => {
//     resolve(100);
//   });
// }

// function addNumbers(...numbers: number[], check: string): number {
//   return numbers.reduce((a, b) => a + b);
// }

// console.log(addNumbers(1, 2));
// console.log(addNumbers(1, 2, 3, 4));
// console.log(addNumbers(1, 2, 3, 4, 5, 0));


// function addNumbers(...numbers: number[], ...names: number[],): number {
//     return numbers.reduce((a, b) => a + b);
//   }
  
//   console.log(addNumbers(1, 2));
//   console.log(addNumbers(1, 2, 3, 4));
//   console.log(addNumbers(1, 2, 3, 4, 5, 0));
  
let student : [string, number];
student = ['jihoon', 123]
const [name2, age] = student
const name2 = student[0]
const age = student[1]
console.log(name2);