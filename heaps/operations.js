function insert(heap, value) {
    heap.push(value);
    let currIndx = heap.length - 1;

    while (currIndx > 0) {
        let parent = Math.floor((currIndx - 1) / 2);
        if (heap[currIndx] < heap[parent]) {
            [heap[currIndx], heap[parent]] = [heap[parent], heap[currIndx]];
            currIndx = parent;
        } else {
            break;
        }
    }
}

function remove(heap) {
    const n = heap.length;
    [heap[0], heap[n - 1]] = [heap[n - 1], heap[0]];
    const removeValu = heap.pop();

    let currIndx = 0;
    // shift down moving
    while (2 * currIndx + 1 < heap.length) {
        // there check left child exist or not
        let leftChild = 2 * currIndx + 1;
        let rightChild = 2 * currIndx + 2;
        let minChildIndx = rightChild < heap.length && heap[rightChild] < heap[leftChild]
                ? rightChild
                : leftChild;

        if (heap[minChildIndx] < heap[currIndx]) {
            [heap[currIndx], heap[minChildIndx]] = [heap[minChildIndx],heap[currIndx],];
            currIndx = minChildIndx;
        } else {
            break;
        }
    }
    return removeValu;
}

function secondLargest(heap){
    if (heap[1] > heap[2] ){
        return heap[1]
    }else{
        return heap[2]
    }
}

let heap = [2, 4, 25, 67, 10];
insert(heap, 50);
insert(heap, 87);
insert(heap, 15);
insert(heap, 3);
remove(heap);
console.log(heap)
console.log(secondLargest(heap))