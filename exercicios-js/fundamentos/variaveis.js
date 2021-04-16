let a = 1

while (a < 10) {
  console.log(`valor: ${a}`)
  a+=1
} 

const notas = [3.5, 7.8, 9.3, 4.6]
for(let i = 0; i < notas.length; i++) {
  console.log(`nota = ${notas[i]}`)
}

const pessoa = {
  nome: 'Joao',
  sobrenome: 'Silva',
  idade: 25,
  peso: 62
}

for(let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}

var x = 'teste'

console.log('x = ', x)
console.log('----------')
x = 'teste2'
console.log('x atualizado = ', x)