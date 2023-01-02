let botao2 = document.querySelector('#b2')
botao2.onclick = function() {console.log('oi botão 2')}

const scream = _ => (console.log('ola'))
const grito = _ => (console.log('OLAAAAAAAAAAAAA'))

// botao2.onmouseenter = scream;
// botao2.onmouseenter = grito; //'grito' passa por cima de screm

botao2.addEventListener('mouseenter', scream) //com event listener, é possivel ter varios eventos num mesmo elemento, sem overwrite
botao2.addEventListener('mouseenter', grito)

let botao3 = document.querySelector('#b3')
botao3.addEventListener('mouseenter', () => {
    alert('ola')
})