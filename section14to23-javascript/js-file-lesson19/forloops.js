let promptfor = prompt('for loops')
if (promptfor === 'sim') {
    for (let i = 1; i<= 100; i++) {
        console.log(i)
    }
    //retornara i até o 100
    
    let array1 = ['gabriel', 'biel', 'teixeira']
    //loop com arrays começa no 0, pois o primeiro index de uma array é 0
    for (let i = 0; i < array1.length; i++) {
        console.log(`index ${i} = ${array1[i]}`)
    }
} else {
    console.log('sem for loop')
}

