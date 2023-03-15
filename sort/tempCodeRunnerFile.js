const insertionSort=(arr)=>{
  const n= arr.length
  let i,j
  for(i=1;i<n;i++){
    let currentVal=arr[i]
    for(j=i-1;arr[j]>currentVal;j--){
      arr[j+1] =arr[j]
    }
    arr[j+1]=currentVal
  }
  return arr
}


const arr=[34,53,4,34,2,12,445,677]
result =insertionSort(arr)
console.log(result);