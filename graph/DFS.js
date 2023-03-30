class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
  
    addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  
    // DFS Traversing Recursive
  
    depthFirstRecursive(start) {
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;
  
      (function dfs(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach((neighbour) => {
          if (!visited[neighbour]) {
            return dfs(neighbour);
          }
        });
      })(start);
      return result;
    }
  }
  
  var g = new Graph();
  
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("F");
  
  g.addEdge("A", "B");
  g.addEdge("A", "C");
  g.addEdge("B", "D");
  g.addEdge("C", "E");
  g.addEdge("D", "E");
  g.addEdge("D", "F");
  g.addEdge("E", "F");
  
  // g.depthFirstRecursive("E");
  console.log(g.depthFirstRecursive("D"));