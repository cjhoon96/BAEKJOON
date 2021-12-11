var test = {
		name: "Hi",
		age: 12,
		weight: 100,
		height: 95
};

Object.keys(test).forEach(function(skey){
	console.log(test[skey]);
});

test.print = function(){
	for(var i in this){
		if (i !="print"){
			console.log(this[i]);
		}
	}
};

test.print();