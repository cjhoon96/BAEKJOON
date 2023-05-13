# TypeScript Utility Types

> TypeScript는 공통 타입 변환을 용이하게 하기 위해 몇 가지 유틸리티 타입을 제공한다. 
>
> 이런 유틸리티들은 전역으로 사용 가능하다.
>
> - ##### **`Partial<T>`** 
> - ##### `Required<T>`
> - ##### **`Readonly<T>`**
> - ##### **`Record<K,T>`**
> - ##### **`Pick<T,K>`**
> - ##### **`Omit<T,K>`**
> - ##### **`Exclude<T,U>`**
> - ##### **`Extract<T,U>`**
> - ##### **`NonNullable<T>`**
> - ##### **`Parameters<T>`**
> - ##### **`ConstructorParameters<T>`**
> - ##### **`ReturnType<T>`**
> - ##### **`InstanceType<T>`**
> - ##### **`Required<T>`**
> - ##### **`ThisParameterType`**
> - ##### `OmitThisParameter`
> - ##### `ThisType<T>`

## `Partial<T>`

> `T`의 모든 프로퍼티를 선택적으로 만드는 타입을 구성한다. 
>
> 이 유틸리티는 주어진 타입의 모든 하위 타입 집합을 나타내는 타입을 반환한다.
>
> ```ts
> interface User {
>     id: number;
>     name: string;
>     age: number;
>     gender: "m" | "f";
> }
> 
> //Error
> let admin : User = {
>     id: 1, 
>     name: "Bob",
> }
> ```
>
> 위와 같이 `User` 인터페이스의 일부 속성으로 이루어진 `admin`  을 생성하고 싶은 경우 위 와 같이 작성하면 `age`, `gender` 프로퍼티가 누락되었다는 오류가 뜬다.
>
> 이경우 `age` 와 `gender` 프로퍼티를 `optional` 로 설정하여 `User` 인터페이스를 정의할 수도 있지만
>
>  ```ts 
>  //interface User {
>  //    id?: number;
>  //    name?: string;
>  //    age?: number;
>  //    gender?: "m" | "f";
>  //}
>  
>  interface User {
>      id: number;
>      name: string;
>      age: number;
>      gender: "m" | "f";
>  }
>  
>  let admin : Partial<User> = {
>      id: 1, 
>      name: "Bob",
>  }
>  ```
>
> `Partial<User>` 를 사용하여 `User` 인터페이스에  정의된 일부 프로퍼티만을 사용할 수 있다. 

## `Required<T>`

> 반대로 `Required<T>` 를 사용하면
>
> ```ts
> interface User {
>   id: number;
>   name: string;
>   age?: number;
> }
> 
> // Error age 가 누락
> let admin : Required<User> = {
>   id: 1, 
>   name: "Bob",
> }
> ```
>
> 모든 property 를 필수 property 로 바꿔준다. 

## `Readonly<T>`

> 반면 `Readonly<T>` 를 사용하면 ReadOlny property 로 바꿔준다. 
>
> ```ts
> interface User {
>   id: number;
>   name: string;
>   age?: number;
> }
> 
> 
> let admin1 : User = {
>   id: 1, 
>   name: "Bob",
> }
> 
> let admin2 : Readonly<User> = {
>   id: 1, 
>   name: "Bob",
> }
> 
> admin1.id = 4
> admin2.id = 4 // Error
> ```

## `Record<K,T>`

> Type `T` 의 프로퍼티의 집합 `K` 로 타입을 구성한다. 
>
> 이 유틸리티는 타입의 프로퍼티들을 다른 타입에 매핑시키는데 사용될 수 있다. 
>
> ```ts
> interface Score {
>     "1" : "A" | "B" | "C" | "D" ;
>     "2" : "A" | "B" | "C" | "D" ;
>     "3" : "A" | "B" | "C" | "D" ;
>     "4" : "A" | "B" | "C" | "D" ;
> }
> 
> const score: Score = {
>     1: "A",
>     2: "C",
>     3: "B",
>     4: "D"
> }
> ```
>
> 위와 같은 코드를 `Record<K, T>` 를 사용하여
>
> ```ts
> type Key = '1' | '2' | '3' | '4';
> type score_t = "A" | "B" | "C" | "D" ;
> const score : Record< Key, score_t > = {
>     1: "A",
>     2: "C",
>     3: "B",
>     4: "D"
> }
> ```
>
> 위와 같이 간결하게 작성할 수 있다. 
>
> 예제:
>
> ```ts
> interface PageInfo {
>     title: string;
> }
> 
> type Page = 'home' | 'about' | 'contact';
> 
> const x: Record<Page, PageInfo> = {
>     about: { title: 'about' },
>     contact: { title: 'contact' },
>     home: { title: 'home' },
> };
> ```
>
> `User` interface 로 만들어진 `user` 객체를 받아 각 property 가 조건에 맞는지 여부를 return 하는 다음 함수가 있다.  
>
> ```ts
> interface User {
>     id: number;
>     name: string;
>     age: number;
> }
> 
> function isValid(user:User){
>     const result = {
>         id: user.id > 0,
>         name: user.name != "",
>         age: user.age > 0
>     };
>     return result
> }
> ```
>
> 해당 코드를 `Record<K,T>`를 사용하여 다음과 같이 정의할 수 있다. 
>
> ```ts
> interface User3 {
>     id: number;
>     name: string;
>     age: number;
> }
> 
> function isValid(user:User3){
>     const result: Record<keyof User3, boolean> = {
>         id: user.id > 0,
>         name: user.name != "",
>         age: user.age > 0
>     };
>     return result
> }
> ```
>
> 
>
> 

## `Pick<T,K>`

> `T`에서 프로퍼티 `K` 의 집합을 선택해 타입을 구성한다. 
>
> ```ts
> interface User {
>     id: number;
>     name: string;
>     age: number;
>     gender: "M" | "W";
> }
> 
> const admin: Pick<User, "id" | "name"> = {
>     id: 0,
>     name: "Bob"
> };
> ```
>
> 위와 같이 작성하면 interface `User` 에서 `id` 와 `name` property 만을 가져와 사용할 수 있다. 

## `Omit<T,K>` 

> 반대로 Omit 을 사용하면 `T` 에서 모든 프로퍼티를 선택한 다음 `K` 를 제거한 타입을 구성한다. 
>
> ```ts
> interface User {
>     id: number;
>     name: string;
>     age: number;
>     gender: "M" | "W";
> }
> 
> const admin: Omit<User, "age" | "gender"> = {
>     id: 0,
>     name: "Bob"
> };
> ```
>
> 

## `Exclude<T,U>`

> `T`에서 `U`에 할당할 수 있는 모든 속성을 제외한 타입을 구성한다.
>
> ```ts
> type T1 = string | number | boolean;
> type T2 = Exclude<T1, number>;
> ```
>
> 위의 경우 `T2` 는 `string | boolean` 과 같은 상태가 된다. 

## `NonNullable<T>`

> `T`에서 `null` 과 `undefined`를 제외한 타입을 구성한다.
>
> ```ts
> type T1 = string | null | undefined | void;
> type T2 = NonNullable<T1>;
> ```
>
> 위와 같은 경우 `T2` 는  `string | void` 와 같은 상태가 된다. 

## [기타 Utility Types](https://typescript-kr.github.io/pages/utility-types.html#recordkt)

> 위 Utility Type 들은 자주 사용되는 것들을 정리한 것이다. 
>
> 추가 Utility Type 들은 해당 링크에 정리되어있다. 

