let input = prompt('o que deseja fazer?')
let tarefas = []

while (input != 'quit' ) {
    if (input == 'new') {
        let newinput = prompt('o que deseja adicionar?') 
        tarefas.push(newinput)
    }

    if (input == 'list') {
        let inicio = 0
        for (tarefa of tarefas) {
            inicio++    
            console.log(`Tarefa ${inicio} - ${tarefa}`)
        }
    }

    if (input == 'delete') {
        let deleteinput = prompt('digite o número da tarefa que deseja deletar')
        tarefas.splice(deleteinput - 1, 1)
        console.log('Lista de tarefas atualizada')
    }

    input = prompt('o que deseja fazer?')
}

console.log('voce saiu do aplicativo')




