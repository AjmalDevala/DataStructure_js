// split array
// find mid
// arr splice
// once arr.length is 1
// run merge and sort

const merge = (arr1, arr2) => {
    let sorted = [];
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
      else sorted.push(arr2.shift());
    }
    return [...sorted, ...arr1, ...arr2];
  };
  
  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
      left = mergeSort(arr.slice(0, mid)),
      right = mergeSort(arr.slice(mid));
    return merge(left, right);
  };
  
  let unsortedArr = [2, 35, 6, 3, 68, 1, 56, 7];
  console.log(mergeSort(unsortedArr));