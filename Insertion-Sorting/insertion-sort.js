const insertionSort = (array) => {
    for (let i=1; i<array.length; i++){
        let j = i - 1;
        let current = array[i];
        while( j >= 0 && array[j] > current ){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = current;
    }
    return array
}

let arr = [18, 48, 58, 9, 4, 67, 30]
const result = insertionSort(arr);
result.forEach(element => {
    console.log(element+" ")
});