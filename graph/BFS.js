class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {this.adjacencyList[vertex] = [];
    }
}
  
    addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  
    // BFS Traversing from a to small
    breadthFirst(start) {
      const queue = [start];
      const result = [];
      const visited = {};
      let currentVertex;
      visited[start] = true;
  
      while (queue.length) {
        currentVertex = queue.shift();
        result.push(currentVertex);
  
        this.adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
      return result;
    }
  
    // BFS Traversing from a to big
    // breadthFirstSecond(start) {
    //   const queue = [start];
    //   const result = [];
    //   const visited = {};
    //   let currentVertex;
    //   visited[start] = true;
  
    //   while (queue.length) {
    //     currentVertex = queue.shift();
    //     result.push(currentVertex);
  
    //     this.adjacencyList[currentVertex]
    //       .slice()
    //       .reverse()
    //       .forEach((neighbor) => {
    //         if (!visited[neighbor]) {
    //           visited[neighbor] = true;
    //           queue.push(neighbor);
    //         }
    //       });
    //   }
    //   return result;
    // }
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
  
  console.log(g.breadthFirst("A"));
//   console.log(g.breadthFirstSecond("A"));