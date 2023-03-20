let arr = [1, 2, 3, 4,1, 5];

let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i+1]) {
    isSorted = false;
    break;
  }
}

if (isSorted) {
  console.log("The array is sorted in ascending order.");
} else {
  console.log("The array is not sorted in ascending order.");
}
