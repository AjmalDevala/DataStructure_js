
function bubbleSort(array){
    let i , j, temp
    for(i=0 ; i< array.length ; i++){
      for(j=0 ; j<array.length-i-1 ;j++){
        if(array[j] >  array[j+1]){
          temp = array[j+1]
          array[j+1]= array[j]
          array[j]= temp
        }
      }
    }
    return array
  }

function binarySearch(arr, value, start, end) {
    bubbleSort(arr)
    if (end < start) {
        return false
    }
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === value) {
        console.log(mid)
    }

    if (arr[mid] < value) {
        return binarySearch(arr, value, mid + 1, end)
    } else {
        return binarySearch(arr, value, start, mid - 1)
    }

}

let arr = [2, 1, 3, 7, 4, 9, 8]
let start = 0
let end = arr.length - 1
binarySearch(arr, 8, start, end)
console.log(arr)