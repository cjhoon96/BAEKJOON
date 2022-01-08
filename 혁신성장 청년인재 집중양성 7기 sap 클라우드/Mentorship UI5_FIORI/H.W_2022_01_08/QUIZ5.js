//5.Array.filter 문제
//하기 조건을 충족하는 Array.filter 함수를 직접 만들기
//조건1. 파라미터는 총 2개
//조건2. 첫번째 파라미터는 Filter할 Array를 받음
//조건3. 두번째 파라미터는 함수(Logic)를 받음
function dflt(a) {
  return 1;
}

function filterArray(arr, func = dflt) {
  var newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

var aValue = [3, 10, 30, 2, 4];
console.log(
  filterArray(aValue, function (a) {
    return !(a % 2);
  })
);  

console.log(aValue.filter())