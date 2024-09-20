//crie uma classe para representar carros. Os carros possuem uma marca
//cor e um gasto medio de combustivel por kilometro rodado.
//crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos 
//de o valor gasto em reais para realizar o percurso.

// class carro{
//     marca;
//     cor;
//     mediaPorKm;

//     constructor(marca, cor, mediaPorKm){
//         this.marca = marca;
//         this.cor = cor;
//         this.mediaPorKm = mediaPorKm;
//     }

//     gastoViagem (distancia, pCombustivel){
//         return distancia * this.mediaPorKm * pCombustivel
//     }

// }

// const uno = new carro('Fiat', 'Prata', 1/12)
// console.log(uno);
// console.log(uno.gastoViagem(70, 4.60));

// const classic = new carro('Classic', 'Prata', 1/13);
// console.log(classic);
// console.log(classic.gastoViagem(70, 4.60));


//crie uma classe pra representar pessoas, para cada pessoa teremos os atributos nome, peso e altura. as pessoas devem ter a capacidade de dizerm o seu IMC = (peso / (altura * altura)) instancie uma pesso com nome de jose, 70 kilos e 1.75 de altura e peça ao jose pra dizer o valor do imc

class pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }
    imc (){
        return this.peso / (this.altura * this.altura)
    }
    classificarImc(){
        const imc = this.imc()
        if (imc < 18.5){
                return "Abaixo do peso";
            }else if (imc > 18.5 && imc < 25){
                return "Peso normal";
            }else if (imc > 25 && imc < 30){
                return "Acima do peso";
            }else if (imc > 30 && imc < 40){
                return "Obeso";
            }else{
                return "obesidade grave";
            }
    }

}
const jose = new pessoa('jose', 70, 1.75);
console.log(jose);
console.log(jose.classificarImc());

const sergio = new pessoa('sergio', 67, 1.64);
console.log(sergio);
console.log(sergio.classificarImc());