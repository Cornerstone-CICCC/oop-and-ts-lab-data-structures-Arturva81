// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');
const Stack = require('../lib/Stack');

function isPalindrome(queue) {
  const stack = new Stack();
  const size = queue.size();

  for (let i = 0; i < size; i++) {
    const current = queue.dequeue();
    queue.enqueue(current);
    stack.push(current);
  }

  for (let i = 0; i < size; i++) {
    const queueElement = queue.dequeue();
    queue.enqueue(queueElement);
    const stackElement = stack.pop();
    if (queueElement !== stackElement) {
      return false;
    }
  }

  return true;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true