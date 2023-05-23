# Literal Type

> TypeScript에는 문자열과 숫자, 두 가지 리터럴 타입이 있는데 이를 사용하면 문자열이나 숫자에 정확한 값을 지정할 수 있다.
>
> 
>
> `var` / `let` 을 통해 변수를 선언할 경우 해당 변수의 값이 변경될 가능성이 있음을 컴파일러에게 알린다. 
>
> 반면 `const` 를 통해 선언하면 해당 상수는 절대 변하지 않음을 보장한다. 
>
> ```ts
> const userName1 = "Bob";
> // 이처럼 정해진 string 값을 가진 것을 String Literal Type 이라 한다. 
> let userName2 = "Tom";
> userName2 = "Bob";
> 
> //오류
> // userName1 = "Tom";
> ```
>
> 무한한 수의 잠재적 케이스들 (문자열 값은 경우의 수가 무한대)을 유한한 수의 잠재적 케이스 (`helloWorld`의 경우: 1개)로 줄여나가는 것을 타입 좁히기 (narrowing)라 한다.
>
> 

## 문자열 리터럴 타입 (String Literal Types)

> 실제로 문자열 리터럴 타입은 유니언 타입, 타입 가드 그리고 타입 별칭과 잘 결합 된다. 
>
> 이런 기능을 함께 사용하여 문자열로 enum 과 비슷한 형태를 갖출 수 있다. 
>
> ```ts
> // @errors: 2345
> type Easing = "ease-in" | "ease-out" | "ease-in-out";
> 
> class UIElement {
>   animate(dx: number, dy: number, easing: Easing) {
>     if (easing === "ease-in") {
>       // ...
>     } else if (easing === "ease-out") {
>     } else if (easing === "ease-in-out") {
>     } else {
>       // 하지만 누군가가 타입을 무시하게 된다면
>       // 이곳에 도달하게 될 수 있습니다.
>     }
>   }
> }
> 
> let button = new UIElement();
> button.animate(0, 0, "ease-in");
> // 오류
> // button.animate(0, 0, "uneasy");
> ```
>
> 문자열 리터럴 타입은 오버로드를 구별하는 것과 동일한 방법으로 사용될 수도 있다. 
>
> ```ts
> function createElement(tagName: "img"): HTMLImageElement;
> function createElement(tagName: "input"): HTMLInputElement;
> // ... 추가적인 중복 정의들 ...
> function createElement(tagName: string): Element {
>   // ... 여기에 로직 추가 ...
> }
> ```

## 숫자형 리터럴 타입 (Numeric Literal Types)

> TypeScript 에는 위의 문자열 리터럴 과 같은 역할을 하는 숫자형 리터럴 타입도 있다. 
>
> ```ts
> function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
>   return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
> }
> 
> const result = rollDice();
> ```
>
> 이는 주로 설정값을 설명할 때 사용된다:
>
> ```ts
> /* loc/lat 좌표에 지도를 생성 */
> declare function setupMap(config: MapConfig): void;
> // ---생략---
> interface MapConfig {
>   lng: number;
>   lat: number;
>   tileSize: 8 | 16 | 32;
> }
> 
> setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
> ```





# 유니언 타입 (Union Types)

> 가끔 , number 나 string 을 매개변수로  기대하는 라이브러리를 사용할 때가 있다. 
>
> ```ts
> function padLeft(value: string, padding: any) {
>   if (typeof padding === "number") {
>     return Array(padding + 1).join(" ") + value;
>   }
>   if (typeof padding === "string") {
>     return padding + value;
>   }
>   throw new Error(`Expected string or number, got '${padding}'.`);
> }
> 
> padLeft("Hello world", 4); // "Hello world"를 반환
> padLeft("Hello world", '4'); // "4Hello world"를 반환
> ```
>
> 위 와 같이  `padding` parameter에 string 타입과 number 타입의 값이 들어올 때 각각 다른 동작을 하도록 코드를 짤 경우
>
> any type 을 사용할 경우 설계한 string type number type 이외의 타입이 들어갈 수도 있다.
>
> ```ts
> function padLeft(value: string, padding: string|number) {
>   if (typeof padding === "number") {
>     return Array(padding + 1).join(" ") + value;
>   }
>   if (typeof padding === "string") {
>     return padding + value;
>   }
>   throw new Error(`Expected string or number, got '${padding}'.`);
> }
> 
> padLeft("Hello world", 4); // "Hello world"를 반환
> padLeft("Hello world", '4'); // "4Hello world"를 반환
> ```
>
> 이 경우 위와 같이 `|` 를 사용하여 union type 을 지정할 수 있다. 

## Unions with Common Fields

> ```ts
> interface Car {
>     name: "car";
>     color: string;
>     start(): void;
> }
> 
> interface Mobile {
>     name: "mobile";
>     color: string;
>     call(): void;
> }
> 
> function getGift(gift: Car | Mobile) {
>     console.log(gift.color);
>     // gift.start();
>     // Car 타입인 start() 메서드를 보유하고 있지만
>     // Mobile 타입인 경우 보유하고 있지 않다. 따라서
>     if(gift.name === "car"){
>         gift.start();
>     } else {
>         gift.call();
>     }
> }
> ```
>
> 위와 같이 name 이라는 공통된  필드는 아무런 무리 없이 접근이 가능하지만 `gift.start()` 와 같은 경우는 `Mobile` 인터페이스에 존재하지 않아 오류가 날 수 있으므로 `if` 문이나 `switch` 문을 통해 공통 필드인 `name` 으로 구분하여 조건을 걸어 줄 수 있다.







# 교차 타입 (Intersection Types)

> ```ts
> interface Car {
>     name: string;
>     start(): void;
> }
> 
> interface Toy {
>     name: string;
>     color: string;
>     price: number;
> }
> 
> const toyCar: Toy & Car = {
>     name: "타요",
>     start(){},
>     color: "blue",
>     price: 1000
> }
> ```
>
> 위와 같이 교차 타입을 사용할 때는 `&` 를 통해 묶어주며 교차 타입을 사용할 경우에는 구성 타입에 있는 모든 요소를 사용하여야 한다. 
>
> 교차는 믹스인 패턴을 실행하기 위해 사용된다.