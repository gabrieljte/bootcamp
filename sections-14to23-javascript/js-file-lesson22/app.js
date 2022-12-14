let numbers = [1,2,3,4,5,6,7,8,9]
let moviescores = [
    {
        title: 'Parasite',
        score: 97
    },
    {
        title: '1917',
        score: 93
    },
    {
        title: 'Blade Runner 2049',
        score: 96
    }
]

//foreach

numbers.forEach(function (element) { //for of faz a mesma coisa
    if (element % 2 === 0) {//par
    console.log(element)
    }
})

moviescores.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})

//map method

const doublenumbers = numbers.map(function(element) {
    return element*2
}) 

const movietitles = moviescores.map(function(movie) {
    return movie.title
})

//arrow function
const soma = (x,y) => {return x+y}
const hello = person => {return `olá ${person}`}
//--> implicit return
const helloimplicit = person => (`olá ${person}`)

// //setTimeout e setInterval
// setTimeout(() => {console.log('HELLOOOO TIMEOUT')}, 3000) //toda apenas uma vez
// const id = setInterval(() => {console.log('HELLO INTERVAL')}, 2000) //continua rodando a cada x segundos
// //clearInterval(id)

//filter
const pares = numbers.filter(number => {
    return number % 2 === 0
})  

//reduce 
const preços = [9.9, 10.50, 22,50, 39.99, 40.99, 99.99, 150]
let preçototal = preços.reduce((total, preço) => {
    return total + preço
})

//arrow function & this
let pessoa = {
    firstname: 'Gabriel',
    lastname: 'Teixeira',
    fullname: function() {
        return `${this.firstname} ${this.lastname}` //this se refere ao object pessoa
    },
    fullnamearrow: () => {
        console.log(this) //retorna window, pois o this se refere apenas ao escopo que foi criado
        return `${this.firstname} ${this.lastname}` //retorna undefined, se refere ao object window
    },
    // intervalName: function() {
    //     setTimeout(function() { //retorna um erro, já que o settimeout não se refere ao objeto pessoa, e sim ao objeto window de forma implicita
    //         console.log(this.fullname())
    //     }, 3000)
    // }
    intervalName: function() {
        setTimeout(() => { // retorna gabriel teixeira
            console.log(this.fullname())
        }, 3000)
    }
}

//resumo: não usar arrow functions para definir metodos, pois o this funciona de maneira diferente em arrow functions e em regular functions