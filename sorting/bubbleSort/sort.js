
function bubbleSort(array){
  let n= array.length
  let i,j,temp
  for(i=0 ; i< n ; i++){
    for(j=0 ; j< n ; j++){
      if( array[j] > array[j+1] ){
        temp= array[j]
        array[j]= array[j+1]
        array[j+1]=temp
      }
    }
  }
  return array
}

const array= [5,5,23,32,3,2,1,3,5,6]
console.log(bubbleSort(array))