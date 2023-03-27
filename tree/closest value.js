class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, Infinity);
  }
  
  function findClosestValueInBstHelper(node, target, closest) {
    if (node === null) {
      return closest;
    }
    if (Math.abs(target - node.value) < Math.abs(target - closest)) {
      closest = node.value;
    }
    if (target < node.value) {
      return findClosestValueInBstHelper(node.left, target, closest);
    } else if (target > node.value) {
      return findClosestValueInBstHelper(node.right, target, closest);
    } else {
      return closest;
    }
  }
  const tree = new Node(10);
tree.left = new Node(5);
tree.right = new Node(15);
tree.left.left = new Node(2);
tree.left.right = new Node(5);
tree.right.left = new Node(13);
tree.right.right = new Node(22);
tree.left.left.left = new Node(1);
tree.right.left.right = new Node(14);

console.log(findClosestValueInBst(tree, 12)); // 13
