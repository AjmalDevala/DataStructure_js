function selectionSort (array){
  let n= array.length
  let i,j,temp
  for(i=0 ; i<n-1 ; i++){
    let small = i
    for(j=i+1 ; j<n ;j++){
      if(array[j] < array[small]){
        small =j
      }
    }
    temp = array[small]
    array[small]=array[i]
    array[i]= temp
  }
  return array
}

const array=[4,3,2,4,6,3,2,134,5,]
const sorted = selectionSort(array)
sorted.forEach(element => {
  console.log(element)
  
});
