let button = document.getElementById('button');
let input = document.getElementById('input');
let list = document.getElementById('list');
let schedules = [];

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
    if(input.value != "HH MM Contents"){
        schedules.push(input.value);
        schedules.sort()
        
        
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