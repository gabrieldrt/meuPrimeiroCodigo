let saldoCalculado = descobrirSaldo(1000, 20)

function descobrirSaldo(vit, der){
    let saldo = vit - der
    return saldo
}

if (saldoCalculado < 10){
    console.log("O Herói tem um saldo de " + saldoCalculado + " e está no nível de Ferro")
} 
else if (saldoCalculado > 10 && saldoCalculado <= 20){
    console.log("O Herói tem um saldo de " + saldoCalculado + " e está no nível de Bronze")
}
else if (saldoCalculado > 20 && saldoCalculado <= 50){
    console.log("O Herói tem um saldo de " + saldoCalculado + " e está no nível de Prata")
}
else if (saldoCalculado > 50 && saldoCalculado <= 80){
    console.log("O Herói tem um saldo de " + saldoCalculado + " e está no nível de Ouro")
}  
else if (saldoCalculado > 80 && saldoCalculado <= 90){
    console.log("O Herói tem um saldo de " + saldoCalculado + " e está no nível de Diamante")
}
else if (saldoCalculado > 90 && saldoCalculado <= 100){
    console.log("O Herói tem um saldo de " + saldoCalculado + " e está no nível de Lendário")
}
else {
    console.log("O Herói tem um saldo de " + saldoCalculado + " e está no nível de Imortal")
}
