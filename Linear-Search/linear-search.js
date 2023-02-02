
function search(arr, n, x) {
    let i;
    for (i = 0; i < n; i++) {
      if (arr[i] == x) {
        return i;
      }
    }
    return -1;
  }
  let arr = [0, 4, 5, 2, 5, 1];
  let n = arr.length;
  let x = 1;
  let result = search(arr, n, x);
  
  console.log(result);



  // function search ( array,nm,xx)
  // let j;
  //  for ( j=0 ;j<n ; j++){
  //   if (array[j]==xx){
  //     return j;
  //   }
  //   return -1;
  //  }
  //  let array =[0,4,5,6,7,3,3];
  //  let nm = array.length;
  //  let xx= 5;
  //  let resultt = search(array,nm,xx);
  //  console.log(resultt);