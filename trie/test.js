class node{
    constructor (value){
        this.value =value
        this.isEndOfWord =false
        this.children ={}
    }
}

class Trie{
    insert(word){
        this.root = new node(null)
        let current =this.root
        for(let char of  word){
            if(!current.children [char]){
                
            }
        }
    }
}