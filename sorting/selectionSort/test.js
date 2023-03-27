function selectionSort(array){
  let i, j, temp
  let n= array.length
  for(i=0 ;i <n-1 ; i++){
    let small =i
    for(j=i+1 ; j < n ; j++){
      if(array[j] < array [small]){
        small =j
      }
      temp = array[small]
      array[small]= array[i]
      array[i]=temp
    }
  }
  return array
}


console.log(selectionSort([3,45,21,3,5,6,32,9]))