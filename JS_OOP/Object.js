let MyMath = {
	PI : Math.PI,
	random : function(){
		return Math.random();
	},
	floor : function(val){
		return Math.floor(val);        
	}
}

// 관련된 기능을 그룹화하여 편리하게 사용할 수 있다.



let Grade = {
	Jihoon : 80,
	Dongjoon : 90,
	Seongjae : 90,
	sum : function(){

	}
}



// 생성자 Constructure - 객체를 찍어내는 공장
let d1 = new Date('2021-9-28');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());				//0부터 카운트 되어 8이 출력


function Score(name, a, b, c){
	this.name = name;
	this.first = a;
	this.second = b;
	this.third = c;
	this.sum = function(){
		return this.first+this.second+this.third;
	}
}


// new를 통해 Chae 를 객체로 만들어준다 
let Chae = new Score('Jihoon', 10, 20, 30);

console.log(Chae.name, '\'s average score is', Chae.sum()/3);

// 장점
// 기존에는 객체를 생성할때마다 새롭게 정의를 해줘야 했으나 construct function을 실행 함으로서 빠르게 객체를 생성할 수 있으며 수정할 수 있다.

//Prototype
//javascript = prototype based language

//생성자 안에서 메소드를 만드는 단점: 데이터 소모량이 많아 생산성이 떨어짐
//prototype을 통해 생산성을 높여준다




function Score_1(name, a, b, c){
	this.name = name;
	this.first = a;
	this.second = b;
	this.third = c;
}

let Chae_1 = new Score_1('Jihoon', 10, 20, 30)

Score_1.prototype.sum = function(){
	return (this.first+this.second+this.third) + '   made by prototype';
}
Score_1.prototype.print = function(){
	return this;
}

console.log(Chae_1.sum())
console.log(Chae_1.print())




// https://caniuse.com	문법을 사용할 수 있는지 확인 해당 문법을 제공하는 웹 브라우저들을 확인할 수 있다.
// https://babeljs.io	작성한 코드를 오래전부터 지원하고 있는 모든 브라우저에서 사용할 수 있는 코드로 변환해 준다



//Class

class scoreClass{
	constructor(name, a, b, c){
    this.name = name;
    this.first = a;
    this.second = b;
    this.third = c;
	}
  sum(){
    return (this.first + this.second + this.third);
  }
}

//extends 를 통해 이미 만들어 둔 class로 부터 상속 받을 수 있다.
class extends_scoreClass extends scoreClass{
	constructor(name, a, b, c, d){
		super(name, a, b, c);				// socreClass 상속받을 공통된 생성자
		this.forth = d;						// 추가된 생성자만 정해준다.
	}
	sum(){
		return super.sum() + this.forth;	// super 뒤에 . 이오면 상속받을 함수
	}
	avg(){
		return (this.first + this.second + this.third + this.forth)/3;
	}
}

let Cjhoon = new scoreClass('Cjhoon', 10, 20, 30);
console.log(Cjhoon)
Cjhoon.sum = function(){
  return (this.first + this.second + this.third) + 'new';
}

let extends_Cjhoon = new extends_scoreClass('extends_cjhoon', 10, 20, 30, 100);
console.log(extends_Cjhoon)
console.log(extends_Cjhoon.avg())



//__proto__

let superObj = {superVal:'super'}
let subObj = {subVal:'sub'}
subObj.__proto__ = superObj;	//subObj이 superObj의 자식임을 알려줌
console.log('subObj.subVal =', subObj.subVal);
console.log('subObj.superVal =', subObj.superVal);
subObj.superVal = 'sub';
console.log('subObj.superVal =', subObj.superVal, '수정가능하지만');
console.log('superObj.superVal =', superObj.superVal, '는 수정되지 않는다.');



//Object.create()
let subObj_1 = Object.create(superObj);
subObj_1.subVal = 'sub';
console.log('subObj_1.subVal =', subObj_1.subVal);
console.log('subObj_1.superVal =', subObj_1.superVal);
subObj_1.superVal = 'sub';
console.log('subObj_1.superVal =', subObj_1.superVal, '수정가능하지만');
console.log('superObj.superVal =', superObj.superVal, '는 수정되지 않는다.');

debugger;





// 함수와 객체

var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}
function sum(){
	return this.first+this.second;
}
function sum_1(prefix){
	return prefix+(this.first+this.second);
}
function sum_2(prefix){
	return prefix+(this.first+this.second);
}

//.call
console.log('sum.call(kim)==>',sum.call(kim));
console.log('sum_1.call(kim, 20)',sum_1.call(kim, 20));
console.log('sum_1.call(kim)',sum_1.call(kim, '==>'));
console.log('sum_1.call(kim, 20)',sum_1.call('==>', kim)); // 오류 객체를 앞에 써야 한다
// 함수.call() 괄호 안에 객체를 넣으면 해당 객체에 할당되는 메소드처럼 작동한다.

//.call
let kimSum = sum_1.bind(kim, '-->');
console.log('kimSum()', kimSum());
//함수의 this까지 픽스된 새로운 함수를 만들어준다.







//prototype vs __proto__
//함수란 무엇인가?
//자바스크립트에서 함수는 객체이다. 
// 함수 Person 객체를 생성시 Person's prototype 객체도 생성된다.
// 이때 Person 객체 내에 prototype이라는 생성자가 만들어 지며 이는 Person's prototype 객체를 가르킨다.
// 따라서 Person.prototype을 통해 Person's prototype 객체를 불러 올 수 있다.

// 또한 Person's prototype 객체 안에는 constructor 생성자가 만들어 지며 이는 Person을 가르킨다.

//함수.prototype.sum = function(){}를 생성하면 Person's prototype 객체에 sum이라는 함수가 생성자로 만들어진다.

// let kim = new Person('kim', 10, 20)을 생성하면 Person의 constructor 함수를 통해 생성된 생성자 이외에 __proto__생성자가 생성된다.
//이 __proto__ 는 Person's prototype를 가르킨다. 따라서 Person.prototype과 kim.__proto__는 같은 객체 Person's prototype을 가르킨다.
//javascript는 kim의 생성자를 불러올때 kim안에 해당 생성자가 있는지 확인하고 없는 경우 kim.__proto__ 즉 Person's prototype 내에 해당 생성자가 있는지 확인후 불러오기로 약속되어있다.


//call 을 통한 객체의 계승

function Person(name,  first, second){
	this.name = name;
	this.first = first;	
	this.second = second;
}

Person.prototype.sum = function(){
	return this.first + this.second;
}

function PersonPlus(name, first, second, third){
	Person.call(this, name, first, second);
	this.third = third;
}

PersonPlus.prototype.avg = function(){
	return	(this.first + this.second + this.third)/3;
}

//console.log('kim_1.sum()', kim_1.sum());
//이상태로는 오류가 발생한다. kim_1에 sum이 없으므로 __proto__를 통해 PersonPlus's prototype을 참조한다 
//하지만 여기에도 없으므로 다시  PersonPlus's prototype의 __proto__를 참조하지만 여기에도 존재 하지 않아 오류가 난다.
//PersonPlus's prototype의 __proto__가 Person's prototype를 가르키도록 하면 해결 가능하다.
//다음을 추가해 준다.

// PersonPlus.prototype.__proto__ = Person.prototype;
//하지만 이는 표준이 아니다.
//==>
PersonPlus.prototype = Object.create(Person.prototype);
//이는 Person.prototype를 __proto__로 하는 새로운 객체를 생성하고 이를 PersonPlus.prototype으로 만들어 주는 것이다.

// 하지만 이도 약간의 문제가 있다.
console.log('kim_1.constructor', kim_1.constructor);
let kim_1 = new PersonPlus('kim', 10, 20, 30);

console.log(kim_1)
console.log('kim_1.sum()', kim_1.sum());
console.log('kim.avg()', kim_1.avg());