// * Creates a stack - This implementation uses JavaScript object properties to simulate stack operations
var Stack = function () {
  this.count = 0; // keeping count of all the items in the stack
  this.storage = {}; //empty object

  // Adds a value onto the end of the stack
  this.push = function (value) {
    // here we pass in the value
    this.storage[this.count] = value; // here we put the value at the top of the stack
    this.count++; // then increment +1
  };

  // Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      // if the count strictly equals 0, that means there is nothing on the stack
      return undefined; // if there is nothing on the stack we return undefined (and nothing else from the function happens since this was true. If false, then it goes to the next step below)
    }

    this.count--; // here we decrement the count by -1
    var result = this.storage[this.count]; // set the result to this storage which is the object for the stack and index this count
    delete this.storage[this.count]; // then delete the item
    return result; // then return the result
  };

  this.size = function () {
    return this.count; // this.size will return this.count which is the number of items in the stack
  };

  // Returns the value at the end of the stack. However it does not remove it like the pop method does.
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack(); // here we create a new stack

myStack.push(1); // add 1 to the stack
myStack.push(2); // add 2  to the stack
console.log(myStack.peek()); // console shows 2
console.log(myStack.pop()); // console shows 2
console.log(myStack.peek()); // console shows 1
myStack.push("freeCodeCamp"); // add a string onto the stack
console.log(myStack.size()); // console shows 2
console.log(myStack.peek()); // console shows the string "freeCodeCamp"
console.log(myStack.pop()); // console  removes and shows "freeCodeCamp"
console.log(myStack.peek()); // console shows 1 because the string was popped off.

// * Notes: Understanding the Stack Implementation
// The custom stack is defined as a function (constructor) that initializes an empty object and a count to keep track of the number of items.

// * Constructor: Stack
// this.count: Tracks how many elements are in the stack.
// this.storage: An object that stores the stack's elements.
// Methods:
// ? push(value):
// Purpose: Adds a value to the top of the stack.
// How It Works: The value is stored in the storage object at the current count index, then count is incremented.
// ? pop():
// Purpose: Removes the value from the top of the stack and returns it.
// How It Works: Decreases count by one to move to the last added item, retrieves that item, deletes it from storage, and returns the item. Returns undefined if the stack is empty.
// ? size():
// Purpose: Returns the number of elements in the stack.
// How It Works: Simply returns the current value of count.
// ? peek():
// Purpose: Returns the value from the top of the stack without removing it.
// How It Works: Accesses the last added item in storage using count - 1 as the key.
