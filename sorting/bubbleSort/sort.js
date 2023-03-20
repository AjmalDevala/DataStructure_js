// function bubbleSort(arr) {
//     let swapped;
//     for (var i = 0; i < arr.length - 1; i++) {
//       swapped = false;
//       for (var j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//           var temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//           swapped = true;
//         }
//       }
//       if (!swapped) break;
//     }
//   }
  
//   let arr = [1, 23, 65, 3, 2, 1];
  
//   bubbleSort(arr);
//   console.log(arr);



class hashtable {
  constructor(){
    this .table= new Array(100)
    this .size = 0
  }  


  _hash (key){
    let total =0
    for(let i = 0 ; i< key.length ;i++ ){
      total += key.charCodeAt(i)
    }
    return total % this.table.length
  }

  set(key, value){
    let index = this._hash(key)
    this.table[index]= [key,value]
     this.size++
  }
  get(key){
    let index = this ._hash(key )
    return this.table[index]
  }
  remove(key){
    let index = this ._hash(key)
    this.table[index]= []
   this.size --
  }

}

const  ht= new hashtable()
ht.set("ajmal" ,45)
ht.set("afsa" ,5)
// console.log(ht)
console.log(ht.remove("ajmal"))
console.log(ht)
ht.set("ajmal", 45)
console.log(ht)