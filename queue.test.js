const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    expect(queue.size()).toEqual(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
   const queue = new Queue()
    queue.add('item1')
    expect(queue.size()).toEqual(1)
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add('item1', 'item2', 'item3')
    expect(queue.peek()).toEqual('item1')
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add('item1', 'item2', 'item3')
    expect(queue.dequeue()).toEqual('item1')
  })
})