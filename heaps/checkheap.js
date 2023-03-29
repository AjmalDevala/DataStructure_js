class heap {
    constructor(element) {
        this.value = element;
    }

    check() {
        let root = this.value[0];
        let leftChild = this.value[1];
        let rightChild = this.value[2];
        if (root > leftChild && root > rightChild) {
            console.log("max heap");
        } else {
            console.log("Min heap");
        }
    }
}

let arr = [1, 5, 10, 6, 8, 12, 15]
let a = new heap(arr);
a.check();

let ar = [20,15,18,10,8,16,17]
let b = new heap(ar)
b.check();