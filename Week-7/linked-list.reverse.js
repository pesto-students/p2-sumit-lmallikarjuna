function Node(value, next) {
  this.value = value;
  this.next = value;
}

function printLinkedList(head) {
  let values = [];
  let pointer = head;

  while (pointer != null) {
    values.push(pointer.value);
    pointer = pointer.next;
  }
  console.log(...values);
}

function createLinkedList() {
  let head = new Node(0, null);
  let previous = head;

  for (let i = 1; i < 8; i++) {
    let node = new Node(i, null);
    previous.next = node;
    previous = node;
  }

  previous.next = null;
  return head;
}

// O(n) time | O(1) space - where n is the number of nodes in the Linked List
// Iterative method
function reverseLinkedList(head) {
  if (!head || !head.next) return head;

  let pointerOne = null;
  let pointerTwo = head;

  while (pointerTwo) {
    const next = pointerTwo.next;
    pointerTwo.next = pointerOne;
    pointerOne = pointerTwo;
    pointerTwo = next;
  }

  return pointerOne;
}

// Recursive method
function reverseLinkedListRecursive(head) {
  if (!head || !head.next) return head;

  const newHead = reverseLinkedListRecursive(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}

let head = createLinkedList();
console.log("Original Linked List: ");
printLinkedList(head);
console.log("Reversed Linked List: ");
let reversedHead = reverseLinkedList(head);
printLinkedList(reversedHead);
