//add your code here

let numOne = $('#number1')
let numTwo = $('#number2')

let operator = $('#operation')


function validate(operator, numOne, numTwo) {
  if (operator == '+' || operator == '-' || operator == '*' || operator == '/') { if (isNaN(numOne) || numOne === '' || isNaN(numTwo) || numTwo === '' ) { $('#result').text("Sorry, one of those is not a valid number!");} else { answer(operator, numOne, numTwo);}
  
  
  }
  
}


  //function myCalculator(a, b) {
  //if userInput = '+' {
 //   numOne + numTwo
 // } else if userInput = '-' {
 //   numOne - numTwo
 // }
}

