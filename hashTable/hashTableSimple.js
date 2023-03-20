class hashTable {
    constructor(){
        this.table = new Array(100)
        this.size = 0
    }
    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.table.length
    }
    set(key, value){
        const index = this.hash(key)
        this.table[index] = [key, value]
        this.size++
    }
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index = this.hash(key)
        this.table[index] = []
    }
  
}
const ht = new hashTable()
ht.set("ajmal", 4)
ht.set("fsl", 94)
ht.set("ameer", 4)

// console.log(table.get("phone"));
ht.remove("ameer")
console.log(ht)