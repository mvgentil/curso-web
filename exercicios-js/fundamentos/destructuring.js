// ES 2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 123
  }
}

const {nome: n, idade: i} = pessoa

console.log('nome: ', n, ', idade: ', i)