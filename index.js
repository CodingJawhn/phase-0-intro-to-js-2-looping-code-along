// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]
const phrase = `surprise`
function writeCards(names, phrase) {
    let thankYou = []
    for (let i = 0; i < names.length; i++){
       thankYou.push (`Thank you, ${names[i]}, for the wonderful ${phrase} gift!`)
    }
    return thankYou
}

function countDown(n) {
    while (n > 0) {
        console.log(n)
        n -= 1
    }
    console.log(n)
}