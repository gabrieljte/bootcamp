// document.querySelector('button').addEventListener('click', () => {alert('clicado')})
document.querySelector('button').addEventListener('click', (evt) => {alert(evt)})

let input = document.querySelector('input')
input.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
        console.log('voce apertou enter')
    } else (console.log(evt))
})