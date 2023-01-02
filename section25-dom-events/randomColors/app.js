let corpo = document.querySelector('body')
let botao = document.querySelector('#random')
let titulo = document.querySelector('h1')
let randomcolor = () => {
    let first = Math.ceil(Math.random() * 255)
    let second = Math.ceil(Math.random() * 255)
    let third = Math.ceil(Math.random() * 255)
    return `rgb(${first}, ${second}, ${third})`
}

botao.addEventListener('click', function() {
    let full = randomcolor()
    corpo.style.backgroundColor = full
    titulo.innerText = full
})
