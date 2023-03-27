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


console.log(bubbleSort([4,3,4,23,5,2,1]))






