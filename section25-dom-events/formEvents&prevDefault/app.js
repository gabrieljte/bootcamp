let form = document.querySelector('form');
let input = document.querySelector('input')
let lista = document.querySelector('#tarefas')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let tarefa = input.value;
    let newli = document.createElement('li')
    lista.append(newli);
    newli.innerText = tarefa
})