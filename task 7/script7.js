// Exercise-7: Perform arithmetic operations on two numbers
// Create 3 variables. Let them be num1, num2 and op. num1 and num2 are our numbers. and op is any arithmetic operator. For example, multiply, divide, subtract, add, modulus

// Print result of num1+num2 if operation is “add”
// Print result of num1-num2 if operation is “subtract”
// Print result of num1*num2 if operation is “multiply”
// Print result of num1/num2 if operation is “divide”
// Print result of num1%num2 if operation is “modulus”
// Else print “Invalid operation”
alert("It's a simple calculator");
confirm("Do you want to continue with the calculator?");

let operation = prompt("Choose one of these operations: (+, -, *, /, %)");
let num1 = parseFloat(prompt("Enter the first number"));
let num2 = parseFloat(prompt("Enter the second number"));

switch (operation) {
  case '+':
    let answer = num1 + num2;
    console.log(answer);
    break;
  case '-':
    let answer1 = num1 - num2;
    console.log(answer1);
    break;
  case '*':
    let answer2 = num1 * num2;
    console.log(answer2);
    break;
  case '/':
    let answer3 = num1 / num2;
    console.log(answer3);
    break;
  case '%':
    let answer4 = num1 % num2;
    console.log(answer4);
    break;
  default:
    console.log("Invalid operation");
}
