class node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinerySearchTree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }


    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }


    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) { 
        if (root === null) {
            return null
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
        if(!root.left && !root.right) {
            return null
        }
        if (!root.left) {
            return root.right
        } else if (!root.right) {
            return root.left
        }
        root.value = this.min(root.right)
        root.right = this.deleteNode(root.right, root.value)
    }
    return root
}
}

const bts = new BinerySearchTree()
// console.log(`tree Empty`,bts.isEmpty)
bts.insert(12)
bts.insert(23)
bts.insert(5)
bts.insert(34)
bts.insert(2)

bts.delete(23)
bts.postOrder(bts.root)
// console.log(bts.search(bts.root ,12))
// // bts.inOrder(bts.root)
// // bts.postOrder(bts.root)
// console.log(bts.min(bts.root))
// console.log(bts.max(bts.root))