function printMousePos(event) {
  var grass = document.getElementById("grass-container")
    var previousFrogs = document.getElementsByClassName("frog")
    var frog = document.createElement("img")
    frog.className = "frog"
    frog.id = "frog-"+previousFrogs.length
    frog.src = "assets/froggo.svg"
    frog.onClick = frog.remove()
    frog.style.left = event.clientX- window.innerHeight*0.09 + "px"
    frog.style.top = event.clientY - window.innerHeight*0.58 - window.innerHeight*0.09 + "px"
    setTimeout(() => {
      var rip = document.getElementById(frog.id)
      rip.remove()
    }, 10000)
  grass.appendChild(frog)
}
document.getElementById("grass-container").addEventListener("click", printMousePos);