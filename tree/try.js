class node{
    constructor(value){
        this.value =value
        this.left = null
        this.right =null
    }
}

class BinerySearchTree{
    constructor(){
        this.root =null
    }
    isempty(){
        return this.root === null
    }

    insert(value){
        const newNode = new node(value)
        if(this.isempty()){
            this.root = newNode
        }else{
            this.childNode(this.root ,newNode)
        }
    }
    childNode(root, node){
        if(node.value < root.value){
            if(root.left=== null){
                root.left = node
            }else{
                this.childNode(root.left,node)
            }
        }else{
            if(root.right=== null){
                root.right = node
            }else{
                this.childNode(root.right,node)
            }
        }
    }
    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(  value < root.value){
               return this.search(root.left , value)
            }else{
               return this.search(root.right ,value)
            }
        }
    }

    inorder(root){
        if(root){
            console.log(root.value)
            this.inorder(root.left)
            this.inorder(root.right)

        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.min(root.right)
        }
    }
    delete(value){
        this.root =this.deleteNode(this.root ,value)
    }

    deleteNode(root,value){
     if(root == null){
        return null
     }if(value < root.value){
        root.left =this.deleteNode(root.left,value)
     }else if(value > root.value){
        root.right =this.deleteNode(root.right,value)
     }
     if(!root.left && !root.right){
        return null
     }if(!root.left){
        return root.right
     }else if(!root.right){
        return root.left
     }
     root.value =this.min(root.right)
     root.right = this.deleteNode(root.right ,root.value)
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
// console.log(bst.search(bst.root,5))
// console.log(bst.max(bst.root))
bst.delete(56)
bst.inorder(bst.root)