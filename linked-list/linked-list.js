class LinkedList {
  constructor() {
    // initial setting of the linked list;
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  insertManyFromArray(valueArray) {
    // we need to reverse the order of array as we inserts from head to bottom in a linked list, otherwise it will have the last element in the array as the head
    valueArray.reverse()
    valueArray.forEach(element => {
      this.insertAtHead(element);
    });
  }

  getValueByIndex(index) {
    if (index >= this.length || index < 0) return null
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current.value;
  }

  getNodeByIndex(index) {
    if (index >= this.length || index < 0) return null
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value)
    if (index > this.length || index > this.length) return null
    if (index > 0 && index <= this.length) {
      const prev = this.getNodeByIndex(index - 1);
      prev.next = new LinkedListNode(value, prev.next)
      this.length++
    }
  }

  removeHead() {
    this.head = this.head.next;
    this.length--
  }

  removeNodeAtIndex(index) {
    if (this.length >= 0 && index >=0) {
      if (index === 0) {
        this.removeHead()
        return
      }
      if (index < this.length) {
        const prevNode = this.getNodeByIndex(index - 1);
        if (index === this.length - 1) {
          prevNode.next = null
        }
        else {
          const current = this.getNodeByIndex(index);
          prevNode.next = current.next;
        }
        this.length--;
        return
      }
    }
    console.log(`Node at index=${index} doesnt' exist`)
    return
  }

}
// This class represents a node in the linked list
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;