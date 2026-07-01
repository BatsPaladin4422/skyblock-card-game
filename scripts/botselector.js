if(stuff.substring(0, 5) != "#bots") throw 0;

let x = -tileWidth;
let y = 0.40 * tileWidth;

p1stats.innerText = "Normal Bosses"

let specialBots = ["Bladesoul"]

for(bot in botDecks) {
    if(specialBots.includes(bot)) continue;
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

let title2 = document.createElement("div")
title2.innerText = "Special Bosses"
title2.style.position = "absolute"
title2.style.top = y + 1.10 * tileWidth
body.appendChild(title2)

y += 1.50 * tileWidth
x = -tileWidth

for(bot in botDecks) {
    if(!specialBots.includes(bot)) continue;
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

let title3 = document.createElement("div")
title3.innerText = "Boss Rush"
title3.style.position = "absolute"
title3.style.top = y + 1.10 * tileWidth
body.appendChild(title3)

y += 1.50 * tileWidth
x = -tileWidth

for(rush in bossRushes) {
    let duplicate = rush;
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
        url += `#selector-bot-{"boss":"${bossRushes[duplicate][0]}","rush":[`
        for(bot of bossRushes[duplicate]) {
            url += `"${bot}",`
        }
        url = url.substring(0, url.length - 1)
        url += `]}`
        window.location.href = url
        window.location.reload()
    })
}