if(stuff.substring(0, 5) != "#bots") throw 0;

let x = -tileWidth;
let y = 0.20 * tileWidth;

for(bot in botDecks) {
    let duplicate = bot;
    let ref = document.createElement("div")
    x += 1.10 * tileWidth
    if(x + tileWidth > width) {
        x = 0.1 * tileWidth
        y += 1.10 * tileWidth
    }
    ref.classList.add("tile")
    ref.innerText = `${duplicate}`
    ref.style.top = y
    ref.style.left = x
    body.appendChild(ref)

    ref.onclick = (() => {
        let url = document.URL
        url = url.substring(0, url.length - stuff.length)
        window.location.href = url + `#selector-bot-{"boss":"${duplicate}"}`
        window.location.reload()
    })
}