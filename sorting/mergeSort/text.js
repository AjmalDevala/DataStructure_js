// working
//find mid index
//[seperate left and right array index]
//and impliment and find recursive functon and get the single  array
//and seperate the array and call function for check the condition
//create an empty array []
//and puch to array in side an array
// and merge the array
// and return the arrray

function mergeSort(arr){
    if(arr.length <=1) return arr
    let mid = Math.floor(arr.length/2),
    left = mergeSort(arr.slice(0,mid))
    rihgt = mergeSort(arr.slice(mid))
    console.log(left,"lefttttt")
    console.log(rihgt,"rihgt")
    return merge(left,rihgt)
}

function merge(i ,j){
    let sorted = []
    while(i.length && j.length){
        if(i[0] <j[0]) sorted.push(i.shift())
        else sorted.push(j.shift())
    }
    console.log(sorted,"sorted")
    console.log(i,"iiii")
    console.log(j,"jjjj")
 return [...sorted,...i,...j]

}


let array = [3,3,2,3,4,2,1,9,34]
console.log(mergeSort(array))