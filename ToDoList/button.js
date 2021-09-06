let button = document.getElementById('button');
let input = document.getElementById('input');
let list = document.getElementById('list');

button.addEventListener('click', addSchedule);

function addSchedule(){
    let temp = document.createElement('li')
    temp.innerHTML = input.value;
    list.appendChild(temp)
}