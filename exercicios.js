// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
   const altura = prompt('Qual a altura do retângulo?')
   const largura = prompt('Qual a largura do retângulo?')
   const resultado = altura * largura

   console.log(resultado)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = prompt('Em que ano estamos?')
  const anoDeNascimento = prompt('Em que ano você nasceu?')

  console.log(anoAtual - anoDeNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const Imc = peso/(altura*altura).toFixed(2)

  return Imc
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt('Qual o seu nome?')
  const idade = prompt('Qual sua idade?')
  const email = prompt('Qual seu e-mail?')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Qual sua primeira cor favorita?')
  const cor2 = prompt('Qual sua segunda cor favorita?')
  const cor3 = prompt('Qual sua terceira cor favorita?')

  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

    return string.toUpperCase()
    
}

retornaStringEmMaiuscula('Hoje está um lindo dia!')


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const calculo = custo / valorIngresso

  return calculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]]

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual o seu ano de nascimento?"))
  const anoEmissaoIdentidade = Number(prompt("Qual ano a sua carteira de identidade foi emitida?"))
  const idade = anoAtual - anoNascimento

  const condicao1 = (idade <= 20) && (anoEmissaoIdentidade + 5) <= anoAtual
  const condicao2 = (idade > 20 && idade <= 50) && (anoEmissaoIdentidade + 10) <= anoAtual
  const condicao3 = idade > 50 && (anoEmissaoIdentidade + 15) < anoAtual
  
  console.log(condicao1 || condicao2 || condicao3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  const multiplo400 = ano % 400 === 0;
  const multiplo4 = ano % 4 === 0;
  const naoMultiplo100 = ano % 100 != 0;

  return multiplo400 || (multiplo4 && naoMultiplo100);
}


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const idade = prompt("Você tem mais de 18 anos?")
  const escolaridade = prompt("Você tem ensino médio completo?")
  const horario = prompt("Você tem disponibilidade de horário?")

  const resultado = idade === "sim" && escolaridade === "sim" && horario === "sim"
  console.log(resultado)

}