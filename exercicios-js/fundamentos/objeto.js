const prod1 = {}
prod1.nome = 'iPhone'
prod1.preco = 4599.99
prod1['Desconto legal'] = 0.4 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
  nome: 'Camiseta',
  preco: 79.99,
  obj: {
    categoria: 'vestuario'
  }
}

console.log(prod2)