let nomeHeroi = "Popó" 
let xpHeroi = 20000
let nivelHeroi = "a definir"

if(xpHeroi < 1000) {
    nivelHeroi = "Ferro"
    console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
}
    else if ((xpHeroi > 1000) && (xpHeroi<= 2000)){
        nivelHeroi = "Bronze"
        console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
    }
    else if ((xpHeroi > 2000) && (xpHeroi <= 5000)){  
        nivelHeroi = "Prata"
        console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
    }
    else if ((xpHeroi > 5000) && (xpHeroi <=7000)){
        nivelHeroi = "Ouro"
        console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
    }
    else if ((xpHeroi > 7000) && (xpHeroi <= 8000)){
        nivelHeroi = "Platina"
        console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
    }
    else if ((xpHeroi > 8000) && (xpHeroi <= 9000)){
        nivelHeroi = "Ascendente"
        console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
    }
    else if ((xpHeroi > 9000) && (xpHeroi <=10000)){
        nivelHeroi = "Imortal"
        console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
    }
    else {
        nivelHeroi = "Radiante"
        console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
    }
