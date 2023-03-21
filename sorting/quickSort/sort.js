function swap(array, leftIndex, rightIndex) {
  [array[leftIndex], array[rightIndex]] = [ array[rightIndex], array[leftIndex]]
 }

const partition = (array, left, right) => {
   let pivotIdx = right;
   let startIdx = left; 
   let endIdx = right;
   while(startIdx < endIdx){
       while(array[startIdx] <= array[pivotIdx]){
           startIdx++
       }
       while(array[endIdx] > array[pivotIdx]){
           endIdx--
       }
       if(startIdx < endIdx){
           swap(array, startIdx, endIdx)
       }
   }
   swap(array, pivotIdx, endIdx)
   return endIdx
}

function quickSort(array, left, right){
  var keyIdx=[]
   if(left < right){
       keyIdx = partition(array, left, right)
       quickSort(array, left, keyIdx-1)
       quickSort(array, keyIdx+1, right)
   }
   return array
}

let array = [300, 44, 56, 34, 78,100, 2, 10]
let sortedArray = quickSort(array, 0, array.length - 1);
console.log(sortedArray);