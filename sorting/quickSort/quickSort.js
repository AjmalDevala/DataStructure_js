function swap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex]; 
    items[rightIndex] = temp;
  }
  function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
      i = left,
      j = right;
  
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }
  
  function quickSort(items, left, right) {
    var index=[]
    if (items.length > 1) {
      index = partition(items, left, right);
      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        quickSort(items, index, right);
      }
    }
    return items;
  }
  
  var items = [5,3,63, 3, 7, 6, 2,7,5,2 ,3,9];
  var sortedArray = quickSort(items, 0, items.length - 1);
  console.log(sortedArray);