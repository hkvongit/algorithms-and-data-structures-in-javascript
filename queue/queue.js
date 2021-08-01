class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  peek(value) {
    if(this.head){
      return this.head.value
    }
    return null
  }

  add(value) {
    const newNode = new QueueNode(value, null)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
      this.head.next = null;
      this.length++
      return;
    }
    if (!this.head.next) {
      this.head.next = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (!!this.head.value) {
      this.head = this.head.next;
      this.length--;
    }
    return
  }

  toArray(){
    let nodeArray = []
    if(this.head){
      let currentNode = this.head;
      for(let i=0; i< this.length; i++){
        if(currentNode){
          nodeArray.push({position:i+1, value: currentNode.value})
          currentNode = currentNode.next;
        }
      }
    }
    console.log(nodeArray)
    return nodeArray
  }
  // addManyFromArray(){

  // }

  remove() {
    if (this.head === null) {
      return
    }
    this.head = this.head.next;
    this.length--
  }

}

class QueueNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = Queue;