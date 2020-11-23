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

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

//Eventos de click
  one.onclick = function(e){
    if (result.textContent == "0") { clear(); }
    if (result.textContent.length < 15) result.textContent = result.textContent  + "1";
  }
  two.onclick = function(e){
    if (result.textContent == "0") { clear(); }
    if (result.textContent.length < 15) result.textContent = result.textContent  + "2";
  }
  three.onclick = function(e){
    if (result.textContent == "0") { clear(); }
    if (result.textContent.length < 15) result.textContent = result.textContent  + "3";
  }
  four.onclick = function(e){
    if (result.textContent == "0") { clear(); }
    if (result.textContent.length < 15) result.textContent = result.textContent + "4";
  }
  five.onclick = function(e){
    if (result.textContent == "0") { clear(); }
    if (result.textContent.length < 15) result.textContent = result.textContent  + "5";
  }
  six.onclick = function(e){
    if (result.textContent == "0") { clear(); }
    if (result.textContent.length < 15) result.textContent = result.textContent  + "6";
  }
  seven.onclick = function(e){
    if (result.textContent == "0") { clear(); }
    if (result.textContent.length < 15) result.textContent = result.textContent  + "7";
  }
  eight.onclick = function(e){
    if (result.textContent == "0") { clear(); }
    if (result.textContent.length < 15) result.textContent = result.textContent  + "8";
  }
  nine.onclick = function(e){
    if (result.textContent == "0") { clear(); }
    if (result.textContent.length < 15) result.textContent = result.textContent  + "9";
  }
  zero.onclick = function(e){
    if (result.textContent == "0") { clear(); }
    if (result.textContent.length < 15) result.textContent = result.textContent  + "0";
  }
  reset.onclick = function(e){
      to_reset();
      sum.style.color = 'black';
      subtraction.style.color = 'black';
      multiplication.style.color = 'black';
      division.style.color = 'black';
  }
  sum.onclick = function(e){
      variablea = result.textContent;
      operation = "+";
      clear();
      sum.style.color = 'red';
  }
  subtraction.onclick = function(e){
      variablea = result.textContent;
      operation = "-";
      clear();
      subtraction.style.color = 'red';
  }
  multiplication.onclick = function(e){
      variablea = result.textContent;
      operation = "*";
      clear();
      multiplication.style.color = 'red';
  }
  division.onclick = function(e){
      variablea = result.textContent;
      operation = "/";
      clear();
      division.style.color = 'red';
  }
  equal.onclick = function(e){
      variableb = result.textContent;
      resolv();
      sum.style.color = 'black';
      subtraction.style.color = 'black';
      multiplication.style.color = 'black';
      division.style.color = 'black';
  }

  function clear(){
    result.textContent = "";
  }

  function to_reset(){
    result.textContent = "0";
    variablea = 0;
    variableb = 0;
    operation = "";
  }

  function resolv(){
    var to_result = 0;
    switch(operation){
      case "+":
        to_result = round((parseFloat(variablea) + parseFloat(variableb)), 12);
        break;

      case "-":
        to_result = round((parseFloat(variablea) - parseFloat(variableb)), 12);
        break;

      case "*":
        to_result = round((parseFloat(variablea) * parseFloat(variableb)), 12);
        break;

      case "/":
        to_result = round((parseFloat(variablea) / parseFloat(variableb)), 12);
        break;
  }
  to_reset();
    result.textContent = to_result;
}
