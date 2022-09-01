function maxDepth(root) {
  if (!root) return root;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
