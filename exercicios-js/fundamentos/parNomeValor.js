// par nome/valor
const saudacao = 'Opa' // contexto lexico 1 

function exec() {
  const saudacao = 'Falaaa' // contexto lexico 2
  return saudacao
}

//objetos sao grupos aninhados de pares nome/valor
const cliente= {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua xv',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)