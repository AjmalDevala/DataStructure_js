class Queue{
    constructor(){
        this.items = {}
        this.frond = 0
        this.back = 0

    }
    enqueue(item){
        this.items[this.back]=item
        this.back++
        return item + 'data added'

    }

    dequeue(){
        
        const item=this.items[this.frond]
        delete this.items[this.frond]
        this.frond++
        return item + 'first data delete'

    }

    peek(){
        return this.items[this.frond]+ 'pic the first one'
    }
    get data(){
        return this.items
    }

    check(){
       if( this.items.lenght==0){
        console.log("empty");
       }else{
        console.log("dataadsad");
       }
    }
}



const  queue = new Queue()

console.log(queue.enqueue(7));
console.log(queue.enqueue(7));
console.log(queue.enqueue(7));
console.log(queue.dequeue(7));
console.log(queue.peek());
const data=queue.data
console.log(data);
queue.check()
