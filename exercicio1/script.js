let nome = prompt(`Qual o seu nome?`)
let idade = prompt(`Qual a sua idade?`)

// Ambas as variáveis estão sem valor, por isso são do tipo "undefined".
console.log(`A variável "nome" é do tipo: ${nome.typeof}`)
console.log(`A variável "idade" é do tipo: ${idade.typeof}`)
console.log(`Olá ${nome}, você tem ${idade} anos.`)