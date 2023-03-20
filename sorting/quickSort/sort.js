// pick a pivot
// divide and sort

function quickSort(arr, firstElement, lastElement) {
  var index;
  if (arr.length > 1) {
    index = partition(arr, firstElement, lastElement);
    if (firstElement < index - 1) {
      quickSort(arr, firstElement, index - 1);
    }
    if (index < lastElement) {
      quickSort(arr, index, lastElement);
    }
  }
  return arr;
}

function partition(arr, first, last) {
  let pivot = arr[Math.floor((first + last) / 2)];
  let i = first,
    j = last;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}


const array = [ 4,3,343,12,3,21]
console.log(array)