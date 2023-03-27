class node{
    constructor(value){
        this.value =value
        this.endWord =false
        this.child ={}
    }
}

class trie{
    insert(word){
        this.root =new node(null)
        let current =this.root
        for(let char of word){
            if(!current.child[char]){
                current.child[char]=new node(char)
            }
            current =current.child[char]
        }
        current.endWord =true
    }
}