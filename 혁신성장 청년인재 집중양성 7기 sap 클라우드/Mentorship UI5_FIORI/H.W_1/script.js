var oDispExpr, oCalcRslt, oCalcReset, oNumberPad, oCalcExpr;

oDispExpr = document.getElementById("dispExpr")
oCalcRslt = document.getElementById("calcRslt");

oCalcReset = document.getElementById("calcReset");
oCalcReset.addEventListener("click", fnReset);


// 나머지 버튼들 클릭이벤트식 fnPushExpr 함수가 실행되도록 하기 (numPad 1~6까지 클릭시 기능 추가하기 (fnPushExpr))
for (var iIdx = 1; iIdx < 7; iIdx++) {
  oNumberPad = document.getElementById("numPad" + iIdx);
  oNumberPad.addEventListener("click", fnPushExpr);
}

// = 버튼에 클릭시 기능 추가하기 (fnCalc)
oCalcExpr = document.getElementById("calcExpr");
oCalcExpr.addEventListener("click", fnCalc);


// fnReset  ac 버튼이 클릭 될 시 실행되는 함수로 oCalcRslt와 oDispExpr 즉 결과 창과 입력 필드의 value를 "" 빈 문자열로 바꿔주어 초기화 시킨다.
function fnReset() {
  oCalcRslt.value = "";
  oDispExpr.value = "";
}

// fnPushExpr  numPad들을 클릭할 시 실행되는 함수로 oEvent.target을 통해 이벤트가 발생한 지점을 element로 불러온 후 
//            해당 element의 tagName(태그명)이 TD인 경우 해당 엘리먼트의 innerHTML 즉 태그사이 내부 내용을 
function fnPushExpr(oEvent) {
  var target = oEvent.target                // Click 이벤트가 발생한 지점을 element로 가져온다.
  // console.log(target.tagName)
  oDispExpr.value += target.innerText;   
//   if (target.tagName === 'TD'){             // element의 태그명이 TD 인 경우
//     oDispExpr.value += target.innerText;    // innerHTML을 이용해 입력창에 element에 해당하는 태그 사이의 내용을 불러와  oDispExpr.value += 을 통해 기존 입력창 내용 뒤에 추가한다.
//     //innerHTML도 가능
//   }
}

// fnCalc 계산 결과 창에 입력하는 함수 = 버튼을 클릭하실 호출된다.     (추가한 기능 입력 필드에서 엔터를 누를시 호출되는 함수 내부에서도 호출된다.)
function fnCalc() {
  oCalcRslt.value = eval(oDispExpr.value);  // eval 함수는 입력받은 수식 텍스트를 계산하여 return해준다. 해당 리턴값을 oCalcRslt.value에 배정 즉 결과창에 입력 해준다.
}

<tr>
  <td></td>
  <td></td>
</tr>

// 기존에 없던 내용 (추가기능)   수식이 입력된 상태에서 입력필드에서 enter 키를 누를시 = 버튼을 클릭할 때와 같은 동작을 하도록 설정해 준다.
oDispExpr.addEventListener("keydown", fnCalcByEnter);

function fnCalcByEnter(oEvent) {
  if (oEvent.key === 'Enter'){        // 위에서 이벤트 타입이 'keydown'(키보드 버튼 누름)이었다. oEvent.key를 통해 현재 눌린 키를 불러오며 이 키가 'Enter' 키일 경우
    fnCalc();                         // fnCalc 함수를 수행한다.
  }
}





// var oDispExpr, oCalcRslt, oCalcReset, oNumberPad, oCalcExpr;

// oDispExpr = document.getElementById("dispExpr")
// oCalcRslt = document.getElementById("calcRslt");

// oCalcReset = document.getElementById("calcReset");
// oCalcReset.addEventListener("click", fnReset);


// // 나머지 버튼들 클릭이벤트식 fnPushExpr 함수가 실행되도록 하기 
// for (var iIdx = 1; iIdx < 7; iIdx++) {
//   oNumberPad = document.getElementById("numPad" + iIdx);
//   var n = oNumberPad.childElementCount
//   console.log(n)
//   if (n > 0) {
//     for (var i = 0; i < n; i++) {
//       oNumberPad.children[i].addEventListener("click", fnPushExpr)
//     }
//   } else {
//     oNumberPad.addEventListener("click", fnPushExpr);
//   }
// }

// // 
// oCalcExpr = document.getElementById("calcExpr");
// oCalcExpr.addEventListener("click", fnCalc);

// function fnReset() {
//   oCalcRslt.value = "";
//   oDispExpr.value = "";
// }

// function fnPushExpr() {
//   oDispExpr.value += this.innerHTML;
// }

// function fnCalc() {
//   oCalcRslt.value = eval(oDispExpr.value);
// }
