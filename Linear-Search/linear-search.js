
// function search(arr, n, x) {
//     let i;
//     for (i = 0; i < n; i++) {
//       if (arr[i] == x) {
//         return i;
//       }
//     }
//     return -1;
//   }
//   let arr = [0, 4, 5, 2, 5, 1];
//   let n = arr.length;
//   let x = 1;
//   let result = search(arr, n, x);
  
//   console.log(result);



function ls(array ){
  let n= array.length
  for(let i=0 ;i <n ;i++){
    if(array[i] %2 === 0){
      array[i] ="e"
    }else{
      array[i] ="r"
    }
  }
}
let s =[5,4,5,6,72,34]
ls(s)
console.log(s)