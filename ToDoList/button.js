let button = document.getElementById('button');
let input = document.getElementById('input');
let table = document.getElementById('tableBody');
let schdDic = {};
let tList = [];
let unassigned = [];
let checked = [];


//입력창을 클릭할 시 효과를 적용
input.addEventListener('click', function(){
	let target = this.value
	let targetStyle = this.style
	
	if(target === "HH MM Contents"){
		this.value = '';
		targetStyle.color="black";
	}
})


//입력창에서 엔터를 칠 시 효과를 적용
input.addEventListener('keydown', function(e){
	if(e.key === 'Enter'){
		addSchedule();
	}
})


// 추가 버튼을 클릭할시 addSchedule함수가 실행 되도록 적용
button.addEventListener('click', addSchedule);




// 입력된 스케줄을 정리후 업데이트 해주는 함수
// 우선 totalDel 함수를 통해 기존에 표에 입력된 값을 모두 지워준 후 (화면에 입력시 시간 순으로 sort하여 출력하기 위하여)
// 시간이 입력된 스케줄: 시간은 배열 tList에 저장 또 시간과 할일을 객체 schdDic에 저장한다. 
//  해당 시간에 이미 스케줄이 있는 경우 alert를 통해 경고한다.
// 시간이 입력되지 않은 스케줄: 할일을 배열 unassigned에 저장한다.
// 이후 update 함수를 통해 화면에 출력한다.
function addSchedule(){
	totalDel();
	let target = input.value 
	if(target != "HH MM Contents"){
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
		update();
	}

}

// update함수 표에 내용을 출력해 주는 함수
function update(){
	for (let i = 0; i < tList.length; i++){
		let t = tList[i];
		let temp = document.createElement('tr');
		temp.id = t;
		temp.innerHTML = '<td><input type="checkbox" class="checkBox"> </td>' + '<td>' + t + '</td>'
											+ '<td>' + schdDic[t] + '</td>'
											+ '<td>' + 'Correction' + '</td>'
											+ '<td>' + 'Progress' + '</td>';
		table.appendChild(temp);
	}
	for (let i = 0; i < unassigned.length; i++){
		let temp = document.createElement('tr');
		temp.id = i;
		temp.innerHTML = '<td><input type="checkbox" class="checkBox"> </td>' + '<td>None</td>'
											+ '<td>' + unassigned[i] + '</td>'
											+ '<td>' + 'Correction' + '</td>'
											+ '<td>' + 'Progress' + '</td>';
		table.appendChild(temp);
	}
}


//totalDel 함수 표에 출력된 모든 일정을 지워주는 함수 tList와 schdDic, unassigned는 그대로 두기 때문에 화면 갱신용으로만 사용
function totalDel(){
	let target = document.getElementsByClassName("checkBox");
	for (var i = 0; i < target.length; i++){
		target[i].checked = true;
	}
}


//totalReset모든 일정 데이터를 삭제 하는 함수 totalDel함수를 통해 표의 일정을 삭제후 
// 일정을 저장한 배열과 객체 tList와 schdDic, unassigned도 모두 초기화 해준다.
function totalReset(){
	totalDel();
	tList = [];
}


// check 된 일정들을 삭제하는 함수
function checkedDel(){
	for (let i = 0; i < checked.length; i++){
		let t = checked[i];
		remove(t);
		tList.splice(tList.indexOf(t), 1);
	}
	checked = [];
}

function allCheck(){
	let check = this.checked;
	for (let i = 0; i < tList.length; i++){

	}
	
	for (let i = 0; i < unassigned.length; i++){

	}
}



function checkedDel()

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