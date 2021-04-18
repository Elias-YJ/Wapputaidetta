function kys(event) {
  toBeDeleted = document.getElementById()
}

function printMousePos(event) {
  var grass = document.getElementById("grass-container")
/*   grass.textContent =
    "clientX: " + event.clientX +
    " - clientY: " + event.clientY; */

    var frog = document.createElement("img")
    frog.className = "frog"
    frog.src = "assets/froggo.svg"
    frog.onClick = frog.remove()
    frog.style.left = event.clientX- window.innerHeight*0.09 + "px"
    frog.style.top = event.clientY - window.innerHeight*0.58 - window.innerHeight*0.09 + "px"
    console.log("frog at", event.clientX, event.clientY- screen.height)
  grass.appendChild(frog)
}
document.getElementById("grass-container").addEventListener("click", printMousePos);