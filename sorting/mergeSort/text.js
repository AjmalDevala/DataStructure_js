// working
//find mid index
//[seperate left and right array index]
//and impliment and find recursive functon and get the single  array
//and seperate the array and call function for check the condition
//create an empty array []
//and puch to array in side an array
// and merge the array
// and return the arrray

function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }
    let mid = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))
    return sort(left, right)
}
function sort(left, right) {
    let sorted = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right]
}

const array = [4, 3, 2, 5, 6, 7, 2, 1]
console.log(mergeSort(array))