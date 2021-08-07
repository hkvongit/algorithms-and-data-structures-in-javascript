const Stack = require('./stack');

describe('#add',()=>{
  test('insert value to the top of stack',()=>{
    const stk = new Stack();
    stk.add(5)
    expect(stk.head.value).toBe(5)
    stk.add(7)
    expect(stk.head.next.value).toBe(5)
  })
})