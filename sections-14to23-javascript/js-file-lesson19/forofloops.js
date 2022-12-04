let forof = prompt('for loops')
if (forof === 'sim') {

    // let subreddits = ['soccer', 'pics', 'animes', 'food', 'basketball', 'nba']

    //     for (let subred of subreddits) {
    //     console.log(`Para ir ao subreddit de ${subred}, acesse reddit.com/r/${subred}`)
    //     }

    let cadeiras = [
        ['Gabriel', 'Mirabel', 'Giovana'],
        ['Beatriz', 'Vini', 'Duda', 'Boy']
    ]

    for (let fileiras of cadeiras) { //pode ser usado substituindo for/while em alguns casos
        for (let pessoas of fileiras) {
            console.log(pessoas)
        }
    }

} else {
    console.log('sem forof')
}