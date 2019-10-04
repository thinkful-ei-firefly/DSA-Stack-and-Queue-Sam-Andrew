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

const main = () => {
    const emptyQ = new Queue
    const starTrekQ = new Queue;
    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')

    console.log(peek(starTrekQ))
    console.log(peek(emptyQ))
    console.log(isEmpty(starTrekQ))
    console.log(isEmpty(emptyQ))
    display(starTrekQ)
    starTrekQ.dequeue()
    starTrekQ.dequeue()
    display(starTrekQ)
}

main()