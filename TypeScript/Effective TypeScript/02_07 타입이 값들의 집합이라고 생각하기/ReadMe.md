# 타입이 값들의 집합이라고 생각하기

런타임 시 변수는 각자의 고유한 값을 가진다.

그러나 TS 가 오류를 체크하는 순간에는 타입을 가지고 있다.

## 타입 = 할당 가능한 값들의 집합

> 가장 작은 집합은 아무 값도 포함하지 않는 공집합인 `never` 타입이다.
>
> `never` 타입으로 선언된 변수의 범위는 공집합이기 때문에 아무런 값도 할당할 수 없다.
>
> (never 는 도달하면 안되는 곳에 할당한다. ex. error 객체)
>
>  ```ts
>  const x: never = 12;
>  // 어떤 값을 넣어도 never 에 할당할 수 없다는 에러가 발생
>  ```
>
> 그 다음으로 작은 집합은 한가지 값만 포함하는 타입이다.
>
> 이들은 타입스크립트에서 unit 타입이라고도 불리는 리터럴 타입이다.
>
> ```ts
> type a = 'a';
> type b = 'b';
> type Twelve = 12;
> let Num: Twelve = 13;
> // Type '13' is not assignable to type '12'.
> ```
>
> never = 0 < literal type

> 타입들의 합집합 Union type
>
> ```ts
> type ab = 'a' | 'b';
> type ab12 = 'a' | 'b' | 12;
> const C: ab = 'c';
> //Type '"c"' is not assignable to type 'ab'.
> ```
>
> `C` 는 "c" 단일 값으로 구성된 unit 타입이다. ab 의 부분집합이 아니므로 오류이다. 
>
> 타입체커의 역할 = 하나의 집합이 다른 집합의 부분 집합인지 검사하는 것

> Type 의 관점으로 본 interface
>
> ```ts
> interface Person {
> name: string;
> }
> let jihoon: Person = {
> name: 'Jihoon'
> }
> ```
>
> 'string 으로 이루어진 name 이라는 속성을 가지고 있는 객체'는 Person 타입이라고 할 수 있다.
>
> 
>
> ```ts
> interface Person {
> firstName: string;
> lastName: string;
> }
> interface Lifespan {
> birth: Date;
> death?: Date;
> }
> 
> type PersonSpan1 = Person & Lifespan
> 
> let jihoon1: PersonSpan1 = {
> firstName: 'Jihoon',
> lastName: "Chae"
> death: new Date()
> }// 오류
> 
> let jihoon1_1: PersonSpan1 = {
> firstName: "Jihoon",
> lastName: "Chae",
> birth: new Date(),
> death: new Date(),
> }
> // 에러발생 birth 가 없다. 
> ```
>
> `&`는 두 타입의 교집합을 계산한다. 
>
> 위의 경우 interface `Person` 과 `Lifespan` 은 교집합이 없으므로 `PersonSpan1` 은 `never` 타입으로 착각하기 쉽다.
>
> 하지만 `&` 연산은 속성이 아닌 **집합에 적용**된다.
>
> 즉  
>
> ```ts
> interface Person {
> firstName: string;
> lastName: string;
> }
> interface Lifespan {
> birth: Date;
> death?: Date;
> }
> 
> type PersonSpan2 = Person | Lifespan
> 
> 
> let jihoon2: PersonSpan2 = {
> firstName: 'Jihoon',
> death: new Date()
> }//오류
> let jihoon2_2: PersonSpan2 = {
> firstName: 'Jihoon',
> lastName: "Chae",
> death: new Date()
> }
> 
> ```
>
> 
>
> ```ts
> type key1_1 = keyof(PersonSpan1);
> type key1 = keyof(Person&Lifespan);
> 
> type key2_1 = keyof(PersonSpan2);
> type key2 = keyof(Person|Lifespan)
> ```
>
> 
>
> ### extends 키워드의 이해
>
> PersonSpan 을 선언하는 조금더 일반적인 방법은 extends 키워드를 사용하는 것이다. 
>
> ```ts
> interface Perons {
>  name: string;
> }
> interface PersonSpan extends Person {
>  birth: Date;
>  death?: Date;
> }
> ```
>
> 타입의 집합이라는 관점에서 `extends` 의 의미는  '~의 부분집합' 이라는 의미로 받아들일 수 있다.
>
> * PersonSpan 타입의 모든 값은 문자열 name 속성을 가져야한다.
> * 또한 birth 속성을 가져야 제대로 된 부분 집합이다.
>
> ```ts
> interface Vector1D {x: number;}
> interface Vector2D extends Vector1D {y: number;}
> interface Vector3D extends Vector2D {z: number;}
> ```
>
> 이를 벤다이어그램으로 그리면 훨씬 직관적으로 이해 가능
>
> ```ts
> interface Vector1D {x: number;}
> interface Vector2D {x: number; y: number;}
> interface Vector3D {x: number; y: number; z: number;}
> ```
>
> ```ts
> function getKey<K extends string>(val: any, key: K){
>   //....
> }
> ```
>
> 







































