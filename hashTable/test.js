class hashTable {
    constructor (){
        this .table = new Array (100)
        this .size = 0
    }
    _hash (key ){
        let total = 0
        for(let i =0  ; i < key . length ; i++){
            total += key.charCodeAt(i)
        }
        return total % this.table .length
    }
    set (key , value ){
        const index = this._hash(key)
        this.table[index] = [key ,value]
        this.size ++
    }
    get (key){
        const index = this ._hash(key)
        return this .table[index]
    }
    remove (key ){
         const index = this ._hash(key)
         this.table [index] =[]
    }
}

const ht = new hashTable()
ht.set("ajmal",6)
ht.set("afsal",7)
ht.remove("ajmal")
ht.set("ajmal",6)
console.log(ht)