const heroi = "Thor";
let xp = "3500";


if (xp <= 1000){
    console.log(`O Heroi ${heroi} está no nivel FERRO.`)
}else if (xp >= 1001 || xp <=2000 ){
    console.log(`O Heroi ${heroi} está no nivel BRONZE.`)
}else if (xp >=2001 || xp <= 3000){
    console.log(`O Heroi ${heroi} está no nivel PRATA.`)
}else if (xp >=3001 || xp <= 4000){
    console.log(`O Heroi ${heroi} está no nivel OURO.`)
}else if (xp >=4001 || xp <= 5000){
    console.log(`O Heroi ${heroi} está no nivel PLATINA.`)
}else if (xp >=5001 || xp <= 6000){
    console.log(`O Heroi ${heroi} está no nivel ASCENDENTE.`)
}else if (xp >=6001 || xp <= 7000){
    console.log(`O Heroi ${heroi} está no nivel IMORTAL.`)
}else {
    console.log(`O Heroi ${heroi} está no nivel RADIANTE.`)
}

