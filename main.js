document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name : "bee",
            src : "assets/bee.png"
        },
        {
            name : "bee",
            src : "assets/bee.png"
        },
        {
            name : "bird",
            src : "assets/bird.png"
        },
        {
            name : "bird",
            src : "assets/bird.png"
        },
        {
            name : "cat",
            src : "assets/cat.png"
        },
        {
            name : "cat",
            src : "assets/cat.png"
        },
        {
            name : "cloud",
            src : "assets/cloud.png"
        },
        {
            name : "cloud",
            src : "assets/cloud.png"
        },
        {
            name : "frog",
            src : "assets/frog.png"
        },
        {
            name : "frog",
            src : "assets/frog.png"
        },
        {
            name : "monkey",
            src : "assets/monkey.png"
        },
        {
            name : "monkey",
            src : "assets/monkey.png"
        }
    ]

const grid = document.querySelector('.grid');
const score = document.querySelector('.score');
const congrat = document.querySelector('.congrat');
const tryAgain = document.querySelector('.try-again');
let showCard = false

// temp array
let chosenCard = []
let chosenCardId = []
let cardsWon = []

cardArray.sort(() => 0.5-Math.random());
function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src','assets/block (1).png')
        card.setAttribute('class','img')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
// creat Board
createBoard()
// function noflip () {
//     let flip = null
//     return flip
// }

function checkMatches () {
    let cards = document.querySelectorAll('img')
    let optionOneId = chosenCardId[0]
    let optionTwoId = chosenCardId[1]
    if (chosenCard[0] === chosenCard[1]) {
       // alert("You got a match")
        cards[optionOneId].setAttribute('src','assets/coverBG.png')
        cards[optionTwoId].setAttribute('src','assets/coverBG.png')
        cardsWon.push(chosenCard)
    }else {
       // alert("Try again")
        cards[optionOneId].setAttribute('src','assets/block (1).png')
        cards[optionTwoId].setAttribute('src','assets/block (1).png')
    }
    chosenCard = []
    chosenCardId = []
    score.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        showCard = true
        grid.innerHTML   = "<h3>congratulation</h3>"
        //const card = document.querySelector('.congrat')
        grid.style.display = 'none'
        congrat.style.display = 'block'
    }
}
function restart () {
    cardsWon = []
    grid.style.display = 'block'
    congrat.style.display = 'none'
    createBoard()
}

if(tryAgain) {
    tryAgain.addEventListener('click', restart)
}

function flipCard () {
    let CardId = this.getAttribute('data-id')
    chosenCard.push(cardArray[CardId].name)
    chosenCardId.push(CardId)
    this.setAttribute('src',cardArray[CardId].src)
    if (chosenCard.length === 2) {
        setTimeout(checkMatches, 500)
    }
}
// if (showCard) {
//     const card = document.querySelector('.congrat')
//     card.style.display = ''
// }

// const grid = document.querySelector('.grid');
// const score = document.querySelector('.score');
    
//     cardArray.sort(() => 0.5-Math.random());
//     function createBoard () {
//         for (let i = 0; i < cardArray.length; i++) {
//             let card = document.createElement('img')
//             card.setAttribute('class','img')
//             card.setAttribute('data-id',i)
//             card.setAttribute('src','assets/block (1).png')
//             card.addEventListener('click',flipCard)
//             grid.appendChild(card);
//         }
//     }
//      createBoard()

// let chosenCard = [];
// let chosenCardId = [];
// let cardsWon = [];

//     function checkMatches () {
//         let cards = document.querySelectorAll('img')
//         const optionOneId = chosenCardId[0];
//         const optionTwoId = chosenCardId[1];
//         if (chosenCard[0] === chosenCard[1]) {
//             //alert("You got a match")
//             cards[optionOneId].setAttribute('src', 'assets/white.jpg')
//             cards[optionTwoId].setAttribute('src', 'assets/white.jpg')
//             cardsWon.push(chosenCard)
//         }else {
//             // alert("sorry try it again")
//             cards[optionOneId].setAttribute('src', 'assets/block (1).png')
//             cards[optionTwoId].setAttribute('src', 'assets/block (1).png')
//         }
//         chosenCard = []
//         chosenCardId = []
//         score.textContent = cardsWon.length
//         if (cardArray.length/2 === cardsWon.length) {
//             score.innerHTML = "<h2 style='color:purple'>CONGRATULATION<h2>"
//         }
//     }
//      function flipCard() {
//          let cardId = this.getAttribute('data-id')
//             chosenCard.push(cardArray[cardId].name)
//             chosenCardId.push(cardId)
//             this.setAttribute('src',cardArray[cardId].src)
//             if (chosenCard.length === 2) {
//                 setTimeout(checkMatches, 500)
//             }
//      }
});