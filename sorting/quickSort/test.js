//send an array and start and and end partitoin
// find key
//find the pivotinx random
//and get and swap the indexof array
//and using get the keyind
//using recursive funtion for get  and swap the left and right the array get the sorted array

function quickSort(array,left,right){
    if(left < right) {
        let keyIdx = partition(array,left,right)
        quickSort(array,left,keyIdx-1)
        quickSort(array,keyIdx+1,right)
    }
    return array
}
function partition(array,left,rihgt){
 let pivotIdx = left;
 let startIdx = left;
 let endIdx   = rihgt
 while(startIdx < endIdx){
    if(array[startIdx] < array [pivotIdx]){
        startIdx++
    }
    if(array[endIdx] >= array[pivotIdx]){
     endIdx--
    }
    if(startIdx < endIdx){
        swap(array,startIdx,endIdx)
    }
 }
 swap(array,pivotIdx,endIdx)
 return endIdx

}


function swap(array,first,right){
    [[array[first],array[right]]= [array[right],array[first]]]
}

let array = [3,5,6,2,312,334,55,9]
let sorted = quickSort(array,0,array.length-1)
console.log(sorted)