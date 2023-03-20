// bubble sort
function bubbleSort(arr, n) {
    let i, j, swapped, temp;
    for (i = 0; i < n - 1; i++) {
      swapped = false;
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      if (swapped == false) {
        break;
      }
    }
  }
  
  // selection sort
  function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
  function selectionSort(arr, n) {
    let i, j, min_index;
    for (i = 0; i < n - 1; i++) {
      min_index = i;
      for (j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_index]) {
          min_index = j;
        }
      }
      swap(arr, min_index, i);
    }
  }
  
  // insertion sort
  function insertionSort(arr, n) {
    let i, j, key;
    for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;
  
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
  
  // selection swap
  function swap(arr, x, y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
  function selectionSort(arr, n) {
    let i, j, min_index;
    for (i = 0; i < n - 1; i++) {
      min_index = i;
      for (j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_index]) {
          min_index = j;
        }
      }
      swap(arr, min_index, i);
    }
  }
  
  // bubble sort
  function bubbleSort(arr, n) {
    let i, j, swapped, temp;
    for (i = 0; i < n - 1; i++) {
      swapped = false;
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      if (swapped == false) {
        break;
      }
    }
  }
  
  function insertionSort(arr, n) {
    let i, j, key;
    for (i = 0; i < n; i++) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
  
  function bubbleSort(arr, n) {
    let i, j, swapped, temp;
    for (i = 0; i < n - 1; i++) {
      swapped = false;
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      if (swapped == false) {
        break;
      }
    }
  }
  
  function insertionSort(arr, n) {
    let i, j, key;
    for (i = 0; i < n; i++) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
  
  function selectionSort(arr, n){
    let i,j,min_index
    for(i=0;i<n-1;i++){
      min_index = i
      for(j=i+1;j<n;j++){
        if(arr[j] < arr[min_index]){
          min_index = j
        }
      }
      swap
    }
  }