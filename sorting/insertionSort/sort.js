function insertionSort(array){
  let i, j ,currentVal
  let n= array.length
  for(i=1 ; i < n ; i++){
    currentVal=array[i]
    for( j=i-1 ; array[j] > currentVal ; j--){
      array[j+1 ] = array [j]
    }
    array[j+1] =currentVal
  }
  return array
}

console.log(insertionSort([3,4,655,1,3,55,62]))