// console.log("hello world from my first js file with web dev")
// alert("meu nome é gabriel")

// console.log("antes do if")
// let rand = Math.random()*10
// let randnumber = Math.ceil(rand)
// if (randnumber <= 4) {
//     console.log(`seu número é ${randnumber}, ou seja, menor ou igual a 4`)
//     console.log(randnumber)
// }
// console.log("depois do if")

// let dayOfWeek = 'quarta'
// if(dayOfWeek === 'segunda') {
//     console.log('é o pior dia da semana')
// } else if (dayOfWeek === 'sexta') {
//     console.log('sextou porra')
// } else if (dayOfWeek === 'quarta') {
//     console.log('semana passa mto devagar')
// }

// const age = 78

// if (age < 5) {
//     console.log('FREE ENTRY')
// } else if (age < 10) {
//     console.log('10$ CHILD')
// } else if (age < 65) {
//     console.log('20$ ADULT')
// } else if (age > 65) {
//     console.log('10$ SENIOR')
// }

// const dia = prompt('qual dia da semana')

// if(dia === 'segunda') {
//     console.log('eca pior dia tmnc')
// } else if (dia === 'sexta') {
//     console.log('sextouuuu')
// } else {
//     console.log('não é segunda nem sexta')
// }

const senha = prompt('digite sua senha aqui')

if (senha.length >= 6) { //senha maior que 6 letras
        if(senha.indexOf(' ') === -1) {
            console.log('senha aceita')
        } else {
            console.log('senha negada - espaços ')
        }
    } else {
    console.log('senha negada')
}