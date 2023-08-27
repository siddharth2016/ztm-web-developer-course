var colorName = document.querySelector("h3");
var colorInput1 = document.getElementsByClassName("color1")[0];
var colorInput2 = document.getElementsByClassName("color2")[0];
var gradientBody = document.getElementsByTagName("body")[0];

function changeColor() {
	gradientBody.style.background = "linear-gradient(to right, " + colorInput1.value + ", " + colorInput2.value + ")";
	colorName.textContent = "linear-gradient(to right, " + colorInput1.value + ", " + colorInput2.value + ");";
}

colorInput1.addEventListener("input", changeColor);
colorInput2.addEventListener("input", changeColor);