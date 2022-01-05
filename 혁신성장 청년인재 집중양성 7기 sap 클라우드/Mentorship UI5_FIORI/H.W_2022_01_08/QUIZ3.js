//3. 객체(Math) 문제

//하기 조건을 충족하는 임의의 숫자 6개를 반환하는 함수 만들기
//조건1. 생성되는 숫자는 1 ~ 45 내에서 생성
//조건2. 중복 숫자 허용 안됨

function random6() {
  var arr = []; 
  var n = 0;
  var num;

  while (n !== 6) { 
    num = Math.floor( Math.random() * 45 + 1 );
    console.log(num);
    if (arr.indexOf(num) === -1) {
      arr.push(num);
      n++;
    }
  }
  return arr;
}

aValue = random6();
console.log(aValue);
// 30
// 21
// 12
// 35
// 12
// 41
// 33
// [ 30, 21, 12, 35, 41, 33 ]
