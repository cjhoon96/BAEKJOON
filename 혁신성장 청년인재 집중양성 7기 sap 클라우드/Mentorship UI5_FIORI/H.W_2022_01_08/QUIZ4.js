//4. Array.sort 문제
//하기 조건을 충족하는 Array.sort 함수를 직접 만들기
//조건1. 파라미터는 2개
//조건2. 첫번째 파라미터는 Sort할 Array를 받음
//조건3. 두번째 파라미터는 함수(Logic)를 받음


//*&--------------------------------------------*
//*& Selection sort                             *
//*& 가장 앞을 기준 index로 잡고 		            *
//*&$최소값을 찾아 하나씩 맨 앞으로 보낸다.     *
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


//*&--------------------------------------------*
//*& function parameterdp Default 값 주기       *
//*& 함수를 하나 정의 한 뒤 func 		            *
//*&$parameter 넣을 때 func = dflt를 넣어준다.  *
//*&--------------------------------------------*


function dflt(a, b) {
  return a - b;
}

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

      console.log(arr[j], arr[j + 1], i);S
      
      if (func(arr[j + 1], arr[j]) < 0) {
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

var aValue = [
  { a: 1, b: 3 },
  { a: 2, b: 2 },
  { a: 3, b: 1 },
  { a: 2, b: 5 },
  { a: 3, b: 4 },
  { a: 1, b: 1 },
];


function objAc (obj1, obj2) {
  if (obj1.a > obj2.a) {
    return true;
  } else if (obj1.a === obj2.a) {
    return obj2.b - obj1.b;
  } else {
    return -1;
  }
}
console.log(bubbleSort(aValue, objAc));