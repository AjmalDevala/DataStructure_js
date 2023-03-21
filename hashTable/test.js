class hashTable{
    constructor(){
        this.table=new Array(100)
        this.size = 0
    }

    _hash(key){
        let hash =0
        for(let i =0 ; i< key.length ; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }

    set (key,value){
        const index = this._hash(key)
        this.table[index]= [key,value]
        this.size++
    }
    remove(key){
        const index = this._hash(key)
        this.table[index]=[]
        this.size --
        
    }


}


const ht = new hashTable()
ht.set("ajmla",55)
ht.set("ajml",55)
ht.remove("ajml")
console.log(ht)