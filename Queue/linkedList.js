
	class Queue {
		constructor() {
			this.items = {}
			this.front = 0
			this.back = 0
		}
		enqueue(item) {
			this.items[this.back] = item
			this.back++
			return item + ' inserted'
		}
		dequeue() {
			const item = this.items[this.front]
			delete this.items[this.front]
			this.front++
			return item + ' deleted front'
		}
		peek() {
			return this.items[this.front] + " pic first One"
		}
		get printQueue() {
			return this.items;
		}
	}
	const queue = new Queue()
	console.log(queue.enqueue(7))
	console.log(queue.enqueue(2))
	console.log(queue.enqueue(6))
	console.log(queue.enqueue(4))
	console.log(queue.enqueue(6))
	console.log(queue.dequeue())
	console.log(queue.peek())
	console.log(queue.peek())
	var str = queue.printQueue;
	console.log(str)
