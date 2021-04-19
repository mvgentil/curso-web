function tratarErroELancar(erro) {
  throw 'mensagem de erro'
}

function gritar(obj) {
  try {
    console.log(obj.frase.toUpperCase() + '!!!')
  } catch(e) {
    tratarErroELancar(e)
  } finally {
    console.log('fim')
  }
}

const obj1 = {frase: 'matheus'}
gritar(obj1)

const obj2 = {texto: 'gentil'}
gritar(obj2)