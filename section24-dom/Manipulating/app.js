// // let links = document.querySelectorAll(`a`)

// // for (let link of links) {
// //     link.innerText = 'sou um link <a>'
// // }

// let tituloa = () => {
//     return document.querySelector('h1').innerHTML = '<a href="">Silkie Chicken</a>'
// } 

// tituloa()

// changing style
let h1 = document.querySelector('h1')
h1.style.color = 'green'

let alink = document.querySelectorAll('a')
for (let link of alink) {
    link.style.color = '#FF0000'
    link.style.textDecoration = 'none'
}

//--------------------//
//uma maneira de mexer com classes
let h2 = document.querySelector('h2')
// h2.setAttribute('class', 'purple border')
//jeito mais facil -> classList
console.log(h2.classList)
h2.classList.add('purple')

// let ola = 'ola'

// for (let p of document.querySelectorAll('p')) {
//     p.innerText = ola
// }