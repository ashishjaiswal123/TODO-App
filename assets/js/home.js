
let color = ["red", "orange", "green", "maroon", "blue", "violet", "#F2A700"];
let boxColor = document.querySelectorAll('.box');
document.getElementById("add-button").onclick = function(){
    let randColor = color[Math.floor(Math.random() * color.length)];
    boxColor[boxColor.length-1].style.backgroundColor = randColor;
}

