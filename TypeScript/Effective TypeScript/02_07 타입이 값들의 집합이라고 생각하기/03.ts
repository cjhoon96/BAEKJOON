interface Vector1D {
  x: number;
}
interface Vector2D extends Vector1D {
  y: number;
}
interface Vector3D extends Vector2D {
  z: number;
}

type k_1 = keyof (Vector1D | Vector2D | Vector3D);
type k_2 = keyof (Vector1D & Vector2D & Vector3D);

function getKey<K extends string>(val: any, key: K) {
  //....
}

getKey({}, "x");
getKey({}, Math.random() < 0.5 ? "a" : "b");
getKey({}, 12);
//Argument of type 'number' is not assignable to parameter of type 'string'
getKey<number>({}, 12);
//Type 'number' does not satisfy the constraint 'string'.

interface Point {
  x: number;
  y: number;
}

type PointKeys = keyof Point; // Type is 'x' / 'y'

let pt: PointKeys = ''
function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  vals.sort((a, b) => (a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : +1));
  return vals;
}

const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 },
];

sortBy(pts, 'x')
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y')
sortBy(pts, 'z')
//Argument of type '"z"' is not assignable to parameter of type 'keyof Point'

// const list = [1,2] // number[] Type
// const tuple : [number, number] = list
//Type 'number[]' is not assignable to type '[number, number]'.
//Target requires 2 element(s) but source may have fewer.

// const tuple = [1,2] // number[] Type
// const list : number[] = tuple
//Type 'number[]' is not assignable to type '[number, number]'.
//Target requires 2 element(s) but source may have fewer.

// const triple: [number, number, number] = [1, 2, 3];
// const double: [number, number] = triple
// // Type '[number, number, number]' is not assignable to type '[number, number]'.
// // Source has 3 element(s) but target allows only 2.
// const double_1: [number, number] = [1, 2]
// const triple_1: [number, number, number] = double_1;
// // Type '[number, number]' is not assignable to type '[number, number, number]'.
// // Source has 2 element(s) but target requires 3.


type T = Exclude<string | Date, string | number>; // Date
type Never = Exclude<string | Date, string | Date>; // never
type NonZeroNums = Exclude<number, 0>; // number