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
    if (this.top === null) return null
    const node = this.top;
    this.top = node.next;
    return node.value;
  }
}

const peek = (stack) => {
  if (stack.top === null) return null
  return stack.top.value
}

const isEmpty = (stack) => {
  return !stack.top
}

const display = (stack) => {
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
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i])
  }
  for (let i = 0; i < s.length; i++) {
    reverseStack.push(s[s.length - 1 - i])
  }
  for (let i = 0; i < s.length; i++) {
    if (stack.pop() !== reverseStack.pop()) return false
  }
  return true;
}

const parenthMatch = (s) => {
  const stack = new Stack
  let stackLength = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == ')') {
      stack.push(s[i])
      stackLength++
    }
  }
  let tempStack = stack;
  let isOpen = 0;
  for (let i = 0; i < stackLength; i++) {
    let thisPop = tempStack.pop()
    if (thisPop == ')') {
      isOpen--
    }
    else if (thisPop == '(') {
      isOpen++
    }
  }
  if (isOpen > 0) {
    return "Missing a ')'"
  }
  else if (isOpen < 0) {
    return "Missing a '('"
  }
  else {
    return "Ok"
  }

}

const stackSort = (stack) => {
  let tempStack = new Stack
  let sourcePop = stack.pop()
  while (sourcePop) {
    if (peek(tempStack) <= sourcePop || isEmpty(tempStack)) {
      tempStack.push(sourcePop)
      sourcePop = stack.pop()
    }
    else {
      stack.push(tempStack.pop())
    }
  }
  while (!isEmpty(tempStack)) {
    stack.push(tempStack.pop())
  }
  // stack.push(sourcePop)
  return stack
}

const main = () => {
  const starTrek = new Stack;
  const emptyStack = new Stack;
  const stackToSort = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop();
  starTrek.pop();
  let testString = "Oh (hello) there"
  let testString2 = "(((()))"
  let testString3 = "((())))"

  stackToSort.push(100);
  stackToSort.push(1);
  stackToSort.push(99);
  stackToSort.push(2);
  stackToSort.push(98);
  stackToSort.push(-100);
  console.log('unsorted')
  display(stackToSort);
  console.log('sorted')
  display(stackSort(stackToSort))

  // console.log(starTrek)
  // console.log(peek(starTrek))
  // console.log(peek(emptyStack))
  // console.log(isEmpty(starTrek))
  // console.log(isEmpty(emptyStack))
  //display(starTrek)
  // display(emptyStack)
  //console.log(is_palindrome("dad"));
  //console.log(is_palindrome("A man, a plan, a canal: Panama"));
  //console.log(is_palindrome("1001"));
  //console.log(is_palindrome("Tauhida"));
  //console.log(parenthMatch(testString))
  //console.log(parenthMatch(testString2))
  //console.log(parenthMatch(testString3))


}

main()