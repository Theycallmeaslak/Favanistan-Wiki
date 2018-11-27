/**
 * Toggles the map element. Uses a ternary operator for ease of use.
 */
function expandMap() {
  let map = document.getElementById("valisiamap");

  return map.style.display == "none"
    ? (map.style.display = "block")
    : (map.style.display = "none");
}
