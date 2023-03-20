// Optimized javaScript implementation
// of Bubble sort
// An optimized version of Bubble Sort

function bubbleSort(arr, n) {
  let swapped, i, j, temp;
  for (i = 0; i < n - 1; i++) {
    // console.log(i);
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
        // console.log(j+"j");
      if (arr[j] > arr[j + 1]) {
        //swap arr[j] and arr[j+1]
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
      // IF no two elements were
      // swapped by inner loop, then break
    }
    if (swapped == false) {
    console.log("swap false");
      break;
    }
  }
}   

function printArray(arr, n) {
  let i;
  for (i = 0; i < n; i++) {
    console.log(arr[i]);
  }
}

let arr = [1, 23, 65, 3, 2, 1];
let n = arr.length;

bubbleSort(arr, n);
printArray(arr, n);