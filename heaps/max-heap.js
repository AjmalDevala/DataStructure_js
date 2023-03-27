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
      [arr[largest], arr[i]] = [arr[i], arr[largest]];
      heapify(arr, largest, n);
    }
  }
  
  let arr = [2, 4, 25, 67, 10];
  
  buildHeap(arr);
  console.log(arr);