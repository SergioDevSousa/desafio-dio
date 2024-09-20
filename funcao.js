// function verificaIdade(idade){
//     if (idade > 18){
//         return "maior de idade";
//     }else{
//         return "menor de idade";
//     }
// }
// console.log(verificaIdade(12));

function precoDeVenda(vProduto, cPagamento){
    if (cPagamento === 1){
        return `Sua compra a vista no débito tem 10% de desconto ${vProduto-(vProduto * 0.10)}`;
    }else if (cPagamento === 2){
        return `Sua compra a vista no Pix tem 15% de desconto ${vProduto-(vProduto * 0.15)}`;
    }else if (cPagamento === 3){
        return `Sua compra foi parcelada em 2x de ${vProduto / 2}`;
    }else{
        return `Sua compra foi parcelada em mais de 2x ${vProduto+(vProduto * 0.10)}`;
    }
}
console.log(precoDeVenda(100, 4))

