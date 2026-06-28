if(stuff != "") throw "";

let builderButton = document.createElement("div")
builderButton.classList.add("buttonMedium")

builderButton.style.top = height / 2 - tileWidth * 1.25
builderButton.style.left = width / 4 - tileWidth * 1.25

builderButton.innerText = "\nDecks"

body.appendChild(builderButton)

builderButton.onclick = (() => {
    window.location.href = document.URL + "#selector"
    window.location.reload()
})


let playButton = document.createElement("div")
playButton.classList.add("buttonLarge")

playButton.style.top = height / 2 - tileWidth * 1.5
playButton.style.left = width / 2 - tileWidth * 1.5

playButton.onclick = (() => {
    window.location.href = document.URL + "#bots"
    window.location.reload()
})

playButton.innerText = "\nBot Match"

body.appendChild(playButton)


let localPlayButton = document.createElement("div")
localPlayButton.classList.add("buttonMedium")

localPlayButton.style.top = height / 2 - tileWidth * 1.25
localPlayButton.style.left = width / 4 * 3 - tileWidth * 1.25

localPlayButton.innerText = "\nLocal Play"

localPlayButton.onclick = (() => {
    window.location.href = document.URL + "#selector-deck1"
    window.location.reload()
})

body.appendChild(localPlayButton)