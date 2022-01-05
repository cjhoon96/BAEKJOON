//1. 객체(Date) 문제

//이번달 밀일 구하기
let today_1 = new Date();
console.log(today_1);                     // 1.4
today_1.setMonth(today_1.getMonth() + 1); // 2.4
console.log(today_1);                 
today_1.setDate(today_1.getDate() - today_1.getDate());  // 2.4 -4일==> 1.31                 
// today_1.setDate(0);

console.log(today_1);


//오늘부터 30일 뒤 구하기
let today_2 = new Date();
today_2.setDate(today_2.getDate() + 30);
console.log(today_2); 


//특정 날짜의 요일 구하는 함수 만들기

// let inputDate = prompt("날짜를 입력하세요 YYYY.MM.DD");
let Day = ["일", "월", "화", "수", "목", "금", "토"];

function whatDay(inputDate) {
  let today;
  console.log(inputDate);
  inputDate = inputDate.split(".");
  console.log(inputDate);
  today = new Date(
    parseInt(inputDate[0]),
    parseInt(inputDate[1]) - 1,
    parseInt(inputDate[2])
  );
  console.log(today);
  return Day[today.getDay()];
}

// console.log(whatDay(inputDate));
console.log(whatDay("2021.12.31"));
