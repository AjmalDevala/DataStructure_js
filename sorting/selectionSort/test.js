function selectionSort(arr) {
    let i, j, large;
    for (i = 0; i < arr.length - 1; i++) {
      large = i;
      for (j = i; j < arr.length; j++) {
        if (arr[j] > arr[large]) {
          large = j;
        }
      }
      swap(arr, large, i);
    }
  }
  
  function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
  let arr = [12, 43, 21, 51, 15, 11];
  selectionSort(arr);
  console.log(arr);