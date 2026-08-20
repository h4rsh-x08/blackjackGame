
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i]
    }
   }
   sumEl.textContent = "Sum: " + sum

   
   