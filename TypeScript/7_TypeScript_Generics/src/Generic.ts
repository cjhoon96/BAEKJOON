function loggingIdentity1 (arg: any): any {
  console.log(arg.length); // 오류 발생 x 
  return arg;
}

function loggingIdentity2<T>(arg: T): T {
  // console.log(arg.length); // 오류 발생
  return arg;
}

function loggingIdentity3<T>(arg: T[]): T[] {
  console.log(arg.length); // 오류 발생: T에는 .length 가 없다.
  return arg;
}

interface GenericInterface {
  <T>(arg:T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let a : GenericInterface = identity;


interface GenericInterface2<T> {
  (arg:T): T;
}

let b: GenericInterface2<number> = identity