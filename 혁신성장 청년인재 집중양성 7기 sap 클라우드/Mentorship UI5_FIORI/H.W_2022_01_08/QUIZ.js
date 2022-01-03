//1. 객체(Date) 문제

//이번달 밀일 구하기
let today_1 = new Date();
today_1.setDate(0);
today_1.setMonth(today_1.getMonth() + 1);

console.log(today_1);

//오늘부터 30일 뒤 구하기
let today_2 = new Date();
today_2.setDate(today_2.getDate() + 30);
console.log(today_2);


//특정 날짜의 요일 구하는 함수 만들기

// let inputDate = prompt('날짜를 입력하세요 YYYY.MM.DD');
let Day = {
    0 : '월',
    1 : '화',
    2 : '수',
    3 : '목',
    4 : '금',
    5 : '토',
    6 : '일'    
}

function whatDay(inputDate){
    console.log(inputDate);
    inputDate = inputDate.split('.');
    console.log(inputDate);
    let today_3 = new Date(parseInt(inputDate[0]), parseInt(inputDate[1]) - 1, parseInt(inputDate[2]));
    console.log(today_3);
    return Day[today_3.getUTCDay()];
}

// console.log(whatDay(inputDate));
console.log(whatDay('2021.12.31'));






//2. 배열 문제

// 큰 값 부터 나열하기
 var aValue = [32, 23, 15, 24, 5, 17, 34];

 aValue.sort(function(a, b){
    //  if(a < b) return 1;
    //  if(a === b) return 0;
    //  if(a > b) return -1;
    return b - a;
 })
 console.log(aValue);

//a가 작은 값 부터 나열하되 만약 a가 같은 값이며 b값이 큰거부터 나열하기
 var aValue = [
     {a : 1, b : 3},
     {a : 2, b : 2},
     {a : 3, b : 1},
     {a : 2, b : 5},
     {a : 3, b : 4},
     {a : 1, b : 1}
 ]

 aValue.sort(function(obj1, obj2){
     if (obj1.a < obj2.a){
         return true;
     }
     else if(obj1.a === obj2.a){
         return obj2.b - obj1.b;
     }
     else{
         return -1
     }
 })
 console.log(aValue);

 //bc 를 포함한 값만 남기기

var aValue = ['abcd', 'abc', 'def', 'bcd', 'cde'];

aValue = aValue.filter(function(a){
    return a.includes('bc');
})
console.log(aValue);

//a 값의 길이가 3 이상인 것과 b의 값이 짝수인 값을 출력하기
var aValue = [
    {a : 'ab', b : 3},
    {a : 'cde', b : 4},
    {a : 'edb', b : 3},
    {a : 'ea', b : 6},
    {a : 'acde', b : 4}
]

aValue = aValue.filter(function(obj){
    if (obj.a.length >= 3){
        return !(obj.b % 2);
    }
})

console.log(aValue)

//sort는 기존의 배열을 자체를 바꾸는 반면 filter는 새로운 배열을 반환한다!!






//3. 객체(Math) 문제

//하기 조건을 충족하는 임의의 숫자 6개를 반환하는 함수 만들기
//조건1. 생성되는 숫자는 1 ~ 45 내에서 생성
//조건2. 중복 숫자 허용 안됨

function random6(){
    var arr = []; 
    var n = 0;
    var num;

    while (n !== 6){
        num = Math.floor(Math.random() * 45 + 1);
        console.log(num)
        if (arr.indexOf(num) === -1){
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






//4. Array.sort 문제
//하기 조건을 충족하는 Array.sort 함수를 직접 만들기
//조건1. 파라미터는 2개
//조건2. 첫번째 파라미터는 Sort할 Array를 받음
//조건3. 두번째 파라미터는 함수(Logic)를 받음

function dflt(a, b){
    return a - b;
}

function sortArray(arr, func){
    let temp;
    let lngth = arr.length;
    for (let i = 0 ; i < lngth - 1 ; i ++){
        for (let j = i + 1 ; j < lngth ; j++){
            if (func(arr[i], arr[j]) > 0){
                temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
                console.log(i, j, arr)
            }
        }
    }
    return arr
}

var aValue = [3, 10, 30, 2, 4];
console.log(aValue)
console.log(sortArray(aValue, function(a, b){
    console.log(a, b, !!(a - b))
    return a - b;
}));
// console.log(sortArray(aValue, function(a, b){
//     return b - a;
// }))


// function sortArray(arr, func(a, b) = dflt(a, b)){
//     let temp;
//     let lngth = arr.length;
//     for (let i = 0 ; i < lngth - 1 ; i ++){
//         for (let j = i + 1 ; j < lngth ; j++){
//             if (func(arr[i], arr[j])){
//                 temp = arr[i];
//                 arr[i] = arr[j]
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr
// }






//5.Array.filter 문제
//하기 조건을 충족하는 Array.filter 함수를 직접 만들기
//조건1. 파라미터는 총 2개
//조건2. 첫번째 파라미터는 Filter할 Array를 받음
//조건3. 두번째 파라미터는 함수(Logic)를 받음
function filterArray(arr, func){
	var newArray = [];
  for (let i = 0 ; i < arr.length ; i++){
    if (func(arr[i])){
			newArray.push(arr[i]);
    }
  }
	return newArray;
}

var aValue = [3, 10, 30, 2, 4];
console.log(filterArray(aValue, function(a){
	return !(a % 2)
}))