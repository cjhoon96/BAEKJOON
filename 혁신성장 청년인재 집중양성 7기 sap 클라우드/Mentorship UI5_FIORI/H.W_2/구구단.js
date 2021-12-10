var dan
var numLst = prompt('숫자를 입력하세요');

numLst = numLst.split(' ');
console.log(numLst);
for (var i = 0 ; i < numLst.length ; i++){
    dan = parseInt(numLst[i]);
    gugu(dan);
}

function gugu(n){
    console.log(n + '단');
    for (var i = 1; i<10; i++){
        console.log(n + '*' + i + ' = ' + n*i);
    }
}