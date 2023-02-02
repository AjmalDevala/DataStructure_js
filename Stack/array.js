let top = -1;
let max = 100;
let a = Array(max)



const push = (data) =>{
    if ( top > max ){
        console.log("Stack Overflow")
        return false
    }else{
        top += 1;
        a[top] = data
        console.log("Pushed to Stack");
        return true
    }
}

const pop = () =>{
    if (top < 0 ){
        console.log ("Stack Underflow")
        return 0 ;
    }else {
        let temp = a[top]
        top -= 1
        return temp
    }
}

const print =()=>{
    i = top 
    while(i>=0){
        console.log(a[i]+"")
        i--
    }
}


push(10)
push(20)
pop(10)
print()




