// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')
  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura:')
  const largura = prompt('Digite a largura:')
  const retangulo = altura * largura
  return console.log(retangulo)
} // * OK

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt('Digite o ano atual:')
  const anoDeNascimento = prompt('Digite o ano de nascimento:')
  const idade = anoAtual - anoDeNascimento
  return console.log(idade)
} // * OK

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const IMC = peso / (altura * altura)
  return IMC
} // * OK

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome:')
  const idade = prompt('Digite sua idade:')
  const email = prompt('Digite seu email:')
  return console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  )
} // * OK

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Qual sua primeira cor favorita?')
  const cor2 = prompt('Qual sua segunda cor favorita?')
  const cor3 = prompt('Qual sua terceira cor favorita?')
  const arr = [cor1, cor2, cor3]
  return console.log(arr)
} // * OK

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
} // * OK

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
} // * OK

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length
} // * OK

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
} // * OK

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array[array.length - 1]
  return ultimoElemento
} // * OK

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array.shift()
  const ultimoElemento = array.pop()
  array.push(primeiroElemento)
  array.unshift(ultimoElemento)
  return array
} // * OK

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()
} // * OK

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt('Digite o ano atual:')
  const anoNasci = prompt('Digite seu ano de nascimento:')
  const anoCarId = prompt('Digite o ano de emissão do RG:')

  const idade = anoAtual - anoNasci
  console.log(idade)

  return console.log(idade <= 20 || idade <= 50 || idade > 50)
} // ?

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  if (ano % 400 === 0) return true
  else if (ano % 4 === 0 && ano % 100 != 0) return true
  else return false
} // * OK

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const respostaPositiva = 'sim'
  const respostaNegativa = 'nao'

  const idade = prompt('Você tem mais de 18 anos?')
  const escolaridade = prompt('Você possui ensino médio completo?')
  const horario = prompt(
    'Você possui disponibilidade exclusiva durante os horários do curso?'
  )

  console.log(idade)
  console.log(escolaridade)
  console.log(horario)

  if (idade && escolaridade && horario === respostaPositiva)
    return console.log(true)
  else if (idade === respostaNegativa) return console.log(false)
  else if (escolaridade === respostaNegativa) return console.log(false)
  else if (horario === respostaNegativa) return console.log(false)
  else return console.log(false)
  // else return false
} // ?
// checaValidadeInscricaoLabenu()
