class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(item) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(item);

    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    while (this.stack1.length === 0) {
      console.log("Queue is empty");
      return;
    }
    return this.stack1.pop();
  }
}

let queue = new Queue();
let keys = [1, 2, 3, 4, 5, 6, 7];

for (const key of keys) {
  queue.enqueue(key);
}

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
