$(document).ready(function() {
  //Setting global variables.
  var firstNum = "";
  var secondNum = "";
  var operator;
  var isOpr = false;
  var result;

  //Click event on any button with number class.
  //If isOpr is false, print firstNum as a single string.
  //If isOpr is true, print secondNum as a single string.
  $(".number").click(function() {
    if (isOpr) {
      secondNum += this.value;
      $("#second-number").html(secondNum);
    } else {
      firstNum += this.value;
      $("#first-number").html(firstNum);
    }
  });

  //Click event on any button with operator class.
  //We set isOpr to true here which helps us determine secondNum, above.
  $(".operator").click(function() {
    isOpr = true;
    operator = this.value;
    $("#operator").html($(this).text());
  });

  //Click event for button with equal class.
  //Takes firstNum string and secondNum string and parses them into integers.
  $(".equal").click(function() {
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);

    //If statements that handle the math.
    //Checks to see what operator was clicked and returns the result of that operator using firstNum & secondNum.
    if (operator === "plus") {
      result = firstNum + secondNum;
    }
    if (operator === "minus") {
      result = firstNum - secondNum;
    }
    if (operator === "divide") {
      result = firstNum / secondNum;
    }
    if (operator === "times") {
      result = firstNum * secondNum;
    }
    if (operator === "power") {
      result = Math.power(firstNum, secondNum);
    }
    $("#result").html(result);
  });

  //Click event for button with clear class.
  $(".clear").click(function() {
    //Resets firstNum & secondNum to empty strings, resets isOpr to false and empties what is printed from prior calclulation.
    firstNum = "";
    secondNum = "";
    isOpr = false;
    $("#first-number, #operator, #second-number, #result").empty();
  });
});
