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
}

// This class represents a node in the linked list
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;