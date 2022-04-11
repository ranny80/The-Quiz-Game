const loaded = "Game succesfully loaded";

// Notice that the game has been loaded
console.log(loaded);

// Clicking the start button when it's loaded
function clickStart() {
    const buttonClick = document.getElementById("startButton");
    buttonClick.innerHTML = "<center>Coming Soon!</center>";	
}
