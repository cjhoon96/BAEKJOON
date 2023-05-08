# TypeScript 기본 타입

> * ### String
>
>   ```typescript
>   let str: string = 'HelloWorld';
>   ```
>
> * ### Number
>
>   ```typescript
>   let num: number = 10;
>   ```
>
> * ### Boolean
>
>   ```typescript 
>   let bool1: boolean = false;
>   let bool2: boolean = true;
>   ```
>
> * ### Object???
>
>   `object`는 원시 타입이 아닌 타입을 나타낸다. 
>
>   예를 들어, `number`, `string`, `boolean`, `bigint`, `symbol`, `null`, 또는 `undefined` 가 아닌 나머지를 의미
>
>   `object` 타입을 쓰면, `Object.create` 같은 API 가 더 잘 나타난다. 
>
>   ```ts
>   declare function create(o: object | null): void;
>     
>   create({ prop: 0 }); // 성공
>   create(null); // 성공
>     
>   create(42); // 오류
>   create("string"); // 오류
>   create(false); // 오류
>   create(undefined); // 오류
>   ```
>
>   
>
> * ### Array
>
>   ```typescript
>   let arr1: number[] = [1, 2, 3, 4];
>   let arr2: Array<string> = ['hello', 'world'];
>   ```
>
> * ### Tuple
>
>   ```typescript
>   let arr: [string, number] = ['hi', 10]
>   ```
>
> 
>
> * ### Enum
>
>   ```typescript
>   enum Os { 
>       Window, 
>       Ios, 
>       Android
>   }
>   let nowOs1: Os = Os.Window; 
>   let nowOs2: Os = Os[0];
>   ```
>
>   
>
>   Enum 은 임의로 인덱스를 변경하여 사용할 수 도 있다. 
>
>   ```ts
>   enum Os { 
>       Window = 3, 
>       Ios = 10, 
>       Android
>   }
>   let nowOs1: Os = Os[3]; // Window
>   let nowOs1: Os = Os[10]; // Ios
>   let nowOs1: Os = Os[11]; // Android
>   ```
>
>   JS 로 컴파일된 결과를 보면
>
>   ```js
>   var Os;
>   (function (Os) {
>       Os[Os["Window"] = 3] = "Window";
>       Os[Os["Ios"] = 10] = "Ios";
>       Os[Os["Android"] = 11] = "Android";
>   })(Os || (Os = {}))
>   ```
>
>   Os 라는 객체가 만들어지고 각각 ***<u>양방향으로 mapping</u>*** 되어있는 것을 볼 수 있다. 
>
>   즉 `Os[3]` 은 `"Window"` 를 `Os["Window"]` 는 `3` 을 반환한다는 것을 의미한다.  
>
>   
>
>   Enum 에는 숫자가 아닌 문자열을 입력할 수도 있다.
>
>   ```typescript
>   enum Os { 
>       Window = 'win', 
>       Ios = 'ios', 
>       Android = 'and'
>   }
>   ```
>
>   이경우 컴파일된 결과를 보면
>
>   ```js
>   var Os;
>   (function (Os) {
>       Os["Window"] = "win";
>       Os["Ios"] = "ios";
>       Os["Android"] = "and";
>   })(Os || (Os = {}))
>   ```
>
>   단방향 매핑이 되어있는 것을 확인할 수 있다. 
>
>   
>
>   ```typescript
>   enum Os { 
>       Window = 'win', 
>       Ios = 'ios', 
>       Android = 'and'
>   }
>   
>   let myOs: Os;
>   // myOs = Os.Window
>   // myOs = Os.Ios
>   // myOs = Os.Android
>   ```
>
>   
>
> 
>
> * ### Any
>
>   Any type 에는 말 그대로 모든 타입에 대해서 허용된다. 
>
>   기존 자바스크립트로 구현되어있는 웹 서비스 코드에 타입스크립트로 점진적으로 적용할 때 활용하면 좋다. 
>
>   ```typescript
>   let str: any = 'hi';
>   let num: any = 10;
>   let arr: any = ['a', 2, true];
>   ```
>
> * ### Void
>
>   Void Type 은 `undefined` 와 `null` 만 할당하고 함수에는 반환 값을 설정할 수 없는 타입이다. 
>
>   ```typescript
>   let unuseful: void = undefined;
>   function notuse(): void {
>     console.log('sth');
>   }
>   // 이처럼 반환 값이 없는 함수에서 사용 가능하다. 
>   ```
>
> * ### Never
>
>   함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입이다.
>
>   ```typescript
>   // 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
>   function neverEnd(): never {
>     while (true) {
>   
>     }
>   }
>   ```
>
> * ### Null / Undefined
>
>   ```typescript
>   let a: null = null;
>   let b: undefined = undefined;
>   ```
>
>   
>
> * ### Type assertions
>
>   개발자는 어떤 변수의  type 을 알고 있는 경우가 있다. 
>
>   이런 경우 어떤 entity 의 실제 타입이 현재 타입보다 더 구체적일 때 발생한다. 
>
>   ***<u>Type assertions</u>*** 는 컴파일러에게 "날 믿어, 난 내가 뭘하고 있는지 알아" 라고 말해주는 방법이다. 
>
>   * #### angle-braket
>
>     ```ts
>     let someValue: any = "this is a string";
>     
>     let strLength: number = (<string>someValue).length;
>     ```
>
>   * #### `as`-문법 
>
>     ```ts
>     let someValue: any = "this is a string";
>         
>     let strLength: number = (someValue as string).length;
>     ```