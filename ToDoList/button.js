let button = document.getElementById('button');
let input = document.getElementById('input');
let list = document.getElementById('list');
let schedules = [];
let unassigned = [];



input.addEventListener('click', function(){
	let target = this.value
	let targetStyle = this.style
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
		let data = target.split(" ");
		if (Number.isinteger(data[0]) && Number.isinteger(data[1])){
			let H = data[0];
			let M = data[1];
			let action = data.slice(2).join(' ');
			let schedule = [H,M,action];
			schedules.push(schedule);
			schedules.sort();
		} else {
			unassigned.push(target);
		}

		list.appendChild(temp);
		input.value = '';
	}
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