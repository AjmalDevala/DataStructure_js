class Node {
    constructor(value) {
      this.value = value;
      this.isEndOfWord = false;
      this.children = {};
    }
  }
  
  class Trie {
    insert(word) {
      this.root = new Node(null)
      let current = this.root;
  
      for (let char of word) {
        if (!current.children[char]) {
          current.children[char] = new Node(char);
        }
        current = current.children[char];
      }
      current.isEndOfWord = true;
    }
  
    search(word) {
      let current = this.root;
  
      for (let char of word) {
        if (!current.children[char]) {
          return false;
        }
        current = current.children[char];
      }
      return current.isEndOfWord;
    }
  }
  
  const trie = new Trie();
  
  trie.insert("hello");
  trie.insert("horld");
  
  console.log(trie.search("hello"));