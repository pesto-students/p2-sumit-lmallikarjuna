function levelOrder(root) {
  if (!root) return [];
  const queue = [];
  queue.push(root);
  const levelOrder = [];

  while (queue.length) {
    let num = queue.length;
    const currentLevel = [];
    while (num-- > 0) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      currentLevel.push(current.val);
    }
    levelOrder.push(currentLevel);
  }

  return levelOrder;
}
