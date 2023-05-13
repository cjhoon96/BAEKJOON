# Type Inference ( 타입 추론)

> 타입 추론 이란 TypeScript 가 코드를 해석해 나가는 동작을 의미한다. 

## Type 추론의 기본

> 타입 스크립트가 타입 추론을 해나가는 과정은 다음과 같다.
>
> ```ts 
> let x = 3
> console.log(typeof(x)); // number  
> // x 변수에 마우스를 올려보아도 number 타입으로 지정된 것을 확인할 수 있다. 
> ```
>
>  `x` 에 타입을 따로 지정하지 않더라도 일단 x 는 number 로 간주된다. 
>
> 이렇게 변수를 선언하거나 초기화 할 때 타입이 추론된다. 
>
> 이렇게 변수를 선언하거나 초기화 할 때 타입이 추론된다. 
>
> 이외에도 변수, 속성, 인자의 기본값, 함수의 반환값 등을 설정할 때 타입 추론이 일어난다. 

## 가장 적절한 타입

> 타입은 보통 몇개의 표현식을 바탕으로 타입을 추론한다. 
>
> 그리고 그 표현식을 이용하여 가장 근접한 타입을 추론하게 되는데 이 가장 근접한 타입을 ***<u>Best Common Type</u>*** 이라고 한다. 
>
> ```ts 
> let arr = [0, 1, null];
> ```
>
> 위 변수 `arr` 의 타입을 추론하기 위해서는 배열의 각 아이템을 살펴봐야한다. 
>
> 배열의 각 아이템의 타입은 크게 `number` 와 `null` 로 구분된다. 
>
> 이 때  ***<u>Best Common Type</u>*** 알고리즘으로 다른 타입들과 가장 잘 호환되는 타입을 선정한다. 

## 문맥상의 타이핑

> 타입 스크립트에서 타입을 추론하는 또 하나의 방식은 바로 문맥상으로 타입을 결정하는 것이다. 
>
> 이 문맥상의 타이핑은 코드의 위치 를 기준으로 이러난다. 
>
> ```ts 
> window.onmousedown = function (mouseEvent) {
>     console.log(mouseEvent.button); 	// okay
>     console.log(mouseEvent.kangaroo); 	// error
> }
> ```
>
> 위 코드를 TypeScript 검사기 관점에서 보면 `window.onmousedown` 에 할당되는 함수의 타입을 추론하기 위해 `window.onmousedown` 타입을 검사한다. 
>
> 타입 검사가 끝나고 나면 함수의 타입이 마우스 이벤트와 연관이 있다고 추론하기 때문에 `mouseEvent` 인자에 `button` 속성은 있지만 `kangaroo` 속성은 없다고 결론을 내린다. 
>
> ```ts
> window.onscroll = functino(uiEvent) {
>     console.log(uiEvent.button); // error
> }
> ```
>
> 앞의 예제와 마찬가지로 오른쪽의 함수는 `window.onscroll` 에 할당되었기 때문에 함수의 인자 `uiEvent`는 UIEvent 로 간주된다. 
>
> 따라서 `button` 속성이 없다고 추론하게 된다. 

## 타입스크립트의 타입 체킹

> 타입 체킹에 있어서 타입스크립트의 지향점은 타입 체크는 값의 형태에 기반하여 이루어져야 한다는 점이다. 이걸 Duck Typing 또는 Structural Subtyping 이라고 한다.
>
> ### TIP
>
> > Duck Typing : 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 것을 의미. 동적 타이핑의 한 종류 
> >
> > Structural Subtyping : 객체의 실제 구조나 정의에 따라 타입을 결정하는 것을 의미