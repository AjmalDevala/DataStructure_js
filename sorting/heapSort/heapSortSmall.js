function heap(array){
    let n=array.length
    for( let i= Math.floor(n/2)-1 ;i>=0 ;i--){
        heapify(array,i ,n)
    }
}

function heapify(array,i ,n){
    let smallest = i
    const leftChild =2*i+1
    const rightChild =2*i+2
    if(leftChild < n && array[leftChild ] > array[smallest]){
        smallest =leftChild
    }
    if(rightChild < n && array[rightChild] > array[smallest]){
        smallest =rightChild
    }
    if(smallest != i){
        swap(array,smallest ,i)
        heapify(array ,smallest ,n)
    }
}

function swap (array,left,right){
    [array[left] ,array[right]] = [array[right] ,array[left]]
}

function heapSort(array){
    heap(array)
    let n =array.length-1
    while(n > 0){
        swap(array ,0 , n)
        heapify(array, 0  , n)
        n--
    }
    return array
}

const array=[3,5,6,3,3,3,11,31,1]
heapSort (array)
console.log(array)