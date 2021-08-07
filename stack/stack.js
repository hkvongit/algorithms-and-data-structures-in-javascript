class Stack{
  constructor(){
    this.head = null;
    this.tail = null;
    this.head = null;
  }
  add(value){
    const newNode = new StackNode(value, null)
    if(!this.head){
      this.head =  newNode;
      this.tail = newNode;
    }
    else{
      this.head.next = newNode;
      this.head = newNode;
    }
    this.length++
  }

}

class StackNode {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

module.exports = Stack;