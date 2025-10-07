// Import the readline module for taking user input
const readline = require('readline');

// Create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform the calculation
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    default:
      return 'Error: Invalid operator';
  }
}

// Prompt user for input
rl.question('Enter the first number: ', (input1) => {
  const num1 = parseFloat(input1);

  rl.question('Enter the operator (+, -, *, /): ', (operator) => {
    rl.question('Enter the second number: ', (input2) => {
      const num2 = parseFloat(input2);

      // Perform calculation and display result
      const result = calculate(num1, num2, operator);
      console.log(`Result: ${result}`);

      // Close the readline interface
      rl.close();
    });
  });
});
