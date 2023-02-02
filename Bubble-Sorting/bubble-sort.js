const bubbleSort = (array) => {
    let  i,j,temp
    let n = array.length;
    for (i=0; i < n-1; i++){
       for (j=0; j <n-i-1; j++){
        if ( array[j] > array[j+1] ){
            temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
       }
    }
    return array
}
const arr = [34, 57, 68, 86, 200, 4, 10]
const result = bubbleSort(arr);
result.forEach(element => {
    console.log(element);
});