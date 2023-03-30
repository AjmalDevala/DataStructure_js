class node{
     constructor (value){
     this.value = value
     this.endWord =false
     this.children={}
     }
}

class Trie{
    insert (word){
        this.root =new node(null)
        let current =this.root
        for(let char of word){
            if(!current.children[char]){
                current.children[char] =new node(char)
            }
            current =current.children[char]
        }
        current.endWord =true
    }
    search(word){
        let current =this.root
        for(let char of word){
            if(!current.children[char]){
                return false 
            }
            current =current.children[char]
        }
        return current.endWord
    }

}
const trie = new Trie();
  
trie.insert("hello");
trie.insert("horld");

console.log(trie.search("hello"));