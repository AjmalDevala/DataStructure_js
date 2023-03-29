class Node {
    constructor(value) {
      this.value = value;
      this.isEndOfWord = false; // false by default, a green node means this flag is true
      this.children = {}; // children are stored as Map, where key is the letter and value is a TrieNode for that letter
    }
  }
  
  class Trie {
    constructor() {
      this.root = new Node(null);
    }
  
    insert(word) {
      let current = this.root;
      // iterate through all the characters of word
      for (let character of word) {
        // if node doesn't have the current character as child, insert it
        if (current.children[character] === undefined) {
          current.children[character] = new Node(character);
        }
        // move down, to insert next character
        current = current.children[character];
      }
      // mark the last inserted character as end of the word
      current.isEndOfWord = true;
    }
  
    search(word) {
      let current = this.root;
      // iterate through all the characters of word
      for (let character of word) {
        if (current.children[character] === undefined) {
          // could not find this character in sequence, return false
          return false;
        }
        // move down, to match next character
        current = current.children[character];
      }
      // found all characters, return true if last character is end of a word
      return current.isEndOfWord;
    }
  }
  
  const trie = new Trie();
  
  // insert few words
  trie.insert("CAT");
  trie.insert("DOG");
  
  // search something
  console.log(trie.search("MAT")); // false
  console.log(trie.search("DOGr")); // true