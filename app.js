const buttonEl = document.getElementById("roll");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
//create a history list as an empty array
let historyList = [];

function rollDice() {
  //create a random number
  const rollResult = Math.floor(Math.random() * 6) + 1;
  //based on the random number create the fction to change the dice face
  const diceFace = getDiceFace(rollResult);
  // based on the new func we created we now change the dice face
  diceEl.innerHTML = diceFace;
  //update the history list and add the roll result
  historyList.push(rollResult);
  //create the function
  updateRollHistory();
}

function updateRollHistory() {
  //first start with an empty one
  rollHistoryEl.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    //create a new list item element
    const listItem = document.createElement("li");
    //change the list item with the new face from the historylist and show it the span
    listItem.innerHTML = `Roll ${i + 1}:<span>${getDiceFace(
      historyList[i]
    )}</span>`;
    //add it to the roll history
    rollHistoryEl.appendChild(listItem);
  }
}
function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856";
    case 2:
      return "&#9857";
    case 3:
      return "&#9858";
    case 4:
      return "&#9859";
    case 5:
      return "&#9860";
    case 6:
      return "&#9861";
    default:
      return "";
  }
}
buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
