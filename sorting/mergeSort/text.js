// working
//find mid index
//[seperate left and right array index]
//and impliment and find recursive functon and get the single  array
//and seperate the array and call function for check the condition
//create an empty array []
//and puch to array in side an array
// and merge the array
// and return the arrray

function mergeSort(array){
    if( array.length <= 1) return array
    let mid = Math.floor(array.length/2)
    let left=mergeSort(array.slice(0,mid))
    let right=mergeSort(array.slice(mid))
    return merge(left,right)
}
function merge(arr1,arr2){
    let sorted =[]
    while(arr1.length && arr2.length){
        if(arr1[0]< arr2[0]) sorted.push(arr1.shift())
        else sorted.push(arr2.shift())
    }
    return [...sorted,...arr1,...arr2]
    // return sorted.concat(arr1,arr2)
}

const array= [4,3,2,5,6,7,2,1]
console.log(mergeSort(array))