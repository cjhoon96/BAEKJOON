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