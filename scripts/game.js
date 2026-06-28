let cardNames = {
    "bouncyArrow": "\nBouncy\nArrow",
    "flintArrow": "\nFlint\nArrow",
    "glueArrow": "\nGlue\nArrow",
    "lethality": "\nLethality",
    "pocketEspressoMachine": "Pocket\nEspresso\nMachine",
    "scavenger": "\nScavenger",
    "spiritMask": "\nSpirit\nMask",
    "steakStake": "\nSteak\nStake",
    "tacticalInsertion": "\nTactical\nInsertion",
    "wandOfHealing": "\nWand of\nHealing",
    "zombieSword": "\nZombie\nSword",
    "firstStrike": "\nFirst\nStrike",
    "scarfsStudies": "\nScarf's\nStudies",
    "witherImpact": "\nWither\nImpact",
    "darkClaymore": "\nDark\nClaymore",
    "implosion": "\nImplosion",
    "midasStaff": "\nMidas\nStaff",
    "shadowWarp": "\nShadow\nWarp",
    "witherShield": "\nWither\nShield",
    "jujuShortbow": "\nJuju\nShortbow",
    "mosquitoShortbow": "\nMosquito\nShortbow",
    "terminator": "\nTerminator",
    "skeletonHelmet": "\nSkeleton\nHelmet",
    "wardenHelmet": "\nWarden\nHelmet",
    "werewolfHelmet": "\nWerewolf\nHelmet",
    "witherGoggles": "\nWither\nGoggles",
    "atomsplitKatana": "\nAtomsplit\nKatana",
    "giantsSword": "\nGiant's\nSword",
    "lividDagger": "\nLivid\nDagger",
    "scorpionFoil": "\nScorpion\nFoil",
    "silentDeath": "\nSilent\nDeath",
    "swordOfBadHealth": "\nSword of\nBad Health",
    "valkyrie": "\nValkyrie",
    "yetiSword": "\nYeti\nSword",
    "bigBrain": "\nBig\nBrain",
    "handyBloodChalice": "Handy\nBlood\nChalice",
    "helpFromTheAbove": "\nHelp From\nthe Above",
    "manaPool": "\nMana\nPool",
    "archer": "\nArcher",
    "berserk": "\nBerserk",
    "healer": "\nHealer",
    "mage": "\nMage",
    "tank": "\nTank"
}
let cardDescriptions = {
    "null": "",
    "bouncyArrow": "If not fully blocked, return\nany card to owner's hand\n\nArrow",
    "flintArrow": "+10 damage\n\nArrow",
    "glueArrow": "If not fully blocked, attacked\nplayer skips a random phase\nof their next turn\n\nArrow",
    "lethality": "Each player discards a card\n\nConsumable",
    "pocketEspressoMachine": "+150 Mana\n\nConsumable",
    "scavenger": "Return all your discarded consumables to hand\n\nConsumable",
    "spiritMask": "Until your next turn, you\ncannot lose the game and your\n Health cannot go below 5\n\nConsumable",
    "steakStake": "If an opponent is at less than\n40 Health, this deals 1000\ndamage to them\n\nConsumable",
    "tacticalInsertion": "Take an extra turn. At the end of\n that turn, you lose the game.\n\nConsumable",
    "wandOfHealing": "Heal 40 Health\n\nConsumable",
    "zombieSword": "10D 15B\nAttacking heals for the amount\nof damage dealt\n\nConsumable Item - Weapon",
    "firstStrike": "Gain +100 ferocity at\nthe start of the game\n\nEffect",
    "scarfsStudies": "Cost: 3 Class cards\nYou may play discardedupgrade\ncards. You may play an additional\nupgrade each turn\n\nFusion Upgrade",
    "witherImpact": "Cost: Implosion, Shadow Warp,\nWither Shield\n0D 50B\n125 Mana: 30 AD, heal 20 Health\n\nFusion Item",
    "darkClaymore": "Cost: 3 Weapon cards\n35D 40B\nUpon fusing, +100 Ferocity\n\nFusion Item - Weapon",
    "implosion": "0D 10B\n125 Mana: 30 AD\n\nItem",
    "midasStaff": "0D 10B\n150 Mana: 45 AD\n\nItem",
    "shadowWarp": "0D 30B\n\nItem",
    "witherShield": "0D 15B\n120 Mana: heal 25 Health\n\nItem",
    "jujuShortbow": "20D 0B\n\nItem - Bow",
    "mosquitoShortbow": "10D 0B\nAttacking heals for the amount\nof damage dealt\n\nItem - Bow",
    "terminator": "15D 0B\nIf this attacks for the first\nor second time this turn, you\nmay have an additional Attack\nphase after this one. You may\nonly attack with Terminator during\nthat phase.\n\nBow",
    "skeletonHelmet": "On taking damage, prevent that\ndamage. Discard this card.\n\nItem - Helmet",
    "wardenHelmet": "+5 Damage\n\nItem - Helmet",
    "werewolfHelmet": "+5 Blocking to each item\nAttacking grants +25 ferocity\n\nItem - Helmet",
    "witherGoggles": "+30 Mana\n+5 Ability Damage\n\nItem - Helmet",
    "atomsplitKatana": "20D 10B\n120 Mana: +40 Ferocity\n\nItem - Weapon",
    "giantsSword": "25D 15B\n\nItem - Weapon",
    "lividDagger": "20D 15B\nDiscard this card from play: 20AD\n\nItem - Weapon",
    "scorpionFoil": "20D 30B\n\nItem - Weapon",
    "silentDeath": "20D 10B\n+15 Damage on the turn when played\n\nItem - Weapon",
    "swordOfBadHealth": "20D 10B\nYou may pay 10 Health on\nattacking. If you do, this\ngains +15 damage\n\nItem - Weapon",
    "valkyrie": "20D 20B\nOn attack: +30 Ferocity\n\nItem - Weapon",
    "yetiSword": "15D 15B\n120 Mana: 15 AD\n\nItem - Weapon",
    "bigBrain": "+50% to Helmet stats\n\nUpgrade",
    "handyBloodChalice": "At the beginning of turn,\n+15 Ferocity\n\nUpgrade",
    "helpFromTheAbove": "At the beginning of turn,\nheal 5 Health\n\nUpgrade",
    "manaPool": "+20 Mana\n\nUpgrade",
    "archer": "When 2 are equipped, at the\nstart of turn:\n•Return a discarded Arrow\n  to hand\n•Return all your Archer\n  upgrades to hand\n\nUpgrade - Class",
    "berserk": "When 2 are equipped, on attack:\n•Deal 2x Damage\n•Lose half your Health\n•Return all your Berserk\n  upgrades to hand\n\nUpgrade - Class",
    "healer": "When 2 are equipped, on healing:\n•Heal half your missing Health\n•Return all your Healer\n  upgrades to hand\n\nUpgrade - Class",
    "mage": "When 2 are equipped, on ability:\n•Copy the ability\n•Return all your Mage\n  upgrades to hand\n\nUpgrade - Class",
    "tank": "When 2 are equipped, on blocks:\n•Double all blocks\n•If fully blocked, the attacking\n  Item is discarded\n•Return all your Tank\n  upgrades to hand\n\nUpgrade - Class"
}
let fusions = ["witherImpact","darkClaymore","scarfsStudies"]

let botDecks = {
    "Livid": ["lividDagger","silentDeath","giantsSword","wardenHelmet","helpFromTheAbove","helpFromTheAbove","wandOfHealing","steakStake"]
}

let botLogic = {
    "Livid": [
        (() => {
            // main - play items, upgrades
            outer: if(selected >= 0 && itemsLeft) {
                if(hand2[selected] == "null") break outer;
                console.log(hand2[selected])
                if(hand2[selected] == "wardenHelmet") {
                    clicked(2, "helmet")
                    return;
                }

                let sdID = -1
                let minSlot = 0
                let replaceable = -1
                for(const card in items2) {
                    if(items2[card] == "silentDeath") sdID = card
                    if(card == minSlot && items2[card] != "null") minSlot++
                    if(items2[card] != "null") replaceable = card
                }

                if(hand2[selected] == "silentDeath") {
                    if(replaceable >= 0) clicked(2, `item${replaceable}`)
                    else clicked(2, "item0")
                    return;
                }
                if(sdID >= 0) {
                    clicked(2, `item${sdID}`);
                    return;
                }
                if(minSlot < 3) {
                    clicked(2, `item${minSlot}`);
                    return;
                }
            }
            if(itemsLeft) {
                let ldID = -1
                let sdID = -1
                let gsID = -1
                let whID = -1
                for(const card in hand2) {
                    if(hand2[card] == "lividDagger") ldID = card
                    if(hand2[card] == "silentDeath") sdID = card
                    if(hand2[card] == "giantsSword") gsID = card
                    if(hand2[card] == "wardenHelmet") whID = card
                }
                if(whID >= 0) {
                    selected = whID;
                    return;
                }
                if(gsID >= 0) {
                    selected = gsID;
                    return;
                }
                if(ldID >= 0) {
                    selected = ldID;
                    return;
                }
                if(sdID >= 0) {
                    selected = sdID;
                    return;
                }
            }
            if(upgradesLeft) {
                for(const card in hand2) {
                    if(hand2[card] == "helpFromTheAbove") {
                        clicked(2, `hand${card}`)
                        return;
                    }
                }
            }
            nextPhase()
        }),
        (() => {
            if(attackingItemSlot >= 0) {
                nextPhase()
                return;
            } else {
                let sdID = -1
                let gsID = -1
                let ldID = -1
                for(const card in items2) {
                    if(items2[card] == "silentDeath") sdID = card
                    if(items2[card] == "giantsSword") gsID = card
                    if(items2[card] == "lividDagger") ldID = card
                }

                if(sdID >= 0 && silentDeathBuff) {
                    clicked(2, `item${sdID}`);
                    return;
                }
                if(ldID >= 0 && (sdID || gsID)) {
                    clicked(2, `item${ldID}`);
                    return;
                }
                if(gsID >= 0) {
                    clicked(2, `item${gsID}`);
                    return;
                }
                if(ldID >= 0) {
                    clicked(2, `item${ldID}`);
                    return;
                }
                if(sdID >= 0) {
                    clicked(2, `item${sdID}`);
                    return;
                }
            }

            nextPhase()
        }),
        (() => {
            // blocks
            nextPhase()
        }),
        (() => {
            // effect - play consumables, abilities
            if(items2[attackingItemSlot] == "lividDagger") {
                for(const card in items2) {
                    if(items2[card] == "giantsSword") {
                        clicked(2, `item${attackingItemSlot}`)
                        return;
                    }
                }
            }

            if(consumablesLeft) {
                let wohID = -1;
                for(const card in hand2) {
                    if(hand2[card] == "steakStake") {
                        if(health1 < 40) {
                            clicked(2, `hand${card}`)
                            return;
                        }
                    } else if(hand2[card] == "wandOfHealing") {
                        wohID = card;
                    }
                }
                if(health2 <= 160) {
                    clicked(2, `hand${wohID}`)
                }
            }
            

            nextPhase()
        })
    ]
}

let width = visualViewport.width
let height = visualViewport.height

let tileWidth = Math.floor(Math.min(width, height) / 10)



let stuff = document.location.hash
if(stuff.substring(0, 5) != "#play") throw undefined;

let nextPhaseButton = document.createElement("div")
nextPhaseButton.classList.add("nextPhaseButton")
nextPhaseButton.ondblclick = (() => {tryNextPhase()})
body.appendChild(nextPhaseButton)

let argString = stuff.substring(6)
argString = argString.replaceAll("%22", "\"")
console.log(argString)
let args = JSON.parse(argString)

let botMatch = false
if(args.boss) botMatch = true

let itemCardStats = {
    "zombieSword": [10, 10],
    "witherImpact": [0, 50],
    "darkClaymore": [35, 40],
    "implosion": [0, 10],
    "midasStaff": [0, 10],
    "shadowWarp": [0, 30],
    "witherShield": [0, 15],
    "jujuShortbow": [20, 0],
    "mosquitoShortbow": [10, 0],
    "terminator": [15, 0],
    "atomsplitKatana": [20, 10],
    "giantsSword": [25, 15],
    "lividDagger": [20, 15],
    "scorpionFoil": [20, 30],
    "silentDeath": [20, 10],
    "swordOfBadHealth": [20, 10],
    "valkyrie": [20, 20],
    "yetiSword": [15, 15]
}
let upgradeCards = ["scarfsStudies","bigBrain","handyBloodChalice","helpFromTheAbove","manaPool","archer","berserk","healer","mage","tank"]
let helmetCards = ["skeletonHelmet","wardenHelmet","werewolfHelmet","witherGoggles"]


let health1 = 200
let health2 = 200

let fero1 = 0
let fero2 = 0

let deck1 = JSON.parse(localStorage.getItem("deck1")).cards
let deck2
if(botMatch) {
    deck2 = botDecks[args.boss]
} else {
    deck2 = JSON.parse(localStorage.getItem("deck2")).cards
}


let upgrades1 = []
let upgrades2 = []

let deckSize1 = deck1.length
let deckSize2 = deck2.length

let hand1 = []
let hand2 = []

let items1 = ["null","null","null"]
let items2 = ["null","null","null"]

let helmet1 = "null"
let helmet2 = "null"

let mana1 = 100
let mana2 = 100

let activePlayer = Math.floor(Math.random() * 2) + 1;
let phase = 1;
let firstTurn = true;

let upgradesLeft = 1;
let itemsLeft = 1;
let consumablesLeft = 1;

let selected = -1

let itemDisplays1 = []
let itemDisplays2 = []

let currentDamage = 0
let currentBlocks = 0
let damageEffects = ""
let attackingItemSlot = -1

let silentDeathBuff = false

let discard1 = []
let discard2 = []

for(let i = 0; i < 3; i++) {
    let j = i
    let ref = document.createElement("div")
    ref.classList.add("tile")
    ref.style.top = height / 2 - 2.25 * tileWidth + 1.10 * tileWidth * i
    ref.style.left = width / 3 - 0.50 * tileWidth
    ref.onclick = (() => {infoBox.innerText = cardDescriptions[items1[j]]})
    ref.ondblclick = (() => {clicked(1, `item${i}`)})

    p1board.appendChild(ref)
    itemDisplays1[itemDisplays1.length] = ref
}

let helmetDisplay1 = document.createElement("div")
helmetDisplay1.classList.add("tile")
helmetDisplay1.style.top = height / 2 + 1.25 * tileWidth
helmetDisplay1.style.left = width / 3 - 0.50 * tileWidth

helmetDisplay1.onclick = (() => {infoBox.innerText = cardDescriptions[helmet1]})
helmetDisplay1.ondblclick = (() => {clicked(1, `helmet`)})
p1board.appendChild(helmetDisplay1)

for(let i = 0; i < 3; i++) {
    let j = i
    let ref = document.createElement("div")
    ref.classList.add("tile")
    ref.style.top = height / 2 - 2.25 * tileWidth + 1.10 * tileWidth * i
    ref.style.left = width / 1.5 - 0.50 * tileWidth
    ref.onclick = (() => {infoBox.innerText = cardDescriptions[items2[j]]})
    if(!botMatch) ref.ondblclick = (() => {clicked(2, `item${i}`)})

    p2board.appendChild(ref)
    itemDisplays2[itemDisplays2.length] = ref
}

let helmetDisplay2 = document.createElement("div")
helmetDisplay2.classList.add("tile")
helmetDisplay2.style.top = height / 2 + 1.25 * tileWidth
helmetDisplay2.style.left = width / 1.5 - 0.5 * tileWidth

helmetDisplay2.onclick = (() => {infoBox.innerText = cardDescriptions[helmet2]})
helmetDisplay2.ondblclick = (() => {if(!botMatch) clicked(2, `helmet`)})
p2board.appendChild(helmetDisplay2)


function clicked(player, slot) {
    console.log(player, slot, activePlayer)
    if(phase == 3 && player != activePlayer && slot.substring(0, 4) == "item") {
        let id = Number.parseInt(slot.substring(4, 5));
        if(player == 1 && items1[id] != "null") {
            let stats = itemCardStats[items1[id]]
            currentBlocks += stats[1]
            if(helmet1 == "werewolfHelmet") currentBlocks += 5
            attackInfo.innerText = `Damage: ${currentDamage}\nUsing: ${cardNames[activePlayer == 1 ? items1[attackingItemSlot] : items2[attackingItemSlot]]}\nBlocks: ${currentBlocks}`

            items1[id] = "null"
            itemDisplays1[id].innerText = ""
        } else if(items2[id] != "null") {
            let stats = itemCardStats[items2[id]]
            currentBlocks += stats[1]
            if(helmet2 == "werewolfHelmet") currentBlocks += 5
            attackInfo.innerText = `Damage: ${currentDamage}\nUsing: ${cardNames[activePlayer == 1 ? items1[attackingItemSlot] : items2[attackingItemSlot]]}\nBlocks: ${currentBlocks}`

            items2[id] = "null"
            itemDisplays2[id].innerText = ""
        }
    }
    if(player == 1 && activePlayer == 1) {
        if(phase == 1) {
            if(slot.substring(0, 4) == "hand") {
                let id = Number.parseInt(slot.substring(4, 5));
                if(selected == id) selected = -1;
                else selected = id
                if(upgradesLeft <= 0) return;
                if(upgradeCards.includes(hand1[id])) {
                    upgrades1[upgrades1.length] = hand1[id]
                    hand1[id] = "null"
                    upgradesLeft--
                    displayUpgrades(1)
                    displayHand(1)
                }
            }
            if(slot.substring(0, 4) == "item") {
                let id = Number.parseInt(slot.substring(4, 5));
                if(selected != -1 && itemCardStats[hand1[selected]]) {
                    if(itemsLeft <= 0) return;
                    let item = hand1[selected]
                    hand1[selected] = items1[id]
                    items1[id] = item;
                    if(item == "silentDeath") silentDeathBuff = true
                    selected = -1
                    itemDisplays1[id].innerText = cardNames[items1[id]]
                    itemsLeft--;
                    displayHand(1)
                }
            }
            if(slot == "helmet") {
                let id = Number.parseInt(slot.substring(4, 5));
                if(selected != -1 && helmetCards.includes(hand1[selected])) {
                    if(itemsLeft <= 0) return;
                    let swap = helmet1
                    helmet1 = hand1[selected]
                    hand1[selected] = swap;
                    selected = -1
                    helmetDisplay1.innerText = cardNames[helmet1]
                    itemsLeft--;
                    displayHand(1)
                }
            }
        }
        if(phase == 2) {
            if(slot.substring(0, 4) == "item") {
                let id = Number.parseInt(slot.substring(4, 5));
                if(items1[id] != "null") {
                    let stats = itemCardStats[items1[id]]
                    currentDamage = stats[0]
                    if(helmet1 == "wardenHelmet") currentDamage += 5
                    if(silentDeathBuff) currentDamage += 15
                    damageEffects = ""
                    attackingItemSlot = id
                    if(items1[id] == "zombieSword") damageEffects = "heal"
                    attackInfo.innerText = `Damage: ${currentDamage}\nUsing: ${cardNames[activePlayer == 1 ? items1[attackingItemSlot] : items2[attackingItemSlot]]}`
                }
            }
        }
        if(phase == 4) {
            if(slot.substring(0, 4) == "hand") {
                if(consumablesLeft <= 0) return;
                let id = Number.parseInt(slot.substring(4, 5));
                let item = hand1[id]
                if(item == "zombieSword") {
                    damage(1, -Math.max(0, currentDamage - currentBlocks))
                    consumablesLeft--
                    hand1[id] = "null"
                    displayHand(1)
                }
                if(item == "wandOfHealing") {
                    damage(1, -40)
                    consumablesLeft--
                    hand1[id] = "null"
                    displayHand(1)
                }
                if(item == "steakStake") {
                    if(health2 < 40) damage(2, 1000)
                    consumablesLeft--
                    hand1[id] = "null"
                    displayHand(1)
                }
                if(item == "pocketEspressoMachine") {
                    mana1 += 150
                    consumablesLeft--
                    hand1[id] = "null"
                    displayHand(1)
                    updateStats(1)
                }
                if(item == "lethality") {
                    consumablesLeft--
                }
            }
            if(slot.substring(0, 4) == "item") {
                let id = Number.parseInt(slot.substring(4, 5));
                if(items1[id] != "null" && attackingItemSlot == id) {
                    let item = items1[id]
                    let damageModifier = helmet1 == "witherGoggles" ? 5 : 0
                    
                    if(item == "witherImpact") ability(1, 125, (() => {damage(1, -20), damage(2, 30 + damageModifier)}))
                    if(item == "implosion") ability(1, 125, (() => {damage(2, 30 + damageModifier)}))
                    if(item == "midasStaff") ability(1, 150, (() => {damage(2, 45 + damageModifier)}))
                    if(item == "witherShield") ability(1, 120, (() => {damage(1, -25)}))
                    if(item == "yetiSword") ability(1, 120, (() => {damage(2, 15 + damageModifier)}))
                    if(item == "atomsplitKatana") ability(1, 120, (() => {fero1 += 40}))
                    if(item == "lividDagger") {
                        ability(1, 0, (() => {damage(2, 20 + damageModifier)}))
                        items1[id] = "null"
                        itemDisplays1[id].innerText = ""
                    }
                }
            }
        }
    } else if(player == 2 && activePlayer == 2) {
        if(phase == 1) {
            if(slot.substring(0, 4) == "hand") {
                let id = Number.parseInt(slot.substring(4, 5));
                if(selected == id) selected = -1;
                else selected = id
                if(upgradesLeft <= 0) return;
                if(upgradeCards.includes(hand2[id])) {
                console.log(hand2[id])
                    upgrades2[upgrades2.length] = hand2[id]
                    hand2[id] = "null"
                    upgradesLeft--
                    displayUpgrades(2)
                    displayHand(2)
                }
            }
            if(slot.substring(0, 4) == "item") {
                let id = Number.parseInt(slot.substring(4, 5));
                if(selected != -1 && itemCardStats[hand2[selected]]) {
                    if(itemsLeft <= 0) return;
                    let item = hand2[selected]
                    hand2[selected] = items2[id]
                    items2[id] = item;
                    if(item == "silentDeath") silentDeathBuff = true
                    selected = -1
                    itemDisplays2[id].innerText = cardNames[items2[id]]
                    itemsLeft--;
                    displayHand(2)
                }
            }
            if(slot == "helmet") {
                let id = Number.parseInt(slot.substring(4, 5));
                if(selected != -1 && helmetCards.includes(hand2[selected])) {
                    if(itemsLeft <= 0) return;
                    let swap = helmet2
                    helmet2 = hand2[selected]
                    hand2[selected] = swap;
                    selected = -1
                    helmetDisplay2.innerText = cardNames[helmet2]
                    itemsLeft--;
                    displayHand(2)
                }
            }
        }
        if(phase == 2) {
            if(slot.substring(0, 4) == "item") {
                let id = Number.parseInt(slot.substring(4, 5));
                if(items2[id] != "null") {
                    let stats = itemCardStats[items2[id]]
                    currentDamage = stats[0]
                    if(helmet2 == "wardenHelmet") currentDamage += 5
                    if(silentDeathBuff) currentDamage += 15
                    damageEffects = ""
                    attackingItemSlot = id
                    if(items2[id] == "zombieSword") damageEffects = "heal"
                    attackInfo.innerText = `Damage: ${currentDamage}\nUsing: ${cardNames[activePlayer == 1 ? items1[attackingItemSlot] : items2[attackingItemSlot]]}`
                }
            }
        }
        if(phase == 4) {
            if(slot.substring(0, 4) == "hand") {
                if(consumablesLeft <= 0) return;
                let id = Number.parseInt(slot.substring(4, 5));
                let item = hand2[id]
                if(item == "zombieSword") {
                    damage(2, -Math.max(0, currentDamage - currentBlocks))
                    consumablesLeft--
                    hand2[id] = "null"
                    displayHand(2)
                }
                if(item == "wandOfHealing") {
                    damage(2, -40)
                    consumablesLeft--
                    hand2[id] = "null"
                    displayHand(2)
                }
                if(item == "steakStake") {
                    if(health1 < 40) damage(1, 1000)
                    consumablesLeft--
                    hand2[id] = "null"
                    displayHand(2)
                }
                if(item == "pocketEspressoMachine") {
                    mana2 += 150
                    consumablesLeft--
                    hand2[id] = "null"
                    displayHand(2)
                    updateStats(2)
                }
                if(item == "lethality") {
                    consumablesLeft--
                }
            }
            if(slot.substring(0, 4) == "item") {
                let id = Number.parseInt(slot.substring(4, 5));
                if(items2[id] != "null" && attackingItemSlot == id) {
                    let item = items2[id]
                    let damageModifier = helmet2 == "witherGoggles" ? 5 : 0
                    
                    if(item == "witherImpact") ability(2, 125, (() => {damage(2, -20), damage(1, 30 + damageModifier)}))
                    if(item == "implosion") ability(2, 125, (() => {damage(1, 30 + damageModifier)}))
                    if(item == "midasStaff") ability(2, 150, (() => {damage(1, 45 + damageModifier)}))
                    if(item == "witherShield") ability(2, 120, (() => {damage(2, -25)}))
                    if(item == "yetiSword") ability(2, 120, (() => {damage(1, 15 + damageModifier)}))
                    if(item == "atomsplitKatana") ability(2, 120, (() => {fero2 += 40}))
                    if(item == "lividDagger") {
                        ability(2, 0, (() => {damage(1, 20 + damageModifier)}))
                        items2[id] = "null"
                        itemDisplays2[id].innerText = ""
                    }
                }
            }
        }
    }
}

function ability(player, manaRequirement, effect) {
    if(player == 1) {
        if(mana1 < manaRequirement) return;
        let mageUpgrades = 0;
        for(upgrade of upgrades1) {
            if(upgrade == "mage") mageUpgrades++
        }
        for(let i = 0; i < upgrades1.length; i++) {
            upgrade = upgrades1[i]
            if(mageUpgrades == 2 && upgrade == "mage") {
                upgrades1[i] = "null"
                hand1[hand1.length] = "mage"
            }
            displayHand(1)
            displayUpgrades(1)
        }
        mana1 -= manaRequirement
        if(mageUpgrades >= 2) {
            effect()
        }
        effect()
        updateStats(1)
    } else {
        if(mana2 < manaRequirement) return;
        let mageUpgrades = 0;
        for(upgrade of upgrades2) {
            if(upgrade == "mage") mageUpgrades++
        }
        for(let i = 0; i < upgrades2.length; i++) {
            upgrade = upgrades2[i]
            if(mageUpgrades == 2 && upgrade == "mage") {
                upgrades2[i] = "null"
                hand2[hand2.length] = "mage"
            }
            displayHand(2)
            displayUpgrades(2)
        }
        mana2 -= manaRequirement
        if(mageUpgrades >= 2) {
            effect()
        }
        effect()
        updateStats(2)
    }
}

function updateStats(player) {
    if(player == 1) {
        p1stats.innerText = `Health: ${health1} / 200\nFerocity: ${fero1} / 100\nMana: ${mana1}`
    } else {
        p2stats.innerText = `Health: ${health2} / 200\nFerocity: ${fero2} / 100\nMana: ${mana2}`
    }
}

function displayHand(player) {
    if(player == 1) {
        let displays = document.getElementsByClassName("p1hand")
        let len = displays.length
        for(let i = 0; i < len; i++) {
            displays.item(0).remove()
        }
        let y = 0.8 * tileWidth
        for(let i = 0; i < hand1.length; i++) {
            let index = i;
            let card = hand1[i];
            if(card == "null") continue;
            let ref = document.createElement("div")
            ref.innerText = cardNames[card]
            ref.style.top = y;
            ref.style.left = 0.1 * tileWidth
            y += 1.10 * tileWidth
            ref.classList.add("tile")
            ref.classList.add("p1hand")
            ref.onclick = (() => {infoBox.innerText = cardDescriptions[card];})
            ref.ondblclick = (() => {clicked(1, `hand${index}`)})
            p1board.appendChild(ref)
        }
    } else if(player == 2) {
        let displays = document.getElementsByClassName("p2hand")
        let len = displays.length
        for(let i = 0; i < len; i++) {
            displays.item(0).remove()
        }
        let y = 0.8 * tileWidth
        for(let i = 0; i < hand2.length; i++) {
            let index = i
            let card = hand2[i]
            if(card == "null") continue;
            let ref = document.createElement("div")
            ref.innerText = (botMatch ? "\n???" : cardNames[card])
            ref.style.top = y;
            ref.style.left = width - 1.10 * tileWidth
            y += 1.10 * tileWidth
            ref.classList.add("tile")
            ref.classList.add("p2hand")
            ref.onclick = (() => {infoBox.innerText = cardDescriptions[card];})
            ref.ondblclick = (() => {if(!botMatch) clicked(2, `hand${index}`)})
            p2board.appendChild(ref)
        }
    }
}

function displayUpgrades(player) {
    if(player == 1) {
        let displays = document.getElementsByClassName("p1upg")
        let len = displays.length
        for(let i = 0; i < len; i++) {
            displays.item(0).remove()
        }
        let y = 0.80 * tileWidth
        for(let i = 0; i < upgrades1.length; i++) {
            let index = i;
            let card = upgrades1[i];
            if(card == "null") continue;
            let ref = document.createElement("div")
            ref.innerText = cardNames[card]
            ref.style.top = y;
            ref.style.left = 1.40 * tileWidth
            y += 1.10 * tileWidth
            ref.classList.add("tile")
            ref.classList.add("p1upg")
            ref.onclick = (() => {infoBox.innerText = cardDescriptions[card];})
            p1board.appendChild(ref)
        }
    } else if(player == 2) {
        let displays = document.getElementsByClassName("p2upg")
        let len = displays.length
        for(let i = 0; i < len; i++) {
            displays.item(0).remove()
        }
        let y = 0.80 * tileWidth
        for(let i = 0; i < upgrades2.length; i++) {
            let index = i;
            let card = upgrades2[i];
            if(card == "null") continue;
            let ref = document.createElement("div")
            ref.innerText = cardNames[card]
            ref.style.top = y;
            ref.style.left = width - 2.40 * tileWidth
            y += 1.10 * tileWidth
            ref.classList.add("tile")
            ref.classList.add("p2upg")
            ref.onclick = (() => {infoBox.innerText = cardDescriptions[card];})
            p1board.appendChild(ref)
        }
    }
}

function damage(player, amount) {
    if(player == 1) {
        if(amount <= 0) {
            health1 -= amount
            if(health1 >= 200) health1 = 200
        } else {
            if(helmet1 == "skeletonHelmet") {
                helmet1 = "null"
                helmetDisplay1.innerText = ""
                discard1[discard1.length] = "skeletonHelmet"
                return;
            }
            health1 -= amount
        }
        updateStats(1)
    } else {
        if(amount <= 0) {
            health2 -= amount
            if(health2 >= 200) health2 = 200
        } else {
            if(helmet2 == "skeletonHelmet") {
                helmet2 = "null"
                helmetDisplay2.innerText = ""
                discard2[discard2.length] = "skeletonHelmet"
                return;
            }
            health2 -= amount
        }
        updateStats(2)
    }
}

function draw(player) {
    if(player == 1) {
        if(deckSize1 <= 0) {
            deckSize1--;
            damage(1, deckSize1 * -5)
        }
        let id = Math.floor(Math.random() * deckSize1);
        let current = 0;
        for(let i = 0; i < deck1.length; i++) {
            let card = deck1[i]
            if(card == "null") continue;
            if(current == id) {
                hand1[hand1.length] = card;
                deck1[i] = "null"
                deckSize1--
                displayHand(1)
                return;
            } else current++;
        }
    } else if (player == 2) {
        if(deckSize2 <= 0) {
            deckSize2--;
            damage(2, deckSize2 * -5)
        }
        let id = Math.floor(Math.random() * deckSize2);
        let current = 0;
        for(let i = 0; i < deck2.length; i++) {
            let card = deck2[i]
            if(card == "null") continue;
            if(current == id) {
                hand2[hand2.length] = card;
                deck2[i] = "null"
                deckSize2--
                displayHand(2)
                return;
            } else current++;
        }
    }
}

function nextPhase() {
    phase++;
    if(firstTurn) phase = 5;
    if(phase == 1) {
        itemsLeft = 1;
        upgradesLeft = 1;
        consumablesLeft = 1;
        selected = -1;
    }
    if(phase == 2) {
        damageEffects = ""
        attackingItemSlot = -1
        currentDamage = 0
        attackInfo.innerText = `Damage: ${currentDamage}`
    }
    if(phase == 3) {
        if(currentDamage != 0) {
            if(helmet1 == "werewolfHelmet" && activePlayer == 1) fero1 += 25
            if(helmet2 == "werewolfHelmet" && activePlayer == 2) fero2 += 25
            if(items1[attackingItemSlot] == "valkyrie" && activePlayer == 1) fero1 += 30
            if(items2[attackingItemSlot] == "valkyrie" && activePlayer == 2) fero2 += 30
            if(fero1 >= 100 && activePlayer == 1) {
                fero1 -= 100
                currentDamage *= 2
            }
            if(fero2 >= 100 && activePlayer == 2) {
                fero2 -= 100
                currentDamage *= 2
            }
            let berserkUpgrades = 0;
            if(activePlayer == 1) {
                for(upgrade of upgrades1) {
                    if(upgrade == "berserk") berserkUpgrades++
                }
                for(let i = 0; i < upgrades1.length; i++) {
                    upgrade = upgrades1[i]
                    if(berserkUpgrades == 2 && upgrade == "berserk") {
                        upgrades1[i] = "null"
                        hand1[hand1.length] = "berserk"
                        displayHand(1)
                        displayUpgrades(1)
                    }
                }
            } else {
                for(upgrade of upgrades2) {
                    if(upgrade == "berserk") berserkUpgrades++
                }
                for(let i = 0; i < upgrades2.length; i++) {
                    upgrade = upgrades2[i]
                    if(berserkUpgrades == 2 && upgrade == "berserk") {
                        upgrades2[i] = "null"
                        hand2[hand2.length] = "berserk"
                        displayHand(2)
                        displayUpgrades(2)
                    }
                }
            }
            if(berserkUpgrades == 2) {
                currentDamage *= 2
                if(activePlayer == 1) damage(1, 5 * Math.floor(health1 / 10))
                if(activePlayer == 2) damage(2, 5 * Math.floor(health2 / 10))
            }
        }
        
        updateStats(1)
        updateStats(2)
        currentBlocks = 0
        attackInfo.innerText = `Damage: ${currentDamage}\nUsing: ${cardNames[activePlayer == 1 ? items1[attackingItemSlot] : items2[attackingItemSlot]]}\nBlocks: ${currentBlocks}`
    }
    if(phase == 4) {
        damage(3 - activePlayer, Math.max(0, currentDamage - currentBlocks))
        silentDeathBuff = false
        if(damageEffects == "heal") damage(activePlayer, -Math.max(0, currentDamage - currentBlocks))
        attackInfo.innerText = ``
    }
    if(phase == 5) {
        firstTurn = false;
        activePlayer = 3 - activePlayer
        phase = 0
        if(activePlayer == 1) {
            mana1 = 100
            if(helmet1 == "witherGoggles") mana1 += 30;
            for(upgrade of upgrades1) {
                if(upgrade == "helpFromTheAbove") damage(1, -5)
                if(upgrade == "handyBloodChalice") fero1 += 15
                if(upgrade == "manaPool") mana1 += 20
            }
            updateStats(1)
        } else {
            mana2 = 100
            if(helmet2 == "witherGoggles") mana2 += 30;
            for(upgrade of upgrades2) {
                if(upgrade == "helpFromTheAbove") damage(2, -5)
                if(upgrade == "handyBloodChalice") fero2 += 15
                if(upgrade == "manaPool") mana2 += 20
            }
            updateStats(2)
        }
        draw(activePlayer)
        nextPhase()
    }
    nextPhaseButton.innerText = `Next Phase\nCurrently ${phase}\nActive Player: ${activePlayer}`
}

function tryNextPhase() {
    if(!botMatch) nextPhase()
    else {
        let effectiveActivePlayer = phase == 3 ? 3 - activePlayer : activePlayer
        if(effectiveActivePlayer == 1) nextPhase()
    }
}

setInterval(() => {
    let effectiveActivePlayer = phase == 3 ? 3 - activePlayer : activePlayer
    if(botMatch && effectiveActivePlayer == 2) {
        if(phase == 4) {
            botLogic[args.boss][3]()
            return;
        }
        if(phase == 3) {
            botLogic[args.boss][2]()
            return;
        }
        if(phase == 2) {
            botLogic[args.boss][1]()
            return;
        }
        if(phase == 1) {
            botLogic[args.boss][0]()
            return;
        }
    }
}, 1000)

nextPhaseButton.innerText = `Next Phase\nCurrently ${phase}\nActive Player: ${activePlayer}`

updateStats(1)
updateStats(2)
draw(1)
draw(1)
draw(1)
draw(2)
draw(2)
draw(2)