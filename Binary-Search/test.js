function sort ( array){
    let i ,j , temp
     let n= array.length
     for(i = 0 ; i < n-1 ; i++){
        let small = i
        for(j =i+1 ; j <n ; j++){
            if(array[j] < array[small]){
                small = j
            }
        }
        temp = array[small]
        array [small] = array[i]
        array[i] = temp
     }
     return array
}


function binarySearch (arr,x){
    sort (arr)
    let l =0
     let r =arr.length-1
     while (l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(arr[mid] == x){
            return mid
        }
        if(arr[mid] > x){
            r = mid-1
        }else{
            l = mid +1
        }
     }
     return -1

}

let arr =[3,2,4,6,8,4,22,1,2,4]
let target = 22
let result = binarySearch(arr,target)

result == -1 ? console.log("nodata") : console.log(result)
console.log(arr)