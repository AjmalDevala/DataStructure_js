class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function getHeight(root) {
    if (!root) {
      // If the root node is null, the height is 0.
      return 0;
    }
  
    // Recursively compute the height of the left and right subtrees.
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
  
    // The height of the binary tree is the maximum of the heights of the left and right subtrees,
    // plus one for the root node.
    return Math.max(leftHeight, rightHeight) + 1;
  }
  
  // Example usage:
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  
  console.log(getHeight(root)); // Output: 3
  