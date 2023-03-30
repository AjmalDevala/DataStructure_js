class node {
    constructor (value){
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
            this.childnode(this.root, newNode)
        }
    }
    childnode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.childnode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.childnode(root.right, newNode)
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

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right,value)
            }
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

    delete(value){
        this.root = this.deleteNode(this.root ,value)
    }

    deleteNode(root ,value){
        if(root=== null){
            return null
        }if(value < root.value){
            root.left =this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right =this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value =this.min(root.right)
            root.right =this.deleteNode(root.right ,value)
        }
        return root
    }

}


const bst = new BinerySearchTree()
bst.insert(56)
bst.insert(6)
bst.insert(5)
bst.insert(63)
bst.insert(76)
bst.insert(1)
bst.insert(6)
// bst.preOrder(bst.root)
// console.log(bst.search(bst.root, 7))
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// bst.delete(56)
bst.preOrder(bst.root)
