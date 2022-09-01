function check(root, min_value, max_value) {
  if (!root) return true;

  if (root.data < min_value || root.data > max_value) return false;

  return (
    check(root.left, min_value, root.data) &&
    check(root.right, root.data, max_value)
  );
}

function isBinarySearchTree(root) {
  return is_bst_rec(root, -Number.MAX_VALUE - 1, Number.MAX_VALUE);
}
