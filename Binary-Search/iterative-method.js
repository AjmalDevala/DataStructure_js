const binarySearch = (arr,x) => {
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

let arr = [10,30,40,50,60,20]
let x = 40
let result = binarySearch(arr,x)
result == -1 ? console.log("NO Founded") : console.log(result)



