// const { expect } = require('@jest/globals');
// const { describe } = require('yargs');
const { expect } = require('@jest/globals');
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

describe('#insertAtIndex', () => {

  describe('insert at index 0', () => {
    test('insert at given index', () => {

      const ll = new LinkedList();
      ll.insertManyFromArray([11, 12, 13])
      ll.insertAtIndex(0, 30)
      expect(ll.getValueByIndex(0)).toBe(30)
    })
  })

  describe('insert at end of list', () => {
    test('insert at given index', () => {

      const ll = new LinkedList();
      ll.insertManyFromArray([11, 12, 13])
      const length = ll.length
      ll.insertAtIndex(length, 30)
      expect(ll.getValueByIndex(length)).toBe(30)
    })
  })

  describe('insert at position less than 0', () => {
    test('insert at given index', () => {

      const ll = new LinkedList();
      ll.insertManyFromArray([11, 12, 13])
      ll.insertAtIndex(-1, 30)
      expect(ll.getValueByIndex(-1)).toBe(null)
    })
  })


  describe('insert at position greater than length', () => {
    test('insert at given index', () => {

      const ll = new LinkedList();
      ll.insertManyFromArray([11, 12, 13])
      ll.insertAtIndex(5, 30)
      expect(ll.getValueByIndex(5)).toBe(null)
    })
  })

  describe('insert at middle position', () => {
    test('insert at given index', () => {

      const ll = new LinkedList();
      ll.insertManyFromArray([11, 12, 14, 15])
      ll.insertAtIndex(2, 30)
      expect(ll.getValueByIndex(2)).toBe(30)
    })
  })
})

describe('#removeNodeAtIndex', () => {
  describe("removing element from head",()=>{

    test('removes node at a particular index', ()=>{
      const ll = new LinkedList()
      ll.insertManyFromArray([10, 20, 30])
      ll.removeNodeAtIndex(0) 
      expect(ll.getValueByIndex(0)).toBe(20) 
    })
  })

  describe("removing element from end",()=>{

    test('removes node at a particular index', ()=>{
      const ll = new LinkedList()
      ll.insertManyFromArray([10, 20, 30])
      ll.removeNodeAtIndex(2)
      const length = ll.length 
      expect(ll.getValueByIndex(length - 1)).toBe(20) 
    })
  })

  describe("removing element from middle",()=>{

    test('removes node at a particular index', ()=>{
      const ll = new LinkedList()
      ll.insertManyFromArray([10, 20, 30])
      ll.removeNodeAtIndex(1)
      expect(ll.getValueByIndex(1)).toBe(30) 
    })
  })
  
  describe("removing element from non existing index",()=>{

    test('removes node at negative index', ()=>{
      const ll = new LinkedList()
      ll.insertManyFromArray([10, 20, 30])
      ll.removeNodeAtIndex(-2)
      const length = ll.length 
      expect(ll.getValueByIndex(-2)).toBeNull
    })

    test('removes node at above length', ()=>{
      const ll = new LinkedList()
      ll.insertManyFromArray([10, 20, 30])
      ll.removeNodeAtIndex(5)
      const length = ll.length 
      expect(ll.getValueByIndex(5)).toBeNull
    })
    
  })

})