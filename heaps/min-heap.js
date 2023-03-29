function buildHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, i, n); // i will be last the parent node
    }
  }
  
  function heapify(arr, i, n) {
    let smallest = i;
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
  
    if (leftChild < n && arr[leftChild] < arr[smallest]) {
      smallest = leftChild;
    }
  
    if (rightChild < n && arr[rightChild] < arr[smallest]) {
      smallest = rightChild;
    }
  
    if (smallest != i) {
      [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
      heapify(arr, smallest, n);
    }
  }
  
  const arr= [4,2,1,4,6,7,-1]
  
  buildHeap(arr);
  console.log(arr);