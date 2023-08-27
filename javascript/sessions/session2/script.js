var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
    console.log("Clicked!");
});

button.addEventListener("mouseenter", function() {
    console.log("Mouse Entered, waiting for something!");
});

button.addEventListener("mouseleave", function() {
    console.log("Mouse Left!");
});