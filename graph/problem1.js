class Graph {
    constructor() {
      this.vertices = {};
    }
  
    addVertex(vertex) {
      this.vertices[vertex] = {};
    }
  
    addEdge(vertex1, vertex2, weight) {
      this.vertices[vertex1][vertex2] = weight;
      this.vertices[vertex2][vertex1] = weight;
    }
  
    dijkstra(start, end) {
      const distances = {};
      const visited = {};
      const previous = {};
      const queue = new PriorityQueue();
  
      for (const vertex in this.vertices) {
        distances[vertex] = Infinity;
        visited[vertex] = false;
        previous[vertex] = null;
      }
  
      distances[start] = 0;
      queue.enqueue([start, 0]);
  
      while (!queue.isEmpty()) {
        const [vertex, distance] = queue.dequeue();
  
        if (vertex === end) {
          break;
        }
  
        if (visited[vertex]) {
          continue;
        }
  
        visited[vertex] = true;
  
        for (const neighbor in this.vertices[vertex]) {
          const newDistance = distances[vertex] + this.vertices[vertex][neighbor];
  
          if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
            previous[neighbor] = vertex;
            queue.enqueue([neighbor, newDistance]);
          }
        }
      }
  
      return { distances, previous };
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
      this.queue.sort((a, b) => a[1] - b[1]);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  
  const graph = new Graph()
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addVertex('C')
  graph.addVertex('D')
  graph.addVertex('E')
  graph.addEdge('A','B',3)
  graph.addEdge('C','B',5)
  graph.addEdge('A','C',10)
  graph.addEdge('C','D',22)
  graph.addEdge('D','E',7)
  graph.addEdge('A','E',11)
  console.log(graph.dijkstra('A','B'))