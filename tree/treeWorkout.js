function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// TRAVERSAL
// In Order traversal
const inorder = (root) => {
  const nodes = [];
  if (root) {
    nodes.push(...inorder(root.left));
    nodes.push(root.val);
    nodes.push(...inorder(root.right));
  }
  return nodes;
};

// Post Order traversal
const postorder = (root) => {
  const nodes = [];
  if (root) {
    nodes.push(...postorder(root.left));
    nodes.push(...postorder(root.right));
    nodes.push(root.val);
  }
  return nodes;
};

// Pre Order traversal
const preorder = (root) => {
  const nodes = [];
  if (root) {
    nodes.push(root.val);
    nodes.push(...preorder(root.left));
    nodes.push(...preorder(root.right));
  }
  return nodes;
};

// IS VALID BINARY SEARCH TREE
const isValidBST = (root) => {
  const helper = (node, min, max) => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  };
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

// FIND MAX-DEPTH
const maxDepth = (root) => {
  const calc = (node) => {
    if (!node) return 0;
    return Math.max(1 + calc(node.left), 1 + calc(node.right));
  };
  return calc(root);
};

// FIND LOWEST COMMON ANCESTOR BETWEEN TWO NODES
const lowestCommonAncestor = (root, p, q) => {
  let lca = null;
  const isCommonPath = (node) => {
    if (!node) return false;
    const isLeft = isCommonPath(node.left);
    const isRight = isCommonPath(node.right);
    const isMid = node === p || node === q;
    if ((isMid && isLeft) || (isMid && isRight) || (isLeft && isRight)) {
      lca = node;
    }
    return isLeft || isRight || isMid;
  };
  isCommonPath(root);
  return lca;
};

const tree = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2), new TreeNode(4)),
  new TreeNode(7, new TreeNode(6), new TreeNode(8))
);

console.log(inorder(tree)); // [2, 3, 4, 5, 6, 7, 8]
console.log(postorder(tree)); // [2, 4, 3, 6, 8, 7, 5]
console.log(preorder(tree)); // [5, 3, 2, 4, 7, 6, 8]
console.log(isValidBST(tree)); // true
console.log(maxDepth(tree)); // 3
console.log(lowestCommonAncestor(tree, tree.left.left, tree.left.right)); // 