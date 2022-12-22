//definindo
function cantar() {
    alert('abra o console')
    console.log('Everybody gonna respect the shooter, but the one in front of the gun live forever')
}

function loop() {
    for(let i = 0; i<=10; i++) {
        console.log(i)
    }
}

function bomdia() {
    console.log('bom dia')
}

//executando
 cantar()
 loop()

 //functions com argumentos

function boanoite(nome) {
    console.log(`Boa noite ${nome}, durma bem`)
}

let pessoa = prompt('nome')
boanoite(pessoa)

//functions com multiplos argumentos

//media escolar
function media(nota1,nota2,nota3) {
    console.log((nota1 + nota2 + nota3)/3) 
}

let a1 = parseInt(prompt('nota1'))
let a2 = parseInt(prompt('nota2'))
let a3 = parseInt(prompt('nota3'))

media(a1,a2,a3)

function bomdia2(primeironome, sobrenome) {
    console.log(`Bom dia ${primeironome} ${sobrenome}`)
}

function repetir(string, noftimes) {
    for (let i = 0; i <= noftimes; i++) {
        console.log(string)
        console.log(i)
    }
}

function soma(a,b) {
    let resultado = a+b
    return resultado
}