function insertionsort(array){
  let i,j
  for(i=1 ; i< array.length ; i++){
    insert= array[i]
    for(j= i-1 ; array[j] >insert ; j--){
      array[j+1]= array[j]
    }
    array[j+1]= insert
    console.log(insert,"djhfgkh")
  }
  return array
}


const array = [3,4,2,1,3,5,5,6,9] 
const result= insertionsort(array)
console.log(result)