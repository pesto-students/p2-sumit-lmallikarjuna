function detectLoop(head) {
  if (!head || !head.next) return false;

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer != null || fastPointer.next != null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer == fastPointer) return true;
  }

  return false;
}
