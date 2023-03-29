class Graph {
    constructor(noOfVertices) {
      this.noOfVertices = noOfVertices;
      this.adj = new Map();
    }
  
    addVertex(v) {
      this.adj.set(v, []);
    }
  
    addEdges(v, e) {
      this.adj.get(v).push(e);
  
    }
  
    printGraph() {
      let keys = this.adj.keys();
      for (let i of keys) {
        let getValues = this.adj.get(i);
        let edge = "";
  
        for (let j of getValues) {
          edge += j + " ";
        }
  
        console.log(i + "-->" + edge);
      }
    }
  
    breadthFirst(start) {
      const queue = [start];
      const result = [];
      const visited = {};
      let currentVertex;
      visited[start] = true;
  
      while (queue.length) {
        currentVertex = queue.shift();
        result.push(currentVertex);
  
        this.adj.get(currentVertex).forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
      return result;
    }
  
    dfs(startingNode) {
      var visited = {};
      this.dfsHelper(startingNode, visited);
      let keys  =this.adj.keys
  
      for(let value in keys){
      this.adj.get(value).forEach((elem)=>{
        if(!visited[elem]){
          return false
        }
      })
      }
      return true
    }
    dfsHelper(vert, visited) {
      visited[vert] = true;
      // console.log(vert);
  
      var get_neighbours = this.adj.get(vert);
  
      for (var i in get_neighbours) {
        var get_elem = get_neighbours[i];
        if (!visited[get_elem]) {
          this.dfsHelper(get_elem, visited);
        }
      }
    }
  }
  
  const g = new Graph(6);
  
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  
  g.addEdges("A", "B");
  g.addEdges("C", "D");
  g.addEdges("A", "D");
  
  g.printGraph()
  
  console.log(g.breadthFirst("A"))
  console.log(g.dfs('A'))