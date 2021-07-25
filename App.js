const LinkedList = require("./linked-list/linked-list");

const sampleLL = new LinkedList()
console.log("1 ->", sampleLL);

sampleLL.insertAtHead(10);
console.log("2 ---->", sampleLL);

//Accessing the value of head
console.log("Accessing the value of head ->", sampleLL.head.value)

sampleLL.insertAtHead(22);
console.log("3 ---------->", sampleLL);

sampleLL.insertAtHead(33);
console.log("4 -------------------->", sampleLL);

/**
OUTPUT:
============
harikrishnan@haris-MacBook-Air algorithms-and-data-structures-in-javascript % node App.js
1 -> LinkedList { head: null, length: 0 }
2 ----> LinkedList {
  head: LinkedListNode { value: 10, next: null },
  length: 1
}
Accessing the value of head -> 10
3 ----------> LinkedList {
  head: LinkedListNode {
    value: 22,
    next: LinkedListNode { value: 10, next: null }
  },
  length: 2
}
4 --------------------> LinkedList {
  head: LinkedListNode {
    value: 33,
    next: LinkedListNode { value: 22, next: [LinkedListNode] }
  },
  length: 3
}
 */