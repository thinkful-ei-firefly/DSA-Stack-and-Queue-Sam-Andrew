class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(item) {
    const node = new _Node(item, this.top)
    this.top = node
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.value;
  }
}

const main = () => {
  const starTrek = new Stack();
  const emptyStack = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  starTrek.pop();
  starTrek.pop();


  // console.log(starTrek)

  // console.log(peek(starTrek))
  // console.log(peek(emptyStack))

  // console.log(isEmpty(starTrek))
  // console.log(isEmpty(emptyStack))

  display(starTrek)
  // display(emptyStack)
}

const peek = (stack) => {
  if (stack.top === null) return null
  return stack.top.value
}

const isEmpty = (stack) => {
  return !stack.top
}

const display = (stack)  => {
  if (isEmpty(stack)) console.log('this stack is empty')
  let tempNode = stack.top
  while (tempNode !== null) {
    console.log(tempNode.value)
    tempNode = tempNode.next
  }
}

const is_palindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const stack = new Stack
  const reverseStack = new Stack
  for (let i=0; i<s.length; i++) {
    stack.push(s[i])
  }
  for (let i=0; i<s.length; i++) {
    reverseStack.push(s[s.length-1-i])
  }
  for (let i=0; i<s.length; i++) {
    if (stack.pop() !== reverseStack.pop()) return false
  }
  return true;
}

console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

// main()