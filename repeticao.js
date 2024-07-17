const numerosDaSorte = [37, 14, 26, 5, 94, 87];

function validador(valor) {
  if (valor < 50 && valor % 2 == 0) {
    console.log(valor, "é par e menor que 50");
  }

  else if (valor < 50) {
    console.log(valor, "é menor que 50");
  }

  else {
    console.log(valor, "é maior que 50");
  }
}




console.log('For loop')
for (let i = 0; i < numerosDaSorte.length; i++) {
  validador(numerosDaSorte[i])
}

console.log('----------------------------')

console.log('ForEach loop')
numerosDaSorte.forEach((numeroDaSorte) => {
  validador(numeroDaSorte)
})

console.log('----------------------------')

console.log('ForOf loop')
for (let numeroDaSorte of numerosDaSorte) {
  validador(numeroDaSorte)
}