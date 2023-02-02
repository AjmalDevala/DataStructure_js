var head;

// creat Node 

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

 // print linked lists

const printList = () =>{
    let current = head;
    while ( current != null){
        console.log(current.data+" ")
        current = current.next;
    }
}

// insert value biginning

const push = (newData)=>{
    let newNode = new Node(newData)
    newNode.next = head
    head = newNode
    
}

// insert Value After Node

const insertAfterNode = (prevData, newData)=>{
    if(prevData == null){
        console.log("Please give previous node data")
        return
    }
    const newNode = new Node(newData)
    newNode.next = prevData.next
        prevData.next = newNode
    
}

// Insert Value to End

const append =(newData)=>{
    if (head == null){
        const head = new Node(newData)
        return
    }
    const newNode = new Node(newData)
    newNode.next = null
    
    let last = head
    while( last.next != null){
        last = last.next
    }
    last.next = newNode

}

var head = new Node(1)
const second = new Node(2)
const third = new Node(3)

head.next = second
second.next = third


console.log('Lists')
printList()
console.log('Inserted begining')
push(5)
printList()
console.log('Inserted after second')
insertAfterNode(second,5)
printList()
console.log('Inserted to end')
append(6)
printList()
