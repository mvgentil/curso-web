//funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 5, 6, 9)
imprimirSoma()


//funcao com retorno
function soma(a, b = 0) {
  return a + b
}

console.log(soma(2, 2))