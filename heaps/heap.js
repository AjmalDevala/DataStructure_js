function heapify(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapifyHelper(arr, n, i);
    }
  }
  
  function heapifyHelper(arr, n, i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    if (left < n && arr[left] < arr[smallest]) {
      smallest = left;
    }
  
    if (right < n && arr[right] < arr[smallest]) {
      smallest = right;
    }
  
    if (smallest != i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      heapifyHelper(arr, n, smallest);
    }
  }
  
  function insert(arr, value) {
    arr.push(value);
    let index = arr.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (arr[parentIndex] > arr[index]) {
        [arr[parentIndex], arr[index]] = [arr[index], arr[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  
  function getMin(arr) {
    if (arr.length === 0) {
      return null;
    }
    const min = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    heapifyHelper(arr, arr.length, 0);
    return min;
  }

  function remove(arr, value) {
    const index = arr.indexOf(value);
    if (index === -1) {
      return false; // value not found in the heap
    }
    arr[index] = arr[arr.length - 1]; // swap the element in end
    arr.pop();
    heapifyHelper(arr, arr.length, index);
    return true; // value removed successfully
  }


  
  // Example usage:
  const arr=[7,87,6,3,2,-4]
  heapify(arr);
  console.log(arr); // [1, 2, 9, 5, 7]
  // insert(arr, -6);
  remove(arr,87); // removed the location
  console.log(arr); // [1, 2, 3, 5, 7, 9]
//   console.log(getMin(arr)); // 1
  console.log(arr); // [2, 5, 3, 9, 7]