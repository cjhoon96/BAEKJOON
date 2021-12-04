var numLst = prompt('숫자를 입력하세요');

numLst.split(' ');
for (i in numLst){
    gugu(parseInt(i));
}

function gugu(n){
    console.log(n + '단');
    for (var i = 1; i<10; i++){
        console.log(n + '*' + i + ' = ' + n*i);
    }
}