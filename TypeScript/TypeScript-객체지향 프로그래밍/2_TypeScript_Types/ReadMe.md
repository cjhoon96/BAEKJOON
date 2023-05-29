# TypeScript 기본 타입



****



## Type의 중요성

### Programming 이란?

* Input
* Operation
* Output

변수는 입력 받은 값에 따라 타입이 중요

이를 명시해 주지 않는 경우 타입 추론을 어렵게 만든다.

Type 을 지정하여 기능과 역할에 대해 이해하도록 돕고 

이 과정을 통해 프로그램이 의도대록 동작하는데 있어 훨씬 안정적으로 동작하도록 돕는다.



****



## TypeScript 기본 타입

> :warning:**Note**
>
> 변수 선언시 `var` 사용 금지
>
> `let` (es6) 을 사용하자
>
> `let` 으로 선언하여도 compile 옵션을 통해 호환성 관리를 해주면 compile 시 `var`  를 사용한 문법으로 변경이 가능하다.

### Primitive Type

> :bulb:**Primitive Type**
>
> number / string / boolean / bright / symbol / null / undefined 

* ### String

  ```typescript
  let str: string = 'HelloWorld';
  ```

* ### Number

  ```typescript
  let num: number = 10;
  ```

* ### Boolean

  ```typescript 
  let bool1: boolean = false;
  let bool2: boolean = true;
  ```

* ### Null / Undefined

  undefined 은 값의 존재 여부가 결정되지 않은 상태

  null 은 값이 없는 비어있는 상태

  ```typescript
  let a: null = null;
  let b: undefined = undefined;
  ```

  null 과 undefined 이외의 값을 넣을 수 없다. (위는 예시 코드일 뿐 type을 null 또는 undefined 로만 선언하는 경우는 거의 없다.)
  
  보통 null 과 undefined 는
  
  ```ts
  let age: number | undefined;
  let person : string | null;
  ```
  
  와 같이 다른 타입과 Union type 으로 사용하여 optional 변수를 설정할때 사용한다. 
  
  보편적으로는 `undefined` 를 사용한다. 

* ### Unknown :bomb:

  ```ts
  let notSure: unknown = 0; 
  notSure = 'he';
  ```

  타입을 알 수 없는 상태의 type

  TS 는 타입이 없는 JS 와 연동하여 사용할 수 있다.

  TS 에서 JS library 를 이용하는 경우 JS 의 Return type 을 모를 수 있다.

  이런 경우에도 구체적으로 type 을 정의해서 사용하는 것이 좋다. 

* ### Any:bomb:

  Any type 에는 말 그대로 모든 타입에 대해서 허용된다. 

  기존 자바스크립트로 구현되어있는 웹 서비스 코드에 타입스크립트로 점진적으로 적용할 때 활용하면 좋다. 

  ```typescript
  let str: any = 'hi';
  let num: any = 10;
  let arr: any = ['a', 2, true];
  ```

* ### Void

  Void Type 은 `undefined` 와 `null` 만 할당 가능하다.

  함수에는 반환 값을 설정할 수 없는 타입이다. 

  ```typescript
  let unuseful: void = undefined; // 변수 선언에 사용하지는 않는다.
  function notuse(): void {
    console.log('sth');
  }
  // 이처럼 반환 값이 없는 함수에서 사용 가능하다. 
  ```

* ### Never

  함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입이다.

  ```typescript
  // 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
  function neverEnd(): never {
    while (true) {
  
    }
  }
  ```

  App 에서 error 를 던지는 경우 사용

  ```ts
  function throwError(message: string): never {
      // message -> server (log)
      throw new Error(message);
  }
  ```

  이 경우 Error 를 던지므로 app 은 죽게 된다. => 끝내 도달 X



### Object Types

* ### Object :bomb:

  `object`는 **Primitive Type**(원시타입)이 아닌 타입을 나타낸다. 

  예를 들어, `number`, `string`, `boolean`, `bigint`, `symbol`, `null`, 또는 `undefined` 가 아닌 나머지를 의미

  `object` 타입을 쓰면, `Object.create` 같은 API 가 더 잘 나타난다. 

  ```ts
  declare function create(o: object | null): void;
  
  create({ prop: 0 }); // 성공
  create(null); // 성공
  
  create(42); // 오류
  create("string"); // 오류
  create(false); // 오류
  create(undefined); // 오류
  ```

  ```ts
  let obj: object;
  obj = [1, 3];
  obj = {
      name : 'jihoon'
  }
  ```

  위와 같이 object 로 type 을 선언하는 경우 객체 형식 뿐 아니라 array 등의 복잡한 구조를 모두 담을 수 있는 변수가 선언된다.

  => 좀더 구체적인 아래 type 들을 사용하자

* ### Array

  **고정되지 않은 length** 를 갖는 **하나의 고정된 type** 을 허용하는 배열

  ```typescript
  let arr1: number[] = [1, 2, 3, 4];
  let arr2: Array<string> = ['hello', 'world'];
  ```

  두 문법의 기능상의 차이는 없다.

  하지만 다음과 같이 `readonly` 와 함께 사용되는 경우 

  ```ts 
  function printArray(fruits: readonly string[]) {
    
  }
  // 오류 X
  function printArray(fruits: readonly Array<string>) {
    
  }
  ```

  Array<> 구문은 오류가 발생한다.

  코드의 일관성을 유지하는것도 하나의 고려사항

* ### Tuple:bomb:

  **고정된 length** 를 갖는 **여러 고정된 type** 을 갖는 배열
  
  용도는 Array 보다는 interface / class 와 더 유사
  
  front-end react 에서 useState 를 이용하는 경우 tuple 이 사용되는 것을 확인할 수 있다.
  
  ```typescript
  let arr: [string, number] = ['hi', 10]
  ```
  
  가독성이 떨어진다. => 사용을 권장하지 않는다.
  
  interface / type alias / class 를 사용 권장
  
  class 나 interface 로 **묶기가 애매하고 동적으로 사용자가 이름을 지정**하여 사용하는 경우 tuple 이 유용할 수 있지만 그이외에는 tuple 사용을 권장하지 않는다.

* ### Enum

  여러 **관련된 상수 값들을 하나로 묶어 타입이 보장되도록** 정의할 수 있다.
  
  JS 에는 없으며 TS 에서 자체적으로 지원하는 Type 
  
  JS에서는 freeze 를 통해 Object 를 수정 불가능하게 만들어 Enum 을 구현할 수 있다.
  
  ```ts
  osEnum = Object.freeze({"Window": 0, "ios": 1, "android": 2})
  ```
  
  
  
  ```typescript
  enum Os { 
      Window, 
      Ios, 
      Android
  }
  let nowOs1: Os = Os.Window; 
  let nowOs2: Os = Os[0];
  ```
  
   Enum 은 **임의로 인덱스를 변경**하여 사용할 수 도 있다. 
  
  ```ts
  enum Os { 
      Window = 3, 
      Ios = 10, 
      Android
  }
  let nowOs1: Os = Os[3]; // Window
  let nowOs1: Os = Os[10]; // Ios
  let nowOs1: Os = Os[11]; // Android
  ```
  
    JS 로 컴파일된 결과를 보면
  
  ```js
  var Os;
  (function (Os) {
      Os[Os["Window"] = 3] = "Window";
      Os[Os["Ios"] = 10] = "Ios";
      Os[Os["Android"] = 11] = "Android";
  })(Os || (Os = {}))
  ```
  
    Os 라는 객체가 만들어지고 각각 ***<u>양방향으로 mapping</u>*** 되어있는 것을 볼 수 있다. 
  
    즉 **`Os[3]` 은 `"Window"` 를 `Os["Window"]` 는 `3` 을 반환**한다는 것을 의미한다.  
  
  
  
    Enum 에는 숫자가 아닌 문자열을 입력할 수도 있다.
  
  ```typescript
  enum Os { 
      Window = 'win', 
      Ios = 'ios', 
      Android = 'and'
  }
  ```
  
    이경우 컴파일된 결과를 보면
  
  ```js
  var Os;
  (function (Os) {
      Os["Window"] = "win";
      Os["Ios"] = "ios";
      Os["Android"] = "and";
  })(Os || (Os = {}))
  ```
  
    단방향 매핑이 되어있는 것을 확인할 수 있다. 
  
  
  
  ```typescript
    enum Os { 
        Window = 'win', 
        Ios = 'ios', 
        Android = 'and'
    }
  
    let myOs: Os;
    // myOs = Os.Window
    // myOs = Os.Ios
    // myOs = Os.Android
  ```
  
  
  
  > :warning: **Note**
  >
  > 다른 언어에서는 이런 Enum 은 유용하다.
  >
  > ```ts
  > enum Os { 
  >     Window, 
  >     Ios, 
  >     Android
  > }
  > let nowOs1: Os;
  > nowOs1 = 10  		// 타입체커가 오류를 잡지 못한다.
  > ```
  >
  > Enum 을 사용하면 Type 이 온전히 보장되지 않는다.
  >
  > 따라서 TypeScript 에서는 가급적이면 사용하지 않는 것이 좋다.
  >
  > 대용으로 **Union Type 을 통해 구현하는 것이 타입 보장의 측면에서 더 효과적**이다.
  >
  > 다른 mobile client 와 data 를 주고 받아 공통으로 이해할 수 있는 Enum 타입이 꼭 필요한 경우에만 유용하다. 



****



## Type Alias

```ts
type Text = string;
const name: Text = 'jihoon';
const address: Text = 'korea';

type Num = number;

type student = {
  name: string;
  age: number;
};

const student: Student = {
  name: 'jihoon',
  age: 12
};
```

`type` 구문을 사용하여 사용자 지정 type 을 정의하여 사용할 수 있다.



****



## String Literal Types

```ts
type Name = 'name';
let newName: Name;
newName = 'Name' // 오류 발생
```

한가지 값만을 할당할 수 있는 타입



****



## Union Type

```ts
type Direction = 'left' | 'right' | 'up' | 'down';
function move(direction: Direction) {
  console.log(direction);
}
move('down')
```

위와 같이 Union type 을 활용하여 특정 값만이 할당가능한 타입을 생성할 수 있다.

```ts
type SuccessState= {
  response: {
    body: string;
  }
}

type FailState = {
  reason: string;
}

type loginState = SuccessState | FailState;

function login(id: string, password: string): loginState {
  return {
    response: {
      body: 'logged in!',
    },
  }
}
```

```ts
function printLoginState(state: loginState): string {
  if ('response' in state) {
    console.log(`🎉 ${state.response.body}`);
  } else {
    console.log(`😭 ${state.reason}`);
  }
}
```

위와 같은 경우 `response` property 가 있는지 여부를 통해 타입을 구분하고 있다.

 

****



## Discriminated Union

구분자 common field 를 통해 Union type 내에서 직관적으로 타입들을 구분할 수 있도록한다.

```ts
type SuccessState= {
  result: 'success';		// 구분자
  response: {
    body: string;
  }
}

type FailState = {
  result: 'fail';  			// 구분자
  reason: string;
}
type loginState = SuccessState | FailState;

function login(id: string, password: string): loginState {
  return {
    response: {
      body: 'logged in!',
    },
  }
}
```

```ts
function printLoginState(state: loginState): string {
  if (state.result === 'success') {
    console.log(`🎉 ${state.response.body}`);
  } else {
    console.log(`😭 ${state.reason}`);
  }
}
```



****



## Intersection Type

```ts
type Student = {
  name: string;
  score: number;
}

type Worker = {
  employeeId: number;
  work: () => void;
}

function internWork(person: Student & Worker) {
  console.log(person.name, person.employeeId, person.work());
}

internWork({
  name: 'jihoon',
  score: 1,
  employeeId: 123, 
  work: () => {}
})
```

Intersection type 은 해당 타입들을 모두 만족하는 (and 와 같은) 타입이다.

위 경우 '객체 형태의 타입은 타입에 부합하는 변수와 메서드를 모두 가지고 있는 경우 해당 객체 타입으로 인정한다.' 라는 덕타이핑 관점에서 두 객체 타입의 속성을 모두 가지고 있는 경우 intersection type 을 만족한다고 볼 수 있다. 



****



## Type Inference (타입 추론)

```ts
let text = 'hello';
text = 'hi'; 				// 오류 X
text = 1;						//  text 는 string 으로 추론 => error
```

```ts
function print(message) {			
// message parameter 가 any 타입으로 추론 => 명시적으로 타입 선언해주는 것이 좋다.
  console.log(message);
}
print('hello');
print(1);
```

```ts
function print(message = 'hello') {			
// 'hello' 를 기본값으로 주어 string 타입으로 추론되었다.
  console.log(message);
}
print('hello');
print(1);					// error
```

```ts
function add(x: number, y: number) {
  return x + y;
}
// return type 이 number 로 추론된다.

const result = add(1, 2); // 함수의 return type 인 number로 Type 으로 추론된다.
```

> ### **:warning:Note**
>
> 원시 타입인 경우 생략해도 좋지만 
>
> * 의도대로 정확하게 동작하는 code 를 위해 
> * 가독성을 위해
>
> type 추론에 너무 의존하는 것은 좋지 않다.



****



## Type assertions (타입 단언)

개발자는 어떤 변수의  type 을 알고 있는 경우가 있다. 

이런 경우 어떤 entity 의 실제 타입이 현재 타입보다 더 구체적일 때 발생한다. 

***<u>Type assertions</u>*** 는 컴파일러에게 "날 믿어, 난 내가 뭘하고 있는지 알아" 라고 말해주는 방법이다. 

불가피한 경우가 아닌경우 타입 단언은 피하는 것이 좋다.

* #### angle-braket

  ```ts
  let someValue: any = "this is a string";
  
  let strLength: number = (<string>someValue).length;
  ```

* #### `as`-문법 

  ```ts
  let someValue: any = "this is a string";
  
  let strLength: number = (someValue as string).length;
  ```



> ### :bulb:타입 단언문을 사용하는 불가피한 경우
>
> * #### 타입 단언은 타입체커가 추론한 타입보다 더 정확한 타입이 있는 경우 
>
>   ex)
>
>   DOM 엘리먼트에 대해서는 ts 보다 더 정확히 알고 있다. 
>
>   ```ts
>   const divEl = document.querySelector('#myButton').addEventListener('click', 2=> {
>       e.currentTarget // 타입은 EventTarget
>       const button = e.currentTarget as HTMLButtonElement;
>   })
>   ```
>
>   ts 는 DOM 에 접근할 수 없기 때문에 #myButton 이 버튼 엘리먼트인 것을 알지 못한다. 
>
>   또한 currentTarget 이 같은 버튼이어야 하는 것도 알지 못한다 .
>
>   우리는 ts 가 알지 못하는 정보를 가지고 있기에 여기서는 타입 단언문을 사용하는 것이 타당하다. 
>
>
> * #### null / undefined 가 아님을 단언하는 경우
>
>   또한 자주 쓰이는 `!` 문법을 사용하여 null 이 아님을 단언하는 경우도 있다. 
>
>   ```ts
>   const elNull = document.getElementById('foo');
>   const el = document.getElementById('foo')!;
>   ```
>
>   변수의 접두사로 쓰인 `!` 는 boolean 의 부정문이다. 
>
>   그러나 접미사로 쓰이는 `!` 는 값이 `null` 이 아니라는 단언문으로 해석된다. 
>
>   우리는 `!` 일반적으로 단언문처럼 생각해야한다. 
>
>   단언문은 컴파일 과정 중 제거되므로 ts 는 알지 못하지만 그 값이 null 이 아니라고 확신할 수 있을 때 사용
>
>   확신이 없을 경우 null 체크 조건문 사용







****















## Function 에서 type 이용하기

* ### Parameter / Return type 명시

  ```ts
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  function jsFetchNum(id: string): Promise<number> {
    //code...
    //code...
    //code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  ```

  실행해보면 tsconfig 에서 promise 관련 설정을 하지 않아 오류가 발생하는 것을 확인할 수 있다.

  ```ts
     return new Promise((resolve, reject) => {
       					~~~~~~~
  Found 1 error in src/test.ts:9
  ```

  

* ### Optional Parameter

  ```ts
  function printName(firstName: string, lastName?: string) {
    																	//~~~~~~~~  
    																	//(parameter) lastName: string | undefined
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Jihoon', undefined)
  ```

  `?` 를 통해 optional로 지정한 parameter 는 타입 체커가 지정한 타입 외에 `undefined` 타입까지 포함한 union type 으로 인식한다.  

  `?` 를 사용하지 않고 파라미터 타입을 명시적으로 string | undefined 로 지정하여도 비슷한 효과를 볼 수 있지만 이 경우 값이 없는 경우 undefined 값을 명시적으로 넣어주어야 한다.

  ```ts 
  function printName(firstName: string, lastName: string | undefined) {
    lastName: string | undefined
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Ellie'); 						// 오류 발생
  printName('Jihoon', undefined)	// 이처럼 명시적으로 값을 넣어주어야 한다.
  ```

  `?` 를 이용해 optional 파라미터를 정의하자!!



* ### Default Parameter

  ```ts
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage(); //default message 출력
  ```



* ### Rest Parameter

  ```ts
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
  ```

  `...` 를 parameter 앞에 붙이는 경우 Rest Parameter 로 선언할 수 있다.

  이 경우 입력받은 여러 parameter 들을 array 의 형태로 변환하여 입력값을 받게 된다. 

  Rest Parameter 와 함께 이외의 추가 parameter 를 받고 싶은 경우 **Rest parameter 를 마지막에 선언**해준다.

  ```ts
  function addNumbers(...numbers: number[], check: string): number {
    									~~~
                      //A rest parameter must be last in a parameter list.
    return numbers.reduce((a, b) => a + b);
  }
  ```

  => 다음과 같이 수정

  ```ts
  function addNumbers(check: string, ...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  ```

  또한 Rest Parameter 는 한 **Function 내에 하나만 사용 가능**하다.



* ### Readonly Parameter

  ```ts
  function printArray(fruits: readonly string[]) {
    
  }
  ```

  parameter 를 `readonly` 로 선언하는 경우 수정이 불가능한 Parameter 로 선언할 수 있다.

  

****















