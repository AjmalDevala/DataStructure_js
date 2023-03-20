function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
}

let array = [2, 1, 6, 5, 4, 9, 3];

insertionSort(array);
console.log(array);