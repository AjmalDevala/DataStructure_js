class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;

    for (let i = word.length - 1; i >= 0; i--) {
      const char = word[i];

      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }

      currentNode = currentNode.children[char];
    }

    currentNode.isEndOfWord = true;
  }

  search(suffix) {
    let currentNode = this.root;

    for (let i = suffix.length - 1; i >= 0; i--) {
      const char = suffix[i];

      if (!currentNode.children[char]) {
        return false;
      }

      currentNode = currentNode.children[char];
    }

    return true;
  }
}

// Usage Example
const trie = new Trie();

trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

console.log(trie.search("le")); // Output: true
console.log(trie.search("na")); // Output: true
console.log(trie.search("pea")); // Output: false