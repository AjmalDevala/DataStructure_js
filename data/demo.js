let root
class StackNode{
    constructor(data){
        this.data=data
        this.next=null
    }
}
const push =(data)=>{
    const newNode=new StackNode(data)
    if(root==null){
        root=new StackNode
    }else{
        let temp=root
        root =newNode
        newNode.next=temp
    }
    console.log("pushed to stack");
}

const print=()=>{
    let current=root
    while(current!= null){
        console.log(current.data); 
        current=current.next
    }
}

push(12)
push(2)

print()