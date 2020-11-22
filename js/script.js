//Declaramos variables
var variablea;
var variableb;
var operation;

function init(){
  //variables
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');
  var sum = document.getElementById('sum');
  var subtraction = document.getElementById('subtraction');
  var multiplication = document.getElementById('multiplication');
  var division = document.getElementById('division');
  var equal = document.getElementById('equal');
  var one = document.getElementById('one');
  var two = document.getElementById('two');
  var three = document.getElementById('three');
  var four = document.getElementById('four');
  var five = document.getElementById('five');
  var six = document.getElementById('six');
  var seven = document.getElementById('seven');
  var eight = document.getElementById('eight');
  var nine = document.getElementById('nine');
  var zero = document.getElementById('zero');
}

//Eventos de click
  one.onclick = function(e){
      result.textContent = result.textContent  + "1";
  }
  two.onclick = function(e){
      result.textContent = result.textContent  + "2";
  }
  three.onclick = function(e){
      result.textContent = result.textContent  + "3";
  }
  four.onclick = function(e){
      result.textContent = result.textContent  + "4";
  }
  five.onclick = function(e){
      result.textContent = result.textContent  + "5";
  }
  six.onclick = function(e){
      result.textContent = result.textContent  + "6";
  }
  seven.onclick = function(e){
      result.textContent = result.textContent  + "7";
  }
  eight.onclick = function(e){
      result.textContent = result.textContent  + "8";
  }
  nine.onclick = function(e){
      result.textContent = result.textContent  + "9";
  }
  zero.onclick = function(e){
      result.textContent = result.textContent  + "0";
  }
  reset.onclick = function(e){
      resetear();
  }
  sum.onclick = function(e){
      variablea = result.textContent;
      operation = "+";
      limpiar();
  }
  subtraction.onclick = function(e){
      variablea = result.textContent;
      operation = "-";
      limpiar();
  }
  multiplication.onclick = function(e){
      variablea = result.textContent;
      operation = "*";
      limpiar();
  }
  division.onclick = function(e){
      variablea = result.textContent;
      operation = "/";
      limpiar();
  }
  equal.onclick = function(e){
      variableb = result.textContent;
      resolver();
  }

  function limpiar(){
    result.textContent = "";
  }

  function resetear(){
    result.textContent = "";
    variablea = 0;
    variableb = 0;
    operation = "";
  }

  function resolver(){
    var res = 0;
    switch(operation){
      case "+":
        res = parseFloat(variablea) + parseFloat(variableb);
        break;

      case "-":
        res = parseFloat(variablea) - parseFloat(variableb);
        break;

      case "*":
        res = parseFloat(variablea) * parseFloat(variableb);
        break;

      case "/":
        res = parseFloat(variablea) / parseFloat(variableb);
        break;
  }
  resetear();
    result.textContent = res;
}
