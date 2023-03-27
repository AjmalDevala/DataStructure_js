function quickSort(array,left,right){
    if(left < right){
        keyin =partition(array,left,right)
        quickSort(array,left,keyin-1)
        quickSort(array,keyin+1,right)
    }
    return array
}

function partition(array,left,right){
    let pivotIdx =right
    let startIdx =left
    let endIdx   =right
    while(startIdx < endIdx){
        while(array[startIdx] <= array [pivotIdx]){
            startIdx++
        }
        while(array[endIdx] > array [pivotIdx]){
            endIdx --
        }
        if(startIdx < endIdx){
            swap(array,startIdx,endIdx)
        }

    }
    swap(array,pivotIdx,endIdx)
    return endIdx
}


function swap(array,left,right){
    [array[left],array[right]] = [array[right],array[left]]
}


const array =[5,4,3,2,1,8,8,9]
console.log(quickSort(array,0,array.length-1))