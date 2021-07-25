// const { expect } = require('@jest/globals');
// const { describe } = require('yargs');
const LinkedList = require('./linked-list');

describe('#insertAtHead', () => {
  test('insertAtHead adds element to the beginning of the linked list', () => {
    const ll = new LinkedList();
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(1)
  })
})

describe('#insertManyFromArray', () => {
  test('helps to insert elements from an array', () => {
    const ll = new LinkedList();
    ll.insertManyFromArray([11, 22, 33])

    expect(ll.head.value).toBe(11)
    expect(ll.head.next.value).toBe(22)
  })
})

describe('#getElementByIndex', () => {

  describe('with index less than 0', () => {
    test('returns value at index -1', () => {
      const ll = new LinkedList();
      ll.insertManyFromArray([11, 22, 33])
      expect(ll.getValueByIndex(-1)).toBeNull();
    })
  })

  describe('with index  0', () => {
    test('returns value at index 0', () => {
      const ll = new LinkedList();
      ll.insertManyFromArray([11, 22, 33])
      expect(ll.getValueByIndex(0)).toBe(11);
    })
  })

  describe('with index greater than length', () => {
    test('returns value at index greater than length of list', () => {
      const ll = new LinkedList();
      ll.insertManyFromArray([11, 22, 33])
      expect(ll.getValueByIndex(5)).toBeNull;
    })
  })

  describe('with index at the middle', () => {
    test('returns value at index greater than length of list', () => {
      const ll = new LinkedList();
      ll.insertManyFromArray([11, 22, 33])
      expect(ll.getValueByIndex(1)).toBe(22);
    })
  })
})
