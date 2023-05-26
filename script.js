const button = document.querySelector("#roll")
const dice = document.querySelector("#dice")
const rollHistory = document.querySelector("#roll-history")

let historyList = []


const getDiceFace = (rollResult) => {
    switch (rollResult) {
        case 1:
            return "&#9856"
        case 2:
            return "&#9857"
        case 3:
            return "&#9858"
        case 4:
            return "&#9859"
        case 5:
            return "&#9860"
        case 6:
            return "&#9861"
        default:
            return ""
    }
}

const updateRollHistory = () => {
    rollHistory.innerHTML = "";
    historyList.forEach((roll, index) => {
        const li = document.createElement("li");
        li.innerHTML = `Roll ${index + 1}:<span>${getDiceFace(roll)}</span>`;
        rollHistory.appendChild(li);
    })
}

const rollDice = () => {
    const rollResult = Math.floor(Math.random() * 6) + 1
    const diceFace = getDiceFace(rollResult)
    dice.innerHTML = diceFace
    historyList.push(rollResult)
    updateRollHistory()
}

button.addEventListener("click", () => {
    dice.classList.add("roll-animation")
    setTimeout(() => {
        dice.classList.remove("roll-animation")
        rollDice()
    }, 1000)
})