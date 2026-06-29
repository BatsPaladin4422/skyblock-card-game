if(stuff.substring(0, 8) != "#builder") throw null;

let modifyingDeckID = Number.parseInt(stuff.substring(9))
console.log(modifyingDeckID)

let deck;
try {
    deck = (JSON.parse(localStorage.getItem("allDecks")))[modifyingDeckID].cards
} catch {
    deck = []
}
let deckSize = deck.length
let twoOffs = ["bigBrain","handyBloodChalice","helpFromTheAbove","manaPool","archer","berserk","healer","mage","tank","flintArrow"]
let unimplemented = ["lethality","firstStrike","bigBrain","healer","tank","tacticalInsertion","spiritMask"]

infoBox.style.left = 0.10 * tileWidth
infoBox.style.top = 0.10 * tileWidth

let saveDeckButton = document.createElement("div")

saveDeckButton.classList.add("saveDeckButton")

saveDeckButton.innerText = "\nSave Deck"

saveDeckButton.onclick = (() => {
    saveDeck()
})

body.appendChild(saveDeckButton)

{
    let x = width / 2 - 1.10 * tileWidth;
    let y = 0.10 * tileWidth;

    for(name in cardNames) {
        if(fusions.includes(name) || unimplemented.includes(name)) continue;
        let duplicate = name
        let ref = document.createElement("div")
        x += 1.10 * tileWidth
        if(x + tileWidth > width) {
            x = width / 2
            y += 1.10 * tileWidth
        }
        ref.classList.add("tile")
        ref.innerText = cardNames[name]
        ref.style.top = y
        ref.style.left = x
        body.appendChild(ref)
        ref.onclick = (() => {
            let current = 0
            for(card of deck) {
                if(card == duplicate) current++;
            }
            if(twoOffs.includes(duplicate)) {
                if(current >= 2) return;
            } else if(current >= 1) return;
            if(deckSize >= 8) return;
            deckSize++;
            deck[deck.length] = duplicate
            displayDeck()
        })
        ref.onmouseover = (() => {
            infoBox.innerText = cardDescriptions[duplicate]
        })
    }
}

function displayDeck() {
    let x = -tileWidth;
    let y = 0.10 * tileWidth;
    let displays = document.getElementsByClassName("deckDisplay")
    let len = displays.length
    for(let i = 0; i < len; i++) {
        displays.item(0).remove()
    }
    for(let i = 0; i < deck.length; i++) {
        let duplicate = i
        let card = deck[i]
        if(card == "null") continue;
        let ref = document.createElement("div")
        x += 1.10 * tileWidth
        if(x + tileWidth > width / 2) {
            x = 0.10 * tileWidth
            y += 1.10 * tileWidth
        }
        ref.classList.add("tile")
        ref.classList.add("deckDisplay")
        ref.innerText = cardNames[card]
        ref.style.top = y
        ref.style.left = x
        body.appendChild(ref)
        ref.onmouseover = (() => {
            infoBox.innerText = cardDescriptions[card]
        })
        ref.onclick = (() => {
            deckSize--;
            deck[duplicate] = "null"
            displayDeck()
        })
    }
    infoBox.style.top = y + 1.10 * tileWidth
}

displayDeck()

function saveDeck() {
    if(deckSize < 8) return;
    let allDecks = JSON.parse(localStorage.getItem("allDecks"))

    let savedDeck = {
        cards: [],
        size: deckSize
    }

    for(card of deck) {
        if(card != "null") savedDeck.cards[savedDeck.cards.length] = card;
    }

    allDecks[modifyingDeckID] = savedDeck

    localStorage.setItem("allDecks", JSON.stringify(allDecks))


    let url = document.URL
    url = url.substring(0, url.length - stuff.length)
    window.location.href = url + `#selector`
    window.location.reload()
}