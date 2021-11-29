var oDispExpr, oCalcRslt, oCalcReset, oNumberPad, oCalcExpr;

oDispExpr = document.getElementById("dispExpr")
oCalcRslt = document.getElementById("calcRslt");

oCalcReset = document.getElementById("calcReset");
oCalcReset.addEventListener("click", fnReset);


// 나머지 버튼들 클릭이벤트식 fnPushExpr 함수가 실행되도록 하기 
for (var iIdx = 1; iIdx < 7; iIdx++) {
  oNumberPad = document.getElementById("numPad" + iIdx);
  var n = oNumberPad.childElementCount
  console.log(n)
  if (n > 0) {
    for (var i = 0; i < n; i++) {
      oNumberPad.children[i].addEventListener("click", fnPushExpr)
    }
  } else {
    oNumberPad.addEventListener("click", fnPushExpr);
  }
}

// 
oCalcExpr = document.getElementById("calcExpr");
oCalcExpr.addEventListener("click", fnCalc);

function fnReset() {
  oCalcRslt.value = "";
  oDispExpr.value = "";
}

function fnPushExpr() {
  oDispExpr.value += this.innerHTML;
}

function fnCalc() {
  oCalcRslt.value = eval(oDispExpr.value);
}