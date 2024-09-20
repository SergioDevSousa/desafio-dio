//preço do combustivel é uma const
//const precoEtanol = 4.09;
//const precoGasolina = 6.09;
//consumo médio do veiculo 10km/litro
//let consumoMedio = 10;
//distancia da viagem ida e volta
//let distanciaViagem = 200;
//tipo do combustivel no carro
//let tipoCombustivel = "gasolina";
//calculo de gasto do veiculo ida e volta
//let gasto = distanciaViagem / consumoMedio;

//consicional das variáveis
// if (tipoCombustivel === "etanol") {
//   let custoViagem = gasto * precoEtanol;
//     console.log(custoViagem.toFixed(2));
// } else {
//   let custoViagem = gasto * precoGasolina;
//     console.log(custoViagem.toFixed(2));
// }

// const n = 2;
// const numeroImparPar = (n % 2) === 0;

// if(n === 0){
//     console.log('Número Inválido. Escolha outro numero diferente de 0');
// } else if(numeroImparPar) {
//     console.log('é par');
// } else {
//     console.log('é impar');
// }

//media = (nota1 + nota2 + nota3)/3
//classificação:
//media < 5 = reprovado
//media entre 5 e 7 = recuperação
//media > 7 = passou no semestre

// let n1 = 7;
// let n2 = 8;
// let n3 = 10;

// let media = (n1 + n2 + n3) / 3;

// if (media < 5) {
//     console.log(`O aluno foi repovado com média ${media.toFixed(2)}`);
// } else if(media > 5 && media < 7){
//     console.log(`O aluno está em recuperação com média ${media.toFixed(2)}`);
// }else{
//     console.log(`O aluno está aprovado com média ${media.toFixed(2)}`)
// }

// let peso = 65;
// let altura = 1.70;

// let imc = peso / Math.pow(altura, 2);

// if (imc < 18.5){
//     console.log("Abaixo do peso");
// }else if (imc > 18.5 && imc < 25){
//     console.log("Peso normal")
// }else if (imc > 25 && imc < 30){
//     console.log("Acima do peso")
// }else if (imc > 30 && imc < 40){
//     console.log("Obeso")
// }else{
//     console.log("obesidade grave")
// }

let produto = 100;
let condicaoPagamento = 4;

if (condicaoPagamento === 1){
    console.log(`Sua compra a vista no débito tem 10% de desconto ${produto-(produto * 0.10)}`);
}else if (condicaoPagamento === 2){
    console.log(`Sua compra a vista no Pix tem 15% de desconto ${produto-(produto * 0.15)}`);
}else if (condicaoPagamento === 3){
    console.log(`Sua compra foi parcelada em 2x de ${produto/2}`);
}else{
    console.log(`Sua compra foi parcelada em mais de 2x ${produto+(produto * 0.10)}`);
}



