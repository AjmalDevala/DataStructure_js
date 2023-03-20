const selectionSort =(Array)=>{
  const n= array.length
  let i,j
  for (i=0;i<n-1;i++){
   let minindex= i
   for(j=i+1;j<n;j++){
 
     if (array[j]<array[minindex]){
       minindex =j
     }
   }
 
   const temp = array[minindex]
   array[minindex]=array[i]
   array[i] =temp
  }
 return array
 }
 
 const array = [34,43,34,32,24,42,3,1,12,44,]
 
 const result = selectionSort(array)
 console.log(result);