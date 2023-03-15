class hashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value){
        const index = this.hash(key)
        this.table[index] = value
    }
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
    }
    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                console.log(i, this.table[i]);
            }       
        }
    }
}
const table = new hashTable(10)

table.set("ajmal", 24)
table.set("ajmal", 24)
table.display()
 
console.log(table.get("phone"));

table.remove("phone")
table.display()