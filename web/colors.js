let Body = {
    setAllColor:function (clr_1, clr_2){
        var target = document.querySelector('body');
        target.style.color = clr_1;
        target.style.backgroundColor = clr_2;
    },
    setColor:function (clr){
        var target = document.querySelector('body');
        target.style.color = clr;
    },
    setBackgroundColor:function (clr){
        var target = document.querySelector('body');
        target.style.backgroundColor = clr;
    }
}

function setColor(sel, clr){
    var target = document.querySelector(sel);
    target.style.color = clr
}



// let divList = document.querySelectorAll('div')

// divList.classSwitch = function (now, next){
//     for(var key in this){
//         if(divList[key].className === now){
//             alert(divList[key])
//             divList[key].className = next
//         }
//     }
// }

function classSwitch(now, next) {
    let lst = document.querySelectorAll("." + now)
    lst.forEach(div => {
        div.setAttribute('class',next)
        console.log(div.className)
    })
}

function NightDayHandler (self) {
    if(self.value === 'night'){
        Body.setAllColor('white', 'rgb(10, 16, 63)');
        classSwitch('ex', 'exNight');
        self.value = 'day';
    } else {
        Body.setAllColor('black', 'white');
        classSwitch('exNight', 'ex');
        self.value = 'night'
    }
}