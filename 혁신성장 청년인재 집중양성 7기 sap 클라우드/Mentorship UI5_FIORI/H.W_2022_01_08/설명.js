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

!(arr[i] % 2);

function dflt(a) {
  return 1;
}
// 조건부를 함수로 넣을 수 있게 만들어라 라고 이해

// array 를 받아서 짝수만 뽑아서 새로운 array에 넣어 반환 함수를 만들어 보자

function dflt(a, b){
    return b - a;
}

function sortArray(arr, func = dflt) {
    
  let temp, mini;
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    mini = i;
    for (let j = i + 1; j < len; j++) {
      if ((func(arr[j], arr[mini])) < 0) {
        mini = j;
      }
      console.log(i, j, mini);
    }
    temp = arr[i];
    arr[i] = arr[mini];
    arr[mini] = temp;
    console.log(arr);
  }
  return arr;
}


