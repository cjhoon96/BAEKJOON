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
	
	},
	mean : function(){

	},
	

}


let d1 = new Date('2021-9-28');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());				//0부터 카운트 되어 8이 출력