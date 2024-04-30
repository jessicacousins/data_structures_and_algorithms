// ! postfix notation  - reverse Polish notation (RPN)

// * This type of notation is commonly used in computer science because it does not require parentheses to dictate the order of operations.Postfix notation is where the operator follows all of its operands. To evaluate postfix expressions, you use a stack to store operands and apply operators as they appear.

// ? The evaluatePostfix function is designed to evaluate mathematical expressions formatted in postfix notation (also known as reverse Polish notation, RPN). This notation and the function's implementation using a stack demonstrate a clear and structured approach to parsing and calculating expressions without the need for parentheses to govern the precedence of operations.

// ?  Postfix notation is a way of writing arithmetic expressions without parentheses that clarifies the order of operations based purely on the position of operators and operands. In postfix notation:
// ?         1. Operators come after their operands.
// ?         2. The order of operations is      controlled by the sequence of operands and operators rather than parentheses.

// ? For example, the infix expression 3 + 4 * 2 (which equals 11, because multiplication has a higher precedence than addition in standard arithmetic rules) would be written as 3 4 2 * + in postfix notation. This postfix expression can be evaluated straightforwardly from left to right using a stack, with no ambiguity about operation order.

function evaluatePostfix(expression) {
  let stack = []; // A stack is used to store operands.
  expression = expression.split(" "); // The expression string is split into tokens (numbers and operators).

  for (let i = 0; i < expression.length; i++) {
    let token = expression[i];

    // If the token is a number, push it onto the stack. When a token is a number (checked using parseFloat()), it is pushed onto the stack. This builds a stack of operands waiting to be used when operators appear.
    if (!isNaN(parseFloat(token))) {
      stack.push(parseFloat(token));
    } else {
      // The token is an operator; pop two elements from the stack. When a token is an operator, the required number of operands (usually two for binary operators like +, -, *, /, ^) is popped from the stack. The operation is then performed using these operands.
      let a = stack.pop();
      let b = stack.pop();

      // Apply the operator. The result of applying the operator is then pushed back onto the stack. This result may become an operand for a later operation as the evaluation continues.
      switch (token) {
        case "+":
          stack.push(b + a);
          break;
        case "-":
          stack.push(b - a);
          break;
        case "*":
          stack.push(b * a);
          break;
        case "/":
          stack.push(b / a);
          break;
        case "^":
          stack.push(Math.pow(b, a)); // Use Math.pow for exponentiation
          break;
        default:
          throw new Error("Unsupported operator");
      }
    }
  }

  // The result of the expression is the last item in the stack. After all tokens are processed, the last item remaining in the stack is the result of the expression.
  return stack.pop();
}

// Example usage:
let expression = "3 4 2 * 1 5 - 2 3 ^ ^ / +";
console.log(evaluatePostfix(expression));
// ? console output would be: 3.0001220703125
