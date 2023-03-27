function buildHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, i, n); // i will be last the parent node
    }
  }
  
  function heapify(arr, i, n) {
    let largest = i;
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
  
    if (leftChild < n && arr[leftChild] > arr[largest]) {
      largest = leftChild;
    }
  
    if (rightChild < n && arr[rightChild] > arr[largest]) {
      largest = rightChild;
    }
  
    if (largest != i) {
      swap(arr, largest, i)
      heapify(arr, largest, n);
    }
  }

function swap(array, leftIndex, rightIndex) {
  [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
}

const heapSort = (array) => {
  buildHeap(array);
  let n = array.length - 1;
  while (n >= 1) {
    swap(array, 0, n);
    heapify(array, 0, n);
    n--;
  }
  return array;
};

const arr = [13, 1, 9, 7, 6, 3, 8, 88];

console.log(heapSort(arr));