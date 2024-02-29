class herois {
    constructor (tipoHeroi, golpeHeroi){
        this.tipoHeroi = tipoHeroi
        this.golpeHeroi = golpeHeroi
    }
    escrever(){
        console.log(`O ${this.tipoHeroi} atacou usando ${this.golpeHeroi}!`)
    }
}

let guerreiroHeroi = new herois("guerreiro", "espada")
let magoHeroi = new herois("mago", "magia")
let mongeHeroi = new herois("monge", "antes marciais")
let ninjaHeroi = new herois("ninja", "shuriken")

guerreiroHeroi.escrever()
magoHeroi.escrever()
ninjaHeroi.escrever()
mongeHeroi.escrever()