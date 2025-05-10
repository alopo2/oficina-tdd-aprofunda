class Queue {
  elements
  constructor(){
    this.elements = []
  }
//verifica o tamanho da fila  
  size(){
    return this.elements.length
  }

//Deve adicionar um item na fila
  add(item){
    return this.elements.push(item)
  }

//Deve escolher o primeiro item da fila
  peek(){
    if(this.size === 0){
      return 'A fila está vazia'
    }
    return this.elements[0]
  }

//Deve remover o primeiro item da fila
  dequeue(){
    if(this.size === 0){
      return 'A fila está vazia'
    }
    return this.elements.shift()
  }
}

module.exports = Queue