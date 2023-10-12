flip = () => {
    document.getElementById('card').classList.toggle('flipped')
    document.querySelector('#front .reflection').classList.toggle('move')
    document.querySelector('#back .reflection').classList.toggle('move')
}
fliptwo = () => {
    document.getElementById('card2').classList.toggle('flipped')
    document.querySelector('#front .reflection').classList.toggle('move')
    document.querySelector('#back .reflection').classList.toggle('move')
}
fliptree = () => {
    document.getElementById('card3').classList.toggle('flipped')
    document.querySelector('#front .reflection').classList.toggle('move')
    document.querySelector('#back .reflection').classList.toggle('move')
}
flipfour = () => {
    document.getElementById('card4').classList.toggle('flipped')
    document.querySelector('#front .reflection').classList.toggle('move')
    document.querySelector('#back .reflection').classList.toggle('move')
}

document.getElementById('show-btn').addEventListener('click', flip)
document.getElementById('hide-btn').addEventListener('click', flip)
document.getElementById('show-btn2').addEventListener('click', fliptwo)
document.getElementById('hide-btn2').addEventListener('click', fliptwo)
document.getElementById('show-btn3').addEventListener('click', fliptree)
document.getElementById('hide-btn3').addEventListener('click', fliptree)
document.getElementById('show-btn4').addEventListener('click', flipfour)
document.getElementById('hide-btn4').addEventListener('click', flipfour)