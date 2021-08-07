const { expect } = require('@jest/globals');
const Queue = require('./queue')

describe('#add',()=>{
  test('insert value to a queue',()=>{
    const q = new Queue()
    const firstElement = 'i am first added';
    q.add(firstElement)
    expect(q.head.value).toBe(firstElement)
    expect(q.head.next).toBe(null)
    expect(q.tail.value).toBe(firstElement)
    expect(q.tail.next).toBe(null)
  })
})

describe('#dequeue', ()=>{
  test('remove node from the queue',()=>{
    const q = new Queue()
    const nodeValueArray = [5,4,7,8]
    nodeValueArray.forEach((nodeValue)=>{
      return q.add(nodeValue)
    })
    expect(q.head.value).toBe(5)
    expect(q.head.next.value).toBe(4)
    expect(q.tail.value).toBe(8)
    expect(q.tail.next).toBe(null)
    
    q.dequeue()
    expect(q.head.value).toBe(4)
    q.dequeue()
    q.dequeue()
    expect(q.head.value).toBe(8)
    expect(q.head.next).toBeNull()
    q.dequeue()
    expect(q.head).toBeNull()
    expect(q.length).toBe(0)
  })
})

describe('#peek',()=>{
  test('looking at the first node(head) in the queue',()=>{
    const q = new Queue()
    const nodeValueArray = [5,4,7,8]
    nodeValueArray.forEach((nodeValue)=>{
      return q.add(nodeValue)
    })
    expect(q.peek()).toBe(5)
  })
})

describe('#queueToArray',()=>{
  test('converting que to Array',() => {
    const q = new Queue()
    const nodeValueArray = [5,4,8]
    nodeValueArray.forEach((nodeValue)=>{
      return q.add(nodeValue)
    })
    const queueToArray = JSON.stringify([
      {position: 1, value: 5},
      {position: 2, value: 4},
      {position: 3, value: 8},
    ])
    expect(JSON.stringify(q.toArray())).toBe(queueToArray)
  })
})