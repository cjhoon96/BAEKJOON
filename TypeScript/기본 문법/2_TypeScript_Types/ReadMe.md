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

* ### Object

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

  

* ### Array

  ```typescript
  let arr1: number[] = [1, 2, 3, 4];
  let arr2: Array<string> = ['hello', 'world'];
  ```

* ### Tuple

  ```typescript
  let arr: [string, number] = ['hi', 10]
  ```



* ### Enum

  ```typescript
  enum Os { 
      Window, 
      Ios, 
      Android
  }
  let nowOs1: Os = Os.Window; 
  let nowOs2: Os = Os[0];
  ```
  
   Enum 은 임의로 인덱스를 변경하여 사용할 수 도 있다. 
  
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
  
    즉 `Os[3]` 은 `"Window"` 를 `Os["Window"]` 는 `3` 을 반환한다는 것을 의미한다.  
  
  
  
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
  
  





* ### Type assertions

  개발자는 어떤 변수의  type 을 알고 있는 경우가 있다. 

  이런 경우 어떤 entity 의 실제 타입이 현재 타입보다 더 구체적일 때 발생한다. 

  ***<u>Type assertions</u>*** 는 컴파일러에게 "날 믿어, 난 내가 뭘하고 있는지 알아" 라고 말해주는 방법이다. 

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