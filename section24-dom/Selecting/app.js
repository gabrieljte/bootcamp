// const imagens = document.getElementsByTagName('img')

// for (let image of imagens) {
//     image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20221124153129/Treedatastructure.png'
// }

// const squaresimgs = document.getElementsByClassName('square')

// for (let square of squaresimgs) {
//     square.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20221124153129/Treedatastructure.png'
// }

const links = document.querySelectorAll('p a')
console.log(links)
for (let link of links) {
    console.dir(link.href)
}