if(stuff.substring(0, 9) != "#selector") throw 0;

let type = stuff.substring(10)

let decks;

try {
    decks = JSON.parse(localStorage.getItem("allDecks"))
    if(decks) {} else throw("")
} catch {
    localStorage.setItem("allDecks", `[{"cards":["witherGoggles","yetiSword","midasStaff","manaPool","mage","mage","pocketEspressoMachine","wandOfHealing"],"size":8},{"cards":["werewolfHelmet","valkyrie","silentDeath","helpFromTheAbove","handyBloodChalice","handyBloodChalice","zombieSword","steakStake"],"size":8}]`)
    decks = JSON.parse(localStorage.getItem("allDecks"))
}

{
    let x = -tileWidth;
    let y = 0.20 * tileWidth;
    let count = 0

    for(let deck of decks) {
        let duplicate = count++
        let ref = document.createElement("div")
        x += 1.10 * tileWidth
        if(x + tileWidth > width) {
            x = 0.1 * tileWidth
            y += 1.10 * tileWidth
        }
        ref.classList.add("tile")
        ref.innerText = `Deck ${duplicate}`
        ref.style.top = y
        ref.style.left = x
        body.appendChild(ref)
        if(type == "deck1") {
            ref.ondblclick = (() => {
                localStorage.setItem("deck1", JSON.stringify(JSON.parse(localStorage.getItem("allDecks"))[duplicate]))
                let url = document.URL
                url = url.substring(0, url.length - stuff.length)
                window.location.href = url + `#selector-deck2`
                window.location.reload()
            })
        } else if (type == "deck2") {
            ref.ondblclick = (() => {
                localStorage.setItem("deck2", JSON.stringify(JSON.parse(localStorage.getItem("allDecks"))[duplicate]))
                let url = document.URL
                url = url.substring(0, url.length - stuff.length)
                window.location.href = url + `#play`
                window.location.reload()
            })
        } else if (type.substring(0, 3) == "bot") {
            ref.ondblclick = (() => {
                localStorage.setItem("deck1", JSON.stringify(JSON.parse(localStorage.getItem("allDecks"))[duplicate]))
                let url = document.URL
                url = url.substring(0, url.length - stuff.length)
                window.location.href = url + `#play-${type.substring(4)}`
                window.location.reload()
            })
        } else ref.ondblclick = (() => {
            let url = document.URL
            url = url.substring(0, url.length - stuff.length)
            window.location.href = url + `#builder-${duplicate}`
            window.location.reload()
        })
    }

    {
        let duplicate = count++
        let ref = document.createElement("div")
        x += 1.10 * tileWidth
        if(x + tileWidth > width) {
            x = 0.1 * tileWidth
            y += 1.10 * tileWidth
        }
        ref.classList.add("tile")
        ref.innerText = `+`
        ref.style.top = y
        ref.style.left = x
        body.appendChild(ref)
        ref.ondblclick = (() => {
            let url = document.URL
            url = url.substring(0, url.length - stuff.length)
            window.location.href = url + `#builder-${duplicate}`
            window.location.reload()
        })
    }
}

let backButton = document.createElement("div")

backButton.classList.add("saveDeckButton")

backButton.innerText = "\nMain Menu"

backButton.onclick = (() => {
    let url = document.URL
    url = url.substring(0, url.length - stuff.length)
    window.location.href = url
})

body.appendChild(backButton)