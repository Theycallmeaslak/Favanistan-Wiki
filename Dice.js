/**
 *
 * @param {Number} x the base number being used by the `dice` function.
 */
function dice(x) {
  let diceRoll = parseInt(Math.random() * x) + 1;
  document.getElementById("output").innerHTML = diceRoll;
  return diceRoll;
}
