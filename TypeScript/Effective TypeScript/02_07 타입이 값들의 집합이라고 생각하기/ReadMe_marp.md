---
marp: true
theme: gaia
paginate: true
class: invert

---
<style>
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 30px;
  }  
  h3 {
    font-size: 28px;
    padding-bottom: 10px;
  }
  section {
    font-size: 20px;
  }  
</style>

# 타입이 값들의 집합이라고 생각하기

---


## Type = 값들의 집합

<br/>

* ### never = ∅

  never 로 선언된 변수에는 어떤 값도 할당할 수 없다. 

  ```ts
  const x: never = 12;
  // 어떤 값을 넣어도 never 에 할당할 수 없다는 에러가 발생
  ```
<br/>

* ### Unit Type

  한가지 값만 포함하는 리터럴 타입
  ```ts
  type a = 'a';
  type b = 'b';
  type Twelve = 12;
  let Num: Twelve = 13;
  // Type '13' is not assignable to type '12'.
  ```

---


## Type = 값들의 집합

<br/>

* ### Union type


  타입들의 합집합 
  ```ts
  type ab = 'a' | 'b';
  type ab12 = 'a' | 'b' | 12;
  const C: ab = 'c';
  //Type '"c"' is not assignable to type 'ab'.
  ```
  `C` 는 "c" 단일 값으로 구성된 unit 타입 
  ab 의 부분집합이 아니므로 오류 

<br/>

* ### 개념 확장
  
  **Type = 할당 가능한 값들의 집합** 
  
  **Type Check = 하나의 집합이 다른 집합의 부분 집합인지 검사**
  
  

---

<style>
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 30px;
  }  
  section {
    font-size: 20px;
  }  
  code {
    align: "right"
  }
</style>

## Type 의 관점으로 본 interface

* ### 객체 Union

  ```ts
  interface Person {
    firstName: string;
    lastName: string;
  }
  interface Lifespan {
    birth: Date;
    death?: Date;
  }
  type PersonSpan2 = Person | Lifespan

  let jihoon2: PersonSpan2 = {
    firstName: 'Jihoon',
    death: new Date()
  }//오류

  let jihoon2_2: PersonSpan2 = {
    firstName: 'Jihoon',
    lastName: "Chae",
    death: new Date()
  }
  ``` 
  keyof(a&b) = keyof(a) | keyof(b)
  
  keyof(a|b) = keyof(a) & keyof(b)

  ```ts
  interface Person {
    name: string;
  }
  let jihoon: Person = {
    name: 'Jihoon'
  }
  ```
  <br/>
  

---

<style>
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 30px;
  }  
  section {
    font-size: 20px;
  }  
</style>

## Type Checker
<br/>

* ### Union type
  <br/>
  

---













'string 으로 이루어진 name 이라는 속성을 가지고 있는 객체'는 Person 타입이라고 할 수 있다.





`&`는 두 타입의 교집합을 계산한다. 

위의 경우 interface `Person` 과 `Lifespan` 은 교집합이 없으므로 `PersonSpan1` 은 `never` 타입으로 착각하기 쉽다.

하지만 `&` 연산은 속성이 아닌 **집합에 적용**된다.

즉  

```ts
interface Person {
firstName: string;
lastName: string;
}
interface Lifespan {
birth: Date;
death?: Date;
}

type PersonSpan2 = Person | Lifespan


let jihoon2: PersonSpan2 = {
firstName: 'Jihoon',
death: new Date()
}//오류
let jihoon2_2: PersonSpan2 = {
firstName: 'Jihoon',
lastName: "Chae",
death: new Date()
}

```



```ts
type key1_1 = keyof(PersonSpan1);
type key1 = keyof(Person&Lifespan);

type key2_1 = keyof(PersonSpan2);
type key2 = keyof(Person|Lifespan)
```



### extends 키워드의 이해

PersonSpan 을 선언하는 조금더 일반적인 방법은 extends 키워드를 사용하는 것이다. 

```ts
interface Perons {
 name: string;
}
interface PersonSpan extends Person {
 birth: Date;
 death?: Date;
}
```

타입의 집합이라는 관점에서 `extends` 의 의미는  '~의 부분집합' 이라는 의미로 받아들일 수 있다.

* PersonSpan 타입의 모든 값은 문자열 name 속성을 가져야한다.
* 또한 birth 속성을 가져야 제대로 된 부분 집합이다.

```ts
interface Vector1D {x: number;}
interface Vector2D extends Vector1D {y: number;}
interface Vector3D extends Vector2D {z: number;}
```

이를 벤다이어그램으로 그리면 훨씬 직관적으로 이해 가능

```ts
interface Vector1D {x: number;}
interface Vector2D {x: number; y: number;}
interface Vector3D {x: number; y: number; z: number;}
```



 





































