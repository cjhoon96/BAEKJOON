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