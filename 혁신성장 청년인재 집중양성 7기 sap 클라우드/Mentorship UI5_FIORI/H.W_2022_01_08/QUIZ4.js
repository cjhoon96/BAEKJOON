//4. Array.sort 문제
//하기 조건을 충족하는 Array.sort 함수를 직접 만들기
//조건1. 파라미터는 2개
//조건2. 첫번째 파라미터는 Sort할 Array를 받음
//조건3. 두번째 파라미터는 함수(Logic)를 받음

function dflt(a, b) {
  return a - b;
}

//*&--------------------------------------------*
//*& Selection sort                             *
//*& 가장 마지막 index를 기준으로 잡고 				  *
//*&$계속 기준 index에 가장 큰 값을 뒤로 보낸다 *
//*&--------------------------------------------*

function sortArray(arr, func) {
  let temp, mini;
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    mini = i;
    for (let j = i + 1; j < len; j++) {
      if (func(arr[mini], arr[j]) > 0) {
        mini = j;
      }
			console.log(i, j, mini);
    }
    temp = arr[i];
    arr[i] = arr[mini];
    arr[mini] = temp;
		console.log(arr)
  }
  return arr;
}

var aValue = [3, 10, 30, 2, 4];
console.log(aValue);
console.log("*&---------------------------------*");
console.log("*& sortArray 오름차순              *");
console.log("*&---------------------------------*");
aValue = [3, 10, 30, 2, 4];
console.log(
  sortArray(aValue, function (a, b) {
    return a - b;
  })
);
console.log("*&---------------------------------*");
console.log("*& sortArray 내림차순              *");
console.log("*&---------------------------------*");
aValue = [3, 10, 30, 2, 4];
console.log(
  sortArray(aValue, function (a, b) {
    return b - a;
  })
);

function sortDefault(arr, func = dflt) {
  let temp, mini;
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    mini = i;
    for (let j = i + 1; j < len; j++) {
      if (func(arr[mini], arr[j]) > 0) {
        mini = j;
      }
			console.log(i, j, mini);
    }
    temp = arr[i];
    arr[i] = arr[mini];
    arr[mini] = temp;
		console.log(arr)
  }
  return arr;
}

console.log("*&---------------------------------*");
console.log("*& sortDefault 오름차순            *");
console.log("*&---------------------------------*");
aValue = [3, 10, 30, 2, 4];
console.log(aValue);
console.log(sortDefault(aValue));
console.log("*&---------------------------------*");
console.log("*& sortDefault 내림차순            *");
console.log("*&---------------------------------*");
aValue = [3, 10, 30, 2, 4];
console.log(aValue);
console.log(
  sortDefault(aValue, function (a, b) {
    console.log(a, b, !!(b - a));
    return b - a;
  })
);

//*&--------------------------------------------*
//*& Bubble sort                                *
//*& 가장 마지막 index를 기준으로 잡고 				  *
//*&$계속 기준 index에 가장 큰 값을 뒤로 보낸다 *
//*&--------------------------------------------*
function bubbleSort(arr, func = dflt) {
  let temp;
  let len = arr.length;
  for (let i = len - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log(arr[j], arr[j + 1], i);
      if (func(arr[j], arr[j + 1]) > 0) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log(arr);
    }
  }
  return arr;
}

console.log("*&---------------------------------*");
console.log("*& bubbleSort 오름차순             *");
console.log("*&---------------------------------*");
aValue = [3, 10, 30, 2, 4];
console.log(bubbleSort(aValue));
