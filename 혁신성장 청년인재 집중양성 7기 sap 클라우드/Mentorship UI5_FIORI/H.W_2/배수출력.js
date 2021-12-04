var cnt = 0;
for (var i = 1; i <= 100 ; i++){
    if (!(i % 2)){
        console.log(i + '는 2의 배수입니다.');
        cnt += 1;
    }
}

console.log('1부터 100까지의 2의 배수는 총 ' + cnt +'개입니다.');