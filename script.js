let boDy = document.querySelector("body")
let submitButton = document.querySelector("#submit-button")
let submitButton2 = document.querySelector("#submit-button2")

function randomColor(){
    var newColor = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    return newColor;
}

submitButton.onclick = function () {
    // var gradient = linear-gradient(righ)
    document.body.style.backgroundColor = border.color1
}

submitButton2.onclick = function () {
    document.body.style.backgroundColor = border.color2
}


const border = {
    color1: randomColor(),
    color2: "black"
}