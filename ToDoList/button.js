let button = document.getElementById('button');
let input = document.getElementById('input');
let table = document.getElementById('tableBody');
let schdDic = {};
let tList = [];
let unassigned = [];
let checked = [];



input.addEventListener('click', function(){
	let target = this.value
	let targetStyle = this.style
	alert(target);
	if(target === "HH MM Contents"){
		this.value = '';
		targetStyle.color="black";
	}
})

input.addEventListener('keydown', function(e){
	if(e.key === 'Enter'){
		addSchedule();
	}
})



button.addEventListener('click', addSchedule);

function addSchedule(){
	let target = input.value 
	if(target != "HH MM Contents"){
		alert(target);
		let data = target.split(" ");
		if (!isNaN(data[0]) && !isNaN(data[1])){
			let t = data[0] + ':' + data[1];
			let action = data.slice(2).join(' ');
			
			if (tList.indexOf(t) == -1){
				tList.push(t);
				schdDic[t] = action;
				tList.sort()
			}else {
				alert("해당 시간에 할당된 일정이 있습니다.")
				unassigned.push(action);
			}

		} else {
			unassigned.push(target);
		}
		input.value = "";
		renewal();
	}

}

function renewal(){
	for (let i = 0; i < tList.length; i++){
		remove(tList[i]);
	}
	for (let i = 0; i < tList.length; i++){
		let t = tList[i];
		let temp = document.createElement('tr');
		temp.className = t
		temp.innerHTML = '<td><input type="checkbox"> </td>' + '<td>' + t + '</td>'
											+ '<td>' + schdDic[t] + '</td>'
											+ '<td>' + 'Correction' + '</td>'
											+ '<td>' + 'Progress' + '</td>';
		table.appendChild(temp);
	}
}

function remove(id){
	let target = document.getElementById(id);
	table.removeChild(target);
}

// function addSchedule(){
//     let temp = document.createElement('li')
//     if(input.value != "HH MM Contents"){
//         temp.innerHTML = input.value;
//         list.appendChild(temp);
//         input.value = '';
//     }
// }


function sortScheduler(){

}