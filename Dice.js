/**
 *
 * @param {Number} x the base number being used by the `dice` function.
 */
function d(x) {
  let diceRoll = parseInt(Math.random() * x) + 1;
  return diceRoll;
}

function initDice() {
  diceSelect = document.getElementById("diceselect")
  diceAmount = document.getElementById("diceamount")
  output = document.getElementById("output")
  diceSelect.onchange = function() {
    document.getElementById("dice").innerHTML = "Roll " + diceamount.value + diceSelect.options[diceSelect.selectedIndex].text
  }
  diceamount.onchange = diceselect.onchange

  diceButton = document.getElementById("dice")
  diceButton.onclick = function() {
    outStr = "";
    diceVal = diceSelect.value;
    rollAmount = diceAmount.value;
    total = 0;
    if (diceVal != "%") {
      for (var i = 0; i < rollAmount; i++) {
        currentRoll = d(diceVal);
        total += currentRoll;
        outStr += currentRoll + "<br>";
      }
    } else {
      for (var i = 0; i < rollAmount; i++) {
        currentRoll = d(100) - 1;
        total += currentRoll;
        outStr += currentRoll + "<br>";
      }
    }
    output.innerHTML = outStr + "Total: " + total;
  }
}
