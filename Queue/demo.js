class Queue {
    constructor(){
        this.item=[]
    }


    enqueue(element){
        this.item.push(element)
        console.log(element);
    }
    dequeue(){
        if(this.item.length==0){
            console.log("i am not hear");
            return "underflow"
        }else{
            return this.item.shift()
        }
    }
  print (){
    let i=0
    while(i < this.item.length){
        console.log(this.item[i]);
        i++;

    }
  }
}




let queue = new Queue();

queue.enqueue(23);
queue.enqueue(67);
queue.dequeue();
queue.print()