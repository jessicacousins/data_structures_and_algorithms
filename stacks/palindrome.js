/* palindrome stack */

// *  Notes:
// * functions: push(push on to the top of the stack), pop(remove off the top of the stack), pee(top element on the stack), length(see how many elements are on the stack)
// * A palindrome is a word or phrase that reads the same backward as forward, like "racecar" or "level".

var letters = []; // this is our stack that is being initialized
// * A stack is a data structure that follows the Last In, First Out (LIFO) principle. You can only add ("push") or remove ("pop") items from the top of the stack. This property makes it useful for reversing things because the last item to be pushed onto the stack is the first to be popped off.

var word = "racecar"; // choose a word that is a palindrome to see a success and anything else to see false.

var rword = ""; // this is the empty string reference for the reverse word that will be created to test against the word to see if its palindrome.

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
// * Each character of the word "racecar" is pushed onto the stack in the order they appear. After this loop, letters stack will have the letters of "racecar" from 'r' to 'r' (bottom to top).

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}
// * Now, characters are popped from the stack and appended to rword. Since the stack pops items in reverse order (LIFO), rword becomes "racecar".

if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}
// * Finally, the reversed word rword is compared to the original word. If they are the same, it confirms that the word is a palindrome in a console statement. Or in a console statement it states it is not a palindrome.

// ? Console Output Answer: racecar is a palindrome.
