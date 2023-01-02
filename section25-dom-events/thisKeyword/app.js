let makeColor = () => {
    let a = Math.ceil(Math.random()*255)
    let b = Math.ceil(Math.random()*255)
    let c = Math.ceil(Math.random()*255)
    return `rgb(${a}, ${b}, ${c})`
}

const buttons = document.querySelectorAll('button')
// for (let btn of buttons) {
//     btn.addEventListener('click', () => {
//         btn.style.backgroundColor = makeColor()
//         btn.style.color = makeColor()
//     })
// }

const h1s = document.querySelectorAll('h1')
// for (let h1 of h1s) {
//     h1.addEventListener('click', () => {
//         h1.style.backgroundColor = makeColor()
//         h1.style.color = makeColor() 
//     })
// }

function colorize() { //a keyword this dentro do eventlistener se refere ao elemento clicado
    this.style.color = makeColor()
    this.style.backgroundColor = makeColor()
}

for (let btn of buttons) {btn.addEventListener('click', colorize)}
for (let h1 of h1s) {h1.addEventListener('click', colorize)}


