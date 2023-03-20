function insertionSort(arr) {
    let i,j
    for ( i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (j = i-1 ; arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

const arr =[9,7,6,5,4,4,43]
const result = insertionSort(arr)
console.log(result);