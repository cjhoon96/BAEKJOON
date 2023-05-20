# 코드 생성과 타입이 관계 없음을 이해하기

> 큰 그림으로 보면 ts compiler 는 두가지 역할을 수행
>
> * 최신 ts/js 를 브라우저에서 동작할 수 있도록 구버전의 js 로 ***<u>transpile</u>***
> * 코드의 타입 오류를 체크
>
> 놀랍게도 이 두가지는 서로 **완벽히 독립적** 이다.
>
> 다시말해 ts 가 js 로 변환될 때 코드 내의 타입에는 영향을 주지 않는다.
>
> 또한 js 의 실행 시점에도 타입은 영향을 미치지 않는다.
>
> 위 두가지를 이해하면
>
> ts 가 **할 수 있는일** / **할 수 없는일** 을 짐작할 수 있다. 
>
> 

## 타입 오류가 있는 코드도 컴파일이 가능

> 컴파일은 타입 체크와 독립적이기 때문에 타입오류가 있는 코드도 컴파일이 가능하다. 
>
> ```ts
> let x = 'hello';
> x = 1234;
> ```
>
>  실재로 위 코드는 타입추론을 통해 string 으로 타입이 정해진 x 에 number 타입인 1234 를 할당하였으므로 타입 오류가 발생하며
>
> ```ts
> tsc
> src/testCode.ts:2:1 - error TS2322: Type 'number' is not assignable to type 'string'.
> 
> 2 x = 1234;
>   ~
> ```
>
> compile 시에도 타입 오류가 발생했음을 명시해준다. 
>
> 하지만
>
> ![effts1_3_1](C:\Users\readian\Desktop\TIL\TypeScript\IMG\effts1_3_1.png)
>
> 컴파일은 수행한다.
>
> ```js
> let x = 'hello';
> x = 1234;
> ```
>
> 타입체크와 컴파일이 동시에 이루어지는 C 나 Java 같은 언어를 사용하던 사람이라면 황당할 수 있다.
>
> ts의 오류는 C 나 Java 같은 언어들의 **Warning** 과 비슷한 개념이다.
>
> **문제가 될 부분을 알려주지만 빌드를 멈추지는 않는다**.
>
> ****
>
> > #### Note
> >
> > 엄밀히 말하면 오직 코드 생성만이 compile 이라고 할 수 있다.
> >
> > 작성한 ts 가 유효한 js 라면 compiler 는 compile 을 해낸다.
> >
> > 그러므로 코드에 오류가 있을 때 "타입 체크에 문제가 있다." 라고 말하는 것이 정확한 표현이다.
> >
> > ****
>
> 엉성해 보여도 도움이 된다. 
>
> 오류가 있더라도 컴파일된 산출물이 나오는 것은 문제가 된 오류를 수정하지 않더라도 다른 부분을 테스트할 수 있다는 점에서 장점이다.
>
> `tsconfig.json` 의 `noEmitOnError` 를 설정하거나 빌드 도구에서 동일하게 적용하면 요류시 컴파일 하지 않는다.

## 런타임에는 타입 체크가 불가능

> ```ts
> interface Square {
>   width: number;
> }
> interface Rectangle extends Square {
>   height: number;
> }
> type Shape = Square | Rectangle;
> 
> function calculateArea(shape: Shape) {
>   if (shape instanceof Rectangle) {
> // 'Rectangle' only refers to a type, but is being used as a value here.
>     return shape.width;
>   } else {
>     return shape.width;
>   }
> }
> ```
>
> instanceof 체크는 런타임에 일어나지만, Rectangle 은 타입이기 때문에 런타임 시점에는 아무런 역할을 할 수 없다. 
>
> 컴파일시 ts 의 모든 인터페이스, 타입, 타입구문들은 제거된다.
>
> 이부분은 실재 컴파일을 해봐야 정확히 이해할 수 있다. 
>
> ```js
> function calculateArea(shape) {
>     if (shape instanceof Rectangle) {
>         return shape.width;
>     }
>     else {
>         return shape.width;
>     }
> }
> ```
>
> Rectangle 의 타입을 정의한 `interface` ts 구문은 컴파일시 사라지게 되지만   `if (shape instanceof Rectangle) {` ` 의 Rectangle 은 코드에 살아있게 되고 이는 런타임시 오류를 야기시킨다.
>
>  
>
> 앞의 코드에서 다루고 있는 shape 타입을 **명확하게** 하려면 런타임에 타입 정보를 유지하는 방법이 필요하다. 
>
> 하나의 방법은 height 속성이 존재하는지 체크하는 것이다.
>
> ```ts
> function calculateArea(shape: Shape) {
>   if ("height" in shape) {
>     shape; // 타입이 Rectangle  타입체크를 위한 것일 뿐 이런 코드는 좋지 않다.
>     return shape.width * shape.height;
>   } else {
>     shape; // 타입이 Square
>     return shape.width * shape.width;
>   }
> }
> ```
>
>  이경우 런타임에도 오류가 발생하지 않는다. 
>
> 속성체크는 런타임에 접근 가능한 값에만 관련되지만, 타입 체커 역시도 **shape 의 타입을 Rectangle 로 보정**해 주기 때문에 오류가 사라진다. 
>
> 타입 정보를 유지하는 또다른 방법은 **런타임에 접근 가능한 타입 정보**를 명시적으로 저장하는 **'태그' 기법** 이다.
>
> ```ts
> interface Square {
>   width: number;
>   kind: "square";
> }
> 
> interface Rectangle {
>   height: number;
>   width: number;
>   kind: "rectangle";
> }
> 
> type Shape = Square | Rectangle;
> 
> function calculateArea(shape: Shape) {
>   if (shape.kind === "rectangle") {
>     shape;
>     return shape.width * shape.height;
>   } else {
>     shape;
>     return shape.width * shape.width;
>   }
> }
> ```
>
> 여기서 Shape 타입은 **'태그된 유니온'** 의 한 예이다.
>
> ****
>
> > #### 태그된 유니온
> >
> > discriminated union type 식별 가능한 유니온 타입이라고도 부른다.
> >
> > 특정 속성을 통해 값이 속하는 브랜치를 식별할 수특정 속성을 통해 값이 속하는 브랜치를 식별할 수 있는 union type 을 의미한다.
> >
> > ****
>
> 이 기법은 런타임에 타입 정보를 손쉽게 유지할 수 있으므로 흔하게 볼 수 있다. 
>
> (`Rectangle` 에 존재하지만 `Square` 에 존재하지 않는 height 와 달리 둘 모두에게 kind 라는 속성과 그 값을 부여해 런타임에 접근 가능한 타입 정보 를 명시)
>
> 
>
> 둘을 모두 이용하는 기법도 있다. => 타입을 클래스로 만들면 된다. 
>
> ```ts
> class Square {
>   constructor(public width: number) {}
> }
> 
> class Rectangle extends Square {
>   constructor(public width: number, public height: number) {
>     super(width);
>   }
> }
> 
> type Shape = Square | Rectangle;
> 
> function calculateArea(shape: Shape) {
>   if (shape instanceof Rectangle) {
>     return shape.width * shape.height;
>   } else {
>     return shape.width * shape.width;
>   }
> }
> ```
>
> 위와 같이 class 로 선언하면 **type 과 값으로 모두 사용 가능** => 오류 X
>
> ```ts
> type Shape = Square | Rectangle
> ```
>
> 부분에서 Rectangle 은 타입으로 참조되지만
>
> ```ts
> shape instanceof Rectangle
> ```
>
> 부분에서는 값으로 참조된다.
>
> 어떻게 참조되는지에 대한 원리는 중요!! item 8 에서 자세히 다룬다.

## 타입 연산은 런타임에 영향을 주지 않는다.

> string 또는 number 타입인 값을 항상 number 로 정제하는 경우를 가정해보자
>
> ```ts
> function asNumber(val: number | string): number {
>   return val as number;
> }
> ```
>
> 위 코드는 타입 체커를 통과하지만 잘못된 방법이다.
>
> ```ts
> function asNumber(val) {
>     return val; // string param 이 입력되면 그대로 string 이 출력될 것이다. 
> }
> ```
>
> compile 된 코드를 보면 아무런 정제 과정이 없다. 
>
> `as number` 는 타입 연산이고 런타임 동작에는 아무런 영향을 미치지 않는다. 
>
> **런타임의 타입을 체크** 하고 js 연산을 통해 변환을 수행해야한다. 
>
> ```ts
> function asNumber(val: number | string): number {
>   return typeof(val) === 'string' ? Number(val) : val;
> }
> ```
>
> as number 는 **타입 단언문** 이다. item 9 에서 자세히

## 런타임 타입은 선언된 타입과 다를 수 있다.

> ts 는 일반적으로 실행되지 못한 dead code 를 찾아내지만 다음의 경우 strict 를 설정하더라도 찾아내지 못한다.
>
> ```ts
> function setLightSwitch(value: boolean) {
>   switch (value) {
>     case true:
>       turnLightOn();
>       break;
>     case false:
>       turnLightOff();
>       break;
>     default:
>       console.log("실행되지 않을까 봐 걱정됩니다.");
>   }
> }
> ```
>
> `: boolean` 코드로 인해 ts 에서는 default 부분은 실행될 수 없는 부분이다.
>
> 컴파일되어 : boolean 이 사라질 js 의 경우 value 의 값에 'on' 과 같은 값이 들어갈 수 있으므로 해당 부분이 실행 가능하다.
>
> 순수 ts 에서도 다음을 실행할 방법이 있다. 
>
> ```ts
> function setLightSwitch(value: boolean) {
>   switch (value) {
>     case true:
>       turnLightOn();
>       break;
>     case false:
>       turnLightOff();
>       break;
>     default:
>       console.log("실행되지 않을까 봐 걱정됩니다.");
>   }
> }
> 
> interface LightApiResponse {
>     lightSwitchValue: boolean;
> }
> 
> async function setLight() {
>     const response = await fetch('/light');
>     const result: LightApiResponse = await response.json();
>     setLightSwith(result.lightSwitchValue)
> }
> ```
>
> 위 경우 /light 를 요청하면 그 결과로 LightApiResponse 를 반환하라고 했지만
>
> 실제로 그렇게 되리라는 보장은 없다.
>
> API 를 잘못 파악해서 lightSwitchValue 가 실제로는 문자열이었다면 런타임에는 setLightSwitch 
>
> 복잡하다
>
> ```ts
> interface a {
>     check: boolean;
> }
> 
> const check_val: a = {
>     check: 'on'
> }
> 
> console.log(check_val.check)
> ```
>
> 이경우와 비교하면 될듯 싶다 위 경우 타입 오류가 발생하지만 컴파일은 된다.
>
> 하지만  light 코드는 변수 a 와 같이 코드 내에서 변수가 선언되는 것이 아니라
>
> 런타임 중에 값을 받아오게 되어 런타임 타입 은 위 a 와 같은 상태라고 볼 수 있다. (그래서 런타임 타입은 선언된 타입과 다를 수 있다는 말을 한것 같다. )
>
> setLightSwitch 는 ts 타입 적으로는 default 가 실행될 수 없지만 런타임 도중 값을 받아와 실행되는 경우 런타임 타입으로 실행되어 default 가 실행될 가능성이 있다 라고 이해했다.
>
> # 이부분은 todolist 를 개조해서 한번 해보지뭐
>
> 

## ts 타입으로는 함수를 오버로드 불가능

> C++ 같은 언어는 **동일한 이름에 매개변수만 다른** 여러버전의 함수를 허용
>
> 이를 함수 **오버로딩** 이라한다. 
>
> 그러나 ts 에서는 타입과 런타임의 동작이 무관하기 때문에 함수 오버로딩은 불가능하다. 
>
> ```ts
> function add(a: number, b: number) {
> return a + b;
> }
> 
> function add(a: string, b: string) {
> return a + b;
> }
> ```
>
> ```
> Duplicate function implementation.
> ```
>
> 오류 발생
>
> ts 가 함수 오버로딩 기능을 지원하기는 하지만 온전히 타입 수준에서만 동작한다.
>
> 하나의 함수에 대해 여러개의 선언문을 작성할 수 있지만, 구현체 는 오직 하나뿐이다.
>
> ```ts
> function add(a: number, b: number): number;
> function add(a: string, b: string): string;
> fucntion add(a, b) {
> return a + b;
> }
> const k: number = add(1, 3);
> const l: string = add(1, 3); // 타입 오류
> const m: string = add('1', '3'); 
> const n: number = add('1', '3'); // 타입 오류
> ```
>
> `"noImplicitAny": false, ` 처리 해주거나 구현체의 a와 b 를 명시적으로  any 로 선언해주어야 타입체크 통과 
>
> 
>
> 

## 타입스크립트 타입은 런타임 성능에 영향을 주지 않는다.

> ts 의 타입은 컴파일 과정에서 js 로 변환될 때 모두 제거되기 때문에 런타임 성능에는 아무런 영향이 없다.
>
> * 런타임 오버헤드가 없는 대신 **빌드타임 오버헤드가 있다.**
>
>   * TS 팀은 컴파일러 성능을 매우 중요하게 생각하기 때문에 컴파일은 일반적으로 상당히 빠른편(중분빌드시 더욱 체감)
>   * 오버헤드가 커지면 빌드 도구에 transpile only 를 설정하여 타입 체크를 건너뛸 수 있다. 
>
> * 호환성 상향, 성능 오버헤드 감안 / 호환성 포기 성능 중심  둘 사이의 선택 문제 발생
>
>   ex) 제너레이터 함수 가 es5 로 컴파일 되려면 ts compiler 는 헬퍼코드를 추가할 것
>
>   하지만 이런 경우는 컴파일 타깃과 언어 레벨의 문제 => 타입과 무관
>
>   
>
>   https://ko.javascript.info/generators