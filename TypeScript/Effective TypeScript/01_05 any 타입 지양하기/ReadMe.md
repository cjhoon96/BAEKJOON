# any Type 지양하기

ts 의 타입 시스템은 점진적 : 코드에 타입을 조금씩 추가할 수 있다. 

ts 의 타입 시스템은 선택적 : 언제든지 타입 체커를 해제할 수 있다. 

이 기능 들의 핵심은 `any` 타입

## 타입 안정성이 없다. 

```ts
let age: number;

age = '12' as any
```

`age` 를 number 타입으로 선언하였지만 `as any` 를 사용하여 string 을 할당할 수 있게 됐다. 

타입 체커는 선언문에 따라 number 타입으로 판단할 것이다.



## any 는 함수 시그니쳐를 무시

함수를 작성할 때는 시그니처를 명시해야한다. 

호출하는 쪽은 약속된 타입의 입력을 제공하고 함수는 약속된 타입의 출력을 반환한다. 

```ts
function calculateAge(birthDate: Date): number {

}

let birthDate: any = '1990-01-19';
calculateAge(birthDate); 
```

birthDate 매개변수는 string 이 아닌 Date 타입이어야 한다.

any 타입을 사용하면 calculateAge 의 시그니처를 무시하게 된다. 

js 는 종종 암시적으로 타입이 변환 되기 때문에 이런 경우 특히 문제가 발생 



## any 타입에는 언어 서비스가 적용되지 않는다. 

어떤 symbol 에 타입이 있다면 ts 언어 서비스는 자동완성 기능과 적절한 도움말을 제공한다.

이름 변경 기능은 또 다른 언어 서비스이다.  타입 심벌의 이름이 변경될 시 

ts 의 모토는 '확장 가능한 js' 이다. 

확장의 중요한 부분은 언어 서비스 이다. 

이를 통해 생산성이 향상된다. 



## any 타입은 코드 리팩터링 때 버그를 감춘다. 

```ts
interface ComponentProps {
  onSelectItem: (item: any) => void;
}
```

 선택하려는 아이템의 타입이 무엇인지 알기 어려워 any 타입을 사용한 경우

```ts
interface ComponentProps {
  onSelectItem: (item: number) => void;
}

function renderSelector(props: ComponentProps) {

}

let selectedId: number = 0;

function handleSelectItem(item: any) {
  selectedId = item.id;
}

renderSelector({onSelectItem: handleSelectItem});
```

item 은 number 였으나 handleSelector `.id` 를 통해 접근하였다. 

handleSelectItem 의 parameter 를 any 가 아닌 구체적인 type 으로 명시해주는 경우 타입체커가 오류를 잡아주었을 것이다. 

위 경우 타입체커는 통과 / 런타임 오류가 난다. 



## any는 타입 설계를 감춰버린다. 

설계가 명확히 보이도록 타입을 일일이 명시하는 것이 좋다. 

## any는 타입시스템의 신뢰도를 떨어뜨린다. 
