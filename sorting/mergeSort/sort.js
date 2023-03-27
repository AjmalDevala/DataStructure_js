function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2)
   let left = mergeSort(arr.slice(0, mid))
   let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(arr1, arr2) {
  let joinedArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      joinedArr.push(arr1.shift());
    }
    else {
      joinedArr.push(arr2.shift());
    }

  }
  return [...joinedArr, ...arr1, ...arr2];
}
const array = [3, 4, 2, 4, 5, 2, 1, 9]
console.log(mergeSort(array))