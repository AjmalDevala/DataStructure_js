function heap(array){
    let n = array.length
    for(let i=Math.floor(n/2)-1 ;i>=0 ;i--){
        heapify(array,i ,n)
    }
}


function heapify(array ,i ,n){
    let smallest = i
    let leftchild= 2*i+1
    let rightchild=2*i+2
    if(leftchild < n && array[leftchild] < array[smallest]){
        smallest = leftchild
    }
    if(rightchild < n && array[rightchild ] < array[smallest]){
         smallest = rightchild
    }
    if(smallest != i){
        [array[i],array[smallest]] = [array[smallest],array[i]]
        heapify(array,smallest,n)
    }
}

function insert (array,value){
    array.push(value)
    let index = array.length-1
    while(index > 0){
        let pi =Math.floor((index-1)/2)
        if(array[pi] > array[index]){
            [array[pi],array[index]] =[array[index] ,array[pi]]
        index = pi
        }else{
            break
        }
    }
}

function remove(array, value) {
    const index = array.indexOf(value);
    if (index === -1) {
      return false; // value not found in the heap
    }
    array[index] = array[array.length - 1];
    array.pop();
    heapify(array, index, array.length);
    return true; // value removed successfully
  }


const a=[3,54,6,3,1,23,45,6,7,7]
heap(a)
console.log(a)
insert(a,67)
remove(a,54)
console.log(a)