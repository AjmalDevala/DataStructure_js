const selectionSort = (array) => {
  const n = array.length;
  let i, j;
  for (i = 0; i < n-1; i++) {
    let smallest = array[i];
    for (j = i+1; j < n; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
      }
    }
    array[j] = array[i];
    array[i] = smallest;
  }
  return array;
};

const arr = [20, 70, 59, 40, 60, 10];
const result = selectionSort(arr);
result.forEach((element) => {
  console.log(element);
});
