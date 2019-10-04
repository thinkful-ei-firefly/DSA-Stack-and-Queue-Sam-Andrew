class _Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data)
        if (this.first === null) {
            this.first = node
        }
        if (this.last) {
            this.last.next = node
        }
        this.last = node
    }
    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null
        }
        return node.value;
    }
}

const peek = (q) => {
    if (q.first) {
        return q.first.value
    }
    else {
        return null
    }
}

const isEmpty = (q) => {
    let isEmpty = false
    if (!(q.first) && !(q.last)) {
        isEmpty = true
    }
    return isEmpty
}

const display = (q) => {
    if (isEmpty(q)) {
        console.log('Queue is empty')
    }
    else {
        let tempQ = q.first
        let count = 1
        while (tempQ !== null) {
            console.log(`Position ${count} is ${tempQ.value}`)
            tempQ = tempQ.next
            count++
        }
    }
}

let maleQueue = new Queue
let femaleQueue = new Queue

const dancerArrives = (gender, name) => {
  let g = gender.toLowerCase()
  if (g === 'male') {
    maleQueue.enqueue(name)
  } else if (g === 'female') {
    femaleQueue.enqueue(name)
  } else {
    console.log('gender must be male or female')
    return
  }
  if (!isEmpty(maleQueue) && !isEmpty(femaleQueue)) {
    console.log(`${maleQueue.dequeue()} and ${femaleQueue.dequeue()} are paired!`)
  }
}

const bankLine = new Queue

const bank = (line) => {
  const customer = line.dequeue();
  randomNum = Math.floor((Math.random() * 4) + 1);
  if (randomNum === 1) {
    line.enqueue(customer)
  } else {
    return customer
  }
}

const main = () => {
    // const emptyQ = new Queue
    // const starTrekQ = new Queue;
    // starTrekQ.enqueue('Kirk')
    // starTrekQ.enqueue('Spock')
    // starTrekQ.enqueue('Uhura')
    // starTrekQ.enqueue('Sulu')
    // starTrekQ.enqueue('Checkov')

    // console.log(peek(starTrekQ))
    // console.log(peek(emptyQ))
    // console.log(isEmpty(starTrekQ))
    // console.log(isEmpty(emptyQ))
    // display(starTrekQ)
    // starTrekQ.dequeue()
    // starTrekQ.dequeue()
    // display(starTrekQ)
    // dancerArrives('male', 'Bob')
    // dancerArrives('male', 'Jon')
    // dancerArrives('female', 'Sara')
    // dancerArrives('male', 'Dirk')
    // dancerArrives('male', 'Hunter')
    // dancerArrives('female', 'Angela')
    // dancerArrives('female', 'Mary')
    // dancerArrives('male', 'Andrew')
    // dancerArrives('male', 'Billy')
    // dancerArrives('male', 'Josh')
    // dancerArrives('male', 'Kevin')
    // dancerArrives('female', 'Susan')
    // dancerArrives('female', 'Kelly')
    // dancerArrives('female', 'Kate')
    // dancerArrives('female', 'Sandra')
    // dancerArrives('female', 'June')
    // dancerArrives('female', 'Roberta')
    bankLine.enqueue('a')
    bankLine.enqueue('b')
    bankLine.enqueue('c')
    bankLine.enqueue('d')
    bankLine.enqueue('e')
    bankLine.enqueue('f')
    bankLine.enqueue('g')
    bankLine.enqueue('h')
    bankLine.enqueue('i')
    bankLine.enqueue('j')
    bankLine.enqueue('k')
    bank(bankLine)
    bank(bankLine)
    bank(bankLine)
    bank(bankLine)
    bank(bankLine)
    display(bankLine)
}

main()