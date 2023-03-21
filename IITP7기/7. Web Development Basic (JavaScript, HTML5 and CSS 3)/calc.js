var aInput = document.getElementById('a');
var bInput = document.getElementById('b');
var opInput = document.getElementById('op');
var calcBtn = document.getElementById('calc');
var resetBtn = document.getElementById('reset');
var rslt = document.getElementById('rslt');
var Inputs = [aInput, bInput, opInput];

Inputs.map((Input)=>{
  Input.addEventListener('keydown', function(oEvent){
    if (oEvent.key === 'Enter'){
      var emptyChck = chckInpt();
      console.log(emptyChck);
      if (emptyChck < 0){
        rslt.innerText = calc(aInput.value, bInput.value, opInput.value);
      } else {
        Inputs[emptyChck].focus();
      }
    }
  })
})

resetBtn.addEventListener('click', function(){
  for (var i = 0 ; i < Inputs.length ; i++){
    Inputs[i].value = '';
  }
  rslt.innerText = '';
})


function calc(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return (b ? a / b : "0으로 나눌 수 없다");
    case "%":
      return (b ? a % b : "0으로 나눌 수 없다");
  }
}


function chckInpt(){
  for (var i = 0 ; i < Inputs.length ; i++){
    console.log(Inputs[i].value);
    if (Inputs[i].value === ''){
      return i;
    }
  }
  return -1;
}