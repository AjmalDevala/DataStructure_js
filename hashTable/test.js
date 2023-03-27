class HashTable {
    constructor(){
        this.table = new Array(100)
        this.size = 0

    }

    _hash(key){
        let hash=[]
        for(let i=0 ; i<key.length ; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }

    set(key,value){
        const index= this._hash(key)
        this.table[index] =[key,value]
        this.size++
    }
    get(key){
        const index =this._hash(key)
        return this.table[index]
    } 
    remove(key){
        const index =this._hash(key)
        this.table[index] =[]
        this.size--
    }
}

const ht = new HashTable()
ht.set("ajmla",56)
ht.remove("ajmla")
console.log(ht)