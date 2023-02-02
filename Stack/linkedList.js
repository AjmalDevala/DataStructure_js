let root;

class StackNode {
    constructor(data){
        this.data = data
        this.next = null
    }
}

const push = (data) =>{
    const newNode = new StackNode(data)
    if (root == null){
        root = newNode;
    }else{
        let temp = root
        root = newNode
        newNode.next  = temp
    }
    console.log("Pushed to Stack")
}

const pop = () =>{
    if (root == null){
        console.log("Stack Underflow")
        return
    }else{
        var popped = root.data
        root = root.next;
    }
    return popped
}

const print = ()=>{
    let current = root 
    while(current != null){
        console.log(current.data)
        current = current.next
    }
}

push(10)
push(10)
push(10)
pop(1)
print()