//2. 배열 문제
  
var aValue = [
  { a: 1, b: 3 },
  { a: 2, b: 2 },
  { a: 3, b: 1 },
  { a: 2, b: 5 },
  { a: 3, b: 4 },
  { a: 1, b: 1 },
];

aValue.sort(function (obj1, obj2) {
  if (obj1.a > obj2.a) {
    return true;
  } else if (obj1.a === obj2.a) {
    return obj2.b - obj1.b;
  } else {
    return -1;
  }
});
console.log(aValue);

//bc 를 포함한 값만 남기기

var aValue = ["abcd", "abc", "def", "bcd", "cde"];

aValue = aValue.filter(function (a) {
  return a.includes("bc");
});
console.log(aValue);

//a 값의 길이가 3 이상인 것과 b의 값이 짝수인 값을 출력하기
var aValue = [
  { a: "ab", b: 3 },
  { a: "cde", b: 4 },
  { a: "edb", b: 3 },
  { a: "ea", b: 6 },
  { a: "acde", b: 4 },
];

aValue = aValue.filter(function (obj) { 
  if (obj.a.length >= 3) {
    return !(obj.b % 2);
  }
});

console.log(aValue);

//sort는 기존의 배열을 자체를 바꾸는 반면 filter는 새로운 배열을 반환한다!!
