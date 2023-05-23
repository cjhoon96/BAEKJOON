# TypeScript Generics

> 잘 정의되고 일관된 API뿐만 아닌 재사용 가능한 컴포넌트를 구축하는 것도 소프트웨어 엔지니어링에서의 주요한 부분이다. 
>
> 현재의 데이터와 미래의 데이터 모두를 다룰 수 있는 컴포넌트는 거대한 소프트웨어 시스템을 구성하는 데 있어 가장 유연한 능력을 제공한다.
>
> C#과 Java 같은 언어에서, 재사용 가능한 컴포넌트를 생성하는 도구상자의 주요 도구 중 하나는 ***<u>Generic</u>*** 이다, 
>
> 즉, ***<u>단일 타입이 아닌 다양한 타입에서 작동</u>***하는 컴포넌트를 작성할 수 있다.
>
> 사용자는 제네릭을 통해 여러 타입의 컴포넌트나 자신만의 타입을 사용할 수 있다.
>
> 
>
> ```ts
> function identity(arg: number): number {
> return arg;
> }
> ```
>
> 또는 `any` 타입을 사용하여 identity 함수를 기술할 수 있다
>
> ```ts
> function identity(arg: any): any {
> return arg;
> }
> ```
>
> `any`를 쓰는 것은 함수의 `arg`가 ***<u>어떤 타입이든 받을 수 있다는 점에서 제네릭</u>***이지만, 실제로 함수가 반환할 때 ***<u>어떤 타입인지에 대한 정보는 잃게 된다</u>***. 만약 ***<u>number 타입을 넘겨도 any 타입이 반환</u>***된다는 정보만 얻게된다.
>
> 대신에 우리는 무엇이 반환되는지 표시하기 위해 인수의 타입을 캡처할 방법이 필요하다. 여기서는 값이 아닌 타입에 적용되는 <u>***타입 변수***</u> 를 사용한다.
>
> ```ts
> function identity<T>(arg: T): T {
> return arg;
> }
> ```
>
> `T` 라는 타입변수는 통상적으로 `T` 를 사용할뿐 어떤 변수명을 사용해도 무방하다.
>
> `T`는 유저가 준 인수의 타입을 캡처하고, 이 정보를 나중에 사용할 수 있게 한다. 여기에서는 `T`를 반환 타입으로 다시 사용한다. 인수와 반환 타입이 같은 타입을 사용하고 있는 것을 확인할 수 있다. 이를 통해 타입 정보를 함수의 한쪽에서 다른 한쪽으로 운반할 수 있도록 한다.
>
> 일단 제네릭 함수는 두 가지 방법 중 하나로 호출할 수 있다. 
>
> 첫 번째 방법은 함수에 타입 인수를 포함한 모든 인수를 전달하는 방법입니다.
>
> ```ts
> let output = identity<string>("myString"); // 출력 타입은 'string'
> ```
>
> 여기서 함수를 호출할 때의 인수 중 하나로써 `T`를 `string`으로 명시해 주고 인수 주변에 `()` 대신 `<>`로 감싸준다.
>
> 두 번째 방법은가장 일반적인 방법으로 *<u>**타입 인수 추론**</u>* 을 사용한다.  즉, 우리가 전달하는 ***<u>인수에 따라서 컴파일러가 `T`의 값을 자동</u>***으로 정하게 하는 것이다.
>
> ```ts
> let output = identity("myString"); //출력 타입은 'string'입니다.
> ```
>
> 타입 인수를 꺾쇠괄호(`<>`)에 담아 명시적으로 전달해 주지 않은 것을 주목하세요; 컴파일러는 값인 `"myString"`을 보고 그것의 타입으로 `T`를 정한다. 
>
> 인수 추론은 코드를 간결하고 가독성 있게 하는 데 있어 유용하지만 더 복잡한 예제에서 컴파일러가 타입을 유추할 수 없는 경우엔 명시적인 타입 인수 전달이 필요할 수도 있다.

## Generic Type 변수 작업

> ```ts
> function loggingIdentity (arg: any): any {
> console.log(arg.length); // 오류 발생 x 
> return arg;
> }
> ```
>
> `any` 타입은 모든 타입을 의미하기 때문에 오류가 나지 않는다. 
>
> ```ts
> function loggingIdentity<T>(arg: T): T {
> console.log(arg.length); // 오류 발생: T에는 .length 가 없다.
> return arg;
> }
> ```
>
> 위와 같은 경우 오류가 발생한다. 
>
> Generic Type `T` 에 array 가 아닌 `.length` 멤버가 없는 number Type 같은 변수가 들어갈 수도 있기 때문이다. 
>
> 실제로 이 함수가 `T` 가 아닌 `T` 의 배열에서 동작하도록 의도했다고 가정하면
>
> ```ts
> function loggingIdentity<T>(arg: T[]): T[] {
> console.log(arg.length); // 오류 발생: T에는 .length 가 없다.
> return arg;
> }
> ```
>
>  와 같이 작성되어야 할 것이다. 

## Generic Interface

> ```ts
> function logText<T>(text: T): T {
>   return text;
> }
> // #1
> let str: <T>(text: T) => T = logText;
> // #2
> let str: {<T>(text: T): T} = logText;
> ```
>
> 위와 같은 코드를 다음과 같이 바꿀 수 있다.
>
> ```ts
> interface GenericLogTextFn {
>   <T>(text: T): T;
> }
> function logText<T>(text: T): T {
>   return text;
> }
> let myString: GenericLogTextFn = logText; // Okay
> ```
>
> 인터페이스에 인자 타입을 강조하고 싶다면 아래와 같이 변경할 수 있다.
>
> ```ts
> interface GenericLogTextFn<T> {
>   (text: T): T;
> }
> function logText<T>(text: T): T {
>   return text;
> }
> let myString: GenericLogTextFn<string> = logText;
> ```
>
> 이와 같은 방식으로 Generic Interface 뿐 아니라 클래스도 생성할 수 있다. 

## Generic Class

> ```ts
> class GenericMath<T> {
>   pi: T;
>   sum: (x: T, y: T) => T;
> }
> 
> let math = new GenericMath<number>();
> ```
>
> * **Note**
>
>   > WARNING
>   >
>   > 참고! Generic classes are only generic over their instance side rather than their static side, so when working with classes, static members can not use the class’s type parameter

## Generic 제약조건

> Generic Type 변수 에서 살펴본 내용 말고도 Generic 함수에 어느 정도 타입 힌트를 줄 수 있다. 
>
> ```ts
> function logText<T>(text: T): T {
> console.log(text.length); // Error: T doesn't have .length
> return text;
> }
> ```
>
> 앞서 살펴본 오류가 발생하는 코드를 다시 보자.
>
> 인자의 타입에 선언한 `T` 는 아직 어떤 타입인지 구체적으로 정의하지 않았으므로 `.length` 코드에서 오류가 발생한다. 
>
> 이 때 해당 타입을 정의하지 않고도 `length` 속성 정도는 허용하려면 아래와 같이 작성하면 된다. 
>
> ```ts
> interface LengthWise {
>  length: number;
> }
> 
> function logText<T extends LengthWise>(text: T): T{
>  console.log(text.length);
>  return text;
> }
> ```
>
> 위와 같이 작성하게 되면 타입에 대한 강제는 아니지만 `length` 에 대해 동작하는 인자만 넘겨받을 수 있다.  
>
> ```ts
> function logText<T extends {length: number}>(text: T): T{
>  console.log(text.length);
>  return text;
> }
> ```
>
> 와같이  사용도 가능하다. 
>
> ```ts
> logText(10); // Error, 숫자 타입에는 `length`가 존재하지 않으므로 오류 발생
> logText({ length: 0, value: 'hi' }); // `text.length` 코드는 객체의 속성 접근과 같이 동작하므로 오류 없음
> ```

## 객체의 속성을 제약하는 방법

> ```ts
> function getProperty<T, O extends keyof T>(obj: T, key: O) {
>     return obj[key];
> }
> let obj = {a: 1, b: 2, c: 3}
> 
> getProperty(obj, "a");
> getProperty(obj, "z"); // error
> ```
>
> 

