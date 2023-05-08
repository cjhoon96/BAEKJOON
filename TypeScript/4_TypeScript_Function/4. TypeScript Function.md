# TypeScript Function

> TypeScript 에서 함수를 정의할 때는 파라미터의 타입과 return 값의 타입을 정의해 줘야한다. (Return type 을 지정해 주지 않아도 오류가 발생하지 않았다.)
>
> ```ts
> // parameter 뒤에 ? 를 붙이는 경우 optional parameter 로 사용할 수 있다. optional parameter 는 뒤에 작성하여야 한다.  
> // 타입을 | 를 사용하여 줄 경우 둘 중 하나의 타입을 반환할 수 있다. 
> function hello(name: string, age?:number): string | number {
>     if (age !== undefined) {
>         return age;
>     } else {
>         return `Hello, ${name}`;
>     }
> }
> 
> console.log(hello('jihoon'))
> console.log(hello('jihoon', 28))
> ```
>
> 
>
> `...` 을 사용할 경우 전달받은 매개변수들을 묶어 배열로 만들수 있게 된다. 
>
> ```ts
> function add(...nums: number[]) {
>     return nums.reduce((result, num) => result + num, 0)
> }
> 
> add(1, 2, 3); // 6
> add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55
> ```
>
> > #### reduce method
> >
> > ```ts
> > a = arr.reduce(callback(accumulator, currenctValue, currentIndex?, array?), initialValue)
> > ```
> >
> > 의 형태로 array arr 의 각 인덱스 값을 `currentValue` 파라미터에 넣어  callback 함수의 내용을 실행하는 메서드이다. 
>
> 
>
> ### this
>
> ```ts
> interface User {
>     name: string;
> }
> 
> const Sam: User = {name: 'Sam'}
> 
> // 함수에서 this 를 사용할 경우 parameter 자리 제일 앞에 this:Type 형식으로 type 을 지정해주면 된다. 지정하지 않을시 Any type 이 된다. 
> function showName(this:User){
>     console.log(this.name)
> } 
> 
> const a = showName.bind(Sam);
> a()
> ```
>
> 
>
> ### Function Overloading
>
> ```ts
> interface User {
>     name: string;
>     age: number;
> }
> 
> 
> function join (name: string, age: number | string): User | string{
>     if (typeof age === 'number') {
>         return {
>             name,
>             age
>         }
>     } else {
>         return '나이는 숫자로 입력해주세요.';
>     }
> }
> 
> // 오류가 발생할수 있음 을 알리는 줄이 표시된다. 
> const sam: User = join("Sam", 30);
> const jane: string = join("Jane", "30");
> ```
>
> 이경우 Overloading 을 사용하여 해결할 수 있다. 
>
> ```ts
> 
> interface User {
>     name: string;
>     age: number;
> }
> 
> function join (name: string, age: string): string; 					///
> function join (name: string, age: number): User;					///
> function join (name: string, age: number | string): User | string{
>     if (typeof age === 'number') {
>         return {
>             name,
>             age
>         }
>     } else {
>         return '나이는 숫자로 입력해주세요.';
>     }
> }
> 
> // 오류가 발생할수 있음 을 알리는 줄이 표시된다. 
> const sam: User = join("Sam", 30);
> const jane: string = join("Jane", "30");
> ```
>
> 이처럼 동일한 함수지만 매개변수의 타입이나 갯수에 따라 다른 방식으로 동작해야한다면 overloading을 사용할 수 있다. 

