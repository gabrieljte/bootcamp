function roubo() {
    let valorroubo = 1000
    function reportagemroubo() {
        console.log(`Foram roubados ${valorroubo} reais do banco`)
    }
    reportagemroubo()
}

//high end function

function rodar2vezes(func) {
    func()
    func()
}

function quadrado() {
    console.log(2*2)
}

rodar2vezes(quadrado); //retorna 4 duas vezes

//returning func

function roleta () {
    let baladamorte = Math.ceil((Math.random() * 5 + 1))
    let sorteado = Math.ceil((Math.random() * 5 + 1))
    console.log(sorteado)
    console.log(baladamorte)
    if (sorteado === baladamorte) {
        return function() {
            console.log('voce morreu, que pena! deseja tentar sair vivo novamente?')
            console.log(sorteado)
        } 
    } else {
        return function () {
            console.log('voce saiu vivo, mas ninguém sabe a próxima vez')
            console.log(sorteado)
        }
    }
}

//defining methods

const meusmetodos = {
    quadrado(x) {return x*x}, //não precisa da keyword function
    cubo(x) {return x**3}
}

//this

let gabriel = {
    primeiro: 'Gabriel',
    ultimo: 'Teixeira',
    fullname() {return console.log(`${this.primeiro} ${this.ultimo}`)}
}

const fullnamegabriel = gabriel.fullname; //retorna undefined undefined
