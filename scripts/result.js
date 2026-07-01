if(stuff.substring(0, 7) != "#result") throw false;

infoBox.innerText = stuff.substring(8).replaceAll("%20", " ").replaceAll(",", "\n")

{
    let backButton = document.createElement("div")

    backButton.classList.add("saveDeckButton")

    backButton.innerText = "\nMain Menu"

    backButton.onclick = (() => {
        let url = document.URL
        url = url.substring(0, url.length - stuff.length)
        window.location.href = url
    })

    body.appendChild(backButton)
}