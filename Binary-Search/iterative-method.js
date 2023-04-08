function bubbleSort(array){
    let n = array.length
    let i, j, temp
    for(i=0; i< n ; i++){
        for(j=0 ; j< array.length-i-1 ; j++){
            if(array[j] > array[j+1]){
                temp = array[j+1]
                array[j+1] =array[j]
                array[j]= temp
            }
        }
    }
    return array
}


const binarySearch = (arr,x) => {
    bubbleSort(arr)
    let l = 0;
    let r = arr.length-1;
    let mid;
     while( r >= l) {
        mid = l + Math.floor((r-l)/2)

        if (arr[mid] ==x){
            return mid
        }
        if(arr[mid] > x){
            r = mid-1;
        }else{
            l = mid+1;
        }
     }
     return -1
}

let arr = [10,23,30,40,45,50,2,60,4,420]
let x = 10
let result = binarySearch(arr,x)
result == -1 ? console.log("NO Founded") : console.log(result)
console.log(arr)
