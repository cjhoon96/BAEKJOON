// let x = 'hello';
// x = 1234;

// interface Square {
//   width: number;
// }
// interface Rectangle extends Square {
//   height: number;
// }
// type Shape = Square | Rectangle;

// function calculateArea(shape: Shape) {
//   if (shape instanceof Rectangle) {
//     return shape.width;
//   } else {
//     return shape.width;
//   }
// }

// function calculateArea(shape: Shape) {
//   if ("height" in shape) {
//     shape; // 타입이 Rectangle
//     return shape.width * shape.height;
//   } else {
//     shape; // 타입이 Square
//     return shape.width * shape.width;
//   }
// }

// interface Square {
//   width: number;
//   kind: "square";
// }

// interface Rectangle {
//   height: number;
//   width: number;
//   kind: "rectangle";
// }

// type Shape = Square | Rectangle;

// function calculateArea(shape: Shape) {
//   if (shape.kind === "rectangle") {
//     shape;
//     return shape.width * shape.height;
//   } else {
//     shape;
//     return shape.width * shape.width;
//   }
// }

// class Square {
//   constructor(public width: number) {}
// }

// class Rectangle extends Square {
//   constructor(public width: number, public height: number) {
//     super(width);
//   }
// }

// type Shape = Square | Rectangle;

// function calculateArea(shape: Shape) {
//   if (shape instanceof Rectangle) {
//     return shape.width * shape.height;
//   } else {
//     return shape.width * shape.width;
//   }
// }

function asNumber(val: number | string): number {
  return val as number;
}

// function asNumber(val: number | string): number {
//   return typeof(val) === 'string' ? Number(val) : val;
// }

// function setLightSwitch(value: boolean) {
//   switch (value) {
//     case true:
//       turnLightOn();
//       break;
//     case false:
//       turnLightOff();
//       break;
//     default:
//       console.log("실행되지 않을까 봐 걱정됩니다.");
//   }
// }

// interface LightApiResponse {
//   lightSwitchValue: boolean;
// }

// async function setLight() {
//   const response = await fetch("/light");
//   const result: LightApiResponse = await response.json();
//   setLightSwitch(result.lightSwitchValue);
// }

// function add(a: number, b: number) {
//   return a + b;
// }

// function add(a: string, b: string) {
//   return a + b;
// }

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a, b) {
  return a + b;
}
const c: string = add(1, 3);