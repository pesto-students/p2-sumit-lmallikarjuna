function traverse(res, level) {
  let now = res[level];
  let next = [];

  for (let i = 0; i < now.length; i++) {
    if (now[i].left) next.push(now[i].left);
    if (now[i].right) next.push(now[i].right);
    now[i] = now[i].val;
  }

  if (next.length) {
    res.push(next);
    traverse(res, level + 1);
  }

  return res;
}

function getLevelOrder(root) {
  if (!root) return [];
  return helper([[root]], 0);
}
