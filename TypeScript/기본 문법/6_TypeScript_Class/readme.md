# TypeScript Class

> ```js
> class Car {
>  constructor(color) {
>      this.color = color;
>  }
>  start() {
>      console.log("start");
>  }
> }
> 
> const bmw = new Car("red");
> ```
>
> js 에서 위와 같이 Car class 를 생성하면 아무런 문제가 없지만 
>
> ts 에서는 ''`color` property 가 Car 에 존재 하지 않는다'' 라는 오류가 뜬다. 
>
> ```ts
> class Car {
>  color: string;
>  constructor(color: string) {
>      this.color = color;
>  }
>  start() {
>      console.log("start");
>  }
> }
> 
> const bmw = new Car("red");
> ```
>
> ts 에서는 위 처럼 멤버 변수를 미리 선언해 주어야 한다. 
>
> 접근 제한자나 readonly 속성을 사용하는 경우 멤버 변수를 선언해주지 않아도 상관 없다. 
>
> ```ts
> class Car {
>     constructor(public color: string) {
>         this.color = color;
>     }
>     start() {
>         console.log("start");
>     }
> }
> 
> const bmw = new Car("red");
> ```
>
> ```ts
> class Car {
>     constructor(readonly color: string) {
>         this.color = color;
>     }
>     start() {
>         console.log("start");
>     }
> }
> 
> const bmw = new Car("red");
> ```

## 접근 제한자

> * **`public`**
>
>   ```ts
>   class Car {
>    	name: string = "car";
>   	constructor(public color: string) {
>   	 	this.color = color;
>    	}
>   	start() {
>            console.log("start");
>       }
>   }
>   
>   class Bmw extends Car {
>       constructor(color: string) {
>           super(color);
>       }
>       showName() {
>           console.log(super.name)
>       }
>   }
>   
>   const bmw = new Car("red");
>   ```
>
>   위와 같이 아무런 접근 제한자가 설정 되지 않은 name 이나 public 으로 선언된 color 의 경우는 public 으로 설정 되며 자식 class 에서 접근이 가능하다. 
>
> * **`private`**
>
>   ```ts
>   class Car {
>    	#name: string = "car";
>   	constructor(public color: string) {
>   	 	this.color = color;
>    	}
>   	start() {
>   		console.log("start");
>           console.log(this.#name);
>       }
>   }
>   
>   class Bmw extends Car {
>       constructor(color: string) {
>           super(color);
>       }
>       showName() {
>           console.log(super.#name) // 오류 발생 
>       }
>   }
>   
>   const bmw = new Car("red");
>   ```
>
>   ```ts
>   class Car {
>    	private name: string = "car";
>   	constructor(public color: string) {
>   	 	this.color = color;
>    	}
>   	start() {
>   		console.log("start");
>           console.log(this.name);
>       }
>   }
>   
>   class Bmw extends Car {
>       constructor(color: string) {
>           super(color);
>       }
>       showName() {
>           console.log(super.name) // 오류 발생 
>       }
>   }
>   
>   const bmw = new Car("red");
>   ```
>
>   위와 같이 변수앞에 # 을 붙이는 경우나 private 으로 선언하는 경우 모드 private 이 되며 해당 경우 클래스 외부와 자식 클래스에서 접근이 불가능하다.  
>
>   다음 예제를 살펴보자
>
>   ```ts
>   class Car {
>       private name: string;
>       constructor( theName: string ) {
>           this.name = theName;
>       }
>       start() {
>          console.log("start");
>          console.log(this.name);
>      }
>   }
>   
>   class Bmw extends Car {
>       constructor(theName: string) {
>   		super(theName); // check_1
>       }
>       showName() {
>         	console.log(super.name) // 오류 발생 
>       }
>   }
>   
>   let car = new Car("SUV");
>   let bmw = new Bmw("BMW");
>   
>   car = bmw // check_2
>   
>   car.start();
>   ```
>
>   위의 경우 name 은 private 으로 선언 되었기 때문에 상속받은 class 인 Bmw 의 showName 메서드에서 super.name 을 사용하려 할경우 오류가 발생하는 것을 알 수 있다. 
>
>   하지만 check_1 에서 부모클래스의 생성자함수를 호출하여 name 의 값을 설정해주어
>
>   check_2 에서 Car class 로 생성된 car 에 bmw 를 줄 경우 start() 메서드가 사용 가능해 진다. 
>
> * **`protected`**
>
>   ```ts
>   class Car {
>    	protected name: string = "car";
>   	constructor(public color: string) {
>   	 	this.color = color;
>    	}
>   	start() {
>   		console.log("start");
>           console.log(this.name);
>       }
>   }
>   
>   class Bmw extends Car {
>       constructor(color: string) {
>           super(color);
>       }
>       showName() {
>           console.log(super.name) // 오류 X 
>       }
>   }
>   
>   const bmw = new Car("red");
>   
>   console.log(bmw.name); // 오류 발생
>   ```
>
>   위와 같이 protected 는 본인 class 와 상속받은 자식 class 내부에서 접근이 가능하지만  class 외부에서 접근이 불가능하다.  
>
>   constructor 생성자 또한 protected 로 표시될 수 있다. 이 경우 class 를 포함하는 class 외부에서 인스턴스화 할 수 없지만 확장할 수 있음을 의미한다. 
>
>   ```ts
>   class Person {
>       protected name: string;
>       protected constructor(theName: string) { this.name = theName; }
>   }
>   
>   // Employee는 Person을 확장할 수 있습니다.
>   class Employee extends Person {
>       private department: string;
>   
>       constructor(name: string, department: string) {
>           super(name);
>           this.department = department;
>       }
>   
>       public getElevatorPitch() {
>           return `Hello, my name is ${this.name} and I work in ${this.department}.`;
>       }
>   }
>   
>   let howard = new Employee("Howard", "Sales");
>   let john = new Person("John"); // 오류: 'Person'의 생성자는 protected
>   ```

## Readonly modifier

> `readonly` 를 사용하면 프로퍼티를 읽기전용으로 만들 수 있다. 
>
> readonly property 들은 선언 또는 constructor 에서 초기화 해야한다.  
>
> ```ts
> class Octopus {
>     readonly name: string;
>     readonly numberOfLegs: number = 8; 	// 선언을 통한 초기화
>     constructor (theName: string) {
>         this.name = theName;			// contructor를 통한 초기화
>     }
> }
> let dad = new Octopus("Man with the 8 strong legs");
> dad.name = "Man with the 3-piece suit"; // 오류! name은 읽기전용 입니다.
> ```

## 접근자 (Accessors)

> TypeScript 는 객체의 맴버에 대한 접근을 가로채는 방식으로 ***<u>getters / setters</u>*** 를 지원한다. 
>
> 이를 통해 각 객체의 맴버에 접근하는 방법을 세밀하게 제어할 수 있다.
>
> ```ts
> class Employee {
>     fullName: string;
> }
> 
> let employee = new Employee();
> employee.fullName = "Bob Smith";
> if (employee.fullName) {
>     console.log(employee.fullName);
> }
> ```
>
> 일반적으로 fullName 을 직접 설정할 수 있도록 허용하는 것은 매우 편리하지만 fullName 이 설정될 때 몇가지 제약 조건이 적용되는 것을 원할 수 있다. 
>
> ```ts
> const fullNameMaxLength = 10;
> 
> class Employee {
>     private _fullName: string;    // _fullName 이 초기화 되지 않았다는 오류가 발생한다. 
> 
>     get fullName(): string {
>         return this._fullName;
>     }
> 
>     set fullName(newName: string) {
>         if (newName && newName.length > fullNameMaxLength) {
>             throw new Error("fullName has a max length of " + fullNameMaxLength);
>         }
> 
>         this._fullName = newName;
>     }
> }
> 
> let employee = new Employee();
> employee.fullName = "Bob Smith";
> if (employee.fullName) {
>     console.log(employee.fullName);
> }
> ```
>
> > ## Note
> >
> > 주석 처리된 줄에 _fullName 이 초기화 되지 않았다는 오류가 발생하며 컴프알 되지 않는다. 
> >
> > 왜 이러는지는 추가적으로 공부해볼 필요가 있을것 같다. 
>
> ```ts
> const fullNameMaxLength = 10;
> 
> class Employee2 {
>     private _fullName: string | null = null; // 선언문에 값을 줘서 해결
> 
>     get fullName(): string | null{
>         return this._fullName;
>     }
> 
>     set fullName(newName: string | null) {
>         if (newName && newName.length > fullNameMaxLength) {
>             throw new Error("fullName has a max length of " + fullNameMaxLength);
>         }
> 
>         this._fullName = newName;
>     }
> }
> 
> let employee = new Employee2();
> employee.fullName = "Bob Smith";
> if (employee.fullName) {
>     console.log(employee.fullName);
> }
> ```

# 전역 프로퍼티 (Static Properties)

> 클래스를 통해 인스턴스를 생성할 필요 없이, 클래스의 속성 또는 메서드를 사용하고자 한다면 `static` 키워드를 사용해 속성, 메서드를 정의한다.
>
> ```ts
> class Mathmatics {
>   // 스태틱 속성
>   static PI: number = Math.PI;
> 
>   // 스태틱 메서드
>   // circumference = 둘레(원주)
>   static calcCircumference(radius: number): number {
>     return this.PI * radius * 2;
>   }
> 
>   static calcCircleWidth(radius: number): number {
>     return this.PI * Math.pow(radius, 2);
>   }
>   getPi() {
>     return Mathmatics.PI;
>   }
> }
> 
> // radius = 반지름
> let radius = 4;
> 
> console.log("PI(원주율) = ", Mathmatics.PI);
> console.log(`반지름이 ${radius}인 원의 넓이: πr² = `, Mathmatics.calcCircleWidth(radius));
> console.log(`반지름이 ${radius}인 원의 둘레: 2πr = `, Mathmatics.calcCircumference(radius));
> ```
>
> this 가 아닌 class 명을 통해 접근한다.  같은 static 으로 선언된 경우 this 를 통해 접근한다. 

# 추상 클래스 (Abstract Classes)

> 추상 클래스는 다른 클래스들이 파생될 수 있는 기초 클래스이다. 
>
> 추상 클래스는 직접 인스턴스화할 수 없다. 
>
> 추상 클래스는 인터페이스와 달리 멤버에 대한 구현 세부 정보를 포함할 수 있다. 
>
> `abstract` 키워드는 추상 클래스뿐만 아니라 추상 클래스 내에서 추상 메서드를 정의하는데 사용된다.
>
> 추상 클래스 내에서 추상으로 표시된 메서드는 구현을 포함하지 않으며 반드시 파생된 클래스에서 구현되어야 한다. 
>
> 추상 메서드는 인터페이스 메서드와 비슷한 문법을 공유한다. 
>
> 둘 다 메서드 본문을 포함하지 않고 메서드를 정의한다.
>
> 그러나 추상 메서드는 반드시 `abstract` 키워드를 포함해야 하며, 선택적으로 접근 지정자를 포함할 수 있다.
>
> 추상 클래스를 상속받은 수많은 class 들이 같은 이름의 추상 메서드를 가지게 되지만 그 기능은 클래스 마다 다를 수 있다. 
>
> ```ts
> abstract class Car {
>     color: string;
>     constructor(colo: string) {
>         this.color = color;
>     }
>     start() {
>         console.log("start");
>     }
>     abstract doSomething():void;
> }
> 
> class Bmw extends Car {
>     constructor(color: string) {
>         super(color);
>     }
>     doSomething() {
>         alert(3);
>     }
> }
> 
> abstract class Department {
> 
>     constructor(public name: string) {
>     }
> 
>     printName(): void {
>         console.log("Department name: " + this.name);
>     }
> 
>     abstract printMeeting(): void; // 반드시 파생된 클래스에서 구현되어야 합니다.
> }
> 
> class AccountingDepartment extends Department {
> 
>     constructor() {
>         super("Accounting and Auditing"); // 파생된 클래스의 생성자는 반드시 super()를 호출해야 합니다.
>     }
> 
>     printMeeting(): void {
>         console.log("The Accounting Department meets each Monday at 10am.");
>     }
> 
>     generateReports(): void {
>         console.log("Generating accounting reports...");
>     }
> }
> 
> let department: Department; // 추상 타입의 레퍼런스를 생성
> department = new Department(); // 오류: 추상 클래스는 인스턴스화 할 수 없다.
> department = new AccountingDepartment(); // 추상이 아닌 하위 클래스를 생성하고 할당한다.
> department.printName();
> department.printMeeting();
> department.generateReports(); // 오류: 선언된 추상 타입에 메서드가 존재하지 않는다.
> ```